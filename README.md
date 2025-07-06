<img width="2048" height="2048" alt="Image" src="https://github.com/user-attachments/assets/63a2a5c1-8e1a-48b1-8ff1-7ec8758a3637" />

# Takım İsmi
# YZTA057

# 👥 Takım Üyeleri

# Takımımız

|                | İsim                 | Akademik Geçmiş                             |  LinkedIn Hesabı     |  Rol                                |
| -------------- | -------------------- | ------------------------------------------- | -------------------- |------------------------------------ |
| ![Foto1](https://media.licdn.com/dms/image/v2/D4D03AQEcFLdj-ktrsA/profile-displayphoto-shrink_800_800/B4DZTvqbLzGcAg-/0/1739187664723?e=1757548800&v=beta&t=ZIS-Gnv0tUYzkujVyR8x3GUB48IwnZsJY9n3efuf6xo) | Gülşah Kadıoğlu  | <br>✏️Gazi University - M.Sc. in Data Science<br><br>🎓Eskişehir Osmangazi University - B.Sc. in Electrical and Electronics Engineering<br><br>🎓Istanbul University - B.Sc. in Child Development<br><br>  | https://www.linkedin.com/in/gulsahkadioglu/ | Scrum Master & Product Owner & Developer |
| ![Foto2](https://media.licdn.com/dms/image/v2/D4D03AQFlDSshM0XZ0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669376963478?e=1757548800&v=beta&t=NpJvtvgdGHfnsOeDP1Wa1crF2ThyVxYnBNVqMA-X8hY) | Orkun Koçak  | 🎓TED University - M.Sc. in Computer Science<br><br>🎓TED University - B.Sc. in Mathematics Education  | https://www.linkedin.com/in/orkun-kocak/ | Scrum Master & Product Owner & Developer |


# 👩‍🏫 Özel Öğrenci Takip Paneli

# Proje İsmi
## 🧠 Beni Anla

> **Özel gereksinimli öğrencilerle çalışan öğretmenler için yapay zeka destekli gözlem ve destek paneli**

**Beni Anla**, öğretmenlerin sınıf ortamında öğrencilerini daha yakından tanımasını, davranış ve gelişim süreçlerini kayıt altına almasını ve kişiselleştirilmiş öneriler almasını sağlayan web tabanlı bir sistemdir. Yapay zeka desteğiyle, öğretmene öğrencinin dikkat, duygu durumu ve etkileşim verileri hakkında analiz sunar.

---

## 🎯 Proje Amacı

Bu proje, özel gereksinimli öğrencilerle çalışan öğretmenlerin;

* Günlük gözlemlerini kolayca kaydedebilmesini,
* Yapay zeka destekli analizlerle öğrenciyi daha iyi tanımasını,
* Gelişimi izleyip kişiselleştirilmiş eğitim planları oluşturmasını sağlamak amacıyla geliştirilmiştir.

---

## 🔄 Scrum Süreci

Proje çevik geliştirme (Agile) prensiplerine göre **SCRUM metodolojisi** ile yürütülmektedir:

| Süreç             | Tanım                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------ |
| **Product Owner** | Eğitim teknolojileri alanında çalışan öğretmen / danışman                                  |
| **Scrum Master**  | Geliştirme sürecini yöneten teknik lider                                                   |
| **Sprint Süresi** | 2 hafta                                                                                    |
| **Toplantılar**   | Günlük 15 dakikalık "Daily Scrum", sprint başında planlama ve sonunda demo & retrospective |

### Product Backlog (Örnek)

* Öğrenci profil yönetimi
* Günlük gözlem formu
* Yapay zeka ile öneri motoru
* Gelişim analizi ve raporlama
* Kullanıcı yönetimi (öğretmen / admin)
* Erişilebilirlik özellikleri (renk körlüğü, sesli yardım vb.)

---

## 🧩 Özellikler

* 👤 **Öğrenci Profili**: Temel bilgiler, güçlü/zayıf yönler, bireyselleştirilmiş notlar
* 📅 **Günlük Gözlem**: Öğretmenin seçtiği parametrelere göre öğrenci analizi
* 📈 **Gelişim Takibi**: Grafikler ve örüntü tespiti (örneğin haftalık dikkat eğrisi)
* 🧠 **AI Destekli Öneriler**: Etkinlik veya müdahale önerileri
* 📝 **Raporlama**: Yazdırılabilir PDF raporlar, veli görüşme çıktıları
* 🔐 **Güvenli Giriş Sistemi**: Yetkilendirme, kullanıcı yönetimi

---

## 🧪 Kullanılan Teknolojiler

| Katman     | Teknoloji                      |
| ---------- | ------------------------------ |
| Backend    | Python + Flask                 |
| Frontend   | React.js                       |
| Veritabanı | PostgreSQL                     |
| AI Modülü  | Scikit-learn / TensorFlow Lite |
| Diğer      | JWT Auth, REST API, Bootstrap  |

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

---

## 📊 Sprint 1 Puanlama Mantığı (YZTA Bootcamp'e Göre)

| Kriter                                  | Açıklama                                                        | Puan (0-10) |
| --------------------------------------- | --------------------------------------------------------------- | ----------- |
| Sprint Planlama ve Süreç Takibi         | Daily Scrum'lar, görev yönetimi ve planlama etkinliği           | 10          |
| Kullanıcı Hikayeleri ve Teknik Uygulama | User Story'lerin karşılanma durumu, backend & frontend iskeleti | 10          |
| GitHub Düzeni ve Belgeler               | `README`, `docs`, branch yönetimi ve commit düzeni              | 10          |
| Ekip İçi İletişim ve Görev Paylaşımı    | Rol paylaşımı, aktif katkı, toplantı katılımı                   | 10          |
| Ürün İlerlemesi                         | Görsel veya fonksiyonel ilerleme örnekleri                      | 10          |

**Toplam Puan:** /50

---

## 🚀 Kurulum

### 1. Reposu klonlayın

```bash
git clone https://github.com/your-org/ozel-takip-paneli.git
cd ozel-takip-paneli
```

### 2. Sanal ortam kurun ve bağımlılıkları yükleyin

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. Frontend başlatın

```bash
cd frontend
npm install
npm start
```

### 4. Backend başlatın

```bash
cd backend
flask run
```

---

Devamı Sprint 2 ile birlikte eklenecektir.
