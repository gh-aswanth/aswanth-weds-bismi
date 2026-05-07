<template>
  <section id="dating" ref="section">
    <div class="dating-header">
      <div class="moments-bg">
        <div class="parallax-text reveal" :style="{ transform: `translateY(${scrollProgress * 100}px)` }">
          CHRONICLES
        </div>
      </div>
      <div class="header-content reveal">
        <div class="tag">Chapter 3</div>
        <h2 class="title">The <span class="script">Moments</span> Between</h2>
        <p class="intro">A walk through our beautiful journey</p>
      </div>
    </div>

    <div class="moments-flow">
      <div v-for="(card, i) in enrichedCards" :key="i" 
           class="moment-pill reveal"
           :class="[`delay-${(i % 4) + 1}`]">
        
        <div class="pill-content">
          <div class="pill-icon">
            <svg viewBox="0 0 24 24">
              <path :d="getIconPath(card.icon)" fill="currentColor" />
            </svg>
          </div>
          <div class="pill-text">
            <span class="pill-date">{{ card.date }}</span>
            <h3 class="pill-title">{{ card.title }}</h3>
          </div>
        </div>
        
        <div class="pill-glow"></div>
      </div>
    </div>

    <div class="dating-footer reveal">
      <div class="footer-bg-text">FOREVER</div>
      <div class="footer-content">
        <h3 class="footer-title">And so it <span class="script">Begins</span></h3>
        <p>Every small moment led us to the big one.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useReveal } from '../composables/useReveal';

const section = ref(null);
const scrollProgress = ref(0);

const enrichedCards = [
  { 
    icon: 'walk', 
    date: 'Summer 2022',
    title: 'Long Walk Together', 
    desc: 'The city lights seemed brighter when I was walking next to you. Those hours felt like minutes.',
    location: 'Marine Drive',
    mood: 'Nostalgic'
  },
  { 
    icon: 'coffee', 
    date: 'Autumn 2022',
    title: 'Cafe Talk', 
    desc: 'Over cold coffee and warm smiles, we discovered that our souls spoke the same language.',
    location: 'Hidden Gem Cafe',
    mood: 'Intimate'
  },
  { 
    icon: 'bike', 
    date: 'Winter 2023',
    title: 'Bike Ride', 
    desc: 'The wind in our hair and the horizon ahead. That was the moment I knew I wanted you by my side forever.',
    location: 'Hill Top Road',
    mood: 'Adventurous'
  },
  { 
    icon: 'camera', 
    date: 'Spring 2023',
    title: 'Snapshots', 
    desc: 'Movies were just an excuse to be close. Your laughter was always better than the script.',
    location: 'Grand Cinema',
    mood: 'Joyful'
  }
];

const getIconPath = (name) => {
  const icons = {
    walk: 'M13.5 18a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14h-1v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-7l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.5-2.5a1 1 0 0 1 1.414 0L9.5 9.5V13h1V9.5l2.293-2.293a1 1 0 0 1 1.414 1.414L13 9.879V18z M9.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z',
    coffee: 'M4 14.5a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 2.5-2.5V8h-12v6.5z M16 8h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1V8z M3 3h14v2H3V3z',
    bike: 'M5 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM9.5 13h1.5l1.5-3H8l1.5 3zM10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z',
    movie: 'M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2 0v10h12V5H4zm1 2h2v2H5V7zm0 4h2v2H5v-2zm8-4h2v2h-2V7zm0 4h2v2h-2v-2z',
    food: 'M11 2s-1 2-1 5a4 4 0 0 0 8 0c0-3-1-5-1-5l-3 2-3-2zM4 2v16h2V2H4zm4 0v10h2V2H8zm0 13h2v3H8v-3z',
    ring: 'M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM10 2l-2 3h4l-2-3z',
    camera: 'M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z',
    star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  };
  return icons[name] || '';
};

const handleScroll = () => {
  if (!section.value) return;
  const rect = section.value.getBoundingClientRect();
  const scrollOffset = window.innerHeight - rect.top;
  const totalHeight = rect.height + window.innerHeight;
  scrollProgress.value = Math.min(Math.max(scrollOffset / totalHeight, 0), 1);
};

onMounted(() => {
  useReveal('#dating');
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
#dating {
  background: #060608;
  padding: 120px 5vw;
  overflow: hidden;
  position: relative;
}

.dating-header {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 80px;
}

.moments-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.03;
  pointer-events: none;
}

.parallax-text {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: 25vw;
  color: #fff;
  letter-spacing: -0.05em;
  will-change: transform;
}

.header-content .tag {
  color: var(--gold);
  font-family: 'Tenor Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 11px;
  margin-bottom: 24px;
}

.header-content .title {
  font-family: 'Cormorant Display', serif;
  font-size: clamp(50px, 10vw, 130px);
  color: #fff;
  line-height: 0.85;
  margin-bottom: 24px;
}

.header-content .intro {
  font-family: 'Tenor Sans', serif;
  font-size: 13px;
  color: var(--pearl);
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Modern Pill Flow Styles */
.moments-flow {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  position: relative;
}

.moment-pill {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 12px 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.moment-pill:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--gold);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.pill-content {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 2;
}

.pill-icon {
  width: 44px;
  height: 44px;
  background: rgba(212, 180, 131, 0.1);
  color: var(--gold-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.pill-icon svg {
  width: 22px;
  height: 22px;
}

.moment-pill:hover .pill-icon {
  background: var(--gold);
  color: #000;
  transform: rotate(360deg);
}

.pill-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.pill-date {
  font-family: 'Tenor Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 4px;
  opacity: 0.7;
}

.pill-title {
  font-family: 'Cormorant Display', serif;
  font-size: 18px;
  color: #fff;
  white-space: nowrap;
}

.pill-glow {
  position: absolute;
  inset: -1px;
  border-radius: 100px;
  background: linear-gradient(45deg, transparent, rgba(212, 180, 131, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.moment-pill:hover .pill-glow {
  opacity: 1;
}

/* Footer Section */
.dating-footer {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  margin-top: 50px;
}

.footer-bg-text {
  position: absolute;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 18vw;
  font-weight: 800;
  color: #fff;
  opacity: 0.02;
  letter-spacing: 0.1em;
}

.footer-content {
  position: relative;
  z-index: 2;
}

.footer-title {
  font-family: 'Cormorant Display', serif;
  font-size: clamp(36px, 6vw, 80px);
  color: #fff;
  margin-bottom: 20px;
  line-height: 1;
}

.footer-content p {
  font-family: 'Tenor Sans', sans-serif;
  font-size: 14px;
  color: var(--pearl);
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

@media (max-width: 768px) {
  .moments-flow {
    flex-direction: column;
    align-items: stretch;
    padding: 0 10px;
  }
  .header-content .title {
    font-size: 60px;
  }
  .moment-pill {
    width: 100%;
  }
}
</style>
