// site.js · shared chrome for every page
// Mobile drawer · newsletter form · in-page anchor scrollspy (when applicable)

(() => {
  'use strict';

  // ---------- Mobile drawer ----------
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

  // ---------- Newsletter form · placeholder no-op ----------
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

  // ---------- In-page anchor scrollspy ----------
  // Page-subnav active state for long interior pages (Race Team etc.).
  // Watches anchors declared via [data-scrollspy] on the page-subnav container.
  const scrollspy = document.querySelector('[data-scrollspy]');
  if (scrollspy && 'IntersectionObserver' in window) {
    const links = scrollspy.querySelectorAll('a[href^="#"]');
    const byHash = new Map();
    links.forEach((a) => {
      const hash = a.getAttribute('href');
      if (!byHash.has(hash)) byHash.set(hash, []);
      byHash.get(hash).push(a);
    });

    const targets = Array.from(byHash.keys())
      .map((h) => document.getElementById(h.slice(1)))
      .filter(Boolean);

    if (targets.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = `#${entry.target.id}`;
            links.forEach((a) => a.classList.remove('active'));
            (byHash.get(id) || []).forEach((a) => a.classList.add('active'));
          });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      targets.forEach((el) => observer.observe(el));
    }
  }

  // ---------- Coach headshots · apply real photos by name ----------
  // Coach cards repeat across pages as identical markup, so we map the
  // displayed name to a photo here rather than hand-editing every card.
  // Coaches without a photo keep the styled gradient placeholder.
  const COACH_PHOTOS = {
    'Maru Urban': '/assets/coaches/maru.jpg',
    'Steve Mitchell': '/assets/coaches/steve.jpg',
    'Rosa Lamela': '/assets/coaches/rosa.jpg',
    'Orlando Gonzalez': '/assets/coaches/orlando.jpg',
    'Lauren Simpson': '/assets/coaches/lauren.jpg',
  };

  document.querySelectorAll('.coach').forEach((card) => {
    const nameEl = card.querySelector('.coach-name');
    const portrait = card.querySelector('.coach-portrait');
    if (!nameEl || !portrait) return;
    const photo = COACH_PHOTOS[nameEl.textContent.trim()];
    if (!photo) return;
    portrait.classList.add('has-photo');
    portrait.style.backgroundImage = `url("${photo}")`;
  });
})();
