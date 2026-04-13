import React from 'react';
import { Section } from './ui';

type Step = {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Discover',
    duration: '1–2 weeks',
    description:
      'We sit with your team, map the problem, and write a short brief. No heavyweight deck — a single document everyone agrees on before we spend a dollar on engineering.',
    deliverables: ['Problem brief', 'Scope & assumptions', 'Tech approach'],
  },
  {
    number: '02',
    title: 'Design',
    duration: '2–4 weeks',
    description:
      'Information architecture, interaction patterns, and the design system for the product. We build the design in code where useful — no 200-slide mockup ceremonies.',
    deliverables: ['IA & flows', 'Design system', 'Interactive prototype'],
  },
  {
    number: '03',
    title: 'Build',
    duration: '6–16 weeks',
    description:
      'Weekly shipping, demoable every Friday. Staging environment from day one, production-grade CI from day one, observability baked in before feature #1 lands.',
    deliverables: ['Staging env', 'CI/CD pipeline', 'Iterative releases'],
  },
  {
    number: '04',
    title: 'Ship & Support',
    duration: 'Ongoing',
    description:
      'Production rollout with monitoring, alerts, and on-call. Post-launch support as needed — hours bank, retained engineering, or full handoff, whichever fits.',
    deliverables: ['Go-live runbook', 'Monitoring & SLOs', 'Handoff or retainer'],
  },
];

const Process: React.FC = () => {
  return (
    <Section id="process" eyebrow="// CH.05 · HOW WE WORK" title="Four stages. No surprises." variant="bordered">
      <div className="grid grid-cols-1 gap-0">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className={`grid grid-cols-1 md:grid-cols-[200px_1fr_260px] gap-8 py-10 ${
              idx !== steps.length - 1 ? 'border-b border-ink-700' : ''
            }`}
          >
            <div className="flex flex-col gap-2">
              <span className="font-brutal uppercase text-[3.5rem] md:text-[4.5rem] leading-[0.9] text-mint-500">
                {step.number}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                {step.duration}
              </span>
            </div>

            <div>
              <h3 className="font-brutal uppercase text-[2rem] leading-[1.1] tracking-[-0.015em] text-ink-50 mb-3">
                {step.title}
              </h3>
              <p className="font-plex text-[1.0625rem] leading-[1.55] text-ink-300 max-w-xl">
                {step.description}
              </p>
            </div>

            <div className="border-l md:border-l border-ink-700 md:pl-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 block mb-3">
                Deliverables
              </span>
              <ul className="space-y-1.5">
                {step.deliverables.map((d) => (
                  <li key={d} className="flex items-baseline gap-2 font-plex text-sm text-ink-200">
                    <span className="text-mint-500">→</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
