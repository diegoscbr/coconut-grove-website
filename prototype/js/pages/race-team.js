// race-team.js · pathway selector + inquiry form handler
// Lifted from v1 app.js. Lives on /programs/race-team because the
// Pathway visualization moved off Home in the new IA.

(() => {
  'use strict';

  // ---------- Pathway · interactive 5-rung selector ----------
  const RUNGS = {
    discover: {
      name: 'Discover',
      age: 'Age 6–9',
      desc: 'First time on the water. Optimist dinghies, calm Bay days, learning by playing. The dock becomes a familiar place; sailing becomes a thing you do.',
      meta: ['1× / Week', 'Coach-led', 'Year-round'],
      img: 'url("/assets/pathway/discover.jpg") center/cover no-repeat #1A3A8A',
    },
    develop: {
      name: 'Develop',
      age: 'Age 10–13',
      desc: 'Sailors take ownership of the boat. Tactics, weather, first overnight regattas. The transition from "sailing class" to "I am a sailor."',
      meta: ['2× / Week', 'Coach-led', 'Year-round'],
      img: 'url("/assets/pathway/develop.jpg") center/cover no-repeat #2A5179',
    },
    race: {
      name: 'Race',
      age: 'Age 14–18',
      desc: 'Local and regional racing on 420s and Lasers. The CGSC Race Team competes in 30+ regattas a season — Miami, the Keys, the Bahamas.',
      meta: ['3× / Week', 'Coach-led', 'Year-round'],
      img: 'url("/assets/pathway/race.jpg") center/cover no-repeat #0F2660',
    },
    compete: {
      name: 'Compete',
      age: 'College / National',
      desc: 'High school sailing, college recruitment, US national championships. Sailors who came up through the Bay carrying CGSC standards into bigger fleets.',
      meta: ['4× / Week', 'Performance group', 'Year-round'],
      img: 'url("/assets/pathway/compete.jpg") center/cover no-repeat #0F2660',
    },
    perform: {
      name: 'Perform',
      age: 'Olympic / Pro · HPC',
      desc: 'High Performance Center — international competition, Olympic pathway. Director-led by Maru Urban, full-time training for the highest level of the sport.',
      meta: ['Daily', 'Director-led', 'Year-round'],
      img: 'url("/assets/pathway/perform.jpg") center/cover no-repeat #142A66',
    },
  };

  const root = document.querySelector('[data-pathway]');
  if (root) {
    const items = root.querySelectorAll('.pathway-item');
    const imgEl = root.querySelector('[data-pathway-img]');
    const nameEl = root.querySelector('[data-pathway-name]');
    const ageEl = root.querySelector('[data-pathway-age]');
    const descEl = root.querySelector('[data-pathway-desc]');
    const metaEl = root.querySelector('[data-pathway-meta]');

    const renderRung = (key) => {
      const data = RUNGS[key];
      if (!data) return;

      items.forEach((btn) => {
        const isActive = btn.dataset.rung === key;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      imgEl.style.background = data.img;
      nameEl.textContent = data.name;
      ageEl.textContent = data.age;
      descEl.textContent = data.desc;

      const panel = imgEl.closest('[role="tabpanel"]');
      if (panel) panel.setAttribute('aria-labelledby', `rung-${key}`);

      metaEl.innerHTML = '';
      data.meta.forEach((m) => {
        const span = document.createElement('span');
        span.textContent = m;
        metaEl.appendChild(span);
      });
    };

    items.forEach((btn) => {
      btn.addEventListener('click', () => renderRung(btn.dataset.rung));
      btn.addEventListener('keydown', (e) => {
        const order = Array.from(items);
        const idx = order.indexOf(btn);
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const next = order[(idx + 1) % order.length];
          next.focus();
          renderRung(next.dataset.rung);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = order[(idx - 1 + order.length) % order.length];
          prev.focus();
          renderRung(prev.dataset.rung);
        }
      });
    });

    // Default — Race is the visual midpoint and most-populated rung
    renderRung('race');
  }

  // ---------- Inquiry form · placeholder no-op ----------
  const inquiryForm = document.querySelector('[data-form-inquiry]');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = inquiryForm.querySelector('button[type="submit"]');
      if (!button) return;
      const original = button.textContent;
      button.textContent = 'Got it — a coach will be in touch ✓';
      button.classList.add('sent');
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.classList.remove('sent');
        button.disabled = false;
        inquiryForm.reset();
      }, 4500);
    });
  }
})();
