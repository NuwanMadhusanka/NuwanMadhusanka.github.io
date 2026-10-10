import { sections } from '@/data/content';
import { SectionEyebrow } from '@/components/SectionHeader';
import { CapabilityCard } from '@/components/Card';
import { Carousel } from '@/components/Carousel';

const { backendCaps } = sections;

export function Backend() {
  return (
    <section id="backend" className="section">
      <SectionEyebrow
        num="02"
        label="Backend Engineering"
        accent="#7DD3C0"
        variant="solid"
      />
      <div className="sec-head-grid" data-reveal>
        <h2 className="h2">
          Building and operating production backend systems
        </h2>
        <p className="lead">
          I build and maintain Java and Spring Boot backend systems that support
          high-availability travel technology platforms. My work spans
          microservices, REST APIs, third-party integrations, databases,
          distributed caching, concurrency, performance optimization, and
          production troubleshooting.
        </p>
      </div>
      <Carousel
        dataKey="backend"
        color="#7DD3C0"
        ariaLabel="Backend Engineering"
      >
        {backendCaps.map((c) => (
          <CapabilityCard key={c.title} cap={c} />
        ))}
      </Carousel>
    </section>
  );
}
