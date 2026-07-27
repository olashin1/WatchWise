from pydantic import BaseModel

class MovieResponse(BaseModel):
    id: int
    title: str
    overview: str
    release_date: str
    genres: str
    poster_url: str
