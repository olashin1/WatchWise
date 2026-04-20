from fastapi import Depends, APIRouter, FastAPI
from sqlalchemy.orm import Session
from models.user import UserCreate
from db.database import get_db
from services.user_service import create_user
router = APIRouter(prefix="/user") 

@router.post("/")
def create(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(user, db)
