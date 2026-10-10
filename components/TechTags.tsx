/**
 * Tech tag rows. `size="sm"` is the smaller variant used on project cards
 * (10.5px, 4px 9px, radius 5), the default is the pillar/cert variant
 * (11px, 5px 10px, radius 6).
 */
export function TechTags({
  tags,
  size = 'md',
}: {
  tags: string[];
  size?: 'md' | 'sm';
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {tags.map((t) => (
        <span key={t} className={size === 'sm' ? 'tech-tag-sm' : 'tech-tag'}>
          {t}
        </span>
      ))}
    </div>
  );
}
