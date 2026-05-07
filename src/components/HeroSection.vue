<template>
  <section id="hero">
    <!-- Refined Minimalist Background -->
    <div class="hero-bg-refinement">
      <div class="bg-vignette"></div>
      <div class="bg-pattern"></div>
      <div class="glow-point"></div>
    </div>

    <div class="hero-content">
      <div class="hero-top-meta" :class="{ 'show': isMounted }">
        <span class="save-the-date">Save The Date</span>
        <div class="decorative-line"></div>
        <span class="wedding-date">June 14, 2026</span>
      </div>

      <div class="hero-main-title">
        <div class="name-box" :class="{ 'show': showFirst }">
          <h1 class="hero-name">Aswanth</h1>
        </div>
        
        <div class="amp-box" :class="{ 'show': showAmp }">
          <span class="hero-amp-elegant">&amp;</span>
        </div>

        <div class="name-box" :class="{ 'show': showSecond }">
          <h1 class="hero-name">Dr. Bismi K</h1>
        </div>
      </div>

      <div class="hero-location-wrap" :class="{ 'show': isMounted }">
        <p class="location-text">SR Auditorium, Kollam</p>
      </div>

      <div class="hero-countdown-minimal" :class="{ 'show': isMounted }">
        <div v-for="(val, unit) in countdownDisplay" :key="unit" class="minimal-cd-item">
          <span class="minimal-cd-val">{{ val }}</span>
          <span class="minimal-cd-unit">{{ unit }}</span>
        </div>
      </div>
      
      <div class="hero-scroll-invite" :class="{ 'show': isMounted }">
        <span class="scroll-label">Begin the Journey</span>
        <div class="scroll-arrow"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue';

const isMounted = ref(false);
const showFirst = ref(false);
const showAmp = ref(false);
const showSecond = ref(false);

const countdown = reactive({
  d: 0, h: 0, m: 0, s: 0
});

const countdownDisplay = computed(() => ({
  Days: String(countdown.d).padStart(2, '0'),
  Hours: String(countdown.h).padStart(2, '0'),
  Min: String(countdown.m).padStart(2, '0'),
  Sec: String(countdown.s).padStart(2, '0')
}));

const tick = () => {
  const now = new Date();
  let target = new Date(2026, 5, 14, 12, 0, 0);
  let diff = Math.max(0, target - now);
  
  countdown.d = Math.floor(diff / 86400000);
  diff %= 86400000;
  countdown.h = Math.floor(diff / 3600000);
  diff %= 3600000;
  countdown.m = Math.floor(diff / 60000);
  diff %= 60000;
  countdown.s = Math.floor(diff / 1000);
};

let timer;

onMounted(() => {
  isMounted.value = true;
  setTimeout(() => showFirst.value = true, 800);
  setTimeout(() => showAmp.value = true, 1400);
  setTimeout(() => showSecond.value = true, 2000);

  tick();
  timer = setInterval(tick, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
#hero {
  min-height: 100vh;
  position: relative;
  background: #080808;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg-refinement {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.bg-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(197, 163, 88, 0.05) 0%, transparent 70%);
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
}

.glow-point {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle at center, rgba(197, 163, 88, 0.1) 0%, transparent 60%);
  transform: translate(-50%, -50%);
  filter: blur(100px);
  animation: pulseGlow 10s infinite alternate;
}

@keyframes pulseGlow {
  from { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  to { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
}

/* Top Meta */
.hero-top-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 1s ease-out;
}

.hero-top-meta.show {
  opacity: 1;
  transform: translateY(0);
}

.save-the-date, .wedding-date {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: var(--gold-light);
}

.decorative-line {
  width: 40px;
  height: 1px;
  background: var(--gold);
  opacity: 0.5;
}

/* Main Title */
.hero-main-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.name-box {
  padding: 10px 20px;
}

.hero-name {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(70px, 15vw, 150px);
  background: linear-gradient(180deg, #fff 0%, var(--gold-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  padding: 0.1em 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
}

.name-box.show .hero-name {
  opacity: 1;
  transform: translateY(0);
}

.amp-box {
  margin: -0.2em 0;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.amp-box.show {
  opacity: 1;
  transform: scale(1);
}

.hero-amp-elegant {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(40px, 8vw, 80px);
  color: var(--gold);
  opacity: 0.8;
}

/* Location */
.hero-location-wrap {
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out 2.5s;
}

.hero-location-wrap.show {
  opacity: 1;
  transform: translateY(0);
}

.location-text {
  font-family: 'Cinzel', serif;
  font-size: clamp(14px, 2vw, 18px);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.9;
}

/* Countdown Minimal */
.hero-countdown-minimal {
  display: flex;
  gap: 40px;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out 2.8s;
}

.hero-countdown-minimal.show {
  opacity: 1;
  transform: translateY(0);
}

.minimal-cd-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.minimal-cd-val {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 36px;
  font-weight: 200;
  color: #fff;
}

.minimal-cd-unit {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 4px;
}

/* Scroll Invite */
.hero-scroll-invite {
  opacity: 0;
  transition: all 1s ease-out 3.5s;
}

.hero-scroll-invite.show {
  opacity: 1;
}

.scroll-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--gold-light);
  opacity: 0.6;
}

.scroll-arrow {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  margin: 15px auto 0;
  position: relative;
  overflow: hidden;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  animation: scrollLine 2s infinite;
}

@keyframes scrollLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .hero-content {
    padding: 20px;
  }
  .hero-top-meta {
    margin-bottom: 40px;
    gap: 10px;
  }
  .save-the-date, .wedding-date {
    font-size: 9px;
  }
  .decorative-line {
    width: 25px;
  }
  .hero-countdown-minimal {
    gap: 20px;
    margin-bottom: 60px;
  }
  .minimal-cd-val {
    font-size: 28px;
  }
  .hero-name {
    font-size: clamp(50px, 14vw, 100px);
    white-space: nowrap;
  }
}
</style>
