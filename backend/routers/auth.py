from fastapi import APIRouter
from models.user import UserModel
router = APIRouter(prefix="/auth")

@router.get("/login")
def login_user(user: UserModel):
    pass

@router.post("/create")
def register_user():
    pass