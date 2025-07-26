# Beni Anla - FastAPI Backend

## Kurulum

1. Ortamı oluşturun ve bağımlılıkları yükleyin:

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Veritabanını başlatın:

```bash
python -m app.init_db
```

3. Sunucuyu başlatın:

```bash
uvicorn app.main:app --reload
```

## Temel API Uçları

- `GET /students` — Tüm öğrencileri listeler
- `POST /students` — Yeni öğrenci ekler
- `GET /students/{id}` — Öğrenci detay
- `DELETE /students/{id}` — Öğrenci sil
- `GET /observations` — Tüm gözlemleri listeler
- `POST /observations?student_id={id}` — Öğrenciye gözlem ekler
- `GET /observations/student/{id}` — Bir öğrencinin tüm gözlemleri

Swagger/OpenAPI dokümantasyonu için: [http://localhost:8000/docs](http://localhost:8000/docs)

## Geliştirme
- Kodlar `app/` klasöründe modüler yapıdadır.
- Model, şema ve router dosyaları ayrıdır.
- Geliştirme için SQLite kullanılır.

## Notlar
- Gelişmiş özellikler (JWT auth, AI endpointleri, vs.) eklenebilir.
- PR ve issue açmaktan çekinmeyin! 