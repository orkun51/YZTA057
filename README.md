# YZTA057

# 
Gülşah Kadıoğlu
Orkun Koçak
# 👩‍🏫 **Özel Öğrenci Takip Paneli**

# 🧠 Beni Anla

> **Özel gereksinimli öğrencilerle çalışan öğretmenler için yapay zeka destekli gözlem ve destek paneli**

**Beni Anla**, öğretmenlerin sınıf ortamında öğrencilerini daha yakından tanımasını, davranış ve gelişim süreçlerini kayıt altına almasını ve kişiselleştirilmiş öneriler almasını sağlayan web tabanlı bir sistemdir. Yapay zeka desteğiyle, öğretmene öğrencinin dikkat, duygu durumu ve etkileşim verileri hakkında analiz sunar.  

---

## 🎯 Proje Amacı

Bu proje, özel gereksinimli öğrencilerle çalışan öğretmenlerin;
- Günlük gözlemlerini kolayca kaydedebilmesini,
- Yapay zeka destekli analizlerle öğrenciyi daha iyi tanımasını,
- Gelişimi izleyip kişiselleştirilmiş eğitim planları oluşturmasını sağlamak amacıyla geliştirilmiştir.

---

## 🔄 Scrum Süreci

Proje çevik geliştirme (Agile) prensiplerine göre **SCRUM metodolojisi** ile yürütülmektedir:

| Süreç         | Tanım |
|---------------|-------|
| **Product Owner** | Eğitim teknolojileri alanında çalışan öğretmen / danışman |
| **Scrum Master**  | Geliştirme sürecini yöneten teknik lider |
| **Sprint Süresi** | 2 hafta |
| **Toplantılar**   | Günlük 15 dakikalık "Daily Scrum", sprint başında planlama ve sonunda demo & retrospective |

### Product Backlog (Örnek)
- Öğrenci profil yönetimi
- Günlük gözlem formu
- Yapay zeka ile öneri motoru
- Gelişim analizi ve raporlama
- Kullanıcı yönetimi (öğretmen / admin)
- Erişilebilirlik özellikleri (renk körlüğü, sesli yardım vb.)

---

## 🧩 Özellikler

- 👤 **Öğrenci Profili**: Temel bilgiler, güçlü/zayıf yönler, bireyselleştirilmiş notlar
- 📅 **Günlük Gözlem**: Öğretmenin seçtiği parametrelere göre öğrenci analizi
- 📈 **Gelişim Takibi**: Grafikler ve örüntü tespiti (örneğin haftalık dikkat eğrisi)
- 🧠 **AI Destekli Öneriler**: Etkinlik veya müdahale önerileri
- 📝 **Raporlama**: Yazdırılabilir PDF raporlar, veli görüşme çıktıları
- 🔐 **Güvenli Giriş Sistemi**: Yetkilendirme, kullanıcı yönetimi

---

## 🧪 Kullanılan Teknolojiler

| Katman     | Teknoloji      |
|------------|----------------|
| Backend    | Python + Flask |
| Frontend   | React.js       |
| Veritabanı | PostgreSQL     |
| AI Modülü  | Scikit-learn / TensorFlow Lite |
| Diğer      | JWT Auth, REST API, Bootstrap |

---
## Sprint1

# 🧠 Beni Anla

> **Özel gereksinimli öğrencilerle çalışan öğretmenler için yapay zeka destekli gözlem ve destek paneli**

**Beni Anla**, öğretmenlerin sınıf ortamında öğrencilerini daha yakından tanımasını, davranış ve gelişim süreçlerini kayıt altına almasını ve kişiselleştirilmiş öneriler almasını sağlayan web tabanlı bir sistemdir. Yapay zeka desteğiyle, öğretmene öğrencinin dikkat, duygu durumu ve etkileşim verileri hakkında analiz sunar.

---

## 📌 Sprint 1 – Planlama ve Temel Yapı Kurulumu (20 Haziran – 6 Temmuz)

### 🌟 Sprint 1 Hedefi

* Proje vizyonunun netleştirilmesi
* Proje yapısının kurulması (frontend + backend)
* İlk kullanıcı arayüzlerinin iskelet olarak oluşturulması
* Öğrenci gözlem modülünün tasarlanması (veritabanı + form)
* Takım içi görev dağılımının yapılması
* AI analiz altyapısının temellerinin atılması (tasarım düzeyinde)

### ✅ Tamamlanması Beklenen İşler (User Stories)

| ID   | User Story                                              | Kabul Kriteri                                          |
| ---- | ------------------------------------------------------- | ------------------------------------------------------ |
| US01 | Öğretmen olarak sisteme giriş yapabilmek istiyorum      | Login ekranı çalışır, sahte kullanıcıyla oturum açılır |
| US02 | Yeni bir öğrenci profili oluşturabilmek istiyorum       | Form üzerinden öğrenci bilgileri eklenebilir           |
| US03 | Günlük gözlem formunu doldurmak istiyorum               | Basit gözlem parametreleri girilebilir olmalı          |
| US04 | Takım olarak görev dağılımını görmek istiyorum          | `README.md` altında roller tanımlanmış olmalı          |
| US05 | Yapay zeka öneri sisteminin mantığını anlamak istiyorum | AI mantığı `docs/ai_plan.md` dosyasında açıklanmalı    |

### 🧱️ Teknik Görevler

* [x] Flask backend iskeletinin kurulması
* [x] React frontend başlatılması (`create-react-app`)
* [ ] PostgreSQL veritabanı bağlantısı kurulması
* [ ] Öğrenci modeli (`Student`) oluşturulması
* [ ] Basit API uçları (`/students`, `/observations`)
* [ ] Form sayfalarının ilk prototipleri
* [ ] GitHub `dev`, `main` branch yapısının oluşturulması

### 🔁 Daily Scrum Notları (Örnek)

```
🧑‍💻 Bugün: Öğrenci formu arayüzünü tamamladım  
🔧 Yarın: Gözlem API'sini test edeceğim  
🚧 Engel: PostgreSQL bağlantısı hata veriyor
```

### 📷 Screenshot ve Belgeler

* [ ] `screenshots/` klasörüne ilk arayüz görselleri eklenecek
* [ ] `docs/sprint1_summary.md` dosyasında Sprint Review özeti yer alacak

### 🧠 Sprint Retrospective (Sorular)

* Bu sprintte ne iyi gitti?
* Neleri geliştirebiliriz?
* Takım içinde ne öğrendik?
* Bir sonraki sprint için hangi riskleri gördük?


## 🚀 Kurulum

### 1. Reposu klonlayın
```bash
git clone https://github.com/your-org/ozel-takip-paneli.git
cd ozel-takip-paneli****
