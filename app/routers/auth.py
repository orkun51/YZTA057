from fastapi import APIRouter, Depends, HTTPException, Form
from fastapi_jwt_auth import AuthJWT
from passlib.hash import bcrypt
from sqlalchemy.orm import Session
from app.db import get_db
from app import models

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register")
def register(username: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    if db.query(models.User).filter_by(username=username).first():
        raise HTTPException(status_code=400, detail="Username already exists")
    user = models.User(username=username, hashed_password=bcrypt.hash(password))
    db.add(user)
    db.commit()
    return {"msg": "User created"}

@router.post("/login")
def login(username: str = Form(...), password: str = Form(...), Authorize: AuthJWT = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter_by(username=username).first()
    if not user or not bcrypt.verify(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = Authorize.create_access_token(subject=user.username)
    return {"access_token": access_token} 