# 🌸 Complete Customization & Deployment Guide (Pyari Behena Template)

> **YouTube Viewers & Beginners Guide**: Is guide ko follow karke koi bhi bina coding seekhe **sirf 2 minute me apni personalized website bana kar free me live deploy kar sakta hai!**

---

## 📑 Table of Contents

1. [Option 1: No-Code Form Generator (Sabse Aasan Tarika)](#-option-1-no-code-form-generator-sabse-aasan-tarika)
2. [Option 2: `config.js` ko Manually Edit Karna](#-option-2-configjs-ko-manually-edit-karna)
3. [Apni Photos Kaise Add Karein](#-apni-photos-kaise-add-karein)
4. [WhatsApp Number & Voucher Claim Kaise Set Karein](#-whatsapp-number--voucher-claim-kaise-set-karein)
5. [GitHub Pages par Free Live Kaise Karein](#-github-pages-par-free-live-kaise-karein)
6. [Sister ko WhatsApp par Kaise Bhein](#-sister-ko-whatsapp-par-kaise-bhein)
7. [Customization Checklist](#-customization-checklist)

---

## 🌟 Option 1: No-Code Form Generator (Sabse Aasan Tarika)

Agar aapko code bilkul nahi dekhna, toh humne aapke liye ek direct form banaya hai:

1. Project folder me **`generator.html`** file par double-click karke use apne browser (Chrome/Edge/Safari) me open karein.
2. Screen par aane wale form me:
   - Apni behen ka naam aur apna naam likhein.
   - Apna WhatsApp number daalein (country code ke saath, jaise `919876543210`).
   - Apne dil ki baat/letter likhein.
   - Apni photos ke links ya local paths daalein.
   - Apna UPI ID ya Shagun voucher code daalein.
3. Form ke neeche **"⬇️ Download config.js"** button par click karein.
4. Download hui `config.js` file ko apne project folder me copy/replace kar dein.
5. `index.html` open karein — aapki customized website ready hai! 🎉

---

## 💻 Option 2: `config.js` ko Manually Edit Karna

Aap `config.js` file ko kisi bhi Notepad / VS Code me open karke direct values badal sakte hain:

```javascript
const CONFIG = {
  // 1. Sibling Names
  sisterName: "Gudiya",                    // Sister's name
  brotherName: "Tera Bhai",               // Your name

  // 2. WhatsApp Voucher Claim Number (e.g. 919876543210)
  whatsapp: {
    number: "919876543210"
  },

  // 3. Bhai Ki Chitthi (The Letter)
  letter: {
    title: "Pyari Behena ke Naam, Bhai Ki Chitthi 💌",
    paragraphs: [
      "Meri pyari behen,",
      "Yahan aap jo chahein wo likh sakte hain...",
      "Hamesha aise hi muskurati reh!"
    ],
    promises: [
      "🛡️ Hamesha tera khayal rakhunga",
      "🍕 Midnight cravings aur food treats on Bhai",
      "🤐 Tere saare secrets safe rahenge",
      "📞 Kabhi bhi udaas ho, tera bhai 1 call ki doori par hai"
    ],
    signature: "Tera Bhai ❤️"
  },

  // 4. Shagun
  shagun: {
    upiId: "brother@upi",
    giftCardCode: "RAKHI-2026-BHAI-TREAT"
  }
};
```

---

## 📸 Apni Photos Kaise Add Karein

### Method A: Local Photos
1. Apni photos ko `assets/images/` folder me save karein (e.g., `photo1.jpg`, `photo2.jpg`).
2. `config.js` me image ka path de dein:
```javascript
memories: [
  {
    title: "Bachpan Ki Mastiyaan 👶",
    caption: "Jab bina wajah ladte the!",
    date: "Old Days",
    image: "assets/images/photo1.jpg"
  }
]
```

### Method B: Online Photo Links
Aap Imgur, Google Photos, ya Cloudinary ka direct image link bhi daal sakte hain:
```javascript
image: "https://i.imgur.com/example.jpg"
```

---

## 💬 WhatsApp Number & Voucher Claim Kaise Set Karein

Jab aapki sister voucher par click karke **"💬 Claim on WhatsApp"** dabayegi, toh wo direct aapke phone number par message send karegi!

`config.js` me apna number daalein (Bina kisi `+` ya space ke):
```javascript
whatsapp: {
  number: "919876543210" // 91 for India + 10 digit mobile number
}
```

---

## 🌐 GitHub Pages par Free Live Kaise Karein

1. [github.com](https://github.com) par nayi repository banayein (e.g., `pyari-behena`).
2. Apne folder me terminal open karke push karein:
   ```bash
   git add .
   git commit -m "My Rakhi Gift Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pyari-behena.git
   git push -u origin main
   ```
3. GitHub Repo me jayein -> **Settings** -> **Pages**.
4. **Branch** me `main` select karein aur `/ (root)` select karke **Save** dabayein.
5. 1 minute me aapki website live ho jayegi:
   👉 `https://YOUR_USERNAME.github.io/pyari-behena/`

---

## 📱 Sister ko WhatsApp par Kaise Bhein

Aap apni sister ko ye pyara sa message send kar sakte hain:

> *"Happy Raksha Bandhan! 🌸 Chahe main is baar gahr nahi aa paya, par maine tumhare liye ek special surprise website banayi hai. Open karke apna shagun aur vouchers claim karo! ❤️"*  
> 🔗 **`https://YOUR_USERNAME.github.io/pyari-behena/`**

---

## ✅ Customization Checklist

- [ ] Sister ka naam aur apna naam update kiya.
- [ ] Letter me apni yaadein likhin.
- [ ] Apni photos add ki.
- [ ] WhatsApp number set kiya taaki voucher claims direct aapko aayein.
- [ ] Shagun me UPI ID ya gift code set kiya.
- [ ] `index.html` open karke test kiya.
- [ ] GitHub Pages par live kiya aur behen ko link share kiya! 💖
