
// Hero video: the poster shows at once; the video loads after the page is ready (faster first screen)
window.addEventListener('load', () => setTimeout(() => {
  const v = document.querySelector('.vx-video');
  if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const s = v.querySelector('source[data-src]');
  if (!s) return;
  s.src = window.matchMedia('(max-width: 768px)').matches ? 'img/bts-hero-drone-960.mp4' : s.getAttribute('data-src');
  v.load();
  v.play().catch(() => {});
}, 800));
