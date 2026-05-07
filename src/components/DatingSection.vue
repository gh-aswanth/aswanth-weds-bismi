<template>
  <section id="dating" ref="section">
    <!-- Cinematic Background -->
    <div class="dating-bg">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container">
      <div class="dating-header reveal">
        <div class="tag">Chapter 03</div>
        <h2 class="title">The <span class="italic">Moments</span></h2>
        <p class="subtitle">Capturing the essence of our journey</p>
      </div>

      <div class="moments-grid">
        <div v-for="(card, i) in enrichedCards" :key="i" 
             class="moment-card reveal"
             :class="[`card-${i+1}`, `delay-${(i % 4) + 1}`]">
          
          <div class="card-inner">
            <div class="card-visual">
              <div class="visual-pattern">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 L100 0" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.1" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.05" />
                </svg>
              </div>
              <div class="card-icon">
                <svg viewBox="0 0 24 24">
                  <path :d="getIconPath(card.icon)" fill="currentColor" />
                </svg>
              </div>
              <div class="card-number">0{{ i + 1 }}</div>
            </div>

            <div class="card-content">
              <h3 class="card-title">{{ card.title }}</h3>
              <div class="card-line"></div>
              <p class="card-desc">{{ card.desc }}</p>
              <div class="card-meta">
                <span class="location">{{ card.location }}</span>
              </div>
            </div>
          </div>
          
          <div class="card-border"></div>
        </div>
      </div>

      <div class="dating-footer reveal delay-2">
        <div class="footer-line"></div>
        <p class="footer-text">EVERY SECOND COUNTS</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useReveal } from '../composables/useReveal';

const section = ref(null);

const enrichedCards = [
  { 
    icon: 'walk', 
    title: 'Long Walk Together', 
    desc: 'The city lights seemed brighter when I was walking next to you.',
    location: 'Marine Drive'
  },
  { 
    icon: 'coffee', 
    title: 'Cafe Talk', 
    desc: 'Over cold coffee and warm smiles, we discovered our souls.',
    location: 'Hidden Gem'
  },
  { 
    icon: 'bike', 
    title: 'Bike Ride', 
    desc: 'The wind in our hair and the horizon ahead of us.',
    location: 'Hill Top Road'
  },
  { 
    icon: 'camera', 
    title: 'Snapshots', 
    desc: 'Captured memories that will last a lifetime in our hearts.',
    location: 'City Lights'
  }
];

const getIconPath = (name) => {
  const icons = {
    walk: 'M13.5 18a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14h-1v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-7l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.5-2.5a1 1 0 0 1 1.414 0L9.5 9.5V13h1V9.5l2.293-2.293a1 1 0 0 1 1.414 1.414L13 9.879V18z M9.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z',
    coffee: 'M4 14.5a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 2.5-2.5V8h-12v6.5z M16 8h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1V8z M3 3h14v2H3V3z',
    bike: 'M5 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM9.5 13h1.5l1.5-3H8l1.5 3zM10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z',
    camera: 'M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z'
  };
  return icons[name] || '';
};

onMounted(() => {
  useReveal('#dating');
});
</script>

<style scoped>
#dating {
  background: #08080a;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
}

/* Background Elements */
.dating-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: var(--gold);
  top: -100px;
  right: -100px;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: var(--rose);
  bottom: 10%;
  left: -50px;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Header */
.dating-header {
  text-align: center;
  margin-bottom: 80px;
}

.tag {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--gold);
  margin-bottom: 20px;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 80px);
  line-height: 1.1;
  margin-bottom: 15px;
}

.subtitle {
  font-family: 'Bellefair', serif;
  font-size: 18px;
  opacity: 0.6;
}

/* Moments Grid - Bento Style */
.moments-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 200px;
  gap: 24px;
}

.moment-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

/* Asymmetric Grid Spanning */
.card-1 { grid-column: span 7; grid-row: span 2; }
.card-2 { grid-column: span 5; grid-row: span 1.5; }
.card-3 { grid-column: span 5; grid-row: span 1.5; margin-top: -100px; }
.card-4 { grid-column: span 7; grid-row: span 1; }

.card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-visual {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.01);
  min-height: 120px;
}

.visual-pattern {
  position: absolute;
  inset: 0;
  color: var(--gold);
}

.card-icon {
  width: 50px;
  height: 50px;
  color: var(--gold-light);
  z-index: 2;
  transition: transform 0.5s ease;
}

.card-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  opacity: 0.3;
  letter-spacing: 0.1em;
}

.card-content {
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  margin-bottom: 12px;
}

.card-line {
  width: 30px;
  height: 2px;
  background: var(--gold);
  margin-bottom: 15px;
  transition: width 0.4s ease;
}

.card-desc {
  font-family: 'Bellefair', serif;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.7;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--gold-light);
}

/* Hover Effects */
.moment-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(212, 180, 131, 0.3);
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.moment-card:hover .card-icon {
  transform: scale(1.1) rotate(10deg);
}

.moment-card:hover .card-line {
  width: 60px;
}

/* Footer */
.dating-footer {
  margin-top: 100px;
  text-align: center;
}

.footer-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  margin: 0 auto 30px;
}

.footer-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.5em;
  opacity: 0.4;
}

/* Mobile Responsive */
@media (max-width: 992px) {
  .moments-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }
  .card-1, .card-2, .card-3, .card-4 {
    grid-column: span 1;
    grid-row: span 1;
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  #dating {
    padding: 60px 0;
  }
  .moments-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 20px;
  }
  .card-inner {
    flex-direction: row;
    align-items: center;
  }
  .card-visual {
    width: 80px;
    min-height: 100%;
    padding: 20px;
  }
  .card-content {
    flex: 1;
    padding: 20px;
    background: transparent;
  }
  .card-title {
    font-size: 20px;
  }
  .card-desc {
    -webkit-line-clamp: 1;
  }
  .card-number {
    display: none;
  }
}
</style>
