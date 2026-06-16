# 🚀 MunkavédelmiShop – Gyors Indítás

## 📥 1. Fájlok Letöltése

Jelen projekt már tartalmaz minden szükséges fájlt:

```
munkavedelem-shop/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── WorkwearShop.jsx
│   ├── App.js
│   └── index.js
├── package.json
├── netlify.toml
├── README.md
├── INSTALL.md
├── DESIGN_GUIDE.md
└── .gitignore
```

---

## ⚡ 2. Gyors Telepítés (5 perc)

### Windows/Mac/Linux

```bash
# 1. Projekt mappájába lépés
cd munkavedelem-shop

# 2. Függőségek telepítése
npm install

# 3. Fejlesztői szerver indítása
npm start
```

**Eredmény:** `http://localhost:3000` automatikusan megnyílik

---

## ✅ 3. Mit Látsz?

```
✅ Header: "MunkavédelmiSHOP" sötétzöld hátérrel
✅ Hero szekció: Keresősáv + Call-to-action
✅ 8 termék: Mellény, sisak, cipő, kesztyű, kabát, nadrág, szemüveg, füldugó
✅ Kosár funkció: Termékek hozzáadása, szummázás
✅ Reszponzív: Mobilon, tableteten és desktoptop-on is működik
```

---

## 🎨 4. Testreszabás (5 perc)

### A) Termékek módosítása

Szerkeszd: `src/components/WorkwearShop.jsx`

Keress rá: `const products = [`

```javascript
{
  id: 1,
  name: 'Termék neve',
  category: 'Kategória',
  price: 8990,
  image: 'https://kép-url.jpg',
  description: 'Rövid leírás',
  sizes: ['S', 'M', 'L']
}
```

### B) Szín módosítása

- `#0F2A1D` → Sötétzöld (header, gombok)
- `#C9A961` → Arany (akcentok)

Egyszerűen keresd meg és cseréld le az új szín-kódra.

### C) Elérhetőségek

Keress: `+36 30 272 2571` (telefon) és `rendelések@munkavedelem.shop` (e-mail)

Cseréld le a sajátoddal.

---

## 📦 5. Produkció Build

```bash
npm run build
```

Ez létrehozza a `build/` mappát – ezt töltöd fel **Netlify-ra**.

---

## 🌐 6. Netlify-re Telepítés (10 perc)

### A. GitHub Repó Készítés

```bash
git init
git add .
git commit -m "Initial: Munkavédelmi webshop"
git branch -M main
git remote add origin https://github.com/felhasználó/munkavedelem-shop.git
git push -u origin main
```

### B. Netlify Deploy

1. Lépj a [netlify.com](https://netlify.com)-ra
2. **Sign up** (GitHub-val vagy e-mailel)
3. **New site from Git** gombra kattints
4. GitHub repót kiválasztod
5. **Deploy** – Kész!

### C. Domain Csatlakoztatás

- Netlify automatikusan ad egy URL-t: `xenodochial-einstein-abc123.netlify.app`
- Saját domain csatlakoztatásához: Rackhost DNS-en állíts be **NS record-okat** vagy **CNAME-et**

---

## 💳 7. Fizetési Kapu (Majd)

A **"Kasszához"** gomb jelenleg nem működik.

**Ajánlott megoldások:**

- 🇭🇺 **Barion** (magyar) – [barion.com](https://barion.com)
- 🇭🇺 **OTP ePay** (OTP Bank) – [otpepay.hu](https://otpepay.hu)
- 🌐 **Stripe** (nemzetközi) – [stripe.com](https://stripe.com)
- 🌐 **PayPal** – [paypal.com](https://paypal.com)

Később beépítjük az egyik megoldást.

---

## 📝 8. Fontos Fájlok

| Fájl | Cél |
|------|-----|
| `README.md` | Projekt áttekintés |
| `INSTALL.md` | Részletes telepítési útmutató |
| `DESIGN_GUIDE.md` | Design & arculati szabályok |
| `package.json` | NPM függőségek |
| `netlify.toml` | Netlify konfiguráció |
| `src/components/WorkwearShop.jsx` | **Fő webshop komponens** |

---

## 🐛 Hibakeresés

### Hiba: `npm install` sikertelen

```bash
npm cache clean --force
npm install
```

### Hiba: Port 3000 foglalt

```bash
PORT=3001 npm start
```

### Hiba: Netlify deploy sikertelen

- ✅ GitHub repó públikus-e?
- ✅ `netlify.toml` létezik-e?
- ✅ `npm run build` lokálisan működik-e?

---

## 📞 Támogatás

- **README.md** – Teljes dokumentáció
- **INSTALL.md** – Részletes útmutató
- **DESIGN_GUIDE.md** – Design & styling
- **GitHub Issues** – Код problémák

---

## ✨ Kész vagy!

Most **működik a webshopod** és **készen áll a Netlify-ra**. 🎉

### Következő lépések:

1. ✅ Termékkép-URL-ek lecserélése saját képekre
2. ✅ Szín/text testreszabása
3. ✅ Fizetési kapu integrálása
4. ✅ ÁSZF/Adatvédelem oldalak létrehozása
5. ✅ Domain csatlakoztatása

**Sok sikert! 🚀**
