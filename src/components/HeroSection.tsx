'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Logo / Brand mark */}
          <div className="mb-8 inline-flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 4L44 16L32 28L20 16L32 4Z" stroke="#4FC3F7" strokeWidth="1.5" fill="none" opacity="0.6"/>
              <path d="M32 16L44 28L32 40L20 28L32 16Z" stroke="#00E5FF" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <path d="M32 28L44 40L32 52L20 40L32 28Z" stroke="#4FC3F7" strokeWidth="1.5" fill="none" opacity="0.6"/>
              <circle cx="32" cy="32" r="8" stroke="#00E5FF" strokeWidth="1" fill="none" opacity="0.3"/>
            </svg>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Bayswater</span>{' '}
            <span className="text-[color:var(--text-primary)]">Research</span>
          </h1>

          <p className="text-lg sm:text-xl text-[color:var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Quantitative trading strategies, engineered with precision.
            <br />
            Data-driven, systematic, transparent.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                         bg-gradient-to-r from-[#4FC3F7] to-[#00E5FF] text-[#0a0e1a]
                         font-semibold text-sm tracking-wide
                         hover:shadow-lg hover:shadow-[#4FC3F7]/20
                         transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              View Projects
            </a>
            <a
              href="https://github.com/bayswater-research"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card !rounded-full px-8 py-3.5
                         text-sm font-medium text-[color:var(--text-secondary)]
                         hover:text-[color:var(--text-primary)]
                         transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Organisation
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[rgba(255,255,255,0.15)] flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[rgba(255,255,255,0.3)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
