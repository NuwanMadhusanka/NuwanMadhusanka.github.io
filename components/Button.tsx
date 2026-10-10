import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

/**
 * Link-styled button. Primary = solid #E6EAF0 with dark text; secondary =
 * outlined. Minimum height 44px (enforced in globals.css).
 */
export function ButtonLink({
  variant = 'primary',
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <a className={className ? `${base} ${className}` : base} {...rest}>
      {children}
    </a>
  );
}
