# Beni Anla - Frontend Örneği

Bu React uygulaması, Beni Anla projesinin frontend örneğidir. JWT authentication, öğrenci yönetimi ve AI önerileri özelliklerini içerir.

## Özellikler

- 🔐 JWT Authentication (Giriş/Kayıt)
- 👥 Öğrenci Yönetimi (Ekleme, Listeleme)
- 📁 Dosya Yükleme
- 🤖 AI Önerileri (Gemini API entegrasyonu)
- 📱 Responsive Tasarım

## Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Backend'in çalıştığından emin olun:**
   - FastAPI backend'in `http://localhost:8000` adresinde çalıştığını kontrol edin
   - Gerekirse `uvicorn app.main:app --reload` komutuyla başlatın

3. **Frontend'i başlatın:**
   ```bash
   npm start
   ```

## Kullanım

### Giriş/Kayıt
- İlk kez kullanıyorsanız "Kayıt Ol" seçeneğiyle yeni hesap oluşturun
- Mevcut hesabınızla giriş yapın

### Öğrenci Yönetimi
- "Öğrenciler" sekmesinde öğrenci ekleyebilir ve listeleyebilirsiniz
- Her öğrenci için dosya yükleme özelliği mevcuttur

### AI Önerileri
- "AI Önerileri" sekmesinde iki seçenek bulunur:
  1. **Özel Soru:** AI'ya doğrudan soru sorabilirsiniz
  2. **Örnek Gözlemler:** Hazır gözlem verileriyle AI önerisi alabilirsiniz

## API Endpoints

Frontend şu backend endpoint'lerini kullanır:

- `POST /auth/register` - Kullanıcı kaydı
- `POST /auth/login` - Kullanıcı girişi
- `GET /students/` - Öğrenci listesi
- `POST /students/` - Yeni öğrenci ekleme
- `POST /students/{id}/upload` - Dosya yükleme
- `POST /ai/suggest` - AI önerisi alma

## Dosya Yapısı

```
frontend-example/
├── src/
│   ├── App.js          # Ana uygulama bileşeni
│   ├── Auth.js         # Giriş/kayıt bileşeni
│   ├── StudentList.js  # Öğrenci yönetimi
│   ├── AiSuggest.js    # AI önerileri
│   └── api.js          # API çağrıları
├── package.json
└── README.md
```

## Güvenlik

- JWT token'lar localStorage'da saklanır
- Tüm API çağrıları Authorization header'ı ile yapılır
- Token geçersiz olduğunda otomatik çıkış yapılır

## Geliştirme

Bu frontend örneği, gerçek bir React uygulaması geliştirmek için temel yapıyı sağlar. İhtiyaçlarınıza göre şu özellikleri ekleyebilirsiniz:

- State management (Redux, Zustand)
- UI framework (Material-UI, Ant Design)
- Form validation
- Error handling
- Loading states
- Real-time updates 