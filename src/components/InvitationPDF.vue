<template>
  <div class="invitation-pdf-overlay" v-if="isOpen">
    <div class="pdf-modal-backdrop" @click="close"></div>
    <div class="pdf-modal-container">
      <div class="pdf-modal-header">
        <button class="close-btn" @click="close">✕</button>
        <button class="download-btn" @click="downloadPDF" :disabled="isGenerating">
          <span v-if="isGenerating">Generating...</span>
          <span v-else>Download PDF</span>
        </button>
      </div>
      
      <div class="pdf-preview-wrap">
        <div id="invitation-card-pdf" class="invitation-card-content">
          <div class="card-border-outer">
            <div class="card-border-inner">
              <div class="card-body">
                <div class="card-header">
                  <span class="eyebrow">The Wedding of</span>
                  <div class="names-stack">
                    <h1 class="name">Aswanth</h1>
                    <div class="ampersand">&</div>
                    <h1 class="name">Dr. Bismi K</h1>
                  </div>
                </div>
                
                <div class="card-divider"></div>
                
                <div class="card-details">
                  <p class="invite-text">With hearts full of love and joy, we invite you to celebrate the union of our souls as we begin our life together.</p>
                  
                  <div class="info-block">
                    <div class="info-item">
                      <span class="label">Date</span>
                      <span class="value">Sunday, June 14, 2026</span>
                    </div>
                    <div class="info-item">
                      <span class="label">Time</span>
                      <span class="value">11:00 AM Onwards</span>
                    </div>
                    <div class="info-item">
                      <span class="label">Venue</span>
                      <span class="value">SR Auditorium, Kollam</span>
                    </div>
                  </div>
                </div>
                
                <div class="card-footer">
                  <div class="qr-group">
                    <div class="qr-item">
                      <img src="/qr_wedding.png" alt="QR" class="qr-preview" />
                      <span>Wedding Location</span>
                    </div>
                  </div>
                  <div class="signature">Forever Yours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);
const isGenerating = ref(false);

const close = () => {
  emit('close');
};

const downloadPDF = () => {
  isGenerating.value = true;
  const element = document.getElementById('invitation-card-pdf');
  const opt = {
    margin: 0,
    filename: 'Wedding_Invitation_Aswanth_Bismi.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save().then(() => {
    isGenerating.value = false;
  }).catch(err => {
    console.error('PDF Error:', err);
    isGenerating.value = false;
  });
};
</script>

<style scoped>
.invitation-pdf-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pdf-modal-backdrop {
  position: absolute;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(8px);
}

.pdf-modal-container {
  position: relative;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.pdf-modal-header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #111;
  border-radius: 12px 12px 0 0;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.download-btn {
  background: var(--gold);
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: all 0.3s;
}

.download-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.pdf-preview-wrap {
  background: #222;
  padding: 40px 20px;
  overflow-y: auto;
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: center;
}

/* Invitation Card Styles - This will be the PDF */
.invitation-card-content {
  width: 210mm; /* A4 width */
  min-height: 297mm; /* A4 height */
  background: #fff;
  color: #1a1a1a;
  padding: 20mm;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  /* Font override for PDF clarity */
  font-family: 'Bellefair', serif;
}

.card-border-outer {
  border: 1px solid #d4af37;
  padding: 4mm;
  flex: 1;
  display: flex;
}

.card-border-inner {
  border: 4px double #d4af37;
  padding: 15mm;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-body {
  width: 100%;
}

.eyebrow {
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 14px;
  color: #888;
  display: block;
  margin-bottom: 20px;
}

.names-stack {
  margin: 40px 0;
}

.name {
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  font-style: italic;
  margin: 0;
  color: #1a1a1a;
  line-height: 1.1;
  white-space: nowrap;
  padding: 0 10px;
}

.ampersand {
  font-family: 'Bellefair', serif;
  font-size: 40px;
  color: #d4af37;
  margin: 10px 0;
}

.card-divider {
  width: 60px;
  height: 2px;
  background: #d4af37;
  margin: 40px auto;
}

.invite-text {
  font-size: 18px;
  line-height: 1.8;
  max-width: 80%;
  margin: 0 auto 50px;
  color: #444;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  color: #d4af37;
  margin-bottom: 8px;
}

.value {
  font-size: 24px;
  font-weight: 400;
}

.card-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.qr-group {
  display: flex;
  gap: 40px;
}

.qr-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.qr-preview {
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
  padding: 5px;
}

.signature {
  font-family: 'Pinyon Script', cursive;
  font-size: 32px;
  color: #d4af37;
}

/* Scaling for preview */
@media screen and (max-width: 600px) {
  .invitation-card-content {
    transform: scale(0.4);
    transform-origin: top center;
  }
  .pdf-preview-wrap {
    height: 400px;
  }
}

@media screen and (min-width: 601px) {
  .invitation-card-content {
    transform: scale(0.65);
    transform-origin: top center;
  }
}
</style>
