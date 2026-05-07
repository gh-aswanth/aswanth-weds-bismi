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
        <div class="tag">Chapter 03 · The Timeline</div>
        <h2 class="title">Every step bringing us <span class="italic">closer</span></h2>
        <p class="subtitle">Capturing the essence of our journey</p>
      </div>

      <div class="architectural-timeline">
        <div 
          v-for="(item, i) in timeline" 
          :key="i" 
          class="timeline-node reveal"
          :class="{ 'node-left': i % 2 === 0, 'node-right': i % 2 !== 0 }"
        >
          <div class="node-meta">
            <span class="node-date">{{ item.when }}</span>
            <div class="node-line"></div>
          </div>
          
          <div class="node-card">
            <div class="card-inner">
              <div class="card-header">
                <span class="step-num">{{ String(i + 1).padStart(2, '0') }}</span>
                <h4>{{ item.title }}</h4>
              </div>
              <p v-html="item.desc"></p>
            </div>
          </div>
        </div>
        
        <!-- Central vertical track -->
        <div class="timeline-track">
          <div class="track-progress"></div>
        </div>
      </div>

      <div class="dating-footer reveal delay-2">
        <div class="footer-line"></div>
        <p class="footer-text">OUR STORY CONTINUES</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useReveal } from '../composables/useReveal';

const section = ref(null);

const timeline = [
  { when: 'Jan 25', title: 'The Match & Call', desc: 'Request sent, accepted, and our first call — all on Matrimony. The beginning of Us.' },
  { when: 'Feb 8', title: 'First Date', desc: 'The day we finally met in person. A day to remember forever.' },
  { when: 'Months of Love', title: 'Movies & Memories', desc: 'Watching movies together, sharing thoughts, and growing closer every day.' },
  { when: 'April', title: 'The Proposal', desc: 'Two months later, he asked and she said yes. A promise for forever.' }
];

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

.italic {
  font-style: italic;
}

/* Timeline Layout */
.architectural-timeline {
  max-width: 900px;
  margin: 60px auto 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.timeline-track {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(212, 180, 131, 0.1);
  transform: translateX(-50%);
}

@media (max-width: 800px) {
  .timeline-track { left: 30px; }
}

.timeline-node {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
  position: relative;
  z-index: 2;
}

@media (max-width: 800px) {
  .timeline-node {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-left: 70px;
  }
}

.node-left { text-align: right; }
.node-right { text-align: left; }

.node-right {
  grid-template-areas: "empty card";
}
.node-left {
  grid-template-areas: "card empty";
}

.node-meta {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

@media (max-width: 800px) {
  .node-meta {
    left: 30px;
    align-items: flex-start;
  }
}

.node-date {
  font-family: 'Tenor Sans', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: var(--gold);
  background: #08080a;
  padding: 5px 15px;
  border: 1px solid rgba(212, 180, 131, 0.2);
  white-space: nowrap;
}

.node-line {
  width: 1px;
  height: 40px;
  background: var(--gold);
  opacity: 0.3;
}

.node-card {
  grid-area: card;
  perspective: 1000px;
}

.card-inner {
  background: rgba(255, 255, 255, 0.02);
  padding: 25px;
  border: 1px solid rgba(212, 180, 131, 0.05);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
}

.node-card:hover .card-inner {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(212, 180, 131, 0.3);
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.node-left .card-header { flex-direction: row-reverse; }

.step-num {
  font-family: 'Tenor Sans', sans-serif;
  font-size: 14px;
  color: var(--gold);
  opacity: 0.3;
}

.card-header h4 {
  font-family: 'Cormorant Display', serif;
  font-size: 22px;
  color: var(--gold-light);
}

.card-inner p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--pearl);
  opacity: 0.8;
  line-height: 1.5;
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
</style>
