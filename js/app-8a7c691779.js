
// "Cost in 30 seconds" opens the calculator in a pop-up over the current page
let calcHome = null;
function openCalcModal() {
  const sec = document.getElementById('calculator');
  const modal = document.getElementById('calcModal');
  if (!sec || !modal || !modal.hidden) return;
  calcHome = document.createComment('calculator');
  sec.parentNode.insertBefore(calcHome, sec);
  document.getElementById('calcModalBody').appendChild(sec);
  modal.hidden = false;
  document.body.classList.add('calc-open');
  modal.querySelector('.calc-modal-x').focus({ preventScroll: true });
  if (window.btsTrack) btsTrack('calc_open');
}
function closeCalcModal() {
  const modal = document.getElementById('calcModal');
  if (!modal || modal.hidden) return;
  const sec = document.getElementById('calculator');
  if (calcHome && sec) { calcHome.parentNode.insertBefore(sec, calcHome); calcHome.remove(); calcHome = null; }
  modal.hidden = true;
  document.body.classList.remove('calc-open');
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href="#calculator"]');
  if (!a) return;
  e.preventDefault();
  e.stopPropagation();
  openCalcModal();
}, true);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCalcModal(); });
