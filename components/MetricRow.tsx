import type { Metric } from '@/data/types';

/**
 * Metric row: value (19px/600) with a mono uppercase label underneath,
 * top and bottom divider lines. `gap` defaults to the project-card spacing.
 */
export function MetricRow({
  metrics,
  gap = 22,
}: {
  metrics: Metric[];
  gap?: number;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${gap}px`,
        padding: '14px 0',
        borderTop: '1px solid rgba(255,255,255,.055)',
        borderBottom: '1px solid rgba(255,255,255,.055)',
      }}
    >
      {metrics.map((m) => (
        <div key={m.label}>
          <div
            style={{
              fontSize: '19px',
              fontWeight: 600,
              letterSpacing: '-.02em',
              color: '#E6EAF0',
            }}
          >
            {m.value}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-ibm-plex-mono), monospace',
              fontSize: '10.5px',
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: '#8D99AB',
              marginTop: '3px',
            }}
          >
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}
