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

try:
    import resend
except Exception:
    resend = None

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="PROJECT 7 FIGURE API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

RECIPIENT_EMAIL = "the7figure.careers@gmail.com"
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "").strip()
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev").strip()

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

@api_router.get("/health")
async def health():
    return {"status": "healthy", "email_configured": bool(RESEND_API_KEY)}

@api_router.post("/applications", response_model=Application)
async def create_application(payload: ApplicationCreate):
    app_obj = Application(**payload.model_dump(), email_sent=False)
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
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)