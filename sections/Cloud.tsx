import { sections } from '@/data/content';
import { SectionEyebrow } from '@/components/SectionHeader';
import { CapabilityCard } from '@/components/Card';
import { Carousel } from '@/components/Carousel';

const { cloudFlow, cloudCaps } = sections;

export function Cloud() {
  return (
    <section id="cloud" className="section">
      <SectionEyebrow
        num="03"
        label="AWS & Cloud Architecture"
        accent="#8AB4F8"
        variant="solid"
      />
      <div className="sec-head-grid">
        <h2 className="h2">
          Designing, deploying and operating cloud-based systems
        </h2>
        <p className="lead">
          I work across cloud infrastructure, containerized services, CI/CD and
          production operations, with hands-on experience across OCI and Azure
          and AWS architecture knowledge backed by the AWS Certified Solutions
          Architect – Associate certification. My cloud work is closely
          connected to backend engineering: deploying services reliably,
          supporting migrations, troubleshooting production issues, and
          improving operational efficiency.
        </p>
      </div>

      {/* Delivery path panel */}
      <div
        style={{
          position: 'relative',
          border: '1px solid rgba(138,180,248,.2)',
          borderRadius: '16px',
          background:
            'linear-gradient(165deg,rgba(19,26,35,.75),rgba(11,15,20,.6))',
          padding: '24px',
          marginBottom: '20px',
          overflow: 'hidden',
        }}
      >
        <div className="grid-texture" />
        <div
          style={{
            position: 'relative',
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: '10.5px',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#8D99AB',
            marginBottom: '16px',
          }}
        >
          Delivery path
        </div>
        <div className="flow-grid">
          {cloudFlow.map((f) => (
            <div
              key={f.idx}
              style={{
                border: '1px solid rgba(138,180,248,.18)',
                borderRadius: '12px',
                padding: '16px',
                background: 'rgba(138,180,248,.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '.12em',
                    color: '#8AB4F8',
                  }}
                >
                  {f.idx}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono), monospace',
                    fontSize: '12px',
                    color: '#8AB4F8',
                    opacity: 0.6,
                  }}
                >
                  {f.arrow}
                </span>
              </div>
              <div
                style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-.01em' }}
              >
                {f.label}
              </div>
              <div
                style={{ fontSize: '12.5px', lineHeight: 1.5, color: '#9AA6B8' }}
              >
                {f.tools}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Carousel
        dataKey="cloud"
        color="#8AB4F8"
        ariaLabel="AWS & Cloud Architecture"
      >
        {cloudCaps.map((c) => (
          <CapabilityCard key={c.title} cap={c} />
        ))}
      </Carousel>
    </section>
  );
}
