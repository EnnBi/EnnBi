import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'full';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  children: React.ReactNode;
}

const sizeClasses: Record<Size, string> = {
  sm: 'max-w-2xl',      // 672
  md: 'max-w-5xl',      // 1024
  lg: 'max-w-7xl',      // 1280
  full: 'max-w-none',
};

export function Container({ size = 'lg', className = '', children, ...rest }: ContainerProps) {
  const classes = ['mx-auto w-full px-6 md:px-8', sizeClasses[size], className].join(' ');
  return <div className={classes} {...rest}>{children}</div>;
}
