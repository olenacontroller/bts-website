
// Anonymous click counts (no cookies, no personal data): button name, page, phone/computer, language
(function () {
  const last = {};
  const once = {};
  window.btsTrack = function (name, onlyOnce) {
    if (typeof sb === 'undefined' || !sb) return;
    const now = Date.now();
    if (onlyOnce && once[name]) return;
    if (last[name] && now - last[name] < 3000) return;
    last[name] = now; once[name] = true;
    const active = document.querySelector('.page-view.active');
    btsInsert('events', {
      name: name,
      page: active ? active.id.replace('page-', '') : null,
      device: window.matchMedia('(max-width: 768px)').matches ? 'phone' : 'computer',
      lang: currentLang === 'pt' ? 'pt' : 'en'
    }).then(() => {}, () => {});
  };
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('tel:')) btsTrack('call');
    else if (href.includes('wa.me/')) btsTrack('whatsapp');
  }, true);
  const PAGE_EVENTS = { resolve: 'resolve_open', services: 'homecare_open', careers: 'careers_open' };
  const origShowPage = showPage;
  showPage = function (page, scrollTo) {
    if (PAGE_EVENTS[page]) btsTrack(PAGE_EVENTS[page]);
    if (scrollTo === 'contact') btsTrack('quote_open');
    if (scrollTo === 'calculator') btsTrack('calc_open');
    return origShowPage(page, scrollTo);
  };
  const origApplyFor = applyFor;
  applyFor = function (position) { btsTrack('job_apply'); return origApplyFor(position); };
  const origAiToggle = aiToggle;
  aiToggle = function (open) { if (open) btsTrack('ai_open'); return origAiToggle(open); };
  btsTrack('visit', true);
  const startPage = (document.querySelector('.page-view.active') || {}).id;
  if (startPage && PAGE_EVENTS[startPage.replace('page-', '')]) btsTrack(PAGE_EVENTS[startPage.replace('page-', '')]);
  const pg = document.querySelector('.pg-grid');
  if (pg) pg.addEventListener('scroll', () => btsTrack('gallery_swipe', true), { passive: true });
})();
