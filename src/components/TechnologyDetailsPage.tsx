import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { technologyDetails } from '../data/technologies';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const TechnologyDetailsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const targetId = location.hash.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

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
          className="mx-auto mt-6 max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-heading text-4xl md:text-6xl">Technology Details</h1>
          <p className="mt-4 text-lg text-gray-300">
            Detailed descriptions of each technology we use, with practical examples.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {technologyDetails.map((technology, index) => (
            <motion.article
              key={technology.name}
              id={toSlug(technology.name)}
              className="glass-morph rounded-2xl border border-white/10 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
            >
              <h2 className="text-xl font-semibold text-white">{technology.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {technology.description}
              </p>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-blue-200">
                Key Highlights
              </h3>
              <ul className="mt-2 space-y-2">
                {technology.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyDetailsPage;
