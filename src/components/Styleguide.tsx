import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Badge,
  Input,
  Textarea,
  Section,
  Container,
  Eyebrow,
  Link as UiLink,
} from './ui';

const inkScale = [
  { name: 'ink-950', value: '#050505', use: 'page bg' },
  { name: 'ink-900', value: '#0a0a0a', use: 'primary surface' },
  { name: 'ink-800', value: '#141414', use: 'elevated surface' },
  { name: 'ink-700', value: '#1f1f1f', use: 'hairlines' },
  { name: 'ink-600', value: '#2e2e2e', use: 'strong borders' },
  { name: 'ink-500', value: '#525252', use: 'tertiary text' },
  { name: 'ink-400', value: '#737373', use: 'labels' },
  { name: 'ink-300', value: '#a3a3a3', use: 'secondary body' },
  { name: 'ink-200', value: '#d4d4d4', use: 'primary body' },
  { name: 'ink-100', value: '#ededed', use: 'emphasized body' },
  { name: 'ink-50',  value: '#fafafa', use: 'highest contrast' },
];

const mintScale = [
  { name: 'mint-900', value: '#042f2e', use: 'deep accent' },
  { name: 'mint-700', value: '#0f766e', use: 'accent shade' },
  { name: 'mint-500', value: '#14b8a6', use: 'canonical accent' },
  { name: 'mint-300', value: '#5eead4', use: 'hover lighten' },
  { name: 'mint-100', value: '#ccfbf1', use: 'subtle fill' },
];

const signals = [
  { name: 'success', value: '#22c55e' },
  { name: 'warning', value: '#f59e0b' },
  { name: 'danger',  value: '#ef4444' },
  { name: 'info',    value: '#14b8a6' },
];

const typeSamples = [
  { token: 'display-xl', className: 'font-brutal uppercase text-[6rem] leading-[0.95] tracking-[-0.02em]', spec: '6rem / 0.95 / Archivo Black', sample: 'ENNBI' },
  { token: 'display-lg', className: 'font-brutal uppercase text-[4.5rem] leading-[0.95] tracking-[-0.02em]', spec: '4.5rem / 0.95 / Archivo Black', sample: 'BRUTAL TYPE' },
  { token: 'display-md', className: 'font-brutal uppercase text-[3.5rem] leading-[1.0] tracking-[-0.02em]', spec: '3.5rem / 1.0 / Archivo Black', sample: 'SECTION OPENER' },
  { token: 'display-sm', className: 'font-brutal uppercase text-[2.5rem] leading-[1.05] tracking-[-0.02em]', spec: '2.5rem / 1.05 / Archivo Black', sample: 'SMALLER TITLE' },
  { token: 'heading-xl', className: 'font-brutal uppercase text-[2rem] leading-[1.15]', spec: '2rem / 1.15 / Archivo Black', sample: 'CARD TITLE' },
  { token: 'heading-lg', className: 'font-brutal uppercase text-[1.5rem] leading-[1.2]', spec: '1.5rem / 1.2 / Archivo Black', sample: 'PANEL HEADING' },
  { token: 'heading-md', className: 'font-plex font-bold text-[1.125rem] leading-[1.3]', spec: '1.125rem / 1.3 / Plex Bold', sample: 'Sub-heading with mixed case' },
  { token: 'heading-sm', className: 'font-plex font-bold text-base leading-[1.4]', spec: '1rem / 1.4 / Plex Bold', sample: 'Smallest heading' },
  { token: 'body-lg',    className: 'font-plex text-[1.125rem] leading-[1.5]', spec: '1.125rem / 1.5 / Plex Regular', sample: 'Lead paragraph. Engineering-grade software, delivered with rigor by senior teams.' },
  { token: 'body-md',    className: 'font-plex text-[0.9375rem] leading-[1.55]', spec: '0.9375rem / 1.55 / Plex Regular', sample: 'Default body. The base we set most copy in across the site.' },
  { token: 'body-sm',    className: 'font-plex text-[0.8125rem] leading-[1.55]', spec: '0.8125rem / 1.55 / Plex Regular', sample: 'Dense body text. Tables, meta information, captions.' },
  { token: 'caption',    className: 'font-plex text-xs leading-[1.5]', spec: '0.75rem / 1.5 / Plex Regular', sample: 'Footnote caption' },
  { token: 'label',      className: 'font-mono font-medium uppercase tracking-[0.12em] text-[11px] leading-[1.4]', spec: '11px / 1.4 / Plex Mono 500', sample: '// EYEBROW LABEL' },
  { token: 'code',       className: 'font-mono text-sm leading-[1.5]', spec: '0.875rem / 1.5 / Plex Mono 400', sample: 'const x = 42;' },
];

