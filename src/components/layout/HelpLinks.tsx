import Link from 'next/link';
import type { ReactNode } from 'react';
import ThemeImage from '@/components/tools/ThemeImage';

type HelpLink = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

const links: HelpLink[] = [
  {
    title: 'How to Buy',
    description: 'Explore DePIN units.',
    href: '/hardware-store',
    icon: (
      <span className="absolute inset-[10.42%]">
        <span className="absolute inset-[-1.69%]">
          <ThemeImage dark="/images/shared/help-buy-dark.svg" light="/images/shared/help-buy-light.svg" alt="" fill />
        </span>
      </span>
    ),
  },
  {
    title: 'Support',
    description: 'Learn more about DePIN',
    href: '/support',
    icon: (
      <span className="absolute inset-[12.5%_8.33%]">
        <span className="absolute inset-[-1.79%_-1.61%]">
          <ThemeImage dark="/images/shared/help-support-dark.svg" light="/images/shared/help-support-light.svg" alt="" fill />
        </span>
      </span>
    ),
  },
  {
    title: 'Community',
    description: 'Connect with other DePIN members',
    href: '/',
    icon: <ThemeImage dark="/images/shared/help-community-dark.svg" light="/images/shared/help-community-light.svg" alt="" fill />,
  },
];

export default function HelpLinks() {
  return (
    <ul className="flex items-start gap-s-80 max-lg:w-full max-lg:justify-center max-lg:gap-s-15">
      {links.map((link) => (
        <li key={link.title} className="w-s-180 max-lg:min-w-0 max-lg:flex-1">
          <Link href={link.href} className="group flex flex-col items-center gap-s-24">
            <span className="relative size-s-56 shrink-0 overflow-hidden transition-transform group-hover:-translate-y-s-2 max-lg:size-s-36">
              {link.icon}
            </span>
            <span className="flex w-full flex-col gap-s-16 text-center">
              <span className="text-s-16 leading-s-24 font-semibold text-foreground">{link.title}</span>
              <span className="text-s-12 leading-s-16 text-muted">{link.description}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
