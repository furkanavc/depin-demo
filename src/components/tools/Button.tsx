import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/utils/cn';

export type ButtonVariant = 'primary' | 'white' | 'ink' | 'none';
export type ButtonSize = 'md' | 'nav';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'border border-btn-primary-border bg-btn-primary-bg text-btn-primary-fg',
  white: 'border border-neutrals-10 bg-neutral-0 text-ink hover:bg-neutral-10',
  ink: 'bg-ink text-neutral-0 hover:bg-neutral-80',
  none: '',
};

const hoverSheen =
  'bg-[linear-gradient(110deg,transparent_35%,color-mix(in_srgb,currentColor_14%,transparent)_50%,transparent_65%)] bg-size-[250%_100%] bg-position-[150%_0] bg-no-repeat hover:bg-position-[-50%_0]';

const hoverMotion =
  'transition-[background-color,background-position,opacity] duration-500 ease-out motion-reduce:transition-none';

const sizeClasses: Record<ButtonSize, string> = {
  md: 'h-s-48 gap-s-8 px-s-32 py-s-12 text-s-14 leading-s-20',
  nav: 'h-s-48 px-s-24 py-s-16 text-s-15 leading-normal',
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & Omit<ComponentProps<typeof Link>, keyof BaseProps> & { href: string };
type ButtonAsButton = BaseProps & Omit<ComponentProps<'button'>, keyof BaseProps> & { href?: undefined };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-s-8 font-semibold whitespace-nowrap',
    hoverSheen,
    hoverMotion,
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (props.href !== undefined) {
    return (
      <Link {...(props as ButtonAsLink)} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
