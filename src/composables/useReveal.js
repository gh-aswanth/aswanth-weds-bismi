export function useReveal(selector) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        
        // If it's a section, reveal its internal elements too as a safety
        if (e.target.tagName === 'SECTION') {
          e.target.querySelectorAll('.reveal').forEach(child => child.classList.add('show'));
        }

        // If it's the chat section, we want to trigger the bubble animations
        if (e.target.id === 'chatbox' || e.target.classList.contains('chat')) {
            e.target.classList.add('show');
        }
      }
    });
  }, { threshold: 0.1 });

  const parent = document.querySelector(selector);
  if (parent) {
    // Observe the section itself
    io.observe(parent);
    
    // Also observe key children for staggered reveals
    parent.querySelectorAll('.reveal, .phone, .lede, .eng-card, .chat').forEach(el => io.observe(el));
  }
}
