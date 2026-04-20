from fastapi import FastAPI
from routers.user import router as UserRouter
from db.database import connect_db
app = FastAPI()

@app.get("/health")
def health():
    return {"message": "Hello from health"}

app.include_router(UserRouter)