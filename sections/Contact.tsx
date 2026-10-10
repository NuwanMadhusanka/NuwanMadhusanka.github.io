import type { CSSProperties } from 'react';
import { sections } from '@/data/content';
import { SectionEyebrow } from '@/components/SectionHeader';
import { ButtonLink } from '@/components/Button';

const { contactRows } = sections;

const footerText: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  marginTop: '40px',
  fontFamily: 'var(--font-ibm-plex-mono), monospace',
  fontSize: '11.5px',
  letterSpacing: '.06em',
  color: '#8D99AB',
};

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(52px,7vw,76px) 0 96px',
        borderTop: '1px solid rgba(255,255,255,.06)',
      }}
    >
      <div
        data-reveal
        style={{
          position: 'relative',
          border: '1px solid rgba(255,255,255,.09)',
          borderRadius: '20px',
          overflow: 'hidden',
          background:
            'linear-gradient(150deg,rgba(138,180,248,.11),rgba(125,211,192,.06) 55%,rgba(11,15,20,.4))',
          padding: 'clamp(32px,4vw,56px) clamp(24px,4vw,48px)',
        }}
      >
        <div className="grid-texture" />
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
            gap: 'clamp(32px,4vw,48px)',
            alignItems: 'center',
          }}
        >
          <div>
            <SectionEyebrow num="10" label="Contact" />
            <h2
              style={{
                margin: '0 0 18px',
                fontSize: 'clamp(28px,3.6vw,42px)',
                lineHeight: 1.12,
                letterSpacing: '-.03em',
                fontWeight: 600,
                textWrap: 'balance',
              }}
            >
              Let&apos;s build something great.
            </h2>
            <p
              style={{
                margin: '0 0 16px',
                maxWidth: '540px',
                fontSize: '16.5px',
                lineHeight: 1.68,
                color: '#9AA6B8',
                textWrap: 'pretty',
              }}
            >
              I&apos;m open to opportunities in Senior Backend Engineering, Cloud
              &amp; AWS, and AI/GenAI engineering. I&apos;m particularly
              interested in roles where strong backend and cloud engineering
              foundations meet modern AI and agentic systems.
            </p>
            <p
              style={{
                margin: '0 0 30px',
                maxWidth: '540px',
                fontSize: '16.5px',
                lineHeight: 1.68,
                color: '#9AA6B8',
                textWrap: 'pretty',
              }}
            >
              Whether you&apos;re hiring for a senior engineering role, looking
              for someone to build scalable backend systems, or interested in
              discussing a technical project, feel free to get in touch.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <ButtonLink
                href="mailto:madhusankanuwan448@gmail.com"
                variant="primary"
              >
                Email Me
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/nuwan98/"
                target="_blank"
                rel="noopener"
                variant="secondary"
              >
                Connect on LinkedIn
              </ButtonLink>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '13px' }}>
            {contactRows.map((c) => (
              <div
                key={c.label}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '6px 16px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(255,255,255,.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono), monospace',
                    fontSize: '10.5px',
                    letterSpacing: '.13em',
                    textTransform: 'uppercase',
                    color: '#8D99AB',
                  }}
                >
                  {c.label}
                </span>
                <a
                  href={c.href}
                  className="contact-value"
                  style={{
                    fontSize: '14.5px',
                    textAlign: 'right',
                    overflowWrap: 'anywhere',
                  }}
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer style={footerText}>
        <span>© 2026 Nuwan Madhusanka - Colombo, Sri Lanka</span>
        <span>Backend · AWS &amp; Cloud · ML &amp; GenAI · Agentic AI</span>
      </footer>
    </section>
  );
}
