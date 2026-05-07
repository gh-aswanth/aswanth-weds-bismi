<template>
  <section id="chat">
    <div class="wrap">
      <div class="tag reveal">Chapter 2 · Connection</div>
      <h2 class="title reveal delay1">A simple "Hi" became forever</h2>
      
      <div class="chat-editorial reveal delay2">
        <div class="phone-frame">
          <div class="phone-header">
            <div class="user-info">
              <div class="avatar">A&B</div>
              <div class="details">
                <span class="name">Aswanth & Dr. Bismi K</span>
                <span class="status">Online · Matrimony Chat</span>
              </div>
            </div>
            <div class="header-actions">
              <span>📞</span>
              <span>📹</span>
            </div>
          </div>
          
          <div class="chat-body" id="chatbox" ref="chatbox">
            <div v-for="(msg, i) in messages" :key="i" :class="['msg-bubble', msg.sender]">
              <div class="bubble-content">{{ msg.text }}</div>
              <span class="time">{{ msg.time }}</span>
            </div>
          </div>

          <div class="phone-footer">
            <div class="input-sim">Type a message...</div>
            <div class="send-icon">✨</div>
          </div>
        </div>

        <div class="romantic-side">
          <div class="romantic-content reveal delay3">
            <div class="floating-icons">
              <span class="rom-icon">💖</span>
              <span class="rom-icon">✨</span>
              <span class="rom-icon">🌹</span>
            </div>
            <h3 class="rom-title">The Spark of Us</h3>
            <p class="rom-text">
              Every message was a heartbeat, every word a promise. 
              What started as a digital greeting blossomed into a lifetime of shared dreams.
            </p>
            <div class="rom-quote">
              "In a sea of people, my eyes will always search for you."
            </div>
          </div>
          <div class="hearts-particles" ref="heartsSide"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useReveal } from '../composables/useReveal';

const chatbox = ref(null);
const heartsSide = ref(null);

const messages = [
  { sender: 'boy', text: "Hi, I'm Aswanth! Saw your profile... 👋", time: "10:00 AM" },
  { sender: 'girl', text: "Hey Aswanth, I'm Dr. Bismi K. Nice to meet you! 😊", time: "10:05 AM" },
  { sender: 'boy', text: "How is your day going?", time: "10:06 AM" },
  { sender: 'girl', text: "It's going great, thank you for asking!", time: "10:10 AM" },
  { sender: 'boy', text: "I'd love to get to know you better.", time: "10:12 AM" },
  { sender: 'girl', text: "Me too! Let's talk more. ✨", time: "10:15 AM" }
];

const createSideHeart = () => {
  if (!heartsSide.value) return;
  const h = document.createElement('div');
  h.className = 'side-heart';
  h.innerHTML = ['♥', '💖', '✨', '🌸'][Math.floor(Math.random() * 4)];
  h.style.left = (Math.random() * 100) + '%';
  h.style.bottom = '-20px';
  h.style.fontSize = (12 + Math.random() * 15) + 'px';
  h.style.color = Math.random() > 0.5 ? 'var(--gold)' : 'var(--rose-light)';
  h.style.opacity = (0.2 + Math.random() * 0.4);
  heartsSide.value.appendChild(h);
  setTimeout(() => h.remove(), 6000);
};

let sideHeartTimer;

onMounted(() => {
  useReveal('#chat');
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        if (chatbox.value) chatbox.value.classList.add('show');
      }, 1000);
      sideHeartTimer = setInterval(createSideHeart, 800);
    }
  }, { threshold: 0.1 });

  if (chatbox.value) observer.observe(chatbox.value);
});

onUnmounted(() => {
  clearInterval(sideHeartTimer);
});
</script>

<style scoped>
#chat {
  background: radial-gradient(circle at 30% 70%, #121214 0%, #0a0a0c 100%);
  overflow: hidden;
}

.chat-editorial {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 60px;
  align-items: center;
  margin: 50px auto;
  text-align: left;
}

