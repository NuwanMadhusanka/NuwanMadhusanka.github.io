import { sections } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { chipStyle } from '@/components/Chip';

const { pillars } = sections;

// Pillar accent colors, in order (from the reference pillar() calls).
const PILLAR_COLORS = ['#7DD3C0', '#8AB4F8', '#A78BFA'];

export function CoreExpertise() {
  return (
    <section id="expertise" className="section">
      <SectionHeader
        num="01"
        label="Core expertise"
        h2="What I work on"
        lead="Backend engineering is my foundation. Cloud is where I build and operate it. AI is where I'm extending what those systems can do."
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(min(100%,240px),1fr))',
          gap: '18px',
        }}
      >
        {pillars.map((p, i) => {
          const color = PILLAR_COLORS[i] ?? '#7DD3C0';
          return (
            <a
              key={p.num}
              href={p.href}
              className="pillar-card"
              style={{
                border: `1px solid ${color}33`,
                background: `radial-gradient(120% 90% at 0% 0%,${color}1c,transparent 60%),rgba(19,26,35,.6)`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg,${color},${color}00)`,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono), monospace',
                    fontSize: '12px',
                    letterSpacing: '.1em',
                    color: '#8D99AB',
                  }}
                >
                  {p.num}
                </span>
                <span style={chipStyle(color)}>{p.tag}</span>
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: '22px',
                  lineHeight: 1.22,
                  fontWeight: 600,
                  letterSpacing: '-.02em',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '14.5px',
                  lineHeight: 1.64,
                  color: '#9AA6B8',
                  textWrap: 'pretty',
                }}
              >
                {p.lead}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginTop: 'auto',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255,255,255,.06)',
                }}
              >
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
