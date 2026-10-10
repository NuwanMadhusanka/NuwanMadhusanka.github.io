'use client';

import { useEffect } from 'react';

/**
 * Global scroll-reveal controller. Elements marked with `data-reveal` start
 * hidden (via `html.reveal-ready [data-reveal]` in globals.css, which is only
 * active when JS confirms support) and fade/rise in when they enter the
 * viewport. Siblings are staggered by their order within the same parent.
 *
 * Purely presentational: it never adds, removes, or rewrites any content. With
 * JS disabled the hidden state is never applied, so everything stays visible.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('reveal-ready')) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    if (els.length === 0) return;

    // Stagger each element by its position among its siblings.
    const seen = new Map<Element, number>();
    els.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const i = seen.get(parent) ?? 0;
      seen.set(parent, i + 1);
      el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
