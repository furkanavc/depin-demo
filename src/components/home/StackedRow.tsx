'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import Spotlight, { useSpotlight } from '@/components/tools/Spotlight';
import { cn } from '@/utils/cn';

type StackedRowProps = {
  media: ReactNode;
  children: ReactNode;
  covered?: boolean;
  className?: string;
};

export default function StackedRow({ media, children, covered = false, className }: StackedRowProps) {
  const rowRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: rowRef, offset: ['start start', 'end start'] });
  const spotlight = useSpotlight();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <motion.article
      ref={rowRef}
      {...spotlight.handlers}
      style={covered ? { scale } : undefined}
      className={cn('sticky top-0 origin-top motion-reduce:relative motion-reduce:transform-none!', className)}
    >
      {media}

      <Spotlight x={spotlight.x} y={spotlight.y} hover={spotlight.hover} className="size-s-1100" />

      {children}

      {covered && (
        <motion.span
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-neutral-100 motion-reduce:hidden"
        />
      )}
    </motion.article>
  );
}
