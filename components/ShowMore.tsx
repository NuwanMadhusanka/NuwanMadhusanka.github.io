'use client';

import { useId, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

/**
 * Progressive-enhancement "Show more / Show less" disclosure.
 *
 * It only hides/reveals the exact children passed to it — nothing is added,
 * removed, or rewritten.
 *
 * Content safety: the children are always present in the server-rendered DOM
 * (collapsed by CSS, not removed). A global <noscript> rule in the layout
 * force-opens every collapsible and hides the toggle when JS is unavailable,
 * so no text is ever hidden from a reader or crawler. Because the server HTML
 * is already collapsed, there is no expand-then-collapse flash on load.
 */
export function ShowMore({
  children,
  moreLabel = 'Show more',
  lessLabel = 'Show less',
  startOpen = false,
  wrapStyle,
  buttonStyle,
}: {
  children: ReactNode;
  moreLabel?: string;
  lessLabel?: string;
  startOpen?: boolean;
  wrapStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
}) {
  const [open, setOpen] = useState(startOpen);
  const regionId = useId();

  return (
    <div style={wrapStyle}>
      <div id={regionId} className={`collapsible${open ? ' open' : ''}`}>
        <div className="collapsible-inner">{children}</div>
      </div>
      <button
        type="button"
        className="show-more-btn"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => setOpen((v) => !v)}
        style={buttonStyle}
      >
        {open ? lessLabel : moreLabel}
        <span className="chev" aria-hidden="true">
          ↓
        </span>
      </button>
    </div>
  );
}
