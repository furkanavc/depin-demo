'use client';

import { AnimatePresence, MotionConfig, motion, type PanInfo, type Variants } from 'motion/react';
import { type KeyboardEvent, useState } from 'react';
import ThemeImage from '@/components/tools/ThemeImage';
import type { ProductImage } from '@/data/products';
import { cn } from '@/utils/cn';

const easeOutExpo = [0.22, 1, 0.36, 1] as const;
const swipeThreshold = 60;

const frameClassName = 'relative overflow-hidden border border-neutral-70 light:border-neutrals-10';

const slideVariants: Variants = {
  enter: (direction: number) => ({
    clipPath: direction > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)',
    scale: 1.12,
    zIndex: 1,
  }),
  center: {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-8%' : '8%',
    opacity: 0.3,
    zIndex: 0,
  }),
};

type GalleryPictureProps = {
  image: ProductImage;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
};

function GalleryPicture({ image, alt, sizes, eager = false, className }: GalleryPictureProps) {
  return (
    <>
      <ThemeImage
        dark={image.dark}
        light={image.light}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? 'eager' : 'lazy'}
        className={cn('object-cover', className)}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-neutral-100/0 from-[82%] to-neutral-100 to-[98%] light:from-neutral-0/0 light:to-neutral-0"
      />
    </>
  );
}

type ProductGalleryProps = {
  images: ProductImage[];
  name: string;
};

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [{ active, direction }, setSlide] = useState({ active: 0, direction: 1 });
  const total = images.length;

  const wrap = (index: number) => (index + total) % total;
  const thumbnails = Array.from({ length: total - 1 }, (_, offset) => wrap(active + offset + 1));
  const altFor = (index: number) => `${name} view ${index + 1} of ${total}`;

  const show = (index: number, nextDirection: number) => {
    if (index !== active) setSlide({ active: index, direction: nextDirection });
  };
  const step = (delta: number) => show(wrap(active + delta), delta);

  const handlePanEnd = (_: PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) < swipeThreshold) return;
    step(info.offset.x < 0 ? 1 : -1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex w-full items-stretch gap-s-40 max-lg:flex-col max-lg:gap-s-12">
        <motion.div
          role="group"
          aria-roledescription="carousel"
          aria-label={`${name} gallery`}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPanEnd={handlePanEnd}
          className={cn(
            frameClassName,
            'h-s-742 w-s-1017 flex-none touch-pan-y rounded-s-12 outline-none focus-visible:border-neutral-50 max-lg:h-s-370 max-lg:w-full',
          )}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: easeOutExpo }}
              className="absolute inset-0"
            >
              <GalleryPicture
                image={images[active]}
                alt={altFor(active)}
                sizes="(max-width: 1023px) 100vw, 71vw"
                eager={active === 0}
                className="pointer-events-none select-none"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          layoutScroll
          className="relative flex min-w-0 flex-1 flex-col gap-s-40 max-lg:flex-none max-lg:flex-row max-lg:gap-s-12 max-lg:overflow-x-auto max-lg:[scrollbar-width:none]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {thumbnails.map((index) => (
              <motion.button
                key={index}
                layout
                type="button"
                aria-label={`Show ${altFor(index)}`}
                onClick={() => show(index, 1)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className={cn(
                  frameClassName,
                  'group min-h-0 flex-1 cursor-pointer rounded-s-12 outline-none focus-visible:border-neutral-50 max-lg:h-s-160 max-lg:w-s-179 max-lg:flex-none max-lg:rounded-s-16',
                )}
              >
                <GalleryPicture
                  image={images[index]}
                  alt=""
                  sizes="(max-width: 1023px) 45vw, 19vw"
                  className="transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
