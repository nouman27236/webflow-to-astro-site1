// Reveals [data-animate] elements as they scroll into view. Siblings sharing
// a [data-animate-stagger] parent reveal in order, offset by that delay.
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
);

document.querySelectorAll('[data-animate-stagger]').forEach((group) => {
  const step = parseInt(group.dataset.animateStagger, 10) || 0;
  const items = group.querySelectorAll('[data-animate]');
  items.forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${i * step}ms`);
  });
});

document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
