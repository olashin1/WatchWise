from db.base import Base
from sqlalchemy import Column, Integer, String, ForeignKey, create_engine
from sqlalchemy.orm import sessionmaker

class Profile(Base):
    __tablename__ = "profiles"

    id    = Column(String, primary_key=True)  # Supabase auth user id
    email = Column(String)

class WatchLog(Base):
    __tablename__ = "watchlog"

    id          = Column(Integer, primary_key=True)
    user_id     = Column(String, ForeignKey("profiles.id"))
    movie_title = Column(String)
    rating      = Column(Integer)

class Movie(Base):
    __tablename__ = "movie"

    id         = Column(String, primary_key=True)
    title      = Column(String)
    rating     = Column(Integer)
    year       = Column(Integer)
    genre      = Column(String)
    poster_url = Column(String)

db_url = "sqlite:///app.db"
engine = create_engine(db_url)

SessionLocal = sessionmaker(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def connect_db():
    Base.metadata.create_all(bind=engine)

def disconnect_db():
    engine.dispose()