export type SupportGlyph = 'drive' | 'money' | 'configuration' | 'manager' | 'plus' | 'minus';

export type SupportCategoryId = 'modem' | 'pricing' | 'degen-token' | 'modem-setup' | 'ownership';

export type SupportCategory = {
  id: SupportCategoryId;
  label: string;
  icon: SupportGlyph;
};

export type FaqItem = {
  question: string;
  answer: string;
  category?: SupportCategoryId;
};

export const supportCategories: SupportCategory[] = [
  { id: 'modem', label: 'Modem', icon: 'drive' },
  { id: 'pricing', label: 'Pricing', icon: 'money' },
  { id: 'degen-token', label: 'DEGEN Token', icon: 'drive' },
  { id: 'modem-setup', label: 'Modem Setup', icon: 'configuration' },
  { id: 'ownership', label: 'Ownership', icon: 'manager' },
];

export const supportFaqs: FaqItem[] = [
  {
    category: 'modem',
    question: 'How do I activate my miner?',
    answer:
      "When your miner arrives, start by scanning the QR code located on the box. This will guide you to create a new account if you don't already have one. After setting up your account, connect your miner device to your network. Once connected, you can access your personalized portal to monitor and manage your mining activities. This process ensures you get started quickly and easily with your new miner.",
  },
  {
    category: 'modem-setup',
    question: 'How do I set up my modem?',
    answer:
      'Place the modem where it has a clear view of the sky, connect the power adapter and wait for the status light to turn solid. Then scan the QR code on the device to link it to your DePIN Space account.',
  },
  {
    category: 'modem-setup',
    question: 'What steps do I follow to activate my modem?',
    answer:
      'Power the modem on, scan its QR code in the portal and confirm the pairing request. Activation completes automatically once the modem reports its first satellite connection.',
  },
  {
    category: 'modem',
    question: 'Can you guide me on how to turn on my modem?',
    answer:
      'Connect the supplied power adapter and press the power button on the back of the modem for two seconds. The status light blinks while it boots and turns solid when it is ready.',
  },
  {
    category: 'modem-setup',
    question: 'How can I get my modem up and running?',
    answer:
      'Mount the modem outdoors or next to a window, power it on and pair it from your portal. Most modems are online within ten minutes of their first boot.',
  },
  {
    category: 'modem',
    question: 'What’s the process to start using my modem?',
    answer:
      'After pairing, the modem appears in your portal with its connection status. Link your miner to the modem network and it starts contributing to the DePIN Space network right away.',
  },
  {
    category: 'modem-setup',
    question: 'How do I connect and activate my modem?',
    answer:
      'Connect your miner to the modem with the included cable or over Wi-Fi, then open the portal and confirm both devices. The portal activates them together as one node.',
  },
  {
    category: 'modem',
    question: 'Could you explain how to enable my modem?',
    answer:
      'A paired modem is enabled from the device page in your portal. Switch it on there and it stays enabled across restarts until you disable it again.',
  },
  {
    category: 'pricing',
    question: 'How is mining power priced?',
    answer:
      'Mining power scales with the DEGEN held in your portal wallet. Each tier sets the DEGEN required and the mine multiplier your miner earns at.',
  },
  {
    category: 'degen-token',
    question: 'What can I do with DEGEN?',
    answer:
      'DEGEN pays for network gas, can be staked to cut gas costs by up to 75%, can be chosen as your mining payout asset and gives holders a voice in network governance.',
  },
  {
    category: 'ownership',
    question: 'Who owns my miner and its rewards?',
    answer:
      'The miner is yours once it is delivered and linked to your account. Rewards settle to the portal wallet tied to that account, and only you can withdraw them.',
  },
];

export const quickAnswers: FaqItem[] = [
  {
    question: 'How do I activate my miner?',
    answer:
      'When your miner arrives, scan the QR code printed on the box. Create an account and connect the device to open your portal.',
  },
  {
    question: 'How do I unlock higher mining power?',
    answer: 'Hold more DEGEN in your portal wallet to move up a power tier and raise your mine multiplier.',
  },
  {
    question: 'How do I stake DEGEN to save gas?',
    answer: 'Lock DEGEN to unlock a higher wallet tier and cut your gas costs by up to 75%. The longer you stake, the bigger the discount.',
  },
];
