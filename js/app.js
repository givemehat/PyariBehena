/**
 * ===================================================================
 * 🌸 PYARI BEHENA - MAIN APP, SIBLING TRAITS & SMART SHAGUN SYSTEM
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
    this.renderTraits();
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

    // Shagun Voucher Code & Brother's Registered UPI Display
    if (CONFIG.shagun) {
      const giftCode = document.getElementById('shagunGiftCode');
      if (giftCode && CONFIG.shagun.giftCardCode) giftCode.innerText = CONFIG.shagun.giftCardCode;

      const bhaiUpiEl = document.getElementById('bhaiDisplayUpi');
      if (bhaiUpiEl && CONFIG.shagun.brotherUpiId) {
        bhaiUpiEl.innerText = CONFIG.shagun.brotherUpiId;
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
      const imgSrc = mem.image || "assets/images/photo1.jpg";

      card.innerHTML = `
        <div class="relative overflow-hidden rounded-md bg-amber-50 aspect-[4/3]"
             ondragover="event.preventDefault(); this.classList.add('ring-2', 'ring-rose-500')"
             ondragleave="this.classList.remove('ring-2', 'ring-rose-500')"
             ondrop="window.rakhiApp.handleDropPhoto(${index}, event)">
          <img id="memory-img-${index}" src="${imgSrc}" alt="${title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='assets/images/photo1.jpg'">
          
          <!-- In-Place Photo Change Button -->
          <div class="photo-upload-overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity gap-1" onclick="window.rakhiApp.triggerPhotoUpload(${index}, event)">
            <span class="text-xl">📷</span>
            <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">Drag or Click Photo</span>
          </div>

          <div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            ${date}
          </div>
        </div>
        <div class="mt-3 text-center">
          <h4 class="font-heading font-bold text-zinc-800 text-sm sm:text-base mt-1">${title}</h4>
          <p class="font-handwriting text-zinc-600 text-sm sm:text-base mt-0.5 leading-snug">${caption}</p>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.photo-upload-overlay')) return;
        if (window.soundSystem && typeof window.soundSystem.playClick === 'function') {
          window.soundSystem.playClick();
        }
        this.openPhotoModal(mem);
      });

      grid.appendChild(card);
    });
  }

  /* ─── RENDER 4 SIBLING TRAITS ─── */
  renderTraits() {
    const grid = document.getElementById('traitsGrid');
    if (!grid || !Array.isArray(CONFIG.traits)) return;
    grid.innerHTML = '';

    CONFIG.traits.forEach(trait => {
      const card = document.createElement('div');
      card.className = "glass-card p-5 sm:p-6 flex flex-col justify-between border border-amber-200/60 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group";
      
      const icon = trait.icon || "🌸";
      const badge = trait.badge || "Bonding";
      const title = trait.title || "Special Bond";
      const desc = trait.description || "A sweet bond that lasts forever.";
      const color = trait.color || "from-rose-500 to-amber-500";

      card.innerHTML = `
        <div class="space-y-3.5 text-center flex flex-col items-center">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${color} text-white flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            ${icon}
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
              ${badge}
            </span>
            <h3 class="text-base font-bold text-zinc-800 mt-2 font-heading">${title}</h3>
            <p class="text-xs text-zinc-600 mt-1.5 leading-relaxed">${desc}</p>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  /* ─── DRAG & DROP PHOTO HANDLER ─── */
  handleDropPhoto(index, event) {
    event.preventDefault();
    if (event.currentTarget) {
      event.currentTarget.classList.remove('ring-2', 'ring-rose-500');
    }
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      this.compressAndSavePhoto(index, files[0]);
    }
  }

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
      this.compressAndSavePhoto(index, file);
    };

    fileInput.click();
  }

  handleModalPhoto(index, event) {
    const file = event.target.files[0];
    if (!file) return;
    this.compressAndSavePhoto(index, file);
  }

  compressAndSavePhoto(index, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
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

        if (!CONFIG.memories[index]) {
          CONFIG.memories[index] = { title: `Memory #${index + 1}`, caption: "Special moment", date: "Yaadein" };
        }
        CONFIG.memories[index].image = compressedData;
        
        const imgEl = document.getElementById(`memory-img-${index}`);
        if (imgEl) imgEl.src = compressedData;

        if (window.festiveEffects) window.festiveEffects.celebrate('medium');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  /* ─── SMART SHAGUN REQUEST TO BHAI ─── */
  selectShagunAmount(amt) {
    const input = document.getElementById('shagunReqAmount');
    if (input) {
      input.value = amt;
      if (window.soundSystem && typeof window.soundSystem.playClick === 'function') {
        window.soundSystem.playClick();
      }
    }
  }

  sendShagunRequestToBhai() {
    const amount = document.getElementById('shagunReqAmount').value || "1100";
    const sisterUpi = document.getElementById('sisterUpiId').value.trim();
    const note = document.getElementById('shagunSisterNote').value.trim() || "Shopping shagun from Bhai! ❤️";
    const brotherName = CONFIG.brotherName || "Bhai";
    const sisterName = CONFIG.sisterName || "Gudiya";

    if (!sisterUpi) {
      alert("⚠️ Please enter your UPI ID (e.g. yourname@oksbi or paytm) so Bhai can pay you!");
      document.getElementById('sisterUpiId').focus();
      return;
    }

    // Get brother's exact target WhatsApp number
    let phone = (CONFIG.whatsapp && CONFIG.whatsapp.number) ? CONFIG.whatsapp.number.replace(/[^0-9]/g, '') : '';
    if (!phone || phone === "919876543210") {
      const inputPhone = prompt("Enter Bhai's 10-digit WhatsApp Phone Number (to send request directly to him):", "");
      if (!inputPhone) return;
      phone = inputPhone.replace(/[^0-9]/g, '');
      if (phone.length === 10) phone = '91' + phone;
      if (!CONFIG.whatsapp) CONFIG.whatsapp = {};
      CONFIG.whatsapp.number = phone;
    }

    const upiPayUrl = `upi://pay?pa=${encodeURIComponent(sisterUpi)}&pn=${encodeURIComponent(sisterName)}&am=${encodeURIComponent(amount)}&tn=${encodeURIComponent(note)}&cu=INR`;

    const qrContainer = document.getElementById('sisterQrContainer');
    const qrImg = document.getElementById('sisterLiveQrImg');
    if (qrContainer && qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiPayUrl)}`;
      qrContainer.classList.remove('hidden');
    }

    if (window.festiveEffects) window.festiveEffects.celebrate('high');

    const whatsappMsg = `Hey ${brotherName}! 🌸\nMaine Raksha Bandhan special website se shagun request kiya hai:\n\n💸 *Amount: ₹${amount}*\n💌 *Note:* ${note}\n📲 *My UPI ID:* ${sisterUpi}\n\n👉 *Bhai Click Here to 1-Tap Pay directly via UPI:*\n${upiPayUrl}\n\nLove you Bhai! Jaldi approve karo! 😋❤️`;

    const encodedText = encodeURIComponent(whatsappMsg);
    const url = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(url, '_blank');
  }

  /* ─── PERSONALIZE MODAL ─── */
  openPersonalizeModal() {
    if (window.soundSystem && typeof window.soundSystem.playClick === 'function') {
      window.soundSystem.playClick();
    }

    const modal = document.getElementById('personalizeModal');
    if (!modal) return;

    const sisterInput = document.getElementById('modalSisterName');
    const brotherInput = document.getElementById('modalBrotherName');
    const whatsappInput = document.getElementById('modalWhatsappNumber');
    const brotherUpiInput = document.getElementById('modalBrotherUpi');

    if (sisterInput) sisterInput.value = CONFIG.sisterName || "Gudiya";
    if (brotherInput) brotherInput.value = CONFIG.brotherName || "Tera Bhai";
    if (whatsappInput) whatsappInput.value = (CONFIG.whatsapp && CONFIG.whatsapp.number) ? CONFIG.whatsapp.number : "919876543210";
    if (brotherUpiInput) brotherUpiInput.value = (CONFIG.shagun && CONFIG.shagun.brotherUpiId) ? CONFIG.shagun.brotherUpiId : "brother@upi";

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closePersonalizeModal() {
    const modal = document.getElementById('personalizeModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  applyModalChanges() {
    const sisterInput = document.getElementById('modalSisterName');
    const brotherInput = document.getElementById('modalBrotherName');
    const whatsappInput = document.getElementById('modalWhatsappNumber');
    const brotherUpiInput = document.getElementById('modalBrotherUpi');

    if (sisterInput && sisterInput.value.trim()) {
      CONFIG.sisterName = sisterInput.value.trim();
    }
    if (brotherInput && brotherInput.value.trim()) {
      CONFIG.brotherName = brotherInput.value.trim();
    }
    if (whatsappInput && whatsappInput.value.trim()) {
      let num = whatsappInput.value.trim().replace(/[^0-9]/g, '');
      if (num.length === 10) num = '91' + num;
      if (!CONFIG.whatsapp) CONFIG.whatsapp = {};
      CONFIG.whatsapp.number = num;
    }
    if (brotherUpiInput && brotherUpiInput.value.trim()) {
      if (!CONFIG.shagun) CONFIG.shagun = {};
      CONFIG.shagun.brotherUpiId = brotherUpiInput.value.trim();
    }

    this.bindConfigData();
    this.renderLetter();
    this.renderMemories();
    this.renderTraits();

    this.closePersonalizeModal();

    if (window.soundSystem && typeof window.soundSystem.playBackgroundMusic === 'function') {
      window.soundSystem.playBackgroundMusic();
    }
    if (window.festiveEffects) window.festiveEffects.celebrate('high');

    alert(`🎉 Website customized for ${CONFIG.sisterName}!`);
  }

  shareOnWhatsAppFromModal() {
    this.applyModalChanges();
    this.shareOnWhatsApp();
  }

  shareOnWhatsApp() {
    const compactData = {
      sisterName: CONFIG.sisterName,
      sisterNickname: CONFIG.sisterNickname,
      brotherName: CONFIG.brotherName,
      festivalYear: CONFIG.festivalYear,
      hero: CONFIG.hero,
      letter: CONFIG.letter,
      memories: CONFIG.memories,
      whatsapp: CONFIG.whatsapp,
      traits: CONFIG.traits,
      shagun: CONFIG.shagun
    };

    const jsonStr = JSON.stringify(compactData);
    const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?c=${encoded}`;

    const text = encodeURIComponent(`Happy Raksha Bandhan ${CONFIG.sisterName}! 🌸\nMaine tere liye ek special digital surprise banaya hai, open karke dekh! ❤️\n\n${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
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
