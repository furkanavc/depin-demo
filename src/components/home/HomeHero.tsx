import Image from 'next/image';
import Button from '@/components/tools/Button';
import ThemeImage from '@/components/tools/ThemeImage';
import { cn } from '@/utils/cn';
import HeroParallax from './HeroParallax';

const heroModels = [
  { label: 'DPS 10', active: false },
  { label: 'DPS 50', active: true },
  { label: 'DPS 100', active: false },
];

function HeroMedia() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 max-lg:hidden">
        <ThemeImage
          dark="/home/hero-dark.webp"
          light="/home/hero-light.webp"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
        <ThemeImage
          dark="/home/hero-sky-dark-mobile.webp"
          light="/home/hero-sky-light-mobile.webp"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <span className="absolute -top-s-82 left-[calc(50%_-_var(--1px)*114)] h-s-526 w-s-544 -translate-x-1/2 mix-blend-screen">
          <span className="absolute inset-[-38.02%_-36.76%]">
            <Image src="/home/hero-glow-mobile.svg" alt="" fill />
          </span>
        </span>
        <div className="absolute inset-x-0 top-s-89 bottom-0">
          <ThemeImage
            dark="/home/hero-roof-dark-mobile.webp"
            light="/home/hero-roof-light-mobile.webp"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default function HomeHero() {
  return (
    <HeroParallax
      media={<HeroMedia />}
      className="relative h-s-900 w-full overflow-hidden bg-hero light:bg-neutral-0 max-lg:h-s-782"
    >
      <div className="relative mx-auto h-full w-full max-w-s-1440">
        <div className="absolute top-s-159 left-s-60 flex w-s-800 flex-col items-start gap-s-44 max-lg:top-s-137 max-lg:left-s-16 max-lg:w-s-386 max-lg:gap-s-20 light:max-lg:top-s-117">
          <div className="flex w-full flex-col gap-s-24">
            <h1 className="flex w-full flex-col gap-s-16 font-saira-condensed text-neutral-0 light:text-neutral-90 max-lg:w-s-452 max-lg:gap-[calc(var(--1px)*9.04)]">
              <span className="text-s-60 leading-s-68 max-lg:text-s-40 max-lg:leading-s-48">MINE CRYPTO</span>
              <span className="[text-box:trim-both_cap_alphabetic] text-s-80 leading-s-88 font-bold max-lg:text-s-45 max-lg:leading-[calc(var(--1px)*49.72)]">
                POWERED BY SPACE
              </span>
            </h1>
            <p className="w-full text-s-16 leading-s-24 font-medium text-neutral-40 light:text-neutral-60">
              Engineered for reliable, always-on operation through integrated satellite connectivity and decentralized
              network support.
            </p>
          </div>
          <Button href="/hardware-store">Start Free Now</Button>
        </div>

        <div className="absolute top-s-657 left-s-60 flex items-center gap-s-19 max-lg:top-s-618 max-lg:left-s-16">
          <span aria-hidden className="relative h-[calc(var(--1px)*17.201)] w-[calc(var(--1px)*2.646)] shrink-0">
            <span className="absolute inset-0 rounded-s-4 bg-neutral-0 opacity-40" />
            <span className="absolute top-0 left-0 h-[calc(var(--1px)*6.354)] w-full rounded-s-4 bg-neutral-0" />
          </span>
          <ul className="flex w-s-90 flex-col gap-s-31 text-s-13 leading-s-16 font-medium">
            {heroModels.map((model) => (
              <li
                key={model.label}
                className={cn(
                  '[text-box:trim-both_cap_alphabetic]',
                  model.active
                    ? 'text-neutral-0 light:text-neutral-70'
                    : 'text-neutral-40 opacity-40 light:text-neutral-80',
                )}
              >
                {model.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeroParallax>
  );
}
