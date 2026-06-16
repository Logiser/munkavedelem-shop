# MunkavédelmiShop – Munkavédelmi Ruházat E-commerce Webshop

Modern, professzionális React-alapú webshop munkavédelmi ruházat és felszerelések forgalmazásához. A design a **TŰZ-MunkavédelmiSzaki.hu** arculatát követi.

---

## 📋 Jellemzők

✅ **Terméklistázás** – 8+ munkavédelmi termék kategóriákkal  
✅ **Keresési funkció** – Termékek szűrése név és kategória alapján  
✅ **Bevásárlókosár** – LocalStorage-ban mentett kosár-management  
✅ **Termék részletei** – Modal-alapú terméknézet  
✅ **Reszponzív design** – Mobil, tablet, desktop nézet  
✅ **TŰZ-MunkavédelmiSzaki arculat** – Sötétzöld (#0F2A1D) + arany (#C9A961) design  
✅ **Netlify-ready** – Már konfigurálva az azonnali deployment-hez  

---

## 🎨 Design Elemek

| Elem | Szín | Használat |
|------|------|-----------|
| Főszín | `#0F2A1D` (Sötétzöld) | Header, gombok, szövegek |
| Akcentszín | `#C9A961` (Arany) | Kiemelt elemek, CTA-k |
| Háttér | `#fafaf8` (Krém-fehér) | Oldal háttér |
| Sötét háttér | `#0a1f19` | Footer |

---

## 🚀 Gyors indítás

### 1. Projekt klónozása vagy letöltése
```bash
cd munkavedelem-shop
```

### 2. Függőségek telepítése
```bash
npm install
```

### 3. Fejlesztői szerver indítása
```bash
npm start
```

Az alkalmazás automatikusan megnyílik a `http://localhost:3000` címen.

### 4. Produkció build
```bash
npm run build
```

A `build/` mappa tartalmazza az optimalizált termelési fájlokat.

---

## 📁 Projektszerkezet

```
munkavedelem-shop/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   └── WorkwearShop.jsx # Fő webshop komponens
│   ├── App.js              # App wrapper
│   └── index.js            # React entry point
├── package.json            # NPM dependencies
├── netlify.toml            # Netlify konfigurációs fájl
├── .gitignore             # Git ignore rules
└── README.md              # Ez a fájl
```

---

## 📦 Produktumok

A webshop 8 kategóriás terméket tartalmaz:

1. **Mellények** – Reflex mellények (8,990 Ft)
2. **Fejvédelem** – Biztonsági sisak ABS (4,500 Ft)
3. **Lábvédelem** – Munkavédelmi cipő S3 SRC (22,990 Ft)
4. **Kézvédelem** – Nitril kesztyű (1,290 Ft)
5. **Felsők** – Téli munkavédelmi kabát (18,990 Ft)
6. **Alsók** – Munkavédelmi nadrág (12,990 Ft)
7. **Szem- és arcvédelem** – Védőszemüveg (3,490 Ft)
8. **Hallásvedelem** – Szivacsos füldugó (890 Ft)

> Megjegyzés: A termékkép-hivatkozások jelenleg unsplash.com-ról származnak. Saját termékképekre kell lecserélni.

---

## 🔧 Testreszabás

### Termékek hozzáadása/módosítása
A `src/components/WorkwearShop.jsx` fájl `products` array-jét szerkeszd:

```javascript
const products = [
  {
    id: 1,
    name: 'Termék neve',
    category: 'Kategória',
    price: 5000,
    image: 'https://kép-url.jpg',
    description: 'Termék leírása',
    sizes: ['S', 'M', 'L', 'XL']
  },
  // ... további termékek
];
```

### Szín testreszabása
Keress és cserélj le szín-kódokat:
- `#0F2A1D` → Sötétzöld (főszín)
- `#C9A961` → Arany (akcentszín)
- `#fafaf8` → Háttér

### Szállítási díj módosítása
A kosár-szummazó képletben (`cartTotal + 1990`):
```javascript
{(cartTotal + 1990).toLocaleString('hu-HU')} Ft
```

---

## 🌐 Netlify-re való telepítés

### 1. GitHub repó létrehozása
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/felhasználó/munkavedelem-shop.git
git push -u origin main
```

### 2. Netlify-hez csatlakozás
- Menj a [netlify.com](https://netlify.com)-ra
- Kattints a **"New site from Git"** gombra
- Válaszd ki a GitHub repót
- A `netlify.toml` már be van állítva – kattints **"Deploy"**

### 3. Domain csatlakoztatása
Netlify Dashboard → Domain settings → Add a domain (vagy külső domain csatlakoztatás)

---

## 💳 Fizetési kapuk (majd)

A **"Kasszához"** gomb jelenleg nem működik. A fizetési integrációhoz a következők közül válassz:

- **Stripe** – Nemzetközi (Hungary támogatott)
- **Barion** – Magyar fizetési megoldás
- **PayPal** – Széles körben támogatott
- **Bank transfer** – Közvetlen banktranszfer

---

## 🔐 Adatvédelem & ÁSZF

Szerkeszd meg az alábbi oldalakat az `index.html` footer linkjei szerint:
- `/adatvedelem` – Adatvédelmi nyilatkozat (GDPR)
- `/aszf` – Általános Szerződési Feltételek
- `/impresszum` – Jogi impresszum
- `/szallitasi-feltetelek` – Szállítási feltételek

---

## 📞 Támogatás & Kapcsolat

Az oldal footer-jében módosítható:
- **Telefon**: +36 30 272 2571
- **E-mail**: rendelések@munkavedelem.shop
- **Cím**: Budapest, Magyarország

---

## 📄 Licenc

© 2024 MunkavédelmiShop · Trident Shield Group Kft.

---

## 🛠 Tech Stack

- **React 18.2** – UI framework
- **Lucide React** – Ikonok
- **Inline CSS** – Styling (nincs külső CSS fájl szükséges)
- **Netlify** – Hosting & CI/CD

---

## 📝 Jegyzet

Ez egy **vázprojekt**. Az alábbi funkciók még nem implementáltak:

- ❌ Valós fizetési kapu
- ❌ Rendeléskezelési admin panel
- ❌ E-mail értesítések
- ❌ Felhasználói fiókok
- ❌ Készlet-menedzsment

Ezek könnyen hozzáadhatók a projekthez igény szerint.

---

**Sikeresen telepítve! 🚀**
