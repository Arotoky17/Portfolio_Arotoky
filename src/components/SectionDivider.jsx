import React from 'react';
import { motion } from 'framer-motion';

/**
 * Decorative glowing divider between sections.
 */
const SectionDivider = () => (
  <div className="relative w-full flex items-center justify-center py-1 overflow-visible">
    {/* Base faint line */}
    <div
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
      style={{
        background:
          'linear-gradient(to right, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)',
      }}
    />

    {/* Glowing accent line */}
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute top-1/2 -translate-y-1/2 h-px w-48"
      style={{
        background: 'linear-gradient(to right, #7C3AED, #818CF8)',
        filter: 'blur(1px)',
        transformOrigin: 'center',
      }}
    />

    {/* Center glow dot */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative w-2 h-2 rounded-full z-10"
      style={{
        background: 'linear-gradient(135deg, #7C3AED, #818CF8)',
        boxShadow: '0 0 12px #7C3AED, 0 0 24px rgba(129,140,248,0.4)',
      }}
    />
  </div>
);

export default SectionDivider;
