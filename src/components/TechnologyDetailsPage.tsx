import React, { useEffect, useMemo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Section, Card, Badge, Eyebrow } from './ui';
import { technologyDetails } from '../data/technologies';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const TechnologyDetailsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (!target) return;
    const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [location.hash]);

  const groups = useMemo(() => {
    return technologyDetails.map((t) => ({ ...t, slug: toSlug(t.name) }));
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-200 font-plex flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <Section eyebrow="// TECHNOLOGIES · ALL ENTRIES" title="The full stack, in detail." containerSize="lg">
          <p className="font-plex text-lg text-ink-300 max-w-2xl">
            Every technology we&apos;ve shipped in production, with a one-liner on what it
            does and two concrete places we&apos;ve used it. Click into any row on the
            homepage stack grid to land here.
          </p>
        </Section>

        <Section variant="bordered" containerSize="lg" className="pt-0 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groups.map((t, i) => (
              <Card key={t.slug} id={t.slug} variant="filled" padding="lg" className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="font-brutal uppercase text-[1.75rem] leading-none text-mint-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Badge variant="outline" size="sm">Stack</Badge>
                </div>
                <h2 className="font-brutal uppercase text-2xl leading-[1.1] tracking-[-0.015em] text-ink-50">
                  {t.name}
                </h2>
                <p className="font-plex text-[0.9375rem] leading-[1.55] text-ink-300">
                  {t.description}
                </p>
                <div className="mt-auto pt-4 border-t border-ink-700">
                  <Eyebrow className="mb-3">// EXAMPLES</Eyebrow>
                  <ul className="space-y-2">
                    {t.examples.map((e) => (
                      <li key={e} className="flex items-start gap-3 font-plex text-sm text-ink-200">
                        <span className="text-mint-500 mt-0.5">→</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-ink-700">
            <RouterLink
              to="/"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300 hover:text-mint-500 transition-colors"
            >
              ← Back home
            </RouterLink>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyDetailsPage;
