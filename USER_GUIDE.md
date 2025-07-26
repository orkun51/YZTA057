# Beni Anla - Kullanıcı Rehberi

## 🚀 Hızlı Başlangıç

### Sistem Gereksinimleri
- **Backend:** Python 3.11, FastAPI, SQLite
- **Frontend:** React.js, Node.js
- **AI:** Google Gemini API (opsiyonel)

### Kurulum Adımları

#### 1. Backend Kurulumu
```bash
# Sanal ortam oluştur
python3.11 -m venv venv
source venv/bin/activate  # macOS/Linux

# Bağımlılıkları yükle
pip install -r requirements.txt

# Veritabanını başlat
python -m app.init_db

# Sunucuyu başlat
uvicorn app.main:app --reload
```

#### 2. Frontend Kurulumu
```bash
# Frontend klasörüne git
cd frontend-example

# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npm start
```

## 🔐 Kullanıcı Kimlik Doğrulama

### İlk Kullanım
1. **Kayıt Ol:** İlk kez kullanıyorsanız "Kayıt Ol" seçeneğini kullanın
2. **Kullanıcı Adı:** Benzersiz bir kullanıcı adı seçin
3. **Şifre:** Güçlü bir şifre belirleyin

### Giriş Yapma
1. **Kullanıcı Adı:** Kayıt olduğunuz kullanıcı adını girin
2. **Şifre:** Şifrenizi girin
3. **Giriş:** "Giriş Yap" butonuna tıklayın

### Güvenlik
- JWT token'lar otomatik olarak yönetilir
- Oturum süresi 15 dakikadır
- "Çıkış Yap" ile güvenli çıkış yapabilirsiniz

## 👥 Öğrenci Yönetimi

### Öğrenci Ekleme
1. **"Öğrenciler" sekmesine gidin**
2. **"Yeni Öğrenci Ekle" formunu doldurun:**
   - **Ad Soyad:** Öğrencinin tam adı
   - **Doğum Tarihi:** YYYY-MM-DD formatında
   - **Notlar:** Öğrenci hakkında önemli bilgiler
3. **"Öğrenci Ekle" butonuna tıklayın**

### Öğrenci Listesi
- Tüm öğrenciler otomatik olarak listelenir
- Her öğrenci için dosya yükleme seçeneği
- Öğrenci bilgileri düzenli kartlar halinde görüntülenir

### Dosya Yükleme
1. **Öğrenci kartında "Dosya Yükle" seçin**
2. **Dosya türü:** PDF, resim, doküman vb.
3. **Dosya adı:** Otomatik olarak `{öğrenci_id}_{dosya_adı}` formatında kaydedilir

## 🤖 AI Önerileri

### Özel Soru Sorma
1. **"AI Önerileri" sekmesine gidin**
2. **"Özel Soru Sor" bölümünde:**
   - Sorunuzu yazın (örn: "Öğrencimin dikkat sorunu için ne yapabilirim?")
   - "AI Önerisi Al" butonuna tıklayın
3. **AI yanıtı:** Detaylı öneriler ve stratejiler

### Gözlem Verileri ile Öneri
1. **"Örnek Gözlemlerle AI Önerisi" bölümünde:**
   - Hazır gözlem verileri kullanılır
   - "Gözlemlere Göre Öneri Al" butonuna tıklayın
2. **AI analizi:** Gözlem verilerine dayalı öneriler

### AI Yanıt Türleri
- **Dikkat Sorunları:** Konsantrasyon teknikleri
- **Sosyal Beceriler:** İletişim stratejileri
- **Duygusal Destek:** Davranış yönetimi
- **Öğrenme Stratejileri:** Akademik destek

## 📊 Veri Yönetimi

### Öğrenci Verileri
- **Ad Soyad:** Zorunlu alan
- **Doğum Tarihi:** Opsiyonel
- **Notlar:** Öğrenci hakkında detaylar
- **Gözlemler:** Davranış kayıtları

### Dosya Yönetimi
- **Konum:** `uploads/` klasörü
- **Adlandırma:** `{öğrenci_id}_{dosya_adı}`
- **Desteklenen formatlar:** Tüm dosya türleri
- **Güvenlik:** Sadece yetkili kullanıcılar erişebilir

## 🔧 Teknik Detaylar

### API Endpoints
```
GET / - Ana sayfa
POST /auth/register - Kullanıcı kaydı
POST /auth/login - Kullanıcı girişi
GET /students/ - Öğrenci listesi
POST /students/ - Öğrenci ekleme
POST /students/{id}/upload - Dosya yükleme
POST /ai/suggest - AI önerisi
```

### Veritabanı
- **SQLite:** Yerel veritabanı
- **Tablo:** students, users, observations
- **Yedekleme:** Manuel SQLite dosya kopyalama

### Güvenlik
- **JWT Token:** Güvenli kimlik doğrulama
- **Şifre Hashleme:** bcrypt ile güvenli saklama
- **CORS:** Frontend-backend iletişimi
- **Input Validation:** Veri doğrulama

## 🚨 Sorun Giderme

### Yaygın Sorunlar

#### Backend Başlatma Sorunu
```bash
# Sanal ortamı aktifleştir
source venv/bin/activate

# Bağımlılıkları yeniden yükle
pip install -r requirements.txt

# Veritabanını yeniden oluştur
python -m app.init_db
```

#### Frontend Bağlantı Sorunu
```bash
# Backend'in çalıştığından emin ol
curl http://localhost:8000/

# Frontend'i yeniden başlat
cd frontend-example
npm start
```

#### AI Önerisi Alamama
- **Mock Mode:** API anahtarı yoksa test yanıtları
- **Gerçek API:** Gemini API anahtarı gerekli
- **Kurulum:** `GEMINI_SETUP.md` dosyasına bakın

### Hata Kodları
- **401:** Kimlik doğrulama hatası
- **422:** Veri doğrulama hatası
- **500:** Sunucu hatası

## 📞 Destek

### Log Dosyaları
- **Backend:** Terminal çıktısı
- **Frontend:** Browser console
- **Database:** `beni_anla.db` dosyası

### Debug Modu
```bash
# Backend debug
uvicorn app.main:app --reload --log-level debug

# Frontend debug
npm start
```

## 🔄 Güncellemeler

### Sistem Güncellemeleri
1. **Backend:** `pip install -r requirements.txt`
2. **Frontend:** `npm install`
3. **Veritabanı:** Otomatik migration

### Yeni Özellikler
- **Gözlem Ekleme:** Yakında eklenecek
- **Raporlama:** İstatistik ve analiz
- **Takvim:** Etkinlik planlama

## 📝 Notlar

- **Veri Güvenliği:** Kişisel verileri koruyun
- **Yedekleme:** Düzenli veri yedekleme yapın
- **Güncellemeler:** Sistem güncellemelerini takip edin
- **Destek:** Sorunlar için log dosyalarını kontrol edin 