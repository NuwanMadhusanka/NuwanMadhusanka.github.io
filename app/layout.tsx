import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Figtree, IBM_Plex_Mono } from 'next/font/google';
import { ScrollReveal } from '@/components/ScrollReveal';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const SITE_URL = 'https://nuwanmadhusanka.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Nuwan Madhusanka - Senior Software Engineer | Backend, AWS Cloud & Generative AI',
  description:
    'Nuwan Madhusanka is a Senior Software Engineer in Colombo, Sri Lanka building production backend systems in Java and Spring Boot, AWS Certified Solutions Architect, applying machine learning, generative AI, RAG and agentic AI.',
  openGraph: {
    title: 'Nuwan Madhusanka - Senior Software Engineer',
    description:
      'Backend engineering, AWS & cloud architecture, ML, generative AI and agentic AI.',
    type: 'website',
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nuwan Madhusanka',
  jobTitle: 'Senior Software Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Colombo',
    addressCountry: 'Sri Lanka',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'CodeGen International',
  },
  url: SITE_URL,
  sameAs: [
    'https://github.com/NuwanMadhusanka',
    'https://www.linkedin.com/in/nuwan98/',
    'https://medium.com/@nuwanmadhusankarulz',
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${ibmPlexMono.variable}`}>
      <head>
        {/* Without JS, force every "Show more" region open and hide its toggle
            so 100% of the content stays visible to readers and crawlers. */}
        <noscript>
          <style>{`.collapsible{grid-template-rows:1fr!important;opacity:1!important}.show-more-btn{display:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {/* Enable scroll-reveal only when JS + IntersectionObserver + motion
            are available. Runs before the page paints so revealed content
            never flashes; the 4s fallback guarantees content can never stay
            hidden if the app bundle fails to load. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var d=document.documentElement;var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm&&'IntersectionObserver'in window){d.classList.add('reveal-ready');setTimeout(function(){d.classList.add('reveal-fallback');},4000);}}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
