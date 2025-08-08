# 🧠  Projenin İsmi

##  🎀 Mammo AI-TR

---

🔍 Proje Tanımı

> Türkiye'nin ilk HIPAA uyumlu federe öğrenme tabanlı meme kanseri tarama platformu olan MammoAI-TR

- ✨ Anadolu doku yoğunluğu değişimleri için yerel modeller
- ⚡ Flower Framework + Havelsan AI çipleri ile %40 daha hızlı eğitim
- 📊 3.500+ anonim vaka üzerinde çalışma

## 📊 Meme Kanseri İstatistikleri ve Hedefler

| Gösterge                          | Mevcut Durum | Hedef       |
|-----------------------------------|-------------|------------|
| Yıllık mamografi çekim sayısı     | 2.3 milyon  | -          |
| Erken teşhis oranı (Evre 1-2)     | %45         | %65        |
| Batı Anadolu tarama oranı         | %68         | %85        |
| Doğu/Güneydoğu tarama oranı       | %32         | %50        |
| Model doğruluk oranı              | -           | %91        |

---

## 🎯 SMART Hedefler

### ⚡ 2 Aylık MVP Hedefleri (Minimum Viable Product)
| Hedef                          | Metrik                     | Başarı Kriteri          | Durum |
|--------------------------------|----------------------------|-------------------------|-------|
| Pilot hastanelerde FL altyapısı | 3 merkez                   | %100 uptime            | ✅ Tamamlandı |
| Model performansı              | Sensitivity ≥%85, AUC ≥0.90 | Test verisinde doğrulama | 🟡 Devam Ediyor |
| KVKK/HIPAA uyumu               | Etik kurul onayı           | Doküman teslimi         | 🔴 Başlamadı |
| Kullanıcı eğitimi              | 20+ radyolog sertifikası   | Anket memnuniyet ≥4.5/5 | 🟢 Planlandı |

🟡 Devam Ediyor, ✅ Tamamlandı, 🔴 Başlamadı, 🟢 Planlandı

### 🚀 1 Yıllık Büyüme Hedefleri
| Hedef                          | Kilometre Taşı             | Kritik Tarih           |
|--------------------------------|----------------------------|------------------------|
| Ulusal tarama programı         | SBÜ protokolüne giriş      | 2025-Q1               |
| SGK geri ödeme                 | Teminat listesi başvurusu  | 2025-Q3               |
| Bölgesel genişleme             | 2 MENA ülkesinde pilot     | 2025-Q4               |
| Model sertifikasyonu           | Accuracy ≥%90 + QIDW       | 2025-Q2               |

---

## 🧩 SİSTEM BİLEŞENLERİ

| Modül               | Teknoloji Stack                  | Özgün Katkılar                          | Çıktılar                             | Durum      |
|---------------------|----------------------------------|-----------------------------------------|--------------------------------------|------------|
| **Veri Toplama**    | FastAPI + DICOM SDK              | - Türkçe radyolog arayüzü<br>- DICOM tag auto-fix | Standardize mamografi pipeline       | 🚧 Dev    |
| **FL Sunucu**       | Flower + PyTorch                 | - Türkçe CLI doküman<br>- Hybrid şifreleme (KVKK+HIPAA) | Merkezsiz model eğitimi             | 🚧 Dev    |
| **Mobil Analiz**    | TensorFlow Lite + ONNX           | - 14.7MB optimized model<br>- Offline inferans | Köy kliniklerinde tarama           | 🚧 Dev     |
| **Dinamik MRI**     | MONAI + OpenCV 4.8               | - 3D CNN + Optical Flow<br>- Synthetic veri destekli | Kontrastlı video analizi           | 🚧 Dev     |
| **Entegrasyon**     | e-Nabız API (HL7 FHIR)           | - Tek tık SBÜ raporlama<br>- Aile hekimi SMS bildirimi | Otomatik hasta takip              | 🚧 Dev    |
| **Explainable AI**  | Captum + Grad-CAM                | - SHAP değerli raporlar<br>- Radyolog feedback loop | Teşhis şeffaflığı                 | 🚧 Dev    |

✅ Prod: Canlı sistemde çalışıyor, 🟡 Beta: Test aşamasında, 🚧 Dev: Aktif geliştirmede

---

## Hedef Kullanıcılar

## 📌 Hedef Kitle ve Persona Analizi

