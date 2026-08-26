/**
 * ===================================================================
 * 🌸 MERI BEHEN - VISUAL EFFECTS & CANVAS PARTICLES 🌸
 * ===================================================================
 */

class FestiveEffects {
  constructor() {
    this.canvas = document.getElementById('petalCanvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.petals = [];
    this.sparkles = [];
    this.numberOfPetals = window.innerWidth < 768 ? 25 : 45;
    this.mouse = { x: -1000, y: -1000, moved: false };

    if (this.canvas && this.ctx) {
      this.resize();
      this.initPetals();
      this.setupListeners();
      this.animate();
    }
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  setupListeners() {
    window.addEventListener('resize', () => this.resize());
    
    // Sparkle trail on mouse move
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.moved = true;
      this.addSparkle(e.clientX, e.clientY);
    });

    // Touch sparkle
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        this.addSparkle(t.clientX, t.clientY);
      }
    }, { passive: true });
  }

  initPetals() {
    const petalColors = [
      '#f59e0b', // Marigold Yellow-Orange
      '#fbbf24', // Bright Marigold
      '#ea580c', // Saffron
      '#f43f5e', // Rose Red
      '#fda4af', // Soft Rose Pink
      '#be123c'  // Deep Crimson
    ];

    this.petals = [];
    for (let i = 0; i < this.numberOfPetals; i++) {
      this.petals.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height - this.height,
        size: Math.random() * 12 + 8,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        speedY: Math.random() * 1.5 + 0.8,
        speedX: Math.random() * 1 - 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
        oscillationSpeed: Math.random() * 0.03 + 0.01,
        oscillationDistance: Math.random() * 30 + 15,
        baseX: Math.random() * this.width,
        time: Math.random() * 100,
        isRound: Math.random() > 0.4
      });
    }
  }

  addSparkle(x, y) {
    if (Math.random() > 0.4) return;
    const colors = ['#f59e0b', '#fbbf24', '#fef08a', '#fda4af', '#ffffff'];
    this.sparkles.push({
      x: x + (Math.random() * 16 - 8),
      y: y + (Math.random() * 16 - 8),
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.03 + 0.02,
      vy: Math.random() * -1.5 - 0.5,
      vx: (Math.random() - 0.5) * 1.5
    });
  }

  drawPetal(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);

    ctx.fillStyle = p.color;
    ctx.beginPath();

    if (p.isRound) {
      // Marigold / Genda flower petal shape
      ctx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
    } else {
      // Rose petal curved shape
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.8, p.size * 0.5, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
    }

    ctx.fill();
    ctx.restore();
  }

  drawSparkle(s) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = s.color;

    // Draw 4-point golden star
    const x = s.x, y = s.y, r = s.size;
    ctx.beginPath();
    ctx.moveTo(x, y - r * 1.5);
    ctx.lineTo(x + r * 0.3, y - r * 0.3);
    ctx.lineTo(x + r * 1.5, y);
    ctx.lineTo(x + r * 0.3, y + r * 0.3);
    ctx.lineTo(x, y + r * 1.5);
    ctx.lineTo(x - r * 0.3, y + r * 0.3);
    ctx.lineTo(x - r * 1.5, y);
    ctx.lineTo(x - r * 0.3, y - r * 0.3);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw petals
    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.time += p.oscillationSpeed;
      p.y += p.speedY;
      p.x = p.baseX + Math.sin(p.time) * p.oscillationDistance;
      p.rotation += p.rotationSpeed;

      // Wrap around screen
      if (p.y > this.height + 30) {
        p.y = -30;
        p.baseX = Math.random() * this.width;
      }

      this.drawPetal(p);
    }

    // Update and draw cursor sparkles
    for (let i = this.sparkles.length - 1; i >= 0; i--) {
      const s = this.sparkles[i];
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= s.decay;

      if (s.alpha <= 0) {
        this.sparkles.splice(i, 1);
      } else {
        this.drawSparkle(s);
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  // Celebration Fireworks / Confetti Blast
  celebrate(intensity = 'medium') {
    if (typeof confetti === 'function') {
      const count = intensity === 'high' ? 120 : 60;
      confetti({
        particleCount: count,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#be123c', '#fbbf24', '#f43f5e', '#ffffff']
      });

      if (intensity === 'high') {
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#f59e0b', '#fbbf24', '#be123c']
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#f59e0b', '#fbbf24', '#be123c']
          });
        }, 250);
      }
    }
  }
}

window.festiveEffects = new FestiveEffects();
