'use client';

import { useState } from 'react';
import { writingGroups, writingCount } from '@/data/content';
import type { Article } from '@/data/types';
import { SectionEyebrow } from '@/components/SectionHeader';
import { Banner } from '@/components/Banner';
import { chipStyle } from '@/components/Chip';
import { FilterChips, type FilterItem } from '@/components/FilterChips';

const MEDIUM_PROFILE = 'https://medium.com/@nuwanmadhusankarulz';

interface ArticleCardData {
  article: Article;
  color: string;
  subLabel: string;
}

export function Writing() {
  const [group, setGroup] = useState<string>('all');
  const [sub, setSub] = useState<string>('all');

  const activeGroup = writingGroups.find((g) => g.id === group);

  // Level 1: group chips.
  const groupFilters: FilterItem[] = [
    {
      key: 'all',
      label: 'All writing',
      color: '#E6EAF0',
      count: writingGroups.reduce((n, g) => n + writingCount(g.id), 0),
    },
    ...writingGroups.map((g) => ({
      key: g.id,
      label: g.label,
      color: g.color,
      count: writingCount(g.id),
    })),
  ];

  // Level 2: sub-section chips for the active group (hidden when "All").
  const subFilters: FilterItem[] = activeGroup
    ? [
        {
          key: 'all',
          label: 'All',
          color: activeGroup.color,
          count: writingCount(activeGroup.id),
        },
        ...activeGroup.subsections.map((s) => ({
          key: s.id,
          label: s.label,
          color: activeGroup.color,
          count: s.articles.length,
        })),
      ]
    : [];

  // Flattened, filtered cards for the single grid.
  const cards: ArticleCardData[] = [];
  writingGroups.forEach((g) => {
    if (group !== 'all' && g.id !== group) return;
    g.subsections.forEach((s) => {
      if (group !== 'all' && sub !== 'all' && s.id !== sub) return;
      s.articles.forEach((article) =>
        cards.push({ article, color: g.color, subLabel: s.label })
      );
    });
  });

  const selectGroup = (key: string) => {
    setGroup(key);
    setSub('all');
  };

  return (
    <section id="writing" className="section">
      <SectionEyebrow num="09" label="Technical writing" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '32px',
        }}
      >
        <h2 className="h2">Things I&apos;ve learned, written down</h2>
        <a
          href={MEDIUM_PROFILE}
          target="_blank"
          rel="noopener"
          style={{ fontSize: '14.5px', fontWeight: 500 }}
        >
          All articles on Medium ↗
        </a>
      </div>

      {/* Two-level filter */}
      <div style={{ display: 'grid', gap: '12px', marginBottom: '30px' }}>
        <FilterChips
          items={groupFilters}
          active={group}
          onSelect={selectGroup}
          ariaLabel="Filter articles by area"
        />
        {activeGroup && (
          <FilterChips
            items={subFilters}
            active={sub}
            onSelect={setSub}
            ariaLabel="Filter articles by sub-section"
            variant="sub"
          />
        )}
      </div>

      <div className="card-grid">
        {cards.map(({ article, color, subLabel }) => (
          <ArticleCard
            key={article.title}
            article={article}
            color={color}
            subLabel={subLabel}
          />
        ))}
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  color,
  subLabel,
}: {
  article: Article;
  color: string;
  subLabel: string;
}) {
  const meta = [article.read, article.date].filter(Boolean).join(' · ');
  return (
    <a
      href={article.href || MEDIUM_PROFILE}
      target="_blank"
      rel="noopener"
      className="article-card"
    >
      <Banner src={`/banners/${article.banner}`} />
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          flex: 1,
        }}
      >
        <span style={chipStyle(color, { alignSelf: 'flex-start' })}>
          {subLabel}
        </span>
        <h3
          style={{
            margin: 0,
            fontSize: '17px',
            lineHeight: 1.34,
            fontWeight: 600,
            letterSpacing: '-.015em',
            textWrap: 'pretty',
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            lineHeight: 1.6,
            color: '#9AA6B8',
            textWrap: 'pretty',
          }}
        >
          {article.blurb}
        </p>
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            borderTop: '1px solid rgba(255,255,255,.055)',
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: '11px',
            letterSpacing: '.05em',
            color: '#8D99AB',
          }}
        >
          <span>{meta}</span>
          <span
            style={{
              color: '#8AB4F8',
              fontFamily: 'var(--font-figtree), sans-serif',
              fontSize: '13.5px',
              fontWeight: 600,
              letterSpacing: 0,
            }}
          >
            Read Article →
          </span>
        </div>
      </div>
    </a>
  );
}
