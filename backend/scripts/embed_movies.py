import os
from dotenv import load_dotenv
from google import genai
from db.database import SessionLocal
from services.gemini import get_embedding
from db.models import Movie

load_dotenv()

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])


def build_movie_text(movie: Movie) -> str:
    return f"""
Title: {movie.title}
Year: {movie.year}
Genres: {movie.genres}
Overview: {movie.overview}
""".strip()

def embed_movies(limit: int = 50):
    db = SessionLocal()

    try:
        movies = (
            db.query(Movie)
            .filter(Movie.embedding == None)
            .limit(limit)
            .all()
        )

        for movie in movies:
            text = build_movie_text(movie)
            embedding = get_embedding(text)

            movie.embedding = embedding # type: ignore
            print(f"Embedded: {movie.title}")

        db.commit()
        print("Movie embeddings saved.")

    finally:
        db.close()


if __name__ == "__main__":
    embed_movies()