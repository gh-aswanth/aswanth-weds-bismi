<template>
  <section id="hero">
    <div class="hero-marquee-container">
      <div class="marquee-line">THE WEDDING OF ASWANTH &amp; DR. BISMI K · JUNE 14, 2026 · THE WEDDING OF ASWANTH &amp; DR. BISMI K · JUNE 14, 2026 ·</div>
      <div class="marquee-line rev">SAVE THE DATE · JUNE 14, 2026 · THE WEDDING OF ASWANTH &amp; DR. BISMI K · SAVE THE DATE · JUNE 14, 2026 ·</div>
      <div class="marquee-line">ASWANTH &amp; DR. BISMI K · JUNE 14, 2026 · THE WEDDING OF ASWANTH &amp; DR. BISMI K · ASWANTH &amp; DR. BISMI K · JUNE 14, 2026 ·</div>
    </div>

    <div class="hero-content">
      <div class="hero-main-title">
        <h1 class="hero-name first" :class="{ show: showFirst }">Aswanth</h1>
        <div class="hero-ampersand-modern" :class="{ show: showAmp }">&amp;</div>
        <h1 class="hero-name second" :class="{ show: showSecond }">Dr. Bismi K</h1>
      </div>
    </div>

    <div class="hero-footer-modern">
      <div class="hero-loc-date-wrap">
        <div class="footer-info-group">
          <p class="h-label">Location</p>
          <p class="h-value">SR Auditorium, Kollam</p>
        </div>
        <div class="footer-separator"></div>
        <div class="footer-info-group">
          <p class="h-label">Date</p>
          <p class="h-value">June 14, 2026</p>
        </div>
      </div>

      <div class="hero-countdown-modern">
        <div class="cd-m-item"><span class="cd-m-num">{{ countdown.d }}</span><span class="cd-m-label">Days</span></div>
        <div class="cd-m-item"><span class="cd-m-num">{{ countdown.h }}</span><span class="cd-m-label">Hours</span></div>
        <div class="cd-m-item"><span class="cd-m-num">{{ countdown.m }}</span><span class="cd-m-label">Min</span></div>
        <div class="cd-m-item"><span class="cd-m-num">{{ countdown.s }}</span><span class="cd-m-label">Sec</span></div>
      </div>
    </div>
    
    <div class="hearts-container" ref="heartsContainer"></div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const showFirst = ref(false);
const showAmp = ref(false);
const showSecond = ref(false);
const heartsContainer = ref(null);

const countdown = reactive({
  d: '00', h: '00', m: '00', s: '00'
});

const tick = () => {
  const now = new Date();
  let target = new Date(now.getFullYear(), 5, 14, 12, 0, 0);
  if (target < now) target = new Date(now.getFullYear() + 1, 5, 14, 12, 0, 0);
  let diff = Math.max(0, target - now);
  
  const d = Math.floor(diff / 86400000); diff -= d * 86400000;
  const h = Math.floor(diff / 3600000); diff -= h * 3600000;
  const m = Math.floor(diff / 60000); diff -= m * 60000;
  const s = Math.floor(diff / 1000);

  countdown.d = String(d).padStart(2, '0');
  countdown.h = String(h).padStart(2, '0');
  countdown.m = String(m).padStart(2, '0');
  countdown.s = String(s).padStart(2, '0');
};

const createHeart = () => {
  if (!heartsContainer.value) return;
  const h = document.createElement('div');
  h.className = 'heart-float';
  h.innerHTML = '♥';
  h.style.left = (10 + Math.random() * 80) + '%';
  h.style.bottom = '10%';
  h.style.fontSize = (16 + Math.random() * 20) + 'px';
  h.style.color = Math.random() > 0.5 ? 'var(--blush)' : 'var(--gold)';
  heartsContainer.value.appendChild(h);
  setTimeout(() => h.remove(), 4000);
};

let timer, heartTimer;

onMounted(() => {
  setTimeout(() => {
    showFirst.value = true;
    setTimeout(() => {
      showAmp.value = true;
      setTimeout(() => {
        showSecond.value = true;
      }, 400);
    }, 600);
  }, 500);

  tick();
  timer = setInterval(tick, 1000);
  heartTimer = setInterval(createHeart, 2000);
});

