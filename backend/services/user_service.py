from backend.app.models.user import UserCreate
from backend.app.db.database import get_db, User
from sqlalchemy.orm import Session
from fastapi import Depends


def create_user(user: UserCreate, db: Session):
    new_user = User(email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def delete_user(user_email: str, db: Session):
    user_to_delete = db.query(User).filter_by(email=user_email).first()
    db.delete(user_to_delete)
    db.commit()
    return user_to_delete

