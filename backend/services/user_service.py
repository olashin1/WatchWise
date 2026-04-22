from models.user import UserCreate
from db.database import User
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException


def create_user(user: UserCreate, db: Session):
    new_user = User(email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def delete_user(user_email: str, user_password: str, db: Session):
    user_to_delete = db.query(User).filter_by(email=user_email).first()

    if user_to_delete is None:
        raise HTTPException(status_code=404, detail="User Not Found.")
    
    user_to_delete_password = str(user_to_delete.password)

    if user_to_delete_password != user_password:
        raise HTTPException(status_code=402, detail="Incorrect Password.")

    db.delete(user_to_delete)
    db.commit()
    return user_to_delete

