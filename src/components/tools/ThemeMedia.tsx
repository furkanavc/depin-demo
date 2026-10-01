import type { ReactNode } from 'react';

export type ThemeMediaProps = {
  darkDesktop: ReactNode;
  darkMobile: ReactNode;
  lightDesktop: ReactNode;
  lightMobile: ReactNode;
};

export default function ThemeMedia({ darkDesktop, darkMobile, lightDesktop, lightMobile }: ThemeMediaProps) {
  return (
    <>
      <div className="light:hidden">
        <div className="max-lg:hidden">{darkDesktop}</div>
        <div className="lg:hidden">{darkMobile}</div>
      </div>
      <div className="hidden light:block">
        <div className="max-lg:hidden">{lightDesktop}</div>
        <div className="lg:hidden">{lightMobile}</div>
      </div>
    </>
  );
}
