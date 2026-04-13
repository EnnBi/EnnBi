import React from 'react';
import { Button, Eyebrow } from './ui';

const stats = [
  { value: '2022', label: 'Founded' },
  { value: '30+',  label: 'Projects shipped' },
  { value: '12',   label: 'Industries' },
  { value: '∞',    label: 'Timezones served' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-ink-950 text-ink-50 overflow-hidden pt-24 md:pt-32 pb-12"
    >
      {/* Grid texture backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--ink-300) 1px, transparent 1px), linear-gradient(to right, var(--ink-300) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 flex flex-col min-h-[calc(100vh-6rem)]">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4">
          <Eyebrow withDot>SYSTEMS · OPERATIONAL · SRINAGAR → WORLDWIDE</Eyebrow>
          <span className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.12em]">
            CH.01 · THE WORK
          </span>
        </div>

        {/* Headline block */}
        <div className="flex-1 flex flex-col justify-center py-16 md:py-24">
          <h1 className="font-brutal uppercase text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-ink-50">
            CUSTOM
            <br />
            SOFTWARE.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-ink-950 px-3">SHIPPED.</span>
              <span className="absolute inset-0 bg-mint-500" aria-hidden />
            </span>
          </h1>

          <p className="mt-10 max-w-2xl font-plex text-[1.125rem] md:text-xl leading-[1.5] text-ink-300">
            A global engineering studio headquartered in Srinagar, India. We partner with
            product teams worldwide to build custom platforms, mobile apps, cloud
            infrastructure, and AI-driven systems — without the fluff.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button as="a" href="#contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button as="a" href="#work" variant="secondary" size="lg">
              Selected Work →
            </Button>
          </div>
        </div>

        {/* Stat strip */}
        <div className="border-t border-ink-700 pt-8 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-brutal uppercase text-[2.5rem] md:text-[3rem] leading-[0.95] text-ink-50">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] md:text-[11px] text-ink-400 uppercase tracking-[0.14em]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
