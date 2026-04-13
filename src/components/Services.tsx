import React from 'react';
import { Code, Smartphone, Cloud, Brain } from 'lucide-react';
import { Section, Card } from './ui';

type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: 'custom',
    number: '01',
    title: 'Custom Software',
    tagline: 'From greenfield to complex integrations',
    description:
      'Purpose-built platforms, internal tools, and SaaS products engineered for your operating model — not a template.',
    bullets: ['Platform engineering', 'Internal tooling', 'API & integration work'],
    icon: <Code size={20} />,
  },
  {
    id: 'apps',
    number: '02',
    title: 'Web & Mobile Apps',
    tagline: 'Shipping on the web, iOS, and Android',
    description:
      'Product-grade experiences with the interaction detail of native apps and the deployment velocity of modern web stacks.',
    bullets: ['React / Next.js web', 'React Native + native iOS/Android', 'Design-engineering'],
    icon: <Smartphone size={20} />,
  },
  {
    id: 'cloud',
    number: '03',
    title: 'Cloud & Platform',
    tagline: 'Runs reliably in production',
    description:
      'Cloud architecture on AWS and Azure, with CI/CD, observability, and cost/performance engineering baked in from day one.',
    bullets: ['AWS / Azure architecture', 'CI/CD & platform automation', 'Observability & SLOs'],
    icon: <Cloud size={20} />,
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI & Data',
    tagline: 'Models that do a real job',
    description:
      'Practical ML and LLM systems — document processing, search, agents, prediction — plumbed into existing products and workflows.',
    bullets: ['LLM integration & agents', 'ML pipelines & MLOps', 'Data platforms'],
    icon: <Brain size={20} />,
  },
];

const Services: React.FC = () => {
  return (
    <Section id="services" eyebrow="// CH.02 · WHAT WE BUILD" title="Four things, done properly." variant="bordered">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <Card key={s.id} variant="filled" padding="lg" className="flex flex-col gap-6 min-h-[320px]">
            <div className="flex items-start justify-between">
              <span className="font-brutal uppercase text-[2rem] leading-none text-mint-500">
                {s.number}
              </span>
              <span className="text-ink-400">{s.icon}</span>
            </div>
            <div>
              <h3 className="font-brutal uppercase text-[1.75rem] leading-[1.05] tracking-[-0.015em] text-ink-50">
                {s.title}
              </h3>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-mint-500">
                {s.tagline}
              </p>
            </div>
            <p className="font-plex text-[0.9375rem] leading-[1.55] text-ink-300">
              {s.description}
            </p>
            <ul className="mt-auto space-y-1.5 border-t border-ink-700 pt-4">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 font-mono text-xs text-ink-200">
                  <span className="text-mint-500 mt-0.5">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Services;
