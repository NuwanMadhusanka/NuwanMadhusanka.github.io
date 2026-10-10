'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, RefObject } from 'react';
import {
  orderedProjects,
  projectGroups,
  projectCount,
  projectCategories,
  PROJECT_KIND,
} from '@/data/content';
import type { CategoryKey, Project } from '@/data/types';
import { SectionEyebrow } from '@/components/SectionHeader';
import { Banner } from '@/components/Banner';
import { MetricRow } from '@/components/MetricRow';
import { TechTags } from '@/components/TechTags';
import { chipStyle } from '@/components/Chip';
import { FilterChips, type FilterItem } from '@/components/FilterChips';

const monoLabel: CSSProperties = {
  fontFamily: 'var(--font-ibm-plex-mono), monospace',
  fontSize: '10px',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: '#8D99AB',
};

export function Projects() {
  const [group, setGroup] = useState<'all' | CategoryKey>('all');
  const [sub, setSub] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll to the case-study panel when it opens (offset for sticky header).
  useEffect(() => {
    if (!openId) return;
    const t = setTimeout(() => {
      const el = panelRef.current;
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 90,
          behavior: 'smooth',
        });
      }
    }, 60);
    return () => clearTimeout(t);
  }, [openId]);

  const activeGroup = projectGroups.find((g) => g.key === group);

  // Level 1: category group chips.
  const groupFilters: FilterItem[] = [
    { key: 'all', label: 'All work', color: '#E6EAF0', count: orderedProjects.length },
    ...projectGroups.map((g) => ({
      key: g.key,
      label: g.label,
      color: g.color,
      count: projectCount(g.key),
    })),
  ];

  // Level 2: sub-section chips for the active group (hidden when "All").
  const subFilters: FilterItem[] = activeGroup
    ? [
        {
          key: 'all',
          label: 'All',
          color: activeGroup.color,
          count: projectCount(activeGroup.key),
        },
        ...activeGroup.subsections.map((s) => ({
          key: s.label,
          label: s.label,
          color: activeGroup.color,
          count: s.projects.length,
        })),
      ]
    : [];

  // Flattened, filtered projects for the single grid.
  const visible: Project[] = [];
  projectGroups.forEach((g) => {
    if (group !== 'all' && g.key !== group) return;
    g.subsections.forEach((s) => {
      if (group !== 'all' && sub !== 'all' && s.label !== sub) return;
      s.projects.forEach((p) => visible.push(p));
    });
  });

  const openProject: Project | undefined = orderedProjects.find(
    (p) => p.id === openId
  );

  const toggle = (id: string) =>
    setOpenId((cur) => (cur === id ? null : id));

  const selectGroup = (key: string) => {
    setGroup(key as 'all' | CategoryKey);
    setSub('all');
  };

  return (
    <section id="projects" className="section">
      <SectionEyebrow num="05" label="Selected projects" />
      <div className="sec-head-grid" data-reveal>
        <h2 className="h2">Things I&apos;ve built</h2>
        <p className="lead">
          Production work comes first, then research and side projects. Open a
          card to read the full story, including what went wrong.
        </p>
      </div>

      {/* Two-level filter */}
      <div style={{ display: 'grid', gap: '12px', marginBottom: '34px' }}>
        <FilterChips
          items={groupFilters}
          active={group}
          onSelect={selectGroup}
          ariaLabel="Filter projects by area"
        />
        {activeGroup && (
          <FilterChips
            items={subFilters}
            active={sub}
            onSelect={setSub}
            ariaLabel="Filter projects by sub-section"
            variant="sub"
          />
        )}
      </div>

      <div className="card-grid">
        {visible.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            isOpen={openId === p.id}
            onToggle={() => toggle(p.id)}
          />
        ))}
      </div>

      {/* Case study panel */}
      {openProject && (
        <CaseStudyPanel
          key={openProject.id}
          project={openProject}
          panelRef={panelRef}
          onClose={() => setOpenId(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({
  project: p,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const color = projectCategories[p.cat].color;
  const catLabel = p.catLabel || projectCategories[p.cat].label;
  const kind = PROJECT_KIND[p.id] || '';
  return (
    <article
      className="project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${isOpen ? color + '40' : 'rgba(255,255,255,.075)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'rgba(19,26,35,.55)',
        transition:
          'border-color .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s cubic-bezier(.2,.7,.2,1), transform .3s cubic-bezier(.2,.7,.2,1)',
        minWidth: 0,
        height: '100%',
        boxShadow: isOpen ? `0 0 0 1px ${color}55` : undefined,
      }}
    >
      <Banner src={`/banners/project-${p.id}.svg`} />
      <div
        style={{
          padding: '22px 22px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          flex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <span style={chipStyle(color)}>{catLabel}</span>
          {kind && <span style={monoLabel}>{kind}</span>}
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: '19px',
            lineHeight: 1.3,
            fontWeight: 600,
            letterSpacing: '-.018em',
          }}
        >
          {p.title}
        </h3>
        <p className="card-body" style={{ fontSize: '14.5px' }}>
          {p.summary}
        </p>
        {p.metrics && p.metrics.length > 0 && <MetricRow metrics={p.metrics} />}
        {p.techLabel && (
          <div
            style={{
              fontFamily: 'var(--font-ibm-plex-mono), monospace',
              fontSize: '10.5px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: '#8D99AB',
              marginBottom: '-6px',
            }}
          >
            {p.techLabel}
          </div>
        )}
        <TechTags tags={p.tech} size="sm" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: 'auto',
            paddingTop: '6px',
          }}
        >
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            className="case-link"
          >
            {isOpen ? 'Hide case study' : 'Read case study'}
            <span
              style={{
                display: 'inline-block',
                fontSize: '12px',
                transition: 'transform .25s',
                transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
              }}
            >
              ↓
            </span>
          </button>
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener"
              className="subtle-link"
              style={{ fontSize: '14px' }}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function CaseStudyPanel({
  project,
  panelRef,
  onClose,
}: {
  project: Project;
  panelRef: RefObject<HTMLDivElement>;
  onClose: () => void;
}) {
  const color = projectCategories[project.cat].color;
  const catLabel = project.catLabel || projectCategories[project.cat].label;
  const kind = PROJECT_KIND[project.id] || '';

  return (
    <div
      ref={panelRef}
      data-case-panel="1"
      role="region"
      aria-label="Case study"
      style={{
        marginTop: '24px',
        border: `1px solid ${color}40`,
        borderRadius: '16px',
        background: `linear-gradient(180deg,${color}0d,rgba(11,15,20,.7) 40%)`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '24px 24px 20px',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <div style={{ minWidth: 0, flex: '1 1 320px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <span style={chipStyle(color)}>{catLabel}</span>
            {kind && <span style={monoLabel}>{kind}</span>}
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: 'clamp(20px,2.2vw,24px)',
              lineHeight: 1.25,
              fontWeight: 600,
              letterSpacing: '-.02em',
              textWrap: 'balance',
            }}
          >
            {project.title}
          </h3>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener"
              className="subtle-link"
              style={{ fontSize: '14px' }}
            >
              GitHub ↗
            </a>
          )}
          <button type="button" onClick={onClose} className="hide-case-btn">
            Hide case study <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>

      <div
        style={{
          padding: '26px 24px 30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
          gap: '28px 44px',
        }}
      >
        {project.detail.map((d, i) => (
          <div key={`${d.heading}-${i}`}>
            <div
              style={{
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontSize: '10.5px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: '#7DD3C0',
                marginBottom: '9px',
              }}
            >
              {d.heading}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '14.5px',
                lineHeight: 1.7,
                color: '#9AA6B8',
                textWrap: 'pretty',
              }}
            >
              {d.body}
            </p>
            {d.body2 && (
              <p
                style={{
                  margin: '10px 0 0',
                  fontSize: '14.5px',
                  lineHeight: 1.7,
                  color: '#9AA6B8',
                  textWrap: 'pretty',
                }}
              >
                {d.body2}
              </p>
            )}
            {d.list && d.list.length > 0 && (
              <div style={{ display: 'grid', gap: '7px', marginTop: '10px' }}>
                {d.list.map((li, j) => (
                  <div
                    key={j}
                    style={{ display: 'flex', gap: '11px', alignItems: 'flex-start' }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#7DD3C0',
                        opacity: 0.7,
                        display: 'block',
                        flex: 'none',
                        marginTop: '9px',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.62,
                        color: '#9AA6B8',
                        textWrap: 'pretty',
                      }}
                    >
                      {li}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {d.after && (
              <p
                style={{
                  margin: '10px 0 0',
                  fontSize: '14.5px',
                  lineHeight: 1.7,
                  color: '#9AA6B8',
                  textWrap: 'pretty',
                }}
              >
                {d.after}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
