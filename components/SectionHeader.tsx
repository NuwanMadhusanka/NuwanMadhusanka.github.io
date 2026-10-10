import type { CSSProperties, ReactNode } from 'react';

type Variant = 'outline' | 'solid';

interface EyebrowProps {
  num: string;
  label: string;
  /** Accent color used for the rule (and, when solid, the badge + label). */
  accent?: string;
  variant?: Variant;
}

const monoBase: CSSProperties = {
  fontFamily: 'var(--font-ibm-plex-mono), monospace',
};

/**
 * The numbered eyebrow row: number badge + uppercase mono label + a 1px
 * gradient rule filling the remaining width.
 *  - `outline` (default): outlined teal badge, label in #C9D1DC.
 *  - `solid`: solid badge in the accent color with dark text, label in accent.
 */
export function SectionEyebrow({
  num,
  label,
  accent = '#7DD3C0',
  variant = 'outline',
}: EyebrowProps) {
  const badgeStyle: CSSProperties =
    variant === 'solid'
      ? {
          ...monoBase,
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '.06em',
          padding: '4px 8px',
          borderRadius: '6px',
          background: accent,
          color: '#0A0E13',
          border: `1px solid ${accent}`,
        }
      : {
          ...monoBase,
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '.06em',
          padding: '4px 8px',
          borderRadius: '6px',
          background: 'rgba(125,211,192,.08)',
          color: '#7DD3C0',
          border: '1px solid rgba(125,211,192,.3)',
        };

  const labelColor = variant === 'solid' ? accent : '#C9D1DC';

  return (
    <div className="sec-head">
      <span style={badgeStyle}>{num}</span>
      <span
        className="sec-label"
        style={{ ...monoBase, color: labelColor }}
      >
        {label}
      </span>
      <span
        className="sec-rule"
        style={{ background: `linear-gradient(90deg,${accent}55,transparent)` }}
      />
    </div>
  );
}

interface SectionHeaderProps extends EyebrowProps {
  h2: ReactNode;
  lead?: ReactNode;
}

/**
 * Full section header: eyebrow row + the standard 2-column grid
 * (H2 on the left, lead on the right).
 */
export function SectionHeader({
  num,
  label,
  accent,
  variant,
  h2,
  lead,
}: SectionHeaderProps) {
  return (
    <>
      <SectionEyebrow num={num} label={label} accent={accent} variant={variant} />
      <div className="sec-head-grid">
        <h2 className="h2">{h2}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
    </>
  );
}
