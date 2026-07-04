from pydantic import BaseModel

class MoodSearchRequest(BaseModel):
    query: str