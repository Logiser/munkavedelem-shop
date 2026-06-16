# 🔄 MunkavédelmiShop – Frissítési Útmutató (v2.0)

## 📊 Mi az Új?

### ✨ Új Funkciók

1. **React Router alapú navigáció** – SPA (Single Page Application) routing
2. **Admin Felület** – Teljes terméknyilvántartás FIFO rendszerrel
3. **FIFO Raktár Kezelés** – Batch-alapú raktárkészlet nyomon követés
4. **6 Aloldal** – ÁSZF, Adatvédelem, Impresszum, Szállítás, Rólunk, Kapcsolat
5. **Admin Login** – Jelszavas védelemmel

---

## 🚀 Gyors Frissítés (10 perc)

### 1. Függőségek Telepítése

```bash
npm install react-router-dom
```

### 2. Fájlok Másolása

Másold az alábbi fájlokat a projektedbe:

```
Új fájlok:
├── src/pages/
│   ├── AdminPanel.jsx
│   └── StaticPages.jsx
└── FEATURES.md

Frissített fájlok:
├── src/App.js
├── src/components/WorkwearShop.jsx
└── package.json
```

### 3. Indítás

```bash
npm install
npm start
```

### 4. Admin Belépés

```
URL: http://localhost:3000/admin-login
Jelszó: admin123
```

---

## 📁 Projektszerkezet (Új)

```
munkavedelem-shop/
├── src/
│   ├── components/
│   │   └── WorkwearShop.jsx       ✏️ Frissítve (Footer linkek)
│   ├── pages/                      ✨ Új mappa
│   │   ├── AdminPanel.jsx          ✨ Új admin felület
│   │   └── StaticPages.jsx         ✨ Aloldalak
│   ├── App.js                      ✏️ Frissítve (React Router)
│   └── index.js
├── public/
│   └── index.html
├── package.json                    ✏️ Frissítve (react-router-dom)
├── netlify.toml
├── README.md
├── INSTALL.md
├── QUICKSTART.md
├── DESIGN_GUIDE.md
├── FEATURES.md                     ✨ Új dokumentáció
└── UPDATE_GUIDE.md                 ✨ Ez a fájl
```

---

## 🔐 Admin Felület – Rövid Guide

### Admin Belépés

1. Menj a **http://localhost:3000/admin-login** oldalra
2. Írd be a jelszót: `admin123`
3. Kattints "Bejelentkezés"-re

### Admin Főoldal

Az admin felületen látható:

#### 📊 Statisztika (Top)
- Összes termék száma
- Összes raktár (db)
- Összes raktári érték (Ft)

#### 📝 Terméklista
Minden termékhez megjelenik:
- **Termék adatai** (név, SKU, kategória, ár)
- **Raktár statisztika** (teljes, felhasznált, érték)
- **FIFO Batch-ek** (beérkezési sorrend)
- **Szerkesztés/Törlés gombok**

---

### 🎯 Alap Műveletek

#### A. Új Termék Hozzáadása

```
1. Kattints az "Új Termék" gombra
2. Töltsd ki a form-ot:
   ✓ Termék neve
   ✓ Kategória
   ✓ Ár (Ft)
   ✓ SKU
   - Kép URL (opcionális)
   - Leírás (opcionális)
   - Méretek (opcionális)
3. Kattints "Termék Hozzáadása"-ra
```

#### B. Batch Hozzáadása (Raktár Bevételezés)

```
1. Válaszd ki a terméket
2. Görgess le a "Batch Hozzáadása" szekcióhoz
3. Adj meg:
   - Batch ID (pl. B001)
   - Mennyiség (db)
4. Kattints "Batch Hozzáadása"-ra
```

#### C. Raktár Kimenete (FIFO)

```
1. Az első batch mellett add meg a mennyiséget
2. Kattints a "Kivenni" gombra
3. A mennyiség levonódik az első batch-ből
```

#### D. Termék Szerkesztése

```
1. Kattints az "Szerkesztés" gombra
2. Módosítsd az adatokat
3. Kattints "Módosítások Mentése"-re
```

#### E. Termék Törlése

```
1. Kattints a "Törlés" gombra
2. Erősítsd meg a törlést
```

---

## 📄 Aloldalak – Útmutató

### Elérhető Oldalak

| Oldal | URL | Admin szerkesztés |
|------|-----|----------|
| ÁSZF | `/terms` | `src/pages/StaticPages.jsx` – `TermsPage` |
| Adatvédelem | `/privacy` | `src/pages/StaticPages.jsx` – `PrivacyPage` |
| Impresszum | `/impressum` | `src/pages/StaticPages.jsx` – `ImpressumPage` |
| Szállítás | `/shipping` | `src/pages/StaticPages.jsx` – `ShippingPage` |
| Rólunk | `/about` | `src/pages/StaticPages.jsx` – `AboutPage` |
| Kapcsolat | `/contact` | `src/pages/StaticPages.jsx` – `ContactPage` |

