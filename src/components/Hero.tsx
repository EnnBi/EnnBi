import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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
        <div className="text-center max-w-4xl mx-auto mt-24"> {/* increased margin-top here */}
          {/* Luxury Grey Title */}
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold leading-[1.1] pb-4"
style={{ fontFamily: "'Anton', sans-serif", lineHeight: 1 }}


 // Artistic font added
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gray-300 to-red-100 drop-shadow-lg mt-6">
              Transform Your Business With
            </span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gray-300 to-red-100 drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Next-Gen Technology
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
  className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-gray-300 to-red-100 drop-shadow-lg mt-3"
  initial={{ y: 0 }}
  animate={{ y: [0, -10, 0] }}  // move up 10px then back
  transition={{
    duration: 3,               // duration of one full up-down cycle
    repeat: Infinity,          // loop forever
    ease: "easeInOut",
  }}
>
  We help businesses transform their ideas into powerful software solutions. Our team of experts deliver cutting-edge technology to drive your growth.
</motion.p>

        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center gap-6 mt-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href="#contact"
            className="relative px-8 py-4 rounded-xl text-white bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 border border-blue-400/30 backdrop-blur-md"
          >
            <span className="relative z-10">Book a Free Consultation</span>
            <div className="absolute inset-0 rounded-xl bg-white/10 blur-sm opacity-30 pointer-events-none"></div>
          </a>

          <a
            href="#services"
            className="relative px-8 py-4 rounded-xl text-blue-300 border border-blue-500/50 hover:text-white hover:bg-blue-900/30 transition duration-300 shadow-md backdrop-blur-md"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 rounded-xl bg-white/5 blur-sm opacity-20 pointer-events-none"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
