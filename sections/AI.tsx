import { sections } from '@/data/content';
import { SectionEyebrow } from '@/components/SectionHeader';

const { aiPath } = sections;

export function AI() {
  return (
    <section id="ai" className="section">
      <SectionEyebrow
        num="04"
        label="AI / ML & Agentic AI"
        accent="#A78BFA"
        variant="solid"
      />
      <div className="sec-head-grid" data-reveal>
        <h2 className="h2">From deep-learning research to applied AI</h2>
        <div style={{ display: 'grid', gap: '14px' }}>
          <p className="lead">
            My journey into AI started with deep-learning research during my
            Computer Science degree, focused on making neural networks more
            efficient and practical to deploy. Today, I’m extending that
            foundation through personal projects and technical writing in
            Generative AI, RAG, vector search, and Agentic AI.
          </p>
          <p className="lead">
            My professional background in backend engineering and cloud systems
            gives me a practical perspective on AI applications - particularly
            around APIs, data, scalability, latency, reliability, and
            infrastructure cost.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
          gap: '16px',
        }}
      >
        {aiPath.map((s, i) => {
          const highlighted = i === 2;
          return (
            <div
              key={s.title}
              data-reveal
              className="soft-hover"
              style={{
                border: highlighted
                  ? '1px solid rgba(167,139,250,.3)'
                  : '1px solid rgba(255,255,255,.08)',
                borderRadius: '16px',
                padding: '24px',
                background: highlighted
                  ? 'linear-gradient(160deg,rgba(167,139,250,.1),rgba(19,26,35,.5))'
                  : 'rgba(19,26,35,.55)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '-.015em',
                }}
              >
                {s.title}
              </h3>
              <p className="card-body">{s.body}</p>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255,255,255,.055)',
                  fontFamily: 'var(--font-ibm-plex-mono), monospace',
                  fontSize: '10.5px',
                  letterSpacing: '.06em',
                  lineHeight: 1.6,
                  color: '#8D99AB',
                }}
              >
                {s.tech}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
