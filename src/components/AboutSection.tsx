'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Strategies', value: '10+' },
  { label: 'Public Repos', value: '1' },
  { label: 'Focus', value: 'Quantitative' },
];

const capabilities = [
  {
    title: 'Strategy Research',
    description: 'Systematic development and backtesting of quantitative trading strategies across multiple asset classes.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Data Engineering',
    description: 'Robust data pipelines for market data ingestion, cleaning, and feature engineering at scale.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    description: 'Advanced portfolio optimization and risk modeling frameworks for capital preservation.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About{' '}
            <span className="gradient-text">Bayswater</span>
          </h2>
          <p className="text-[color:var(--text-secondary)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We are a quantitative research group dedicated to developing systematic trading strategies
            through rigorous mathematical modeling, statistical analysis, and software engineering.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[color:var(--text-secondary)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(79,195,247,0.1)] flex items-center justify-center mb-4
                              text-[color:var(--brand-primary)]">
                {cap.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
