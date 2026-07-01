from db.base import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from pgvector.sqlalchemy import Vector
import uuid

VECTOR_DIMENSION = 768

class Profile(Base):
    __tablename__ = "profiles"

    id         = Column(String, primary_key=True)  # Supabase auth user id
    email      = Column(String)

    watch_logs = relationship("WatchLog", back_populates="user")

class WatchLog(Base):
    __tablename__ = "watchlog"

    id          = Column(Integer, primary_key=True)
    user_id     = Column(String, ForeignKey("profiles.id"))
    movie_title = Column(String)
    rating      = Column(Integer)

    user        = relationship("Profile", back_populates="watch_logs")

class Movie(Base):
    __tablename__ = "movie"

    id         = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    tmdb_id    = Column(Integer, unique=True, index=True)
    title      = Column(String, nullable=False)
    overview   = Column(Text)
    year       = Column(Integer)
    genres     = Column(String)
    poster_url = Column(String)
    embedding  = Column(Vector(VECTOR_DIMENSION), nullable=True)

