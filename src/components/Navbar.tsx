import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'Blog', to: '/blog' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-base ease-brutal ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur border-b border-ink-700'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <RouterLink to="/" className="flex items-center gap-2.5 group" aria-label="EnnBi home">
          <span className="relative inline-block w-2 h-2 bg-mint-500 rounded-full">
            <span className="absolute inset-0 rounded-full bg-mint-500 animate-ping opacity-60" />
          </span>
          <span className="font-brutal uppercase text-ink-50 text-[1.1rem] tracking-[-0.01em]">
            ENNBI
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-ink-500 uppercase tracking-[0.12em] ml-1">
            // software
          </span>
        </RouterLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            'to' in l ? (
              <RouterLink
                key={l.label}
                to={l.to!}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300 hover:text-mint-500 transition-colors duration-base ease-brutal"
              >
                {l.label}
              </RouterLink>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300 hover:text-mint-500 transition-colors duration-base ease-brutal"
              >
                {l.label}
              </a>
            )
          )}
          <Button as="a" href="#contact" variant="primary" size="sm">
            Start a Project
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink-100 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div className="md:hidden bg-ink-950 border-t border-ink-700">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) =>
              'to' in l ? (
                <RouterLink
                  key={l.label}
                  to={l.to!}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-ink-200 hover:text-mint-500"
                >
                  {l.label}
                </RouterLink>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-ink-200 hover:text-mint-500"
                >
                  {l.label}
                </a>
              )
            )}
            <Button as="a" href="#contact" variant="primary" size="sm" onClick={() => setOpen(false)}>
              Start a Project
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