onUnmounted(() => {
  clearInterval(timer);
  clearInterval(heartTimer);
});
</script>

<style scoped>
#hero {
  background: #080808;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.hero-marquee-container {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0.15;
  pointer-events: none;
}

.marquee-line {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: 15vw;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--gold);
  line-height: 0.9;
  display: flex;
  animation: marquee-scroll 30s linear infinite;
  filter: drop-shadow(0 0 10px rgba(197, 163, 88, 0.2));
}

.marquee-line.rev {
  animation-direction: reverse;
}

@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-main-title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 60px; /* Reduced from 100px */
  gap: 15px; /* Reduced from 20px */
}

.hero-name {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(50px, 15vw, 120px);
  color: var(--gold-light);
  line-height: 0.8;
  letter-spacing: normal;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 2s cubic-bezier(0.19, 1, 0.22, 1), 
              transform 2s cubic-bezier(0.19, 1, 0.22, 1);
  background: linear-gradient(to right, var(--gold-light), #fff, var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-name.show {
  opacity: 1;
  transform: scale(1);
  animation: text-glow 2s ease-in-out infinite alternate;
}

@keyframes text-glow {
  from { text-shadow: 0 0 10px rgba(212, 180, 131, 0.2); }
  to { text-shadow: 0 0 25px rgba(212, 180, 131, 0.6); }
}

.hero-ampersand-modern {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(40px, 10vw, 80px);
  color: var(--gold);
  z-index: 15;
  opacity: 0;
  transform: scale(0);
  transition: all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin: -0.3em 0;
}

.hero-ampersand-modern.show {
  opacity: 1;
  transform: scale(1);
}

.hero-footer-modern {
  position: absolute;
  bottom: 40px; /* Reduced from 60px */
  width: 100%;
  max-width: 1400px;
  padding: 0 40px; /* Reduced from 60px */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 20;
}

.hero-loc-date-wrap {
  display: flex;
  align-items: center;
  gap: 30px;
}

.footer-info-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-separator {
  width: 1px;
  height: 30px;
  background: var(--gold);
  opacity: 0.3;
  transform: scaleY(0);
  animation: growY 1s forwards 2.6s;
}

@keyframes growY {
  to { transform: scaleY(1); }
}

.h-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 1s forwards 2.5s;
}

.h-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(16px, 2vw, 24px);
  color: #fff;
  font-weight: 300;
  font-style: italic;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 1s forwards 2.7s;
}

@keyframes slideUpFade {
  to { opacity: 1; transform: translateY(0); }
}

.hero-countdown-modern {
  display: flex;
  gap: 30px; /* Reduced from 40px */
  opacity: 0;
  animation: fadeIn 2s forwards 3s;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.cd-m-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cd-m-num {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 200;
  font-size: 32px; /* Reduced from 40px */
  color: #fff;
  line-height: 1;
}

.cd-m-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 4px;
}

.hearts-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

:deep(.heart-float) {
  position: absolute;
  color: var(--rose);
  font-size: 20px;
  pointer-events: none;
  animation: floatUp 4s ease-in forwards;
  z-index: 10;
  opacity: 0;
}

@keyframes floatUp {
  0% { transform: translateY(0) rotate(0deg) scale(0); opacity: 0; }
  20% { opacity: 0.8; transform: translateY(-20px) rotate(20deg) scale(1); }
  100% { transform: translateY(-200px) rotate(-20deg) scale(0.5); opacity: 0; }
}

@media (max-width: 768px) {
  .hero-footer-modern {
    flex-direction: column;
    align-items: center;
    bottom: 30px; /* Reduced from 40px */
    gap: 30px; /* Reduced from 40px */
    padding: 0 20px;
  }
  .hero-loc-date-wrap {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
  .footer-separator {
    height: 20px;
  }
  .marquee-line {
    font-size: 15vw;
  }
  .hero-name { font-size: clamp(40px, 12vw, 90px); line-height: 0.9; }
  .hero-ampersand-modern { font-size: clamp(32px, 10vw, 65px); margin: -0.1em 0; }
  .hero-countdown-modern { gap: 15px; }
  .cd-m-num { font-size: 28px; }
}
</style>
