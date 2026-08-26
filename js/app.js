/**
 * ===================================================================
 * 🌸 PYARI BEHENA - MAIN APP, LIVE IN-PLACE EDITOR & DATA BINDING
 * ===================================================================
 */

class RakhiApp {
  constructor() {
    this.isEditMode = false;
    this.loadUrlConfig();
    this.init();
  }

  loadUrlConfig() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const encodedData = urlParams.get('c') || (window.location.hash ? window.location.hash.substring(1) : null);
      
      if (encodedData) {
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
      console.error("CONFIG object missing!");
      return;
    }

    this.bindMetaAndTitle();
    this.bindConfigData();
    this.initAudioPlayer();
    this.renderLetter();
    this.renderMemories();
    this.initLiveEditor();
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
        heroHeading.innerHTML = CONFIG.hero.mainHeading.replace(/\{SISTER_NAME\}/g, `<span class="gold-gradient-text conf-sister-name">${sisterName}</span>`);
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
      letterBody.innerHTML = CONFIG.letter.paragraphs.map((p, idx) => `
        <p data-letter-idx="${idx}" class="editable-field text-zinc-700 leading-relaxed text-sm sm:text-base font-normal">${p}</p>
      `).join('');
    }

    if (promisesList && Array.isArray(CONFIG.letter.promises)) {
      promisesList.innerHTML = CONFIG.letter.promises.map((item, idx) => `
        <li data-promise-idx="${idx}" class="editable-field flex items-center gap-2 text-xs sm:text-sm text-rose-800 font-medium bg-rose-50/90 p-2.5 rounded-xl border border-rose-200/60 shadow-sm">
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
          <img id="memory-img-${index}" src="${imgSrc}" alt="${title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'">
          
          <!-- In-Place Photo Change Button (Shown on Edit Mode or Hover) -->
          <div class="photo-upload-overlay absolute inset-0 bg-black/50 opacity-0 flex flex-col items-center justify-center text-white transition-opacity gap-1 cursor-pointer" onclick="window.rakhiApp.triggerPhotoUpload(${index}, event)">
            <span class="text-xl">📷</span>
            <span class="text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">Click to Change Photo</span>
          </div>

          <div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            <span data-mem-date-idx="${index}" class="editable-field">${date}</span>
          </div>
        </div>
        <div class="mt-3 text-center">
          <h4 data-mem-title-idx="${index}" class="editable-field font-heading font-bold text-zinc-800 text-sm sm:text-base mt-1">${title}</h4>
          <p data-mem-caption-idx="${index}" class="editable-field font-handwriting text-zinc-600 text-sm sm:text-base mt-0.5 leading-snug">${caption}</p>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.photo-upload-overlay') || this.isEditMode) return;
        if (window.soundSystem && typeof window.soundSystem.playClick === 'function') {
          window.soundSystem.playClick();
        }
        this.openPhotoModal(mem);
      });

      grid.appendChild(card);
    });
  }

  /* ─── IN-PLACE PHOTO UPLOADER & COMPRESSION ─── */
  triggerPhotoUpload(index, event) {
    if (event) event.stopPropagation();
    
    let fileInput = document.getElementById('livePhotoFileInput');
    if (!fileInput) {
      fileInput = document.createElement('input');
      fileInput.id = 'livePhotoFileInput';
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';
      document.body.appendChild(fileInput);
    }

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (re) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxDim = 650;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const compressedData = canvas.toDataURL('image/jpeg', 0.72);

          // Update memory data & UI
          if (CONFIG.memories && CONFIG.memories[index]) {
            CONFIG.memories[index].image = compressedData;
          }
          const imgEl = document.getElementById(`memory-img-${index}`);
          if (imgEl) imgEl.src = compressedData;

          if (window.festiveEffects) window.festiveEffects.celebrate('medium');
        };
        img.src = re.target.result;
      };
      reader.readAsDataURL(file);
    };

    fileInput.click();
  }

  /* ─── IN-PLACE LIVE EDIT MODE ─── */
  initLiveEditor() {
    const editToggleBtn = document.getElementById('liveEditToggleBtn');
    const editorToolbar = document.getElementById('liveEditorToolbar');

    if (editToggleBtn) {
      editToggleBtn.addEventListener('click', () => {
        this.toggleEditMode();
      });
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    const body = document.body;
    const editorToolbar = document.getElementById('liveEditorToolbar');
    const editToggleBtn = document.getElementById('liveEditToggleBtn');

    if (this.isEditMode) {
      body.classList.add('edit-mode-active');
      if (editorToolbar) editorToolbar.classList.remove('hidden');
      if (editToggleBtn) editToggleBtn.classList.add('hidden');
      this.enableInlineEditing(true);
    } else {
      body.classList.remove('edit-mode-active');
      if (editorToolbar) editorToolbar.classList.add('hidden');
      if (editToggleBtn) editToggleBtn.classList.remove('hidden');
      this.enableInlineEditing(false);
      this.syncLiveChanges();
    }
  }

  enableInlineEditing(enable) {
    const editableElements = document.querySelectorAll('.conf-sister-name, .conf-brother-name, #heroTagline, #heroSubtext, .editable-field, #shagunGiftNote, #shagunUpiText');
    editableElements.forEach(el => {
      el.contentEditable = enable ? "true" : "false";
      if (enable) {
        el.onblur = () => this.syncLiveChanges();
      }
    });
  }

  syncLiveChanges() {
    // Read edited sister and brother names
    const sisterEl = document.querySelector('.conf-sister-name');
    if (sisterEl) {
      const name = sisterEl.innerText.trim();
      if (name) {
        CONFIG.sisterName = name;
        document.querySelectorAll('.conf-sister-name').forEach(el => el.innerText = name);
      }
    }

    const brotherEl = document.querySelector('.conf-brother-name');
    if (brotherEl) {
      const name = brotherEl.innerText.trim();
      if (name) {
        CONFIG.brotherName = name;
        document.querySelectorAll('.conf-brother-name').forEach(el => el.innerText = name);
      }
    }

    const taglineEl = document.getElementById('heroTagline');
    if (taglineEl && CONFIG.hero) CONFIG.hero.tagline = taglineEl.innerText.trim();

    const subtextEl = document.getElementById('heroSubtext');
    if (subtextEl && CONFIG.hero) CONFIG.hero.subtext = subtextEl.innerText.trim();

    // Sync letter paragraphs
    document.querySelectorAll('[data-letter-idx]').forEach(el => {
      const idx = parseInt(el.dataset.letterIdx);
      if (CONFIG.letter && CONFIG.letter.paragraphs && CONFIG.letter.paragraphs[idx] !== undefined) {
        CONFIG.letter.paragraphs[idx] = el.innerText.trim();
      }
    });

    // Sync promises
    document.querySelectorAll('[data-promise-idx]').forEach(el => {
      const idx = parseInt(el.dataset.promiseIdx);
      if (CONFIG.letter && CONFIG.letter.promises && CONFIG.letter.promises[idx] !== undefined) {
        CONFIG.letter.promises[idx] = el.innerText.trim();
      }
    });

    // Sync memory captions & titles
    document.querySelectorAll('[data-mem-title-idx]').forEach(el => {
      const idx = parseInt(el.dataset.memTitleIdx);
      if (CONFIG.memories && CONFIG.memories[idx]) {
        CONFIG.memories[idx].title = el.innerText.trim();
      }
    });

    document.querySelectorAll('[data-mem-caption-idx]').forEach(el => {
      const idx = parseInt(el.dataset.memCaptionIdx);
      if (CONFIG.memories && CONFIG.memories[idx]) {
        CONFIG.memories[idx].caption = el.innerText.trim();
      }
    });

    // Sync Shagun
    const upiText = document.getElementById('shagunUpiText');
    if (upiText && CONFIG.shagun) CONFIG.shagun.upiId = upiText.innerText.trim();
  }

  /* ─── INSTANT LINK & CONFIG DOWNLOAD ─── */
  generateAndCopyShareUrl() {
    this.syncLiveChanges();
    const compactData = {
      sisterName: CONFIG.sisterName,
      sisterNickname: CONFIG.sisterNickname,
      brotherName: CONFIG.brotherName,
      festivalYear: CONFIG.festivalYear,
      hero: CONFIG.hero,
      letter: CONFIG.letter,
      memories: CONFIG.memories,
      whatsapp: CONFIG.whatsapp,
      shagun: CONFIG.shagun
    };

    const jsonStr = JSON.stringify(compactData);
    const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?c=${encoded}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
      if (window.festiveEffects) window.festiveEffects.celebrate('high');
      alert(`🎉 Personalized Gift Link Copied!\n\nSend this link to ${CONFIG.sisterName} on WhatsApp/Instagram!`);
    }).catch(e => {
      prompt("Copy your personalized link:", shareUrl);
    });
  }

  shareOnWhatsApp() {
    this.syncLiveChanges();
    const compactData = {
      sisterName: CONFIG.sisterName,
      sisterNickname: CONFIG.sisterNickname,
      brotherName: CONFIG.brotherName,
      festivalYear: CONFIG.festivalYear,
      hero: CONFIG.hero,
      letter: CONFIG.letter,
      memories: CONFIG.memories,
      whatsapp: CONFIG.whatsapp,
      shagun: CONFIG.shagun
    };

    const jsonStr = JSON.stringify(compactData);
    const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?c=${encoded}`;

    const text = encodeURIComponent(`Happy Raksha Bandhan ${CONFIG.sisterName}! 🌸\nMaine tere liye ek special digital surprise banaya hai, open karke dekh! ❤️\n\n${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }

  downloadConfigFile() {
    this.syncLiveChanges();
    const code = `/**
 * ===================================================================
 * 🌸 PYARI BEHENA - MASTER CONFIGURATION FILE (config.js) 🌸
 * ===================================================================
 */

const CONFIG = ${JSON.stringify(CONFIG, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
`;
    const blob = new Blob([code], { type: 'text/javascript' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'config.js';
    link.click();
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
