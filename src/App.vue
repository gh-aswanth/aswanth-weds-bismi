<template>
  <div class="app-container">
    <BackgroundEffects />
    <Navigation />
    
    <main>
      <HeroSection />
      <MatchSection />
      <ChatSection />
      <DatingSection />
      <EngagementSection />
      <FinaleSection />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import BackgroundEffects from './components/BackgroundEffects.vue';
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';
import MatchSection from './components/MatchSection.vue';
import ChatSection from './components/ChatSection.vue';
import DatingSection from './components/DatingSection.vue';
import EngagementSection from './components/EngagementSection.vue';
import FinaleSection from './components/FinaleSection.vue';

onMounted(() => {
  // Global cursor hover logic that can't be easily scoped in components
  const updateCursorHover = () => {
    document.querySelectorAll('a, button, .cta, .cardx, .venue-card, .hero-name').forEach(el => {
      // Avoid duplicate listeners
      if (el.getAttribute('data-cursor-bound')) return;
      el.setAttribute('data-cursor-bound', 'true');
      
      el.addEventListener('mousemove', (e) => {
        if(el.classList.contains('hero-name')) {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width/2) * 0.2;
          const y = (e.clientY - rect.top - rect.height/2) * 0.2;
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
      el.addEventListener('mouseleave', () => {
        if(el.classList.contains('hero-name')) {
          el.style.transform = `translate3d(0, 0, 0)`;
        }
      });
    });
  };

  // Re-run after components mount or content changes
  setTimeout(updateCursorHover, 1000);
});
</script>

<style>
/* App-level styles if needed */
.app-container {
  position: relative;
}
</style>
