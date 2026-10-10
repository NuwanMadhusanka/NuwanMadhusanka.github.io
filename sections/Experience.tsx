import { sections } from '@/data/content';
import { SectionEyebrow } from '@/components/SectionHeader';

const { timeline } = sections;

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionEyebrow num="06" label="Professional experience" />
      <div style={{ marginBottom: '36px' }}>
        <h2 className="h2">Career timeline</h2>
      </div>
      <div style={{ display: 'grid', gap: '16px' }}>
        {timeline.map((t) => (
          <div
            key={`${t.period}-${t.role}`}
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
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit,minmax(min(100%,320px),1fr))',
                  gap: '10px 28px',
                }}
              >
                {t.points.map((pt, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                  >
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
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
