export const caseStudies = [
  {
    slug: 'succeed-capital-fx',
    architecture: ['Shared backend', 'Website, CRM and trading apps'],
    category: 'Fintech',
    name: 'Succeed Capital FX',
    summary: 'A connected platform for a multi-asset brokerage. Traders can manage verification, funding and trading accounts in one client portal. The website, Broker CRM and trading apps share a backend with dedicated risk controls.',
    scope: ['Trader onboarding & verification', 'Broker CRM & account management', 'Funding & wallet activity', 'Web & mobile trading', 'Risk controls'],
  },
  {
    slug: 'solitaire-markets',
    architecture: ['FIX 4.4', 'Order routing and execution protocol'],
    category: 'Fintech',
    name: 'Solitaire Markets',
    summary: 'Web and mobile Trading Apps connected to a dedicated FIX 4.4 engine for broker connectivity, order routing and execution.',
    scope: ['Web & mobile trading', 'FIX 4.4', 'Order execution'],
  },
  {
    slug: 'blockchain-crypto-payment-gateway',
    architecture: ['Multi-chain', 'Deposit and settlement coverage'],
    category: 'Blockchain',
    name: 'Blockchain Crypto Payment Gateway',
    summary: 'A reusable gateway that creates deposit addresses, tracks confirmations across chains and records payments through settlement.',
    scope: ['Deposit addresses', 'On-chain confirmations', 'Settlement records'],
  },
  {
    slug: 'smart-contract-payment-application',
    architecture: ['On-chain verification', 'Payment status returned to the app'],
    category: 'Blockchain',
    name: 'Smart Contract Payment Application',
    summary: 'A Web3 app that lets users connect a wallet, sign a payment and see verified transaction updates as the payment progresses.',
    scope: ['Wallet connection', 'Payment contracts', 'Status updates'],
  },
  {
    slug: 'crypto-exchange-spot-futures-p2p',
    architecture: ['3 trading modes', 'Spot, futures and peer-to-peer'],
    category: 'Blockchain',
    name: 'Crypto Exchange — Spot, Futures & P2P',
    summary: 'A web and mobile exchange with Spot and Futures Trading, a P2P marketplace with escrow, wallets and live market data.',
    scope: ['Spot & futures', 'P2P escrow', 'Wallet infrastructure'],
  },
  {
    slug: 'bus-booking-admin-management-system',
    architecture: ['3 interfaces', 'Booking site, operations dashboard and driver portal'],
    category: 'Custom Software',
    name: 'Bus Booking — Admin Management System',
    summary: 'An operations dashboard that brings routes, vehicles, schedules and bookings together, with a customer booking site and a driver portal.',
    scope: ['Fleet & routes', 'Online booking', 'Driver portal'],
  },
  {
    slug: 'white-label-lms-platform',
    architecture: ['Multi-tenant', 'Branded portals on a shared platform'],
    category: 'EdTech',
    name: 'White-Label LMS Platform',
    summary: 'A multi-tenant platform that lets schools and training providers launch branded learning portals, manage admissions and courses, and track learner progress.',
    scope: ['Branded portals', 'Course management', 'Progress tracking'],
  },
  {
    slug: 'resvip-travel-booking',
    architecture: ['Route-based search', 'Booking experience'],
    category: 'Custom Software',
    name: 'ResVIP Travel Booking',
    summary: 'A customer booking experience for premium coach travel in Sweden. Travellers can search by route, travel date and passenger count, explore the fleet and track their tickets.',
    scope: ['Route and date search', 'Vehicle gallery', 'Ticket tracking'],
  },
  {
    slug: 'fxregulation',
    architecture: ['.NET + MERN', 'Brokerage application stack'],
    category: 'Fintech',
    name: 'FxRegulation',
    summary: 'A brand-ready Forex Brokerage Platform that combines trading and broker operations using .NET and the MERN stack.',
    scope: ['Forex brokerage', 'Trading operations', '.NET & MERN'],
  },
] as const;

export const caseStudyHref = (slug: (typeof caseStudies)[number]['slug']) => `/portfolio/${slug}`;

export const succeedCapitalPortalFeatures = [
  ['Onboarding & Verification', 'Clients register through the portal and complete identity verification before opening a live account. The dashboard shows their progress and whether trading access is enabled.'],
  ['Trading Accounts & Funding', 'Traders can switch between real, demo and archived accounts, review balance and equity, and access deposits, withdrawals and wallet activity from the dashboard.'],
  ['Connected Trading Experience', 'The portal provides entry points to MetaTrader 5 and the web terminal. Succeed Capital FX also describes a shared account environment for web, desktop and mobile access.'],
  ['Partner Onboarding & Market Calendar', 'The Introducing Broker area gives partners a place to apply and check application status. The weekly calendar groups economic releases by date and highlights their expected impact.'],
] as const;

