from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def health():
    return {"message": "Hello from health"}

@app.get("/")
def default():
    return {"message": "homepage"}