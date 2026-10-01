'use client';

import { motion, useMotionValue, useSpring, type MotionValue } from 'motion/react';
import type { PointerEvent } from 'react';
import { cn } from '@/utils/cn';

const pointerSpring = { stiffness: 160, damping: 26, mass: 0.6 };
const hoverSpring = { stiffness: 220, damping: 30 };

export function useSpotlight() {
  const hover = useSpring(0, hoverSpring);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, pointerSpring);
  const y = useSpring(pointerY, pointerSpring);

  const readPointer = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  };

  const handlers = {
    onPointerEnter: (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType !== 'mouse') return;
      readPointer(event);
      x.jump(pointerX.get());
      y.jump(pointerY.get());
      hover.set(1);
    },
    onPointerMove: (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType !== 'mouse') return;
      readPointer(event);
    },
    onPointerLeave: () => hover.set(0),
  };

  return { hover, x, y, handlers };
}

type SpotlightProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  hover: MotionValue<number>;
  className?: string;
};

export default function Spotlight({ x, y, hover, className }: SpotlightProps) {
  return (
    <motion.span
      aria-hidden
      style={{ x, y, opacity: hover }}
      className={cn(
        'pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--spotlight-color)_0%,transparent_65%)] opacity-0 mix-blend-screen [--spotlight-color:color-mix(in_srgb,var(--color-sky-blue-50)_28%,transparent)] light:mix-blend-normal light:[--spotlight-color:color-mix(in_srgb,var(--color-neutral-0)_45%,transparent)] max-lg:hidden motion-reduce:hidden',
        className,
      )}
    />
  );
}
