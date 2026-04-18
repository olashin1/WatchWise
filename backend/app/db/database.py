# # Port 5432
# Engine = long-lived (per app run)
# Session = short-lived (per operation / request)
# Session = what actually talks to the DB
# Engine = what sessions use behind the scenes

from base import Base
from sqlalchemy import Column, Integer, String, ForeignKey, create_engine
from sqlalchemy.orm import sessionmaker
import alembic
import psycopg2


class User(Base):
    __tablename__ = "users"

    id       = Column(Integer, primary_key=True)
    email    = Column(String)
    password = Column(String)

class WatchLog(Base):
    __tablename__ = "watchlog"

    id          = Column(Integer, primary_key=True)
    user_id     = Column(Integer, ForeignKey("users.id"))
    movie_title = Column(String)
    rating      = Column(Integer)


class Movie(Base):
    __tablename__ = "movie"

    id     = Column(String, primary_key=True)
    title  = Column(String)
    rating = Column(Integer)
    year   = Column(Integer)
    genre  = Column(String)

db_url = "sqlite:///app.db"
engine = create_engine(db_url)

SessionLocal = sessionmaker(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()