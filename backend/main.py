from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import recommend, discover

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"message": "Hello from health"}

app.include_router(recommend.router)
app.include_router(discover.router)