'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  className?: string;
}

const SlideIn: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 50,
  className
}) => {
  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 }
  };

  const directionVariantsEnd = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      className={cn(className)}
      initial={directionVariants[direction]}
      whileInView={directionVariantsEnd[direction]}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
