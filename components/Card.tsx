import type { CSSProperties, ReactNode } from 'react';
import type { Capability } from '@/data/types';

/**
 * Shared card surface: 1px border, radius 16, surface fill, .25s transitions.
 * `hover` adds the lift + brighter border + soft shadow.
 */
export function Card({
  children,
  hover = true,
  className,
  style,
}: {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const classes = ['card', hover ? 'card-hover' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

/**
 * Capability card used by Backend (02) and Cloud (03) carousels:
 * title, body, and a mono `evidence` line above a divider.
 */
export function CapabilityCard({ cap }: { cap: Capability }) {
  return (
    <Card className="cap-card">
      <h3 className="card-title">{cap.title}</h3>
      <p className="card-body">{cap.body}</p>
      <div className="evidence">{cap.evidence}</div>
    </Card>
  );
}
