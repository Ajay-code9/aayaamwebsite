type IndustryPage = {
  name: string;
  headline: string;
  intro: string;
  audience: string;
  workflowTitle: string;
  workflow: readonly (readonly [string, string])[];
  capabilities: readonly (readonly [string, string, string])[];
  integration: string;
  checks: readonly string[];
  questions: readonly (readonly [string, string])[];
  brief: string;
  projects: readonly string[];
};

const industries: Record<string, IndustryPage> = {
  'forex-brokerage': {
    name: 'Forex & Brokerage',
    headline: 'Connect the Systems Behind Your Brokerage.',
    intro: 'Give traders one place to apply, check their account and follow orders. Give staff a shared view of what happened across your portal, CRM and trading platform.',
    audience: 'For new brokerages and established teams replacing disconnected tools.',
    workflowTitle: 'Trader Account Setup',
    workflow: [
      ['Application submitted', 'The trader submits their information and sees which documents are still needed.'],
      ['Application reviewed', 'Staff review the verification result and resolve exceptions before approving the account.'],
      ['Trading account connected', 'Once approved, the portal shows the linked trading account and its status.'],
    ],
    capabilities: [
      ['Broker Infrastructure', 'Keep account and order updates aligned between the client portal and trading platform.', '/solutions/forex-brokerage/broker-infrastructure'],
      ['Brokerage CRM', 'Manage applications, verification results and account history in one staff workspace.', '/solutions/forex-brokerage/brokerage-crm-ecosystem'],
      ['Partner Operations', 'Track who referred each client and give staff a record of commission calculations.', '/solutions/forex-brokerage/ib-and-affiliate-management'],
      ['Execution Connectivity', 'Connect trading applications to supported execution interfaces and track order outcomes.', '/services/trading-technology/fix-api-integration'],
    ],
    integration: 'Start with the interfaces your existing providers expose. Agree which system owns each account record and which changes staff must approve.',
    checks: ['Map account identifiers across systems', 'Test approval and provisioning failures', 'Reconcile order and account status'],
    questions: [
      ['Can we keep our current trading platform?', 'We review its available interfaces and permissions first. The first release can focus on the account or order updates your team needs most.'],
      ['Can we replace just the CRM?', 'Yes, if the dependencies can be connected. We plan migration and verify a sample of applications and accounts before switching.'],
    ],
    brief: 'Bring your platform, CRM and verification provider details, plus one account setup your staff currently handles by hand.',
    projects: ['succeed-capital-fx', 'solitaire-markets'],
  },
  'prop-trading': {
    name: 'Proprietary Trading Firms',
    headline: 'Run Trader Evaluations With Clear, Reviewable Rules.',
    intro: 'AayaamX builds software for prop firms to enrol traders, check progress against challenge rules and review payout requests. Your firm defines the rules and makes operating decisions.',
    audience: 'For prop firms launching evaluations or replacing manual challenge and payout tracking.',
    workflowTitle: 'From Sign-Up to Evaluation Result',
    workflow: [
      ['Trader enrols', 'The portal records the selected challenge and shows the applicable rules.'],
      ['Progress updates', 'The system checks available trading activity against targets, limits and stage rules.'],
      ['Result recorded', 'Traders see the next step and staff can review exceptions against the recorded activity.'],
    ],
    capabilities: [
      ['Evaluation Platforms', 'Connect enrolment, account setup and stage progression.', '/solutions/prop-trading/evaluation-platforms'],
      ['Challenge Management', 'Configure profit targets, loss limits and review rules for each programme.', '/solutions/prop-trading/challenge-management'],
      ['Trader Dashboards', 'Show progress, remaining limits and when the data last updated.', '/solutions/prop-trading/trader-dashboards'],
      ['Payout Review', 'Check eligibility, record staff approvals and show payment status where provider data is available.', '/solutions/prop-trading/payout-management'],
    ],
    integration: 'Map each evaluation rule to the account activity your platform supplies. Agree what happens when data arrives late or a result needs manual review.',
    checks: ['Agree how targets and limits are measured', 'Test borderline and delayed activity', 'Record rule changes and staff decisions'],
    questions: [
      ['Can each challenge have different rules?', 'We can scope separate programmes with their own stages, limits and review steps.'],
      ['Can staff approve payouts manually?', 'Yes. Eligibility checks can prepare the request for review while an authorised staff member records the decision.'],
    ],
    brief: 'Share your challenge rulebook, trading platform and examples of disputed results or payout requests.',
    projects: [],
  },
  'banking-fintech': {
    name: 'Banking & Fintech',
    headline: 'Make Customer Applications and Payments Easier to Follow.',
    intro: 'Build customer portals and internal tools around your existing providers and records. Customers can see what is happening, and staff can pick up an application or payment with its history intact.',
    audience: 'For banks and fintech product teams improving digital onboarding, payments or internal servicing.',
    workflowTitle: 'Application Review',
    workflow: [
      ['Customer applies', 'The portal collects details and shows what information is missing.'],
      ['Provider result arrives', 'A verification result is attached to the application and unclear cases go to staff.'],
      ['Decision is recorded', 'Staff see the review history and the customer sees the next step.'],
    ],
    capabilities: [
      ['Customer Platforms', 'Build applications, account portals and staff workspaces around shared records.', '/solutions/fintech/financial-platforms'],
      ['Payment Integrations', 'Connect provider updates to customer status and reconciliation records.', '/solutions/fintech/digital-payments'],
      ['Finance Automation', 'Route exceptions and record decisions so the team can follow up.', '/solutions/fintech/financial-automation'],
      ['System Integration', 'Connect new screens to existing services with clear ownership of each record.', '/services/cloud-infrastructure/system-integration'],
    ],
    integration: 'Agree what each provider can share, who can see customer information and what the team must be able to audit before rollout.',
    checks: ['Map customer and payment references', 'Define staff permissions and review steps', 'Test status changes and reconciliation'],
    questions: [
      ['Can we launch without replacing our core systems?', 'Where the required interfaces are available, we can build a portal or workflow around those systems and validate the integration first.'],
      ['Who defines verification and approval policies?', 'Your organisation defines its policies. We implement the agreed checks, permissions and review steps in the software.'],
    ],
    brief: 'Bring one customer journey, your current providers and an example of an application or payment that needed investigation.',
    projects: ['succeed-capital-fx', 'blockchain-crypto-payment-gateway'],
  },
  'blockchain-web3': {
    name: 'Blockchain & Web3',
    headline: 'Build Wallet Experiences People Can Follow.',
    intro: 'Connect wallets and smart contracts to an application that explains what users are approving and shows what happened after they submitted it.',
    audience: 'For product teams building wallet-enabled checkout, token access or other on-chain experiences.',
    workflowTitle: 'Wallet Checkout',
    workflow: [
      ['Wallet connected', 'The application checks whether the wallet is on a supported network.'],
      ['Payment approved', 'The customer reviews the amount and approves the action in their wallet.'],
      ['Order updated', 'The application shows confirmation status and updates the order once the payment meets the agreed rules.'],
    ],
    capabilities: [
      ['Decentralized Applications', 'Give users a clear path from wallet connection to transaction status.', '/solutions/blockchain/decentralized-platforms'],
      ['Tokenization', 'Define what a token represents and how users can receive or use it.', '/solutions/blockchain/tokenization'],
      ['Smart Contracts', 'Implement agreed transaction and permission rules and test how the app handles failures.', '/services/blockchain/smart-contract-development'],
      ['Wallet Infrastructure', 'Connect deposit events and wallet activity to your application records.', '/solutions/blockchain/wallet-infrastructure'],
    ],
    integration: 'Agree which actions need a blockchain record and how your application responds to cancelled, delayed or unsuccessful transactions.',
    checks: ['List supported wallets and networks', 'Agree who can approve changes', 'Test signing and confirmation states'],
    questions: [
      ['Can we add a wallet feature to an existing product?', 'Yes, if the product can share the relevant account or order data. Start with one wallet action and the screen that should show its result.'],
      ['Does the whole application need to be on-chain?', 'An application can keep features like search and notifications in its existing backend while using smart contracts for selected actions.'],
    ],
    brief: 'Share the action users need to complete, which networks you support and what users should see if it fails.',
    projects: ['smart-contract-payment-application'],
  },
  'saas-technology-startups': {
    name: 'SaaS & Technology Startups',
    headline: 'Get a Product Into Customers’ Hands and Build From There.',
    intro: 'AayaamX helps product teams scope the first release, build the customer experience and set up the systems needed to onboard the next account.',
    audience: 'For founders and product teams launching SaaS or turning an early product into a platform for more customers.',
    workflowTitle: 'Onboard a New SaaS Customer',
    workflow: [
      ['Workspace created', 'The customer gets a workspace configured for their organisation.'],
      ['Team invited', 'The account owner invites staff and assigns roles for what they can see and do.'],
      ['First task completed', 'The team completes the main workflow and can report where it needs help.'],
    ],
    capabilities: [
      ['Product Strategy', 'Agree what the first release needs to prove and how the team will measure it.', '/services/product-engineering/product-strategy'],
      ['MVP Development', 'Build the main user journey and review working versions before release.', '/services/product-engineering/mvp-development'],
      ['SaaS Platforms', 'Create customer workspaces, access roles and administration tools.', '/services/software-engineering/saas-development'],
      ['Product Modernization', 'Update bottlenecks in an existing product in stages your team can review.', '/services/product-engineering/product-modernization'],
    ],
    integration: 'Decide what customers can configure themselves and what your team needs to administer. Plan account separation, onboarding and integrations around that boundary.',
    checks: ['Identify the first task users must complete', 'Define workspace and access rules', 'Agree how to review feedback after launch'],
    questions: [
      ['Can you take over an existing prototype?', 'We review the code, data and key user journeys to decide what can be retained and what needs work before launch.'],
      ['Can we add branding per customer?', 'We can scope branding and domains per workspace when that is part of the product.'],
    ],
    brief: 'Bring your prototype or outline, the first user group and one task that would make the product worth using.',
    projects: ['white-label-lms-platform'],
  },
  'enterprise-businesses': {
    name: 'Enterprise Businesses',
    headline: 'Keep Work Moving Across Departments.',
    intro: 'Connect the tools teams use to serve customers, run operations and report progress. Give each team the right view of a shared record so updates carry through every handoff.',
    audience: 'For businesses replacing spreadsheet handoffs or connecting new software to existing operations.',
    workflowTitle: 'Resolve an Order Change',
    workflow: [
      ['Support records the request', 'The change is logged against the customer and order.'],
      ['Operations reviews it', 'The responsible team checks what can be fulfilled and records its decision.'],
      ['Finance sees the result', 'Finance can review the approved change before updating the invoice.'],
    ],
    capabilities: [
      ['Enterprise CRM', 'Give staff customer history, ownership and follow-ups in one workspace.', '/solutions/enterprise/enterprise-crm'],
      ['ERP Systems', 'Connect purchasing, inventory or other operational records across teams.', '/solutions/enterprise/erp-systems'],
      ['Workflow Automation', 'Assign reviewers, route approvals and keep status visible across tools.', '/solutions/enterprise/workflow-automation'],
      ['Business Intelligence', 'Give managers consistent reports and access to the underlying records.', '/solutions/enterprise/business-intelligence'],
    ],
    integration: 'Identify where records are duplicated and which team owns each decision. Test how updates move through the current systems before switching teams over.',
    checks: ['Map record ownership and permissions', 'Validate a sample migration', 'Plan rollout and training by team'],
    questions: [
      ['Can we roll out one department at a time?', 'Yes, when the dependencies are understood. We agree what data and processes must stay connected between stages.'],
      ['Can staff still handle exceptions?', 'We can give staff a review queue and keep the decision history alongside each request.'],
    ],
    brief: 'Bring one handoff that causes repeat work, the teams involved and an example of the records they use.',
    projects: ['bus-booking-admin-management-system'],
  },
  'digital-asset-businesses': {
    name: 'Digital Asset Businesses',
    headline: 'Trace Digital Asset Activity From Deposit to Balance.',
    intro: 'Build the records and interfaces behind deposits, transfers and account balances. Give customers a clear status and give operations the information to investigate exceptions.',
    audience: 'For exchanges, payment providers and businesses operating digital asset products.',
    workflowTitle: 'Credit a Digital Asset Deposit',
    workflow: [
      ['Transfer detected', 'The system records the network transaction and matches it to a known address.'],
      ['Network confirms', 'The transfer stays pending until it meets the platform’s confirmation rules.'],
      ['Balance updated', 'The platform credits the matched account once and records a reference staff can trace.'],
    ],
    capabilities: [
      ['Digital Asset Records', 'Show users holdings and activity and give staff traceable transaction records.', '/solutions/blockchain/digital-assets'],
      ['Wallet Infrastructure', 'Connect supported networks, deposit addresses and platform balances.', '/solutions/blockchain/wallet-infrastructure'],
      ['Digital Payments', 'Track payment confirmation and match settled transactions to orders.', '/solutions/fintech/digital-payments'],
      ['API Development', 'Deliver transaction and balance updates to the products that need them.', '/services/cloud-infrastructure/api-development'],
    ],
    integration: 'Agree who controls wallet access, how deposits are matched and how to reconcile records between the wallet provider and your platform.',
    checks: ['Choose supported assets and networks', 'Test duplicate notifications and unmatched transfers', 'Define how staff investigate balance differences'],
    questions: [
      ['Can we use an existing wallet provider?', 'We can review supported assets, network events and permissions to see how it can connect to your ledger and customer app.'],
      ['Can customers see a confirmed transfer before it is credited?', 'Yes. We can show network confirmation separately from the balance update so customers know which step is pending.'],
    ],
    brief: 'Share supported assets and networks, your wallet setup and one transfer or balance issue your team has had to investigate.',
    projects: ['blockchain-crypto-payment-gateway', 'crypto-exchange-spot-futures-p2p'],
  },
};

export function getIndustryPage(path: string): IndustryPage | undefined {
  const slug = path.match(/^\/industries\/([a-z0-9-]+)$/)?.[1];
  return slug && Object.hasOwn(industries, slug) ? industries[slug] : undefined;
}
