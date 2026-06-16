# 🎯 MunkavédelmiShop – Új Funkciók Dokumentációja

## 📋 Tartalomjegyzék

1. [Admin Felület & FIFO Nyilvántartás](#admin-felület)
2. [Aloldalak & Statikus Tartalom](#aloldalak)
3. [React Router Routing](#routing)
4. [Biztonsági Beállítások](#security)

---

## 🔐 Admin Felület & FIFO Nyilvántartás {#admin-felület}

### Mi az FIFO?

**FIFO** = **First In, First Out** (Első be, első ki)

Ez a raktározási rendszer azt jelenti, hogy az **első beérkezettnek** minősülő termékek a **legelőször** használódnak fel.

### Admin Panel Helye

```
http://localhost:3000/admin-login
```

**Jelszó (Development):** `admin123`

> ⚠️ **FONTOS:** Termelésben biztonságos jelszó-kezelést kell implementálni (token-alapú auth, háttérendszer)

---

### Admin Funkciók

#### 1️⃣ **Terméklista Megtekintése**

Az admin panel felsorolja az összes terméket az alábbi információkkal:

- **Termék neve** – Pl.: "Munkavédelmi mellény – Reflex"
- **SKU/Cikkszám** – Egyedi azonosító
- **Kategória** – Pl.: "Mellények", "Fejvédelem"
- **Ár (Ft)** – Termék ára
- **Raktári statisztika:**
  - Teljes raktár (db)
  - Felhasznált (FIFO)
  - Raktári érték (Ft)
  - Batch-ek száma

---

#### 2️⃣ **Termék Hozzáadása**

Kattints az "Új Termék" gombra:

```
Kötelező mezők:
  - Termék neve
  - Kategória
  - Ár (Ft)
  - SKU / Cikkszám
  
Opcionális mezők:
  - Kép URL
  - Termék leírása
  - Méretek (S, M, L, XL)
```

Miután kitöltöd az adatokat és rákattintasz "Termék Hozzáadása"-ra:
- Az új termék létrejön
- Automatikusan hozzáadódik az első (üres) FIFO batch
- Azonnal szerkeszthető a batch-be szállított mennyiség

---

#### 3️⃣ **Termék Szerkesztése**

Kattints az "Szerkesztés" gombra egy terméknél:

- Az összes adata szerkeszthető
- A raktári batch-ek **nem törlődnek** – csak az új batch-et lehet módosítani
- Mentés után az adatok azonnal frissülnek

---

#### 4️⃣ **Termék Törlése**

Kattints a "Törlés" gombra:

- A termék és **összes raktári batch-e** törlődik
- Megerősítés szükséges
- Ez irreverziibilis!

---

### 🏭 FIFO Raktári Batch-ek

#### **Batch = Egy szállítmány / Beérkezés**

Minden termékhez több batch lehet:

| Batch ID | Beérkezés | Beérkezett | Felhasznált | Elérhető | Státusz |
|----------|-----------|-----------|------------|----------|---------|
| B001 | 2024-01-05 | 50 db | 5 db | 45 db | 🟢 Aktív |
| B002 | 2024-01-12 | 30 db | 0 db | 30 db | 🟡 Várakozás |

**Az első batch (B001) az aktív** – ebből veszi el a kimenetet az FIFO rendszer!

---

#### **Batch Hozzáadása**

Minden termék alatt van egy "Batch Hozzáadása" gomb:

```
1. Batch ID kitöltése (pl. "B001" vagy automata ID)
2. Mennyiség (db) megadása
3. "Batch Hozzáadása" gombra kattintás
```

Új batch hozzáadásakor:
- Az `arrivalDate` (beérkezési dátum) automatikusan beállítódik az aktuális napra
- Az `usedQuantity` (felhasznált) kezdetben 0
- A batch a lista végéhez adódik

---

#### **Raktári Kimenetek (FIFO)**

A terméket a **raktárból felhasználják** (pl. eladás, szállítás):

```
1. Válaszd ki az első batch-et (a lista tetején)
2. Meg az "Aktív" batch marad az üres input mezőben
3. Kivenni (db): 5
4. Kattints "Kivenni" gombra
```

**Eredmény:** Az első batch-ből **5 db-bal csökken** az elérhető mennyiség.

**FIFO logika:** Ha az első batch elfogy (0 elérhető), a második batch lesz aktív stb.

---

### 📊 Raktár Statisztika

Az admin panel tetején megjelennek az összesített adatok:

| Metrika | Érték |
|---------|-------|
| **Összes Termék** | 8 |
| **Összes Raktár (db)** | 1450 |
| **Összes Raktári Érték** | 28.500.000 Ft |

---

### 🔄 FIFO Működési Logika (Kódban)

```javascript
// 1. Batch-ek beérkezés sorrendje
stock: [
  { batchId: 'B001', arrivalDate: '2024-01-05', quantity: 50, usedQuantity: 5 },  // Első
  { batchId: 'B002', arrivalDate: '2024-01-12', quantity: 30, usedQuantity: 0 }   // Második
]

// 2. Kimeneti logika
const deductFromStock = (productId, quantity) => {
  let remaining = quantity;
  
  // Az első batch-ből vesz el először
  for (let i = 0; i < stock.length && remaining > 0; i++) {
    const available = stock[i].quantity - stock[i].usedQuantity;
    const deduct = Math.min(remaining, available);
    stock[i].usedQuantity += deduct;
    remaining -= deduct;
  }
};
```

---

## 📄 Aloldalak & Statikus Tartalom {#aloldalak}

### Elérhető Aloldalak

| Oldal | URL | Tartalom |
|------|-----|----------|
| **ÁSZF** | `/terms` | Általános Szerződési Feltételek |
| **Adatvédelem** | `/privacy` | GDPR-kompatibilis adatvédelmi nyilatkozat |
| **Impresszum** | `/impressum` | Jogi impresszum, cégadatok |
| **Szállítás** | `/shipping` | Szállítási költségek, idők, feltételek |
| **Rólunk** | `/about` | Cégismertető, csapat, értékek |
| **Kapcsolat** | `/contact` | Elérhetőségek, üzenetküldés |

---

### Aloldal Szerkezete

Minden aloldal:
- ✅ Konzisztens design (sötétzöld + arany)
- ✅ Reszponzív layout
- ✅ Könnyen szerkeszthető HTML szöveggel
- ✅ Footer linkekkel összekapcsolódik

---

### Szerkesztés

Az aloldalak szövegtartalma a `src/pages/StaticPages.jsx` fájlban található:

```javascript
export const TermsPage = () => {
  return (
    <div>
      <h2>1. Bevezetés</h2>
      <p>Szöveg itt...</p>
      {/* ... */}
    </div>
  );
};
```

**Szerkesztéshez:** Egyszerűen módosítsd a `<p>` tagek tartalmát.

---

## 🔗 React Router Routing {#routing}

### Route Mappa

```javascript
<Routes>
  <Route path="/" element={<WorkwearShop />} />
  <Route path="/admin-login" element={<AdminLoginPage />} />
  <Route path="/admin" element={<AdminPanel />} />
  <Route path="/terms" element={<TermsPage />} />
  <Route path="/privacy" element={<PrivacyPage />} />
  <Route path="/impressum" element={<ImpressumPage />} />
  <Route path="/shipping" element={<ShippingPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/about" element={<AboutPage />} />
</Routes>
```

### Link Használat

Az alkalmazásban a `Link` komponens használata ajánlott az `<a>` tag helyett:

```javascript
// ❌ Nem ajánlott (oldal újratölt)
<a href="/admin">Admin</a>

// ✅ Ajánlott (SPA navigáció)
<Link to="/admin">Admin</Link>
```

---

## 🔐 Biztonsági Beállítások {#security}

### Admin Jelszó (Development)

```javascript
const [adminPassword] = useState('admin123');
```

**⚠️ FONTOS:** Development módban ez OK, de termelésben:

---

### Ajánlott Biztonsági Fejlesztések

#### 1. **Jelszó-kezelés**
```javascript
// ❌ Nem biztonságos
const password = 'admin123';

// ✅ Ajánlott
// Backend autentikáció (JWT, OAuth)
const token = localStorage.getItem('adminToken');
```

#### 2. **HTTP Header-ek**
```javascript
// Cookie-hoz:
headers: {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
}
```

#### 3. **CORS & HTTPS**
- Csak HTTPS-t engedélyezz termelésben
- CORS headereket korlátozd

#### 4. **Rate Limiting**
```javascript
// Backend-en: Max 5 bejelentkezési kísérlet/IP/óra
```

---

### Admin Jogosultság Ellenőrzés

Jelenleg nincs back-end ellenőrzés. Ajánlott hozzáadni:

```javascript
const [isAdmin, setIsAdmin] = useState(false);

// App.js-ben
<ProtectedRoute 
  path="/admin" 
  element={<AdminPanel />} 
  isAdmin={isAdmin}
/>
```

---

## 📦 Adatkezelés (LocalStorage)

### Admin Adatok Mentése

Jelenleg az admin adatok csak a böngésző `useState`-ben vannak (memória).

**Termeléshez szükséges:**

```javascript
// Mentés LocalStorage-ba
useEffect(() => {
  localStorage.setItem('products', JSON.stringify(products));
}, [products]);

// Betöltés induláskor
const [products, setProducts] = useState(() => {
  const saved = localStorage.getItem('products');
  return saved ? JSON.parse(saved) : [];
});
```

**Vagy:** Backend adatbázis (MongoDB, PostgreSQL)

---

## 🎯 Telepítési Lépések

### 1. Frissítés az Új Függőségekkel

```bash
npm install react-router-dom
```

### 2. Fájl Másolása

```
src/
  ├── App.js              (frissítve)
  ├── components/
  │   └── WorkwearShop.jsx (frissítve)
  └── pages/
      ├── AdminPanel.jsx
      └── StaticPages.jsx
```

### 3. Indítás

```bash
npm start
```

### 4. Admin Belépés

```
Goto: http://localhost:3000/admin-login
Jelszó: admin123
```

---

## 🚀 Production Deployment

### Netlify Beállítások

A `netlify.toml` már tartalmazza a megfelelő konfiguráció:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Ez biztosítja, hogy az SPA routing működik.

---

## 📝 Testreszabás

### Admin Felület Szín Módosítása

`src/pages/AdminPanel.jsx`-ben:
- `#0F2A1D` – Sötétzöld
- `#C9A961` – Arany

### Jelszó Módosítása

`src/App.js`-ben:
```javascript
setAdminPassword('ÚJ_JELSZÓ');
```

### Aloldal Szövegek

`src/pages/StaticPages.jsx`-ben szerkeszd a `<p>` tagokat.

---

## ✅ Ellenőrzőlista

- ✅ React Router telepítve?
- ✅ Összes új fájl a `src/` mappában?
- ✅ `App.js` frissítve?
- ✅ Admin jelszó módosítva?
- ✅ Aloldal szövegek frissítve?
- ✅ Backend/adatbázis szükséges-e?

---

## 🆘 Hibakeresés

### Hiba: "Link is not defined"

```
npm install react-router-dom
```

### Hiba: Admin oldal üres

Nézd meg a böngészőkonzolt (F12). Valószínűleg a jelszó hibás.

### Hiba: Footer linkek nem működnek

Ellenőrizd, hogy az `App.js`-ben az összes route be van-e írva.

---

**Sok sikert az admin felület használatában! 🎉**
