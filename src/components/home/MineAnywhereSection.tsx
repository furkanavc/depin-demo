import Image from 'next/image';
import type { ReactNode } from 'react';
import Button from '@/components/tools/Button';
import Reveal from '@/components/tools/Reveal';
import SectionHeading from '@/components/tools/SectionHeading';
import ThemeMedia, { type ThemeMediaProps } from '@/components/tools/ThemeMedia';
import { cn } from '@/utils/cn';
import StackedRow from './StackedRow';

type Shade = {
  src: string;
  className: string;
};

type Backdrop = {
  image: string;
  shade?: Shade;
  overlayClassName?: string;
};

type MineAnywhereRowData = {
  eyebrow: string;
  title: ReactNode;
  titleClassName?: string;
  heightClassName: string;
  invertedOnLightMobile?: boolean;
  media: Record<keyof ThemeMediaProps, Backdrop>;
};

const asset = (name: string) => `/home/mine-anywhere-${name}.webp`;

const shadeAsset = (name: string) => `/home/mine-anywhere-${name}-shade.svg`;

const mobileShadeGeometry = 'left-[calc(50%_-_var(--1px)*0.5)] -translate-x-1/2 -translate-y-1/2 -rotate-90';

const fadeFromLeft = 'inset-y-0 left-0 w-s-910 bg-linear-to-l from-neutral-0/0 from-[8.11%] to-neutral-0';

const rows: MineAnywhereRowData[] = [
  {
    eyebrow: 'WHAT IS DEPIN SPACE',
    title: (
      <>
        A simple way to mine crypto with <span className="font-semibold max-lg:font-bold">real-world infrastructure.</span>
      </>
    ),
    heightClassName: 'h-s-850',
    media: {
      darkDesktop: { image: asset('home-dark') },
      darkMobile: {
        image: asset('home-dark-mobile'),
        shade: {
          src: shadeAsset('home-dark-mobile'),
          className: cn(mobileShadeGeometry, 'top-[calc(50%_+_var(--1px)*7)] h-s-427 w-s-723'),
        },
      },
      lightDesktop: { image: asset('home-light') },
      lightMobile: {
        image: asset('home-light-mobile'),
        shade: {
          src: shadeAsset('home-light-mobile'),
          className: cn(mobileShadeGeometry, 'top-[calc(50%_+_var(--1px)*7)] h-s-427 w-s-723'),
        },
      },
    },
  },
  {
    eyebrow: 'RELIABLE ANYWHERE',
    title: 'Built for remote operations. Trusted where connectivity matters most.',
    heightClassName: 'h-s-850',
    invertedOnLightMobile: true,
    media: {
      darkDesktop: { image: asset('remote-dark') },
      darkMobile: {
        image: asset('remote-dark-mobile'),
        shade: {
          src: shadeAsset('remote-dark-mobile'),
          className: cn(mobileShadeGeometry, 'top-[calc(50%_-_var(--1px)*0.5)] h-s-437 w-s-740'),
        },
      },
      lightDesktop: { image: asset('remote-light'), overlayClassName: fadeFromLeft },
      lightMobile: { image: asset('remote-light-mobile') },
    },
  },
  {
    eyebrow: 'MINE AT SCALE',
    title: 'Scale from a single receiver to a full mining fleet on the same reliable orbital connection.',
    titleClassName: 'font-medium',
    heightClassName: 'h-s-824',
    invertedOnLightMobile: true,
    media: {
      darkDesktop: {
        image: asset('scale-dark'),
        shade: {
          src: shadeAsset('scale-dark'),
          className:
            'top-[calc(50%_-_var(--1px)*79.85)] left-[calc(50%_-_var(--1px)*116.3)] h-[calc(var(--1px)*1122.29)] w-[calc(var(--1px)*1901.391)] -translate-x-1/2 -translate-y-1/2',
        },
      },
      darkMobile: { image: asset('scale-dark-mobile') },
      lightDesktop: { image: asset('scale-light'), overlayClassName: fadeFromLeft },
      lightMobile: {
        image: asset('scale-light-mobile'),
        overlayClassName:
          'inset-x-0 bottom-0 h-s-268 bg-linear-to-b from-neutral-100/0 from-[13.784%] to-neutral-100 to-[78.104%] opacity-27',
      },
    },
  },
];

