<template>
  <div class="background-effects">
    <div class="noise"></div>
    <div class="progress" :style="{ width: scrollProgress + '%' }"></div>
    
    <div class="petals">
      <div 
        v-for="(p, i) in petalList" 
        :key="i" 
        :class="['petal', p.type]"
        :style="p.style"
      ></div>
    </div>

    <div class="cursor" ref="cursor"></div>
    <div class="cursor-follower" ref="cursorFollower"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollProgress = ref(0);
const cursor = ref(null);
const cursorFollower = ref(null);

const petalList = Array.from({ length: 24 }, (_, i) => {
  const type = ['', 'g', 'r'][i % 3];
  return {
    type,
    style: {
      left: Math.random() * 100 + 'vw',
      animationDuration: (8 + Math.random() * 10) + 's',
      animationDelay: (-Math.random() * 15) + 's',
      width: (8 + Math.random() * 12) + 'px',
      height: (8 + Math.random() * 12) + 'px',
    }
  };
});


const updateScroll = () => {
  const sc = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  if (h > 0) {
    scrollProgress.value = (sc / h * 100);
  }
};

const handleMouseMove = (e) => {
  if (cursor.value && cursorFollower.value) {
    const { clientX, clientY } = e;
    cursor.value.style.transform = `translate3d(${clientX - 10}px, ${clientY - 10}px, 0)`;
    cursorFollower.value.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0)`;
  }
};

const handleMouseDown = () => {
  if (cursor.value) {
    cursor.value.style.transform += ' scale(0.8)';
    cursor.value.style.background = 'rgba(197,163,88,0.2)';
  }
};

const handleMouseUp = () => {
  if (cursor.value) {
    cursor.value.style.transform = cursor.value.style.transform.replace(' scale(0.8)', '');
    cursor.value.style.background = 'none';
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mousedown', handleMouseDown);
  window.removeEventListener('mouseup', handleMouseUp);
});
</script>

<style scoped>
/* Background Grain */
.noise {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 1;
  opacity: 0.04;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Floating stardust */
.petals{position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden}
:deep(.petal){position:absolute;top:-10vh;width:2px;height:2px;border-radius:50%;background:#fff;opacity:.6;animation:fall linear infinite;box-shadow:0 0 10px #fff}
:deep(.petal.g){background:var(--gold);opacity:.5;box-shadow:0 0 10px var(--gold)}
:deep(.petal.r){background:var(--rose-light);opacity:.4;box-shadow:0 0 10px var(--rose-light)}

@keyframes fall{
  0%{transform:translateY(-10vh) translateX(0) scale(1);opacity:0}
  20%{opacity:1}
  100%{transform:translateY(110vh) translateX(50px) scale(0.5);opacity:0}
}

/* Progress bar */
.progress{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--gold),var(--gold-light));z-index:50;transition:width .15s}

/* Custom Cursor */
.cursor {
  width: 20px; height: 20px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.08s ease-out, width 0.3s ease, height 0.3s ease;
  mix-blend-mode: difference;
  will-change: transform;
}
.cursor-follower {
  width: 8px; height: 8px;
  background: var(--gold);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.12s ease-out;
  will-change: transform;
}

:global(a:hover ~ .background-effects .cursor),
:global(button:hover ~ .background-effects .cursor),
:global(.cta:hover ~ .background-effects .cursor),
:global(.cardx:hover ~ .background-effects .cursor),
:global(.venue-card:hover ~ .background-effects .cursor),
:global(.hero-name:hover ~ .background-effects .cursor) {
  width: 60px;
  height: 60px;
  margin-left: -30px;
  margin-top: -30px;
  border-color: var(--gold-light);
  background: rgba(197,163,88,0.1);
}
</style>