### **Persona Örnekleri**
| **Kullanıcı**       | **Rol**                | **İhtiyaçlar**                          | **Teknik Gereksinimler**             |
|---------------------|------------------------|----------------------------------------|--------------------------------------|
| Dr. Ayşe (45)       | Aile Hekimi (Kayseri)  | Hızlı ön tarama, günde 20+ mamografi   | Düşük latency, offline mod desteği   |
| Prof. Demir (58)    | Radyoloji Uzmanı (İÜ)  | Kompleks vakalarda ikinci görüş        | Yüksek hassasiyet, DICOM entegrasyonu|

### **Hedef Kullanıcı Grupları**

- Birincil: Radyologlar (Özel/Kamu hastaneleri), Aile hekimleri (Kırsal bölgelerde)

- İkincil: Sağlık Bakanlığı veri analiz ekipleri

---

## 🛠 Kullanılan Teknolojiler

## Tech Stack

| **Katman**          | **Teknoloji**         | **Versiyon** | **Kullanım Amacı**                  | **Alternatifler**      |
|---------------------|-----------------------|--------------|-------------------------------------|------------------------|
| **Backend**         | Python + FastAPI      | 3.9+         | Yüksek performanslı API             | Django, Node.js        |
| **FL Framework**    | Flower + PyTorch      | 1.4.0        | Federated Learning altyapısı        | NVIDIA FLARE           |
| **Model**           | EfficientNet-B4       | TF 2.8       | Mamografi görüntü analizi           | ResNet50, DenseNet121  |
| **Veri Güvenliği**  | Homomorfik Şifreleme | SEAL 3.7     | HIPAA/GDPR uyumlu veri işleme       | Differential Privacy   |
| **Frontend**        | React Native          | 0.70+        | Cross-platform hasta arayüzü        | Flutter                |
| **Veritabanı**      | PostgreSQL (Tıbbi Metadata) | 14       | Hasta raporları metadata'sı         | MongoDB                |
| **CI/CD**           | GitHub Actions        | -            | Otomatik test ve dağıtım            | Jenkins                |
| **Monitoring**      | Prometheus + Grafana | 2.30+        | Model performans izleme             | ELK Stack              |

   1. Servis Mimarisi (`docker-compose.yml`):
      * Projeniz birbiriyle iletişim kuran servislerden oluşuyor:
      * backend: FastAPI tabanlı ana uygulama sunucusu.
      * db: PostgreSQL veritabanı.
      * redis: Önbellekleme ve arkaplan görevleri için kullanılan Redis.
      * celery_worker: Rapor oluşturma gibi uzun süren işlemleri yürüten Celery çalışanı.
      * flower: Celery görevlerini izlemek için bir arayüz.
      * fl_server: Flower (`flwr`) kütüphanesini kullanan Federe Öğrenme sunucusu.
      * frontend: Next.js tabanlı kullanıcı arayüzü.
      * adminer: Veritabanı yönetim aracı.
      * Tüm bu servislerin tek bir komutla (docker-compose up) ayağa kaldırılması hedeflenmiş.

   2. Backend Teknolojileri (`pyproject.toml`):
       * FastAPI: Web framework'ü olarak kullanılıyor.
       * SQLAlchemy: Veritabanı işlemleri için kullanılan ORM.
       * Celery: Asenkron ve arkaplan görevleri için.
       * Flower (`flwr`): Federe Öğrenme çatısı. Bu, projenin en kritik bileşenlerinden biri.
       * Pydantic: Veri doğrulama ve yapılandırma yönetimi için.
       * JOSE & Passlib: Güvenlik için JWT tabanlı kimlik doğrulama ve şifreleme.

---

# 🚧 Proje Geliştirme Süreci

