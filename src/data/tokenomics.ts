export type Allocation = {
  share: string;
  title: string;
  amount: string;
  description: string;
  swatchClassName: string;
  shareClassName: string;
  segmentClassName: string;
  segmentLabelClassName: string;
};

export const allocations: Allocation[] = [
  {
    share: '50%',
    title: 'Hardware Mining Pool',
    amount: '10 Billion',
    description:
      'Half of every token ever created is reserved for the miners powering the network — across all five hardware models plus multi-coin and Orbital Power rewards.',
    swatchClassName: 'bg-allocation-mining',
    shareClassName: 'text-allocation-mining',
    segmentClassName: 'w-1/2 bg-allocation-mining max-lg:w-auto max-lg:flex-1',
    segmentLabelClassName: 'text-s-24 leading-s-32 max-lg:text-s-14',
  },
  {
    share: '25%',
    title: 'Presale & Bonuses',
    amount: '5 Billion',
    description:
      'A hard-capped pool covering every stage purchase and every promotional bonus across all 15 presale stages. Nothing gets minted beyond it.',
    swatchClassName: 'bg-allocation-presale',
    shareClassName: 'text-allocation-presale',
    segmentClassName: 'w-1/4 bg-allocation-presale opacity-60 max-lg:w-s-83',
    segmentLabelClassName: 'text-s-24 leading-s-32 max-lg:text-s-14',
  },
  {
    share: '13%',
    title: 'Ecosystem & R&D',
    amount: '2.6 Billion',
    description:
      'Funds the ongoing research and development behind Orbital Power Boost, satellite connectivity, and the broader network infrastructure.',
    swatchClassName: 'bg-allocation-ecosystem',
    shareClassName: 'text-allocation-ecosystem',
    segmentClassName: 'w-[13%] bg-allocation-ecosystem opacity-60 max-lg:w-s-43',
    segmentLabelClassName: 'text-s-24 leading-s-32 max-lg:text-s-14',
  },
  {
    share: '5%',
    title: 'Team (Vested 36 Month)',
    amount: '1.0 Billion',
    description:
      'Locked behind a 12-month cliff, then released monthly over 36 months — no early unlocks that could pressure the price.',
    swatchClassName: 'bg-allocation-team',
    shareClassName: 'text-allocation-team',
    segmentClassName: 'w-[5%] bg-allocation-team opacity-60 max-lg:w-s-20',
    segmentLabelClassName: 'text-s-24 leading-s-32 max-lg:mt-s-30 max-lg:-rotate-90 max-lg:text-s-14',
  },
  {
    share: '5%',
    title: 'Exchange',
    amount: '1.0 Billion',
    description:
      'Supports exchange listings, market making, and DEX pools at launch, released gradually rather than all at once.',
    swatchClassName: 'bg-allocation-exchange',
    shareClassName: 'text-allocation-exchange',
    segmentClassName: 'w-[5%] bg-allocation-exchange opacity-60 max-lg:w-s-18',
    segmentLabelClassName: 'text-s-20 leading-s-28 max-lg:mt-s-30 max-lg:-rotate-90 max-lg:text-s-12',
  },
  {
    share: '2%',
    title: 'Free App',
    amount: '0.4 Billion',
    description:
      'Reserved separately for the free mining app, with variable, activity-based rewards capped to protect the pool from being drained.',
    swatchClassName: 'bg-allocation-app',
    shareClassName: 'text-allocation-app',
    segmentClassName: 'w-[2%] bg-allocation-app opacity-60 max-lg:w-s-17',
    segmentLabelClassName: 'text-s-20 leading-s-28 max-lg:mt-s-30 max-lg:-rotate-90 max-lg:text-s-12',
  },
];

export type PowerTier = {
  level: string;
  shortLevel?: string;
  required: string;
  multiplier: string;
};

export const powerTiers: PowerTier[] = [
  { level: 'Level 1', required: '0 DEGEN', multiplier: 'Basic Power (1.0x)' },
  { level: 'Level 2', required: '50,000 DEGEN', multiplier: 'Level 2 Power (1.5x)' },
  { level: 'Level 3', required: '250,000 DEGEN', multiplier: 'Level 3 Power (2.5x)' },
  { level: 'Max Level', shortLevel: 'Max', required: '1,000,000 DEGEN', multiplier: 'Max Power (5.0x)' },
];
