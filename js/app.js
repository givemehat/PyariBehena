/**
 * ===================================================================
 * 🌸 MERI BEHEN - MAIN APP & DYNAMIC DATA BINDING
 * ===================================================================
 */

class RakhiApp {
  constructor() {
    this.quizState = {
      currentIndex: 0,
      score: 0,
      answered: false
    };
    this.init();
  }

  init() {
    if (typeof CONFIG === 'undefined') {
      console.error("CONFIG not loaded!");
      return;
    }

    this.bindConfigData();
    this.initAudioPlayer();
    this.renderMemories();
    this.renderLetter();
    this.initQuiz();
    this.bindGlobalEvents();
  }

  bindConfigData() {
    // Sibling Names & Header Badges
    document.querySelectorAll('.conf-sister-name').forEach(el => el.innerText = CONFIG.sisterName);
    document.querySelectorAll('.conf-brother-name').forEach(el => el.innerText = CONFIG.brotherName);
    document.querySelectorAll('.conf-sister-nickname').forEach(el => el.innerText = CONFIG.sisterNickname);
    document.querySelectorAll('.conf-brother-nickname').forEach(el => el.innerText = CONFIG.brotherNickname);
    document.querySelectorAll('.conf-festival-year').forEach(el => el.innerText = CONFIG.festivalYear);
    document.querySelectorAll('.conf-relation-text').forEach(el => el.innerText = CONFIG.relationText);

    // Hero Text
    const heroTitle = document.getElementById('heroHeading');
    if (heroTitle) heroTitle.innerText = CONFIG.hero.mainHeading;
    
    const heroTagline = document.getElementById('heroTagline');
    if (heroTagline) heroTagline.innerText = CONFIG.hero.tagline;

    const heroSubtext = document.getElementById('heroSubtext');
    if (heroSubtext) heroSubtext.innerText = CONFIG.hero.subtext;

    // Shagun data
    const upiText = document.getElementById('shagunUpiText');
    if (upiText) upiText.innerText = CONFIG.shagun.upiId;

    const giftCode = document.getElementById('shagunGiftCode');
    if (giftCode) giftCode.innerText = CONFIG.shagun.giftCardCode;

    const giftNote = document.getElementById('shagunGiftNote');
    if (giftNote) giftNote.innerText = CONFIG.shagun.giftNote;

    const qrImg = document.getElementById('shagunQrImage');
    if (qrImg && CONFIG.shagun.showUpiQr) {
      qrImg.src = CONFIG.shagun.qrImagePlaceholder;
    }
  }

  initAudioPlayer() {
    const audioToggleBtn = document.getElementById('floatingAudioToggle');
    const audioTitleEl = document.getElementById('audioTrackTitle');
    const audioIcon = document.getElementById('audioStatusIcon');

    if (audioTitleEl) {
      audioTitleEl.innerText = CONFIG.audio.songTitle;
    }

    if (window.soundSystem && CONFIG.audio.customAudioUrl) {
      window.soundSystem.initBackgroundMusic(CONFIG.audio.customAudioUrl);
    }

    if (audioToggleBtn) {
      audioToggleBtn.addEventListener('click', () => {
        if (!window.soundSystem) return;
        const isPlaying = window.soundSystem.toggleBackgroundMusic();
        if (isPlaying) {
          if (audioIcon) audioIcon.innerHTML = `<span class="animate-pulse text-rose-600">🎵</span>`;
          audioToggleBtn.classList.add('border-rose-400', 'bg-rose-50');
        } else {
          if (audioIcon) audioIcon.innerHTML = `<span>🔇</span>`;
          audioToggleBtn.classList.remove('border-rose-400', 'bg-rose-50');
        }
      });
    }

    // Auto-resume audio on first user touch anywhere if enabled
    const handleFirstUserInteraction = () => {
      if (window.soundSystem) window.soundSystem.resumeContext();
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };
    window.addEventListener('click', handleFirstUserInteraction);
    window.addEventListener('touchstart', handleFirstUserInteraction);
  }

