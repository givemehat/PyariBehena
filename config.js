/**
 * ===================================================================
 * 🌸 PYARI BEHENA - MASTER CONFIGURATION FILE (config.js) 🌸
 * ===================================================================
 * 
 * 💡 EASY CUSTOMIZATION:
 * 1. Edit this file directly OR click "Personalize" on the website!
 * 2. To change photos when cloning: simply replace photo1.jpg .. photo4.jpg
 *    inside "assets/images/" folder!
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

  // ─── 7. HAMARI ANOKHI BONDING (4 Things That Make Us Special) ─────
  traits: [
    {
      icon: "🤫",
      badge: "Secret Keeper",
      title: "Official Partner-in-Crime",
      description: "Mere saare secrets aur kaand sirf tujhe pata hain, aur mummy ki daant se bachane ke liye tu hamesha ready rehti hai!",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: "🌸",
      badge: "Mood Booster",
      title: "Ghar Ki Sabse Badi Hasi",
      description: "Chahe mera din kitna bhi stressful kyu na ho, teri ek nautanki aur hasi poora mood ek second me theek kar deti hai!",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: "🍕",
      badge: "Midnight Foodie",
      title: "Maggie & Craving Partner",
      description: "Aadhi raat ko bina aawaaz kiye kitchen me Maggie banana aur mummy ke sone ke baad fridge raid marna!",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: "🛡️",
      badge: "My Strength",
      title: "Forever Support System",
      description: "Duniya ke samne chahe hum kitna bhi lad lein, par hum dono jante hain ki ek dusre ke liye hamesha khade rahenge.",
      color: "from-emerald-500 to-teal-600"
    }
  ],

  // ─── 8. INTERACTIVE SHAGUN LIFAFA (UPI Request & Gifting) ─────────
  whatsapp: {
    number: "919876543210"                // Brother's phone number with Country Code (e.g. 919876543210)
  },

  shagun: {
    badge: "Rakhi Shagun",
    title: "🎁 Shagun Ka Digital Lifafa",
    message: "Bhai se shagun maangne ka digital tarika! Amount choose karo aur direct request bhej do!",
    brotherUpiId: "brother@upi",
    giftCardCode: "RAKHI-2026-BHAI-TREAT",
    quickAmounts: [501, 1100, 2100, 5000],
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
