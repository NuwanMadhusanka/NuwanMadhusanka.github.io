'use client';

export interface FilterItem {
  key: string;
  label: string;
  color: string;
  count: number;
}

/**
 * A row of filter chips (used for the group row and the sub-section row in
 * sections 05 & 09). `variant="sub"` renders a slightly smaller, quieter chip
 * for the second-level sub-section row.
 */
export function FilterChips({
  items,
  active,
  onSelect,
  ariaLabel,
  variant = 'group',
}: {
  items: FilterItem[];
  active: string;
  onSelect: (key: string) => void;
  ariaLabel: string;
  variant?: 'group' | 'sub';
}) {
  const sub = variant === 'sub';
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: sub ? '7px' : '9px',
      }}
    >
      {items.map((f) => {
        const on = active === f.key;
        return (
          <button
            key={f.key}
            type="button"
            onClick={() => onSelect(f.key)}
            aria-pressed={on}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: sub ? '7px' : '8px',
              padding: sub ? '6px 12px' : '9px 15px',
              borderRadius: sub ? '8px' : '9px',
              cursor: 'pointer',
              fontFamily: 'var(--font-figtree), sans-serif',
              fontSize: sub ? '12.5px' : '13.5px',
              fontWeight: 500,
              transition: 'all .22s',
              border: `1px solid ${on ? f.color + '55' : 'rgba(255,255,255,.09)'}`,
              background: on ? f.color + '16' : 'rgba(255,255,255,.02)',
              color: on ? f.color : '#9AA6B8',
              minHeight: sub ? '36px' : '44px',
            }}
          >
            <span>{f.label}</span>
            <span
              style={{
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontSize: sub ? '10px' : '10.5px',
                opacity: 0.7,
              }}
            >
              {f.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
