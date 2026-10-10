import type { CSSProperties } from 'react';
import { sections } from '@/data/content';
import { SectionEyebrow } from '@/components/SectionHeader';
import { ShowMore } from '@/components/ShowMore';

const { timeline } = sections;

// Bullets shown before the "Show more" toggle; the toggle only appears when a
// role has more than 5 points, so collapsing never hides just one line.
const INITIAL_POINTS = 4;
const COLLAPSE_THRESHOLD = 5;

const pointsGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
  gap: '10px 28px',
};

function Point({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#56657A',
          display: 'block',
          flex: 'none',
          marginTop: '9px',
        }}
      />
      <p
        style={{
          margin: 0,
          fontSize: '14.5px',
          lineHeight: 1.66,
          color: '#9AA6B8',
          textWrap: 'pretty',
        }}
      >
        {text}
      </p>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionEyebrow num="06" label="Professional experience" />
      <div data-reveal style={{ marginBottom: '36px' }}>
        <h2 className="h2">Career timeline</h2>
      </div>
      <div style={{ display: 'grid', gap: '16px' }}>
        {timeline.map((t) => {
          const collapse = t.points.length > COLLAPSE_THRESHOLD;
          const head = collapse ? t.points.slice(0, INITIAL_POINTS) : t.points;
          const rest = collapse ? t.points.slice(INITIAL_POINTS) : [];
          return (
            <div
              key={`${t.period}-${t.role}`}
              data-reveal
              className="card timeline-card"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(12px,3vw,32px)',
                padding: 'clamp(20px,3vw,28px)',
              }}
            >
              <div style={{ flex: '0 0 160px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono), monospace',
                    fontSize: '12.5px',
                    letterSpacing: '.05em',
                    color: '#8AB4F8',
                  }}
                >
                  {t.period}
                </div>
              </div>
              <div style={{ flex: '1 1 320px', minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono), monospace',
                    fontSize: '10.5px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: '#7DD3C0',
                    marginBottom: '8px',
                  }}
                >
                  {t.org}
                </div>
                <h3
                  style={{
                    margin: '0 0 10px',
                    fontSize: '18.5px',
                    fontWeight: 600,
                    letterSpacing: '-.018em',
                  }}
                >
                  {t.role}
                </h3>
                <p
                  style={{
                    margin: '0 0 16px',
                    maxWidth: '720px',
                    fontSize: '15px',
                    lineHeight: 1.66,
                    color: '#C9D1DC',
                    textWrap: 'pretty',
                  }}
                >
                  {t.intro}
                </p>
                <div style={pointsGrid}>
                  {head.map((pt, i) => (
                    <Point key={i} text={pt} />
                  ))}
                </div>
                {rest.length > 0 && (
                  <ShowMore
                    moreLabel={`Show ${rest.length} more`}
                    lessLabel="Show less"
                    wrapStyle={{ marginTop: '14px' }}
                  >
                    <div style={{ ...pointsGrid, paddingTop: '10px' }}>
                      {rest.map((pt, i) => (
                        <Point key={i + INITIAL_POINTS} text={pt} />
                      ))}
                    </div>
                  </ShowMore>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