export type CaseStudySlug = (typeof caseStudies)[number]['slug'];

export const caseStudyDeliveryFacts = {
  'succeed-capital-fx': [
    ['3 Account Views', 'Real, demo and archived accounts in one portal.'],
    ['Connected Funding', 'Deposits, withdrawals and wallet activity alongside trading accounts.'],
  ],
  'solitaire-markets': [
    ['2 Trading Channels', 'Web and mobile applications connected to the execution engine.'],
    ['Dedicated Execution Engine', 'Broker connectivity, order routing and execution.'],
  ],
  'blockchain-crypto-payment-gateway': [
    ['Deposit Address Generation', 'Creates addresses for incoming payments.'],
    ['Settlement Records', 'Tracks network confirmations and records payments through settlement.'],
  ],
  'smart-contract-payment-application': [
    ['Wallet-Signed Payments', 'Users connect a wallet and sign the payment.'],
    ['Transaction Status', 'Verified on-chain updates appear in the application.'],
  ],
  'crypto-exchange-spot-futures-p2p': [
    ['2 Access Channels', 'Web and mobile exchange applications.'],
    ['P2P Escrow', 'An escrow workflow supports peer-to-peer trades.'],
  ],
  'bus-booking-admin-management-system': [
    ['Booking & Operations', 'Passenger bookings connect with route, vehicle and schedule management.'],
    ['Driver Portal', 'Drivers can view assigned trips and boarding information.'],
  ],
  'white-label-lms-platform': [
    ['Branded Learning Portals', 'Schools and training providers can run their own branded experiences.'],
    ['Admissions & Learning', 'Manage applications, courses and learner progress.'],
  ],
  'resvip-travel-booking': [
    ['3 Search Inputs', 'Travellers search by route, date and passenger count.'],
    ['Ticket Tracking', 'Travellers can keep track of tickets after booking.'],
  ],
  'fxregulation': [
    ['Brokerage Platform', 'Trading and broker operations are part of one application.'],
  ],
} as const satisfies Record<CaseStudySlug, readonly (readonly [string, string])[]>;

type Screenshot = {
  src: string;
  width: number;
  height: number;
  caption: string;
};

const screenshots: Partial<Record<CaseStudySlug, readonly [Screenshot, ...Screenshot[]]>> = {
  'succeed-capital-fx': [
    { src: '/case-studies/succeed-capital-fx-overview.webp', width: 1500, height: 484, caption: 'Trader dashboard with balance, equity, funding and trading account controls.' },
    { src: '/case-studies/succeed-capital-fx-accounts.webp', width: 1500, height: 523, caption: 'Account management with real, demo and archived accounts.' },
    { src: '/case-studies/succeed-capital-fx-partners.webp', width: 1500, height: 486, caption: 'Introducing Broker application and status tracking.' },
    { src: '/case-studies/succeed-capital-fx-calendar.webp', width: 1500, height: 665, caption: 'Weekly market calendar with economic releases and impact indicators.' },
  ],
  'resvip-travel-booking': [
    { src: '/case-studies/resvip-booking.webp', width: 1500, height: 629, caption: 'ResVIP booking page with route, date and passenger search.' },
    { src: '/case-studies/resvip-fleet.webp', width: 1500, height: 581, caption: 'Fleet gallery showing coach exteriors and interiors.' },
    { src: '/case-studies/resvip-routes.webp', width: 1500, height: 766, caption: 'Featured routes section for passengers exploring coach travel across Sweden.' },
    { src: '/case-studies/resvip-driver-workspace.webp', width: 1500, height: 855, caption: 'Driver workspace with an assigned-trip calendar and boarding controls.' },
  ],
  'white-label-lms-platform': [
    { src: '/case-studies/lms-public-site.webp', width: 1500, height: 639, caption: 'Public platform site branded for Afrique Empowerment Institute.' },
    { src: '/case-studies/lms-admissions.webp', width: 1500, height: 674, caption: 'Admissions workspace showing stages from application to enrolment.' },
    { src: '/case-studies/lms-course-catalogue.webp', width: 1500, height: 688, caption: 'Course catalogue with search, filters and publishing controls.' },
    { src: '/case-studies/lms-mobile-quiz.webp', width: 482, height: 722, caption: 'Mobile instructor portal for choosing a quiz question type.' },
  ],
};

export function caseStudyMedia(slug: CaseStudySlug) {
  const projectScreenshots = screenshots[slug];
  return {
    cover: projectScreenshots?.[0] ?? { src: `/case-studies/${slug}-concept.webp`, width: 768, height: 432, caption: '' },
    gallery: projectScreenshots?.slice(1) ?? [],
  };
}
