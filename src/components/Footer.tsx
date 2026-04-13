import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Eyebrow } from './ui';

const nav = {
  navigate: [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Stack', href: '#stack' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    'Custom Software',
    'Web & Mobile Apps',
    'Cloud & Platform',
    'AI & Data',
    'Team Augmentation',
    'Legacy Modernization',
  ],
  elsewhere: [
    { label: 'Employee Corner', to: '/login' },
    { label: 'Technologies', to: '/technologies' },
  ],
};

const LOGO_URL = 'https://i.postimg.cc/cK79ds0J/Whats-App-Image-2025-05-21-at-9-23-13-PM.png';
const logoMaskStyle: React.CSSProperties = {
  WebkitMaskImage: `url(${LOGO_URL})`,
  maskImage: `url(${LOGO_URL})`,
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 border-t border-ink-700 text-ink-300">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-20">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span
                aria-hidden
                className="block w-10 h-10 bg-mint-500"
                style={logoMaskStyle}
              />
              <span className="font-brutal uppercase text-ink-50 text-xl tracking-[-0.01em]">
                ENNBI
              </span>
            </div>
            <p className="font-plex text-ink-300 leading-[1.55] max-w-sm mb-6">
              A global engineering studio headquartered in Srinagar, India. We build
              software that ships and keeps running.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ennbi_softwares"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="w-9 h-9 border border-ink-700 flex items-center justify-center rounded-xs hover:border-mint-500 hover:text-mint-500 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com/in/ennbi-softwares-3b737a363"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-ink-700 flex items-center justify-center rounded-xs hover:border-mint-500 hover:text-mint-500 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:hr@ennbi.com"
                aria-label="Email"
                className="w-9 h-9 border border-ink-700 flex items-center justify-center rounded-xs hover:border-mint-500 hover:text-mint-500 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <Eyebrow className="mb-5">// NAVIGATE</Eyebrow>
            <ul className="space-y-2.5">
              {nav.navigate.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-plex text-sm hover:text-mint-500 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="mb-5">// SERVICES</Eyebrow>
            <ul className="space-y-2.5">
              {nav.services.map((s) => (
                <li key={s} className="font-plex text-sm text-ink-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Elsewhere */}
        <div className="mt-12 pt-8 border-t border-ink-700 flex flex-wrap gap-6 items-center">
          <Eyebrow className="mr-4">// ELSEWHERE</Eyebrow>
          {nav.elsewhere.map((e) => (
            <RouterLink
              key={e.label}
              to={e.to}
              className="font-mono text-xs uppercase tracking-[0.14em] text-ink-300 hover:text-mint-500 transition-colors"
            >
              {e.label}
            </RouterLink>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-ink-700 flex flex-wrap justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            © {year} EnnBi · Srinagar, India → Worldwide
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            hr@ennbi.com · +91 7889449921
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
