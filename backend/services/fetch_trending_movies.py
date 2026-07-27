import os
import requests
from dotenv import load_dotenv

load_dotenv()

TMDB_API_KEY = os.environ["TMDB_API_KEY"]
POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500"
TRENDING_URL = "https://api.themoviedb.org/3/trending/movie/day"

def fetch_trending_movies(pages: int = 5):
    movies = []

    for page in range(1, pages + 1):
        response = requests.get(
            TRENDING_URL,
            params={
                "api_key": TMDB_API_KEY,
                "language": "en-US",
                "page": page,
            },
            timeout=10,
        )

        response.raise_for_status()
        movies.extend(response.json()["results"])

    return movies