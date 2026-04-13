import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps =
  | (CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never; to?: never })
  | (CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string; to?: never })
  | (CommonProps & { as: 'link'; to: string; href?: never; onClick?: (e: React.MouseEvent) => void; target?: string; rel?: string });

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 px-3 text-[11px]',
  md: 'h-10 px-4 text-xs',
  lg: 'h-12 px-6 text-sm',
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ink-50 text-ink-950 border-2 border-mint-500 shadow-offset ' +
    'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-offset-hover ' +
    'active:translate-x-[6px] active:translate-y-[6px] active:shadow-offset-active',
  secondary:
    'bg-transparent text-ink-50 border border-ink-300 hover:border-mint-500 hover:text-mint-500',
  ghost:
    'bg-transparent text-ink-200 hover:text-ink-50',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 ' +
  'font-mono font-medium uppercase tracking-[0.1em] whitespace-nowrap ' +
  'rounded-xs transition-all duration-base ease-brutal ' +
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', leftIcon, rightIcon, children, className = '' } = props;
  const classes = [baseClasses, sizeClasses[size], variantClasses[variant], className].join(' ');
  const content = (
    <>
      {leftIcon ? <span className="inline-flex">{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className="inline-flex">{rightIcon}</span> : null}
    </>
  );

  if (props.as === 'link') {
    const { as: _as, to, onClick, target, rel, ...rest } = props as { as: 'link'; to: string; onClick?: (e: React.MouseEvent) => void; target?: string; rel?: string } & CommonProps;
    void _as; void rest;
    return (
      <RouterLink to={to} onClick={onClick} target={target} rel={rel} className={classes}>
        {content}
      </RouterLink>
    );
  }

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, leftIcon: _li, rightIcon: _ri, className: _c, children: _ch, ...rest } = props;
    void _as; void _v; void _s; void _li; void _ri; void _c; void _ch;
    return (
      <a className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, leftIcon: _li, rightIcon: _ri, className: _c, children: _ch, ...rest } = props as CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
  void _as; void _v; void _s; void _li; void _ri; void _c; void _ch;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
