from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from typing import List
from app import models, schemas
from app.db import get_db
from fastapi_jwt_auth import AuthJWT
import os

router = APIRouter(prefix="/students", tags=["students"])

@router.post("/", response_model=schemas.Student)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = models.Student(**student.dict())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

@router.get("/", response_model=List[schemas.Student])
def list_students(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    return db.query(models.Student).offset(skip).limit(limit).all()

@router.get("/{student_id}", response_model=schemas.Student)
def get_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

@router.delete("/{student_id}", response_model=schemas.Student)
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    db.delete(student)
    db.commit()
    return student

@router.get("/protected")
def protected(Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return {"msg": "Gizli bilgi"}

@router.post("/{student_id}/upload")
async def upload_file(student_id: int, file: UploadFile = File(...)):
    os.makedirs("uploads", exist_ok=True)
    contents = await file.read()
    with open(f"uploads/{student_id}_{file.filename}", "wb") as f:
        f.write(contents)
    return {"filename": file.filename} 