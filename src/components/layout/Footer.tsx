import Link from 'next/link';
import { footerColumns } from '@/data/navigation';
import HelpLinks from './HelpLinks';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="mx-auto flex w-full max-w-s-1440 flex-col items-center gap-s-80 px-s-60 pt-s-100 pb-s-80 max-lg:items-start max-lg:gap-s-40 max-lg:px-s-20 max-lg:py-s-60">
        <HelpLinks />

        <div className="flex w-full items-start gap-s-80 max-lg:flex-col max-lg:gap-s-30">
          <div className="flex min-w-0 flex-1 flex-col gap-s-24 max-lg:w-full">
            <h2 className="font-saira-condensed text-s-40 leading-s-48 text-foreground max-lg:text-s-32 max-lg:leading-s-40">
              Get exclusive orbital updates and presale notifications.
            </h2>
            <p className="text-s-14 leading-s-20 text-muted">
              Sign up to receive periodic emails from DePIN Space. Unsubscribe anytime.
            </p>
          </div>
          <NewsletterForm className="w-s-625 shrink-0 max-lg:w-full" />
        </div>

        <div className="flex w-full items-start justify-between max-lg:flex-col max-lg:gap-s-40">
          <div className="flex w-s-240 flex-col gap-s-24">
            <Logo size="lg" className="max-lg:hidden" />
            <Logo className="lg:hidden" />
            <p className="[text-box:trim-both_cap_alphabetic] text-s-12 leading-s-16 text-muted max-lg:hidden">
              Powering next-generation physical node ecosystems from orbit.
            </p>
          </div>

          <div className="contents max-lg:grid max-lg:w-full max-lg:grid-cols-2 max-lg:gap-s-40">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex w-s-150 flex-col gap-s-16 whitespace-nowrap max-lg:w-auto">
                <h3 className="text-s-16 leading-s-20 font-semibold text-foreground max-lg:text-s-14">{column.title}</h3>
                <ul className="flex flex-col gap-s-16">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="[text-box:trim-both_cap_alphabetic] text-s-13 leading-s-18 text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center gap-s-40 text-s-12 leading-s-16 max-lg:flex-col max-lg:items-start max-lg:gap-s-20">
          <p className="w-s-300 shrink-0 [text-box:trim-both_cap_alphabetic] text-muted">
            © DePIN Space Inc, 2025. All rights reserved.
          </p>
          <p className="min-w-0 flex-1 max-lg:flex-none [text-box:trim-both_cap_alphabetic] text-subtle">
            Disclaimer: This website is for informational purposes only and does not constitute an offer to sell or a
            solicitation to buy any security, asset, or financial services.
          </p>
        </div>
      </div>
    </footer>
  );
}
