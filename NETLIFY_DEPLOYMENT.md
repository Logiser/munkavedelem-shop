# 🚀 MunkavédelmiShop – Netlify Deployment Útmutató

## 📦 Mit Kapsz?

**Fájl:** `munkavedelem-shop.zip` (45 KB)

Ez tartalmazza az **összes szükséges fájlt** a projekthez:

```
munkavedelem-shop/
├── package.json                    ← NPM függőségek
├── netlify.toml                    ← Netlify konfiguráció
├── .gitignore                      ← Git ignore rules
├── .env.example                    ← Env template
├── README.md                       ← Projekt docs
├── INSTALL.md                      ← Telepítés
├── QUICKSTART.md                   ← 5 perc alatt kész
├── DESIGN_GUIDE.md                 ← Design útmutató
├── FEATURES.md                     ← v2.0 funkciók
├── UPDATE_GUIDE.md                 ← Frissítés útmutató
├── SUMMARY.md                      ← Végső összefoglalás
├── public/
│   └── index.html                  ← HTML template
└── src/
    ├── App.js                      ← React Router setup
    ├── index.js                    ← React entry point
    ├── components/
    │   └── WorkwearShop.jsx        ← Főoldal & kosár
    └── pages/
        ├── AdminPanel.jsx          ← Admin felület
        └── StaticPages.jsx         ← 6 aloldal
```

---

## 🔧 Telepítés Lépésről-Lépésre

### 1️⃣ Zip Fájl Kicsomagolása

**Windows:**
```
Jobb klikk a zip-en → Kibontás ide
```

**Mac/Linux:**
```bash
unzip munkavedelem-shop.zip
cd munkavedelem-shop
```

### 2️⃣ Helyi Teszt (Opcionális, de ajánlott)

Mielőtt Netlify-ra töltöd fel, teszteld helyben:

```bash
# 1. Függőségek telepítése
npm install

# 2. Fejlesztői szerver
npm start
```

Nyíljon meg az `http://localhost:3000` automatikusan.

**Admin belépés teszt:**
```
URL: http://localhost:3000/admin-login
Jelszó: admin123
```

Ha működik, folytass a 3. lépéssel! ✅

### 3️⃣ GitHub Repo Létrehozása

Szükséges a Netlify-hez.

**Option A: GitHub Desktop (Egyszerű)**
```
1. GitHub Desktop megnyitása
2. File → Clone repository
3. URL: https://github.com/[felhasználó]/munkavedelem-shop
4. Local path: válassz egy mappát
5. Clone
```

**Option B: Parancssor (Git)**
```bash
git init
git add .
git commit -m "Initial: MunkavédelmiShop v2.0"
git branch -M main
git remote add origin https://github.com/[felhasználó]/munkavedelem-shop.git
git push -u origin main
```

### 4️⃣ Netlify Setup

