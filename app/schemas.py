from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import date, datetime

class ObservationBase(BaseModel):
    attention: Optional[int] = Field(None, ge=1, le=5)
    emotion: Optional[int] = Field(None, ge=1, le=5)
    social: Optional[int] = Field(None, ge=1, le=5)
    note: Optional[str] = None

class ObservationCreate(ObservationBase):
    pass

class Observation(ObservationBase):
    id: int
    date: datetime
    student_id: int

    class Config:
        orm_mode = True

class StudentBase(BaseModel):
    name: str
    birth_date: Optional[date] = None
    notes: Optional[str] = None

class StudentCreate(StudentBase):
    pass

class Student(StudentBase):
    id: int
    observations: List[Observation] = []

    class Config:
        orm_mode = True 