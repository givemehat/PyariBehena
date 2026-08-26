/**
 * ===================================================================
 * 🌸 PYARI BEHENA - MAIN APP & DYNAMIC DATA BINDING
 * ===================================================================
 */

class RakhiApp {
  constructor() {
    this.loadUrlConfig();
    this.init();
  }

  loadUrlConfig() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const encodedData = urlParams.get('c') || (window.location.hash ? window.location.hash.substring(1) : null);
      
      if (encodedData) {
        // Base64 & URI decode
        const jsonStr = decodeURIComponent(escape(atob(encodedData)));
        const urlConfig = JSON.parse(jsonStr);
        if (typeof CONFIG !== 'undefined') {
          window.CONFIG = Object.assign({}, window.CONFIG, urlConfig);
        } else {
          window.CONFIG = urlConfig;
        }
      }
    } catch (e) {
      console.warn("Using default config.js:", e);
    }
  }

  init() {
    if (typeof CONFIG === 'undefined') {
      console.error("CONFIG object is missing! Please make sure config.js is loaded.");
      return;
    }

    this.bindMetaAndTitle();
    this.bindConfigData();
    this.initAudioPlayer();
    this.renderLetter();
    this.renderMemories();
    this.bindGlobalEvents();
  }

  bindMetaAndTitle() {
    if (CONFIG.meta) {
      if (CONFIG.meta.pageTitle) {
        document.title = CONFIG.meta.pageTitle;
      }
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && CONFIG.meta.description) {
        metaDesc.setAttribute('content', CONFIG.meta.description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && CONFIG.meta.pageTitle) {
        ogTitle.setAttribute('content', CONFIG.meta.pageTitle);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && CONFIG.meta.description) {
        ogDesc.setAttribute('content', CONFIG.meta.description);
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage && CONFIG.meta.previewImage) {
        ogImage.setAttribute('content', CONFIG.meta.previewImage);
      }
    }
  }

  bindConfigData() {
    const sisterName = CONFIG.sisterName || "Gudiya";
    const brotherName = CONFIG.brotherName || "Tera Bhai";
    const festivalYear = CONFIG.festivalYear || "2026";
    const relationBadge = CONFIG.relationBadge || "World's Best Sister Ever 👑";

    document.querySelectorAll('.conf-sister-name').forEach(el => el.innerText = sisterName);
    document.querySelectorAll('.conf-brother-name').forEach(el => el.innerText = brotherName);
    document.querySelectorAll('.conf-festival-year').forEach(el => el.innerText = festivalYear);
    document.querySelectorAll('.conf-relation-badge').forEach(el => el.innerText = relationBadge);

    // Hero Section
    if (CONFIG.hero) {
      const heroBadge = document.getElementById('heroBadgeText');
      if (heroBadge && CONFIG.hero.badge) heroBadge.innerText = CONFIG.hero.badge;

      const heroHeading = document.getElementById('heroHeading');
      if (heroHeading && CONFIG.hero.mainHeading) {
        heroHeading.innerHTML = CONFIG.hero.mainHeading.replace(/\{SISTER_NAME\}/g, `<span class="gold-gradient-text">${sisterName}</span>`);
      }

      const heroTagline = document.getElementById('heroTagline');
      if (heroTagline && CONFIG.hero.tagline) heroTagline.innerText = CONFIG.hero.tagline;

      const heroSubtext = document.getElementById('heroSubtext');
      if (heroSubtext && CONFIG.hero.subtext) heroSubtext.innerText = CONFIG.hero.subtext;
    }

    // Shagun Section
    if (CONFIG.shagun) {
      const shagunTitle = document.getElementById('shagunTitle');
      if (shagunTitle && CONFIG.shagun.title) shagunTitle.innerText = CONFIG.shagun.title;

      const shagunNote = document.getElementById('shagunGiftNote');
      if (shagunNote && CONFIG.shagun.message) shagunNote.innerText = CONFIG.shagun.message;

      const giftCode = document.getElementById('shagunGiftCode');
      if (giftCode && CONFIG.shagun.giftCardCode) giftCode.innerText = CONFIG.shagun.giftCardCode;

      const upiBox = document.getElementById('shagunUpiContainer');
      const upiText = document.getElementById('shagunUpiText');
      const qrImg = document.getElementById('shagunQrImage');

      if (CONFIG.shagun.showUpi && CONFIG.shagun.upiId) {
        if (upiText) upiText.innerText = CONFIG.shagun.upiId;
        if (qrImg) {
          const qrUrl = CONFIG.shagun.qrImagePlaceholder || `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${encodeURIComponent(CONFIG.shagun.upiId)}&pn=${encodeURIComponent(brotherName)}&cu=INR`;
          qrImg.src = qrUrl;
        }
      } else if (upiBox) {
        upiBox.classList.add('hidden');
      }
    }
  }

  initAudioPlayer() {
    const audioToggleBtn = document.getElementById('floatingAudioToggle');
    const audioTitleEl = document.getElementById('audioTrackTitle');

    if (CONFIG.audio && CONFIG.audio.enabled) {
      if (audioTitleEl && CONFIG.audio.songTitle) {
        audioTitleEl.innerText = CONFIG.audio.songTitle;
      }

      if (window.soundSystem && CONFIG.audio.customAudioUrl) {
        window.soundSystem.initBackgroundMusic(CONFIG.audio.customAudioUrl, CONFIG.audio.volume || 0.5);
      }

      if (audioToggleBtn) {
        audioToggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (window.soundSystem) {
            window.soundSystem.toggleBackgroundMusic();
          }
        });
      }

      // Resume audio on first interaction
      const handleFirstInteraction = () => {
        if (window.soundSystem) {
          window.soundSystem.resumeContext();
          if (window.soundSystem.autoplayBlocked && !window.soundSystem.isPlaying) {
            window.soundSystem.playBackgroundMusic();
          }
        }
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      };

      window.addEventListener('click', handleFirstInteraction, { passive: true });
      window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    } else if (audioToggleBtn) {
      audioToggleBtn.classList.add('hidden');
    }
  }

  renderLetter() {
    const letterBody = document.getElementById('letterBodyContent');
    const promisesList = document.getElementById('letterPromisesList');
    const promisesHeader = document.getElementById('letterPromisesHeader');
    const signature = document.getElementById('letterSignature');
    const letterTag = document.getElementById('letterTag');

    if (!CONFIG.letter) return;

    if (letterTag && CONFIG.letter.tag) letterTag.innerText = CONFIG.letter.tag;
    if (promisesHeader && CONFIG.letter.promisesHeader) promisesHeader.innerText = CONFIG.letter.promisesHeader;
    if (signature && CONFIG.letter.signature) signature.innerText = CONFIG.letter.signature;

    if (letterBody && Array.isArray(CONFIG.letter.paragraphs)) {
      letterBody.innerHTML = CONFIG.letter.paragraphs.map(p => `
        <p class="text-zinc-700 leading-relaxed text-sm sm:text-base font-normal">${p}</p>
      `).join('');
    }

    if (promisesList && Array.isArray(CONFIG.letter.promises)) {
      promisesList.innerHTML = CONFIG.letter.promises.map(item => `
        <li class="flex items-center gap-2 text-xs sm:text-sm text-rose-800 font-medium bg-rose-50/90 p-2.5 rounded-xl border border-rose-200/60 shadow-sm">
          <span>${item}</span>
        </li>
      `).join('');
    }
  }

  renderMemories() {
    const grid = document.getElementById('memoriesGrid');
    if (!grid || !Array.isArray(CONFIG.memories)) return;
    grid.innerHTML = '';

    CONFIG.memories.forEach((mem, index) => {
      const card = document.createElement('div');
      card.className = "polaroid cursor-pointer group";
      card.style.transform = `rotate(${mem.rotation || (index % 2 === 0 ? '-2deg' : '2deg')})`;
      
      const title = mem.title || "Sweet Memory";
      const caption = mem.caption || "A moment to remember forever ❤️";
      const date = mem.date || "Memory";
      const imgSrc = mem.image || "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";

      card.innerHTML = `
        <div class="relative overflow-hidden rounded-md bg-amber-50 aspect-[4/3]">
          <img src="${imgSrc}" alt="${title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'">
          <div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            ${date}
          </div>
        </div>
        <div class="mt-3 text-center">
          <h4 class="font-heading font-bold text-zinc-800 text-sm sm:text-base mt-1">${title}</h4>
          <p class="font-handwriting text-zinc-600 text-sm sm:text-base mt-0.5 leading-snug">${caption}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        if (window.soundSystem && typeof window.soundSystem.playClick === 'function') {
          window.soundSystem.playClick();
        }
        this.openPhotoModal(mem);
      });

      grid.appendChild(card);
    });
  }

  openPhotoModal(mem) {
    const modal = document.getElementById('photoLightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const modalTitle = document.getElementById('lightboxTitle');
    const modalCaption = document.getElementById('lightboxCaption');
    const modalDate = document.getElementById('lightboxDate');

    if (!modal) return;

    modalImg.src = mem.image || "";
    modalTitle.innerText = mem.title || "";
    modalCaption.innerText = mem.caption || "";
    modalDate.innerText = mem.date || "";

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closePhotoModal() {
    const modal = document.getElementById('photoLightboxModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  copyShagunCode() {
    const code = (CONFIG.shagun && CONFIG.shagun.giftCardCode) ? CONFIG.shagun.giftCardCode : "RAKHI-2026-BHAI-TREAT";
    navigator.clipboard.writeText(code).then(() => {
      if (window.soundSystem && typeof window.soundSystem.playClick === 'function') {
        window.soundSystem.playClick();
      }
      alert("🎁 Gift Voucher code copied to clipboard!");
    }).catch(err => {
      console.warn("Clipboard access denied:", err);
    });
  }

  shareWebsite() {
    const sisterName = CONFIG.sisterName || "Gudiya";
    const shareData = {
      title: `Happy Raksha Bandhan, ${sisterName}! 🌸`,
      text: `A special Raksha Bandhan surprise website with love, memories & treat vouchers! ❤️`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(err => console.log("Share skipped:", err));
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("🔗 Website link copied to clipboard! Send it to your sister on WhatsApp!");
      });
    }
  }

  bindGlobalEvents() {
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');
    if (closeLightboxBtn) {
      closeLightboxBtn.addEventListener('click', () => this.closePhotoModal());
    }

    const modal = document.getElementById('photoLightboxModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closePhotoModal();
      });
    }

    // Wax seal smooth scroll & sparkle
    const waxSeal = document.querySelector('.wax-seal');
    if (waxSeal) {
      waxSeal.addEventListener('click', () => {
        if (window.soundSystem && typeof window.soundSystem.playSparkle === 'function') {
          window.soundSystem.playSparkle();
        }
        if (window.festiveEffects && typeof window.festiveEffects.celebrate === 'function') {
          window.festiveEffects.celebrate('medium');
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.rakhiApp = new RakhiApp();
});
