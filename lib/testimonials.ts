export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projectType: string;
  quote: string;
  metric: string;
  metricLabel: string;
  image: string;
  initials: string;
  verified: boolean;
};

export const clientTestimonials: Testimonial[] = [
  {
    id: 'succeed-capital',
    name: 'Marcus Lindqvist',
    role: 'Managing Director & Partner',
    company: 'Succeed Capital FX',
    location: 'Stockholm, Sweden',
    projectType: 'Broker CRM & Trading Terminal',
    quote:
      'AayaamX engineered our entire client onboarding pipeline and MT5 multi-account portal. What impressed our board was their deep understanding of broker risk, KYC compliance, and FIX protocol. We scaled past $120M in monthly volume with zero downtime.',
    metric: '$120M+',
    metricLabel: 'Monthly Processed Volume',
    image: '/testimonials/client-1.png',
    initials: 'ML',
    verified: true,
  },
  {
    id: 'paystream-web3',
    name: 'Elena Rostova',
    role: 'Head of Product & Infrastructure',
    company: 'PayStream Protocol',
    location: 'Zug, Switzerland',
    projectType: 'Multi-Chain Crypto Payment Gateway',
    quote:
      'Finding engineers who genuinely understand mempool monitoring, non-custodial HD wallet derivation, and gas-efficient smart contracts is rare. AayaamX built our multi-chain payment rails in 7 weeks. Our merchant chargebacks dropped to absolute zero.',
    metric: '99.99%',
    metricLabel: 'Settlement Reliability',
    image: '/testimonials/client-2.png',
    initials: 'ER',
    verified: true,
  },
  {
    id: 'resvip-nordic',
    name: 'Daniel Van Der Berg',
    role: 'Chief Operating Officer',
    company: 'ResVIP Nordic Transport',
    location: 'Gothenburg, Sweden',
    projectType: 'Enterprise Fleet & Booking Ecosystem',
    quote:
      'The booking engine and driver workspace AayaamX delivered transformed our Scandinavian coach operations. Passenger checkout takes less than 45 seconds, double bookings were completely eliminated, and our digital ticket validation is instantaneous.',
    metric: '38%',
    metricLabel: 'Increase in Online Bookings',
    image: '/testimonials/client-3.png',
    initials: 'DV',
    verified: true,
  },
];
