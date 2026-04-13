import React from 'react';
import { Section, Card, Badge } from './ui';
import { projects } from '../data';

const Work: React.FC = () => {
  return (
    <Section id="work" eyebrow="// CH.04 · SELECTED WORK" title="Things we've shipped." variant="bordered">
      <p className="font-plex text-lg text-ink-300 max-w-2xl mb-12">
        A short list of platforms we&apos;ve built or co-built with product teams across
        fintech, healthcare, retail, and AI. Details on request — most engagements are
        under NDA.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <Card key={p.id} variant="outlined" padding="lg" interactive className="group flex flex-col gap-5 min-h-[280px]">
            <div className="flex items-start justify-between">
              <span className="font-brutal uppercase text-[3rem] leading-none text-ink-50 group-hover:text-mint-500 transition-colors duration-base">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                CASE · {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div>
              <h3 className="font-brutal uppercase text-xl md:text-2xl leading-[1.1] tracking-[-0.015em] text-ink-50 break-words hyphens-auto">
                {p.title}
              </h3>
              <p className="mt-3 font-plex text-sm leading-relaxed text-ink-300">
                {p.description}
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-ink-700">
              {p.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Work;
