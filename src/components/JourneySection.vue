<template>
  <section id="journey">
    <div class="wrap">
      <div class="tag reveal">Chapter 5 · The Timeline</div>
      <h2 class="title reveal delay1">Every step bringing us closer</h2>
      
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
              
              <!-- Integrated QR Section for the wedding day -->
              <div v-if="item.when === 'June 14'" class="wedding-details-expand">
                <div class="venue-brief">
                  <div class="v-line"></div>
                  <span>Muhurtham: 12:00 PM - 12:30 PM</span>
                </div>
                
                <div class="location-chips">
                  <div class="chip">
                    <img src="/qr_wedding.png" alt="Wedding QR" />
                    <div class="chip-text">
                      <span class="c-label">Wedding</span>
                      <span class="c-val">SR Auditorium</span>
                    </div>
                  </div>
                  <div class="chip">
                    <img src="/qr_reception.png" alt="Reception QR" />
                    <div class="chip-text">
                      <span class="c-label">Reception</span>
                      <span class="c-val">Resort Venue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Central vertical track -->
        <div class="timeline-track">
          <div class="track-progress"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useReveal } from '../composables/useReveal';

const timeline = [
  { when: 'Jan 25', title: 'The Match & Call', desc: 'Request sent, accepted, and our first call — all on Matrimony. The beginning of Us.' },
  { when: 'Feb 8', title: 'First Date', desc: 'The day we finally met in person. A day to remember forever.' },
  { when: 'April', title: 'The Proposal', desc: 'Two months later, he asked and she said yes. A promise for forever.' },
  { when: 'Months of Love', title: 'Movies & Memories', desc: 'Watching movies together, sharing thoughts, and growing closer every day.' },
  { when: 'June 14', title: 'The Wedding Day 💍', desc: 'Muhurtham 12:00–12:30 PM at <strong>SR Auditorium</strong>. Reception same evening 4:00 PM.' }
];

onMounted(() => {
  useReveal('#journey');
});
</script>

<style scoped>
#journey {
  background: #060608;
  padding: 150px 0;
  position: relative;
}

.architectural-timeline {
  max-width: 1000px;
  margin: 100px auto 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
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
  gap: 120px;
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
  background: #060608;
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
  padding: 40px;
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
  font-size: 28px;
  color: var(--gold-light);
}

.card-inner p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--pearl);
  opacity: 0.8;
  line-height: 1.6;
}

.wedding-details-expand {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(212, 180, 131, 0.1);
}

.venue-brief {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  font-family: 'Tenor Sans', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--gold);
}

.v-line {
  width: 30px;
  height: 1px;
  background: var(--gold);
}

.location-chips {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.chip {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.03);
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid rgba(212, 180, 131, 0.1);
}

.chip img {
  width: 45px;
  height: 45px;
  background: white;
  padding: 3px;
  border-radius: 2px;
  object-fit: contain;
}

.chip-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.c-label {
  font-family: 'Tenor Sans', sans-serif;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--gold);
  opacity: 0.6;
}

.c-val {
  font-family: 'Cormorant Display', serif;
  font-size: 15px;
  color: var(--pearl);
}

@media (max-width: 600px) {
  .location-chips {
    flex-direction: column;
  }
}
</style>
