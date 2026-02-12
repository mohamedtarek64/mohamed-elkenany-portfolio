'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
  offset?: number;
}

const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className,
  offset = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' 
      ? [offset, offset - 100 * speed]
      : [offset, offset + 100 * speed]
  );

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
