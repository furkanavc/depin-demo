import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import Reveal from './Reveal';

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  media: ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function PageHero({ title, subtitle, actions, media, className, contentClassName }: PageHeroProps) {
  return (
    <section className={cn('relative h-s-568 w-full overflow-hidden bg-hero light:bg-neutral-0 max-lg:h-s-782', className)}>
      {media}

      <div
        aria-hidden
        className="pointer-events-none absolute -top-s-27 left-0 h-s-850 w-s-910 bg-linear-to-l from-neutral-100/0 from-[8.11%] to-neutral-100/50 light:from-neutral-0/0 light:to-neutral-0/50 max-lg:inset-0 max-lg:h-auto max-lg:w-auto max-lg:bg-linear-to-t"
      />

      <div className="relative mx-auto h-full w-full max-w-s-1440">
        <div
          className={cn(
            'absolute top-[calc(50%_+_var(--1px)*42.5)] left-s-69 flex w-s-570 -translate-y-1/2 flex-col items-start gap-s-48 max-lg:top-[calc(50%_-_var(--1px)*151.5)] max-lg:left-s-19 max-lg:w-s-355',
            contentClassName,
          )}
        >
          <Reveal className="flex w-full flex-col gap-s-24">
            <h1 className="font-saira-condensed text-s-60 leading-s-68 font-semibold text-neutral-10 light:text-neutrals-90 max-lg:text-s-40 max-lg:leading-s-48">
              {title}
            </h1>
            {subtitle && (
              <p className="text-s-20 leading-s-28 font-semibold text-neutral-20 light:text-neutrals-base max-lg:text-s-18 max-lg:leading-s-24">{subtitle}</p>
            )}
          </Reveal>
          {actions && (
            <Reveal delay={0.12} className="flex items-start gap-s-20">
              {actions}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
