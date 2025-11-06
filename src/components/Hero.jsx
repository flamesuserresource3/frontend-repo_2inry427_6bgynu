import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* 3D Interactive Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to improve contrast while allowing interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-white/70"
          >
            Christopher Mesaya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            Fullstack Developer with an Eye for Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
            className="mt-5 max-w-2xl text-white/70 text-base md:text-lg"
          >
            I craft fast, accessible, and visually expressive digital experiences—balancing code quality with design finesse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-500/90 hover:bg-blue-500 text-white px-5 py-3 text-sm font-medium transition shadow-lg shadow-blue-500/25"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition -translate-x-0 group-hover:translate-x-0.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 text-white px-5 py-3 text-sm font-medium transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
