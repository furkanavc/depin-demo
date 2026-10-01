'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/utils/cn';
import Spotlight, { useSpotlight } from './Spotlight';

const ORDER_DELAY = 0.12;
const REVEAL_LENGTH = 0.55;
const HOVER_ZOOM = 0.03;

type RevealCardProps = {
  media: ReactNode;
  children: ReactNode;
  order?: number;
  className?: string;
};

export default function RevealCard({ media, children, order = 0, className }: RevealCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'center center'] });
  const spotlight = useSpotlight();

  const revealStart = order * ORDER_DELAY;
  const revealEnd = Math.min(revealStart + REVEAL_LENGTH, 1);
  const cardY = useTransform(scrollYProgress, [revealStart, revealEnd], ['14%', '0%']);
  const cardOpacity = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);

  const mediaY = useTransform(scrollYProgress, [0, 1], ['6%', '0%']);
  const settleScale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);
  const mediaScale = useTransform(() => settleScale.get() * (1 + HOVER_ZOOM * spotlight.hover.get()));

  return (
    <motion.article
      ref={cardRef}
      {...spotlight.handlers}
      style={{ y: cardY, opacity: cardOpacity }}
      className={cn('motion-reduce:transform-none! motion-reduce:opacity-100!', className)}
    >
      <motion.div
        aria-hidden
        style={{ y: mediaY, scale: mediaScale }}
        className="pointer-events-none absolute inset-0 will-change-transform motion-reduce:transform-none!"
      >
        {media}
      </motion.div>

      <Spotlight x={spotlight.x} y={spotlight.y} hover={spotlight.hover} className="size-s-720" />

      {children}
    </motion.article>
  );
}
