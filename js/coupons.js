/**
 * ===================================================================
 * 🎟️ PYARI BEHENA - SIBLING PRIVILEGE PASSES & VOUCHERS
 * ===================================================================
 */

class CouponManager {
  constructor() {
    this.container = document.getElementById('couponsGrid');
    this.init();
  }

  init() {
    if (!this.container || typeof CONFIG === 'undefined' || !Array.isArray(CONFIG.coupons)) return;
    this.renderCoupons();
  }

  renderCoupons() {
    this.container.innerHTML = '';
    
    CONFIG.coupons.forEach((coupon, index) => {
      const card = document.createElement('div');
      card.className = "relative group cursor-pointer perspective-1000";
      
      const emoji = coupon.emoji || "🎁";
      const color = coupon.color || "from-rose-500 to-amber-500";
      const title = coupon.title || `Privilege Pass #${index + 1}`;
      const desc = coupon.description || "Sister Special Treat";
      const code = coupon.code || `PASS-${index + 1}`;
      const id = coupon.id || `coupon-${index + 1}`;

      card.innerHTML = `
        <div id="voucher-card-${id}" class="flip-card-inner glass-card p-5 sm:p-6 h-full flex flex-col justify-between border border-amber-200/60 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <!-- Front State (Tap to Reveal) -->
          <div class="flip-card-front flex flex-col items-center text-center justify-between h-full space-y-3.5">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${color} text-white flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform">
              ${emoji}
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                Sister Privilege Pass
              </span>
              <h3 class="text-base font-bold text-zinc-800 mt-1.5 font-heading">${title}</h3>
              <p class="text-xs text-zinc-500 mt-1 leading-relaxed">${desc}</p>
            </div>
            <button onclick="window.couponManager.reveal('${id}')" class="w-full py-2 px-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium text-xs rounded-xl shadow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5">
              <span>✨ Tap to Reveal Pass</span>
            </button>
          </div>

          <!-- Back State (Claim via WhatsApp / Copy Code) -->
          <div class="flip-card-back hidden flex flex-col items-center text-center justify-between h-full space-y-3.5">
            <div class="text-center">
              <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ✅ UNLOCKED & READY
              </span>
              <h4 class="text-sm font-bold text-zinc-800 mt-1.5">${title}</h4>
            </div>

            <!-- Code Box -->
            <div class="w-full p-2.5 bg-amber-50 rounded-xl border border-dashed border-amber-400">
              <div class="text-[10px] text-zinc-500 font-medium">Coupon Code</div>
              <div class="text-sm font-extrabold text-rose-700 font-mono tracking-wider mt-0.5">${code}</div>
            </div>

            <div class="w-full space-y-2">
              <button onclick="window.couponManager.claimViaWhatsApp('${encodeURIComponent(title)}', '${encodeURIComponent(code)}')" class="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow transition-all flex items-center justify-center gap-1.5">
                <span>💬 Claim on WhatsApp</span>
              </button>
              <button onclick="window.couponManager.flipBack('${id}')" class="text-[11px] text-zinc-400 hover:text-zinc-600 underline">
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

    if (window.soundSystem && typeof window.soundSystem.playSparkle === 'function') {
      window.soundSystem.playSparkle();
    }
    if (window.festiveEffects && typeof window.festiveEffects.celebrate === 'function') {
      window.festiveEffects.celebrate('medium');
    }

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
      card.classList.remove('border-emerald-300', 'bg-emerald-50/30');
    }
  }

  claimViaWhatsApp(encodedTitle, encodedCode) {
    if (window.soundSystem && typeof window.soundSystem.playClick === 'function') {
      window.soundSystem.playClick();
    }

    const title = decodeURIComponent(encodedTitle);
    const code = decodeURIComponent(encodedCode);
    const brotherName = CONFIG.brotherName || "Bhai";
    const sisterName = CONFIG.sisterName || "Behena";

    let message = "";
    if (CONFIG.whatsapp && CONFIG.whatsapp.messageTemplate) {
      message = CONFIG.whatsapp.messageTemplate
        .replace(/\{BROTHER_NAME\}/g, brotherName)
        .replace(/\{SISTER_NAME\}/g, sisterName)
        .replace(/\{VOUCHER_TITLE\}/g, title)
        .replace(/\{VOUCHER_CODE\}/g, code);
    } else {
      message = `Hey ${brotherName}! 🌸\nMaine Raksha Bandhan special website par ye voucher claim kiya hai:\n\n🎟️ *${title}*\n🔑 Code: *${code}*\n\nAb jaldi se mera treat/pass redeem karo! 😋❤️`;
    }

    const encodedText = encodeURIComponent(message);
    const phone = (CONFIG.whatsapp && CONFIG.whatsapp.number) ? CONFIG.whatsapp.number.replace(/[^0-9]/g, '') : '';

    let url = '';
    if (phone && phone.length >= 7) {
      url = `https://wa.me/${phone}?text=${encodedText}`;
    } else {
      url = `https://api.whatsapp.com/send?text=${encodedText}`;
    }

    window.open(url, '_blank');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.couponManager = new CouponManager();
});
