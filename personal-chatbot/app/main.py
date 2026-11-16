
import os

from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.chatbot import generate_answer


# Load environment variables
BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR / ".env")


# Initialize FastAPI
app = FastAPI(
    title="Sahil Kumar Portfolio Chatbot",
    description="AI-powered portfolio assistant using Gemini",
    version="1.0.0"
)


# CORS configuration
frontend_origins = os.getenv(
    "FRONTEND_ORIGIN",
    "http://localhost:5173"
)

allowed_origins = [
    origin.strip()
    for origin in frontend_origins.split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"]
)


# Request model
class ChatRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=1,
        max_length=1000
    )


# Root endpoint
@app.get("/")
def home():
    return {
        "message": "Sahil Kumar Portfolio Chatbot API is running"
    }


# Health endpoint
@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# Chat endpoint
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

        return {
            "reply": answer
        }

    except Exception as error:

        # Log the actual error on the backend
        print(f"Chatbot error: {error}")

        raise HTTPException(
            status_code=502,
            detail="Unable to generate a response. Please try again."
        )