function RowBackdrop({ image, shade, overlayClassName }: Backdrop) {
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </span>
      {shade && (
        <span aria-hidden className={cn('pointer-events-none absolute blur-s-100 mix-blend-hard-light', shade.className)}>
          <Image src={shade.src} alt="" fill />
        </span>
      )}
      {overlayClassName && <span aria-hidden className={cn('pointer-events-none absolute', overlayClassName)} />}
    </>
  );
}

function MineAnywhereRow({ row, covered }: { row: MineAnywhereRowData; covered: boolean }) {
  const { media, invertedOnLightMobile } = row;

  return (
    <StackedRow
      covered={covered}
      media={
        <ThemeMedia
          darkDesktop={<RowBackdrop {...media.darkDesktop} />}
          darkMobile={<RowBackdrop {...media.darkMobile} />}
          lightDesktop={<RowBackdrop {...media.lightDesktop} />}
          lightMobile={<RowBackdrop {...media.lightMobile} />}
        />
      }
      className={cn(
        'isolate flex w-full items-center overflow-hidden bg-neutral-90 px-s-60 light:bg-neutral-0 max-lg:h-s-555 max-lg:items-end max-lg:p-s-16',
        row.heightClassName,
      )}
    >
      <div className="relative mx-auto flex w-full max-w-s-1320 items-center">
        <Reveal className="flex w-s-570 flex-col items-start gap-s-48 max-lg:w-full max-lg:gap-s-24">
          <div className="flex w-full flex-col gap-s-24">
            <p
              className={cn(
                'font-poppins text-s-20 leading-s-28 font-semibold whitespace-nowrap text-neutral-0 opacity-40 max-lg:text-s-14 light:font-saira-condensed light:text-s-24 light:leading-s-32 light:text-neutral-60 light:opacity-100 light:max-lg:text-s-20 light:max-lg:leading-s-28',
                invertedOnLightMobile && 'light:max-lg:text-neutral-30',
              )}
            >
              {row.eyebrow}
            </p>
            <h3
              className={cn(
                'font-saira-condensed text-s-60 leading-s-68 text-neutral-0 light:text-neutral-90 max-lg:text-s-40 max-lg:leading-s-48 max-lg:font-medium',
                invertedOnLightMobile && 'light:max-lg:text-neutral-0',
                row.titleClassName,
              )}
            >
              {row.title}
            </h3>
          </div>
          <Button
            href="/hardware-store"
            className={cn(
              'light:border-neutral-90 light:bg-neutral-90',
              invertedOnLightMobile && 'light:max-lg:border-neutral-100 light:max-lg:bg-neutral-100',
            )}
          >
            Learn More
          </Button>
        </Reveal>
      </div>
    </StackedRow>
  );
}

export default function MineAnywhereSection() {
  return (
    <section className="w-full bg-background">
      <Reveal>
        <SectionHeading
          eyebrow="MINE ANYWHERE"
          title="ONE MINER THAT WORKS FOR YOU EVERYWHERE"
          className="w-full py-s-40 max-lg:py-s-32"
          titleClassName="text-s-60 leading-s-68 whitespace-nowrap text-neutral-0 light:text-neutrals-90 max-lg:text-s-35 max-lg:leading-s-42 max-lg:whitespace-normal max-lg:[text-box:trim-both_cap_alphabetic]"
        />
      </Reveal>

      {rows.map((row, index) => (
        <MineAnywhereRow key={row.eyebrow} row={row} covered={index < rows.length - 1} />
      ))}
    </section>
  );
}
