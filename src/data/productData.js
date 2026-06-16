// Munkavédelmi termékek katalógusa
// 5 kategória × 15 termék = 75 termék

export const productCategories = [
  {
    id: 'cipok',
    name: '👞 Munkavédelmi Cipők',
    description: 'Biztonsági cipők S1-S3 kategóriában',
    color: '#2196F3'
  },
  {
    id: 'polok',
    name: '👕 Munkavédelmi Pólók & Felső',
    description: 'Terelőhöz, nyomtatható pólók',
    color: '#FF9800'
  },
  {
    id: 'nadragok',
    name: '👖 Munkavédelmi Nadrágok',
    description: 'Erős, elnyűhetetlen munkanadrákok',
    color: '#673AB7'
  },
  {
    id: 'kesztyuk',
    name: '🧤 Munkavédelmi Kesztyűk',
    description: 'Különféle anyagból, eltérő védelem',
    color: '#F44336'
  },
  {
    id: 'bakansok',
    name: '🥾 Bakancsok & Gumicsizmák',
    description: 'Vízálló, hőálló, ipari bakancsok',
    color: '#795548'
  }
];

export const products = [
  // ========== CIPŐK (cipok) ==========
  {
    id: 1,
    categoryId: 'cipok',
    name: 'Safety Jogger Professionale S3',
    price: 18990,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
    description: 'Könnyű, kényelmes munkavédelmi cipő. EN ISO 20345 S3 szabvány, acélcsattal.',
    stock: 120,
    rating: 4.8,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47']
  },
  {
    id: 2,
    categoryId: 'cipok',
    name: 'Steelite Alloy Toe Work Shoe',
    price: 22490,
    image: 'https://images.unsplash.com/photo-1462460862556-5c7d46ce58b4?w=400&h=400&fit=crop',
    description: 'Acél-orrú, csúszásbiztos talpú munkavédelmi cipő.',
    stock: 95,
    rating: 4.7,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 3,
    categoryId: 'cipok',
    name: 'ProMAN Safety Boot S3 SRC',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Erős, vízálló bakancs. Ideális építészethez, mezőgazdasághoz.',
    stock: 150,
    rating: 4.9,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
  },
  {
    id: 4,
    categoryId: 'cipok',
    name: 'Caterpillar Modulus Safety Boot',
    price: 28990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Premium ipari bakancs. Kitűnő tapadás és kényelem.',
    stock: 80,
    rating: 4.9,
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 5,
    categoryId: 'cipok',
    name: 'Timberland PRO Titan EH',
    price: 32990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Elektromosan ellenálló munkavédelmi cipő. Vegyi iparhoz ideális.',
    stock: 60,
    rating: 4.8,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
  },
  {
    id: 6,
    categoryId: 'cipok',
    name: 'Skechers Work Relaxed Fit',
    price: 15990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Kényelmes, könnyed munkavédelmi cipő irodához, raktárhoz.',
    stock: 200,
    rating: 4.6,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47']
  },
  {
    id: 7,
    categoryId: 'cipok',
    name: 'New Balance 589v1 EH',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Elektromosan biztonságos cipő. Mérnököknek, villanyszerelőknek.',
    stock: 75,
    rating: 4.7,
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 8,
    categoryId: 'cipok',
    name: 'Wolverine Durashocks CarbonMax',
    price: 26990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Könnyű, szívósanyagú munkavédelmi cipő. Acél helyett composite orrral.',
    stock: 100,
    rating: 4.8,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
  },
  {
    id: 9,
    categoryId: 'cipok',
    name: 'Doc Martens Ironbridge',
    price: 34990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Legendás Doc Martens cipő munkavédelemmel. Kitűnő tapadás.',
    stock: 55,
    rating: 5.0,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 10,
    categoryId: 'cipok',
    name: 'Keen Detroit Lace EH',
    price: 28490,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Elektromosan ellenálló, vízálló munkavédelmi cipő.',
    stock: 85,
    rating: 4.7,
    sizes: ['38', '39', '40', '41', '42', '43', '44']
  },
  {
    id: 11,
    categoryId: 'cipok',
    name: 'Red Wing 8085 Safety Toe',
    price: 38990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Premium amerikai cipő. Csodálatos tapadás és tartósság.',
    stock: 45,
    rating: 5.0,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 12,
    categoryId: 'cipok',
    name: 'Salomon X-Scream Mid GTX',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Outdoor munkavédelmi cipő. Gore-Tex vízállóság, kitűnő tapadás.',
    stock: 70,
    rating: 4.9,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44']
  },
  {
    id: 13,
    categoryId: 'cipok',
    name: 'Merrell Moab 2 EH',
    price: 25490,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Elektromosan biztonságos túracipő-munkavédelmi cipő hibrid.',
    stock: 90,
    rating: 4.8,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 14,
    categoryId: 'cipok',
    name: 'ASICS Gel-Lyte Safety',
    price: 21990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Sporthosszú munkavédelmi cipő. Kitűnő párnázás és kényelem.',
    stock: 110,
    rating: 4.7,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
  },
  {
    id: 15,
    categoryId: 'cipok',
    name: 'Carhartt Force Composite Toe',
    price: 23990,
    image: 'https://images.unsplash.com/photo-1542329194-e65e5c9a8a9e?w=400&h=400&fit=crop',
    description: 'Könnyű, erős munkavédelmi cipő. Tökéletes kézműveseknek.',
    stock: 105,
    rating: 4.8,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },

  // ========== PÓLÓK (polok) ==========
  {
    id: 16,
    categoryId: 'polok',
    name: 'Fruit of the Loom Heavy Cotton Tee',
    price: 2490,
    image: 'https://images.unsplash.com/photo-1521527573675-505fda007e74?w=400&h=400&fit=crop',
    description: '100% pamut, szokásos munkavédelmi póló. Nyomtatható.',
    stock: 500,
    rating: 4.5,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },
  {
    id: 17,
    categoryId: 'polok',
    name: 'Carhartt Workwear Pocket Tee',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Erős szövetű munkavédelmi póló zsebből. Kiváló minőség.',
    stock: 350,
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 18,
    categoryId: 'polok',
    name: 'Dickies Short Sleeve Tee',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
    description: 'Klasszikus Dickies munkavédelmi póló. Strapabíró.',
    stock: 400,
    rating: 4.6,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 19,
    categoryId: 'polok',
    name: 'Red Kap Industrial Uniform Shirt',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1537450857935-25abddb373bb?w=400&h=400&fit=crop',
    description: 'Iparipóló 65/35 polyester-pamut keverékből.',
    stock: 280,
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },
  {
    id: 20,
    categoryId: 'polok',
    name: 'Wrangler RIGGS Workwear Pocket Tee',
    price: 4490,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'Kemény munka póló. Wrangler Riggs márka minőség.',
    stock: 320,
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 21,
    categoryId: 'polok',
    name: 'Gildan G180 Heavy Blend',
    price: 3290,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Vastag, puha pamut póló. Nyomtatásra ideális.',
    stock: 600,
    rating: 4.5,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },
  {
    id: 22,
    categoryId: 'polok',
    name: 'Champion T1011 Jersey',
    price: 3890,
    image: 'https://images.unsplash.com/photo-1518050064-979e27de9b1f?w=400&h=400&fit=crop',
    description: 'Prémium jersey póló. Kényelmes és tartós.',
    stock: 450,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 23,
    categoryId: 'polok',
    name: 'Hanes Tagless ComfortSoft',
    price: 2890,
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
    description: 'Puha, címke nélküli munkavédelmi póló.',
    stock: 550,
    rating: 4.4,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },
  {
    id: 24,
    categoryId: 'polok',
    name: 'Surefit Hi-Vis Safety Tee',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c006a4c5?w=400&h=400&fit=crop',
    description: 'Magas láthatóságú munkavédelmi póló. Reflex sávokkal.',
    stock: 200,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 25,
    categoryId: 'polok',
    name: 'Badger Sport Performance Tee',
    price: 4390,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Teljesítménypóló. Nedvesség-elvezetés, szabad levegő.',
    stock: 380,
    rating: 4.7,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 26,
    categoryId: 'polok',
    name: 'Canvas Unisex Jersey Short-Sleeve',
    price: 3690,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'Uniszex jersey póló. Egyenletes vágás, puha.',
    stock: 420,
    rating: 4.6,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },
  {
    id: 27,
    categoryId: 'polok',
    name: 'Russell Athletic Essential Tee',
    price: 3190,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Alapvető russell póló. Jó ár-érték arány.',
    stock: 510,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 28,
    categoryId: 'polok',
    name: 'Port & Company Essential Pocket',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'Zsebből és munkaadóval való munkavédelmi póló.',
    stock: 580,
    rating: 4.4,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },
  {
    id: 29,
    categoryId: 'polok',
    name: 'Jerzees Dri-Power Tee',
    price: 3790,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Nedvesség-elvezetős munkavédelmi póló.',
    stock: 470,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 30,
    categoryId: 'polok',
    name: 'Alstyle Apparel Ring Spun',
    price: 3290,
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
    description: 'Ringelt pamut póló. Finom, puha szövet.',
    stock: 490,
    rating: 4.5,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },

  // ========== NADRÁGOK (nadragok) ==========
  {
    id: 31,
    categoryId: 'nadragok',
    name: 'Carhartt Relaxed Fit Work Dungaree',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1506629082632-8e159b0f488f?w=400&h=400&fit=crop',
    description: 'Klasszikus Carhartt munkanadrágh. Kitűnő hordhatóság.',
    stock: 180,
    rating: 4.8,
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },
  {
    id: 32,
    categoryId: 'nadragok',
    name: 'Dickies Relaxed Fit Carpenter Denim',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Carpenter nadrág zsebből. Erős denim szövet.',
    stock: 220,
    rating: 4.7,
    sizes: ['28', '30', '32', '34', '36', '38', '40']
  },
  {
    id: 33,
    categoryId: 'nadragok',
    name: 'Levi\'s 505 Regular Fit Jean',
    price: 10990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Legendás Levi\'s farmer nadrág. Klasszikus stílus.',
    stock: 250,
    rating: 4.6,
    sizes: ['28', '29', '30', '31', '32', '33', '34', '35', '36', '38', '40']
  },
  {
    id: 34,
    categoryId: 'nadragok',
    name: 'Wrangler RIGGS Workwear Relaxed',
    price: 11490,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'RIGGS munkanadrágh. Strapabíró, kényelmes.',
    stock: 190,
    rating: 4.7,
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },
  {
    id: 35,
    categoryId: 'nadragok',
    name: 'Cinch White Label Jean',
    price: 11990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Prémium Cinch farmer. Kényelmes és tartós.',
    stock: 160,
    rating: 4.8,
    sizes: ['30', '32', '34', '36', '38', '40']
  },
  {
    id: 36,
    categoryId: 'nadragok',
    name: 'Red Kap Industrial Uniform Work Pants',
    price: 9490,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: '65/35 poly-pamut ipari nadrág. Erős és strapabíró.',
    stock: 210,
    rating: 4.6,
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },
  {
    id: 37,
    categoryId: 'nadragok',
    name: 'Duluth Trading Co. Fire Hose Carpenter',
    price: 14990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Erős tűzóó szövetű carpenter nadrág. Számos zsebvel.',
    stock: 140,
    rating: 4.9,
    sizes: ['28', '30', '32', '34', '36', '38', '40']
  },
  {
    id: 38,
    categoryId: 'nadragok',
    name: 'Berne Sanded Stretch Jeans',
    price: 12490,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Rugalmas denim nadrág. Maximális mozgásszabadság.',
    stock: 170,
    rating: 4.7,
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },
  {
    id: 39,
    categoryId: 'nadragok',
    name: 'Ariat FR M5 Straight Leg Jeans',
    price: 16990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Tűzálló farmer nadrág. Kényelmes és biztonságos.',
    stock: 100,
    rating: 4.8,
    sizes: ['30', '32', '34', '36', '38', '40']
  },
  {
    id: 40,
    categoryId: 'nadragok',
    name: 'Rocky Stratch Proof Work Pant',
    price: 13990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Karcolás-védett munka nadrág. Építészet, erdőgazdálkodáshoz.',
    stock: 120,
    rating: 4.7,
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },
  {
    id: 41,
    categoryId: 'nadragok',
    name: 'Columbia Bonehead Cargo Pants',
    price: 11490,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Cargo nadrág csebből. Outdoor munkához ideális.',
    stock: 150,
    rating: 4.6,
    sizes: ['28', '30', '32', '34', '36', '38', '40']
  },
  {
    id: 42,
    categoryId: 'nadragok',
    name: 'Gravel Gear Flannel-Lined Jeans',
    price: 10490,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Szvéttel bélélt farmer. Meleg, kényelmes.',
    stock: 180,
    rating: 4.7,
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },
  {
    id: 43,
    categoryId: 'nadragok',
    name: 'Outbound Stretch Canvas Cargo',
    price: 9990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Rugalmas vászon cargo nadrág. Sokoldalú munkához.',
    stock: 200,
    rating: 4.5,
    sizes: ['28', '30', '32', '34', '36', '38', '40']
  },
  {
    id: 44,
    categoryId: 'nadragok',
    name: 'Key Apparel Industrial Dungaree',
    price: 8490,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Ipari lóerő nadrág. Erős és tartós.',
    stock: 240,
    rating: 4.6,
    sizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },
  {
    id: 45,
    categoryId: 'nadragok',
    name: 'Stanley Executive Shorts',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=400&fit=crop',
    description: 'Munka rövidnadrág. Nyári munkához ideális.',
    stock: 220,
    rating: 4.5,
    sizes: ['28', '30', '32', '34', '36', '38', '40']
  },

  // ========== KESZTYŰK (kesztyuk) ==========
  {
    id: 46,
    categoryId: 'kesztyuk',
    name: 'Nitrile Coated Work Glove',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Nitril-burkolt munka kesztyű. Vegyi anyagoknak ellenálló.',
    stock: 1000,
    rating: 4.5,
    sizes: ['7', '8', '9', '10']
  },
  {
    id: 47,
    categoryId: 'kesztyuk',
    name: 'Leather Work Glove with Knit Wrist',
    price: 2490,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Bőr munka kesztyű. Meleg, tartós és kényelmes.',
    stock: 600,
    rating: 4.7,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 48,
    categoryId: 'kesztyuk',
    name: 'Cut Resistant Safety Glove',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Vágás-ellenes munka kesztyű. Acéllal szövött.',
    stock: 500,
    rating: 4.8,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 49,
    categoryId: 'kesztyuk',
    name: 'Thermal Lined Winter Glove',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Hőmosan bélélt téli munka kesztyű.',
    stock: 400,
    rating: 4.6,
    sizes: ['7', '8', '9', '10']
  },
  {
    id: 50,
    categoryId: 'kesztyuk',
    name: 'Insulated Work Glove with Rubber Grip',
    price: 2690,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Szigetelt munka kesztyű gumigripzel.',
    stock: 550,
    rating: 4.5,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 51,
    categoryId: 'kesztyuk',
    name: 'Latex Coated Glove',
    price: 1590,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Latex-burkolt munka kesztyű. Nedves munkához.',
    stock: 800,
    rating: 4.4,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 52,
    categoryId: 'kesztyuk',
    name: 'Mechanic\'s Work Glove',
    price: 1890,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Szerelő munka kesztyű. Erős és precíz.',
    stock: 700,
    rating: 4.6,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 53,
    categoryId: 'kesztyuk',
    name: 'Vinyl PVC Work Glove',
    price: 1490,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Vinyl PVC munka kesztyű. Vegyi anyagoknak ellenálló.',
    stock: 900,
    rating: 4.3,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 54,
    categoryId: 'kesztyuk',
    name: 'Polyester Safety Glove',
    price: 1190,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Poliészter munka kesztyű. Könnyű és gyors szárítás.',
    stock: 1100,
    rating: 4.2,
    sizes: ['7', '8', '9', '10']
  },
  {
    id: 55,
    categoryId: 'kesztyuk',
    name: 'Neoprene Coated Work Glove',
    price: 2190,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Neoprén-burkolt munka kesztyű. Vízálló és rugalmas.',
    stock: 650,
    rating: 4.5,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 56,
    categoryId: 'kesztyuk',
    name: 'Spandex Safety Glove',
    price: 1390,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Spandex munka kesztyű. Rugalmas és kényelmes.',
    stock: 950,
    rating: 4.4,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 57,
    categoryId: 'kesztyuk',
    name: 'Chrome Tanned Leather Glove',
    price: 2890,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Króm-fóliázott bőr munka kesztyű. Prémium minőség.',
    stock: 480,
    rating: 4.8,
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 58,
    categoryId: 'kesztyuk',
    name: 'Cotton Canvas Work Glove',
    price: 1690,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Pamut vászon munka kesztyű. Légáteresztő és puha.',
    stock: 750,
    rating: 4.5,
    sizes: ['7', '8', '9', '10']
  },
  {
    id: 59,
    categoryId: 'kesztyuk',
    name: 'Anti-Vibration Work Glove',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Vibrációs munka kesztyű. Karpálishoz ideális.',
    stock: 320,
    rating: 4.7,
    sizes: ['8', '9', '10', '11']
  },
  {
    id: 60,
    categoryId: 'kesztyuk',
    name: 'Fire Resistant Work Glove',
    price: 5490,
    image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=400&h=400&fit=crop',
    description: 'Tűzálló munka kesztyű. Kerti, acélműhelyi munkához.',
    stock: 280,
    rating: 4.8,
    sizes: ['8', '9', '10', '11']
  },

  // ========== BAKANCSOK (bakansok) ==========
  {
    id: 61,
    categoryId: 'bakansok',
    name: 'Rubber Steel Toe Work Boot',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Gumicsizma acél orrral. Vízálló, tartós.',
    stock: 200,
    rating: 4.7,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 62,
    categoryId: 'bakansok',
    name: 'Neoprene Rubber Boot',
    price: 18490,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Neoprén gumicsizma. Meleg, vízálló, kényelmes.',
    stock: 180,
    rating: 4.6,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44']
  },
  {
    id: 63,
    categoryId: 'bakansok',
    name: 'PVC Vinyl Waterproof Boot',
    price: 17490,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'PVC vízálló bakancs. Kemény munkához.',
    stock: 220,
    rating: 4.5,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 64,
    categoryId: 'bakansok',
    name: 'Insulated Winter Rubber Boot',
    price: 21990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Szigetelt téli gumicsizma. Szélsőséges hideghez.',
    stock: 150,
    rating: 4.8,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 65,
    categoryId: 'bakansok',
    name: 'Carhartt Waterproof Work Boot',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Carhartt vízálló munka bakancs. Erős és kényelmes.',
    stock: 160,
    rating: 4.8,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 66,
    categoryId: 'bakansok',
    name: 'Lacrosse Alphaburly Pro Boot',
    price: 29990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Prémium vadász-munka bakancs. Kitűnő tapadás.',
    stock: 120,
    rating: 4.9,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 67,
    categoryId: 'bakansok',
    name: 'Muck Boot Fieldblazer',
    price: 22490,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Szögletes tetős munkavédelmi bakancs. Kényelmes.',
    stock: 140,
    rating: 4.7,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 68,
    categoryId: 'bakansok',
    name: 'Keen Utility Work Boot',
    price: 26990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Keen munka bakancs. Rugalmas és támogatott.',
    stock: 110,
    rating: 4.8,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 69,
    categoryId: 'bakansok',
    name: 'LaCrosse Rubber Boot',
    price: 19490,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Klasszikus gumicsizma bakancs. Egész évhez.',
    stock: 190,
    rating: 4.6,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 70,
    categoryId: 'bakansok',
    name: 'Baffin Titan Work Boot',
    price: 34990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Szélsőséges hideghez bakancs. -40°C-ig.',
    stock: 85,
    rating: 4.9,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44']
  },
  {
    id: 71,
    categoryId: 'bakansok',
    name: 'Columbia Bugaboot Plus Boot',
    price: 27490,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Outdoor téli munka bakancs. Szövettel bélelt.',
    stock: 100,
    rating: 4.7,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 72,
    categoryId: 'bakansok',
    name: 'Sorel Caribou Boot',
    price: 28990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Legendás Sorel téli bakancs. Klasszikus dizájn.',
    stock: 95,
    rating: 4.8,
    sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 73,
    categoryId: 'bakansok',
    name: 'Danner Quarry GTX Boot',
    price: 31990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Prémium munka bakancs. Gore-Tex vízályó.',
    stock: 70,
    rating: 4.9,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  },
  {
    id: 74,
    categoryId: 'bakansok',
    name: 'Kamik Nationplus Boot',
    price: 26490,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Vízálló téli bakancs. Jó tapadás, tartós.',
    stock: 130,
    rating: 4.7,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44']
  },
  {
    id: 75,
    categoryId: 'bakansok',
    name: 'The Original Muck Boot',
    price: 21490,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Klasszikus gumicsizma. Mezőgazdasághoz ideális.',
    stock: 210,
    rating: 4.6,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
  }
];
