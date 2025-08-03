---

# Projenin Amblemi

<img width="1024" height="1024" alt="Image" src="https://github.com/user-attachments/assets/7fa4687d-3858-4128-a8f2-4dbe05589d15" />

---

# Takım İsmi

YZTA 4.0 Mezuniyet Bootcamp AI 57.2.0

---

# Takım

|                | İsim                 | Akademik Geçmiş                             |  LinkedIn            |  Takımdaki Rolü                     |
| -------------- | -------------------- | ------------------------------------------- | -------------------- |------------------------------------ |
| ![Foto1](https://media.licdn.com/dms/image/v2/D4D03AQEcFLdj-ktrsA/profile-displayphoto-shrink_800_800/B4DZTvqbLzGcAg-/0/1739187664723?e=1757548800&v=beta&t=ZIS-Gnv0tUYzkujVyR8x3GUB48IwnZsJY9n3efuf6xo) | Gülşah Kadıoğlu  | <br>✏️Gazi University - M.Sc. in Data Science<br><br>🎓Eskişehir Osmangazi University - B.Sc. in Electrical and Electronics Engineering<br><br>  | https://www.linkedin.com/in/gulsahkadioglu/ | Scrum Master & Product Owner & Developer |

# 🧠  Projenin İsmi

##  🎀 Mammo AI-TR

---

🔍 Proje Tanımı

> Türkiye'nin ilk HIPAA uyumlu federated meme kanseri tarama platformu olan MammoAI-TR

- ✨ Anadolu doku yoğunluğu değişimleri için bölgeye özgü modeller
- ⚡ Flower Framework + Havelsan AI çipleri ile %40 daha hızlı eğitim
- 📊 Türkiye'nin önde gelen hastanelerinden 3.500'den fazla anonim vaka

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

### ⚡ 2 Aylık MVP Hedefleri
| Hedef                          | Metrik                     | Başarı Kriteri          | Durum |
|--------------------------------|----------------------------|-------------------------|-------|
| Model performansı              | Sensitivity ≥%85, AUC ≥0.90 | Test verisinde doğrulama | 🟡 Devam Ediyor |

🟡 Devam Ediyor, ✅ Tamamlandı, 🔴 Başlamadı, 🟢 Planlandı

### 🚀 1 Yıllık Büyüme Hedefleri
| Hedef                          | Kilometre Taşı             | Kritik Tarih           |
|--------------------------------|----------------------------|------------------------|
| Ulusal tarama programı         | SBÜ protokolüne giriş      | 2025-Q1               |
| Model sertifikasyonu           | Accuracy ≥%90 + QIDW       | 2025-Q2               |

---

## 🧩 SİSTEM BİLEŞENLERİ

| Modül               | Teknoloji Stack                  | Özgün Katkılar                          | Çıktılar                             | Durum      |
|---------------------|----------------------------------|-----------------------------------------|--------------------------------------|------------|
| **Veri Toplama**    | FastAPI + DICOM SDK              | - Türkçe radyolog arayüzü<br>- DICOM tag auto-fix | Standardize mamografi pipeline       | 🚧 Dev    |
| **FL Sunucu**       | Flower + PyTorch                 | - Türkçe CLI doküman<br>- Hybrid şifreleme (KVKK+HIPAA) | Merkezsiz model eğitimi             | 🚧 Dev    |
| **Mobil Analiz**    | TensorFlow Lite + ONNX           | - 14.7MB optimized model<br>- Offline inferans | Köy kliniklerinde tarama           | 🚧 Dev    |
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
|--------------------|-------------------------------------------|-------------------------------|
| **Trello**  | Görev takibi ve sprint planlama	| GitHub, Google Calendar             |
| **Miro**      | Akış diyagramları ve wireframing |	Figma tasarımları  |

---

## 📅 Daily Scrum Kayıtları (20 Haziran 2025 - 3 Ağustos 2025)

| Tarih       | Yapılması planlanan                                                                 |
|-------------|---------------------------------------------------------------------------|
| 20 Haz 2025 | Aşama 1: Proje Başlatma ve Temel Kurulum: Proje gereksinimlerini ve kapsamını detaylandırın, ana özellik setini belirle.    |
| 21 Haz 2025 | Aşama 1: Proje Başlatma ve Temel Kurulum: Git deposunu başlatın ve temel proje dizin yapısını oluştur (backend/, fl-node/, frontend/, mobile-app/).  |
| 22 Haz 2025 | Aşama 1: Proje Başlatma ve Temel Kurulum: docker-compose.yml dosyasını temel servisler (db, redis, backend, fl-server, fl-node) için tasarlayın ve ilk taslağını oluştur.         |
| 23 Haz 2025 | Aşama 1: Proje Başlatma ve Temel Kurulum: Her bir alt proje için (backend/, fl-node/, frontend/, mobile-app/) gerekli requirements.txt veya package.json dosyalarını oluşturun ve temel bağımlılıkları listele.   |
| 24 Haz 2025 | Aşama 1: Proje Başlatma ve Temel Kurulum: Her bir servis için (backend/Dockerfile, fl-node/Dockerfile, backend/fl_server/Dockerfile) başlangıç Dockerfile'larını oluştur.            |
| 25 Haz 2025 | Aşama 2: Backend Geliştirme: backend/app/main.py içinde FastAPI uygulamasını başlatın ve temel router'ları (auth, reports, cases, model_versions) tanımla.                |
| 26 Haz 2025 | Aşama 2: Backend Geliştirme: PostgreSQL veritabanı bağlantısını (backend/app/db/session.py) ve yapılandırmasını (backend/app/core/config.py) ayarla.       |
| 27 Haz 2025 | Aşama 2: Backend Geliştirme: Alembic kullanarak veritabanı migrasyon sistemini kurun (alembic.ini, alembic/env.py).      |
| 28 Haz 2025 | Aşama 2: Backend Geliştirme: Veritabanı modellerini (backend/app/models/user.py, report.py, case.py, fl_metrics.py, model_version.py, medical_image.py) Veritabanı ORM ile tanımla          |
| 29 Haz 2025 | Aşama 2: Backend Geliştirme: Temel CRUD operasyonlarını (backend/app/crud/user.py, report.py, case.py, medical_image.py, model_version.py) uygula |
| 30 Haz 2025 | Aşama 2: Backend Geliştirme: Kullanıcı kayıt, giriş, profil yönetimi ve yetkilendirme için API uç noktalarını (backend/app/api/auth.py) oluştur (JWT tabanlı kimlik doğrulama                 |
| 01 Tem 2025 | Aşama 2: Backend Geliştirme: Raporlar için API uç noktalarını (backend/app/api/reports.py) oluştur (rapor oluşturma, listeleme, FL metrikleri).          |
| 02 Tem 2025 | Aşama 2: Backend Geliştirme: Vakalar ve tıbbi görüntüler için API uç noktalarını (backend/app/api/cases.py) oluştur (vaka oluşturma, görüntü yükleme, listeleme).          |
| 03 Tem 2025 | Aşama 2: Backend Geliştirme: Model versiyonları için API uç noktalarını (backend/app/api/model_versions.py) oluştur (model versiyonlarını listeleme).        |
| 04 Tem 2025 | Aşama 2: Backend Geliştirme: Homomorfik şifreleme servisini (backend/app/encryption_service.py) TenSEAL ile entegre edin ve genel  bağlamı sun.      |
| 05 Tem 2025 | Aşama 3: Federated Learning Sunucusu Geliştirme: Flower kütüphanesini kullanarak federated learning sunucusunu (backend/fl_server/server.py) uygula |
| 06 Tem 2025 | Aşama 3: Federated Learning Sunucusu Geliştirme: SecureAggregationStrategy sınıfını tanımlayın ve şifreli ağırlık toplama mantığını uygula    |
| 07 Tem 2025 | Aşama 3: Federated Learning Sunucusu Geliştirme: Toplanan modelleri (.pth dosyaları olarak) sunucu tarafında güvenli bir şekilde kaydetme mekanizmasını (backend/fl_server/server.py içinde) uygulayın. |
| 08 Tem 2025 | Aşama 3: Federated Learning Sunucusu Geliştirme: FL tur metriklerini ve kaydedilen model versiyonlarını backend veritabanına kaydetme mantığını entegre et.          |
| 09 Tem 2025 | Aşama 3: Federated Learning Sunucusu Geliştirme: FL sunucusunun backend API ile iletişimini sağla (örn. istemci kaydı, görev dağıtımı için gerekli olabilecek ek uç noktalar).   |
| 10 Tem 2025 | Aşama 4: Federated Learning Düğümü (İstemci) Geliştirme: Veri yükleyiciyi (fl-node/data_loader.py) uygula (örneğin, kanser tarama verilerini yükleme ve ön  işleme).           |
| 11 Tem 2025 | Aşama 4: Federated Learning Düğümü (İstemci) Geliştirme: PyTorch kullanarak federated learning model mimarisini (fl-node/model.py) tanımla.         |
| 12 Tem 2025 | Aşama 4: Federated Learning Düğümü (İstemci) Geliştirme: Flower istemcisini (fl-node/client.py) uygulayın: get_parameters, fit, evaluate metodlarını tanımla.        |
| 13 Tem 2025 | Aşama 4: Federated Learning Düğümü (İstemci) Geliştirme: İstemci tarafında model eğitim döngüsünü (fl-node/client.py içinde) uygula.              |
| 14 Tem 2025 | Aşama 4: Federated Learning Düğümü (İstemci) Geliştirme: Eğitilmiş model ağırlıklarını TenSEAL kullanarak şifreleme ve serileştirme mantığını uygula.         |
| 15 Tem 2025 | Aşama 4: Federated Learning Düğümü (İstemci) Geliştirme: Backend'den şifreleme bağlamını alma mekanizmasını (fl-node/client.py içinde) uygula.                 |
| 16 Tem 2025 | Aşama 4: Federated Learning Düğümü (İstemci) Geliştirme: Sahte model oluşturma betiğini (fl-node/create_fake_model.py) geliştir (geliştirme ve test amaçlı).                 |
| 17 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: Next.js uygulamasını başlat ve temel proje yapısını kur. |
| 18 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: Kullanıcı kayıt ve giriş arayüzlerini (frontend/src/app/login/page.tsx, register/page.tsx) tasarla ve backend API ile entegre et. |
| 19 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: API iletişim servisini (frontend/src/services/api.ts) oluşturun ve JWT token yönetimini uygula.           |
| 20 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: Analiz raporlarını listeleyen ve detaylarını gösteren bileşenleri (frontend/src/components/ReportsList.tsx, frontend/src/app/reports/[id]/page.tsx) geliştirin.         |
| 21 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: Vaka yönetimi için bileşenleri (frontend/src/components/CasesList.tsx, frontend/src/app/cases/create/page.tsx, frontend/src/app/cases/[id]/page.tsx) geliştirin (vaka listeleme, oluşturma, görüntü yükleme).          |
| 22 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: Federated learning sürecini izlemek için bir kontrol paneli (frontend/src/app/dashboard/page.tsx) oluşturun ve FL metriklerini görselleştir.         |
| 23 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: Uygulama genelinde navigasyonu ve layout'u (frontend/src/app/layout.tsx) yapılandır.          |
| 24 Tem 2025 | Aşama 5: Frontend (Web Arayüzü) Geliştirme: Kullanıcı profili ve ayarları için temel bir arayüz (frontend/src/app/profile/page.tsx) geliştir.         |
| 25 Tem 2025 | Aşama 6: Mobil Uygulama Geliştirme: React Native uygulamasını başlatın ve temel proje yapısını kur         |
| 26 Tem 2025 | Aşama 6: Mobil Uygulama Geliştirme: Kullanıcı kayıt ve giriş ekranlarını (mobile-app/src/screens/LoginScreen.tsx, RegisterScreen.tsx) tasarla ve backend API ile entegre et.         |
| 27 Tem 2025 | Aşama 6: Mobil Uygulama Geliştirme: Push bildirim token'ını alıp backend'e kaydetme işlevini (mobile-app/App.tsx) uygula.         |
| 28 Tem 2025 | Aşama 6: Mobil Uygulama Geliştirme: Raporları ve vakaları listeleyen, detaylarını gösteren ekranları (mobile-app/src/screens/HomeScreen.tsx,  ReportDetailScreen.tsx, CasesScreen.tsx, CaseDetailScreen.tsx) geliştir.         |
| 29 Tem 2025 | Aşama 6: Mobil Uygulama Geliştirme: Mobil uygulama için navigasyon yapısını (mobile-app/src/navigation/AppNavigator.tsx, AppTabs.tsx) oluştur.         |
| 30 Tem 2025 | Aşama 6: Mobil Uygulama Geliştirme: Kullanıcı profili ekranını (mobile-app/src/screens/ProfileScreen.tsx) geliştir.         |
| 31 Tem 2025 | Aşama 7: Entegrasyon, Optimizasyon ve Dağıtım: Tüm Dockerfile'ları ve docker-compose.yml dosyasını üretim ortamı için optimize et.          |
| 1 Agus 2025 | Aşama 7: Entegrasyon, Optimizasyon ve Dağıtım: Ortam değişkenlerinin güvenli ve esnek bir şekilde yönetildiğinden emin ol (örn. .env dosyaları, Docker Compose ortam değişkenleri).         |
| 2 Agus 2025 | Aşama 7: Entegrasyon, Optimizasyon ve Dağıtım: Tüm servislerin (backend, FL sunucusu, FL düğümü, frontend, mobil uygulama) Docker Compose ile yerel olarak sorunsuz bir şekilde başlatıldığından ve birbirleriyle iletişim kurabildiğinden emin ol         |
| 3 Agus 2025 | Aşama 7: Entegrasyon, Optimizasyon ve Dağıtım: Temel günlük kaydı (logging) ve hata izleme mekanizmalarını kur         |
---

## 🔄 Sprint Review & Raporu (20 Haziran - 3 Ağustos 2025)

## 🔄 Sprint 1–2-3 Planlama & Hazırlık

### 🧩 Sprint 1-2-3 Teması

> **Proje Başlatma ve Temel Kurulum, Backend Geliştirme, Federated Learning Sunucusu Geliştirme, Frontend (Web Arayüzü) Geliştirme ve Entegrasyon, Optimizasyon ve Dağıtım **

---

### 🎯 Sprint 1-2-3 Hedefleri ve Durumu

| İş Kalemi                            | Durum        | Açıklama                                                              |
| ------------------------------------ | ------------ | --------------------------------------------------------------------- |
| Federated Learning Sunucusu kurulumu | 🟢 Planlandı | Flower + PyTorch ile FL sunucusu için test altyapısı hazırlanacak     |
| DICOM veri pipeline prototipi        | 🟢 Planlandı | Türkçe arayüz + otomatik DICOM düzeltme bileşeni geliştirilecek       |
| Anonim vaka verisi entegrasyonu      | 🔴 Başlamadı | 3.500+ mamografi datası veri tabanına aktarılacak                     |
| Tech Stack ve sistem bileşenleri     | ✅ Tamamlandı | Kullanılacak teknolojiler ve modüller belirlendi                      |
| MVP modül şeması + proje takvimi     | ✅ Tamamlandı | Miro üzerinden sistem mimarisi ve gant takvimi çizildi                |
| Model eğitimi (ilk testler)          | 🔴 Başlamadı | EfficientNet-B4 ile ilk test eğitimleri yapılacak                     |
| HIPAA/KVKK uyum dokümantasyonu       | 🔴 Başlamadı | Etik kurul başvurusu için gerekli belgeler hazırlanacak               |


---

### 🧠 Durum Özeti (Retrospektif Hazırlık Aşaması)

* ✅ Planlama süreci başarıyla tamamlandı
* 🛠 MVP modülleri ve teknoloji haritası netleştirildi
* 🟡 Teknik uygulamalara geçiş için altyapı çalışmaları sırada
* 🔴 Hiçbir yazılım modülü henüz aktif geliştirmeye geçmedi, sadece dokümantasyon + mimari seviyede

---

### 📊 Hazırlık Düzeyi (Sprint 1–2-3)

| Kriter                       | Durum | Açıklama                                         |
| ---------------------------- | ----- | ------------------------------------------------ |
| Teknik Stack ve Sistem Planı | ✅     | Tüm sistem bileşenleri teknolojiyle eşleştirildi |
| Veri Altyapısı Hazırlığı     | 🟢    | Vaka datası aktarımı ve DICOM pipeline planlandı |
| FL Eğitim Altyapısı          | 🟢    | Flower sunucu kurulumu için kaynaklar belirlendi |
| MVP Modül Haritası ve Takvim | ✅     | Gant diyagramı ve Miro çıktıları oluşturuldu     |
| Geliştirme / Kod Başlangıcı  | 🔴    | Kodlama henüz başlamadı                          |
| Regülasyon Dokümantasyonu    | 🔴    | KVKK/HIPAA belgeleri henüz oluşturulmadı         |

---

### 🔍 Notlar ve Öncelikler

* 🎯 İlk odak: **Veri pipeline kurulumu + FL sunucusunun devreye alınması**
* 🔐 Regülasyon belgeleri olmadan test verisiyle bile model eğitimi başlamamalı
* 📦 Model eğitimi yapılabilmesi için **anonim veri aktarımı ön koşul**

---

### 🧠 Sprint 1-2-3 Sonu Notları (Retrospective)

**Güçlü Yönler**

* Yüksek teknik çıktı ve prototip kalitesi
* Tek kişilik yönetimde sürdürülebilirlik
* Backlog ve planlama disiplini

**İyileşmesi Gerekenler**

* Zaman yönetimi: Etik süreçlerin gecikmesi
* Test ve docker

---

## 📊 Sprint 1, 2, 3 Tamamlanması Tahmin Edilen Puan

| Kriter                                  | Açıklama                                                        | Puan (0-10) |
| --------------------------------------- | --------------------------------------------------------------- | ----------- |
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

* Toplam: 100 / 100*
  
---

# Ürün Durum Görseli

<img width="1024" height="1024" alt="Image" src="https://github.com/user-attachments/assets/b8132cb1-ec30-4783-88d7-21bb2c77466a" />

---
# Federated Cancer Screening Platform

This project implements a federated learning-based cancer screening platform, allowing medical institutions to collaboratively train AI models without sharing sensitive patient data. It consists of a FastAPI backend, a React Native mobile application, and a Next.js web application, along with a federated learning node.

## Features

- **Secure User Authentication & Authorization:** Role-based access control for doctors and administrators across web and mobile platforms.
- **Case Management:** Doctors can create, view, and manage patient cases on both web and mobile interfaces.
- **Medical Image Upload:** Securely upload mammogram images associated with patient cases via the mobile application.
- **Federated Learning Integration:** Collaborative model training with secure aggregation using Homomorphic Encryption (TenSEAL). Model versioning and management are supported.
- **FL Metrics Dashboard:** Visualize federated learning round metrics (accuracy, loss) on the web interface.
- **FL Round Initiation:** Administrators can initiate new federated learning rounds directly from the web dashboard.
- **User Profile Management:** Users can view and update their profile information (email, password) on both web and mobile.
- **Push Notifications:** Mobile application supports push notifications for important updates.
- **XAI (Explainable AI) Features:** (Future/Planned) Generate heatmaps for analysis reports.

## Technologies Used

**Backend:**
- FastAPI (Python)
- SQLAlchemy (ORM)
- PostgreSQL (Database)
- Alembic (Database Migrations)
- Celery (Asynchronous Tasks)
- passlib, python-jose (Authentication)
- TenSEAL (Homomorphic Encryption)

**Mobile Application:**
- React Native
- Expo (for development convenience)
- Axios (HTTP Client)
- React Navigation (Navigation)
- React Native Paper (UI Components)
- React Native Keychain (Secure Storage)
- Expo Image Picker (Image Selection)
- Expo Notifications (Push Notifications)

**Web Application (Frontend):**
- Next.js (React Framework)
- Tailwind CSS (Styling)
- Axios (HTTP Client)
- Chart.js, React-Chartjs-2 (Data Visualization)

**Federated Learning Node:**
- Flower (Federated Learning Framework)
- PyTorch (Deep Learning)
- TenSEAL (Homomorphic Encryption)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Docker and Docker Compose (Recommended for easy setup)
- Node.js and npm (for web and mobile applications)
- Python and pip (for backend and FL node)

### 1. Clone the Repository

```bash
git clone https://github.com/orkun51/YZTA057.git
cd YZTA057
```

### 2. Backend Setup

Navigate to the `backend` directory:

```bash
cd backend
```

**a. Environment Variables:**

Create a `.env` file by copying the example:

```bash
cp .env.example .env
```

Open the newly created `.env` file and update the `SECRET_KEY` with a strong, unique string (at least 32 characters long). You can also adjust database credentials if needed.

**b. Install Python Dependencies:**

```bash
pip install -r requirements.txt
```

**c. Build and Run Backend Services (Docker Compose):**

This will build the Docker images and start the PostgreSQL database, Redis, and the FastAPI backend.

```bash
docker-compose up --build -d
```

**d. Run Database Migrations:**

Apply the database migrations to create the necessary tables. Ensure your Docker containers are running (`docker-compose up -d`).

```bash
docker-compose run --rm backend alembic upgrade head
```

### 3. Web Application Setup

Navigate to the `frontend` directory:

```bash
cd frontend
```

**a. Install Node.js Dependencies:**

```bash
npm install
```

**b. Environment Variables:**

Create a `.env.local` file in the `frontend` directory and add your backend API URL:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

### 4. Mobile Application Setup

Navigate to the `mobile-app` directory:

```bash
cd mobile-app
```

**a. Install Node.js Dependencies:**

```bash
npm install
```

**b. Environment Variables:**

Create a `.env` file by copying the example:

```bash
cp .env.example .env
```

Open the `.env` file and update `API_URL` to point to your backend. If running Docker locally, this will typically be `http://127.0.0.1:8000` (or your machine's IP address if testing on a physical device).

### 5. Running the Applications

**a. Start Backend (if not already running):**

From the project root, ensure Docker Compose services are up:

```bash
docker-compose up -d
```

**b. Start Web Application:**

From the `frontend` directory:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

**c. Start Mobile Application:**

From the `mobile-app` directory, run the application on an Android emulator/device or iOS simulator/device:

```bash
npm run android
# OR
npm run ios
```

**d. Start FL Server:**

From the `backend` directory:

```bash
python -m fl_server.server
```

**e. Start FL Node (Client):**

From the `fl-node` directory:

```bash
python -m client
```

## Usage

Once the applications are running:

1.  **Register & Login:** Use either the web or mobile app to register a new user (e.g., `doctor@example.com`, password: `password`). Log in with the newly created credentials.
2.  **Manage Cases:** Create new patient cases and upload mammogram images via the mobile app. View and manage cases on both web and mobile.
3.  **View Reports:** View analysis reports on both web and mobile.
4.  **FL Dashboard:** Navigate to the FL Dashboard on the web interface (`http://localhost:3000/fl-dashboard`) to view federated learning metrics and initiate new FL rounds.
5.  **Model Versioning:** Access the Model Versions page on the web interface (`http://localhost:3000/model-versions`) to see saved model versions.
6.  **User Profile:** Manage your user profile on both web and mobile applications.

## Contributing

Feel free to contribute to this project. Please follow standard GitHub flow (fork, branch, pull request).

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---
