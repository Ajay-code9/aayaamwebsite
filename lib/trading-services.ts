export const tradingHref = '/services/trading-technology';

export const tradingServices = [
  {
    slug: 'forex-crm-development',
    name: 'Forex CRM Development',
    headline: 'Manage the Client Journey in One Place.',
    intro: 'AayaamX builds Forex CRMs that connect client registration, identity checks and trading account setup. Brokerage teams can follow each application and manage partner relationships from the same workspace.',
    workflow: ['Client Registers', 'Team Reviews Application', 'Trading Account Opens'],
    capabilities: [
      ['Client Onboarding', 'Collect applications and documents, and connect identity verification to the review queue.'],
      ['Trader Portal', 'Give clients a place to track application status and manage trading accounts.'],
      ['Partner Management', 'Track introductions and commissions for introducing brokers and affiliates.'],
    ],
    project: 'succeed-capital-fx',
    projectDetail: 'AayaamX connected online registration and identity verification to trading account provisioning for a multi-asset brokerage.',
    brief: 'Tell us how clients sign up today and where your team needs better visibility.',
  },
  {
    slug: 'broker-backoffice-development',
    name: 'Broker Backoffice Development',
    headline: 'Give Your Operations Team a Clear View.',
    intro: 'AayaamX builds Broker Backoffice software that brings account administration, payment records and risk monitoring together. Each team can see the work it owns and the actions that need review.',
    workflow: ['Request Received', 'Operations Review', 'Records Updated'],
    capabilities: [
      ['Operations Queues', 'Organise account changes, funding requests and exceptions by owner and status.'],
      ['Risk Monitoring', 'Bring exposure and account activity into dashboards used by risk teams.'],
      ['Access & Reporting', 'Set role-based permissions and keep a record of operational decisions.'],
    ],
    project: 'succeed-capital-fx',
    projectDetail: 'The brokerage CRM and trading apps share a backend, with a dedicated system for monitoring trading risk.',
    brief: 'Share the requests your operations team handles most often and the systems it uses to resolve them.',
  },
  {
    slug: 'trading-platform-integration',
    name: 'Trading Platform Integration',
    headline: 'Connect Your Trading Platform to Your Brokerage.',
    intro: 'AayaamX connects web and mobile Trading Platforms to brokerage systems. Account information, orders and execution updates can move between the terminal and the tools your team uses to run operations.',
    workflow: ['Account Connected', 'Order Submitted', 'Status Returned'],
    capabilities: [
      ['Account Provisioning', 'Connect approved client accounts to the trading platform and sync account details.'],
      ['Order & Status Updates', 'Pass order requests to the execution system and return acknowledgements and fills.'],
      ['Shared Platform Data', 'Keep client-facing apps and operations tools aligned on account and trade activity.'],
    ],
    project: 'succeed-capital-fx',
    projectDetail: 'The web terminal and mobile trading apps connect to the same brokerage backend and operational CRM.',
    brief: 'Share the trading platform you use and the account, order or reporting data it needs to exchange.',
  },
  {
    slug: 'fix-api-integration',
    name: 'FIX API Integration',
    headline: 'Connect Orders to Execution Through FIX.',
    intro: 'AayaamX develops FIX API integrations that connect trading applications to broker and execution systems. We scope order routing, execution reports and connection recovery around the interface you need to support.',
    workflow: ['Order Received', 'Routed via FIX', 'Execution Report Returned'],
    capabilities: [
      ['FIX Connectivity', 'Set up sessions and map supported messages to your application.'],
      ['Order Lifecycle', 'Handle order acknowledgements, fills, cancellations and rejections.'],
      ['Testing & Monitoring', 'Check reconnect behaviour, message handling and order reconciliation with the counterparty.'],
    ],
    project: 'solitaire-markets',
    projectDetail: 'AayaamX built a dedicated FIX 4.4 engine to connect the trading apps to broker systems and route orders for execution.',
    brief: 'Bring the counterparty’s FIX specification and the order types you need to support.',
  },
  {
    slug: 'liquidity-integration',
    name: 'Liquidity Integration',
    headline: 'Connect Your Platform to Liquidity Providers.',
    intro: 'AayaamX builds the software connections a brokerage needs to receive prices and route eligible orders to its liquidity providers. The scope depends on provider interfaces, instruments and execution rules.',
    workflow: ['Prices Received', 'Order Routed', 'Execution Tracked'],
    capabilities: [
      ['Provider Connectivity', 'Map supported instruments and connect provider price and execution feeds.'],
      ['Routing Rules', 'Define how orders reach the appropriate destination and how exceptions are handled.'],
      ['Operational Visibility', 'Surface feed interruptions, order rejections and execution status for your team.'],
    ],
    project: 'solitaire-markets',
    projectDetail: 'The execution engine connects web and mobile trading clients to institutional liquidity through a dedicated FIX interface.',
    brief: 'Share the providers, instruments and routing requirements you want the platform to support.',
  },
] as const;

export type TradingService = (typeof tradingServices)[number];

export function getTradingService(path: string) {
  return tradingServices.find(service => path === tradingHref + '/' + service.slug);
}
