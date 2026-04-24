from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from models.user import UserModel
from db.database import get_db, User
from sqlalchemy.orm import Session
from core.security import create_access_token

router = APIRouter(prefix="/auth")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

@router.post("/login")
def login_user(incoming_user: UserModel, db: Session = Depends(get_db)):
    user = db.query(User).filter_by(email=incoming_user.email).first()

    if not user:
        return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect Email or Password")
    
    if str(user.password) != incoming_user.password:
        return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect Password")

    token = create_access_token({"sub": str(user.id)})
    print(token)
    return token

@router.post("/create")
def register_user():
    pass