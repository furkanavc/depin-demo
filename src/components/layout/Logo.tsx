import Link from 'next/link';
import { cn } from '@/utils/cn';
import ThemeImage from '@/components/tools/ThemeImage';

type LogoProps = {
  size?: 'md' | 'lg';
  className?: string;
};

export default function Logo({ size = 'md', className }: LogoProps) {
  if (size === 'lg') {
    return (
      <Link href="/" aria-label="DePIN Space" className={cn('relative block h-s-60 w-s-183 shrink-0', className)}>
        <span className="absolute top-0 left-0 size-s-60">
          <ThemeImage
            dark="/images/shared/logo-mark-dark.svg"
            light="/images/shared/logo-mark-light.svg"
            alt=""
            fill
            className="object-contain"
          />
        </span>
        <span className="absolute top-[calc(var(--1px)*8.07)] left-[calc(var(--1px)*74.81)] flex w-[calc(var(--1px)*102.05)] flex-col gap-s-8 leading-normal text-foreground">
          <span className="[text-box:trim-both_cap_alphabetic] text-[calc(var(--1px)*33.73)] font-bold">DePIN</span>
          <span className="[text-box:trim-both_cap_alphabetic] text-center text-[calc(var(--1px)*15.9)] font-medium tracking-[calc(var(--1px)*12.4)]">
            SPACE
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="DePIN Space" className={cn('grid shrink-0 place-items-start leading-none', className)}>
      <span className="relative col-start-1 row-start-1 size-[calc(var(--1px)*49.27)]">
        <ThemeImage
          dark="/images/shared/logo-mark-dark.svg"
          light="/images/shared/logo-mark-light.svg"
          alt=""
          fill
          preload
          className="object-contain"
        />
      </span>
      <span className="col-start-1 row-start-1 mt-[calc(var(--1px)*7.94)] ml-[calc(var(--1px)*61.43)] [text-box:trim-both_cap_alphabetic] text-s-24 leading-s-32 font-bold whitespace-nowrap text-foreground">
        DePIN
      </span>
      <span className="col-start-1 row-start-1 mt-s-28 ml-[calc(var(--1px)*62.12)] text-center text-s-12 leading-s-16 tracking-s-8 whitespace-nowrap text-foreground">
        SPACE
      </span>
    </Link>
  );
}