@media (max-width: 900px) {
  .chat-editorial {
    grid-template-columns: 1fr;
    max-width: 420px;
    text-align: center;
  }
}

.phone-frame {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 180, 131, 0.15);
  border-radius: 40px;
  padding: 10px;
  backdrop-filter: blur(20px);
  box-shadow: 0 50px 100px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  height: 650px;
  overflow: hidden;
}

.phone-header {
  padding: 25px 20px 15px;
  border-bottom: 1px solid rgba(212, 180, 131, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  background: var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: var(--midnight);
}

.details {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.details .name {
  font-size: 14px;
  font-weight: 600;
  color: var(--gold-light);
  white-space: nowrap;
}

.details .status {
  font-size: 10px;
  color: var(--gold);
  opacity: 0.7;
}

.header-actions {
  display: flex;
  gap: 15px;
  opacity: 0.6;
}

.chat-body {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Scrollbar styling */
.chat-body::-webkit-scrollbar { width: 3px; }
.chat-body::-webkit-scrollbar-thumb { background: rgba(197, 163, 88, 0.2); }

.msg-bubble {
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 20px;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
}

.chat-body.show .msg-bubble {
  animation: slideInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(20px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.msg-bubble.boy {
  align-self: flex-start;
  background: rgba(197, 163, 88, 0.1);
  border: 1px solid rgba(197, 163, 88, 0.1);
  border-bottom-left-radius: 4px;
  transform-origin: left bottom;
}

.msg-bubble.girl {
  align-self: flex-end;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom-right-radius: 4px;
  transform-origin: right bottom;
}

.bubble-content {
  font-size: 14px;
  line-height: 1.5;
  color: var(--charcoal);
  text-align: left;
}

.time {
  font-size: 9px;
  opacity: 0.4;
  margin-top: 5px;
  display: block;
  text-align: right;
}

.phone-footer {
  padding: 15px 20px 25px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.input-sim {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 12px;
  color: var(--charcoal);
  opacity: 0.4;
  text-align: left;
}

.send-icon {
  font-size: 20px;
  color: var(--gold);
}

.romantic-side {
  position: relative;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
}

.romantic-content {
  position: relative;
  z-index: 5;
}

.floating-icons {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

@media (max-width: 900px) {
  .floating-icons { justify-content: center; }
}

.rom-icon {
  font-size: 24px;
  animation: floatIcon 3s ease-in-out infinite alternate;
}

.rom-icon:nth-child(2) { animation-delay: 0.5s; }
.rom-icon:nth-child(3) { animation-delay: 1s; }

@keyframes floatIcon {
  from { transform: translateY(0); opacity: 0.6; }
  to { transform: translateY(-10px); opacity: 1; }
}

.rom-title {
  font-family: 'Cormorant Display', serif;
  font-size: 42px;
  color: var(--gold-light);
  margin-bottom: 20px;
}

.rom-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-style: italic;
  color: var(--charcoal);
  opacity: 0.8;
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 40px;
}

@media (max-width: 900px) {
  .rom-text { margin-left: auto; margin-right: auto; }
}

.rom-quote {
  font-family: 'Pinyon Script', cursive;
  font-size: 32px;
  color: var(--gold);
}

.hearts-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

:deep(.side-heart) {
  position: absolute;
  animation: driftUp 6s linear forwards;
  opacity: 0;
}

@keyframes driftUp {
  0% { transform: translateY(0) rotate(0deg) scale(0); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translateY(-400px) rotate(45deg) scale(1.5); opacity: 0; }
}

.chat-body.show .msg-bubble:nth-child(1) { animation-delay: 0.3s; }
.chat-body.show .msg-bubble:nth-child(2) { animation-delay: 1.5s; }
.chat-body.show .msg-bubble:nth-child(3) { animation-delay: 2.7s; }
.chat-body.show .msg-bubble:nth-child(4) { animation-delay: 3.9s; }
.chat-body.show .msg-bubble:nth-child(5) { animation-delay: 5.1s; }
.chat-body.show .msg-bubble:nth-child(6) { animation-delay: 6.3s; }
</style>
