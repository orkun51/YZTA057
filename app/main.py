from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import students, observations, ai, auth
from fastapi_jwt_auth import AuthJWT
from pydantic import BaseModel

app = FastAPI(title="Beni Anla - FastAPI Backend")

# CORS middleware ekle
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Settings(BaseModel):
    authjwt_secret_key: str = "supersecret"

@AuthJWT.load_config
def get_config():
    return Settings()

app.include_router(students.router)
app.include_router(observations.router)
app.include_router(ai.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "Beni Anla API'ye hoş geldiniz!"} 