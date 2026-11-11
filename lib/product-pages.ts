import { navigation } from './navigation';

type Product = {
  headline: string;
  intro: string;
  audience: string;
  demo: readonly (readonly [string, string])[];
  modules: readonly (readonly [string, string])[];
  integration: string;
  question: string;
  answer: string;
  related: string;
  project?: string;
};

export const productLinks = navigation.find(menu => menu.href === '/products')!.groups[0].links;
export const productsIntro = 'Explore AI tools, brokerage software, enterprise SaaS and digital wallets. See what each platform can cover and talk to us about the features and integrations your business needs.';

const products: Record<string, Product> = {
  'ai-powered': {
    headline: 'Give Repetitive Work a Reviewable AI Workflow.',
    intro: 'Build an AI assistant or document tool that works with your approved sources, shows the information behind its output and hands exceptions to the right person.',
    audience: 'For support, operations and product teams with a recurring task they can measure.',
    demo: [['Request arrives', 'A customer asks where to change their billing email.'], ['Draft prepared', 'The assistant finds approved guidance and attaches it to a draft.'], ['Staff review', 'A specialist checks the draft before sending it.']],
    modules: [['Knowledge & Permissions', 'Connect approved documents and restrict answers to sources the user can access.'], ['Drafts & Extraction', 'Turn requests or documents into replies, summaries or structured fields.'], ['Review & Evaluation', 'Define when people take over and test output against representative examples.']],
    integration: 'Bring your help desk or document sources, access rules and examples of outputs your staff would accept.',
    question: 'Can the first release stay in draft mode?',
    answer: 'Yes. Staff can review all outputs while you measure accuracy and the time spent correcting results.',
    related: '/solutions/ai-business',
  },
  'forex-crm': {
    headline: 'Give Traders and Staff a Shared View of Every Account.',
    intro: 'Connect trader registration, verification and account servicing through a client portal and a brokerage CRM.',
    audience: 'For brokerages launching a client portal or replacing disconnected onboarding tools.',
    demo: [['Application submitted', 'The trader provides their account details and required documents.'], ['Review completed', 'Staff see the provider result and approve or request more information.'], ['Account linked', 'The portal shows the trading account once the platform creates it.']],
    modules: [['Trader Portal', 'Show application status, account details and relevant activity.'], ['Client Management', 'Give staff a review queue, verification history and record ownership.'], ['Partner Tracking', 'Record introducing broker referrals and make commission calculations reviewable.']],
    integration: 'Bring your trading platform, identity verification provider and any account records you need to migrate.',
    question: 'Can we keep our current trading platform?',
    answer: 'We can scope a connection if the platform provides the account and activity interfaces the CRM needs.',
    related: '/solutions/forex-brokerage/brokerage-crm-ecosystem',
    project: 'succeed-capital-fx',
  },
  'broker-backoffice': {
    headline: 'Keep Brokerage Operations in One Workspace.',
    intro: 'Give operations, finance and risk teams a shared view of account requests, payment records and trading activity.',
    audience: 'For brokerage teams that currently review requests across inboxes, spreadsheets and provider dashboards.',
    demo: [['Request received', 'A funding request is linked to the client and trading account.'], ['Exception reviewed', 'Finance checks the amount against the provider record.'], ['Decision recorded', 'Staff can see who approved the update and when it was applied.']],
    modules: [['Operations Queues', 'Assign requests and track what is waiting for action.'], ['Risk & Account Views', 'Show relevant exposure and activity from connected systems.'], ['Reporting & Access', 'Set access by role and keep a history of decisions and changes.']],
    integration: 'Share your CRM, payment providers and risk data, plus an example of a request that requires multiple teams.',
    question: 'Can different departments have different permissions?',
    answer: 'Yes. We scope what each team can see, change and approve, then test those boundaries with sample accounts.',
    related: '/services/trading-technology/broker-backoffice-development',
    project: 'succeed-capital-fx',
  },
  'prop-trading-management': {
    headline: 'Run Trader Challenges From Sign-Up to Payout Review.',
    intro: 'Give traders a place to enrol and follow progress. Give staff the rules, account activity and decision history they need to review results.',
    audience: 'For prop firms launching a new challenge or moving evaluations and payouts into one platform.',
    demo: [['Trader enrols', 'The portal records the selected programme and applicable rules.'], ['Progress calculated', 'Trading activity is checked against targets and limits.'], ['Result reviewed', 'The trader sees the next step and staff can investigate exceptions.']],
    modules: [['Challenge Rules', 'Configure stages, targets and limits for each programme.'], ['Trader Dashboards', 'Show progress, remaining limits and the last available update.'], ['Payout Review', 'Check eligibility, route requests to staff and track payment status.']],
    integration: 'Bring your challenge rulebook, trading platform and examples of payouts or results your team reviews manually.',
    question: 'Can we launch one challenge first?',
    answer: 'Yes. We can scope one programme first and test the calculation and review flow before adding more configurations.',
    related: '/solutions/prop-trading',
  },
  'enterprise-saas': {
    headline: 'Launch One SaaS Product With a Workspace for Each Customer.',
    intro: 'Build a platform where each organisation can onboard its team, manage access and complete its own work from a dedicated workspace.',
    audience: 'For product teams building SaaS, white-label portals or self-service platforms for business customers.',
    demo: [['Workspace created', 'A new customer sets up its organisation and branding.'], ['Roles assigned', 'The account owner invites users and sets access.'], ['First task completed', 'The team uses its own data to complete the product’s main workflow.']],
    modules: [['Customer Workspaces', 'Separate customer records, settings and access.'], ['Onboarding & Administration', 'Configure invitations, account management and customer support tools.'], ['Branding & Integrations', 'Scope customer domains, branding or billing where the product requires them.']],
    integration: 'Bring the first customer workflow, access roles, account setup requirements and any billing or identity provider.',
    question: 'Can customers use their own branding?',
    answer: 'We can scope branding and domains per organisation, as shown in AayaamX’s white-label learning platform.',
    related: '/services/software-engineering/saas-development',
    project: 'white-label-lms-platform',
  },
  'blockchain-wallet': {
    headline: 'Make Wallet Activity Easy to Trace.',
    intro: 'Build wallet-enabled platforms that show customers what happened to their transfers and give staff records they can reconcile.',
    audience: 'For digital asset products, payments teams and businesses adding wallet features to an existing application.',
    demo: [['Deposit detected', 'The platform matches a network transaction to a known address.'], ['Confirmation tracked', 'The customer sees the transfer pending until it meets your rules.'], ['Balance updated', 'The account credit links back to the original transaction.']],
    modules: [['Wallet & Network Support', 'Connect supported assets, networks and wallet providers.'], ['Transaction Status', 'Show submitted, confirmed and credited states separately.'], ['Operations Records', 'Track duplicate notifications and route unmatched deposits for review.']],
    integration: 'Share the supported networks and assets, who controls the wallet keys and how your platform credits deposits.',
    question: 'Can we use our existing wallet provider?',
    answer: 'We review the provider’s supported networks, permissions and event data before agreeing what can be connected.',
    related: '/solutions/blockchain/wallet-infrastructure',
    project: 'blockchain-crypto-payment-gateway',
  },
  'custom-product-ecosystems': {
    headline: 'Connect Every Part of Your Product Around the Same Records.',
    intro: 'Build customer-facing apps, staff tools and integrations together so each team can follow the same business activity from its own workspace.',
    audience: 'For teams that need multiple interfaces and services to work together across one product.',
    demo: [['Customer books', 'The booking site confirms a seat and records the trip.'], ['Operations sees it', 'Staff see the reservation against the schedule.'], ['Driver gets the update', 'The driver portal shows the current passenger list.']],
    modules: [['Customer Experience', 'Build web or mobile journeys around what users need to complete.'], ['Staff Workspace', 'Give each team the records, actions and access it needs.'], ['Shared Services', 'Connect APIs and data so updates reach the right interfaces.']],
    integration: 'Bring one end-to-end journey, the teams involved and the tools or data each part needs.',
    question: 'Can we build it in phases?',
    answer: 'Yes. Start with one complete journey, agree which interfaces it needs and expand once teams have reviewed the working release.',
    related: '/services/software-engineering/custom-software-development',
    project: 'bus-booking-admin-management-system',
  },
};

export function getProductPage(path: string) {
  const link = productLinks.find(item => item.href === path);
  if (!link) return;
  const product = products[path.slice('/products/'.length)];
  if (product) return { ...product, title: link.title, href: link.href };
}

export type ProductPageData = NonNullable<ReturnType<typeof getProductPage>>;
