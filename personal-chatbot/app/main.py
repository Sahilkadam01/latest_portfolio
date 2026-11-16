
import logging
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

from app.chatbot import generate_answer

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Sahil Kumar Portfolio Chatbot",
    description="AI-powered portfolio assistant using Gemini",
    version="1.0.0"
)


# CORS CONFIGURATION

frontend_origin = os.getenv(
    "FRONTEND_ORIGIN",
    "https://sahil-kadam.vercel.app"
)

allowed_origins = [
    origin.strip().rstrip("/")
    for origin in frontend_origin.split(",")
    if origin.strip()
]

logger.info("Allowed CORS origins: %s", allowed_origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)



class ChatRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=1,
        max_length=1000
    )


@app.get("/")
def home():
    return {
        "message": "Sahil Kumar Portfolio Chatbot API is running"
    }


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/chat")
def chat(request: ChatRequest):

    message = request.message.strip()

    if not message:
        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty"
        )

    try:
        answer = generate_answer(message)

        return {"reply": answer}

    except Exception:
        logger.exception("Chatbot generation failed")

        raise HTTPException(
            status_code=502,
            detail="Unable to generate a response. Check backend terminal logs."
        )
