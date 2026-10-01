export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductImage = {
  dark: string;
  light: string;
};

export type ProductDetail = {
  headline: string;
  description: string;
  highlights: string[];
  specs: ProductSpec[];
  price: string;
  gallery: ProductImage[];
};

export type Product = {
  slug: string;
  series: string;
  model: string;
  badge: string;
  description: string;
  detail: ProductDetail;
};

const galleryLength = 4;

const detailGallery = (slug: string): ProductImage[] =>
  Array.from({ length: galleryLength }, () => ({
    dark: `/images/hardware-store/products/${slug}-detail-dark.webp`,
    light: `/images/hardware-store/products/${slug}-detail-light.webp`,
  }));

const sharedDetail = {
  headline:
    'Orbital Core is a powerful space-connected DePIN miner designed for continuous operation, dependable performance, and global infrastructure support.',
  description:
    'Orbital Core is a powerful space-connected DePIN miner designed for continuous operation, dependable performance, and global infrastructure support. Its integrated satellite communication system helps maintain secure connectivity while delivering efficient processing for next-generation decentralized applications.',
  highlights: [
    'Est. Yield: ~4,820 DEGEN / day',
    'Internal Satellite Antenna',
    'Level 1 Mining Power',
    'WiFi & Ethernet Ready',
    'Ultra-low Power Consumption',
  ],
  specs: [
    { label: 'Connectivity', value: 'Satellite, Wi-Fi and Ethernet' },
    { label: 'Network Support', value: 'Global DePIN networks' },
    { label: 'Processor', value: 'High-efficiency multi-core processor' },
    { label: 'Power Usage', value: 'Up to 180 W' },
    { label: 'Operation', value: '24/7 continuous performance' },
  ],
  price: '$599',
};

export const products: Product[] = [
  {
    slug: 'dps-10',
    series: 'DPS',
    model: '10',
    badge: 'ENTRY MODEL',
    description: 'Entry-level device for home users and small nodes.\nSimple connection, quiet setup.',
    detail: { ...sharedDetail, gallery: detailGallery('dps-10') },
  },
  {
    slug: 'dps-30',
    series: 'DPS',
    model: '30',
    badge: 'MOST POPULAR',
    description: 'High-performance equipment for operators, validators and commercial space setups.',
    detail: { ...sharedDetail, gallery: detailGallery('dps-30') },
  },
  {
    slug: 'dps-50',
    series: 'DPS',
    model: '50',
    badge: 'ENTERPRISE FLEET',
    description: 'Flagship enterprise-grade miner for orbital infrastructure and larger node clusters.',
    detail: { ...sharedDetail, gallery: detailGallery('dps-50') },
  },
];

export const productName = (product: Product) => `${product.series} ${product.model}`;

export const productHref = (slug: string) => `/hardware-store/${slug}`;

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
