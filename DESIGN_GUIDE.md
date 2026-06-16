# 🎨 MunkavédelmiShop – Design & Arculat Útmutató

## Szín Paletta

### Elsődleges Színek

| Név | Hex | RGB | Használat |
|-----|-----|-----|-----------|
| Sötétzöld | `#0F2A1D` | rgb(15, 42, 29) | Header, gombok, szövegek |
| Arany | `#C9A961` | rgb(201, 169, 97) | Akcentok, CTA, kiemelés |
| Krém-fehér | `#fafaf8` | rgb(250, 250, 248) | Oldal háttér |
| Sötét szürke | `#0a1f19` | rgb(10, 31, 25) | Footer |

### Másodlagos Szín Paletta

| Elem | Szín | Használat |
|------|------|-----------|
| Szöveg | `#333` | Fő szöveg |
| Szürke szöveg | `#666` | Másodlagos szöveg |
| Világos szürke | `#f0f0ec` | Csekély háttér |
| Fehér | `#ffffff` | Kontrasztos elemek |
| Hiba/Törlés | `#d32f2f` | Hiba üzenetek |

---

## Tipográfia

### Font Stack

```css
/* Serif (Georgia) – Fejlécekhez */
font-family: 'Georgia', serif;

/* Sans-serif – Törzs szöveghez */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Méret Hierarchia

```javascript
// Oldal fejléc
fontSize: '2.5rem'  // ~40px
fontWeight: 'bold'
fontFamily: 'Georgia, serif'

// Szekció fejléc
fontSize: '2rem'   // ~32px
color: '#0F2A1D'
fontFamily: 'Georgia, serif'

// Terméknév
fontSize: '1.1rem'  // ~18px
fontWeight: '600'

// Normál szöveg
fontSize: '1rem'    // ~16px
color: '#666'

// Apró szöveg (kategória)
fontSize: '0.85rem'  // ~13px
fontWeight: 'bold'
color: '#C9A961'
```

---

## Layout Rács

### Max-Width
```javascript
maxWidth: '1200px'  // Teljes oldal max szélesség
margin: '0 auto'    // Középen
padding: '0 1.5rem' // Oldalsó padding
```

### Grid Beállítások

#### Termék Grid
```javascript
display: 'grid'
gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
gap: '2rem'
```

#### Szekció Grid
```javascript
gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
gap: '2rem'
```

---

## Komponens Stílusok

### Gomb – Elsődleges

```javascript
{
  backgroundColor: '#0F2A1D',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s'
}
```

**Hover State:**
```javascript
backgroundColor: '#C9A961'
color: '#0F2A1D'
```

---

### Gomb – Másodlagos

```javascript
{
  backgroundColor: 'transparent',
  color: '#C9A961',
  padding: '0.75rem 1.5rem',
  border: '2px solid #C9A961',
  borderRadius: '4px',
  cursor: 'pointer'
}
```

---

### Kártya

```javascript
{
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s'
}
```

**Hover State:**
```javascript
transform: 'translateY(-4px)'
boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
```

---

### Input Mező

```javascript
{
  padding: '0.75rem 1rem',
  borderRadius: '4px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  fontFamily: 'inherit'
}
```

**Focus State:**
```javascript
borderColor: '#0F2A1D'
boxShadow: '0 0 0 3px rgba(15, 42, 29, 0.1)'
outline: 'none'
```

---

### Hero Szekció

```javascript
{
  background: 'linear-gradient(135deg, #0F2A1D 0%, #1a3d2f 100%)',
  color: 'white',
  padding: '4rem 1.5rem',
  textAlign: 'center'
}
```

---

### Badge / Tag

```javascript
{
  backgroundColor: '#C9A961',
  color: '#0F2A1D',
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: 'bold'
}
```

---

## Responsive Breakpoints

```javascript
// Mobile-first approach

// Tablet
@media (min-width: 768px) {
  // 768px+
}

// Desktop
@media (min-width: 1024px) {
  // 1024px+
}

// Large Desktop
@media (min-width: 1200px) {
  // 1200px+
}
```

**JavaScript Implementáció:**

```javascript
display: window.innerWidth > 768 ? 'flex' : 'none'
gridTemplateColumns: window.innerWidth > 768 ? '1fr 300px' : '1fr'
```

---

## Spacingi Konvenció

```javascript
/* padding/margin */
'0.25rem'  // 4px   – tight
'0.5rem'   // 8px   – small
'0.75rem'  // 12px  – medium
'1rem'     // 16px  – base
'1.5rem'   // 24px  – large
'2rem'     // 32px  – extra-large
'3rem'     // 48px  – section
'4rem'     // 64px  – hero
```

---

## Árnyékok (Box Shadows)

```javascript
/* Subtle */
boxShadow: '0 2px 8px rgba(0,0,0,0.1)'

