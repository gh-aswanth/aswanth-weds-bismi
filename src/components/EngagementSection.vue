<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const showFirst = ref(false);
const showAmp = ref(false);
const showSecond = ref(false);
const heartsContainer = ref(null);
const sectionRef = ref(null);

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

let heartTimer;

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        showFirst.value = true;
        setTimeout(() => {
          showAmp.value = true;
          setTimeout(() => {
            showSecond.value = true;
          }, 400);
        }, 600);
      }, 500);
      
      if (!heartTimer) {
        heartTimer = setInterval(createHeart, 2000);
      }
    }
  }, { threshold: 0.2 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  clearInterval(heartTimer);
});
</script>

<template>
  <section id="chapter4" ref="sectionRef">
    <div class="eng-marquee-container">
      <div class="marquee-line">THE ENGAGEMENT · MARCH 15, 2026 · THE ENGAGEMENT ·</div>
      <div class="marquee-line rev">SAVE THE DATE · MARCH 15, 2026 · SAVE THE DATE ·</div>
      <div class="marquee-line">THE ENGAGEMENT · MARCH 15, 2026 · THE ENGAGEMENT ·</div>
    </div>

    <div class="eng-content">
      <div class="section-tag reveal">Chapter 4</div>
      <div class="eng-main-title">
        <h2 class="eng-name first" :class="{ show: showFirst }">Engagement</h2>
        <div class="eng-ampersand-modern" :class="{ show: showAmp }">&amp;</div>
        <h2 class="eng-name second" :class="{ show: showSecond }">Day</h2>
      </div>
    </div>

    <div class="eng-footer-modern">
      <div class="eng-loc-date-wrap">
        <div class="footer-info-group">
          <p class="e-label">Date</p>
          <p class="e-value">March 15, 2026</p>
        </div>
      </div>

      <div class="eng-status-reveal">
        <span class="status-tag-modern">She said Yes!</span>
      </div>
    </div>
    
    <div class="hearts-container" ref="heartsContainer"></div>
  </section>
</template>

<style scoped>
#chapter4 {
  background: #080808;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

#chapter4::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
  pointer-events: none;
}

.eng-marquee-container {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0.08;
  pointer-events: none;
}

.marquee-line {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: 12vw;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px var(--gold);
  line-height: 1;
  display: flex;
  animation: marquee-scroll 40s linear infinite;
}

.marquee-line.rev {
  animation-direction: reverse;
}

@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.eng-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-tag {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px; /* Reduced from 12px */
  letter-spacing: 0.4em; /* Reduced from 0.5em */
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 25px; /* Reduced from 40px */
  opacity: 0.6;
}

.eng-main-title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 60px; /* Reduced from 100px */
  gap: 15px; /* Reduced from 20px */
}

.eng-name {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(60px, 15vw, 120px);
  color: var(--gold-light);
  line-height: 1.1;
  padding: 0.1em 0;
  letter-spacing: normal;
  opacity: 0;
  transform: translateY(30px);
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  background: linear-gradient(to bottom, #fff, var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

.eng-name.show {
  opacity: 1;
  transform: translateY(0);
}


.eng-ampersand-modern {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(40px, 10vw, 80px);
  color: var(--gold);
  z-index: 15;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  margin: -0.2em 0;
}

.eng-ampersand-modern.show {
  opacity: 1;
  transform: scale(1);
}

.eng-footer-modern {
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

.eng-loc-date-wrap {
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

.e-label {
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

.e-value {
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

.status-tag-modern {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(24px, 4vw, 40px);
  color: var(--gold-light);
  opacity: 0;
  animation: fadeIn 2s forwards 3s;
}

@keyframes fadeIn {
  to { opacity: 1; }
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
  .eng-footer-modern {
    flex-direction: column;
    align-items: center;
    bottom: 30px; /* Reduced from 40px */
    gap: 30px; /* Reduced from 40px */
    padding: 0 20px;
  }
  .eng-loc-date-wrap {
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
  .eng-name { font-size: clamp(40px, 12vw, 90px); line-height: 0.9; }
  .eng-ampersand-modern { font-size: clamp(32px, 10vw, 65px); margin: -0.1em 0; }
}
</style>
