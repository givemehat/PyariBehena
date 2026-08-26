/**
 * ===================================================================
 * 🌸 PYARI BEHENA - MASTER CONFIGURATION FILE (config.js) 🌸
 * ===================================================================
 * 
 * 💡 EASY CUSTOMIZATION:
 * 1. Edit this file directly OR use the "Personalize" button on the website!
 * 2. To change photos when cloning: simply drag & drop your photos into
 *    "assets/images/photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"!
 * ===================================================================
 */

const CONFIG = {
  // ─── 1. SIBLING & OCCASION DETAILS ───────────────────────────────
  sisterName: "Gudiya",                    // Sister's name (e.g., "Priya", "Simran", "Chhoti")
  sisterNickname: "Meri Nautanki Behen",   // Sister's sweet/funny nickname
  brotherName: "Tera Bhai",               // Your name / signature (e.g., "Aman", "Rahul", "Tera Bhai")
  festivalYear: "2026",                   // Festival year
  relationBadge: "World's Best Sister Ever 👑", // Badge at top

  // ─── 2. SOCIAL SHARE & PREVIEWS ──────────────────────────────────
  meta: {
    pageTitle: "Happy Raksha Bandhan, Meri Pyari Behena! 🌸",
    description: "A special digital Raksha Bandhan surprise from your brother with lots of love, memories, and treat vouchers!",
    previewImage: "assets/images/photo1.jpg"
  },

  // ─── 3. HERO / WELCOME SECTION ───────────────────────────────────
  hero: {
    badge: "🌸 Raksha Bandhan Special Surprise 🌸",
    mainHeading: "Happy Rakhi, {SISTER_NAME}! ❤️",
    tagline: "Chahe hum kitne bhi door kyu na ho, tera bhai hamesha tere dil ke sabse paas hai.",
    subtext: "Tere liye ek chhota sa digital surprise banaya hai, scroll karke dekh! ✨"
  },

  // ─── 4. BACKGROUND MUSIC ─────────────────────────────────────────
  audio: {
    enabled: true,
    songTitle: "Phoolon Ka Taaron Ka (Lata Mangeshkar)",
    customAudioUrl: "assets/audio/phoolon-ka-taaron-ka.mp3",
    volume: 0.5
  },

  // ─── 5. BHAI KI CHITTHI (The Emotional Letter) ───────────────────
  letter: {
    tag: "For My Dearest Sister",
    title: "Pyari Behena ke Naam, Bhai Ki Chitthi 💌",
    paragraphs: [
      "Meri pyari behen,",
      "Mujhe aaj bhi yaad hai wo din jab hum TV ke remote ke liye lada karte the, bina wajah ek dusre ko chidhate the, aur jab bhi mummy gussa hoti thi toh hum dono ek dusre ko bachate the.",
      "Aaj jab hum thode bade ho gaye hain aur shayad main is baar tere samne baith kar Rakhi nahi bandhwa pa raha, par yakeen maan—tera bhai hamesha dil se tere sabse kareeb hai.",
      "Tu sirf meri behen nahi hai, meri sabse achhi dost hai. Teri ek hasi poore ghar ko roshan kar deti hai.",
      "Is Raksha Bandhan par main tujhse wada karta hu ki chahe jo ho jaye, main hamesha tere har sapne me tere saath khada rahunga. Hamesha aise hi muskurati reh!"
    ],
    promisesHeader: "🤞 Bhai ke 4 Pakke Wade (Promises)",
    promises: [
      "🛡️ Hamesha tera khayal rakhunga aur tere har faisle me tera saath dunga",
      "🍕 Teri aadhi raat ki cravings aur food treats hamesha bhai sponsor karega",
      "🤐 Tere saare secrets aur gossips mummy-papa se hamesha safe rahenge",
      "📞 Kabhi bhi udaas ho, tera bhai sirf 1 call ki doori par hai"
    ],
    closingNote: "Hamesha tera khayal rakhne wala,",
    signature: "Tera Bhai ❤️"
  },

  // ─── 6. MEMORIES (Photo Scrapbook) ───────────────────────────────
  // Replace photo1.jpg .. photo4.jpg in "assets/images/" or drag & drop!
  memories: [
    {
      title: "Bachpan Ki Mastiyaan 👶",
      caption: "Jab bina kisi wajah hum dono poore ghar me shor machate the!",
      date: "Sweet Old Days",
      image: "assets/images/photo1.jpg",
      rotation: "-2deg"
    },
    {
      title: "Tom & Jerry Wali Ladai 📺",
      caption: "Cartoon Network vs Saas Bahu! Par 5 minute baad wapas best friends.",
      date: "Classic Sibling Fights",
      image: "assets/images/photo2.jpg",
      rotation: "2.5deg"
    },
    {
      title: "Traditional Festival Vibes 🥻",
      caption: "Jab bhi traditional kapde pehente the, photo click karwana compulsory tha!",
      date: "Festive Vibes",
      image: "assets/images/photo3.jpg",
      rotation: "-1.5deg"
    },
    {
      title: "Partners in Crime 🤝",
      caption: "Mummy ko bina bataye ice-cream khana aur secret treats!",
      date: "Forever Bond",
      image: "assets/images/photo4.jpg",
      rotation: "2deg"
    }
  ],

  // ─── 7. SIBLING PRIVILEGE PASSES & VOUCHERS ──────────────────────
  whatsapp: {
    number: "919876543210",               // Brother's phone number with Country Code (e.g. 919876543210)
    messageTemplate: "Hey {BROTHER_NAME}! 🌸\nMaine Raksha Bandhan special website par ye voucher claim kiya hai:\n\n🎟️ *{VOUCHER_TITLE}*\n🔑 Code: *{VOUCHER_CODE}*\n\nAb jaldi se mera treat/pass redeem karo! 😋❤️"
  },

  coupons: [
    {
      id: "coupon-1",
      title: "1x Unlimited Swiggy / Food Treat 🍔",
      description: "Jab bhi bhookh lage, order kar! Bill tera bhai pay karega (No questions asked)!",
      code: "BHAI-KHILAYEGA-2026",
      emoji: "🍕",
      color: "from-rose-500 to-pink-600"
    },
    {
      id: "coupon-2",
      title: "1x Zero Argument / Bhai Maanega Pass 😇",
      description: "Poore ek din ke liye tu jo bolegi, bhai bina kisi argue ke haan bolega!",
      code: "QUEEN-FOR-A-DAY",
      emoji: "👑",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "coupon-3",
      title: "1x Midnight Ice-Cream & Outing 🍨",
      description: "Mood kharab ho ya accha, instant late-night ice cream ride bhai ke saath!",
      code: "CHILL-WITH-BHAI",
      emoji: "🚗",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: "coupon-4",
      title: "1x Assignment & Chore Helper ⚡",
      description: "Koi bhi boring kaam ho, bhai will come to rescue and help you finish it!",
      code: "TASK-SAVIOR-PRO",
      emoji: "🧹",
      color: "from-emerald-500 to-teal-600"
    }
  ],

  // ─── 8. INTERACTIVE SHAGUN LIFAFA (UPI Request & Gifting) ─────────
  shagun: {
    badge: "Rakhi Shagun",
    title: "🎁 Shagun Ka Digital Lifafa",
    message: "Bhai se shagun maangne ka digital tarika! Amount choose karo aur request bhej do!",
    brotherUpiId: "brother@upi",           // Brother's UPI ID (configured by Bhai)
    giftCardCode: "RAKHI-2026-BHAI-TREAT", // Shopping gift card code
    quickAmounts: [501, 1100, 2100, 5000], // Preset amounts for sister to pick
    defaultNote: "Shopping aur treat ke liye shagun bhejo bhaiya! 🛍️❤️"
  },

  // ─── 9. FOOTER ───────────────────────────────────────────────────
  footer: {
    message: "Made with immense love for",
    tagline: "Happy Raksha Bandhan ❤️"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
