import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type HeroCta = {
  href: string;
  label: string;
  primary: boolean;
  external?: boolean;
  compact?: boolean;
};

type HeroSlide = {
  id: string;
  titleLines: [string, string];
  description: string;
  highlights?: string[];
  ctas: HeroCta[];
};

const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    titleLines: ['Transform Your Business With', 'Next-Gen Technology'],
    description:
      'We help businesses transform their ideas into powerful software solutions. Our team of experts deliver cutting-edge technology to drive your growth.',
    ctas: [
      {
        href: '#contact',
        label: 'Book a Free Consultation',
        primary: true,
      },
      {
        href: '#services',
        label: 'Explore Services',
        primary: false,
      },
    ],
  },
  {
    id: 'slide-2',
    titleLines: ['Software Consulting', 'and Development'],
    description: 'Delivering project success no matter what',
    ctas: [
      {
        href: '#technologies',
        label: 'Technologies',
        primary: true,
      },
    ],
  },
  {
    id: 'slide-3',
    titleLines: ['Software Development', 'Services'],
    description:
      'A software development company with 36 years of business excellence, we can engineer reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.',
    highlights: [
      'Software consulting',
      'Custom software development',
      'Software development outsourcing',
      'Software product development',
      'Team augmentation',
      'Cloud application development',
      'Legacy software modernization',
      'Post-launch support',
    ],
    ctas: [
      {
        href: '/software-development-services',
        label: 'Check details',
        primary: true,
        compact: true,
      },
    ],
  },
];

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gray-900 pt-24 md:pt-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-accent-500/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-primary-500/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            className={`text-center mx-auto mt-24 ${
              currentSlide.highlights ? 'max-w-5xl' : 'max-w-4xl'
            }`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-7xl font-extrabold leading-[1.1] pb-4"
              style={{ fontFamily: "'Anton', sans-serif", lineHeight: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gray-300 to-red-100 drop-shadow-lg mt-6">
                {currentSlide.titleLines[0]}
              </span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gray-300 to-red-100 drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.8 }}
              >
                {currentSlide.titleLines[1]}
              </motion.span>
            </motion.h1>

            <motion.p
              className={
                currentSlide.highlights
                  ? 'mt-3 text-sm md:text-base text-gray-200 leading-relaxed'
                  : 'block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gray-300 to-red-100 drop-shadow-lg mt-3 text-lg md:text-xl'
              }
              initial={{ y: 0 }}
              animate={currentSlide.highlights ? { y: 0 } : { y: [0, -8, 0] }}
              transition={
                currentSlide.highlights
                  ? { duration: 0.3 }
                  : {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            >
              {currentSlide.description}
            </motion.p>

            {currentSlide.highlights && (
              <motion.ul
                className="mt-6 grid grid-cols-1 gap-2 text-left md:grid-cols-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
              >
                {currentSlide.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-gray-100"
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="flex flex-col items-center gap-6 mt-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {currentSlide.ctas.map((cta) => {
            const spacing = cta.compact ? 'px-5 py-2.5 text-sm rounded-lg' : 'px-8 py-4 rounded-xl';
            const colorStyles = cta.primary
              ? 'text-white bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg hover:from-blue-500 hover:to-blue-700 border border-blue-400/30'
              : 'text-blue-300 border border-blue-500/50 hover:text-white hover:bg-blue-900/30 shadow-md';
            const className = `relative ${spacing} ${colorStyles} transition duration-300 backdrop-blur-md`;
            const glowRadius = cta.compact ? 'rounded-lg' : 'rounded-xl';

            return cta.href.startsWith('/') ? (
              <Link key={cta.label} to={cta.href} className={className}>
                <span className="relative z-10">{cta.label}</span>
                <div className={`absolute inset-0 ${glowRadius} bg-white/10 blur-sm opacity-30 pointer-events-none`}></div>
              </Link>
            ) : (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? '_blank' : undefined}
                rel={cta.external ? 'noreferrer noopener' : undefined}
                className={className}
              >
                <span className="relative z-10">{cta.label}</span>
                <div className={`absolute inset-0 ${glowRadius} bg-white/10 blur-sm opacity-30 pointer-events-none`}></div>
              </a>
            );
          })}
        </motion.div>

        <div className="absolute bottom-8 flex items-center gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'w-8 bg-red-300'
                  : 'w-2.5 bg-white/45 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
