import React from 'react';

type Variant = 'default' | 'accent' | 'outline';
type Size = 'sm' | 'md';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-ink-800 text-ink-200',
  accent: 'bg-mint-500 text-ink-950',
  outline: 'border border-ink-700 text-ink-300 bg-transparent',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-5 px-1.5 text-[10px]',
  md: 'h-6 px-2 text-[11px]',
};

export function Badge({ variant = 'default', size = 'md', className = '', children, ...rest }: BadgeProps) {
  const classes = [
    'inline-flex items-center font-mono font-medium uppercase tracking-[0.1em]',
    'rounded-xs whitespace-nowrap',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');
  return <span className={classes} {...rest}>{children}</span>;
}
