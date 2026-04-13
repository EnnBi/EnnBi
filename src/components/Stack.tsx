import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Section } from './ui';
import { technologyColumns } from '../data/technologies';

const columnTitles = ['Emerging Tech', 'Languages & Engineering', 'Platforms'];

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Stack: React.FC = () => {
  return (
    <Section id="stack" eyebrow="// CH.03 · STACK" title="The tools we reach for." variant="bordered">
      <p className="font-plex text-lg text-ink-300 max-w-2xl mb-12 md:mb-16">
        We match the stack to the problem, not the fashion. Across 30+ engagements we&apos;ve
        shipped in every column below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {technologyColumns.map((column, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ink-700">
              <span className="font-brutal uppercase text-mint-500 text-lg">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300">
                {columnTitles[i]}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {column.map((item) => (
                <li key={item}>
                  <RouterLink
                    to={`/technologies#${toSlug(item)}`}
                    className="group flex items-baseline gap-3 font-plex text-[0.9375rem] text-ink-200 hover:text-mint-500 transition-colors duration-base ease-brutal"
                  >
                    <span className="text-mint-500 font-mono text-xs transition-transform duration-base ease-brutal group-hover:translate-x-0.5">
                      —
                    </span>
                    <span>{item}</span>
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-ink-700">
        <RouterLink
          to="/technologies"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300 hover:text-mint-500 transition-colors"
        >
          See all technologies in detail →
        </RouterLink>
      </div>
    </Section>
  );
};

export default Stack;
