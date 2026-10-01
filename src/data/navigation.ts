export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: 'Buy Now', href: '/hardware-store' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'Support', href: '/support' },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'About',
    links: [
      { label: 'About DPS', href: '/' },
      { label: 'Features', href: '/' },
      { label: 'Tokenomics', href: '/tokenomics' },
      { label: 'Roadmap', href: '/' },
    ],
  },
  {
    title: 'Miners',
    links: [
      { label: 'How to Buy', href: '/hardware-store' },
      { label: 'FAQ & Help', href: '/support' },
      { label: 'Community', href: '/' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Live Tracking', href: '/' },
      { label: 'DPS Coin', href: '/tokenomics' },
      { label: 'Developer API', href: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Cookie Policy', href: '/' },
    ],
  },
];
