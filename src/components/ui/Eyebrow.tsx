import React from 'react';

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  withDot?: boolean;
  children: React.ReactNode;
}

export function Eyebrow({ withDot = false, className = '', children, ...rest }: EyebrowProps) {
  const classes = [
    'font-mono font-medium uppercase tracking-[0.12em] text-[11px] leading-[1.4] text-ink-400',
    'inline-flex items-center gap-2',
    className,
  ].join(' ');

  return (
    <p className={classes} {...rest}>
      {withDot ? (
        <span
          className="inline-block w-1.5 h-1.5 bg-mint-500 rounded-full animate-pulse"
          aria-hidden="true"
        />
      ) : null}
      <span>{children}</span>
    </p>
  );
}
