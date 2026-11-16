
import json
from pathlib import Path

# Get the knowledge file location
BASE_DIR = Path(__file__).resolve().parent

KNOWLEDGE_FILE = (
    BASE_DIR / "data" / "portfolio-knowledge.json"
)


def load_knowledge():
    """
    Load portfolio information from JSON.
    """

    try:
        with open(KNOWLEDGE_FILE, "r", encoding="utf-8") as file:
            knowledge = json.load(file)

        if not isinstance(knowledge, dict):
            raise ValueError("Knowledge file must contain a JSON object")

        return knowledge

    except FileNotFoundError:
        raise RuntimeError("Portfolio knowledge file not found")

    except json.JSONDecodeError as error:
        raise RuntimeError(
            f"Invalid portfolio JSON: {error}"
        )


def get_knowledge():
    """
    Return portfolio information.
    """

    return load_knowledge()
