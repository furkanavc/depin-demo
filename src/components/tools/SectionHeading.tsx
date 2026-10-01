import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type SectionHeadingAlign = 'center' | 'start';

const alignClasses: Record<SectionHeadingAlign, string> = {
  center: 'items-center text-center',
  start: 'items-start text-start',
};

const defaultEyebrowClassName =
  'font-saira-condensed text-s-24 leading-s-32 font-semibold text-neutral-0 opacity-40 light:text-neutrals-90 max-lg:text-s-20 max-lg:leading-s-28';

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: SectionHeadingAlign;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  eyebrowClassName = defaultEyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-s-24', alignClasses[align], className)}>
      <p className={cn('whitespace-nowrap', eyebrowClassName)}>{eyebrow}</p>
      <h2 className={cn('font-saira-condensed', titleClassName)}>{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
}
