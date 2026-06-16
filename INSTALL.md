# 📦 MunkavédelmiShop – Részletes Telepítési Útmutató

## 0️⃣ Előfeltételek

Ellenőrizd, hogy telepítve vannak-e:

- **Node.js** (verzió 14 vagy magasabb)  
  [Letöltés](https://nodejs.org/) → LTS verzió ajánlott
  
- **npm** (Node.js-sel jön)
  
- **Git** (verziókezeléshez)  
  [Letöltés](https://git-scm.com/)
  
- **GitHub fiók** (Netlify integrációhoz)  
  [Regisztráció](https://github.com/join)
  
- **Netlify fiók** (hosting-hoz)  
  [Regisztráció](https://netlify.com)

---

## 1️⃣ Projekt Letöltése & Setup

### A. Windows-on

#### PowerShell / Parancssor
```bash
# Klónozd a projektet (vagy töltsd le ZIP-ként)
git clone https://github.com/felhasználó/munkavedelem-shop.git
cd munkavedelem-shop

# Telepítsd a függőségeket
npm install

# Indítsd el a fejlesztői szervert
npm start
```

#### Git Bash alternatíva
```bash
# Egyezik az fenti parancsokkal
```

---

### B. macOS-on

```bash
# Homebrew-val Node.js telepítése (ha még nincs)
brew install node

# Projekt klónozása
git clone https://github.com/felhasználó/munkavedelem-shop.git
cd munkavedelem-shop

# Függőségek telepítése
npm install

# Szerver indítása
npm start
```

---

### C. Linux-on (Ubuntu/Debian)

```bash
# Node.js telepítése apt-tal
sudo apt update
sudo apt install nodejs npm

# Projekt klónozása
git clone https://github.com/felhasználó/munkavedelem-shop.git
cd munkavedelem-shop

# Függőségek telepítése
npm install

# Szerver indítása
npm start
```

---

## 2️⃣ Fejlesztési Szerver Tesztelése

### Böngészőben
```
http://localhost:3000
```

Ezt az oldalt kell látnod:
```
✅ Fejléc: MunkavédelmiSHOP (sötétzöld)
✅ Hero szekció: "Munkavédelmi Ruházat & Felszerelés"
✅ Terméklista: 8 termék
✅ Kosár ikon: Jobb felső sarkok
```

---

## 3️⃣ Projekt Testreszabása

### 3.1 – Termékkép Csere

Jelenleg Unsplash-ból húzódnak a képek. **Saját képekre cseréléséhez:**

**src/components/WorkwearShop.jsx** fájlban:

```javascript
// Régi (Unsplash)
image: 'https://images.unsplash.com/photo-...',

// Új (saját URL)
image: '/images/melleny.jpg',  // vagy
image: 'https://cdn.example.com/melleny.jpg',
```

**Lokális képekhez:** Hozz létre egy `public/images/` mappát és ott tárold a képeket.

---

### 3.2 – Termékek Módosítása

A `const products = [...]` array-ben:

```javascript
{
  id: 9,
  name: 'Új termék neve',
  category: 'Új kategória',
  price: 15990,               // Ft-ban
  image: 'https://...',
  description: 'Leírás max 100 karakter',
  sizes: ['S', 'M', 'L', 'XL']
}
```

**Terméket eltávolítani:** Töröld a teljes objektumot az array-ből.

---

### 3.3 – Szín Testreszabása

Keresés: `#0F2A1D` (sötétzöld), `#C9A961` (arany)

**Saját színekre:**

```javascript
// Keressük meg:
style={{ backgroundColor: '#0F2A1D' }}

// Cseréljük le:
style={{ backgroundColor: '#YOUR_COLOR' }}
```

**Ajánlott eszköz:** [Coolors.co](https://coolors.co) – szín-paletta generátor

---

### 3.4 – Szállítási Díj Módosítása

**src/components/WorkwearShop.jsx** – 400. sor körül:

```javascript
// Régi: 1990 Ft
{(cartTotal + 1990).toLocaleString('hu-HU')} Ft

// Új: 3500 Ft
{(cartTotal + 3500).toLocaleString('hu-HU')} Ft
```

---

### 3.5 – Elérhetőségek Frissítése

**Header & Footer:**

```javascript
// Telefon
href="tel:+36302722571"
+36 30 272 2571

// E-mail
href="mailto:rendelések@munkavedelem.shop"
rendelések@munkavedelem.shop

// Cím
Budapest, Magyarország
```

---

## 4️⃣ Git Setup & GitHub-ra Feltöltés

### 4.1 – Git Inicializálása

```bash
cd munkavedelem-shop
git init
git config user.name "Neved"
git config user.email "email@example.com"
```

---

### 4.2 – GitHub Repó Létrehozása

1. Lépj be a [github.com](https://github.com)-ra
2. Kattints a **"+"** → **"New repository"**
3. Nevez el: `munkavedelem-shop`
4. Válaszd: **Public** (hogy Netlify láthassa)
5. **Create repository**

---

### 4.3 – Feltöltés

```bash
# Összes fájl hozzáadása
git add .

# Commit-ezés
git commit -m "Initial commit: Munkavédelmi webshop"

# Kapcsolódás GitHub-hoz
git branch -M main
git remote add origin https://github.com/felhasználó/munkavedelem-shop.git

# Feltöltés
git push -u origin main
```

---

## 5️⃣ Netlify-n Telepítés

### 5.1 – Netlify-hez Csatlakozás

1. Lépj be a [netlify.com](https://netlify.com)-ra
2. **Sign up** (GitHub-bal lehet)
3. **New site from Git**
4. **GitHub** kiválasztása
5. **munkavedelem-shop** repó kiválasztása

---

### 5.2 – Build Beállítások

```
Build command: npm run build
Publish directory: build
```

> Megjegyzés: A **netlify.toml** már konfigurálva van, így automatikusan működik.

---

### 5.3 – Domain Csatlakoztatása

#### Netlify Subdomain
- Netlify automatikusan kiad egy URL-t, pl. `xenodochial-einstein-abc123.netlify.app`

#### Saját Domain
1. **Netlify Dashboard** → **Site settings** → **Domain management**
2. **Add domain**
3. **Register new domain** vagy **Connect external domain**

**Ha már van domainod:**
- Mutatva az NS record-okat Rackhost DNS-ére
- Vagy CNAME record-ot konfigurálni

---

## 6️⃣ Build & Produkció

### Build Készítése

```bash
npm run build
```

Output: `build/` mappa

### Lokális Produkció Tesztelése

```bash
npm install -g serve
serve -s build
```

Ekkor: `http://localhost:3000`

---

## 7️⃣ Fizetési Kapu (Majd)

A **"Kasszához"** gomb jelenleg nem működik. Integrációhoz ajánlott:

### 🇭🇺 Magyar Megoldások
- **Barion** – Natív magyar fizetési kapu
- **OTP ePay** – OTP Bank-os kifizetés

### Nemzetközi
- **Stripe** – Széles körben támogatott
- **PayPal** – Népszerű

**React Stripe Setup (később):**
```bash
npm install @stripe/react-stripe-js @stripe/stripe-js
```

---

## 🐛 Hibakeresés

### Problem: `npm install` hibázik
```bash
# Gyorsítótár törlése
npm cache clean --force

# Újra telepítés
npm install
```

---

### Problem: Port 3000 már használatban
```bash
# Másik porton indítás
PORT=3001 npm start

# Vagy ha Windows:
# PowerShell-ben:
$env:PORT=3001; npm start
```

---

### Problem: Netlify deploy sikertelen
```bash
# Ellenőrizd:
1. GitHub repó publikus-e
2. netlify.toml létezik-e
3. package.json jó-e
4. npm run build lokálisan működik-e
```

---

## 📝 Bejelentkezési Adatok Tárolása

**Soha ne tárold a repository-ban:**
- API-kulcsok
- Jelszavak
- Bankkártya-adatok
- Titkos tokenik

**Helyette:** `.env` fájl (gitignore-ban van)

```bash
# .env
REACT_APP_STRIPE_KEY=sk_test_xxxxxxx
REACT_APP_EMAIL_PASSWORD=xxxxx
```

---

## ✅ Ellenőrzőlista – Éles Mentes Előtt

- ✅ Összes termék helyesen jelenik-e meg?
- ✅ Kosár-funkció működik?
- ✅ Responsív design OK a mobilon?
- ✅ Elérhetőségek frissítve?
- ✅ ÁSZF/Adatvédelem oldal létezik?
- ✅ Termékkép-URL-ek működnek?
- ✅ Domain mutat a Netlify-ra?
- ✅ SSL/HTTPS aktív?

---

## 📞 Támogatás

Hiba esetén:
1. Nézd meg a **README.md**-t
2. Ellenőrizd a **browser console**-t (F12)
3. Nézz meg egy **tutorial**-t az adott technológiáról
4. Kérdezz meg egy fejlesztőt

---

**Sikeresen telepítve! 🚀 Most már készen állsz a munkavédelmi termékek forgalmazására.**
