'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { useViewport } from '@/lib/useViewport';

const GAP = 20;

function pad(x: number) {
  return (x < 10 ? '0' : '') + x;
}

interface CarouselProps {
  /** Stable key used for the data attribute / region identity. */
  dataKey: string;
  /** Accent color for the active page dot. */
  color: string;
  ariaLabel: string;
  /** One node per card; count drives the page maths. */
  children: ReactNode[];
  /** Change this value to reset the carousel to page 1 (e.g. on filter change). */
  resetSignal?: string | number;
}

export function Carousel({
  dataKey,
  color,
  ariaLabel,
  children,
  resetSignal,
}: CarouselProps) {
  const { vw } = useViewport();
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const n = children.length;

  // Layout per viewport (matches reference car()).
  let C = 3;
  let R = 2;
  if (vw < 640) {
    C = 1;
    R = 1;
  } else if (vw < 1024) {
    C = 2;
    R = 2;
  }
  const rows = Math.max(1, Math.min(R, n));
  const cols = Math.ceil(n / rows);
  const pages = C === 1 ? n : Math.max(1, Math.ceil(cols / C));
  const current = Math.min(page, pages - 1);
  const colW =
    C === 1 ? '86%' : `calc((100% - ${GAP * (C - 1)}px) / ${C})`;

  const step = useCallback(() => {
    const el = ref.current;
    if (!el) return 1;
    return C === 1 ? el.clientWidth * 0.86 + GAP : el.clientWidth + GAP;
  }, [C]);

  const go = useCallback(
    (p: number) => {
      const q = Math.max(0, Math.min(pages - 1, p));
      const el = ref.current;
      if (el) el.scrollTo({ left: q * step(), behavior: 'smooth' });
      setPage(q);
    },
    [pages, step]
  );

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const p = Math.max(0, Math.min(pages - 1, Math.round(el.scrollLeft / step())));
    setPage((prev) => (p !== prev ? p : prev));
  }, [pages, step]);

  // Reset to page 1 when the reset signal changes (e.g. project filter).
  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollTo({ left: 0 });
    setPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSignal]);

  // Keep the scroll position aligned to the current page if layout changes.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = current * step();
    if (Math.abs(el.scrollLeft - target) > 2) {
      el.scrollTo({ left: target });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vw]);

  const hasNav = pages > 1;

  const arrowStyle = (disabled: boolean): CSSProperties => ({
    border: `1px solid ${disabled ? 'rgba(255,255,255,.06)' : 'rgba(255,255,255,.16)'}`,
    background: disabled ? 'transparent' : 'rgba(255,255,255,.04)',
    color: disabled ? '#4A5566' : '#E6EAF0',
    cursor: disabled ? 'default' : 'pointer',
  });

  return (
    <>
      <div
        ref={ref}
        onScroll={onScroll}
        data-carousel="1"
        data-key={dataKey}
        role="region"
        aria-label={ariaLabel}
        className="carousel"
        style={{
          gridTemplateRows: `repeat(${rows},auto)`,
          gridAutoColumns: colW,
        }}
      >
        {children}
      </div>

      {hasNav && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginTop: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {Array.from({ length: pages }).map((_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  type="button"
                  className="dot-btn"
                  onClick={() => go(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={active ? 'true' : 'false'}
                >
                  <span
                    className="dot"
                    style={{
                      width: active ? '20px' : '6px',
                      background: active ? color : 'rgba(255,255,255,.22)',
                    }}
                  />
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontSize: '11px',
                letterSpacing: '.08em',
                color: '#8D99AB',
              }}
            >
              {pad(current + 1)} / {pad(pages)}
            </span>
            <button
              type="button"
              className="car-arrow"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Previous"
              style={arrowStyle(current === 0)}
            >
              ←
            </button>
            <button
              type="button"
              className="car-arrow"
              onClick={() => go(current + 1)}
              disabled={current >= pages - 1}
              aria-label="Next"
              style={arrowStyle(current >= pages - 1)}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
