/**
 * ===================================================================
 * 🪔 PYARI BEHENA - VIRTUAL RAKHI & PUJA THALI RITUAL
 * ===================================================================
 */

class RakhiRitual {
  constructor() {
    this.currentStep = 0;
    this.totalSteps = 4;
    this.completedSteps = new Set();
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Step item clicks
    const ritualItems = document.querySelectorAll('.ritual-interactive-item');
    ritualItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const stepId = item.dataset.stepId;
        this.performStep(stepId);
      });
    });

    const resetBtn = document.getElementById('resetRitualBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetRitual());
    }
  }

  performStep(stepId) {
    if (!window.soundSystem) return;

    const feedbackEl = document.getElementById('ritualFeedbackText');
    const badgeEl = document.getElementById('ritualProgressBadge');
    const wristRakhi = document.getElementById('virtualWristRakhi');
    const tilakMark = document.getElementById('virtualForeheadTilak');
    const aartiAura = document.getElementById('virtualAartiAura');
    const sweetBite = document.getElementById('virtualSweetFed');

    if (stepId === 'tilak') {
      window.soundSystem.playBell();
      if (tilakMark) {
        tilakMark.classList.remove('hidden');
        tilakMark.classList.add('animate-tilak');
      }
      this.markStepComplete(1, "✨ Shubh Tilak & Akshat Lagaya Gaya! Lambi umar aur dhero khushiyaan!");
      window.festiveEffects.celebrate('medium');
    } 
    else if (stepId === 'rakhi') {
      window.soundSystem.playSparkle();
      if (wristRakhi) {
        wristRakhi.classList.remove('hidden');
        wristRakhi.classList.add('animate-rakhi');
      }
      this.markStepComplete(2, "🧵 Pavitra Rakhi Bandh Gayi! Bhai ka hamesha saath aur suraksha ka wada!");
      window.festiveEffects.celebrate('medium');
    }
    else if (stepId === 'aarti') {
      window.soundSystem.playAarti();
      if (aartiAura) {
        aartiAura.classList.remove('hidden');
        aartiAura.classList.add('animate-pulse-gold');
      }
      this.markStepComplete(3, "🪔 Aarti Sampann Hui! Prabhu aapke jeevan ko sukh-samriddhi se roshan karein!");
    }
    else if (stepId === 'sweet') {
      window.soundSystem.playCheer();
      if (sweetBite) {
        sweetBite.classList.remove('hidden');
      }
      this.markStepComplete(4, "🍬 Muh Meetha Ho Gaya! Sabse swadisht Kaju Katli aapke naam!");
      window.festiveEffects.celebrate('high');
    }
  }

  markStepComplete(stepNum, message) {
    this.completedSteps.add(stepNum);
    
    // Update step UI state
    const itemCard = document.querySelector(`[data-step-num="${stepNum}"]`);
    if (itemCard) {
      itemCard.classList.add('completed', 'border-amber-500', 'bg-amber-50/80');
      const checkIcon = itemCard.querySelector('.step-check-icon');
      if (checkIcon) checkIcon.classList.remove('hidden');
    }

    // Feedback message
    const feedbackEl = document.getElementById('ritualFeedbackText');
    if (feedbackEl) {
      feedbackEl.innerHTML = `<span class="inline-block animate-bounce-subtle">${message}</span>`;
      feedbackEl.classList.remove('text-zinc-500');
      feedbackEl.classList.add('text-rose-700', 'font-semibold');
    }

    // Update progress pill
    const countEl = document.getElementById('ritualCompletedCount');
    if (countEl) countEl.innerText = this.completedSteps.size;

    // Check if ritual is 100% complete
    if (this.completedSteps.size === this.totalSteps) {
      this.onAllStepsCompleted();
    }
  }

  onAllStepsCompleted() {
    const successBanner = document.getElementById('ritualCompleteBanner');
    if (successBanner) {
      successBanner.classList.remove('hidden');
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    setTimeout(() => {
      window.festiveEffects.celebrate('high');
    }, 400);
  }

  resetRitual() {
    this.completedSteps.clear();
    const wristRakhi = document.getElementById('virtualWristRakhi');
    const tilakMark = document.getElementById('virtualForeheadTilak');
    const aartiAura = document.getElementById('virtualAartiAura');
    const sweetBite = document.getElementById('virtualSweetFed');
    const successBanner = document.getElementById('ritualCompleteBanner');
    const feedbackEl = document.getElementById('ritualFeedbackText');
    const countEl = document.getElementById('ritualCompletedCount');

    if (wristRakhi) wristRakhi.classList.add('hidden');
    if (tilakMark) tilakMark.classList.add('hidden');
    if (aartiAura) aartiAura.classList.add('hidden');
    if (sweetBite) sweetBite.classList.add('hidden');
    if (successBanner) successBanner.classList.add('hidden');

    if (feedbackEl) {
      feedbackEl.innerText = "Thali ke kisi bhi item par click karke ritual shuru karein!";
      feedbackEl.className = "text-sm text-zinc-500 italic";
    }

    if (countEl) countEl.innerText = "0";

    document.querySelectorAll('.ritual-interactive-item').forEach(card => {
      card.classList.remove('completed', 'border-amber-500', 'bg-amber-50/80');
      const checkIcon = card.querySelector('.step-check-icon');
      if (checkIcon) checkIcon.classList.add('hidden');
    });

    if (window.soundSystem) window.soundSystem.playClick();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.rakhiRitual = new RakhiRitual();
});
