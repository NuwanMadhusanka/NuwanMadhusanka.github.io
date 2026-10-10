import type { CSSProperties } from 'react';
import { sections } from '@/data/content';
import { SectionEyebrow } from '@/components/SectionHeader';

const { certTech } = sections;

const cardLabel = (color: string): CSSProperties => ({
  fontFamily: 'var(--font-ibm-plex-mono), monospace',
  fontSize: '10px',
  letterSpacing: '.11em',
  textTransform: 'uppercase',
  color,
});

const cardTitle: CSSProperties = {
  margin: 0,
  fontSize: '19px',
  lineHeight: 1.32,
  fontWeight: 600,
  letterSpacing: '-.016em',
  textWrap: 'pretty',
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: '14.5px',
  lineHeight: 1.65,
  color: '#9AA6B8',
  textWrap: 'pretty',
};

const metricLabel: CSSProperties = {
  fontFamily: 'var(--font-ibm-plex-mono), monospace',
  fontSize: '10.5px',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: '#8D99AB',
  marginTop: '3px',
};

const researchMetrics = [
  { value: '2.2×', label: 'faster inference' },
  { value: '195.9 → 89.9 ms', label: 'per image' },
  { value: '3.4708', label: 'MAE vs 3.4695' },
];

export function ResearchCerts() {
  return (
    <div className="research-certs">
      {/* 07 Research & publications */}
      <section id="research" style={{ padding: 'clamp(52px,7vw,76px) 0' }}>
        <SectionEyebrow num="07" label="Research & publications" />
        <div
          style={{
            border: '1px solid rgba(245,169,127,.22)',
            borderRadius: '16px',
            padding: '26px',
            background: 'rgba(245,169,127,.045)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            height: 'calc(100% - 32px)',
          }}
        >
          <span style={cardLabel('#F5A97F')}>
            Journal manuscript · BSc Computer Science research
          </span>
          <h3 style={cardTitle}>
            Improving Convolutional Neural Network for Head Pose Estimation by
            using Knowledge Distillation Techniques
          </h3>
          <p style={cardText}>
            Relational knowledge distillation from a ResNet50 Hopenet teacher
            into a MobileNetV2 student, with a novel exchange loss function in
            the distillation process.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              padding: '14px 0',
              borderTop: '1px solid rgba(255,255,255,.06)',
              borderBottom: '1px solid rgba(255,255,255,.06)',
            }}
          >
            {researchMetrics.map((m) => (
              <div key={m.label}>
                <div style={{ fontSize: '19px', fontWeight: 600 }}>{m.value}</div>
                <div style={metricLabel}>{m.label}</div>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/Research-Project-4th-Year/cnn_headpose_estimation"
            target="_blank"
            rel="noopener"
            style={{ marginTop: 'auto', fontSize: '14px', fontWeight: 600 }}
          >
            Research code on GitHub ↗
          </a>
        </div>
      </section>

      {/* 08 Certifications */}
      <section id="certifications" style={{ padding: 'clamp(52px,7vw,76px) 0' }}>
        <SectionEyebrow num="08" label="Certifications" />
        <div
          style={{
            border: '1px solid rgba(138,180,248,.22)',
            borderRadius: '16px',
            padding: '26px',
            background: 'rgba(138,180,248,.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            height: 'calc(100% - 32px)',
          }}
        >
          <span style={cardLabel('#8AB4F8')}>Amazon Web Services</span>
          <h3 style={{ ...cardTitle, textWrap: 'balance' }}>
            AWS Certified Solutions Architect – Associate
          </h3>
          <p style={cardText}>
            Designing resilient, high-performing, secure and cost-optimised
            architectures on AWS - compute, storage, networking, identity and
            managed databases.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {certTech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
          {/* Open item: swap for the Credly / AWS verification URL when available. */}
          <a
            href="https://www.linkedin.com/in/nuwan98/"
            target="_blank"
            rel="noopener"
            style={{ marginTop: 'auto', fontSize: '14px', fontWeight: 600 }}
          >
            Verify on LinkedIn ↗
          </a>
        </div>
      </section>
    </div>
  );
}
