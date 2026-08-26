# 🌸 Pyari Behena (प्यारी बहना) - Raksha Bandhan Special Gift Website 🪔

> **A heartfelt, elegant, and customizable digital Raksha Bandhan surprise website for your sister.**  
> *Crafted for brothers who want to send a genuine, emotional, and loving surprise to their sisters!*

---

## 🌐 Live Demo & Repository

- 🌟 **Live Website (GitHub Pages)**: [https://givemehat.github.io/PyariBehena/](https://givemehat.github.io/PyariBehena/)
- 📦 **GitHub Repository**: [https://github.com/givemehat/PyariBehena](https://github.com/givemehat/PyariBehena)
- 📖 **Complete Step-by-Step Guide**: [DEPLOYMENT_AND_CUSTOMIZATION_GUIDE.md](DEPLOYMENT_AND_CUSTOMIZATION_GUIDE.md)

---

## ✨ Features

- 💌 **"Ek Pyara Sa Sandesh" (Bhai Ki Chitthi)**:
  - Heartfelt parchment letter with wax seal, sibling memories, and 4 lifelong brotherly promises.
- 📸 **Nostalgic Memory Lane Scrapbook**:
  - Vintage polaroid photo gallery with tilt hover, sticky notes, and interactive lightbox zoom.
- 🎟️ **Sibling Privilege Passes (Vouchers)**:
  - Tap-to-reveal digital coupons (e.g., *Unlimited Swiggy Treat*, *Zero Argument Pass*, *Late-Night Ice Cream Ride*) with instant **1-Tap WhatsApp Claim** button.
- 🎁 **Digital Shagun Lifafa**:
  - Amazon/Shopping voucher code + UPI QR code for direct gift shagun.
- 🎵 **Built-in Sibling Soundtrack**:
  - Lata Mangeshkar's iconic *"Phoolon Ka Taaron Ka"* background soundtrack with floating player.
- 🌸 **Canvas Particle Effects**:
  - Falling Marigold & Rose flower petals, mouse sparkle trails, and fireworks confetti.

---

## 🚀 How to Customize in 2 Minutes (Sirf 2 Minute Me Edit Karein)

Aapko HTML ya CSS seekhne ki koi zaroorat nahi hai! Saari details ek hi file me hain: **`config.js`**.

### Step 1: Clone or Download the Repository
```bash
git clone https://github.com/givemehat/PyariBehena.git
cd PyariBehena
```

### Step 2: Edit `config.js`
Open `config.js` in VS Code or Notepad and change:
- **`sisterName`**: Apni behen ka naam daalein (e.g., `"Priya"`, `"Gudiya"`)
- **`brotherName`**: Apna naam daalein (e.g., `"Aman"`, `"Tera Bhai"`)
- **`letter`**: Apne dil ki baat aur sandesh likhein.
- **`memories`**: Apni photos ke links ya local files daalein (`image: "assets/images/photo1.jpg"`).
- **`coupons`**: Apne customized treats aur passes set karein.
- **`shagun`**: Apna UPI ID ya Gift Voucher code update karein.

### Step 3: Preview Locally
Double click `index.html` to open directly in any browser (Chrome, Safari, Edge, Firefox)!

---

## 🌐 Free 1-Click Deployment (Bina Kisi Kharch Ke Live Karein)

### Option A: GitHub Pages (Free & Recommended)
1. Apne GitHub account par nayi repository banayein: `pyari-behena`.
2. Saari files push karein:
   ```bash
   git add .
   git commit -m "Happy Raksha Bandhan"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pyari-behena.git
   git push -u origin main
   ```
3. GitHub Repo me jayein -> **Settings** -> **Pages**.
4. **Branch** me `main` select karein aur folder me `/ (root)` choose karke **Save** par click karein.
5. 1 minute me aapki website live ho jayegi: `https://YOUR_USERNAME.github.io/pyari-behena/` 🎉

### Option B: Vercel / Netlify (Drag & Drop)
1. [vercel.com](https://vercel.com) ya [netlify.com](https://netlify.com) par jayein.
2. Apne project folder ko Drag & Drop karein.
3. Instant customized live link copy karke apni behen ko WhatsApp/Instagram par bhein! 💌

---

## 📂 Project Structure

```
PyariBehena/
├── index.html        # Main festive website
├── config.js         # Single master file for all text, photos & gifts
├── css/
│   ├── style.css     # Festive aesthetics, glassmorphism, polaroids
│   └── animations.css# Petals, rakhi glow & subtle animations
├── js/
│   ├── app.js        # Dynamic data binding & modals
│   ├── coupons.js    # Privilege passes & WhatsApp claims
│   ├── effects.js    # Canvas falling petals & sparkles
│   └── audio.js      # Web Audio API & soundtrack player
├── assets/
│   └── audio/        # Phoolon Ka Taaron Ka background soundtrack
├── DEPLOYMENT_AND_CUSTOMIZATION_GUIDE.md # Detailed user guide
└── README.md         # Tutorial & setup guide
```

---

## 📜 License
This project is open-source under the [MIT License](LICENSE). Feel free to star ⭐, fork, and share!