  renderLetter() {
    const letterBody = document.getElementById('letterBodyContent');
    const promisesList = document.getElementById('letterPromisesList');
    const sealTag = document.getElementById('letterSealTag');
    const signature = document.getElementById('letterSignature');

    if (sealTag) sealTag.innerText = CONFIG.letter.sealTag;
    if (signature) signature.innerText = CONFIG.letter.signature;

    if (letterBody) {
      letterBody.innerHTML = CONFIG.letter.paragraphs.map(p => `
        <p class="text-zinc-700 leading-relaxed text-sm md:text-base mb-3.5 font-normal">${p}</p>
      `).join('');
    }

    if (promisesList) {
      promisesList.innerHTML = CONFIG.letter.promises.map(item => `
        <li class="flex items-center gap-2 text-xs md:text-sm text-rose-800 font-medium bg-rose-50/80 p-2.5 rounded-xl border border-rose-200/60 shadow-sm">
          <span>${item}</span>
        </li>
      `).join('');
    }
  }

  renderMemories() {
    const grid = document.getElementById('memoriesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    CONFIG.memories.forEach((mem, index) => {
      const card = document.createElement('div');
      card.className = "polaroid cursor-pointer group";
      card.style.transform = `rotate(${mem.rotation || '0deg'})`;
      card.innerHTML = `
        <div class="relative overflow-hidden rounded-md bg-amber-50 aspect-[4/3]">
          <img src="${mem.image}" alt="${mem.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'">
          <div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            ${mem.date}
          </div>
        </div>
        <div class="mt-3 text-center">
          <span class="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
            ${mem.tag}
          </span>
          <h4 class="font-heading font-bold text-zinc-800 text-sm md:text-base mt-1.5">${mem.title}</h4>
          <p class="font-handwriting text-zinc-600 text-sm md:text-base mt-1 leading-snug">${mem.caption}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        if (window.soundSystem) window.soundSystem.playClick();
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

    modalImg.src = mem.image;
    modalTitle.innerText = mem.title;
    modalCaption.innerText = mem.caption;
    modalDate.innerText = mem.date;

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

  initQuiz() {
    this.quizState.currentIndex = 0;
    this.quizState.score = 0;
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    const container = document.getElementById('quizQuestionContainer');
    const feedbackBox = document.getElementById('quizFeedbackBox');
    const progressEl = document.getElementById('quizProgress');

    if (!container || !CONFIG.quiz) return;

    if (feedbackBox) feedbackBox.classList.add('hidden');

    const total = CONFIG.quiz.questions.length;
    const current = this.quizState.currentIndex;

    if (current >= total) {
      this.renderQuizResult();
      return;
    }

    if (progressEl) {
      progressEl.innerText = `Question ${current + 1} of ${total}`;
    }

    const q = CONFIG.quiz.questions[current];
    this.quizState.answered = false;

    container.innerHTML = `
      <div class="animate-fadeIn">
        <h4 class="text-base md:text-lg font-bold text-zinc-800 mb-4 font-heading">${q.question}</h4>
        <div class="space-y-2.5">
          ${q.options.map((opt, idx) => `
            <button onclick="window.rakhiApp.handleQuizAnswer(${idx})" class="w-full text-left p-3.5 rounded-xl border border-zinc-200 hover:border-amber-400 bg-white/80 hover:bg-amber-50/60 transition-all font-medium text-xs md:text-sm text-zinc-700 flex items-center justify-between group">
              <span>${opt}</span>
              <span class="opacity-0 group-hover:opacity-100 text-amber-600 transition-opacity">👉</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  handleQuizAnswer(selectedIdx) {
    if (this.quizState.answered) return;
    this.quizState.answered = true;

    const q = CONFIG.quiz.questions[this.quizState.currentIndex];
    const isCorrect = selectedIdx === q.correctIndex;
    const feedbackBox = document.getElementById('quizFeedbackBox');

    if (isCorrect) {
      this.quizState.score++;
      if (window.soundSystem) window.soundSystem.playCheer();
      if (window.festiveEffects) window.festiveEffects.celebrate('medium');
    } else {
      if (window.soundSystem) window.soundSystem.playClick();
    }

    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      feedbackBox.className = `p-4 rounded-xl mt-4 text-center font-medium text-xs md:text-sm ${
        isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' : 'bg-rose-50 text-rose-800 border border-rose-300'
      }`;
      feedbackBox.innerHTML = `
        <div class="text-base mb-1">${isCorrect ? '🎉 Correct!' : '😜 Oops!'}</div>
        <p>${isCorrect ? q.reactionOnCorrect : q.reactionOnWrong}</p>
        <button onclick="window.rakhiApp.nextQuizQuestion()" class="mt-3 px-4 py-1.5 bg-zinc-800 text-white rounded-lg text-xs font-semibold hover:bg-black transition-all">
          Next Question ➡️
        </button>
      `;
    }
  }

  nextQuizQuestion() {
    this.quizState.currentIndex++;
    this.renderCurrentQuestion();
  }

  renderQuizResult() {
    const container = document.getElementById('quizQuestionContainer');
    const feedbackBox = document.getElementById('quizFeedbackBox');
    const progressEl = document.getElementById('quizProgress');

    if (progressEl) progressEl.innerText = "Quiz Completed!";
    if (feedbackBox) feedbackBox.classList.add('hidden');

    const total = CONFIG.quiz.questions.length;
    const score = this.quizState.score;

    if (window.festiveEffects) window.festiveEffects.celebrate('high');

    container.innerHTML = `
      <div class="text-center py-4 space-y-3">
        <div class="text-4xl animate-bounce-subtle">🏆</div>
        <h4 class="text-xl font-bold text-zinc-800 font-heading">You scored ${score} out of ${total}!</h4>
        <p class="text-xs md:text-sm text-zinc-600">
          ${score === total ? 'Perfection! Hamari sibling bonding sach me No.1 hai! ❤️' : 'Haha chahe kuch bhi score ho, you are always the best sister in the world! 🌸'}
        </p>
        <button onclick="window.rakhiApp.initQuiz()" class="mt-3 px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-xl text-xs font-bold shadow-md hover:brightness-110">
          🔄 Play Again
        </button>
      </div>
    `;
  }

  copyShagunCode() {
    if (!CONFIG.shagun.giftCardCode) return;
    navigator.clipboard.writeText(CONFIG.shagun.giftCardCode).then(() => {
      if (window.soundSystem) window.soundSystem.playClick();
      alert("🎁 Gift Code copied to clipboard! Enjoy your treat!");
    });
  }

  bindGlobalEvents() {
    // Open Gift Box Modal
    const openGiftBtns = document.querySelectorAll('.open-gift-modal-btn');
    const giftModal = document.getElementById('giftSurpriseModal');
    const closeGiftModal = document.getElementById('closeGiftSurpriseModal');

    openGiftBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.soundSystem) window.soundSystem.playCheer();
        if (window.festiveEffects) window.festiveEffects.celebrate('high');
        if (giftModal) {
          giftModal.classList.remove('hidden');
          giftModal.classList.add('flex');
        }
      });
    });

    if (closeGiftModal && giftModal) {
      closeGiftModal.addEventListener('click', () => {
        giftModal.classList.add('hidden');
        giftModal.classList.remove('flex');
      });
    }

    // Lightbox modal close
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');
    if (closeLightboxBtn) {
      closeLightboxBtn.addEventListener('click', () => this.closePhotoModal());
    }

    // Wax seal click scroll to letter
    const waxSeal = document.querySelector('.wax-seal');
    if (waxSeal) {
      waxSeal.addEventListener('click', () => {
        if (window.soundSystem) window.soundSystem.playSparkle();
        const letterSection = document.getElementById('letterSection');
        if (letterSection) letterSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.rakhiApp = new RakhiApp();
});
