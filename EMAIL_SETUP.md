# 📧 Email Beállítás Útmutató – Rendelés Értesítések

## Mit Tesz az Email Funkció?

Amikor egy ügyfél rendeléseket helyez el a webshop-on:

1. ✅ **Iroda Email** – Teljes rendelés adatok az `iroda@tuz-munkavedelmiszaki.hu` címre
2. ✅ **Ügyfél Megerősítés** – Rendelés megerősítése az ügyfél email-jére
3. ✅ **Automatikus** – Nincs manuális feldolgozás szükséges

---

## 🔧 1. Lépés: Gmail App Password Létrehozása

### A. Google Account Settings Megnyitása

1. Menj a **myaccount.google.com**-ra
2. Bal oldal: **Biztonság** (Security)
3. Keresd meg: **App passwords** (az oldal alján)

> ⚠️ **Szükséges:** 2-factor authentication (2FA) engedélyezve kell legyen!

### B. App Password Generálása

1. **Select app:** Válaszd a **Mail**-t
2. **Select device:** Válaszd a **Windows PC**, **Mac**, vagy **Linux**-t
3. Kattints a **Generate** gombra
4. Google megad egy **16 karakteres jelszót**

**Vágd ki ezt a jelszót – szükséged lesz rá!**

```
Pl.: abcd efgh ijkl mnop
```

---

## 🌐 2. Lépés: Netlify Environment Variables Beállítása

### A. Login a Netlify-ra

1. Menj a **netlify.com**-ra
2. Login az accountba
3. Válaszd ki a **MunkavédelmiShop** site-ot

### B. Site Settings → Environment Variables

1. **Netlify Dashboard** → **Settings** (jobbra fent)
2. Bal oldal: **Build & deploy** → **Environment**
3. Kattints az **Edit variables** gombra

### C. Environment Variables Hozzáadása

**Key:** `EMAIL_USER`
**Value:** `your-email@gmail.com`

Pl.: `munkavedelem.shop@gmail.com`

---

**Key:** `EMAIL_PASSWORD`
**Value:** A Google által generált 16 karakteres jelszó

Pl.: `abcd efgh ijkl mnop`

---

### D. Mentés & Redeploy

1. Kattints a **Save** gombra
2. A site automatikusan redeploy-ja magát (~2-3 perc)
3. Kész!

---

## ✅ 3. Lépés: Tesztelés

### A. Test Order Elküldése

1. Menj a webshop-hoz
2. Válassz terméket
3. Töltsd ki az összes szükséges mezőt a checkout-on
4. Kattints: **Rendelés Elküldése**

### B. Email Ellenőrzése

Nézz meg 1-2 percen belül:

- ✅ **iroda@tuz-munkavedelmiszaki.hu** – Teljes rendelés
- ✅ **Teszted email**-je – Megerősítés

Ha nem jön meg email:

1. **Spam folder** ellenőrzése
2. **Netlify Deploy Log** megtekintése:
   - Dashboard → **Deploys** → Latest deploy
   - Kattints a **Functions** fülre
   - Keress: `send-order-email`
   - Nézd meg az error log-ot

---

## 🔒 Biztonsági Megjegyzések

### A. Gmail App Password

- ✅ **Biztonságos**: Csak az alkalmazás számára engedélyezett
- ✅ **Nem az eredeti jelszó**: Külön generált jelszó
- ✅ **Visszavonható**: Bármikor törlheted az app password-ot

### B. Netlify Environment Variables

- ✅ **Titkosított**: Netlify titkosított módon tárolfja
- ✅ **Nem látható**: Nem jelenik meg a Deploy Log-ban
- ✅ **GitHub-ban nem**: A repo-ban nem tároljuk (csak .env.example)

---

## 📧 Alternatív Email Providerek

Ha nem szeretnél Gmail-t használni, léteznek alternatívák:

### SendGrid (Ingyenes)

```javascript
// send-order-email.js módosítása:
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Environment Variables:
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
```

Regisztráció: https://sendgrid.com

### Mailgun (Ingyenes, 100 email/nap)

```javascript
const mailgun = require('mailgun.js');
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

// Environment Variables:
MAILGUN_API_KEY=xxxxx
MAILGUN_DOMAIN=mail.yourdomain.com
```

Regisztráció: https://www.mailgun.com

---

## 🆘 Hibakeresés

### Hiba: "Invalid credentials"

- Ellenőrizd a Gmail App Password-ot (másolj-beillesztés!)
- 2FA engedélyezve van-e?
- Helyes email cím?

### Hiba: "SMTP connection timeout"

- Netlify Function timeout (nem szokott lenni)
- Ellenőrizd az internet kapcsolatot
- Próbálkozz később

### Hiba: "Unexpected token"

- Valós email cím-e a `REACT_APP_EMAIL_USER`?
- Szóköz van-e a jelszóban?

---

## 📊 Email Template Testreszabása

Ha módosítani szeretnéd az email sablont:

**Fájl:** `netlify/functions/send-order-email.js`

Keress: `const emailHTML = ...`

Módosítsd a HTML-t, majd:

```bash
git add .
git commit -m "Update email template"
git push
```

Netlify automatikusan redeploy-ja! ✅

---

## 🎯 Összesítő

1. ✅ Gmail App Password létrehozása
2. ✅ Netlify Environment Variables beállítása
3. ✅ Test order elküldése
4. ✅ Email ellenőrzése
5. ✅ Élőben működik!

**Kész vagy az email beállítással!** 🎉

---

## 📞 Támogatás

Ha problémáid vannak:

1. Nézd meg a **Netlify Deploy Log**-ot
2. Ellenőrizd a **Gmail App Password**-ot
3. Próbálkozz **Ctrl+Shift+Del** után (cache törlése)

---

**Sok sikert az email beállításához!** 📧
