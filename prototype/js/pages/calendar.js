// calendar.js · tab switcher for All / Events / Stories filter
(() => {
  'use strict';

  const tabBar = document.querySelector('[role="tablist"]');
  const grid = document.querySelector('[data-tab-content]');
  if (!tabBar || !grid) return;

  const buttons = tabBar.querySelectorAll('button[data-tab]');
  const cards = grid.querySelectorAll('[data-type]');

  const setTab = (key) => {
    buttons.forEach((b) => b.classList.toggle('active', b.dataset.tab === key));
    cards.forEach((c) => {
      c.style.display = (key === 'all' || c.dataset.type === key) ? '' : 'none';
    });
  };

  buttons.forEach((b) => {
    b.addEventListener('click', () => setTab(b.dataset.tab));
  });
})();
