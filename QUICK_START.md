# Beni Anla - Hızlı Başlangıç

## 🚀 5 Dakikada Çalıştırma

### 1. Backend Başlatma
```bash
# Sanal ortamı aktifleştir
source venv/bin/activate

# Sunucuyu başlat
uvicorn app.main:app --reload
```

### 2. Frontend Başlatma
```bash
# Yeni terminal aç
cd frontend-example
npm start
```

### 3. Tarayıcıda Aç
- Backend: http://localhost:8000/docs
- Frontend: http://localhost:3000

## 🔐 İlk Kullanım

### Kayıt Ol
1. http://localhost:3000 adresine git
2. "Kayıt Ol" seçeneğini tıkla
3. Kullanıcı adı ve şifre gir
4. "Kayıt Ol" butonuna tıkla

### Giriş Yap
1. Kullanıcı adı ve şifreni gir
2. "Giriş Yap" butonuna tıkla
3. Ana sayfaya yönlendirileceksin

## 👥 Öğrenci Ekleme

### Hızlı Öğrenci Ekleme
1. "Öğrenciler" sekmesine git
2. Formu doldur:
   - **Ad Soyad:** Öğrenci adı
   - **Doğum Tarihi:** YYYY-MM-DD
   - **Notlar:** Önemli bilgiler
3. "Öğrenci Ekle" butonuna tıkla

## 🤖 AI Önerisi Alma

### Özel Soru
1. "AI Önerileri" sekmesine git
2. Sorunuzu yaz: "Öğrencimin dikkat sorunu için ne yapabilirim?"
3. "AI Önerisi Al" butonuna tıkla

### Gözlem Verileri
1. "Örnek Gözlemlerle AI Önerisi" bölümünde
2. "Gözlemlere Göre Öneri Al" butonuna tıkla
3. Hazır verilerle test yanıtı al

## 📁 Dosya Yükleme

### Öğrenci Dosyası
1. Öğrenci kartında "Dosya Yükle" seç
2. Dosyayı seç (PDF, resim, vb.)
3. Otomatik olarak yüklenecek

## 🔧 Hızlı Test

### Backend Test
```bash
# Ana sayfa
curl http://localhost:8000/

# Kullanıcı kaydı
curl -X POST "http://localhost:8000/auth/register?username=test&password=test"

# Giriş
curl -X POST "http://localhost:8000/auth/login?username=test&password=test"
```

### Frontend Test
- http://localhost:3000 adresine git
- Kayıt ol ve giriş yap
- Öğrenci ekle
- AI önerisi al

## 🚨 Hızlı Sorun Giderme

### Backend Çalışmıyor
```bash
source venv/bin/activate
pip install -r requirements.txt
python -m app.init_db
uvicorn app.main:app --reload
```

### Frontend Çalışmıyor
```bash
cd frontend-example
npm install
npm start
```

### AI Önerisi Alamıyorum
- Mock mode'da çalışıyor (test yanıtları)
- Gerçek API için `GEMINI_SETUP.md` dosyasına bak

## 📞 Hızlı Destek

### Log Kontrolü
- **Backend:** Terminal çıktısı
- **Frontend:** Browser console (F12)
- **Database:** `beni_anla.db` dosyası

### Test Kullanıcısı
- **Kullanıcı Adı:** testuser
- **Şifre:** testpass

## 🎯 Özellik Özeti

✅ **JWT Authentication** - Güvenli giriş/kayıt  
✅ **Student Management** - Öğrenci ekleme/listeleme  
✅ **File Upload** - Dosya yükleme  
✅ **AI Suggestions** - Mock/Real AI önerileri  
✅ **React Frontend** - Modern arayüz  
✅ **FastAPI Backend** - Güçlü API  

## 🔗 Faydalı Linkler

- **Swagger UI:** http://localhost:8000/docs
- **Frontend:** http://localhost:3000
- **Gemini Setup:** GEMINI_SETUP.md
- **User Guide:** USER_GUIDE.md 