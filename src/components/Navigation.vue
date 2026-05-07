<template>
  <nav class="nav">
    <a 
      v-for="(link, i) in links" 
      :key="i" 
      :href="link.href" 
      :class="{ active: activeSection === i }"
      @click.prevent="scrollTo(link.href)"
    ></a>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const links = [
  { href: '#hero' },
  { href: '#match' },
  { href: '#chat' },
  { href: '#dating' },
  { href: '#chapter4' },
  { href: '#journey' },
  { href: '#finale' }
];

const activeSection = ref(0);

const scrollTo = (href) => {
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
};

const updateActive = () => {
  const sections = document.querySelectorAll('section');
  let cur = 0;
  sections.forEach((s, i) => {
    if (s.getBoundingClientRect().top < window.innerHeight / 2) cur = i;
  });
  activeSection.value = cur;
};

onMounted(() => {
  window.addEventListener('scroll', updateActive);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive);
});
</script>

<style scoped>
.nav{position:fixed;right:18px;top:50%;transform:translateY(-50%);z-index:40;display:flex;flex-direction:column;gap:12px}
.nav a{width:8px;height:8px;border-radius:50%;background:rgba(212,180,131,.2);transition:.3s;display:block;border:1px solid rgba(212,180,131,0.4)}
.nav a.active{background:var(--gold);transform:scale(1.5);box-shadow:0 0 10px var(--gold)}
</style>
