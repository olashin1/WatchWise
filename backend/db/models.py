from db.base import Base
from sqlalchemy import Column, Integer, String, ForeignKey, create_engine
from sqlalchemy.orm import sessionmaker, relationship


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

    id         = Column(String, primary_key=True)
    title      = Column(String)
    rating     = Column(Integer)
    year       = Column(Integer)
    genre      = Column(String)
    poster_url = Column(String)
