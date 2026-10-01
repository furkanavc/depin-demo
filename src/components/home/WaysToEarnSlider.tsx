'use client';

import { motion, useTransform } from 'motion/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reveal from '@/components/tools/Reveal';
import Spotlight, { useSpotlight } from '@/components/tools/Spotlight';
import { cn } from '@/utils/cn';
import 'swiper/css';
import 'swiper/css/free-mode';

const HOVER_ZOOM = 0.04;

export type EarnWay = {
  image: string;
  description: ReactNode;
  imageClassName?: string;
};

type WaysToEarnSliderProps = {
  ways: EarnWay[];
};

function EarnCard({ way }: { way: EarnWay }) {
  const spotlight = useSpotlight();
  const zoom = useTransform(spotlight.hover, [0, 1], [1, 1 + HOVER_ZOOM]);

  return (
    <article className="flex w-s-424 flex-col items-start gap-s-24 select-none max-lg:w-[calc(var(--1px)*337.849)] max-lg:gap-[calc(var(--1px)*19.124)]">
      <div
        {...spotlight.handlers}
        className="relative size-s-424 overflow-hidden rounded-s-24 bg-neutral-80 light:bg-neutral-30 max-lg:size-[calc(var(--1px)*337.849)] max-lg:rounded-[calc(var(--1px)*19.124)]"
      >
        <span className={cn('absolute inset-0', way.imageClassName)}>
          <motion.span
            style={{ scale: zoom }}
            className="absolute inset-0 will-change-transform motion-reduce:transform-none!"
          >
            <Image
              src={way.image}
              alt=""
              fill
              sizes="(max-width: 1023px) 85vw, 30vw"
              draggable={false}
              className="object-cover"
            />
          </motion.span>
        </span>
        <Spotlight x={spotlight.x} y={spotlight.y} hover={spotlight.hover} className="size-s-560" />
      </div>
      <p className="w-s-360 [text-box:trim-both_cap_alphabetic] text-s-15 leading-s-22 text-neutral-40 light:text-neutral-70 max-lg:w-[calc(var(--1px)*286.853)] max-lg:text-[calc(var(--1px)*11.952)] max-lg:leading-[calc(var(--1px)*17.53)]">
        {way.description}
      </p>
    </article>
  );
}

export default function WaysToEarnSlider({ ways }: WaysToEarnSliderProps) {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      slidesPerView="auto"
      spaceBetween={0}
      freeMode={{ enabled: true, momentumBounce: false }}
      mousewheel={{ forceToAxis: true }}
      grabCursor
      className="w-full overflow-visible!"
    >
      {ways.map((way, index) => (
        <SwiperSlide key={way.image} className="w-auto! not-last:pr-s-24">
          <Reveal delay={index * 0.08}>
            <EarnCard way={way} />
          </Reveal>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
