'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

const hidden = { opacity: 0, transform: 'translateY(24%)' };
const shown = { opacity: 1, transform: 'translateY(0%)' };
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, amount = 0.3, className }: RevealProps) {
  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, delay, ease: easeOutExpo }}
      className={cn('motion-reduce:transform-none! motion-reduce:opacity-100!', className)}
    >
      {children}
    </motion.div>
  );
}
