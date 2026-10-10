import type { CSSProperties, ReactNode } from 'react';

/**
 * Category chip - mono 10px uppercase, accent border/fill/text.
 * Mirrors the reference `chip(color)` helper (border = color+38 alpha,
 * fill = color+14 alpha, text = color).
 */
export function chipStyle(color: string, extra?: CSSProperties): CSSProperties {
  return {
    fontFamily: 'var(--font-ibm-plex-mono), monospace',
    fontSize: '10px',
    letterSpacing: '.11em',
    textTransform: 'uppercase',
    padding: '4px 9px',
    borderRadius: '5px',
    border: `1px solid ${color}38`,
    background: `${color}14`,
    color,
    ...extra,
  };
}

export function Chip({
  color,
  children,
  style,
}: {
  color: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <span style={chipStyle(color, style)}>{children}</span>;
}
