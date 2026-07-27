from fastapi import APIRouter, HTTPException
from schemas.movie import MovieResponse
from services.fetch_trending_movies import fetch_trending_movies
from db.models import Movie

router = APIRouter(prefix="/discover")
TRENDING_URL = "https://api.themoviedb.org/3/trending"
POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500"
time_window = "day"

@router.get("/", response_model=list[MovieResponse])
def trending_movies():
    res = fetch_trending_movies()
    movies: list[MovieResponse] = []

    for movie in res:
        poster_path = movie.get("poster_path")
        poster_url = f"{POSTER_BASE_URL}{poster_path}"

        trending_movie = MovieResponse(
            id=movie.get("id"),
            title=movie.get("title"),
            overview=movie.get("overview"),
            release_date=movie.get("release_date"),
            poster_url=poster_url,
            genres=""
        )
        movies.append(trending_movie)
    return movies