const spacingScale = [4, 8, 16, 24, 32, 48, 64, 96];

const navItems = [
  { href: '#intro', label: 'Intro' },
  { href: '#color', label: 'Color' },
  { href: '#type', label: 'Typography' },
  { href: '#spacing', label: 'Spacing & Radius' },
  { href: '#shadows', label: 'Shadows' },
  { href: '#borders', label: 'Borders' },
  { href: '#buttons', label: 'Buttons' },
  { href: '#cards', label: 'Cards' },
  { href: '#badges', label: 'Badges' },
  { href: '#inputs', label: 'Inputs' },
  { href: '#scaffold', label: 'Scaffold' },
  { href: '#eyebrow', label: 'Eyebrow' },
  { href: '#link', label: 'Link' },
  { href: '#motion', label: 'Motion' },
];

const ChipCopy: React.FC<{ value: string }> = ({ value }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fail silently in non-secure contexts
    }
  };
  return (
    <button
      onClick={copy}
      className="font-mono text-[11px] text-ink-400 hover:text-mint-500 uppercase tracking-[0.08em] transition-colors"
      type="button"
    >
      {copied ? 'copied' : value}
    </button>
  );
};

function Swatch({ name, value, use }: { name: string; value: string; use?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-16 rounded-xs border border-ink-700" style={{ background: value }} />
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] text-ink-200 uppercase tracking-[0.08em]">{name}</span>
        <ChipCopy value={value} />
        {use ? <span className="font-plex text-[11px] text-ink-500">{use}</span> : null}
      </div>
    </div>
  );
}

