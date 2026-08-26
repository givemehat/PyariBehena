# 🌸 Complete Customization & Deployment Guide (Meri Behen Project)

> **YouTube Viewers & Beginners Guide**: Is guide ko padhkar koi bhi apne laptop/PC par is website ko **sirf 2 minute me customize** karke **free me live (deploy)** kar sakta hai!

---

## 📑 Table of Contents (Index)

1. [Step 1: Laptop / PC par Setup Karein](#-step-1-laptop--pc-par-setup-karein)
2. [Step 2: `config.js` ko Apni Sister ke Hisaab se Edit Karein](#-step-2-configjs-ko-apni-sister-ke-hisaab-se-edit-karein)
3. [Step 3: Apni Photos & Memories Kaise Lagayein](#-step-3-apni-photos--memories-kaise-lagayein)
4. [Step 4: Free GitHub Pages par Live (Deploy) Karein](#-step-4-free-github-pages-par-live-deploy-karein)
5. [Step 5: Free Vercel / Netlify par 1-Click Deploy](#-step-5-free-vercel--netlify-par-1-click-deploy)
6. [Step 6: Sister ko WhatsApp / Instagram par Share Karein](#-step-6-sister-ko-whatsapp--instagram-par-share-karein)

---

## 💻 Step 1: Laptop / PC par Setup Karein

### Method A: Agar aapko Git use karna aata hai
Terminal ya Command Prompt kholein aur type karein:
```bash
git clone https://github.com/givemehat/MeriBehen.git
cd MeriBehen
```

### Method B: Agar aap beginner hain (Direct Download)
1. GitHub page par jayein.
2. Green color ke **`<> Code`** button par click karein.
3. **`Download ZIP`** par click karein.
4. Download hui ZIP file ko right click karke **Extract All** (Unzip) kar lein.
5. Folder me `index.html` file par double click karke aap turant website apne browser (Chrome/Edge/Brave) me dekh sakte hain!

---

## ✏️ Step 2: `config.js` ko Apni Sister ke Hisaab se Edit Karein

Folder me **`config.js`** file ko kisi bhi code editor (VS Code, Notepad++, ya simple Notepad) me open karein.

Aapko HTML ya CSS me koi change karne ki zaroorat nahi hai. Sirf `config.js` ke values badlein:

```javascript
const CONFIG = {
  // 1. Apni behen aur apna naam badlein:
  sisterName: "Priya",                 // 👈 Yahan behen ka naam likhein
  sisterNickname: "Chhoti / Nautanki", // 👈 Behen ka nickname
  brotherName: "Aman",                 // 👈 Apna naam (Bhai)
  festivalYear: "2026",

  // 2. Bhai ka pyara letter (Sandesh):
  letter: {
    title: "Pyari Behena ke Naam, Bhai Ki Chitthi 💌",
    paragraphs: [
      "Meri pyari behen,",
      "Yahan aap jo chahein wo dil ki baatein likh sakte hain...",
      "Bachpan ki yaadein, nok-jhok, aur dhero duayein!"
    ],
    promises: [
      "🛡️ Always protecting you & backing your dreams",
      "🍕 Midnight cravings & food treats on Bhai",
      "🤐 Keeping all your secret gossips safe from Mummy-Papa",
      "📞 24/7 available for your emergency rants & tears"
    ],
    signature: "Aman ❤️"               // 👈 Apna signature
  },

  // 3. Sibling Love Coupons (Sister Privilege Passes):
  coupons: [
    {
      title: "1x Unlimited Swiggy / Food Treat 🍔",
      description: "Jab bhi cravings ho, order karo aur bill bhai pay karega!",
      code: "BHAI-KHILAYEGA-2026",
      emoji: "🍕"
    },
    // Aur bhi coupons add ya edit kar sakte hain!
  ],

  // 4. Shagun ka Lifafa & UPI:
  shagun: {
    upiId: "your-upi-id@okhdfcbank",    // 👈 Apna UPI ID
    giftCardCode: "RAKHI-2026-SPECIAL", // 👈 Amazon/Flipkart voucher code
    giftNote: "Yeh shagun tumhari manpasand shopping ke liye hai!"
  }
};
```

File ko **Save (Ctrl + S / Cmd + S)** karein. Browser ko refresh karein aur aapke changes turant dikhne lagenge!

---

## 📸 Step 3: Apni Photos & Memories Kaise Lagayein

### Option 1: Local Photos (Recommended)
1. Apni photos ko `assets/images/` folder ke andar copy karein (jaise `photo1.jpg`, `photo2.jpg`).
2. `config.js` me `memories` array ke andar path likh dein:
```javascript
memories: [
  {
    title: "Bachpan Ki Yaadein 👶",
    caption: "Jab hum remote ke liye ladte the!",
    tag: "Childhood",
    date: "2015",
    image: "assets/images/photo1.jpg" // 👈 Local photo path
  }
]
```

### Option 2: Online Link (Imgur / Google Photos / Cloudinary)
Aap kisi bhi direct image URL ko bhi paste kar sakte hain:
```javascript
image: "https://i.imgur.com/your-photo-link.jpg"
```

---

## 🌐 Step 4: Free GitHub Pages par Live (Deploy) Karein

Aapki customized website ko internet par live karne ka sabse aasan aur bilkul free tarika:

### Step 4.1: GitHub par Repository Banayein
1. [github.com](https://github.com) par login karein.
2. Top right me **`+`** icon par click karke **New repository** select karein.
3. Repository name dein: `meri-behen` ya `rakhi-gift`.
4. Isse **Public** select karein aur **Create repository** par click karein.

### Step 4.2: Code Push Karein
Apne project folder me terminal open karke ye commands run karein:
```bash
git add .
git commit -m "My Sister Rakhi Gift Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/meri-behen.git
git push -u origin main
```

### Step 4.3: GitHub Pages Enable Karein
1. Apni repository ke page par **Settings** tab par click karein.
2. Left sidebar me **Pages** par click karein.
3. **Branch** dropdown me `main` select karein aur folder me `/ (root)` choose karein.
4. **Save** button par click karein.
5. 1-2 minute wait karein aur page ko refresh karein. Aapko aapki live website ka link mil jayega:
   👉 `https://YOUR_USERNAME.github.io/meri-behen/`

---

## ⚡ Step 5: Free Vercel / Netlify par 1-Click Deploy

Agar aapko Git commands nahi chalani, toh aap bina kisi command ke bhi deploy kar sakte hain:

1. [vercel.com](https://vercel.com) ya [netlify.com](https://netlify.com) par free account banayein.
2. **Add New Project** -> **Deploy without Git** (ya folder ko browser window me Drag & Drop kar dein).
3. 10 seconds me aapko ek unique live URL mil jayega (jaise `https://meri-behen.vercel.app`)!

---

## 📱 Step 6: Sister ko WhatsApp / Instagram par Share Karein

Aapka customized gift link ready hai! Aap apni sister ko is tarah message bhej sakte hain:

> *"Happy Raksha Bandhan! 🌸 Chahe main is baar gahr nahi aa paya, par maine tumhare liye ek special surprise website banayi hai. Open karke apna shagun aur vouchers claim karo! ❤️"*  
> 🔗 **`https://YOUR_USERNAME.github.io/meri-behen/`**

---

## ❓ Frequently Asked Questions (FAQ)

- **Q: Kya isme background music bajega?**  
  **A:** Haan! Bottom-right me floating music player button hai. Aap `config.js` me apna manpasand gana bhi daal sakte hain.

- **Q: Kya phone me sahi chalega?**  
  **A:** Bilkul! Ye 100% mobile-friendly aur responsive hai (iPhone, Android sabhi devices par smoothly chalta hai).

- **Q: Kya website host karne ke koi charges hain?**  
  **A:** Zero! GitHub Pages aur Vercel dono lifetime 100% free hain.
