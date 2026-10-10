import type { CSSProperties } from 'react';
import { sections } from '@/data/content';
import { ButtonLink } from '@/components/Button';
import { ShowMore } from '@/components/ShowMore';

const { heroPillars, heroStats } = sections;

const heroPara: CSSProperties = {
  margin: '0 0 16px',
  maxWidth: '640px',
  fontSize: '16.5px',
  lineHeight: 1.7,
  color: '#9AA6B8',
  textWrap: 'pretty',
};

export function Hero() {
  return (
    <section
      id="top"
      data-rise="1"
      style={{
        position: 'relative',
        padding: 'clamp(56px,8vw,100px) 0 clamp(56px,7vw,84px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
        gap: 'clamp(32px,4vw,56px)',
        alignItems: 'center',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-140px',
          width: '520px',
          height: '420px',
          background:
            'radial-gradient(closest-side,rgba(138,180,248,.15),transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Left column */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            padding: '6px 13px',
            borderRadius: '999px',
            border: '1px solid rgba(125,211,192,.28)',
            background: 'rgba(125,211,192,.07)',
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: '11.5px',
            letterSpacing: '.09em',
            textTransform: 'uppercase',
            color: '#7DD3C0',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#7DD3C0',
              display: 'block',
            }}
          />
          Senior Software Engineer · Colombo, Sri Lanka
        </div>

        <h1 className="h1">
          Hi, I’m Nuwan. I’m a Senior Software Engineer focused on building{' '}
          <span className="grad-text">
            scalable backend systems, cloud infrastructure, and modern AI
            solutions.
          </span>
        </h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {heroPillars.map((hp) => (
            <span
              key={hp.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,.09)',
                background: 'rgba(255,255,255,.025)',
                fontSize: '13.5px',
                fontWeight: 500,
                color: '#C9D1DC',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '2px',
                  display: 'block',
                  background: hp.color,
                }}
              />
              {hp.label}
            </span>
          ))}
        </div>

        <p style={heroPara}>
          I have 4+ years of professional experience at CodeGen International,
          building and operating Java and Spring Boot services for a large-scale
          travel technology platform handling thousands of hotel searches. My
          experience spans backend architecture, microservices, APIs, database
          engineering, distributed caching, Kubernetes, CI/CD, performance
          optimization, and production troubleshooting.
        </p>
        <ShowMore
          moreLabel="Read more about me"
          lessLabel="Show less"
          wrapStyle={{ marginBottom: '32px' }}
        >
          <p style={heroPara}>
            I’m an AWS Certified Solutions Architect – Associate with hands-on
            experience in cloud environments and a strong interest in
            cloud-native architecture. My computer science research focused on
            deep learning and knowledge distillation for CNN-based head pose
            estimation, and I’m now extending that foundation through personal
            projects and continuous learning in Generative AI, RAG, vector
            search, and Agentic AI systems.
          </p>
          <p style={{ ...heroPara, marginBottom: '14px' }}>
            I’m particularly interested in building reliable backend and cloud
            foundations for the next generation of AI-powered applications.
          </p>
        </ShowMore>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <ButtonLink href="#projects" variant="primary">
            View Projects
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Get in Touch
          </ButtonLink>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: '12.5px',
            letterSpacing: '.04em',
          }}
        >
          <a
            href="https://github.com/NuwanMadhusanka"
            target="_blank"
            rel="noopener"
            className="mono-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nuwan98/"
            target="_blank"
            rel="noopener"
            className="mono-link"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@nuwanmadhusankarulz"
            target="_blank"
            rel="noopener"
            className="mono-link"
          >
            Medium
          </a>
          {/* Open item: point this at the real CV PDF when available. */}
          <a href="#contact" className="mono-link">
            Curriculum Vitae
          </a>
        </div>
      </div>

      {/* Right column: circular avatar above the profile card */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile-photo.png"
          alt="Portrait of Nuwan Madhusanka"
          width={176}
          height={176}
          style={{
            width: '176px',
            height: '176px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center top',
            border: '3px solid rgba(125,211,192,.4)',
            boxShadow: '0 16px 40px -16px rgba(0,0,0,.85)',
            background: '#0B0F14',
            marginBottom: '-46px',
            position: 'relative',
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: 'relative',
            width: '100%',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: '16px',
            background:
              'linear-gradient(165deg,rgba(19,26,35,.9),rgba(11,15,20,.75))',
            backdropFilter: 'blur(8px)',
            padding: '62px 26px 26px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px -40px rgba(0,0,0,.9)',
          }}
        >
          <div className="grid-texture" />
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                fontSize: '17px',
                fontWeight: 600,
                letterSpacing: '-.012em',
                color: '#E6EAF0',
              }}
            >
              Nuwan Madhusanka
            </div>
            <div style={{ fontSize: '13px', color: '#8D99AB', marginTop: '4px' }}>
              Senior Software Engineer
            </div>
          </div>

          <div style={{ position: 'relative', display: 'grid', gap: '13px' }}>
          {heroStats.map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,.055)',
              }}
            >
              <span style={{ fontSize: '13.5px', color: '#8D99AB' }}>
                {s.label}
              </span>
              <span
                style={{
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: '#E6EAF0',
                  textAlign: 'right',
                }}
              >
                {s.value}
              </span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
