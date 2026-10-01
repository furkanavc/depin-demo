'use client';

import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ThemeImage from './ThemeImage';
import 'swiper/css';
import 'swiper/css/free-mode';

export type NetworkFeature = {
  title: string;
  description: string;
};

type NetworkFeatureSliderProps = {
  features: NetworkFeature[];
};

export default function NetworkFeatureSlider({ features }: NetworkFeatureSliderProps) {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      slidesPerView="auto"
      spaceBetween={0}
      freeMode={{ enabled: true, momentumBounce: false }}
      mousewheel={{ forceToAxis: true }}
      grabCursor
      className="w-full"
    >
      {features.map((feature) => (
        <SwiperSlide key={feature.title} className="w-auto! not-last:pr-s-40 max-lg:not-last:pr-s-20">
          <div className="flex items-start gap-s-12 text-foreground select-none">
            <div className="flex w-s-325 flex-col gap-s-16">
              <h3 className="[text-box:trim-both_cap_alphabetic] text-s-20 leading-s-28 font-medium">{feature.title}</h3>
              <p className="[text-box:trim-both_cap_alphabetic] text-s-14 leading-s-22 tracking-[calc(var(--1px)*0.84)]">
                {feature.description}
              </p>
            </div>
            <span className="relative size-s-24 shrink-0 overflow-hidden">
              <span className="absolute inset-y-1/4 left-[37.5%] right-[37.5%]">
                <span className="absolute inset-[-6.25%_-12.5%]">
                  <ThemeImage dark="/images/shared/arrow-right-dark.svg" light="/images/shared/arrow-right-light.svg" alt="" fill />
                </span>
              </span>
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
