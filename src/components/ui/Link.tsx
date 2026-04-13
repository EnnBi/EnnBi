import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Variant = 'default' | 'accent' | 'inline';

interface BaseLinkProps {
  variant?: Variant;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

type LinkProps =
  | (BaseLinkProps & { to: string; href?: never })
  | (BaseLinkProps & { href: string; to?: never });

const variantClasses: Record<Variant, string> = {
  default:
    'text-ink-200 hover:text-ink-50 underline-offset-4 decoration-ink-600 hover:decoration-mint-500 underline transition-colors duration-base ease-brutal',
  accent:
    'text-mint-500 underline underline-offset-4 decoration-mint-500/70 hover:decoration-mint-500 transition-colors duration-base ease-brutal',
  inline:
    'relative inline text-inherit transition-colors duration-base ease-brutal ' +
    'bg-gradient-to-r from-mint-500 to-mint-500 bg-no-repeat [background-size:0%_1px] [background-position:0_100%] ' +
    'hover:[background-size:100%_1px]',
};

export function Link(props: LinkProps) {
  const { variant = 'default', external, className = '', children, onClick } = props;
  const classes = [variantClasses[variant], className].join(' ');
  const externalProps = external ? { target: '_blank', rel: 'noreferrer noopener' } : {};

  if ('to' in props && props.to !== undefined) {
    return (
      <RouterLink to={props.to} onClick={onClick} className={classes} {...externalProps}>
        {children}
      </RouterLink>
    );
  }

  const href = (props as { href: string }).href;
  return (
    <a href={href} onClick={onClick} className={classes} {...externalProps}>
      {children}
    </a>
  );
}
