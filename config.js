/**
 * ===================================================================
 * 🌸 PYARI BEHENA - RAKSHA BANDHAN SURPRISE CONFIGURATION 🌸
 * ===================================================================
 * 
 * 👉 YOUTUBE VIEWERS & DEVELOPERS:
 * Aapko code me kuch bhi complex change karne ki zaroorat nahi hai!
 * Sirf neeche diye gaye values ko apne hisaab se edit karein (Names, Photos, Messages, Vouchers).
 * Aur aapki personalized website ready ho jayegi! ✨
 * 
 * ===================================================================
 */

const CONFIG = {
  // ─── 1. SIBLING DETAILS (Naam aur Rishta) ────────────────────────
  sisterName: "Priya",                 // Aapki behen ka naam
  sisterNickname: "Chhoti / Nautanki", // Pyaar se bulane wala nickname
  brotherName: "Aman",                 // Aapka naam (Bhai)
  brotherNickname: "Aapka Pyara Bhai", // Aapka signature
  festivalYear: "2026",                // Festival year
  relationText: "World's Best Sister Ever 👑", // Subheading badge

  // ─── 2. HERO / HOME SECTION ─────────────────────────────────────
  hero: {
    badge: "✨ Special Raksha Bandhan Gift ✨",
    mainHeading: "Happy Raksha Bandhan, Meri Pyari Behena! 🌸",
    tagline: "Door hu toh kya hua, hamara pyaar aur nok-jhok hamesha dil ke paas hai.",
    subtext: "Tumhare liye ek chhota sa digital surprise, direct dil se... ❤️",
    openGiftButtonText: "🎁 Open Your Rakhi Surprise",
    exploreButtonText: "📜 Read Bhai's Letter"
  },

  // ─── 3. BACKGROUND MUSIC (Sangeet) ──────────────────────────────
  // Sound system automatically plays your custom sibling song!
  audio: {
    enabled: true,
    autoPlayPrompt: true,              // Ask to play on first click
    songTitle: "Phoolon Ka Taaron Ka (Lata Mangeshkar)",
    // Local project audio path:
    customAudioUrl: "assets/audio/phoolon-ka-taaron-ka.mp3"
  },

  // ─── 4. VIRTUAL RAKHI CEREMONY (Interactive Puja Thali) ─────────
  // Yahan behen virtual ritual complete kar sakti hai step-by-step!
  ceremony: {
    title: "🪔 Digital Rakhi & Aarti Ceremony",
    subtitle: "Chahe hum kitne bhi door ho, shubh muhurat aur aashirwad kabhi door nahi hote!",
    steps: [
      {
        step: 1,
        id: "tilak",
        name: "Shubh Tilak & Chawal",
        icon: "🔴",
        actionText: "Apply Tilak & Akshat",
        message: "Aapke maathe par Roli-Chandan ka tilak aur lambi umar ki duayein! 🌟",
        sound: "bell"
      },
      {
        step: 2,
        id: "rakhi",
        name: "Pavitra Rakhi Bandhan",
        icon: "🧵",
        actionText: "Tie Virtual Rakhi",
        message: "Resham ke dhage me bandha hamara अटूट prem aur lifelong protection ka promise! 💖",
        sound: "sparkle"
      },
      {
        step: 3,
        id: "aarti",
        name: "Maa Ki Mamta Wali Aarti",
        icon: "🪔",
        actionText: "Perform Holy Aarti",
        message: "Diye ki lau ki tarah aapki zindagi hamesha roshan aur khushiyon se bhari rahe! ✨",
        sound: "aarti"
      },
      {
        step: 4,
        id: "sweet",
        name: "Mithai Ka Shagun",
        icon: "🍬",
        actionText: "Feed Kaju Katli",
        message: "Muh meetha karo! Sabse pehle virtual Kaju Katli, real wali jaldi bhej raha hu! 😋",
        sound: "cheer"
      }
    ]
  },

  // ─── 5. EMOTIONAL LETTER ("Ek Pyara Sa Sandesh") ────────────────
  letter: {
    sealTag: "CONFIDENTIAL & SWEET",
    title: "Pyari Behena ke Naam, Bhai Ki Chitthi 💌",
    date: "Raksha Bandhan Special",
    paragraphs: [
      "Meri pyari behen,",
      "Mujhe aaj bhi yaad hai wo din jab hum TV ke remote ke liye lada karte the, Maggie ke aakhri bite ke liye ladai hoti thi, aur jab bhi mummy gussa hoti thi toh hum dono ek dusre ko bachate the.",
      "Aaj jab hum bade ho gaye hain aur dooriyon ki wajah se shayad main samne baith kar tumse Rakhi nahi bandhwa pa raha, par yakeen maano—mera dil aur meri duayein hamesha tumhare saath hain.",
      "Tum sirf meri behen nahi ho, meri sabse acchi dost, meri secret keeper aur meri sabse badi support system ho. Jab bhi main pareshan hota hu, tumhari ek hasi sab theek kar deti hai.",
      "Is Raksha Bandhan par main wada karta hu ki chahe hum kitne bhi busy ho jayein, main hamesha tumhare har sapne me tumhare peeche khada rahunga. Hamesha muskurati raho!"
    ],
    promises: [
      "🛡️ Always protecting you & backing your dreams",
      "🍕 Midnight cravings & food treats on Bhai",
      "🤐 Keeping all your secret gossips safe from Mummy-Papa",
      "📞 24/7 available for your emergency rants & tears"
    ],
    closing: "Tumhara sabse pyara (aur thoda tang karne wala) bhai,",
    signature: "Aman ❤️"
  },

  // ─── 6. MEMORY LANE (Photo Scrapbook & Timeline) ────────────────
  // Yahan apni aur behen ki pyari ya funny photos aur unki yaadein daalein!
  memories: [
    {
      title: "Bachpan Ki Mastiyaan 👶",
      caption: "Jab hum dono bina wajah pure ghar me bhaagte rehte the aur ek dusre par blame daalte the!",
      tag: "Childhood Days",
      date: "Old Sweet Memories",
      // Image URL ya local path: 'assets/images/photo1.jpg'
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      rotation: "-2deg"
    },
    {
      title: "Remote & Maggie Ki Jang 📺",
      caption: "World War 3 level fights for Cartoon Network vs Saas-Bahu serials! Par baad me share karke hi khana hota tha.",
      tag: "Tom & Jerry Mode",
      date: "Classic Sibling Fights",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      rotation: "3deg"
    },
    {
      title: "Festival Vibes & Dressed Up 🥻",
      caption: "Jab bhi traditional pehente the, photogenic poses sirf Instagram ke liye bante the!",
      tag: "Celebrations",
      date: "Every Festive Season",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      rotation: "-1.5deg"
    },
    {
      title: "Partner in Crime Always 🤝",
      caption: "Late night ice-cream runs aur mummy ko bina bataye fast-food khana!",
      tag: "Secret Alliance",
      date: "Forever Bond",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      rotation: "2.5deg"
    }
  ],

  // ─── 7. SIBLING LOVE VOUCHERS (Scratch & Claim Coupons) ─────────
  // Ye digital coupons behen anytime redeem kar sakti hai bhai se! 
  coupons: [
    {
      id: "coupon-1",
      title: "1x Unlimited Swiggy / Food Treat 🍔",
      description: "Jab bhi cravings ho, order karo aur bill bhai ke account se pay hoga (No questions asked)!",
      code: "BHAI-KHILAYEGA-2026",
      emoji: "🍕",
      color: "from-rose-500 to-pink-600",
      redeemed: false
    },
    {
      id: "coupon-2",
      title: "1x Zero Argument / Bhai Maanega Pass 😇",
      description: "Is coupon ko use karke poore 24 ghante tak bhai tumhari har baat bina behes ke maanega!",
      code: "QUEEN-FOR-A-DAY",
      emoji: "👑",
      color: "from-amber-500 to-orange-600",
      redeemed: false
    },
    {
      id: "coupon-3",
      title: "1x Midnight Ice-Cream / Long Drive Ride 🍨",
      description: "Mood off ho ya on, instant late-night outing & ice-cream on bhai's bike/car!",
      code: "CHILL-WITH-BHAI",
      emoji: "🚗",
      color: "from-violet-500 to-purple-600",
      redeemed: false
    },
    {
      id: "coupon-4",
      title: "1x Chhota Mota Kaam / Chore Helper 🧹",
      description: "Jab bhi koi boring task ya assignment ho, bhai will step in to help you out!",
      code: "TASK-SAVIOR-PRO",
      emoji: "⚡",
      color: "from-emerald-500 to-teal-600",
      redeemed: false
    }
  ],

  // ─── 8. SIBLING QUIZ (Masti & Fun Trivia) ────────────────────────
  quiz: {
    title: "How Well Do You Know Your Bhai? 🧠",
    subtitle: "Dekhte hain behena ko bhai ke baare me kitna pata hai!",
    questions: [
      {
        question: "Bhai ko sabse zyada gussa kab aata hai? 😡",
        options: [
          "Jab koi uska favourite food share na kare",
          "Jab TV ka remote chheen lo",
          "Jab subah jaldi uthaya jaye",
          "Ye sabhi baatein!"
        ],
        correctIndex: 3,
        reactionOnCorrect: "Bilkul sahi pakde hain! Sach me full research hai! 😂",
        reactionOnWrong: "Arrey re! Bhai ko abhi theek se samjhi nahi tum! 😜"
      },
      {
        question: "Hamari sabse common ladai kis baat par hoti hai? ⚔️",
        options: [
          "Kaun zyada favourite hai Mummy-Papa ka",
          "Pankha kaun band karega",
          "Aakhri slice of pizza",
          "Kaun zyada nautanki hai"
        ],
        correctIndex: 0,
        reactionOnCorrect: "Hahaha, obvious hai! Waise mummy ka favourite toh main hi hu! 🏆",
        reactionOnWrong: "Galat jawab! Par ladai toh sab par hoti hai waise! 😆"
      },
      {
        question: "Agar behen ko koi problem ho, toh bhai kya karega? 🛡️",
        options: [
          "Turant help ke liye aage aayega",
          "Pehle thoda chidayega phir solve karega",
          "Duniya se lad jayega apni behen ke liye",
          "All of the above (Always there!)"
        ],
        correctIndex: 3,
        reactionOnCorrect: "Always and forever! Bhai is always by your side! ❤️",
        reactionOnWrong: "Options saare theek the! Main hamesha tumhare saath hu! 🤗"
      }
    ]
  },

  // ─── 9. RAKHI SHAGUN / GIFT ENVELOPE (Digital Lifafa) ─────────────
  // Yahan aap real UPI QR code ya Amazon/Flipkart gift card code display kar sakte hain!
  shagun: {
    badge: "🎁 Rakhi Shagun & Gift",
    title: "Special Shagun Ka Lifafa 💌",
    message: "Bhai ki taraf se shagun ka lifafa! Khush raho aur khoob shopping karo!",
    showUpiQr: true,
    upiId: "bhai@upi",                   // Aapka UPI ID ya dummy
    qrImagePlaceholder: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=brother@upi&pn=Bhai&cu=INR",
    giftCardCode: "RAKHI-2026-BHAI-GIFT",
    giftNote: "Yeh shagun tumhari manpasand shopping aur treats ke liye hai. Love you always!"
  },

  // ─── 10. FOOTER & SOCIAL ─────────────────────────────────────────
  footer: {
    message: "Crafted with immense love by",
    copyright: "2026 • Pyari Behena Project",
    githubRepoLink: "https://github.com/givemehat/PyariBehena"
  }
};

// Global export
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
