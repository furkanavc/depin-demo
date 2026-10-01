'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';

type HeroParallaxProps = {
  media: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function HeroParallax({ media, children, className }: HeroParallaxProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={heroRef} className={className}>
      <motion.div
        style={{ y: mediaY, scale: mediaScale }}
        className="pointer-events-none absolute inset-0 will-change-transform motion-reduce:transform-none!"
      >
        {media}
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative h-full w-full motion-reduce:transform-none! motion-reduce:opacity-100!"
      >
        {children}
      </motion.div>
    </section>
  );
}
