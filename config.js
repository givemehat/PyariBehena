/**
 * ===================================================================
 * 🌸 PYARI BEHENA - MASTER CONFIGURATION FILE (config.js) 🌸
 * ===================================================================
 * 
 * 💡 HOW TO PERSONALIZE:
 * 1. You only need to edit THIS file to customize the entire website!
 * 2. Or, open "generator.html" in your browser to fill a simple form 
 *    and generate this file automatically without touching code.
 * 
 * ⚠️ Replace all placeholder values below with your own details.
 * ===================================================================
 */

const CONFIG = {
  // ─── 1. SIBLING & OCCASION DETAILS ───────────────────────────────
  sisterName: "Gudiya",                    // Sister's name (e.g., "Priya", "Simran", "Chhoti")
  sisterNickname: "Meri Nautanki Behen",   // Sister's sweet/funny nickname
  brotherName: "Tera Bhai",               // Your name / signature (e.g., "Aman", "Rahul", "Tera Bhai")
  festivalYear: "2026",                   // Festival year or date
  relationBadge: "World's Best Sister Ever 👑", // Badge displayed at the top

  // ─── 2. SOCIAL SHARE & META TAGS (WhatsApp / Instagram Previews) ─
  meta: {
    pageTitle: "Happy Raksha Bandhan, Meri Pyari Behena! 🌸",
    description: "A special digital Raksha Bandhan surprise from your brother with lots of love, memories, and treat vouchers!",
    previewImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
  },

  // ─── 3. HERO / WELCOME SECTION ───────────────────────────────────
  hero: {
    badge: "🌸 Raksha Bandhan Special Surprise 🌸",
    mainHeading: "Happy Rakhi, Meri Pyari Behena! ❤️",
    tagline: "Chahe hum kitne bhi door kyu na ho, tera bhai hamesha tere dil ke sabse paas hai.",
    subtext: "Tere liye ek chhota sa digital surprise banaya hai, scroll karke dekh! ✨",
    letterBtnText: "💌 Read Bhai's Letter",
    memoriesBtnText: "📸 Hamari Yaadein"
  },

  // ─── 4. BACKGROUND MUSIC (Sangeet) ───────────────────────────────
  audio: {
    enabled: true,                         // Set false if you don't want background music
    songTitle: "Phoolon Ka Taaron Ka (Lata Mangeshkar)",
    // Local audio file path or external MP3 link:
    customAudioUrl: "assets/audio/phoolon-ka-taaron-ka.mp3",
    volume: 0.5                            // 0.0 (silent) to 1.0 (full volume)
  },

  // ─── 5. EMOTIONAL LETTER ("Bhai Ki Chitthi") ─────────────────────
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

  // ─── 6. NOSTALGIC MEMORIES (Photo Scrapbook) ─────────────────────
  // You can add as many photos as you want!
  // Use local images: "assets/images/photo1.jpg" or online URLs
  memories: [
    {
      title: "Bachpan Ki Mastiyaan 👶",
      caption: "Jab bina kisi wajah hum dono poore ghar me shor machate the!",
      date: "Sweet Old Days",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      rotation: "-2deg"
    },
    {
      title: "Tom & Jerry Wali Ladai 📺",
      caption: "Cartoon Network vs Saas Bahu! Par 5 minute baad wapas best friends.",
      date: "Classic Sibling Fights",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      rotation: "2.5deg"
    },
    {
      title: "Traditional Festival Vibes 🥻",
      caption: "Jab bhi traditional kapde pehente the, photo click karwana compulsory tha!",
      date: "Festive Vibes",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      rotation: "-1.5deg"
    },
    {
      title: "Partners in Crime 🤝",
      caption: "Mummy ko bina bataye ice-cream khana aur secret treats!",
      date: "Forever Bond",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      rotation: "2deg"
    }
  ],

  // ─── 7. SIBLING PRIVILEGE PASSES & VOUCHERS ──────────────────────
  // WhatsApp Claim Button uses your phone number and custom message template!
  whatsapp: {
    // Brother's phone number with Country Code (NO + or - or spaces, e.g. "919876543210")
    // Leave empty "" to open WhatsApp share sheet generally without a specific number.
    number: "919876543210",
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

  // ─── 8. RAKHI SHAGUN KA LIFAFA (Gift / UPI) ──────────────────────
  shagun: {
    badge: "Rakhi Gift",
    title: "Bhai Ki Taraf Se Shagun Ka Lifafa 💌",
    message: "Meri taraf se shagun ka lifafa! Khush reh aur khoob shopping kar!",
    giftCardCode: "RAKHI-2026-BHAI-TREAT",
    showUpi: true,                         // Set false if you don't want to show UPI
    upiId: "brother@upi",                  // Replace with your UPI ID or leave placeholder
    // Auto-generates QR code from UPI ID, or replace with custom QR image URL:
    qrImagePlaceholder: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=brother@upi&pn=Bhai&cu=INR"
  },

  // ─── 9. FOOTER ───────────────────────────────────────────────────
  footer: {
    message: "Made with immense love for",
    tagline: "Happy Raksha Bandhan ❤️"
  }
};

// Global export for node/module compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
