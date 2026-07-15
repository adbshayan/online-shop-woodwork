// Interaction layer — language toggle, theme, sticky/auto-hiding header,
// reveal-on-scroll, and the demo contact form. Ported from the original
// end-of-body IIFE. Bundled by Astro as a deferred module, so the DOM is ready.
(function () {
  const root = document.documentElement;

  function apply(lang: string) {
    root.setAttribute('lang', lang);
    // The composition is frozen to LTR so the layout never mirrors between
    // languages — only the text swaps. Each text node gets dir="auto" so Persian
    // still shapes right-to-left from its own content without moving the block.
    const wrap = document.querySelector<HTMLElement>('.wrap');
    if (wrap) wrap.setAttribute('dir', 'ltr');
    document.querySelectorAll<HTMLElement>('[data-' + lang + ']').forEach(function (el) {
      const v = el.getAttribute('data-' + lang);
      if (v != null) {
        el.textContent = v;
        el.setAttribute('dir', 'auto');
      }
    });
    document.querySelectorAll<HTMLButtonElement>('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-set') === lang);
    });
    const tbtn = document.getElementById('themeBtn');
    if (tbtn) {
      const tt = tbtn.getAttribute('data-' + lang + '-title');
      if (tt) tbtn.title = tt;
    }
    try {
      localStorage.setItem('chubin_lang', lang);
    } catch (e) {}
  }

  let saved = 'fa';
  try {
    saved = localStorage.getItem('chubin_lang') || 'fa';
  } catch (e) {}
  apply(saved);
  document.querySelectorAll<HTMLButtonElement>('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-set') || 'fa');
    });
  });

  // light/dark theme toggle
  function currentTheme() {
    return (
      root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')
    );
  }
  const tb = document.getElementById('themeBtn');
  if (tb) {
    tb.addEventListener('click', function () {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('chubin_theme', next);
      } catch (e) {}
    });
  }

  // sticky header: bordered once scrolled; hides on scroll-down, reappears on scroll-up
  const hd = document.getElementById('hd');
  if (hd) {
    let lastY = window.scrollY;
    const onScroll = function () {
      const y = window.scrollY;
      hd.classList.toggle('stuck', y > 8);
      const delta = y - lastY;
      if (y <= hd.offsetHeight) {
        hd.classList.remove('hide');
      } else if (delta > 4) {
        hd.classList.add('hide');
      } else if (delta < -4) {
        hd.classList.remove('hide');
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // reveal on scroll
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches) {
    els.forEach(function (e) {
      e.classList.add('in');
    });
  } else {
    const io = new IntersectionObserver(
      function (en) {
        en.forEach(function (x) {
          if (x.isIntersecting) {
            x.target.classList.add('in');
            io.unobserve(x.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach(function (e) {
      io.observe(e);
    });
  }

  // demo contact form
  const f = document.getElementById('cform') as HTMLFormElement | null;
  if (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.classList.add('sent');
      setTimeout(function () {
        f.classList.remove('sent');
        f.reset();
      }, 4500);
    });
  }
})();
