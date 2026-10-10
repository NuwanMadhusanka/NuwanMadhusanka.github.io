export interface HeroPillar {
  label: string;
  color: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface Pillar {
  num: string;
  title: string;
  tag: string;
  lead: string;
  tech: string[];
  href: string;
}

export interface Capability {
  title: string;
  body: string;
  evidence: string;
}

export interface CloudFlowStep {
  idx: string;
  arrow: string;
  label: string;
  tools: string;
}

export interface AiPathCard {
  title: string;
  body: string;
  tech: string;
}

export interface TimelineEntry {
  period: string;
  org: string;
  role: string;
  intro: string;
  points: string[];
}

export interface ContactRow {
  label: string;
  value: string;
  href: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Sections {
  heroPillars: HeroPillar[];
  heroStats: HeroStat[];
  pillars: Pillar[];
  backendCaps: Capability[];
  cloudFlow: CloudFlowStep[];
  cloudCaps: Capability[];
  aiPath: AiPathCard[];
  certTech: string[];
  timeline: TimelineEntry[];
  contactRows: ContactRow[];
  navLinks: NavLink[];
}

export interface ProjectCategory {
  label: string;
  color: string;
}

export type CategoryKey = 'backend' | 'cloud' | 'ai';

export interface Metric {
  value: string;
  label: string;
}

export interface DetailBlock {
  heading: string;
  body: string;
  body2?: string;
  list?: string[];
  after?: string;
}

export interface Project {
  id: string;
  cat: CategoryKey;
  /** Sub-section this project belongs to within its category group (section 05). */
  subsection: string;
  featured?: boolean;
  catLabel?: string;
  title: string;
  summary: string;
  techLabel?: string;
  tech: string[];
  metrics?: Metric[];
  repo?: string;
  slotHint?: string;
  detail: DetailBlock[];
}

export interface Article {
  /** Display order within the sub-section (1-based). */
  order: number;
  title: string;
  blurb: string;
  read: string;
  date: string;
  href?: string;
  /** Banner SVG filename under /public/banners. */
  banner: string;
}

export interface WritingSubsection {
  id: string;
  label: string;
  articles: Article[];
}

export interface WritingGroup {
  id: string;
  label: string;
  color: string;
  subsections: WritingSubsection[];
}

export interface Writing {
  groups: WritingGroup[];
}

export interface Content {
  sections: Sections;
  projectCategories: Record<CategoryKey, ProjectCategory>;
  projectOrder: string[];
  projects: Project[];
  writing: Writing;
}
