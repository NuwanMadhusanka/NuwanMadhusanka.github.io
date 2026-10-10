import raw from './content.json';
import type {
  Content,
  CategoryKey,
  Project,
  WritingGroup,
} from './types';

export const content = raw as unknown as Content;

export const {
  sections,
  projectCategories,
  projectOrder,
  projects,
  writing,
} = content;

/**
 * Project "kind" labels - taken verbatim from the reference KIND map.
 * These are not in content.json, so they are declared here.
 */
export const PROJECT_KIND: Record<string, string> = {
  dbmigration: 'Production',
  tritiumtool: 'Production',
  logging: 'Production',
  headpose: 'Research',
  vthreads: 'Exploration',
  specdriven: 'Exploration',
  realestate: 'Personal',
  sports: 'Personal',
  mlnotebooks: 'Personal',
  fortifystack: 'Personal',
};

/** Projects resolved in display order. */
export const orderedProjects: Project[] = projectOrder
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p));

/** Category color lookup helper. */
export const catColor = (cat: CategoryKey): string =>
  projectCategories[cat].color;

/**
 * Projects grouped by category, then by sub-section (section 05).
 * Sub-section order follows the first appearance of each label in
 * `projectOrder`; projects inside a sub-section keep `projectOrder` too.
 */
export interface ProjectSubsection {
  label: string;
  projects: Project[];
}
export interface ProjectGroup {
  key: CategoryKey;
  label: string;
  color: string;
  subsections: ProjectSubsection[];
}

export const projectGroups: ProjectGroup[] = (
  Object.keys(projectCategories) as CategoryKey[]
).map((key) => {
  const inCat = orderedProjects.filter((p) => p.cat === key);
  const subsections: ProjectSubsection[] = [];
  inCat.forEach((p) => {
    let sub = subsections.find((s) => s.label === p.subsection);
    if (!sub) {
      sub = { label: p.subsection, projects: [] };
      subsections.push(sub);
    }
    sub.projects.push(p);
  });
  return {
    key,
    label: projectCategories[key].label,
    color: projectCategories[key].color,
    subsections,
  };
});

/** Count of projects in a category group. */
export const projectCount = (key: CategoryKey): number =>
  orderedProjects.filter((p) => p.cat === key).length;

/**
 * Writing groups with each sub-section's articles pre-sorted by `order`
 * (section 09).
 */
export const writingGroups: WritingGroup[] = writing.groups.map((g) => ({
  ...g,
  subsections: g.subsections.map((s) => ({
    ...s,
    articles: [...s.articles].sort((a, b) => a.order - b.order),
  })),
}));

/** Count of articles in a writing group. */
export const writingCount = (groupId: string): number => {
  const g = writingGroups.find((x) => x.id === groupId);
  return g ? g.subsections.reduce((n, s) => n + s.articles.length, 0) : 0;
};
