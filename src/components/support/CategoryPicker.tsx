'use client';

import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SupportCategory, SupportCategoryId } from '@/data/support';
import { cn } from '@/utils/cn';
import SupportIcon from './SupportIcon';
import 'swiper/css';
import 'swiper/css/free-mode';

type CategoryPickerProps = {
  categories: SupportCategory[];
  selected: SupportCategoryId | null;
  onSelect: (category: SupportCategoryId | null) => void;
};

const desktopBreakpoint = 1024;

export default function CategoryPicker({ categories, selected, onSelect }: CategoryPickerProps) {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      slidesPerView="auto"
      freeMode={{ enabled: true, momentumBounce: false }}
      mousewheel={{ forceToAxis: true }}
      grabCursor
      breakpoints={{
        [desktopBreakpoint]: {
          slidesPerView: categories.length,
          allowTouchMove: false,
          grabCursor: false,
        },
      }}
      aria-label="Support topics"
      className="lg:-mx-s-12! max-lg:-mx-s-20!"
    >
      {categories.map((category) => {
        const active = selected === category.id;

        return (
          <SwiperSlide key={category.id} className="px-s-12 max-lg:w-auto! max-lg:px-s-8 max-lg:first:pl-s-20 max-lg:last:pr-s-20">
            <button
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(active ? null : category.id)}
              className={cn(
                'flex h-s-146 w-full cursor-pointer flex-col items-center justify-center gap-s-16 rounded-s-12 border border-field-border p-s-25 transition-colors duration-300 select-none motion-reduce:transition-none max-lg:w-s-174 max-lg:px-s-41',
                active
                  ? 'bg-neutrals-70 text-neutrals-5 light:bg-neutrals-5 light:text-neutral-90'
                  : 'text-neutrals-50 hover:text-neutrals-20 light:text-neutrals-30 light:hover:text-neutral-60',
              )}
            >
              <SupportIcon name={category.icon} className="size-s-60" />
              <span className="text-s-16 leading-s-24 font-medium whitespace-nowrap">{category.label}</span>
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
