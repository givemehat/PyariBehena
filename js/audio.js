/**
 * ===================================================================
 * 🎵 PYARI BEHENA - SOUND & AUDIO SYSTEM (Web Audio API + Custom MP3)
 * ===================================================================
 */

class SoundSystem {
  constructor() {
    this.audioContext = null;
    this.bgAudio = null;
    this.isPlaying = false;
    this.autoplayBlocked = false;
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    } catch (e) {
      console.warn("Web Audio API not supported on this browser:", e);
    }
  }

  resumeContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  // Built-in Synthesizer Sound Effects (100% reliable, zero external dependencies)
  playSparkle() {
    this.resumeContext();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;

    const frequencies = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.12, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  }

  playClick() {
    this.resumeContext();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Background Music Controller
  initBackgroundMusic(customUrl, volume = 0.5) {
    if (!customUrl) return;
    try {
      this.bgAudio = new Audio(customUrl);
      this.bgAudio.loop = true;
      this.bgAudio.volume = Math.min(Math.max(volume, 0.0), 1.0);

      // Attempt subtle background playback
      const playPromise = this.bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.isPlaying = true;
          this.updateAudioButtonUI(true);
        }).catch(error => {
          // Autoplay blocked by browser policy (expected on modern mobile & desktop browsers)
          this.autoplayBlocked = true;
          this.updateAudioButtonUI(false);
          this.showAutoplayPrompt();
        });
      }
    } catch (e) {
      console.warn("Audio init error:", e);
    }
  }

  showAutoplayPrompt() {
    const promptEl = document.getElementById('musicPromptToast');
    if (promptEl) {
      promptEl.classList.remove('hidden');
      setTimeout(() => {
        promptEl.classList.add('opacity-100');
      }, 100);
    }
  }

  hideAutoplayPrompt() {
    const promptEl = document.getElementById('musicPromptToast');
    if (promptEl) {
      promptEl.classList.add('opacity-0');
      setTimeout(() => {
        promptEl.classList.add('hidden');
      }, 300);
    }
  }

  playBackgroundMusic() {
    if (!this.bgAudio) return false;
    this.resumeContext();
    this.bgAudio.play().then(() => {
      this.isPlaying = true;
      this.updateAudioButtonUI(true);
      this.hideAutoplayPrompt();
    }).catch(err => {
      console.log("Audio waiting for interaction:", err);
    });
    return true;
  }

  pauseBackgroundMusic() {
    if (!this.bgAudio) return false;
    this.bgAudio.pause();
    this.isPlaying = false;
    this.updateAudioButtonUI(false);
    return false;
  }

  updateAudioButtonUI(playing) {
    const audioToggleBtn = document.getElementById('floatingAudioToggle');
    const audioIcon = document.getElementById('audioStatusIcon');
    const audioSubtext = document.getElementById('audioButtonSubtext');

    if (playing) {
      if (audioIcon) audioIcon.innerHTML = `<span class="animate-pulse text-rose-600">🎵</span>`;
      if (audioToggleBtn) audioToggleBtn.classList.add('border-rose-400', 'bg-rose-50');
      if (audioSubtext) audioSubtext.innerText = "Playing • Tap to Mute";
    } else {
      if (audioIcon) audioIcon.innerHTML = `<span>🔇</span>`;
      if (audioToggleBtn) audioToggleBtn.classList.remove('border-rose-400', 'bg-rose-50');
      if (audioSubtext) audioSubtext.innerText = "Muted • Tap to Play";
    }
  }

  toggleBackgroundMusic() {
    if (this.isPlaying) {
      return this.pauseBackgroundMusic();
    } else {
      return this.playBackgroundMusic();
    }
  }
}

window.soundSystem = new SoundSystem();