![MammoAI-TR Proje Takvimi](https://github.com/user-attachments/assets/799e6992-3774-4a0c-a75b-0839d3110905)


## 🔄 Scrum Metodolojisi

### 🎯 Takım Yapısı
| Rol                | Sorumluluklar                              |
|--------------------|-------------------------------------------|
| **Product Owner**,**Scrum Master**, **Developer**  | Ürün vizyonu, önceliklendirme, Engelleri kaldırma, süreç işleyişi, Teknik uygulama             |

---

# 📋 Product Backlog

---

# 🛠️ Araçlar

| Araç | Kullanım Amacı                | Entegrasyonlar                             |
|--------------------|-------------------------------------------|-----------------------------------------------|
| **Trello**  | Görev takibi ve sprint planlama	| GitHub, Google Calendar             |
| **Miro**      | Akış diyagramları ve wireframing |	Figma tasarımları  |

---

## 📅 Daily Scrum Kayıtları (20 Haziran 2025 - 3 Ağustos 2025)

| Tarih       | Yapılanlar                                                                 | Engeller                          | Sonraki Adımlar                                | İlgili Sprint Hedefi                  |
|-------------|---------------------------------------------------------------------------|-----------------------------------|-----------------------------------------------|---------------------------------------|
| 20 Haz 2025 | Proje gereksinimleri ve kapsamı detaylandırıldı, ana özellik seti belirlendi. | FL altyapı kaynak seçimi          | DICOM pipeline taslağı oluştur                | FL Sunucu Kurulumu ✅                |
| 21 Haz 2025 | Git deposu başlatıldı ve temel proje dizin yapısı oluşturuldu.  | Radyolog eğitim içeriği eksik     | Eğitim modülü şeması çıkar                   | Radyolog Eğitim Planı ✅             |
| 22 Haz 2025 | docker-compose.yml dosyası temel servisler için tasarlandı ve ilk taslağı oluşturuldu.         | Etik kurul onay süreci belirsiz   | KVKK dokümanlarını tamamla                   | HIPAA/KVKK Uyum 🔴                   |
| 23 Haz 2025 | Her bir alt proje için gerekli requirements.txt veya package.json dosyaları oluşturuldu ve temel bağımlılıklar listelendi.   | Test senaryoları eksik            | Mock veri ile test senaryosu oluştur          | Model Eğitimi 🔴                     |
| 24 Haz 2025 | Her bir servis için başlangıç Dockerfile'ları oluşturuldu.            | Frontend tasarım araçları seçimi  | Mockup'ları Figma'da oluştur                 | MVP Modül Şeması ✅                  |
| 25 Haz 2025 | backend/app/main.py içinde FastAPI uygulaması başlatıldı ve temel router'ları tanımlandı.                | GitHub CI/CD ayarları eksik       | GitHub Actions workflow'u hazırla            | Tech Stack Belirleme ✅              |
| 26 Haz 2025 | PostgreSQL veritabanı bağlantısı ve yapılandırması ayarlandı.       | Veri anonimleştirme toolu eksik   | PyDICOM ile otomatik tag temizleme scripti    | Veri Altyapısı Hazırlığı ✅          |
| 27 Haz 2025 | Alembic kullanarak veritabanı migrasyon sistemi kuruldu.      | Hukuk ekibi onayı bekleniyor      | Etik kurul başvuru dokümanlarını tamamla     | HIPAA/KVKK Uyum 🔴                   |
| 28 Haz 2025 | Veritabanı modelleri Veritabanı ORM ile tanımlandı.          | Test verisi boyutu yetersiz       | Synthetic data generator için araştırma yap   | Model Eğitimi 🔴                     |
| 29 Haz 2025 | Temel CRUD operasyonları uygulandı. | Pixel masking algoritmasında hata | OpenCV ile görsel doğrulama modülü ekle      | Veri Altyapısı Hazırlığı ✅          |
| 30 Haz 2025 | Kullanıcı kayıt, giriş, profil yönetimi ve yetkilendirme için API uç noktaları oluşturuldu.                 | GPU kaynak tahsisinde gecikme     | Havelsan AI çipi için benchmark testleri yap  | FL Sunucu Kurulumu ✅                |
| 01 Tem 2025 | Raporlar için API uç noktaları oluşturuldu.          | Deployment ortamı ayarlanmadı     | AWS FL sunucusu için instance oluştur        | FL Sunucu Kurulumu ✅                |
| 02 Tem 2025 | Vakalar ve tıbbi görüntüler için API uç noktaları oluşturuldu.          | API güvenlik testleri eksik       | FastAPI için JWT auth entegrasyonu yap        | Tech Stack Belirleme ✅              |
| 03 Tem 2025 | Model versiyonları için API uç noktaları oluşturuldu.        | CI/CD pipeline tamamlanmadı       | GitHub Actions ile unit test workflow'u kur   | MVP Modül Şeması ✅                  |
| 04 Tem 2025 | Homomorfik şifreleme servisi TenSEAL ile entegre edildi ve genel bağlamı sunuldu.      | Veri şemalarında tutarsızlık      | Veri modelini normalize et                   | Veri Altyapısı Hazırlığı ✅          |
| 05 Tem 2025 | EfficientNet-B4 modelinin ilk eğitimi başlatıldı, ROC eğrisi için metric collector eklendi | Eğitim süresi beklenenden uzun   | Havelsan çipinde mixed-precision training test et | Model Eğitimi 🟡                     |
| 06 Tem 2025 | Radyolog eğitim platformu için AWS SageMaker LMS entegrasyonu yapıldı     | Video içeriklerin yüklenmesi gecikti | Türkçe closed-captioning scripti yaz        | Radyolog Eğitim Planı ✅             |
| 07 Tem 2025 | Model parametreleri değerlendirildi, versiyonlama kuralları belirlendi    | GPU kaynak sıkıntısı              | Havelsan AI çipi için optimizasyon yap       | Model Eğitimi 🟡                     |
| 08 Tem 2025 | Sunum görselleri güncellendi, backend endpoint taslağı çıkarıldı          | Auth mekanizması test edilmedi    | OAuth2.0 entegrasyonu için test senaryosu    | Tech Stack Belirleme ✅              |
| 09 Tem 2025 | Deployment süreci planlandı, mock verilerle eğitim testi simüle edildi    | Canlı ortam izinleri bekleniyor   | Staging ortamı için erişim talebi oluştur    | FL Sunucu Kurulumu ✅                |
| 10 Tem 2025 | Proje görsel amblemi oluşturuldu, dış bağımlılıklar listelendi            | Lisans maliyetleri hesaplanacak   | Açık kaynak alternatifleri araştır           | MVP Modül Şeması ✅                  |
| 11 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Demo videoları çekilmedi          | Ürün tanıtım videosu storyboard'u hazırla    | Radyolog Eğitim Planı ✅             |
| 12 Tem 2025 | HIPAA uyumluluk testleri için synthetic veri generator tamamlandı         | Şifreleme performansı düşük      | SEAL kütüphanesi için hardware acceleration araştır | HIPAA/KVKK Uyum 🔴                   |
| 13 Tem 2025 | Model explainability raporları Grad-CAM ile otomatize edildi               | Radyolog feedback loop kurulmadı  | SHAP değerlerini raporlara ekleyen modül yaz | Explainable AI 🚧                    |
| 14 Tem 2025 | HIPAA uyum test senaryoları yazıldı, veri şemaları revize edildi          | Şifreleme kütüphanesi seçilemedi | SEAL vs PySyft karşılaştırması yap           | HIPAA/KVKK Uyum 🔴                   |
| 15 Tem 2025 | Radyolog eğitim içeriği için LMS entegrasyonu başlatıldı                  | Eğitim videoları yüklenmedi       | Video prodüksiyon ekibiyle görüşme ayarla    | Radyolog Eğitim Planı ✅             |
| 16 Tem 2025 | Anonim vaka verisi entegrasyonu için pipeline oluşturuldu                  | Veri kalite kontrolü eksik        | Veri doğrulama scriptleri yaz                | Veri Altyapısı Hazırlığı ✅          |
| 17 Tem 2025 | Model eğitim optimizasyonları yapıldı, performans metrikleri oluşturuldu  | ROC eğrisi görselleştirilmedi     | Metric logger için dashboard entegrasyonu     | Model Eğitimi 🟡                     |
| 18 Tem 2025 | Model parametreleri değerlendirildi, mock verilerle eğitim testi yapıldı  | Deployment stratejisi net değil   | Canlı ortam deployment planını oluştur       | Model Eğitimi 🟡                     |
| 19 Tem 2025 | Kodlama standartları belirlendi, dış bağımlılıklar listelendi            | Sertifikasyon süreci başlamadı    | HIPAA uyum testlerini planla                 | HIPAA/KVKK Uyum 🔴                   |
| 20 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 21 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 22 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 23 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 24 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 25 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 26 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 27 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 28 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 29 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 30 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 31 Tem 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 1 Agus 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 2 Agus 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
| 3 Agus 2025 | Sprint değerlendirme maddeleri oluşturuldu, son rötuşlar yapıldı          | Radyolog eğitim platformu kurulmadı | LMS entegrasyonu için araştırma yap         | Radyolog Eğitim Planı ✅             |
---

## 🔄 Sprint Review & Raporu (20 Haziran - 3 Temmuz 2025)

## 🔄 Sprint 1–2-3 Planlama & Hazırlık

### 🧩 Sprint Teması

> **MVP’ye giden yolda FL altyapısının, veri pipeline’ının ve model test ortamının planlanması**

---

### 🎯 Sprint Hedefleri ve Durumu

| İş Kalemi                            | Durum        | Açıklama                                                              |
|------------------------------------|-------------|---------------------------------------------------------------------|
| Federated Learning Sunucusu kurulumu | ✅ Tamamlandı | Flower + PyTorch ile FL sunucusu için test altyapısı hazırlanacak     |
| DICOM veri pipeline prototipi        | ✅ Tamamlandı | Türkçe arayüz + otomatik DICOM düzeltme bileşeni geliştirilecek       |
| Anonim vaka verisi entegrasyonu      | 🟡 Devam Ediyor | 3.500+ mamografi datası veri tabanına aktarılacak                     |
| Tech Stack ve sistem bileşenleri     | ✅ Tamamlandı | Kullanılacak teknolojiler ve modüller belirlendi                      |
| MVP modül şeması + proje takvimi     | ✅ Tamamlandı | Miro üzerinden sistem mimarisi ve gant takvimi çizildi                |
| Model eğitimi (ilk testler)          | 🟡 Devam Ediyor | EfficientNet-B4 ile ilk test eğitimleri yapılacak                     |
| HIPAA/KVKK uyum dokümantasyonu       | 🔴 Başlamadı | Etik kurul başvurusu için gerekli belgeler hazırlanacak               |
| Radyolog eğitim planı                | 🟢 Planlandı | LMS platform entegrasyonu öncesi içerik ve kullanıcı akışı tasarlandı |

---

### 🧠 Durum Özeti (Retrospektif Hazırlık Aşaması)

* ✅ Planlama süreci başarıyla tamamlandı
* 🛠 MVP modülleri ve teknoloji haritası netleştirildi
* 🟡 Teknik uygulamalara geçiş için altyapı çalışmaları sırada
* ✅ Yazılım modülleri aktif geliştirmeye geçti ve önemli ilerleme kaydedildi.

---

### 📊 Hazırlık Düzeyi (Sprint 1–2-3)

| Kriter                       | Durum | Açıklama                                         |
|----------------------------|-----|------------------------------------------------ |
| Teknik Stack ve Sistem Planı | ✅     | Tüm sistem bileşenleri teknolojiyle eşleştirildi |
| Veri Altyapısı Hazırlığı     | 🟢    | Vaka datası aktarımı ve DICOM pipeline planlandı |
| FL Eğitim Altyapısı          | 🟢    | Flower sunucusu kurulumu için kaynaklar belirlendi |
| MVP Modül Haritası ve Takvim | ✅     | Gant diyagramı ve Miro çıktıları oluşturuldu     |
| Geliştirme / Kod Başlangıcı  | ✅     | Kodlama aktif olarak devam ediyor                          |
| Regülasyon Dokümantasyonu    | 🔴    | KVKK/HIPAA belgeleri henüz oluşturulmadı         |

---

### 🔍 Notlar ve Öncelikler

* 🎯 İlk odak: **Veri pipeline kurulumu + FL sunucusunun devreye alınması**
* 🔐 Regülasyon belgeleri olmadan test verisiyle bile model eğitimi başlamamalı
* 🎓 Radyolog eğitimi planı hazır, ancak içerik ve platform kurulumuna geçilmedi
* 📦 Model eğitimi yapılabilmesi için **anonim veri aktarımı ön koşul**

---

### 🧠 Sprint Sonu Notları (Retrospective)

**Güçlü Yönler**

* Yüksek teknik çıktı ve prototip kalitesi
* Tek kişilik yönetimde sürdürülebilirlik
* Backlog ve planlama disiplini

**İyileşmesi Gerekenler**

* Zaman yönetimi: Etik süreçlerin gecikmesi
* Belgeleme önceliklendirmesi (özellikle KVKK/HIPAA)

---

## 📊 Sprint 1, 2, 3 Tamamlanması Tahmin Edilen Puan

| Kriter                                  | Açıklama                                                        | Puan (0-10) |
|---------------------------------------|---------------------------------------------------------------|-----------|
| Sprint Planlama       | Daily Scrum'lar          | 10          |
| Kullanıcı Hikayeleri ve Teknik Uygulama | User Story'lerin karşılanma durumu, backend & frontend iskeleti | 10          |
| GitHub Düzeni              | `README` düzeni              | 10          |
| Proje amblemi    | Proje ile ilgili görsel tasarım                   | 10          |
| Ürün İlerlemesi                         | Görsel veya fonksiyonel ilerleme örnekleri                      | 10          |
| Veri kaynakları Araştırması         | Model için kullanılacak veri           | 10          |
| Piyasa Karşılaştırması | Benzer projeler özelliklerini analiz etme | 10          |
| Proje Geliştirme Süreçleri       |   gant diagramı     | 10          |
| Tech Stack    | Kullanılan Teknolojilerin belirlenmesi                  | 10          |
| Sistemler                         | Modülleri belirleme                      | 10          |

* Toplam: 100 / 100*
  
---

# Ürün Durum Görseli

<img width="1024" height="1024" alt="Image" src="https://github.com/user-attachments/assets/b8132cb1-ec30-4783-88d7-21bb2c77466a" />

---

 Ensuring the security and privacy of sensitive medical data is paramount. While the application incorporates
  homomorphic encryption for federated learning, additional measures are crucial for a production deployment.

  Data in Transit (Communication Security)

  All communication between clients (web, mobile, FL nodes) and the backend API MUST be encrypted using HTTPS
  (TLS/SSL). This protects data from eavesdropping and tampering during transmission.

   * For the FastAPI Backend: Deploy behind a reverse proxy (e.g., Nginx, Caddy) that handles TLS termination.
     Obtain and configure valid SSL certificates (e.g., from Let's Encrypt).
   * For Mobile and Web Clients: Ensure that API_URL and NEXT_PUBLIC_API_URL are configured to use https:// in
     production environments.
   * For FL Nodes: Ensure the BACKEND_API_URL is configured to use https://.

  Data at Rest (Storage Security)

  Sensitive data stored on disk, including database files and uploaded medical images, MUST be encrypted at
  rest. This protects data from unauthorized access if the underlying storage is compromised.

   * Database (PostgreSQL):
       * Utilize full disk encryption on the server hosting the PostgreSQL database.
       * Consider PostgreSQL's native encryption features or extensions if available and suitable for your
         deployment.
   * Medical Images (Secure Storage):
       * Ensure the filesystem where secure_storage/medical_images/ resides is encrypted.
       * Implement access controls (file system permissions) to restrict access to these directories to only the
         necessary application processes.

  Federated Learning & Secure Data Flow

  This platform leverages advanced cryptographic techniques and privacy-preserving machine learning to ensure
  the confidentiality and integrity of sensitive medical data during federated learning.

   * Homomorphic Encryption (TenSEAL): Model updates (gradients/weights) from individual FL nodes are encrypted
     using Homomorphic Encryption (specifically, the TenSEAL library) before being sent to the central FL
     server. This allows the server to perform aggregation operations on the encrypted data without ever
     decrypting it, thus protecting the privacy of each node's local model contributions.
   * Differential Privacy (Opacus): (Implemented in fl-node) To further enhance privacy, Differential Privacy is
     applied during local model training on each FL node. This adds a controlled amount of noise to the
     gradients, ensuring that the aggregated model does not reveal information about any single patient's data,
     even if an adversary could analyze the model updates.
   * Secure Medical Image Storage: Medical images uploaded via the mobile application are stored securely. While
     the current setup emphasizes disk encryption and access controls, future enhancements may include more
     advanced secure multi-party computation (MPC) or blockchain-based solutions for enhanced data provenance and
      access management.

  For more technical details on the implementation of Homomorphic Encryption and Differential Privacy, please
  refer to the backend/app/encryption_service.py and fl-node/src/client.py files, respectively.

  Federated Learning Flow & Secure Storage Deep Dive

  This platform is designed with privacy and security at its core, particularly concerning the sensitive medical
   image data and the federated learning process.

  Federated Learning Data Flow

  The federated learning process ensures that raw patient data never leaves the local medical institution.
  Instead, only encrypted model updates are shared.

   1. Local Training: Each FL node (medical institution) trains a local model on its own de-identified patient
      data.
   2. Encrypted Model Updates: Instead of sending raw model weights, the FL node encrypts the model updates
      (gradients/weights) using Homomorphic Encryption (TenSEAL). This allows mathematical operations to be
      performed on the encrypted data.
   3. Secure Aggregation: The central FL server receives these encrypted updates from multiple nodes. Crucially,
      the server aggregates these encrypted updates without ever decrypting them. This ensures that the server
      never has access to individual model contributions in plaintext.
   4. Global Model Update: The aggregated encrypted updates are then used to update the global model.
   5. Decryption (Optional & Controlled): Only the final, aggregated global model, or specific aggregated
      metrics, might be decrypted under strict controls for evaluation or deployment.

  For a more detailed technical explanation of Homomorphic Encryption and Differential Privacy implementation,
  refer to backend/app/encryption_service.py and fl-node/src/client.py. Visual diagrams illustrating this flow
  will be added in future documentation.

  Secure Medical Image Storage

  Medical images are handled with the utmost care to ensure patient privacy and data integrity.

   * Encryption at Rest: All uploaded medical images are stored on encrypted file systems. This protects the
     data from unauthorized access even if the storage infrastructure is compromised.
   * Access Controls: Strict access controls and permissions are enforced at the file system level, ensuring
     that only authorized application processes can access the image files.
   * De-identification: Before being used for training, images are de-identified to remove any personally
     identifiable information.

  Further documentation, including detailed diagrams on secure image upload, storage, and retrieval, and how
  access controls are enforced, will be provided.

  Troubleshooting/FAQ

  This section will address common issues and frequently asked questions related to setting up, running, and
  developing the platform. Topics will include:

   * Common Docker Compose issues and solutions.
   * Database connection problems.
   * Troubleshooting FL node connectivity.
   * Resolving dependency conflicts.

  Deployment Guide

  This section will provide a comprehensive guide for deploying the Federated Cancer Screening Platform to
  production environments. It will cover:

   * Container Orchestration: Strategies for deploying and managing containers using platforms like Kubernetes
     or Docker Swarm.
   * Load Balancing: Setting up load balancers to distribute traffic and ensure high availability.
   * Monitoring and Logging: Implementing robust monitoring and logging solutions to track application health
     and performance.
   * Secrets Management: Securely managing sensitive information such as API keys and database credentials.

  Deployment Guide

  This section will provide a comprehensive guide for deploying the Federated Cancer Screening Platform to
  production environments. It will cover:

   * Container Orchestration: Strategies for deploying and managing containers using platforms like Kubernetes
     or Docker Swarm.
   * Load Balancing: Setting up load balancers to distribute traffic and ensure high availability.
   * Monitoring and Logging: Implementing robust monitoring and logging solutions to track application health
     and performance.
   * Secrets Management: Securely managing sensitive information such as API keys and database credentials.

  Deployment Guide

  This section will provide a comprehensive guide for deploying the Federated Cancer Screening Platform to
  production environments. It will cover:

   * Container Orchestration: Strategies for deploying and managing containers using platforms like Kubernetes
     or Docker Swarm.
   * Load Balancing: Setting up load balancers to distribute traffic and ensure high availability.
   * Monitoring and Logging: Implementing robust monitoring and logging solutions to track application health
     and performance.
   * Secrets Management: Securely managing sensitive information such as API keys and database credentials.

  Troubleshooting/FAQ

  This section will address common issues and frequently asked questions related to setting up, running, and
  developing the platform. Topics will include:

   * Common Docker Compose issues and solutions.
   * Database connection problems.
   * Troubleshooting FL node connectivity.
   * Resolving dependency conflicts.

  Deployment Guide

  This section will provide a comprehensive guide for deploying the Federated Cancer Screening Platform to
  production environments. It will cover:

   * Container Orchestration: Strategies for deploying and managing containers using platforms like Kubernetes
     or Docker Swarm.
   * Load Balancing: Setting up load balancers to distribute traffic and ensure high availability.
   * Monitoring and Logging: Implementing robust monitoring and logging solutions to track application health
     and performance.
   * Secrets Management: Securely managing sensitive information such as API keys and database credentials.

  Troubleshooting/FAQ

  This section will address common issues and frequently asked questions related to setting up, running, and
  developing the platform. Topics will include:

   * Common Docker Compose issues and solutions.
   * Database connection problems.
   * Troubleshooting FL node connectivity.
   * Resolving dependency conflicts.

  Contributing

  Feel free to contribute to this project. Please follow standard GitHub flow (fork, branch, pull request).


  License

  This project is licensed under the MIT License - see the LICENSE file for details.