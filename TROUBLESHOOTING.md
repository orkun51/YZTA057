# Beni Anla - Sorun Giderme Rehberi

## 🔐 Kimlik Doğrulama Sorunları

### Giriş Yapılamıyor Hatası

#### Sorun: "422 Unprocessable Entity" Hatası
**Belirtiler:**
- Frontend'de giriş yapılamıyor
- Backend log'larında 422 hatası
- "Invalid credentials" mesajı

**Çözüm:**
1. **Backend'i yeniden başlatın:**
   ```bash
   source venv/bin/activate
   uvicorn app.main:app --reload
   ```

2. **Test kullanıcısı ile giriş yapın:**
   - **Kullanıcı Adı:** testuser
   - **Şifre:** testpass

3. **Yeni kullanıcı oluşturun:**
   - "Kayıt Ol" seçeneğini kullanın
   - Yeni kullanıcı adı ve şifre belirleyin

#### Sorun: "401 Unauthorized" Hatası
**Belirtiler:**
- Token geçersiz
- Oturum süresi dolmuş

**Çözüm:**
1. **Çıkış yapın ve tekrar giriş yapın**
2. **Browser'da localStorage'ı temizleyin:**
   ```javascript
   localStorage.removeItem('token');
   ```

### Backend Bağlantı Sorunları

#### Sorun: "Connection Refused" Hatası
**Belirtiler:**
- Frontend backend'e bağlanamıyor
- API çağrıları başarısız

**Çözüm:**
1. **Backend'in çalıştığından emin olun:**
   ```bash
   curl http://localhost:8000/
   ```

2. **Port çakışması kontrol edin:**
   ```bash
   lsof -i :8000
   ```

3. **Backend'i yeniden başlatın:**
   ```bash
   source venv/bin/activate
   uvicorn app.main:app --reload
   ```

### Veritabanı Sorunları

#### Sorun: "Database is locked" Hatası
**Belirtiler:**
- SQLite veritabanı hatası
- Concurrent access sorunu

**Çözüm:**
1. **Veritabanını yeniden oluşturun:**
   ```bash
   rm beni_anla.db
   python -m app.init_db
   ```

2. **Test kullanıcısını yeniden oluşturun:**
   ```bash
   curl -X POST "http://localhost:8000/auth/register" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "username=testuser&password=testpass"
   ```

## 🚨 Yaygın Hata Kodları

### 422 Unprocessable Entity
- **Sebep:** Form data formatı uyumsuzluğu
- **Çözüm:** Backend'i yeniden başlatın

### 401 Unauthorized
- **Sebep:** Geçersiz token veya kimlik bilgileri
- **Çözüm:** Yeniden giriş yapın

### 500 Internal Server Error
- **Sebep:** Backend hatası
- **Çözüm:** Log'ları kontrol edin ve backend'i yeniden başlatın

### 404 Not Found
- **Sebep:** Yanlış endpoint
- **Çözüm:** API dokümantasyonunu kontrol edin

## 🔧 Debug Komutları

### Backend Test
```bash
# Ana sayfa testi
curl http://localhost:8000/

# Kullanıcı kaydı
curl -X POST "http://localhost:8000/auth/register" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=testuser&password=testpass"

# Giriş testi
curl -X POST "http://localhost:8000/auth/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=testuser&password=testpass"
```

### Frontend Test
```bash
# React app testi
curl http://localhost:3000/

# Port kontrolü
lsof -i :3000
```

### Veritabanı Test
```bash
# SQLite bağlantı testi
sqlite3 beni_anla.db ".tables"

# Kullanıcı listesi
sqlite3 beni_anla.db "SELECT * FROM users;"
```

## 📊 Log Analizi

### Backend Log'ları
```bash
# Debug modunda başlatın
uvicorn app.main:app --reload --log-level debug

# Log'ları takip edin
tail -f /dev/null  # Terminal çıktısını izleyin
```

### Frontend Log'ları
1. **Browser Console:** F12 → Console
2. **Network Tab:** F12 → Network
3. **Application Tab:** F12 → Application → Local Storage

## 🔄 Sistem Yeniden Başlatma

### Tam Sistem Reset
```bash
# 1. Backend'i durdurun (Ctrl+C)
# 2. Frontend'i durdurun (Ctrl+C)

# 3. Veritabanını temizleyin
rm beni_anla.db

# 4. Backend'i yeniden başlatın
source venv/bin/activate
python -m app.init_db
uvicorn app.main:app --reload

# 5. Frontend'i yeniden başlatın
cd frontend-example
npm start
```

### Kullanıcı Yeniden Oluşturma
```bash
# Test kullanıcısı oluşturun
curl -X POST "http://localhost:8000/auth/register" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=testuser&password=testpass"

# Giriş testi
curl -X POST "http://localhost:8000/auth/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=testuser&password=testpass"
```

## 📞 Destek Bilgileri

### Test Kullanıcı Bilgileri
- **Kullanıcı Adı:** testuser
- **Şifre:** testpass
- **Alternatif:** newuser / newpass

### Sistem Durumu Kontrolü
```bash
# Backend durumu
curl http://localhost:8000/

# Frontend durumu
curl http://localhost:3000/

# Veritabanı durumu
ls -la beni_anla.db
```

### Hızlı Çözümler
1. **Giriş sorunu:** Backend'i yeniden başlatın
2. **Bağlantı sorunu:** Port'ları kontrol edin
3. **Veri sorunu:** Veritabanını yeniden oluşturun
4. **Token sorunu:** localStorage'ı temizleyin

## 🎯 Önleyici Bakım

### Düzenli Kontroller
- **Backend log'ları:** Hata mesajlarını kontrol edin
- **Veritabanı boyutu:** `ls -lh beni_anla.db`
- **Token geçerliliği:** Browser localStorage kontrolü
- **Port durumu:** `lsof -i :8000` ve `lsof -i :3000`

### Yedekleme
```bash
# Veritabanı yedekleme
cp beni_anla.db beni_anla_backup.db

# Uploads yedekleme
tar -czf uploads_backup.tar.gz uploads/
``` 