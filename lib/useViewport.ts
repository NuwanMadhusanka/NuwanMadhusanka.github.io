'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks the viewport width for carousel layout and the nav breakpoint.
 * Starts at a stable SSR-safe default (1200) and updates after mount, so the
 * first client render matches the server and avoids hydration mismatches.
 */
export function useViewport(): { vw: number; mounted: boolean } {
  const [vw, setVw] = useState(1200);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    setMounted(true);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { vw, mounted };
}
