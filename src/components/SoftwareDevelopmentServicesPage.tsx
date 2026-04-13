import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type DetailItem = {
  name: string;
  description: string;
};

const services: DetailItem[] = [
  {
    name: 'Software consulting',
    description:
      'We assess business goals, current systems, and technical constraints to define a practical software strategy, architecture, and delivery roadmap.',
  },
  {
    name: 'Custom software development',
    description:
      'We design and build tailored applications that match your workflows, business logic, compliance needs, and user expectations.',
  },
  {
    name: 'Software development outsourcing',
    description:
      'We take end-to-end ownership of software delivery, from planning and development to QA and release, as an external engineering partner.',
  },
  {
    name: 'Software product development',
    description:
      'We help shape product vision, build MVPs, and scale feature-rich platforms with strong focus on usability, quality, and performance.',
  },
  {
    name: 'Team augmentation',
    description:
      'We extend your in-house team with specialists who integrate with your processes, tools, and sprint cadence to accelerate delivery.',
  },
  {
    name: 'Cloud application development',
    description:
      'We build cloud-native apps with scalable infrastructure, secure integrations, resilient deployments, and observable operations.',
  },
  {
    name: 'Legacy software modernization',
    description:
      'We modernize outdated systems by refactoring codebases, migrating platforms, and improving security, maintainability, and speed.',
  },
  {
    name: 'Post-launch support',
    description:
      'We provide ongoing maintenance, enhancements, performance tuning, bug fixing, and monitoring to keep applications reliable in production.',
  },
];

const industries: DetailItem[] = [
  {
    name: 'Healthcare',
    description:
      'Healthcare solutions focused on patient engagement, secure health data management, telemedicine, and workflow automation for providers.',
  },
  {
    name: 'Banking',
    description:
      'Banking platforms for digital onboarding, core process automation, secure transactions, and compliance-ready customer experiences.',
  },
  {
    name: 'Insurance',
    description:
      'Insurance software for policy lifecycle management, claims automation, fraud controls, and customer self-service portals.',
  },
  {
    name: 'Lending',
    description:
      'Lending systems that streamline application processing, risk scoring, underwriting, and repayment management.',
  },
  {
    name: 'Payments',
    description:
      'Payment solutions for gateway integrations, transaction orchestration, reconciliation, and high-availability financial operations.',
  },
  {
    name: 'Investment',
    description:
      'Investment platforms delivering portfolio tracking, reporting, advisory workflows, and analytics-driven decision support.',
  },
  {
    name: 'Real estate',
    description:
      'Real estate tools for listing management, lead conversion, property operations, and digital client engagement.',
  },
  {
    name: 'Retail',
    description:
      'Retail systems for omnichannel commerce, inventory synchronization, loyalty programs, and personalized shopping journeys.',
  },
  {
    name: 'Manufacturing',
    description:
      'Manufacturing software that improves production planning, quality management, traceability, and shop-floor visibility.',
  },
  {
    name: 'Logistics and Transportation',
    description:
      'Logistics solutions for routing, fleet operations, shipment tracking, warehouse coordination, and real-time status control.',
  },
  {
    name: 'Oil and Gas',
    description:
      'Oil and gas applications supporting field operations, asset monitoring, safety compliance, and predictive maintenance.',
  },
  {
    name: 'Energy and utilities',
    description:
      'Energy and utility platforms for metering, outage response, network monitoring, and customer service digitization.',
  },
  {
    name: 'Professional services',
    description:
      'Professional services software for project delivery, utilization tracking, billing automation, and knowledge management.',
  },
  {
    name: 'Telecoms',
    description:
      'Telecom solutions for subscriber lifecycle management, service provisioning, network operations, and support automation.',
  },
  {
    name: 'Engineering and construction',
    description:
      'Engineering and construction tools for planning, site collaboration, progress tracking, and document control.',
  },
  {
    name: 'Travel and hospitality',
    description:
      'Travel and hospitality systems for booking, guest engagement, loyalty, operations optimization, and partner integrations.',
  },
];

const SoftwareDevelopmentServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<DetailItem>(services[0]);
  const [selectedIndustry, setSelectedIndustry] = useState<DetailItem>(industries[0]);

  return (
    <section className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <Link
            to="/"
            className="text-blue-300 underline underline-offset-4 transition hover:text-blue-100"
          >
            Back to Home
          </Link>
        </div>

        <motion.div
          className="mx-auto mt-6 max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="section-heading text-4xl md:text-6xl text-center">
            Software Development Services
          </h1>
          <p className="mt-5 text-center text-gray-300 text-base md:text-lg leading-relaxed">
            A software development company with 36 years of business excellence, we engineer
            reliable, scalable, and secure software solutions for any OS, browser, and device.
            We combine deep industry expertise with the latest IT advancements to deliver custom
            solutions and products that match user needs and behavior.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.article
            className="glass-morph rounded-2xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-semibold text-white">Service Scope</h2>
            <ul className="mt-4 space-y-2">
              {services.map((item) => (
                <li
                  key={item.name}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                      selectedService.name === item.name
                        ? 'border-blue-300/70 bg-blue-500/20 text-blue-100'
                        : 'border-white/10 bg-white/5 text-gray-200 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-blue-300/30 bg-blue-500/10 p-4">
              <p className="text-sm font-semibold text-blue-100">{selectedService.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                {selectedService.description}
              </p>
            </div>
          </motion.article>

          <motion.article
            className="glass-morph rounded-2xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-white">Industry Expertise</h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {industries.map((item) => (
                <li
                  key={item.name}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedIndustry(item)}
                    className={`h-full w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                      selectedIndustry.name === item.name
                        ? 'border-blue-300/70 bg-blue-500/20 text-blue-100'
                        : 'border-white/10 bg-white/5 text-gray-200 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-blue-300/30 bg-blue-500/10 p-4">
              <p className="text-sm font-semibold text-blue-100">{selectedIndustry.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                {selectedIndustry.description}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopmentServicesPage;
