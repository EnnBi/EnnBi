import React from 'react';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';

type Variant = 'default' | 'bordered';

interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  id?: string;
  eyebrow?: string;
  title?: string;
  variant?: Variant;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  variant = 'default',
  containerSize = 'lg',
  className = '',
  children,
  ...rest
}: SectionProps) {
  const classes = [
    'py-24 md:py-32',
    variant === 'bordered' ? 'border-t border-ink-700' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={classes} {...rest}>
      <Container size={containerSize}>
        {eyebrow || title ? (
          <header className="mb-12 md:mb-16">
            {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
            {title ? (
              <h2 className="font-brutal uppercase text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] text-ink-50">
                {title}
              </h2>
            ) : null}
          </header>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
