# Gemini API Kurulum Rehberi

## 🔑 Gemini API Anahtarı Alma

1. **Google AI Studio'ya gidin:**
   - https://makersuite.google.com/app/apikey

2. **API anahtarı oluşturun:**
   - "Create API Key" butonuna tıklayın
   - Anahtarınızı kopyalayın

3. **Environment variable olarak ayarlayın:**
   ```bash
   export GEMINI_API_KEY="your-actual-api-key-here"
   ```

## 🚀 Gerçek AI Özelliğini Aktifleştirme

### Backend'de
```bash
# Terminal'de
export GEMINI_API_KEY="your-actual-api-key-here"
uvicorn app.main:app --reload
```

### Frontend'de
React uygulaması otomatik olarak gerçek AI yanıtlarını alacaktır.

## 🧪 Test Etme

### Backend Test
```bash
curl -X POST "http://localhost:8000/ai/suggest" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Öğrencimin dikkat sorunu için ne yapabilirim?"}'
```

### Frontend Test
1. React uygulamasını açın: `http://localhost:3000`
2. Giriş yapın
3. "AI Önerileri" sekmesine gidin
4. Soru sorun veya örnek gözlemlerle test edin

## 🔒 Güvenlik

- API anahtarınızı asla kod içinde saklamayın
- Environment variable kullanın
- Production'da güvenli secret management kullanın

## 📝 Not

- Mock yanıtlar API anahtarı olmadığında otomatik olarak devreye girer
- Gerçek API anahtarı ile gerçek AI önerileri alabilirsiniz
- Gemini API ücretsiz kullanım limitleri vardır 