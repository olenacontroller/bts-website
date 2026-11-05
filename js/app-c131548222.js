
// Robot bubble: hide once the visitor scrolls
window.addEventListener('scroll', function hideBubble() {
  if (window.scrollY < 120) return;
  const b = document.getElementById('aiBuddyBubble');
  if (b && !b.hidden) b.hidden = true;
}, { passive: true });
// Upload buttons: show what was chosen
document.querySelectorAll('.up-input').forEach(inp => inp.addEventListener('change', () => {
  const out = inp.parentElement.querySelector('.up-names');
  const n = inp.files.length;
  out.textContent = n === 1 ? inp.files[0].name : n > 1 ? n + ' ' + (T.up_files[currentLang] || T.up_files.en) : '';
}));
// Quote form: extra fields open on computers, folded on phones
(function () {
  const more = document.getElementById('ftMore');
  if (!more) return;
  const mq = window.matchMedia('(max-width: 768px)');
  const set = () => { if (!mq.matches) more.open = true; };
  set(); mq.addEventListener('change', set);
})();
