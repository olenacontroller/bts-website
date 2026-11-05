
// Footer groups fold on phones: tap the heading to open
document.querySelectorAll('.footer-grid > div:not(.footer-brand) > h3').forEach(h => {
  // a real button inside the heading (a heading itself must not act as a button)
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'foot-toggle';
  while (h.firstChild) b.appendChild(h.firstChild);
  if (h.hasAttribute('data-i18n')) { b.setAttribute('data-i18n', h.getAttribute('data-i18n')); h.removeAttribute('data-i18n'); }
  b.setAttribute('aria-expanded', 'false');
  h.appendChild(b);
  b.addEventListener('click', () => {
    if (!window.matchMedia('(max-width: 768px)').matches) return;
    const open = h.parentElement.classList.toggle('open');
    b.setAttribute('aria-expanded', String(open));
  });
});
