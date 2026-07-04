from google import genai
from dotenv import load_dotenv
import os

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
VECTOR_DIMENSIONALITY = 768

client = genai.Client(api_key=GEMINI_API_KEY)

def get_embedding(text: str) -> list[float]:
    result = client.models.embed_content(
        model="gemini-embedding-2",
        contents=text,
        config={
            "output_dimensionality": VECTOR_DIMENSIONALITY
        }
    )

    return result.embeddings[0].values # type: ignore
