from pydantic import BaseModel

class WatchLog(BaseModel):
    id: int
    user_id: int
    movie_title: str
    rating: int
