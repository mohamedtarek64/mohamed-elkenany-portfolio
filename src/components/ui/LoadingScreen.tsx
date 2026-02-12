'use client';

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-dark-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 blur-[120px] rounded-full"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Minimalist Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white">
                ME<span className="text-primary-500">.</span>
              </div>
            </motion.div>

            {/* Premium Loading Bar */}
            <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
              <motion.divtd
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-600 to-primary-400"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
            </div>

            {/* Subtle Progress Text */}
            <motion.div
              className="mt-6 font-display text-[10px] uppercase tracking-[0.4em] font-bold text-dark-500"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Initializing Systems
            </motion.div>
          </div>

          {/* Perspective Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(LoadingScreen);
