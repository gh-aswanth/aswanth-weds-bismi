<template>
  <section id="match">
    <div class="match-bg">
      <div class="m-circle"></div>
      <div class="m-circle rev"></div>
    </div>
    <div class="wrap">
      <div class="tag reveal">Chapter 1 · The Match</div>
      <div class="match-content">
        <h2 class="title reveal delay1">It started with a swipe<br/>on a matrimony app <span class="heart">♥</span></h2>
        <div class="match-card reveal delay2">
          <div class="m-visual">
            <div class="m-app-icon">✨</div>
            <div class="m-line"></div>
          </div>
          <p class="lede">
            A notification on Jan 25 changed everything. 
            A request sent, accepted, and that first heart-pounding call — all in one day. 
            Two strangers, one shared path.
          </p>
        </div>
        <div class="match-quote reveal delay3">
          "The day our world started changing."
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useReveal } from '../composables/useReveal';

onMounted(() => {
  useReveal('#match');
});
</script>

<style scoped>
#match {
  background: #0d0d0f;
  overflow: hidden;
}

.match-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.m-circle {
  position: absolute;
  top: -10%; left: -10%;
  width: 60%; height: 60%;
  background: radial-gradient(circle, rgba(197, 163, 88, 0.05) 0%, transparent 70%);
  filter: blur(80px);
  animation: drift 20s infinite alternate;
}

.m-circle.rev {
  top: auto; left: auto;
  bottom: -10%; right: -10%;
  background: radial-gradient(circle, rgba(216, 27, 96, 0.03) 0%, transparent 70%);
  animation: drift 25s infinite alternate-reverse;
}

@keyframes drift {
  from { transform: translate(0, 0); }
  to { transform: translate(10%, 10%); }
}

.match-content {
  position: relative;
  z-index: 5;
}

.match-card {
  max-width: 600px;
  margin: 40px auto;
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 180, 131, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
}

.m-visual {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.m-app-icon {
  font-size: 32px;
  color: var(--gold);
  text-shadow: 0 0 20px rgba(197, 163, 88, 0.5);
}

.m-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--gold), transparent);
}

.match-quote {
  font-family: 'Pinyon Script', cursive;
  font-size: 38px;
  color: var(--gold-light);
  margin-top: 40px;
  opacity: 0.8;
}
</style>
