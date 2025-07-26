from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app import models, schemas
from app.db import get_db

router = APIRouter(prefix="/observations", tags=["observations"])

@router.post("/", response_model=schemas.Observation)
def create_observation(obs: schemas.ObservationCreate, student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    db_obs = models.Observation(**obs.dict(), student_id=student_id)
    db.add(db_obs)
    db.commit()
    db.refresh(db_obs)
    return db_obs

@router.get("/", response_model=List[schemas.Observation])
def list_observations(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    return db.query(models.Observation).offset(skip).limit(limit).all()

@router.get("/student/{student_id}", response_model=List[schemas.Observation])
def list_observations_by_student(student_id: int, db: Session = Depends(get_db)):
    return db.query(models.Observation).filter(models.Observation.student_id == student_id).all() 