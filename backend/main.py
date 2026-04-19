from fastapi import FastAPI
from app.routers.user import router as UserRouter
app = FastAPI()


@app.get("/health")
def health():
    return {"message": "Hello from health"}

app.include_router(UserRouter)