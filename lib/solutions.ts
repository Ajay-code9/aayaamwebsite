import { navigation } from './navigation';

type Detail = {
  intro: string;
  scope: readonly [string, string, string];
};

type Family = {
  headline: string;
  intro: string;
  project?: string;
  details: Record<string, Detail>;
};

const families: Record<string, Family> = {
  fintech: {
    headline: 'Build the Software Behind Financial Operations.',
    intro: 'AayaamX builds payment gateways, customer platforms and internal tools for financial businesses. Connect the customer experience to the systems your team uses to track transactions and manage accounts.',
    project: 'blockchain-crypto-payment-gateway',
    details: {
      'digital-payments': {
        intro: 'Build payment flows that track deposits through settlement. For digital asset payments, connect deposit addresses and network confirmations to the records your operations team reconciles.',
        scope: ['Deposit addresses and confirmation tracking', 'Settlement records and reconciliation', 'Status updates and exception review'],
      },
      'financial-platforms': {
        intro: 'Connect customer onboarding, account access and activity reporting through a shared backend. Give customers and operations teams interfaces built around the work each needs to do.',
        scope: ['Customer accounts and portals', 'Transaction history and reporting', 'Role-based operations access'],
      },
      'financial-automation': {
        intro: 'Connect finance workflows to the systems that already hold your records. Validate incoming requests, route exceptions for review and write approved changes back to the right system.',
        scope: ['Intake and validation rules', 'Approval queues and audit history', 'Connections to existing finance tools'],
      },
    },
  },
  'forex-brokerage': {
    headline: 'Connect Your Traders, Team and Partners.',
    intro: 'AayaamX builds the software behind Forex brokerages. Connect trader registration, account management and partner referrals to the tools your team uses every day.',
    project: 'succeed-capital-fx',
    details: {
      'broker-infrastructure': {
        intro: 'Connect the client portal, trading platform and internal systems. Traders can see what happened to an order, and staff can follow account and trading activity in one place.',
        scope: ['Set up approved trading accounts', 'Send order and execution updates back to the portal', 'Show account activity and risk in staff dashboards'],
      },
      'brokerage-crm-ecosystem': {
        intro: 'Give your staff one place to review applications and manage client accounts. Give traders their own portal to submit details and check account status.',
        scope: ['Collect applications and verification documents', 'Show account status and history in the trader portal', 'Keep CRM and trading account records in sync'],
      },
      'ib-and-affiliate-management': {
        intro: 'See which introducing broker or affiliate referred each client. Give partners a view of referral activity and give staff a record of how commissions were calculated.',
        scope: ['Register partners and track their referrals', 'Apply your commission rules and record calculations', 'Give partners a dashboard and staff a review queue'],
      },
    },
  },
  'prop-trading': {
    headline: 'Run Trader Challenges From Sign-Up to Payout Review.',
    intro: 'AayaamX builds software for proprietary trading firms to enrol traders, check progress against challenge rules and review payout requests. Your firm sets the rules and approval process.',
    details: {
      'evaluation-platforms': {
        intro: 'Give traders one place to sign up, see which stage they are in and find out what happens next. Give staff a record of each result and a queue for cases that need review.',
        scope: ['Collect sign-ups and connect trading accounts', 'Show each stage and record its result', 'Send unclear results to staff for review'],
      },
      'challenge-management': {
        intro: 'Turn your challenge rules into configurable software with visible limits, reviewable results and a history of changes.',
        scope: ['Set profit targets, loss limits and stage rules', 'Check trading activity against those rules', 'Keep a history of rule changes and exceptions'],
      },
      'trader-dashboards': {
        intro: 'Show traders their evaluation stage, progress and remaining limits using the activity available from your trading platform.',
        scope: ['Show trading activity and progress towards targets', 'Show how close traders are to their loss limits', 'Explain the current status and next step'],
      },
      'payout-management': {
        intro: 'Give operators a clear path from trader payout request through eligibility review, approval and payment status tracking.',
        scope: ['Collect requests and check eligibility', 'Route requests to staff and record approvals', 'Track payment status and match it to approved requests'],
      },
    },
  },
  blockchain: {
    headline: 'Make Digital Assets Easier to Use.',
    intro: 'AayaamX builds software for products that need to track ownership, accept digital asset payments or connect to wallets. We start with what your users need to do and what your team needs to see afterward.',
    project: 'smart-contract-payment-application',
    details: {
      'digital-assets': {
        intro: 'AayaamX builds Digital Asset software for payment platforms, exchanges and businesses that accept digital assets. Give customers a clear view of their balances and transfers, and give your operations team the records to explain what happened to each payment.',
        scope: ['Customer Balances & Activity', 'Deposit & Transfer Tracking', 'Operations & Reconciliation'],
      },
      tokenization: {
        intro: 'Tokenization represents an item or entitlement as a token on a blockchain. We build the software that creates tokens, tracks who holds them and shows what each holder can do.',
        scope: ['Define who can create tokens and track who holds them', 'Set rules for when tokens can be transferred', 'Show token details and available actions in the app'],
      },
      'decentralized-platforms': {
        intro: 'Connect a web application to wallets and on-chain rules, with clear feedback before signing and after a transaction is submitted.',
        scope: ['Connect a wallet and explain what the user is signing', 'Connect app actions to Smart Contract rules', 'Show what happens when a transaction succeeds, stalls or fails'],
      },
      'wallet-infrastructure': {
        intro: 'Build the systems behind wallet experiences, from generating deposit addresses to tracking confirmations and updating platform balances.',
        scope: ['Support chosen assets and generate deposit addresses', 'Track deposits and network confirmations', 'Update balances and record when payments settle'],
      },
    },
  },
  enterprise: {
    headline: 'Keep Teams Working From the Same Records.',
    intro: 'AayaamX builds Enterprise Software that connects customer accounts, operations and reporting. Start with a handoff where information gets lost, then connect the people and tools involved.',
    project: 'bus-booking-admin-management-system',
    details: {
      'enterprise-crm': {
        intro: 'Bring customer records, account ownership and follow-ups into a workspace shaped around how your teams work.',
        scope: ['Keep contacts, conversations and tasks on one account record', 'Assign follow-ups and show who owns the next action', 'Set access by role and connect existing tools'],
      },
      'erp-systems': {
        intro: 'Connect operational records across departments so teams can track requests, approvals and resource changes from a shared system.',
        scope: ['Manage purchases, stock or other operational records', 'Route approvals across teams and track open work', 'Move existing records and connect accounting tools where needed'],
      },
      'workflow-automation': {
        intro: 'Move routine requests from intake to the right reviewer and update shared records when the work is complete.',
        scope: ['Collect requests in a form and assign a reviewer', 'Apply approval rules and flag exceptions for staff', 'Show status and update records across connected tools'],
      },
      'business-intelligence': {
        intro: 'Bring reporting data together and give managers a consistent view of how teams and operations are performing.',
        scope: ['Combine source records and agree how each metric is calculated', 'Build dashboards with filters and links to the underlying records', 'Show data freshness and flag missing updates'],
      },
    },
  },
  'ai-business': {
    headline: 'Put AI to Work Where Your Team Needs It.',
    intro: 'AayaamX builds AI Applications for business teams that need help finding answers, reading documents or handling repetitive tasks. Start with a use case your team can review and measure.',
    details: {
      'intelligent-assistants': {
        intro: 'Help support or operations teams find account context, draft replies and prepare actions for human review.',
        scope: ['Connect your help desk and approved support guides', 'Draft replies with the relevant policy attached', 'Send unusual requests and missing answers to staff'],
      },
      'ai-analytics': {
        intro: 'Use AI to help teams spot patterns in business data and investigate changes against the records behind them.',
        scope: ['Connect the reports and records your managers already use', 'Explain changes by team, location or time period', 'Link summaries to the numbers and records behind them'],
      },
      'ai-workflow-automation': {
        intro: 'Use AI to read unstructured inputs such as forms or emails, then send the result through your existing approval workflow.',
        scope: ['Collect incoming documents from forms or email', 'Extract required fields and flag incomplete results', 'Send approved information to your finance or operations system'],
      },
      'knowledge-management-systems': {
        intro: 'Give staff a search and answer experience over approved company documents, with links to the passages used.',
        scope: ['Connect approved documents and apply access rules', 'Answer questions with links to the relevant policy or guide', 'Refresh changed documents and route unanswered questions to the right team'],
      },
    },
  },
};

export function getSolutionPage(path: string) {
  const group = navigation.find(menu => menu.href === '/solutions')?.groups.find(item =>
    item.href === path || item.links.some(link => link.href === path)
  );
  if (!group) return;

  const key = group.href.split('/').at(-1)!;
  const family = families[key];
  if (!family) return;

  const link = group.links.find(item => item.href === path);
  const detail = link ? family.details[link.href.split('/').at(-1)!] : undefined;
  if (link && !detail) return;

  return { key, group, family, link, detail, title: link?.title ?? group.title, intro: detail?.intro ?? family.intro };
}

export type SolutionPageData = NonNullable<ReturnType<typeof getSolutionPage>>;