### Aloldal Szerkesztése

1. Nyisd meg: `src/pages/StaticPages.jsx`
2. Keress rá az oldalra (pl. `TermsPage`)
3. Módosítsd a `<p>` tagek tartalmát
4. Mentsd el
5. A böngészőben `npm start` után azonnal megjelenik

**Például:**

```javascript
export const TermsPage = () => {
  return (
    <div>
      <h2>1. Bevezetés</h2>
      <p>
        Itt MÓDOSÍTSD A SZÖVEGET
      </p>
    </div>
  );
};
```

---

## 🔧 Testreszabás

### 1. Admin Jelszó Módosítása

**Fájl:** `src/App.js`

```javascript
// Keress rá erre:
setAdminPassword('admin123');

// Cseréld le erre:
setAdminPassword('AZ_ÚJ_JELSZÓ');
```

### 2. Szín Paletta Módosítása

Az összes új oldal és admin felület a meglévő szín-palettát használja:
- `#0F2A1D` – Sötétzöld
- `#C9A961` – Arany

Ha módosítani szeretnéd, keress rá ezekre az értékekre az összes fájlban.

### 3. Footer Linkek Módosítása

**Fájl:** `src/components/WorkwearShop.jsx`

```javascript
<Link to="/terms" style={{ ... }}>ÁSZF</Link>
// Keress rá "Link to=" és módosítsd az URL-eket
```

---

## 🛠 Fejlett Konfigurációk

### Backend Integrációja

Jelenleg a termékek az alkalmazás memóriájában vannak. Termeléshez szükséges egy backend:

#### Ajánlott Megoldások:
- **Firebase** – Felhőalapú adatbázis
- **MongoDB + Node.js** – Rugalmas adatbázis
- **PostgreSQL + Express** – Megbízható relációs DB

#### API Integráció Példa:

```javascript
// Terméklista betöltése API-ból
useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
```

---

### Admin Autentikáció Fejlesztése

**Jelenleg:** Egyszerű jelszó-ellenőrzés

**Termelésben ajánlott:**

```javascript
// JWT token alapú:
const handleLogin = async (password) => {
  const response = await fetch('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify({ password })
  });
  const { token } = await response.json();
  localStorage.setItem('adminToken', token);
  // Redirect /admin-ra
};
```

---

## 📊 Raktári Adatok Mentése

### LocalStorage (Egyszerű)

```javascript
// App.js-ben:
useEffect(() => {
  localStorage.setItem('products', JSON.stringify(products));
}, [products]);
```

### Backend (Ajánlott)

```javascript
// Admin panel:
const saveProductsToDB = async () => {
  await fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify(products)
  });
};
```

---

## 🚀 Netlify Deployment

### 1. Build

```bash
npm run build
```

### 2. GitHub Push

```bash
git add .
git commit -m "Add admin panel and static pages"
git push origin main
```

### 3. Netlify Deploy

- A `netlify.toml` már tartalmazza a beállítások
- Automatikus deploy a Git push után

### 4. Admin URL

```
https://yourdomain.com/admin-login
```

---

## ✅ Ellenőrzőlista – Frissítés után

- ✅ `npm install` futtatva?
- ✅ Új fájlok (`AdminPanel.jsx`, `StaticPages.jsx`) lekopyozva?
- ✅ `App.js` és `WorkwearShop.jsx` frissítve?
- ✅ Admin jelszó módosítva?
- ✅ Aloldal szövegek testreszabva?
- ✅ `npm start` után az alkalmazás működik?
- ✅ Admin bejelentkezés működik?
- ✅ Footer linkek működnek?

---

## 🆘 Tipikus Problémák & Megoldások

### Hiba: "Cannot find module 'react-router-dom'"

```bash
npm install react-router-dom
```

### Hiba: Admin oldal üres vagy 404

Ellenőrizd az `App.js`-ben:
```javascript
<Route path="/admin" element={<AdminPanel />} />
```

### Hiba: Footer linkek nem működnek

Ellenőrizd, hogy az `App.js`-ben **az összes route** meg van-e:
```javascript
<Route path="/terms" element={<TermsPage />} />
<Route path="/privacy" element={<PrivacyPage />} />
// stb.
```

### Hiba: Admin jelszó nem működik

Szerkeszd az `App.js`-t:
```javascript
setAdminPassword('admin123');  // Ez az alapértelmezett
```

---

## 📞 Támogatás

Nézd meg a `FEATURES.md`-t részletes dokumentációért!

---

**Gratulálok az új verzióhoz! 🎉**