/* Medium */
boxShadow: '0 4px 12px rgba(0,0,0,0.12)'

/* Strong */
boxShadow: '0 8px 16px rgba(0,0,0,0.15)'

/* Extra Strong */
boxShadow: '0 12px 24px rgba(0,0,0,0.2)'
```

---

## Animáció & Transition

```javascript
/* Smooth transitions */
transition: 'all 0.3s ease'
transition: 'background-color 0.3s'
transition: 'transform 0.3s, box-shadow 0.3s'
```

### Hover Effects

```javascript
// Felemelkedés
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-4px)'
  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)'
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)'
  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
}}
```

---

## Ikon Konvenció

Lucide React ikonok:

```javascript
import { ShoppingCart, Menu, Search, Heart } from 'lucide-react';

// Használat
<ShoppingCart size={24} color="#C9A961" />
```

### Ajánlott Ikonok

| Cél | Ikon |
|-----|------|
| Kosár | `ShoppingCart` |
| Menü | `Menu` / `X` |
| Keresés | `Search` |
| Kedvenc | `Heart` |
| Telefon | `Phone` |
| E-mail | `Mail` |
| Cím | `MapPin` |
| Nyíl | `ChevronRight` |
| Bezárás | `X` |

---

## Képek & Fotók

### Termékképek
- **Méret:** 400×400 px (minimum)
- **Formato:** JPG/WebP
- **Háttér:** Fehér vagy szürke
- **Objektum:** Termékcenter

### Fejléc Háttérkép
- **Méret:** 1920×600 px
- **Overlay:** 40% fekete (opcional)

### Avatar / Szakember Kép
- **Méret:** 200×200 px
- **Forma:** Kör (border-radius: 50%)

---

## Accessibility (Hozzáférhetőség)

### Szín Kontraszst
- Szöveg: Min. WCAG AA (4.5:1 kontraszst)
- ✅ `#0F2A1D` + fehér = 12:1 (kiváló)
- ✅ `#C9A961` + fehér = 3.5:1 (jó)

### Billentyűzeti Navigáció
```javascript
<button onKeyDown={(e) => e.key === 'Enter' && handleClick()} />
```

### Alt Text (Képekhez)
```html
<img alt="Sötétzöld reflex mellény EN ISO 20471 Class 2" />
```

---

## Dark Mode (Opcionális)

Ha dark mode szeretnél:

```javascript
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const colors = isDarkMode ? {
  bg: '#1a1a1a',
  text: '#ffffff',
  accent: '#C9A961'
} : {
  bg: '#fafaf8',
  text: '#0F2A1D',
  accent: '#C9A961'
};
```

---

## Logo & Branding

### Logo Formátumok
- **SVG** – Web/digitális
- **PNG** – Fallback
- **Méret:** 100×100 px minimum
- **Arculat:** Pajzs formájú (security)

### Logo Helyezése
- Header: Bal oldal, 24-32px magasság
- Footer: Center, 40px magasság

---

## CSS Konvenció (Inline Styles)

```javascript
// Helyes
style={{
  backgroundColor: '#0F2A1D',
  padding: '1rem',
  borderRadius: '4px'
}}

// Elkerülendő
style="background-color: #0F2A1D; padding: 1rem;"
```

---

## Performance

### Kép Optimalizálás
```javascript
// Lazy loading
<img loading="lazy" src="..." />

// srcSet (különböző méretek)
srcSet="image-320w.jpg 320w, image-640w.jpg 640w"

// WebP fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="..." />
</picture>
```

### CSS-in-JS Performance
- Inline styles (React) könnyebb, mint CSS fájlok
- Lucide React ikonok SVG (vektor, skálázható)

---

## Brand Voice & Tone

- **Professzionális** – Bizalom, szakértelem
- **Barátságos** – Nem túl formális
- **Tiszta** – Rövid, érthető szövegek
- **Segítőkész** – Támogató hozzáállás

### Szöveg Példák

❌ **Kerülendő:**
> "A munkavédelmi szokványok betartása kritikus fontosságú a vállalat szabályozási entsprechung céljaiból."

✅ **Jó:**
> "Minden termék teljesíti az EN ISO szabványokat."

---

## Ellenőrzőlista

- ✅ Szín paletta konzisztens?
- ✅ Typográfia uniform?
- ✅ Spacingi (padding/margin) egységes?
- ✅ Gombok hover-effekt-tel?
- ✅ Responsive design mobilon OK?
- ✅ Árnyékok subtilak és konzisztensek?
- ✅ Ikonok helyesen méretezve?
- ✅ Kontraszt WCAG AA felett?

---

**Sok sikert a design-ban! 🎨✨**
