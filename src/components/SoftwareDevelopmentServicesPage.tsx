import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Section, Card, Button, Eyebrow } from './ui';

type DetailItem = {
  name: string;
  description: string;
  deliverables?: string[];
};

const services: DetailItem[] = [
  {
    name: 'Software Consulting',
    description:
      'Pragmatic reviews of your current stack, delivery process, and architecture. We come back with a short, prioritized roadmap — not a 200-page deck.',
    deliverables: ['Architecture review', 'Prioritized roadmap', 'Team & hiring guidance'],
  },
  {
    name: 'Custom Software Development',
    description:
      'Greenfield platforms, internal tools, and SaaS products engineered to fit your operating model. Delivered as weekly releases, not big-bang launches.',
    deliverables: ['Product & platform engineering', 'Design system', 'Weekly staging releases'],
  },
  {
    name: 'Software Development Outsourcing',
    description:
      'End-to-end delivery of projects you want shipped without adding permanent headcount. Scoped contracts, fixed milestones, transparent burn.',
    deliverables: ['Scope & milestone plan', 'Dedicated delivery lead', 'Hand-off documentation'],
  },
  {
    name: 'Software Product Development',
    description:
      'From zero-to-one to scale. We build v1 with an eye on the product roadmap, so the second release doesn&apos;t require a rewrite.',
    deliverables: ['v1 MVP', 'Roadmap-friendly architecture', 'Analytics & feedback loops'],
  },
  {
    name: 'Team Augmentation',
    description:
      'Senior engineers plug into your Slack, your standups, your sprints. Bring capacity without the ramp-up tax of new hires.',
    deliverables: ['Vetted senior engineers', 'Embedded in your process', 'Flexible ramp up/down'],
  },
  {
    name: 'Cloud Application Development',
    description:
      'Cloud-native from day one on AWS or Azure. CI/CD, infrastructure as code, observability, and cost guardrails baked in.',
    deliverables: ['IaC (Terraform / Bicep)', 'CI/CD pipelines', 'Observability & SLOs'],
  },
  {
    name: 'Legacy Software Modernization',
    description:
      'Pragmatic migrations — we don&apos;t rip and replace unless we have to. Strangler-fig patterns, data migration planning, zero-downtime cutover.',
    deliverables: ['Migration plan', 'Risk & downtime budget', 'Parallel-run strategy'],
  },
  {
    name: 'Post-launch Support',
    description:
      'Retained engineering hours, on-call rotations, and quarterly platform reviews. Keeps what you built healthy — and easy to extend.',
    deliverables: ['Hours bank or retainer', 'On-call coverage', 'Quarterly platform review'],
  },
];

const SoftwareDevelopmentServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-200 font-plex flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <Section eyebrow="// CH.02 · SOFTWARE DEVELOPMENT SERVICES" title="Everything we offer." containerSize="lg">
          <p className="font-plex text-lg text-ink-300 max-w-2xl">
            A detailed breakdown of the engagements we take on. If your project doesn&apos;t
            fit neatly into one of these, it probably maps to two — we&apos;ll help you
            decide which.
          </p>
        </Section>

        <Section variant="bordered" containerSize="lg" className="pt-0 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <Card key={s.name} variant="outlined" padding="lg" className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="font-brutal uppercase text-[2rem] leading-none text-mint-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="font-brutal uppercase text-[1.625rem] leading-[1.1] tracking-[-0.015em] text-ink-50">
                  {s.name}
                </h2>
                <p className="font-plex text-[0.9375rem] leading-[1.55] text-ink-300">
                  {s.description}
                </p>
                {s.deliverables ? (
                  <div className="mt-auto pt-4 border-t border-ink-700">
                    <Eyebrow className="mb-3">// DELIVERABLES</Eyebrow>
                    <ul className="space-y-1.5">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 font-plex text-sm text-ink-200">
                          <span className="text-mint-500 mt-0.5">→</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-ink-700 flex flex-wrap gap-6 items-center justify-between">
            <RouterLink
              to="/"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300 hover:text-mint-500 transition-colors"
            >
              ← Back home
            </RouterLink>
            <Button as="a" href="/#contact" variant="primary" size="md">
              Start a Project
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentServicesPage;
