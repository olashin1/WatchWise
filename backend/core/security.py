from datetime import datetime, timedelta, timezone
from jwt import encode, decode, InvalidTokenError

SECRET_KEY = "temp-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    return encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_access_token(token: str):
    try:
        payload = decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except InvalidTokenError:
        return None