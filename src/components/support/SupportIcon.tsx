import type { CSSProperties } from 'react';
import type { SupportGlyph } from '@/data/support';
import { cn } from '@/utils/cn';

type GlyphLayout = {
  src: string;
  frame: string;
  bleed: string;
};

const glyphs: Record<SupportGlyph, GlyphLayout> = {
  drive: {
    src: '/images/support/icon-drive.svg',
    frame: 'inset-y-[8.33%] inset-x-[16.67%]',
    bleed: 'inset-y-[-3.75%] inset-x-[-4.69%]',
  },
  money: {
    src: '/images/support/icon-money.svg',
    frame: 'inset-y-[8.33%] inset-x-[12.5%] -scale-y-100',
    bleed: 'inset-y-[-3.75%] inset-x-[-4.17%]',
  },
  configuration: {
    src: '/images/support/icon-configuration.svg',
    frame: 'inset-0',
    bleed: 'inset-0',
  },
  manager: {
    src: '/images/support/icon-manager.svg',
    frame: 'inset-y-[8.33%] inset-x-[16.67%] -scale-y-100',
    bleed: 'inset-y-[-3.75%] inset-x-[-4.69%]',
  },
  plus: {
    src: '/images/support/icon-plus.svg',
    frame: 'inset-0',
    bleed: 'inset-0',
  },
  minus: {
    src: '/images/support/icon-minus.svg',
    frame: 'inset-y-1/2 inset-x-[10.42%]',
    bleed: 'inset-y-[calc(var(--1px)*-1)] inset-x-[-5.26%]',
  },
};

type SupportIconProps = {
  name: SupportGlyph;
  className?: string;
};

export default function SupportIcon({ name, className }: SupportIconProps) {
  const glyph = glyphs[name];

  return (
    <span aria-hidden className={cn('relative block shrink-0', className)}>
      <span className={cn('absolute', glyph.frame)}>
        <span
          className={cn('absolute bg-current [mask:var(--glyph)_center/100%_100%_no-repeat]', glyph.bleed)}
          style={{ '--glyph': `url(${glyph.src})` } as CSSProperties}
        />
      </span>
    </span>
  );
}
