from pydantic import BaseModel

class WatchLogCreate(BaseModel):
    tmdb_id: int
    rating: int
    
