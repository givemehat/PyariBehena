/**
 * ===================================================================
 * 🎟️ PYARI BEHENA - SIBLING LOVE VOUCHERS & COUPON SCRATCH
 * ===================================================================
 */

class CouponManager {
  constructor() {
    this.container = document.getElementById('couponsGrid');
    this.init();
  }

  init() {
    if (!this.container || typeof CONFIG === 'undefined') return;
    this.renderCoupons();
  }

  renderCoupons() {
    this.container.innerHTML = '';
    CONFIG.coupons.forEach((coupon, index) => {
      const card = document.createElement('div');
      card.className = "relative group cursor-pointer perspective-1000";
      card.innerHTML = `
        <div id="voucher-card-${coupon.id}" class="flip-card-inner glass-card p-6 h-full flex flex-col justify-between border border-amber-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <!-- Front State (Scratch / Tap to Reveal) -->
          <div class="flip-card-front flex flex-col items-center text-center justify-between h-full space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr ${coupon.color} text-white flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform">
              ${coupon.emoji}
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Sister Privilege Pass
              </span>
              <h3 class="text-lg font-bold text-zinc-800 mt-2 font-heading">${coupon.title}</h3>
              <p class="text-xs text-zinc-500 mt-1">${coupon.description}</p>
            </div>
            <button onclick="window.couponManager.reveal('${coupon.id}')" class="w-full py-2.5 px-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium text-sm rounded-xl shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
              <span>✨ Tap to Reveal Pass</span>
            </button>
          </div>

          <!-- Back State (Redeemable Code & WhatsApp Claim) -->
          <div class="flip-card-back hidden flex flex-col items-center text-center justify-between h-full space-y-4">
            <div class="text-center">
              <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ✅ UNLOCKED & READY TO CLAIM
              </span>
              <h4 class="text-md font-bold text-zinc-800 mt-2">${coupon.title}</h4>
            </div>

            <!-- Code Box -->
            <div class="w-full p-3 bg-amber-50 rounded-xl border border-dashed border-amber-400">
              <div class="text-xs text-zinc-500 font-medium">Coupon Code</div>
              <div class="text-base font-extrabold text-rose-700 font-mono tracking-wider mt-0.5">${coupon.code}</div>
            </div>

            <div class="w-full space-y-2">
              <button onclick="window.couponManager.claimViaWhatsApp('${coupon.title}', '${coupon.code}')" class="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow transition-all flex items-center justify-center gap-1.5">
                <span>💬 Claim on WhatsApp</span>
              </button>
              <button onclick="window.couponManager.flipBack('${coupon.id}')" class="text-xs text-zinc-400 hover:text-zinc-600 underline">
                Flip Back
              </button>
            </div>
          </div>
        </div>
      `;
      this.container.appendChild(card);
    });
  }

  reveal(couponId) {
    const card = document.getElementById(`voucher-card-${couponId}`);
    if (!card) return;

    if (window.soundSystem) window.soundSystem.playSparkle();
    if (window.festiveEffects) window.festiveEffects.celebrate('medium');

    const front = card.querySelector('.flip-card-front');
    const back = card.querySelector('.flip-card-back');

    if (front && back) {
      front.classList.add('hidden');
      back.classList.remove('hidden');
      card.classList.add('border-emerald-300', 'bg-emerald-50/30');
    }
  }

  flipBack(couponId) {
    const card = document.getElementById(`voucher-card-${couponId}`);
    if (!card) return;
    const front = card.querySelector('.flip-card-front');
    const back = card.querySelector('.flip-card-back');

    if (front && back) {
      back.classList.add('hidden');
      front.classList.remove('hidden');
    }
  }

  claimViaWhatsApp(title, code) {
    if (window.soundSystem) window.soundSystem.playClick();
    const brotherName = CONFIG.brotherName || "Bhai";
    const text = encodeURIComponent(`Hey ${brotherName}! 🌸\nMaine Raksha Bandhan special website par ye voucher unlock kiya hai:\n\n🎟️ *${title}*\n🔑 Code: *${code}*\n\nAb jaldi se mera treat/pass redeem karo! 😋❤️`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.couponManager = new CouponManager();
});
