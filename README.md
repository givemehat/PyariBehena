# 🌸 Pyari Behena (प्यारी बहना) - Raksha Bandhan Special Gift Website 🪔

> **A heartfelt, elegant, and 100% customizable digital Raksha Bandhan surprise website for your sister.**  
> *Crafted for brothers who want to send a genuine, emotional, and loving surprise to their sisters on Raksha Bandhan.*

---

## 🌟 Live Demo & Preview

- 🌐 **Live Website**: [https://givemehat.github.io/PyariBehena/](https://givemehat.github.io/PyariBehena/)
- 🛠️ **No-Code Form Generator**: [Open `generator.html`](generator.html)
- 📖 **Full Customization Guide**: [DEPLOYMENT_AND_CUSTOMIZATION_GUIDE.md](DEPLOYMENT_AND_CUSTOMIZATION_GUIDE.md)

---

## ✨ Features

- 💌 **"Ek Pyara Sa Sandesh" (Bhai Ki Chitthi)**:
  - Heartfelt parchment letter with wax seal, emotional childhood memories, and 4 lifelong brotherly promises.
- 📸 **Nostalgic Memory Lane Scrapbook**:
  - Vintage polaroid photo cards with tilt animations, lazy-loaded images, and click-to-zoom modal.
- 🎟️ **Sibling Privilege Passes (Vouchers)**:
  - Tap-to-reveal digital coupons (e.g. *Unlimited Swiggy Treat*, *Zero Argument Pass*, *Late-Night Ice Cream Ride*) with instant **1-Tap WhatsApp Claim** button using your phone number!
- 🎁 **Digital Shagun Lifafa**:
  - Shopping gift voucher code + Direct UPI QR code for Rakhi shagun.
- 🎵 **Built-in Sibling Soundtrack**:
  - Lata Mangeshkar's iconic *"Phoolon Ka Taaron Ka"* background soundtrack with autoplay fallback detection & floating controls.
- 🌸 **Canvas Particle Effects**:
  - Falling Marigold & Rose petals and mouse sparkle trails with `prefers-reduced-motion` accessibility support.

---

## 🚀 How to Personalize in 2 Minutes

You do NOT need to touch HTML or CSS! There are two super easy ways to customize:

### 🌟 Method 1: Use the No-Code Form Generator (Recommended)
1. Double-click **`generator.html`** in your project folder to open it in Chrome/Safari.
2. Fill in your names, message, WhatsApp number, photos, and UPI ID.
3. Click **"⬇️ Download config.js"**.
4. Replace the existing `config.js` file in your folder with the downloaded file. That's it! 🎉

---

### 💻 Method 2: Edit `config.js` Directly
Open `config.js` in VS Code or Notepad and customize:
```javascript
const CONFIG = {
  sisterName: "Gudiya",                    // Sister's name
  brotherName: "Tera Bhai",               // Your name / signature
  whatsapp: {
    number: "919876543210"                // Your WhatsApp number (with Country Code)
  },
  letter: {
    title: "Pyari Behena ke Naam, Bhai Ki Chitthi 💌",
    paragraphs: [ /* your message */ ],
    promises: [ /* your promises */ ]
  },
  memories: [ /* your photos & memories */ ],
  shagun: {
    upiId: "brother@upi",
    giftCardCode: "RAKHI-2026-BHAI-TREAT"
  }
};
```

---

## 🌐 1-Click Free Deployment (GitHub Pages)

1. **Fork or Push** this repository to your GitHub account.
2. Go to your repository **Settings** -> **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Within 1 minute, your website will be live at:  
   👉 `https://<YOUR_USERNAME>.github.io/PyariBehena/`

---

## ✅ Customizer Checklist

- [ ] Replaced sister's name and brother's name in `config.js` (or via `generator.html`).
- [ ] Updated the heartfelt letter with your own memories.
- [ ] Added your favorite photos into `assets/images/` or pasted image URLs.
- [ ] Added your WhatsApp number (with country code) for direct voucher claims.
- [ ] Updated UPI ID / Gift Card code in Shagun section.
- [ ] Tested locally by double-clicking `index.html`.
- [ ] Pushed to GitHub and enabled GitHub Pages.
- [ ] Sent the live link to your sister on WhatsApp! ❤️

---

## 📂 Project Structure

```
PyariBehena/
├── index.html        # Main festive single-page website
├── generator.html    # Local No-Code Form to generate config.js easily
├── config.js         # Single master configuration file
├── css/
│   ├── style.css     # Festive styling, glassmorphism, polaroids
│   └── animations.css# Petals & glow animations
├── js/
│   ├── app.js        # Dynamic data binding & photo modals
│   ├── coupons.js    # Privilege passes & WhatsApp claim system
│   ├── effects.js    # Canvas falling petals with reduced-motion support
│   └── audio.js      # Soundtrack player with autoplay fallback handling
├── assets/
│   └── audio/        # Background audio track
├── DEPLOYMENT_AND_CUSTOMIZATION_GUIDE.md # Step-by-step user manual
├── LICENSE           # Open-source MIT License
└── README.md         # Documentation
```

---

## 📜 License
This project is open-source under the [MIT License](LICENSE). Feel free to star ⭐, fork, and share with your loved ones!
