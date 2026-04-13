import React from 'react';

type Padding = 'sm' | 'md' | 'lg';
type Variant = 'default' | 'outlined' | 'filled';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: Padding;
  variant?: Variant;
  interactive?: boolean;
  children: React.ReactNode;
}

const paddingClasses: Record<Padding, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantClasses: Record<Variant, string> = {
  default: 'bg-ink-900 border border-ink-700',
  outlined: 'bg-transparent border border-ink-300',
  filled: 'bg-ink-800 border border-ink-700',
};

export function Card({ padding = 'md', variant = 'default', interactive = false, className = '', children, ...rest }: CardProps) {
  const classes = [
    variantClasses[variant],
    paddingClasses[padding],
    'rounded-xs transition-colors duration-base ease-brutal',
    interactive ? 'cursor-pointer hover:border-mint-500' : '',
    className,
  ].filter(Boolean).join(' ');

  return <div className={classes} {...rest}>{children}</div>;
}
