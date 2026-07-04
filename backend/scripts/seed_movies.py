import os
import requests
from dotenv import load_dotenv
from db.database import SessionLocal, connect_db
from db.models import Movie

load_dotenv()

TMDB_API_KEY = os.environ["TMDB_API_KEY"]
TMDB_BASE_URL = "https://api.themoviedb.org/3"
POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500"


def fetch_movies(category: str, pages: int = 5):
    movies = []

    for page in range(1, pages + 1):
        url = f"{TMDB_BASE_URL}/movie/{category}"
        params = {
            "api_key": TMDB_API_KEY,
            "language": "en-US",
            "page": page,
        }

        response = requests.get(url, params=params)
        response.raise_for_status()

        movies.extend(response.json()["results"])

    return movies


def seed_movies():
    db = SessionLocal()

    try:
        categories = ["popular", "top_rated"]

        for category in categories:
            movies = fetch_movies(category, pages=10)

            for movie in movies:
                tmdb_id = movie["id"]

                existing = db.query(Movie).filter(Movie.tmdb_id == tmdb_id).first()
                if existing:
                    continue

                release_date = movie.get("release_date") or ""
                year = int(release_date[:4]) if release_date[:4].isdigit() else None

                poster_path = movie.get("poster_path")
                poster_url = f"{POSTER_BASE_URL}{poster_path}" if poster_path else None

                new_movie = Movie(
                    tmdb_id=tmdb_id,
                    title=movie.get("title"),
                    overview=movie.get("overview"),
                    year=year,
                    poster_url=poster_url,
                    genres="",  # we can improve this later
                )

                db.add(new_movie)

            db.commit()

        print("Movies seeded successfully.")

    finally:
        db.close()


if __name__ == "__main__":
    connect_db()
    seed_movies()