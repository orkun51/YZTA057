from sqlalchemy import Column, Integer, String, Date, Text, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from app.db import Base
import datetime

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    birth_date = Column(Date, nullable=True)
    notes = Column(Text, nullable=True)
    observations = relationship("Observation", back_populates="student")

class Observation(Base):
    __tablename__ = "observations"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    date = Column(DateTime, default=datetime.datetime.utcnow)
    attention = Column(Integer, nullable=True)
    emotion = Column(Integer, nullable=True)
    social = Column(Integer, nullable=True)
    note = Column(Text, nullable=True)
    student = relationship("Student", back_populates="observations")

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True) 