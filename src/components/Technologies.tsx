import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { technologyColumns } from '../data/technologies';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-24 bg-gray-950/70 border-y border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-4xl md:text-6xl">Technologies</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Platforms and stacks we use to deliver reliable software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyColumns.map((column, columnIndex) => (
            <motion.div
              key={`column-${columnIndex}`}
              className="glass-morph rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
            >
              <ul className="space-y-3">
                {column.map((tech) => (
                  <li key={tech}>
                    <Link
                      to={`/technologies#${toSlug(tech)}`}
                      className="inline-flex w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm md:text-base text-gray-100 transition hover:border-white/40 hover:bg-white/10"
                    >
                      {tech}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/technologies"
            className="inline-flex items-center rounded-xl border border-blue-400/40 bg-blue-600/30 px-6 py-3 text-base text-blue-100 transition hover:bg-blue-600/50"
          >
            View Detailed Technology Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