const Styleguide: React.FC = () => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = 'var(--ink-950)';
    document.body.style.color = 'var(--ink-200)';
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-200 font-plex">
      <div className="md:grid md:grid-cols-[240px_1fr] md:gap-0">
        {/* Left nav */}
        <aside className="md:sticky md:top-0 md:h-screen border-b md:border-b-0 md:border-r border-ink-700 bg-ink-900 p-6 md:overflow-y-auto">
          <div className="mb-6">
            <Eyebrow withDot>// DESIGN SYSTEM v0.1</Eyebrow>
            <p className="mt-3 font-brutal uppercase text-[1.25rem] leading-[1.1] text-ink-50">EnnBi Brutal</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400 hover:text-mint-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="p-6 md:p-12 lg:p-16">
          {/* Intro */}
          <section id="intro" className="mb-20">
            <Eyebrow withDot className="mb-6">// DESIGN SYSTEM v0.1 · 2026-04-13</Eyebrow>
            <h1 className="font-brutal uppercase text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-ink-50 mb-6">
              BRUTAL. DARK.<br />ENGINEERED.
            </h1>
            <p className="font-plex text-[1.125rem] leading-[1.5] text-ink-300 max-w-2xl">
              A minimal, dark, engineering-first design language for EnnBi. Tokens,
              primitives, and scaffolding live here. Pages compose this system —
              they don&apos;t reinvent it.
            </p>
          </section>

          {/* Color */}
          <section id="color" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Color</h2>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-4">Ink (neutrals)</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4 mb-10">
              {inkScale.map((c) => <Swatch key={c.name} {...c} />)}
            </div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-4">Accent (mint)</h3>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-4 mb-10">
              {mintScale.map((c) => <Swatch key={c.name} {...c} />)}
            </div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-4">Signal</h3>
            <div className="grid grid-cols-4 gap-4">
              {signals.map((c) => <Swatch key={c.name} {...c} />)}
            </div>
          </section>

          {/* Typography */}
          <section id="type" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Typography</h2>
            <div className="space-y-8">
              {typeSamples.map((t) => (
                <div key={t.token} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 pb-8 border-b border-ink-700">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mint-500">{t.token}</span>
                    <span className="font-mono text-[10px] text-ink-500">{t.spec}</span>
                  </div>
                  <div className={`text-ink-50 ${t.className}`}>{t.sample}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Spacing & Radius */}
          <section id="spacing" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Spacing &amp; Radius</h2>
            <div className="mb-10">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-4">4px Rhythm</h3>
              <div className="flex flex-col gap-2">
                {spacingScale.map((s) => (
                  <div key={s} className="flex items-center gap-4">
                    <span className="font-mono text-xs text-ink-400 w-12">{s}px</span>
                    <div className="h-4 bg-mint-500" style={{ width: `${s * 2}px` }} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-4">Radius: 2px everywhere</h3>
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-ink-800 border border-ink-300 rounded-xs flex items-center justify-center font-mono text-xs text-ink-300">2px</div>
                <div className="w-24 h-24 bg-ink-800 border border-ink-300 rounded-none flex items-center justify-center font-mono text-xs text-ink-500">none</div>
              </div>
            </div>
          </section>

          {/* Shadows */}
          <section id="shadows" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Shadows</h2>
            <p className="font-plex text-sm text-ink-400 mb-8 max-w-2xl">
              Flat by default. The hard offset shadow is reserved for primary CTAs only,
              paired with a press-down translate on hover and active.
            </p>
            <div className="flex flex-wrap items-end gap-12">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center justify-center h-10 px-4 bg-ink-50 text-ink-950 border-2 border-mint-500 shadow-offset font-mono text-xs uppercase tracking-[0.1em] rounded-xs">
                  Rest
                </div>
                <span className="font-mono text-[10px] text-ink-500">6px 6px 0 mint</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center justify-center h-10 px-4 bg-ink-50 text-ink-950 border-2 border-mint-500 shadow-offset-hover translate-x-[3px] translate-y-[3px] font-mono text-xs uppercase tracking-[0.1em] rounded-xs">
                  Hover
                </div>
                <span className="font-mono text-[10px] text-ink-500">3px 3px 0 mint + translate</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center justify-center h-10 px-4 bg-ink-50 text-ink-950 border-2 border-mint-500 translate-x-[6px] translate-y-[6px] font-mono text-xs uppercase tracking-[0.1em] rounded-xs">
                  Active
                </div>
                <span className="font-mono text-[10px] text-ink-500">flush · translated 6px</span>
              </div>
            </div>
          </section>

          {/* Borders */}
          <section id="borders" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Borders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-ink-900 border border-ink-700 rounded-xs">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-300">border-default · ink-700</span>
              </div>
              <div className="p-6 bg-ink-900 border border-ink-300 rounded-xs">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-300">border-strong · ink-300</span>
              </div>
              <div className="p-6 bg-ink-900 border border-mint-500 rounded-xs">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-300">border-accent · mint-500</span>
              </div>
              <div className="p-6 bg-ink-900 border-2 border-mint-500 rounded-xs">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-300">border-thick · 2px mint-500</span>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section id="buttons" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Buttons</h2>
            <div className="space-y-10">
              {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
                <div key={variant}>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-4">{variant}</h3>
                  <div className="flex flex-wrap items-end gap-6">
                    <Button variant={variant} size="sm">Small</Button>
                    <Button variant={variant} size="md">Medium</Button>
                    <Button variant={variant} size="lg">Large</Button>
                    <Button variant={variant} disabled>Disabled</Button>
                  </div>
                </div>
              ))}
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-4">polymorphic</h3>
                <div className="flex flex-wrap items-end gap-6">
                  <Button as="a" href="#intro" variant="secondary">As anchor →</Button>
                  <Button as="link" to="/styleguide" variant="ghost">As router link →</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Cards */}
          <section id="cards" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <Eyebrow>default</Eyebrow>
                <h3 className="font-brutal uppercase text-xl text-ink-50 mt-4 mb-2">Panel</h3>
                <p className="text-sm text-ink-300">Base card on ink-900 with hairline border.</p>
              </Card>
              <Card variant="outlined">
                <Eyebrow>outlined</Eyebrow>
                <h3 className="font-brutal uppercase text-xl text-ink-50 mt-4 mb-2">Panel</h3>
                <p className="text-sm text-ink-300">Transparent background, stronger border.</p>
              </Card>
              <Card variant="filled">
                <Eyebrow>filled</Eyebrow>
                <h3 className="font-brutal uppercase text-xl text-ink-50 mt-4 mb-2">Panel</h3>
                <p className="text-sm text-ink-300">Slight elevation on ink-800.</p>
              </Card>
            </div>
            <Card interactive>
              <Eyebrow>interactive · hover me</Eyebrow>
              <h3 className="font-brutal uppercase text-xl text-ink-50 mt-4 mb-2">Clickable panel</h3>
              <p className="text-sm text-ink-300">Border shifts to mint on hover.</p>
            </Card>
          </section>

          {/* Badges */}
          <section id="badges" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Badges</h2>
            <div className="flex flex-wrap gap-3">
              <Badge>// est. 2022</Badge>
              <Badge variant="accent">new</Badge>
              <Badge variant="outline">draft</Badge>
              <Badge size="sm">small</Badge>
              <Badge size="md">medium</Badge>
              <Badge variant="accent" size="sm">live</Badge>
            </div>
          </section>

          {/* Inputs */}
          <section id="inputs" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Inputs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <Input label="Default" placeholder="you@company.com" />
              <Input label="With helper" placeholder="Type here" helperText="Up to 80 characters." />
              <Input label="Error state" defaultValue="broken@" error="Not a valid email address." />
              <Input label="Disabled" defaultValue="locked" disabled />
            </div>
            <div className="mt-8 max-w-3xl">
              <Textarea label="Textarea" placeholder="Tell us about your project..." rows={4} helperText="Aim for 2–3 sentences." />
            </div>
          </section>

          {/* Scaffold: Section + Container */}
          <section id="scaffold" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Section &amp; Container</h2>
            <div className="border-2 border-dashed border-mint-500/40 rounded-xs">
              <Section eyebrow="// DEMO SECTION" title="Section title renders here" variant="default" containerSize="md">
                <div className="border-2 border-dashed border-mint-500/40 p-6">
                  <p className="font-mono text-xs text-ink-400 uppercase tracking-[0.1em]">Container (size=md, dashed mint)</p>
                  <p className="mt-2 font-plex text-sm text-ink-300">Section owns vertical rhythm (py-24 → py-32). Container owns horizontal width and gutter.</p>
                </div>
              </Section>
            </div>
          </section>

          {/* Eyebrow */}
          <section id="eyebrow" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Eyebrow</h2>
            <div className="space-y-4">
              <Eyebrow>// plain eyebrow</Eyebrow>
              <Eyebrow withDot>// with status dot</Eyebrow>
              <Eyebrow>// ch.04 · 2026</Eyebrow>
            </div>
          </section>

          {/* Link */}
          <section id="link" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Link</h2>
            <div className="space-y-6 max-w-2xl font-plex text-ink-200">
              <p>
                Default:{' '}
                <UiLink href="https://www.ennbi.com" external>visit ennbi.com</UiLink>
              </p>
              <p>
                Accent:{' '}
                <UiLink href="#intro" variant="accent">jump to intro</UiLink>
              </p>
              <p className="leading-relaxed">
                Inline underline wipe (hover me):{' '}
                <UiLink href="#intro" variant="inline">this animates across on hover</UiLink>{' '}
                — useful inside body copy where you want a subtle in-paragraph link.
              </p>
            </div>
          </section>

          {/* Motion */}
          <section id="motion" className="mb-20">
            <h2 className="font-brutal uppercase text-[1.75rem] tracking-[-0.02em] text-ink-50 mb-8">Motion</h2>
            <MotionDemos />
          </section>

          <footer className="border-t border-ink-700 pt-8 mt-16">
            <Eyebrow>// Tokens</Eyebrow>
            <div className="mt-2 font-mono text-xs text-ink-500 space-y-1">
              <div>src/design/tokens.css</div>
              <div>src/design/base.css</div>
              <div>tailwind.config.js</div>
              <div>src/components/ui/*</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

const MotionDemos: React.FC = () => {
  const [tick, setTick] = useState(0);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {(
        [
          { label: 'fast · 120ms', dur: 'duration-fast' },
          { label: 'base · 200ms', dur: 'duration-base' },
          { label: 'slow · 350ms', dur: 'duration-slow' },
        ] as const
      ).map((m) => (
        <button
          key={m.dur}
          onClick={() => setTick((t) => t + 1)}
          className={`aspect-square bg-ink-900 border border-ink-700 rounded-xs p-4 flex flex-col justify-between text-left transition-all ${m.dur} ease-brutal hover:border-mint-500`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-400">click</span>
          <span
            className={`block h-2 bg-mint-500 transition-all ${m.dur} ease-brutal`}
            style={{ width: tick % 2 ? '100%' : '20%' }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-300">{m.label}</span>
        </button>
      ))}
      <div className="aspect-square bg-ink-900 border border-ink-700 rounded-xs p-4 flex items-center justify-center">
        <Button variant="primary" size="sm">press me</Button>
      </div>
    </div>
  );
};

export default Styleguide;
