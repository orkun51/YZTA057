from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
from typing import List, Optional
import os
import requests

router = APIRouter(prefix="/ai", tags=["ai"])

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="

class ObservationInput(BaseModel):
    attention: Optional[int] = None
    emotion: Optional[int] = None
    social: Optional[int] = None
    note: Optional[str] = None
    date: Optional[str] = None

class SuggestRequest(BaseModel):
    prompt: Optional[str] = None
    observations: Optional[List[ObservationInput]] = None

@router.post("/suggest")
def ai_suggest(request: SuggestRequest = Body(...)):
    # Check if we have a valid API key
    if not GEMINI_API_KEY or GEMINI_API_KEY == "your-gemini-api-key-here":
        # Return mock response for testing
        if request.prompt:
            mock_response = f"Mock AI Response: {request.prompt}\n\nBu bir test yanıtıdır. Gerçek Gemini API anahtarı ile gerçek AI önerileri alabilirsiniz."
        elif request.observations:
            obs_text = "\n".join([
                f"Tarih: {o.date or '-'}, Dikkat: {o.attention}, Duygu: {o.emotion}, Sosyal: {o.social}, Not: {o.note}" for o in request.observations
            ])
            mock_response = f"Mock AI Response based on observations:\n{obs_text}\n\nBu bir test yanıtıdır. Gerçek Gemini API anahtarı ile gerçek AI önerileri alabilirsiniz."
        else:
            raise HTTPException(status_code=400, detail="Prompt veya observations alanı gereklidir.")
        
        return {"suggestion": mock_response}

    # Use real Gemini API
    if request.prompt:
        prompt = request.prompt
    elif request.observations:
        obs_text = "\n".join([
            f"Tarih: {o.date or '-'}, Dikkat: {o.attention}, Duygu: {o.emotion}, Sosyal: {o.social}, Not: {o.note}" for o in request.observations
        ])
        prompt = f"Aşağıdaki öğrenci gözlem kayıtlarına göre öğretmene öneriler üret:\n{obs_text}"
    else:
        raise HTTPException(status_code=400, detail="Prompt veya observations alanı gereklidir.")

    payload = {
        "contents": [
            {"parts": [{"text": prompt}]}
        ]
    }
    headers = {"Content-Type": "application/json"}
    url = GEMINI_API_URL + GEMINI_API_KEY
    
    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=20)
        resp.raise_for_status()
        data = resp.json()
        suggestion = data["candidates"][0]["content"]["parts"][0]["text"]
        return {"suggestion": suggestion}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini API hatası: {str(e)}") 