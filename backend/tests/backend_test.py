"""
Backend API tests for Project 7 Figure — GR Networks placement program.
Covers: /api/health, POST /api/applications, GET /api/applications
Validation: missing native_state, invalid email, contact_number too short
Persistence: create -> list (GET) verification
"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # fallback to reading frontend/.env
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break

assert BASE_URL, "REACT_APP_BACKEND_URL must be defined"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def _valid_payload(marker: str = "TEST_") -> dict:
    return {
        "full_name": f"{marker}Ravi Kumar",
        "contact_number": "+919876543210",
        "native_state": "Karnataka",
        "email": f"{marker.lower()}ravi@example.com",
        "degree": "B.E. Computer Science",
        "graduation_year": "2020",
        "current_company": "TCS",
        "current_ctc": "8 LPA",
        "current_role": "Software Engineer",
        "total_experience": "4 years",
        "notice_period": "30 days",
        "career_gap": "",
    }


# --- Health endpoint ---
class TestHealth:
    def test_health_ok(self, api_client):
        r = api_client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "healthy"
        assert "email_configured" in data
        assert isinstance(data["email_configured"], bool)


# --- Application creation & persistence ---
class TestApplicationCreate:
    created_id = None

    def test_create_valid_application(self, api_client):
        payload = _valid_payload("TEST_CREATE_")
        r = api_client.post(f"{API}/applications", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "submitted_at" in data and data["submitted_at"]
        assert "email_sent" in data and isinstance(data["email_sent"], bool)
        # Ensure email_sent is False since RESEND_API_KEY is not configured
        assert data["email_sent"] is False
        # Data assertions
        for k, v in payload.items():
            assert data[k] == v, f"Mismatch on {k}: {data[k]} != {v}"
        TestApplicationCreate.created_id = data["id"]

    def test_persisted_in_mongo_via_list(self, api_client):
        assert TestApplicationCreate.created_id, "prior create must succeed"
        r = api_client.get(f"{API}/applications?limit=100", timeout=20)
        assert r.status_code == 200, r.text
        items = r.json()
        assert isinstance(items, list)
        ids = [it.get("id") for it in items]
        assert TestApplicationCreate.created_id in ids, "created application not found in GET list"


# --- Validation errors (422) ---
class TestValidation:
    def test_missing_native_state(self, api_client):
        p = _valid_payload("TEST_MISS_NS_")
        p.pop("native_state")
        r = api_client.post(f"{API}/applications", json=p, timeout=15)
        assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"

    def test_invalid_email(self, api_client):
        p = _valid_payload("TEST_BAD_EMAIL_")
        p["email"] = "not-an-email"
        r = api_client.post(f"{API}/applications", json=p, timeout=15)
        assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"

    def test_contact_number_too_short(self, api_client):
        p = _valid_payload("TEST_SHORT_PHONE_")
        p["contact_number"] = "12"  # < 4 chars
        r = api_client.post(f"{API}/applications", json=p, timeout=15)
        assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"


# --- Optional field: career_gap can be empty/omitted ---
class TestOptionalField:
    def test_omit_career_gap(self, api_client):
        p = _valid_payload("TEST_NO_GAP_")
        p.pop("career_gap")
        r = api_client.post(f"{API}/applications", json=p, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("career_gap", "") == ""
