
import os

from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

# Get API key
api_key = os.getenv("GEMINI_API_KEY")
model = os.getenv("GEMINI_MODEL", "gemini-3.8-flash")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file")

# Initialize Gemini client
client = genai.Client(
    api_key=api_key,
    http_options={
        "timeout": 30000
    }
)

try:
    print("Connecting to Gemini...")

    response = client.models.generate_content(
        model=model,
        contents="Reply with exactly: Gemini connection successful."
    )

    print("\nGemini Response:")
    print(response.text)

except Exception as error:
    print("\nGemini API Error:")
    print(error)