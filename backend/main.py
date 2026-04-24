from fastapi import FastAPI
from routers.user import router as UserRouter
from routers.auth import router as AuthRouter
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def default():
    return {"message": "Hello World"}

@app.get("/health")
def health():
    return {"message": "Hello from health"}

app.include_router(UserRouter)
app.include_router(AuthRouter)