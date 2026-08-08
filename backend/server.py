from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Optional Resend (loaded only if key present)
try:
    import resend  # type: ignore
except Exception:  # pragma: no cover
    resend = None

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="PROJECT 7 FIGURE API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

RECIPIENT_EMAIL = "the7figure.careers@gmail.com"
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "").strip()
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev").strip()


# --- Models ---
class ApplicationCreate(BaseModel):
    full_name: str = Field(..., min_length=1, max_length=120)
    contact_number: str = Field(..., min_length=4, max_length=30)
    native_state: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    degree: str = Field(..., min_length=1, max_length=120)
    graduation_year: str = Field(..., min_length=2, max_length=10)
    current_company: str = Field(..., min_length=1, max_length=120)
    current_ctc: str = Field(..., min_length=1, max_length=60)
    current_role: str = Field(..., min_length=1, max_length=120)
    total_experience: str = Field(..., min_length=1, max_length=30)
    notice_period: str = Field(..., min_length=1, max_length=60)
    career_gap: Optional[str] = Field(default="", max_length=500)


class Application(BaseModel):
    """Response model — permissive to tolerate legacy documents."""
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str = ""
    contact_number: str = ""
    native_state: str = ""
    email: str = ""
    degree: str = ""
    graduation_year: str = ""
    current_company: str = ""
    current_ctc: str = ""
    current_role: str = ""
    total_experience: str = ""
    notice_period: str = ""
    career_gap: Optional[str] = ""
    submitted_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False


def _build_email_html(app_data: ApplicationCreate) -> str:
    rows = [
        ("Full Name", app_data.full_name),
        ("Contact Number", app_data.contact_number),
        ("Native / State", app_data.native_state),
        ("Email", app_data.email),
        ("Degree & Graduation Year", f"{app_data.degree} — {app_data.graduation_year}"),
        ("Current Company", app_data.current_company),
        ("Current CTC", app_data.current_ctc),
        ("Current Role / Domain", app_data.current_role),
        ("Total Experience", app_data.total_experience),
        ("Notice Period", app_data.notice_period),
        ("Career Gap", app_data.career_gap or "—"),
    ]
    row_html = "".join(
        f'<tr><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;font-size:13px;color:#6b7280;letter-spacing:1px;text-transform:uppercase;width:200px;">{k}</td>'
        f'<td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;font-size:15px;color:#111827;">{v}</td></tr>'
        for k, v in rows
    )
    return f"""
    <div style="background:#0a0a0a;padding:40px 20px;font-family:Arial,sans-serif;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center"
             style="background:#ffffff;border:1px solid #111827;max-width:600px;width:100%;">
        <tr><td style="padding:32px;border-bottom:1px solid #111827;">
          <div style="font-family:Georgia,serif;font-size:12px;color:#6b7280;letter-spacing:3px;text-transform:uppercase;">GR Networks</div>
          <div style="font-family:Georgia,serif;font-size:28px;color:#0a0a0a;margin-top:8px;letter-spacing:1px;">New Application — Project 7 Figure</div>
        </td></tr>
        <tr><td style="padding:0;"><table width="100%" cellpadding="0" cellspacing="0">{row_html}</table></td></tr>
        <tr><td style="padding:24px 32px;background:#0a0a0a;color:#9ca3af;font-family:Arial,sans-serif;font-size:12px;">
          Submitted via project7figure.gr-networks.com
        </td></tr>
      </table>
    </div>
    """


async def _send_email_async(app_data: ApplicationCreate) -> bool:
    if not RESEND_API_KEY or resend is None:
        logger.info("Resend not configured — skipping email send (submission stored in DB).")
        return False
    try:
        resend.api_key = RESEND_API_KEY
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "reply_to": app_data.email,
            "subject": f"[Project 7 Figure] New Application — {app_data.full_name}",
            "html": _build_email_html(app_data),
        }
        await asyncio.to_thread(resend.Emails.send, params)
        return True
    except Exception as e:
        logger.error(f"Resend send failed: {e}")
        return False


# --- Routes ---
@api_router.get("/")
async def root():
    return {"service": "PROJECT 7 FIGURE", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "email_configured": bool(RESEND_API_KEY)}


@api_router.post("/applications", response_model=Application)
async def create_application(payload: ApplicationCreate):
    email_sent = await _send_email_async(payload)
    app_obj = Application(**payload.model_dump(), email_sent=email_sent)

    doc = app_obj.model_dump()
    doc["submitted_at"] = doc["submitted_at"].isoformat()
    try:
        await db.applications.insert_one(doc)
    except Exception as e:
        logger.error(f"DB insert failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to save application")
    return app_obj


@api_router.get("/applications", response_model=List[Application])
async def list_applications(limit: int = 50):
    docs = await db.applications.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get("submitted_at"), str):
            d["submitted_at"] = datetime.fromisoformat(d["submitted_at"])
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
