from fastapi import Depends, APIRouter, FastAPI
from sqlalchemy.orm import Session
from models.user import UserModel
from pydantic import EmailStr
from db.database import get_db
from services.user_service import create_user, delete_user
router = APIRouter(prefix="/user") 

@router.post("/")
def create(user: UserModel, db: Session = Depends(get_db)):
    return create_user(user, db)

@router.post("/delete")
def delete(email_to_delete: EmailStr, password: str, db: Session = Depends(get_db)):
    return delete_user(email_to_delete, password, db)
