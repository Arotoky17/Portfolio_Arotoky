import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-violet-600 pointer-events-none"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{ originY: 0 }}
    />
  );
};

export default PageTransition;
