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
    this.isMuted = false;
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

  // Built-in Synthesizer Sound Effects (100% reliable, zero external assets required!)
  playBell() {
    this.resumeContext();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5 note
    osc.frequency.exponentialRampToValueAtTime(440, now + 1.2);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 1.2);
  }

  playSparkle() {
    this.resumeContext();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;

    const frequencies = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C major pentatonic
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.15, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });
  }

  playAarti() {
    this.resumeContext();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;

    // Harmonic warm resonant bell
    [587.33, 880, 1174.66].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);
      gain.gain.setValueAtTime(0.12 / (i + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.8);
    });
  }

  playCheer() {
    this.resumeContext();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;

    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);
      gain.gain.setValueAtTime(0.2, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.6);
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
  initBackgroundMusic(customUrl) {
    if (!customUrl) return;
    this.bgAudio = new Audio(customUrl);
    this.bgAudio.loop = true;
    this.bgAudio.volume = 0.45;
  }

  playBackgroundMusic() {
    if (!this.bgAudio) return false;
    this.resumeContext();
    this.bgAudio.play().then(() => {
      this.isPlaying = true;
      this.updateAudioButtonUI(true);
    }).catch(err => {
      console.log("Audio waiting for user gesture:", err);
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
    if (playing) {
      if (audioIcon) audioIcon.innerHTML = `<span class="animate-pulse text-rose-600">🎵</span>`;
      if (audioToggleBtn) audioToggleBtn.classList.add('border-rose-400', 'bg-rose-50');
    } else {
      if (audioIcon) audioIcon.innerHTML = `<span>🔇</span>`;
      if (audioToggleBtn) audioToggleBtn.classList.remove('border-rose-400', 'bg-rose-50');
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
