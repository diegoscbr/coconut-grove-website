// app.js · pathway selector + form handlers + mobile drawer
// Vanilla JS, no build step. Phase 1 stakeholder prototype.

(() => {
  'use strict';

  // -----------------------------------------------------------------------
  // Pathway · interactive selector (§8 · C)
  // Click a rung → swap right panel content. Default selection: Race.
  // -----------------------------------------------------------------------

  const RUNGS = {
    discover: {
      name: 'Discover',
      age: 'Age 6–9',
      desc:
        'First time on the water. Optimist dinghies, calm Bay days, learning by playing. The dock becomes a familiar place; sailing becomes a thing you do.',
      meta: ['1× / Week', 'Coach-led', 'Year-round'],
      img: 'linear-gradient(135deg,#4A8FCF 0%,#1A3A8A 70%,#142A66 100%)',
    },
    develop: {
      name: 'Develop',
      age: 'Age 10–13',
      desc:
        'Sailors take ownership of the boat. Tactics, weather, first overnight regattas. The transition from "sailing class" to "I am a sailor."',
      meta: ['2× / Week', 'Coach-led', 'Year-round'],
      img: 'linear-gradient(135deg,#6EA3C5 0%,#2A5179 60%,#1A3A8A 100%)',
    },
    race: {
      name: 'Race',
      age: 'Age 14–18',
      desc:
        'Local and regional racing on 420s and Lasers. The CGSC Race Team competes in 30+ regattas a season — Miami, the Keys, the Bahamas.',
      meta: ['3× / Week', 'Coach-led', 'Year-round'],
      img: 'linear-gradient(135deg,#1A3A8A 0%,#0F2660 60%,#050B22 100%)',
    },
    compete: {
      name: 'Compete',
      age: 'College / National',
      desc:
        'High school sailing, college recruitment, US national championships. Sailors who came up through the Bay carrying CGSC standards into bigger fleets.',
      meta: ['4× / Week', 'Performance group', 'Year-round'],
      img: 'linear-gradient(135deg,#1A3A8A 0%,#0F2660 60%,#142A66 100%)',
    },
    perform: {
      name: 'Perform',
      age: 'Olympic / Pro',
      desc:
        'High Performance Center — international competition, Olympic pathway. Director-led, full-time training for the highest level of the sport.',
      meta: ['Daily', 'Director-led', 'Year-round'],
      img:
        'linear-gradient(135deg,#1A3A8A 0%,#142A66 50%,rgba(255,139,94,0.45) 200%)',
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

    // Default — Race is the visual midpoint and the most populated rung
    renderRung('race');
  }

  // -----------------------------------------------------------------------
  // Inquiry form · §13 · placeholder handler
  // Phase 2 wires this to a real backend with routing + auto-acknowledgement.
  // -----------------------------------------------------------------------

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

  // -----------------------------------------------------------------------
  // Newsletter form · §14 · placeholder handler
  // -----------------------------------------------------------------------

  const newsletterForm = document.querySelector('[data-form-newsletter]');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = newsletterForm.querySelector('button[type="submit"]');
      const input = newsletterForm.querySelector('input[type="email"]');
      if (!button || !input) return;
      const originalText = button.textContent;
      button.textContent = 'On the list ✓';
      button.disabled = true;
      input.value = '';
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 3500);
    });
  }

  // -----------------------------------------------------------------------
  // Mobile drawer · §16
  // -----------------------------------------------------------------------

  const drawer = document.getElementById('mobile-drawer');
  const openBtn = document.querySelector('[data-action="open-drawer"]');
  const closeBtn = document.querySelector('[data-action="close-drawer"]');

  const setDrawer = (open) => {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (openBtn) openBtn.addEventListener('click', () => setDrawer(true));
  if (closeBtn) closeBtn.addEventListener('click', () => setDrawer(false));

  document.querySelectorAll('[data-drawer-link]').forEach((link) => {
    link.addEventListener('click', () => setDrawer(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      setDrawer(false);
    }
  });

  // -----------------------------------------------------------------------
  // Active nav link on scroll
  // -----------------------------------------------------------------------

  const sections = ['programs', 'pathway', 'coaching', 'stories', 'visit'];
  const navLinks = document.querySelectorAll('.topnav-links a[href^="#"]');

  if ('IntersectionObserver' in window && navLinks.length) {
    const byHash = new Map();
    navLinks.forEach((a) => {
      const hash = a.getAttribute('href');
      if (!byHash.has(hash)) byHash.set(hash, []);
      byHash.get(hash).push(a);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          navLinks.forEach((a) => a.classList.remove('active'));
          (byHash.get(id) || []).forEach((a) => a.classList.add('active'));
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
})();
