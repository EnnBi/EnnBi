import React from 'react';
import { Section, Card } from './ui';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" eyebrow="// CH.06 · CLIENT WORD" title="Said about us." variant="bordered">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <Card key={t.id} variant="filled" padding="lg" className="flex flex-col gap-6 min-h-[280px]">
            <span
              aria-hidden
              className="font-brutal text-[4rem] leading-none text-mint-500 -ml-1"
            >
              &ldquo;
            </span>
            <p className="font-plex text-[1.0625rem] leading-[1.55] text-ink-100 flex-1">
              {t.quote}
            </p>
            <div className="pt-5 border-t border-ink-700">
              <p className="font-brutal uppercase text-base text-ink-50 leading-tight">
                {t.name.trim()}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                {t.position.trim()} · {t.company.trim()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
