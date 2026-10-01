import { cn } from '@/utils/cn';
import ThemeImage from './ThemeImage';

export type ThemeIcon = {
  dark: string;
  light: string;
};

type IconFeatureSize = 'md' | 'sm';

const titleClasses: Record<IconFeatureSize, string> = {
  md: 'text-s-16 leading-s-24 font-semibold text-neutral-10 light:text-neutrals-90',
  sm: '[text-box:trim-both_cap_alphabetic] text-s-15 leading-s-20 font-semibold text-neutral-10 light:text-neutral-90',
};

const descriptionClasses: Record<IconFeatureSize, string> = {
  md: 'text-s-14 leading-s-20 text-neutral-30 light:text-neutrals-70',
  sm: '[text-box:trim-both_cap_alphabetic] text-s-12 leading-s-16 text-neutral-30 light:text-neutral-70',
};

type IconFeatureProps = {
  icon: ThemeIcon;
  title: string;
  description: string;
  size?: IconFeatureSize;
  className?: string;
};

export default function IconFeature({ icon, title, description, size = 'md', className }: IconFeatureProps) {
  return (
    <div className={cn('flex w-s-180 flex-col items-center gap-s-24 text-center', className)}>
      <span className="relative size-s-56 shrink-0">
        <ThemeImage dark={icon.dark} light={icon.light} alt="" fill sizes="56px" />
      </span>
      <div className="flex w-full flex-col gap-s-16">
        <h3 className={titleClasses[size]}>{title}</h3>
        <p className={descriptionClasses[size]}>{description}</p>
      </div>
    </div>
  );
}
