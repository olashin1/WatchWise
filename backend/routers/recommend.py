from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import get_db
from db.models import Movie
from schemas.recommend import MoodSearchRequest
from services.gemini import get_embedding

router = APIRouter(prefix="/recommend", tags=["recommendations"])

NUMBERS_OF_MOVIES_RETURNED = 10

@router.post("/search")
def search_by_mood(
        request: MoodSearchRequest,
        db: Session = Depends(get_db)
):
    if not request.query.strip():
        raise HTTPException(status_code=400, detail="Query Cannot Be Empty")
    
    query_embedding = get_embedding(request.query)

    movies = (
        db.query(Movie)
        .filter(Movie.embedding != None)
        .order_by(Movie.embedding.cosine_distance(query_embedding))
        .limit(NUMBERS_OF_MOVIES_RETURNED)
        .all()
    )

    results = []

    for movie in movies:
        results.append({
            "id": movie.id,
            "tmdb_id": movie.tmdb_id,
            "title": movie.title,
            "overview": movie.overview,
            "year": movie.year,
            "genres": movie.genres,
            "poster_url": movie.poster_url,
        })

    return results