#### Regisztráció
1. Menj a [netlify.com](https://netlify.com)-ra
2. **Sign up** (Email, GitHub, vagy Google)
3. E-mail megerősítése

#### Új Site Létrehozása
1. **New site from Git** gombra kattints
2. **GitHub** kiválasztása
3. Engedélyezés: GitHub-al bejelentkezés
4. Repository kiválasztása: `munkavedelem-shop`
5. **Deploy site** gombra kattints

> Az build és deploy automatikus! ⏳

#### Deployment Státusza
```
Building...     → 2-3 perc
Deploying...    → 1 perc
Live!           → ✅ Kész!
```

Kapod egy **auto-generated URL**-t:
```
https://[random-name].netlify.app
```

---

## 🎯 Post-Deployment Teendők

### 1️⃣ Site Átnevezése

A `[random-name].netlify.app` helyett saját nevet szeretnél?

**Netlify Dashboard:**
1. **Site settings** → **Site details**
2. **Change site name**
3. Új név: pl. `munkavedelem-shop`
4. Új URL: `munkavedelem-shop.netlify.app`

### 2️⃣ Custom Domain Csatlakoztatása

Ha van saját domainod (pl. `munkavedelem.shop`):

**Netlify Dashboard:**
1. **Domain settings** → **Add domain**
2. Domain név megadása
3. **Verify ownership** (DNS rekord hozzáadása)
4. DNS szerver frissítése (Rackhost Panel)

**Rackhost-on (DNS beállítás):**
1. Login a Rackhost kontrolpanelbe
2. DNS Management → Domain
3. Add/Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: munkavedelem-shop.netlify.app
   ```
4. Mentés

> 24-48 óra alatt aktív lesz!

### 3️⃣ SSL/HTTPS Aktiválása

**Netlify automatikusan beállít SSL-t** – nincs teendő!

```
✅ HTTPS aktív
✅ SSL Certificate (Let's Encrypt)
✅ Automatikus megújítás
```

### 4️⃣ Admin Jelszó Módosítása

⚠️ **FONTOS:** Az alapértelmezett jelszó: `admin123`

**Módosítás:**
1. Nyisd meg: `src/App.js`
2. Keress: `setAdminPassword('admin123')`
3. Cseréld le: `setAdminPassword('AZ_ÚJ_JELSZÓ')`
4. Commit & push:
   ```bash
   git add .
   git commit -m "Change admin password"
   git push
   ```
5. Netlify automatikusan újra build-eli! ✅

---

## 🔧 Testreszabás Netlify Után

### Aloldal Szövegek Módosítása

1. Nyisd meg: `src/pages/StaticPages.jsx`
2. Keress az oldal nevére (pl. `TermsPage`)
3. Módosítsd a `<p>` tagokat
4. Git commit & push:
   ```bash
   git add .
   git commit -m "Update terms page"
   git push
   ```
5. Netlify automatikusan build-eli! ✅

### Termékek Hozzáadása

Admin felületen keresztül:
1. Menj az admin panelre: `https://yourdomain.com/admin-login`
2. Jelszó: az új jelszó (amit beállítottál)
3. **Új Termék** gombra kattints
4. Töltsd ki az adatokat
5. **Termék Hozzáadása**

> ⚠️ Az admin adatok csak a böngészőben tárolódnak (memória). Oldalfrissítés után elvesznek! Termeléshez szükséges egy backend adatbázis!

---

## 📊 Netlify Dashboard

### Fontos Szekciók

| Szekció | Cél |
|---------|-----|
| **Deploys** | Build & deployment előzmények |
| **Build & deploy** | Build beállítások |
| **Domain settings** | Custom domain |
| **Site settings** | Egyéb beállítások |
| **Functions** | Szerver funkcióik (serverless) |

### Build Naplók Megtekintése

```
1. Netlify Dashboard
2. Deploys → Click on deployment
3. Deploy log (hibaelhárítás)
```

---

## ✅ Ellenőrzőlista – Éles Menet

- ✅ Zip fájl kicsomagolva
- ✅ `npm install` futtatva (helyi test esetén)
- ✅ `npm start` működik (helyi test esetén)
- ✅ GitHub repo létrehozva
- ✅ Netlify-hez csatlakozva
- ✅ Build sikeres (Netlify Dashboard)
- ✅ Admin bejelentkezés működik
- ✅ Footer linkek működnek
- ✅ HTTPS aktív
- ✅ Admin jelszó módosítva

---

## 🆘 Hibakeresés

### Hiba: Build Failed

**Nézd meg a build naplót:**
```
Netlify Dashboard → Deploys → Click deploy → "Deploy log"
```

**Tipikus hibák:**

#### 1. "Cannot find module 'react-router-dom'"
```bash
# Helyi fix:
npm install

# Dann: git push
```

#### 2. "Package.json not found"
A zip helyes helyre van-e kicsomagolva?
```
Helyes: munkavedelem-shop/
Nem helyes: munkavedelem-shop-2/munkavedelem-shop/
```

#### 3. "Port 3000 already in use"
Csak helyi tesztnél:
```bash
npm start
# Másik terminál ablakon futnak?
```

### Hiba: Admin oldal 404

Ellenőrizd az URL-t:
```
Helyes: https://yourdomain.com/admin-login
Nem helyes: https://yourdomain.com/admin
```

### Hiba: Admin jelszó nem működik

Visszajelszó módosítva?
```
src/App.js → setAdminPassword('...')
```

---

## 🔐 Biztonsági Emlékeztetők

### Development vs Production

| Aspektus | Development | Production |
|----------|-------------|-----------|
| **Jelszó** | `admin123` | Erős jelszó! |
| **Backend** | Nincs szükséges | **Szükséges!** |
| **Database** | Memória | SQL/NoSQL |
| **HTTPS** | Opcionális | **Kötelező** |
| **Auth** | Egyszerű | JWT/OAuth |

### Termelési Fejlesztések

1. **Backend API** – Termékmenyeség perszisztencia
2. **Adatbázis** – MongoDB, PostgreSQL, Firebase
3. **JWT autentikáció** – Szécser jelszó-hash
4. **E-mail** – SendGrid, Mailgun
5. **Monitoring** – Sentry, LogRocket

---

## 📈 Analytics & Monitoring

### Google Analytics (Opcionális)

```html
<!-- public/index.html-be add: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Netlify Analytics

Automatikusan bekapcsolt a **Netlify Pro**-ban.

---

## 💰 Netlify Terv

| Terv | Ár | Kiváló? |
|------|-----|---------|
| **Free** | $0 | Tökéletes kezdéshez ✅ |
| **Pro** | $19/hó | Analytics + support |
| **Business** | $99/hó | Nagyvállalatok |

> A Free terv teljesen elegendő!

---

## 📞 Netlify Támogatás

- **Docs:** https://docs.netlify.com
- **Community:** https://community.netlify.com
- **Support:** support@netlify.com (Pro+)

---

## ✨ Gratulálok!

Az alkalmazás most **éles a Netlify-on**! 🎉

```
✅ Professzionális weboldal
✅ Admin felület
✅ FIFO raktárkészlet
✅ 6 aloldal
✅ HTTPS & CDN
✅ Autó-scaling
✅ Git integráció
```

### Következő Lépések

1. ✏️ Aloldal szövegek finomhangolása
2. ✏️ Termékkép-URL-ek (saját képek)
3. ✏️ Admin jelszó módosítása
4. 🔧 Backend API integráció
5. 💳 Fizetési kapu (Stripe/Barion)

---

**Sok sikert! 🚀**

---

**Verzió:** 2.0 Deployment Guide  
**Utolsó frissítés:** 2024  
**Platform:** Netlify  
**Költség:** Ingyenes
