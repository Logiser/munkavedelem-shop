# ⚡ MunkavédelmiShop – SETUP (Első Lépések)

## 📦 Amit Kapsz

**Fájl:** `munkavedelem-shop.zip` (45 KB)

Teljes, termelésre kész React webalkalmazás:
- ✅ Munkavédelmi e-commerce webshop
- ✅ Admin felület (FIFO raktárkészlet kezeléssel)
- ✅ 6 aloldal (ÁSZF, Adatvédelem, stb.)
- ✅ React Router SPA navigáció
- ✅ Netlify-re feltöltésre kész

---

## 🚀 1. PERC ALATT (Quick Start)

### 1. Zip Kicsomagolása

```bash
unzip munkavedelem-shop.zip
cd munkavedelem-shop
```

### 2. Függőségek Telepítése

```bash
npm install
```

> 2-3 percet vesz igénybe az első alkalommal

### 3. Fejlesztési Szerver

```bash
npm start
```

Automatikusan megnyílik: **http://localhost:3000** ✅

---

## 🔐 Admin Belépés (Teszthez)

```
URL: http://localhost:3000/admin-login
Jelszó: admin123
```

Az admin felületen:
- ✅ Terméklista megtekintése
- ✅ Új termék hozzáadása
- ✅ FIFO raktárkészlet kezelése
- ✅ Batch-ek hozzáadása/kivenni

---

## 📋 Folder Szerkezet

```
munkavedelem-shop/
├── package.json              ← NPM konfiguráció
├── netlify.toml              ← Netlify deploy config
├── public/
│   └── index.html            ← HTML template
├── src/
│   ├── App.js                ← React Router
│   ├── index.js              ← Entry point
│   ├── components/
│   │   └── WorkwearShop.jsx  ← Főoldal
│   └── pages/
│       ├── AdminPanel.jsx    ← Admin felület
│       └── StaticPages.jsx   ← Aloldalak
└── [dokumentáció .md fájlok]
```

---

## 📖 Dokumentáció (Fontos!)

| Fájl | Tartalom |
|------|----------|
| **README.md** | Projekt áttekintés |
| **QUICKSTART.md** | 5 perc alatt kész |
| **FEATURES.md** | ⭐ Admin & FIFO részletesen |
| **UPDATE_GUIDE.md** | Frissítési útmutató |
| **DESIGN_GUIDE.md** | Design & styling |
| **NETLIFY_DEPLOYMENT.md** | ⭐ Netlify-ra feltöltés (OBB!) |
| **SUMMARY.md** | Végső összefoglalás |

---

## 🌍 Netlify-ra Feltöltés (5 perc)

### A. GitHub Repo

```bash
# Ha nincs még git repo-d:
git init
git add .
git commit -m "Initial: MunkavédelmiShop"
git branch -M main
git remote add origin https://github.com/[felhasználó]/munkavedelem-shop
git push -u origin main
```

### B. Netlify Deploy

1. **netlify.com** → Regisztráció/Bejelentkezés
2. **New site from Git** → GitHub repo kiválasztása
3. **Deploy** → Kész! 🎉

URL lesz: `https://[random].netlify.app`

> **Részletes útmutató:** Nézd meg a **NETLIFY_DEPLOYMENT.md**-t!

---

## ✏️ Testreszabás (Előtöltés)

### 1. Admin Jelszó Módosítása

**Fájl:** `src/App.js`

Keress:
```javascript
setAdminPassword('admin123');
```

Cseréld le:
```javascript
setAdminPassword('AZ_ÚJ_JELSZÓ');
```

### 2. Aloldal Szövegek

**Fájl:** `src/pages/StaticPages.jsx`

Keress az aloldal nevét (pl. `TermsPage`) és módosítsd a szövegeket.

### 3. Footer Elérhetőségek

**Fájl:** `src/components/WorkwearShop.jsx`

Keress és cseréld le:
- `+36 30 272 2571` → Az új telefonszám
- `rendelések@munkavedelem.shop` → Az új e-mail

---

## 🎯 Admin Felület – Alapok

### Terméklista

```
URL: http://localhost:3000/admin
```

Látható:
- Összes termék
- Raktári statisztika
- FIFO batch-ek

### Új Termék Hozzáadása

```
1. "Új Termék" gomb
2. Adatok kitöltése
3. "Termék Hozzáadása"
```

### FIFO Batch Kezelés

```
1. Termék alatt "Batch Hozzáadása"
2. Batch ID + Mennyiség
3. "Kivenni" gomb raktár kimenetre
```

---

## 🔗 Aloldalak URL-ek

Fejlécben/Footer-ben:

- `/terms` – ÁSZF
- `/privacy` – Adatvédelem
- `/impressum` – Impresszum
- `/shipping` – Szállítás
- `/about` – Rólunk
- `/contact` – Kapcsolat
- `/admin-login` – Admin login

---

## 🛠 Fejlesztői Parancsok

```bash
# Fejlesztési szerver
npm start

# Production build
npm run build

# Tesztelés lokálisan
npm start
# majd a build mappa ebből jön: npm run build

# Git commit
git add .
git commit -m "Leírás"
git push
```

---

## ⚠️ Fontos: Termeléshez Szükséges

1. **Backend API** – Termékmenyeség tárolásához
2. **Adatbázis** – MongoDB, PostgreSQL, Firebase
3. **Fizetési kapu** – Stripe, Barion, PayPal
4. **E-mail** – SendGrid, Mailgun
5. **Admin auth** – JWT, OAuth

> Jelenleg az admin csak **memóriában** tárol adatokat. Oldalfrissítés után elvesznek!

---

## ✅ Ellenőrzőlista

- ✅ Zip kicsomagolva
- ✅ `npm install` futtatva
- ✅ `npm start` működik
- ✅ Admin bejelentkezés teszt (jelszó: `admin123`)
- ✅ Aloldalak elérhető (footer linkek)
- ✅ Admin jelszó módosítva
- ✅ GitHub repó feltöltve
- ✅ Netlify deploy sikeres
- ✅ HTTPS aktív

---

## 🆘 Segítség

### Hiba: npm: command not found

Node.js nem telepítve. Töltsd le: https://nodejs.org

### Hiba: Port 3000 már használatban

```bash
# Másik port:
PORT=3001 npm start
```

### Hiba: React-router-dom nem található

```bash
npm install react-router-dom
```

### Hiba: Admin oldal 404

Ellenőrizd az URL-t: `/admin-login` (nem `/admin`)

---

## 📚 Következő Lépések

1. ✅ **Helyi teszt** – `npm start`
2. ✅ **Testreszabás** – Jelszó, szövegek, stb.
3. ✅ **GitHub repo** – Fájlok feltöltése
4. ✅ **Netlify deploy** – Élesre menés
5. 🔧 **Backend** – Adatbázis integrálása (opcionális)

---

## 📖 Részletes Dokumentáció

- 📘 **NETLIFY_DEPLOYMENT.md** – Netlify-ra feltöltés (FONTOS!)
- 📗 **FEATURES.md** – Admin felület & FIFO részletesen
- 📙 **DESIGN_GUIDE.md** – Design & styling
- 📕 **UPDATE_GUIDE.md** – Frissítési útmutató

---

## 🎉 Kész!

Most már van egy **professzionális webalkalmazásod**:

✅ E-commerce webshop  
✅ Admin felület  
✅ FIFO raktárkészlet  
✅ Szép aloldalak  
✅ Netlify-ra feltölthető  

**Sok sikert! 🚀**

---

**Verziónk:** 2.0  
**Utolsó frissítés:** 2024  
**React:** 18+  
**Node.js:** 14+
