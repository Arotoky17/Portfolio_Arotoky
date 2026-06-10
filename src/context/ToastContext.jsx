import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
};

const DURATION_MS = 4500;

/* ─── Individual Toast ───────────────────────────────────────── */

const ToastItem = ({ toast, onRemove }) => {
  const isSuccess = toast.type === 'success';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 80, scale: 0.92 }}
      animate={{ opacity: 1, x: 0,  scale: 1    }}
      exit={{    opacity: 0, x: 80, scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="relative flex items-start gap-3 p-4 pr-10 rounded-2xl border backdrop-blur-md overflow-hidden shadow-2xl w-full max-w-sm"
      style={{
        background: 'rgba(15,23,42,0.92)',
        borderColor: isSuccess ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.35)',
        boxShadow: isSuccess
          ? '0 20px 40px rgba(16,185,129,0.12)'
          : '0 20px 40px rgba(239,68,68,0.12)',
      }}
    >
      {/* Icon */}
      <div className={`shrink-0 mt-0.5 ${isSuccess ? 'text-primary-500' : 'text-red-500'}`}>
        {isSuccess ? <CheckCircle2 size={19} /> : <AlertCircle size={19} />}
      </div>

      {/* Message */}
      <p className="text-sm text-slate-200 font-medium leading-snug flex-1">
        {toast.message}
      </p>

      {/* Close button */}
      <button
        onClick={() => onRemove(toast.id)}
        className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        <X size={15} />
      </button>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] rounded-b-2xl"
        style={{
          background: isSuccess
            ? 'linear-gradient(to right, #10b981, #8b5cf6)'
            : '#ef4444',
        }}
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: DURATION_MS / 1000, ease: 'linear' }}
      />
    </motion.div>
  );
};

/* ─── Provider ───────────────────────────────────────────────── */

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, DURATION_MS + 400); // extra time for exit animation
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast stack — top-right */}
      <div className="fixed top-6 right-6 z-[9998] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto">
              <ToastItem toast={toast} onRemove={removeToast} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
