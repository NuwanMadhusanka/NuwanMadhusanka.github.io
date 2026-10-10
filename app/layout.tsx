import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Figtree, IBM_Plex_Mono } from 'next/font/google';
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
