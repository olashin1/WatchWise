from fastapi import FastAPI
from routers.user import router as UserRouter
app = FastAPI()

@app.get("/")
def default():
    return {"message": "Hello World"}

@app.get("/health")
def health():
    return {"message": "Hello from health"}

app.include_router(UserRouter)