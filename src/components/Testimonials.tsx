import React from 'react';
import { Section } from './ui';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" eyebrow="// CH.06 · TRUSTED BY" title="Teams that chose us." variant="bordered">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
        {testimonials.map((t) => (
          <div key={t.id} className="flex flex-col gap-2 py-6 border-t border-ink-700">
            <p className="font-brutal uppercase text-xl md:text-2xl leading-[1.1] tracking-[-0.015em] text-ink-50">
              {t.company.trim()}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
              {t.name.trim()} · {t.position.trim()}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
