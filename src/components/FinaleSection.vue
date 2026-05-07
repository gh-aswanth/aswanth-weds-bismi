<template>
  <section id="finale">
    <div class="wrap">
      <div class="tag reveal">The Final Chapter</div>
      
      <div class="finale-cinematic">
        <h2 class="title reveal delay1">
          <span class="script-large">Forever</span>
          <span class="date-hero">June 14, 2026</span>
        </h2>
        
        <div class="editorial-line reveal delay2"></div>
        
        <p class="closing-statement reveal delay2">
          Two souls, one heart, a lifetime of stories yet to be told. 
          We are honored to have you witness our beginning.
        </p>

        <div class="interactive-qr-section reveal delay3">
          <div class="qr-container">
            <div class="qr-label-wrap">
              <span class="qr-main-label">Locate the Celebration</span>
              <div class="qr-dash"></div>
            </div>
            
            <div class="qr-grid">
              <div class="qr-card">
                <div class="qr-image-wrap">
                  <img src="/qr_wedding.png" alt="Wedding Location" class="qr-image" />
                </div>
                <div class="qr-info">
                  <span class="qr-type">Wedding</span>
                  <span class="qr-action">Scan for Map</span>
                </div>
              </div>

              <div class="qr-card">
                <div class="qr-image-wrap">
                  <img src="/qr_reception.png" alt="Reception Location" class="qr-image" />
                </div>
                <div class="qr-info">
                  <span class="qr-type">Reception</span>
                  <span class="qr-action">Scan for Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="finale-signature reveal delay4">
          <div class="signature-box">
            <div class="sig-line"></div>
            <div class="sig-content">
              <span class="sig-text">Together Forever</span>
              <div class="sig-names">
                <span class="name-main">Aswanth</span>
                <span class="name-sep">&</span>
                <span class="name-main">Dr. Bismi K</span>
              </div>
            </div>
            <div class="sig-line"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useReveal } from '../composables/useReveal';

onMounted(() => {
  useReveal('#finale');
});
</script>

<style scoped>
#finale {
  background: #050505;
  padding: 180px 0 120px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

#finale::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(197, 163, 88, 0.05) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.finale-cinematic {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.script-large {
  font-family: 'Pinyon Script', cursive;
  font-size: clamp(80px, 18vw, 180px);
  color: var(--gold);
  display: block;
  line-height: 0.8;
  margin-bottom: 15px;
  text-shadow: 0 0 30px rgba(197, 163, 88, 0.2);
}

.date-hero {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 12px;
  color: var(--gold-light);
  opacity: 0.6;
}

.editorial-line {
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, transparent, var(--gold), transparent);
  margin: 60px auto;
  opacity: 0.5;
}

.closing-statement {
  font-family: 'Bellefair', serif;
  font-size: 22px;
  color: var(--pearl);
  opacity: 0.8;
  max-width: 550px;
  margin: 0 auto 100px;
  line-height: 1.8;
  letter-spacing: 1px;
}

/* QR Redesign */
.qr-container {
  margin-bottom: 150px;
}

.qr-label-wrap {
  margin-bottom: 50px;
}

.qr-main-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--gold);
  opacity: 0.7;
}

.qr-dash {
  width: 30px;
  height: 1px;
  background: var(--gold);
  margin: 15px auto;
  opacity: 0.3;
}

.qr-grid {
  display: flex;
  justify-content: center;
  gap: 60px;
}

.qr-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: transform 0.4s ease;
}

.qr-card:hover {
  transform: translateY(-10px);
}

.qr-image-wrap {
  width: 140px;
  height: 140px;
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  position: relative;
}

.qr-image-wrap::after {
  content: '';
  position: absolute;
  inset: -2px;
  border: 1px solid rgba(197, 163, 88, 0.3);
  border-radius: 10px;
  pointer-events: none;
}

.qr-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.qr-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.qr-type {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: var(--gold-light);
  font-style: italic;
}

.qr-action {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--pearl);
  opacity: 0.4;
}

/* Signature Redesign */
.signature-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.sig-line {
  width: 40px;
  height: 1px;
  background: var(--gold);
  opacity: 0.2;
}

.sig-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sig-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: var(--gold);
  opacity: 0.5;
}

.sig-names {
  display: flex;
  align-items: center;
  gap: 25px;
}

.name-main {
  font-family: 'Pinyon Script', cursive;
  font-size: 70px;
  color: var(--gold-light);
  background: linear-gradient(to right, var(--gold-light), #fff, var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.name-sep {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--gold);
  opacity: 0.3;
}

@media (max-width: 768px) {
  .qr-grid {
    flex-direction: column;
    gap: 40px;
  }
  
  .name-main { font-size: 55px; }
  .sig-names { gap: 15px; }
  .closing-statement { font-size: 18px; padding: 0 20px; }
}
</style>
