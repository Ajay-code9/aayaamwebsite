export interface SolutionTab {
  id: string;
  label: string;
  icon: string;
  badge: string;
  metricLabel1: string;
  metricValue1: string;
  metricLabel2: string;
  metricValue2: string;
  metricLabel3: string;
  metricValue3: string;
  codeTitle: string;
  codeLines: Array<{
    type?: 'comment' | 'highlight' | 'normal';
    parts: Array<{ text: string; kind?: 'keyword' | 'component' | 'func' | 'string' | 'prop' | 'badge' }>;
  }>;
}

export interface SolutionDeliverable {
  badge: string;
  title: string;
  description: string;
  specs: string[];
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SubSolutionItem {
  slug: string;
  title: string;
  description: string;
}

export interface SolutionProject {
  name: string;
  slug: string;
  summary: string;
  metrics: string;
}

export interface SolutionData {
  slug: string;
  familyTitle: string;
  categoryBadge: string;
  headline: string;
  tagline: string;
  metrics: Array<{ value: string; label: string; live?: boolean }>;
  sandbox: {
    address: string;
    liveBadge: string;
    footerNote: string;
    tabs: SolutionTab[];
  };
  subSolutions: SubSolutionItem[];
  techMatrix: {
    column1: { title: string; icon: string; items: string[] };
    column2: { title: string; icon: string; items: string[] };
    column3: { title: string; icon: string; items: string[] };
  };
  deliverables: SolutionDeliverable[];
  project: SolutionProject;
  methodology: {
    stage1: { title: string; focus: string; bullets: string[] };
    stage2: { title: string; focus: string; bullets: string[] };
    stage3: { title: string; focus: string; bullets: string[] };
  };
  faqs: SolutionFAQ[];
}

export const solutionsData: Record<string, SolutionData> = {
  // ==========================================
  // 1. FINTECH SOLUTIONS
  // ==========================================
  fintech: {
    slug: 'fintech',
    familyTitle: 'Fintech Solutions',
    categoryBadge: 'FINTECH & FINANCIAL INFRASTRUCTURE',
    headline: 'Build the Software Behind Financial Operations.',
    tagline: 'Payment gateways, customer trading portals, and automated reconciliation systems engineered for sub-50ms transaction processing, PCI-DSS compliance, and zero reconciliation drift.',
    metrics: [
      { value: '99.99% Uptime', label: 'High-Availability Payment Rails', live: true },
      { value: '< 50ms', label: 'Global Transaction Settlement', live: true },
      { value: 'Double-Entry', label: 'ACID Transaction Ledger' },
      { value: 'PCI-DSS Token', label: 'Encrypted Vault Storage' },
    ],
    sandbox: {
      address: 'pay.aayaamx.internal/ledger-gateway',
      liveBadge: 'SETTLEMENT LIVE',
      footerNote: 'Financial Engine Simulation • Double-entry ledger, webhook reconciliation & card vaults',
      tabs: [
        {
          id: 'ledger-core',
          label: 'Double-Entry Ledger',
          icon: 'Wallet',
          badge: 'ACID Journal',
          metricLabel1: 'SETTLEMENT SPEED',
          metricValue1: '< 38ms End-to-End',
          metricLabel2: 'LEDGER MODEL',
          metricValue2: 'Strict Credit/Debit Bal',
          metricLabel3: 'IDEMPOTENCY',
          metricValue3: '100% Duplicate Blocked',
          codeTitle: 'ledger-transaction.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Atomic Double-Entry Ledger Transfer' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'executeFinancialTransfer', kind: 'func' },
                { text: '(tx: JournalEntry) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'db.transaction', kind: 'func' },
                { text: '(async (trx) => {' },
                { text: '  // ACID Lock', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'trx.debit', kind: 'func' },
                { text: '(tx.sourceAccount, tx.amount);' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'trx.credit', kind: 'func' },
                { text: '(tx.destinationAccount, tx.amount);' },
              ],
            },
            { parts: [{ text: '  });' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'reconciliation',
          label: 'Automated Reconciliation',
          icon: 'TrendingUp',
          badge: 'HMAC Webhooks',
          metricLabel1: 'DRIFT MONITOR',
          metricValue1: '0.00% Zero Discrepancy',
          metricLabel2: 'AUTO MATCH RATE',
          metricValue2: '99.8% Statements',
          metricLabel3: 'EXCEPTION QUEUE',
          metricValue3: 'Instant Ops Alert',
          codeTitle: 'reconciliation-engine.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Bank Feed & Crypto Reconciler' }] },
            {
              parts: [
                { text: 'const isReconciled = await ' },
                { text: 'matchBankRecord', kind: 'func' },
                { text: '(incomingBankTx, internalLedger);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (!isReconciled) await ' },
                { text: 'routeToOpsReview', kind: 'func' },
                { text: '(incomingBankTx);' },
                { text: '  // Exception Flag', kind: 'badge' },
              ],
            },
          ],
        },
        {
          id: 'vault-security',
          label: 'Tokenization & Vaults',
          icon: 'Lock',
          badge: 'PCI-DSS L1',
          metricLabel1: 'ENCRYPTION',
          metricValue1: 'AES-256 Envelope',
          metricLabel2: 'KEY ROTATION',
          metricValue2: 'Automated 90-Day KMS',
          metricLabel3: 'AUDIT LEDGER',
          metricValue3: 'Immutable SHA-256',
          codeTitle: 'card-vault.token.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Zero-Knowledge Cardholder Tokenization' }] },
            {
              parts: [
                { text: 'const token = await ' },
                { text: 'kmsVault.generateToken', kind: 'func' },
                { text: '(rawCardholderPayload);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'return ' },
                { text: 'storeTokenizedCustomer', kind: 'func' },
                { text: '(customerId, token);' },
                { text: '  // Zero Raw Storage', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'digital-payments',
        title: 'Digital Payments',
        description: 'Payment rails for fiat and digital assets with automated deposit tracking, webhooks, and instant settlement reconciliation.',
      },
      {
        slug: 'financial-platforms',
        title: 'Financial Platforms',
        description: 'Customer onboarding portals, account wallets, real-time activity reporting, and role-based operations management.',
      },
      {
        slug: 'financial-automation',
        title: 'Financial Automation',
        description: 'Intake validation rules, exception triage queues, automated audit trails, and bidirectional ERP synchronization.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Payment Rails & Gateways',
        icon: 'Wallet',
        items: ['Stripe API & Billing', 'Adyen Enterprise', 'SEPA / ACH Batch Processing', 'ISO 20022 Protocols', 'Praxis Cashier', 'USDT / Crypto Gateway'],
      },
      column2: {
        title: 'Ledger & Persistence',
        icon: 'Database',
        items: ['PostgreSQL TimescaleDB', 'Redis In-Memory Caching', 'Apache Kafka Streaming', 'BullMQ Queue Manager', 'Prisma / Drizzle ORM', 'Distributed Lock (Redlock)'],
      },
      column3: {
        title: 'Security & Compliance',
        icon: 'Lock',
        items: ['PCI-DSS Tokenization', 'AES-256 Envelope Encryption', 'SumSub KYC/AML Webhooks', 'HMAC SHA-256 Request Signing', 'AWS KMS Hardware Security', 'OWASP Top 10 Hardened'],
      },
    },
    deliverables: [
      {
        badge: 'Payment Rails',
        title: 'Multi-Currency Payment Gateway & Crypto On-Ramp',
        description: 'Bespoke payment processing infrastructure supporting cards, local bank rails (SEPA, ACH, Wire), and digital asset deposits with sub-second callbacks.',
        specs: ['Dynamic Deposit Address Generator', 'Sub-second Webhook Dispatch', 'Zero Payment Drop Guarantee', 'Automatic Refund Workflow'],
      },
      {
        badge: 'Core Ledger',
        title: 'Double-Entry General Ledger & Balance Journal',
        description: 'Immutable ACID transaction journal ensuring that every debit has a matching credit with strict mathematical balance invariants.',
        specs: ['100% Invariant Enforcement', 'Idempotency Key Verification', 'Historical Balance Audits', 'Sub-50ms Processing'],
      },
      {
        badge: 'Reconciliation',
        title: 'Automated Bank & Gateway Reconciliation Pipeline',
        description: 'Automated matching engine pairing third-party bank statements and processor settlement reports against internal ledger records.',
        specs: ['Automated Discrepancy Flagging', 'CSV / MT940 / CAMT.053 Parsers', 'Manual Ops Review Queue', 'Exportable Audit Spreadsheets'],
      },
      {
        badge: 'Client Experience',
        title: 'Customer Finance Dashboard & Statement Portals',
        description: 'High-conversion, intuitive customer portals for managing accounts, viewing transaction statements, and requesting withdrawals.',
        specs: ['Multi-Device Responsive UI', 'Instant PDF Statement Export', 'Two-Factor Auth (2FA)', 'Real-Time WebSocket Balances'],
      },
      {
        badge: 'Enterprise Handover',
        title: 'Complete Handover & 30-Day SLA Warranty',
        description: '100% IP ownership transfer, clean OpenAPI 3.0 documentation, automated Docker CI/CD pipelines, and post-launch maintenance SLA.',
        specs: ['Full Source Code Transfer', 'Interactive Swagger UI', 'PCI Compliance Architecture Doc', '30-Day Post-Launch SLA'],
      },
    ],
    project: {
      name: 'Blockchain Crypto Payment Gateway',
      slug: 'blockchain-crypto-payment-gateway',
      summary: 'A reusable, low-latency crypto payment gateway that creates dynamic deposit addresses, monitors multi-chain confirmations, and updates balances with zero reconciliation drift.',
      metrics: 'Sub-2s Confirmation · 6 Blockchains · Automated Sweeper Bot',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Financial Flow & Compliance Audit',
        focus: 'We map ledger schemas, transaction lifecycle states, KYC verification rules, and integration contracts before writing code.',
        bullets: ['Double-Entry Ledger Schema Design', 'Payment Gateway API Contract Definition', 'KYC/AML Rule Alignment', 'Security & PCI Compliance Boundary'],
      },
      stage2: {
        title: 'Stage 2: Core Engineering & Reconciliation Tests',
        focus: 'We build ledger services, write automated stress tests for duplicate callbacks, and verify exception queues with mock bank feeds.',
        bullets: ['High-Concurrency Ledger Stress Tests', 'Idempotency & Race Condition Checks', 'Mock Bank Statement Reconciliation', 'Staging Cashier Flow Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Treasury Handover',
        focus: 'Zero-downtime deployment, live payment processor certification, finance team training, and critical SLA warranty coverage.',
        bullets: ['Production Gateway Certification', 'Finance Ops Staff Playbooks', 'Real-Time Settlement Telemetry', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you guarantee zero financial reconciliation discrepancies?',
        answer: 'We enforce an immutable double-entry bookkeeping architecture where transactions cannot be modified once committed. Every incoming webhook requires a unique idempotency key, and our automated background reconciliation engine continuously cross-checks gateway balances against internal database records.',
      },
      {
        question: 'Can you connect both traditional fiat payment processors and crypto rails?',
        answer: 'Yes! We frequently architect hybrid financial gateways that unify fiat payment processors (Stripe, Adyen, bank wire, local alternative payment methods) and cryptocurrency networks (USDT, BTC, ETH) into one centralized balance and reporting ledger.',
      },
      {
        question: 'How is sensitive customer and payment data secured?',
        answer: 'We utilize zero-knowledge tokenization vaults backed by AWS KMS and AES-256 envelope encryption. Raw card numbers or sensitive credentials never touch application logs or unencrypted storage, satisfying strict PCI-DSS and GDPR requirements.',
      },
      {
        question: 'Do we own the full source code and intellectual property?',
        answer: 'Yes, 100%. All source code, database migration scripts, Docker containers, and architectural documentation are transferred directly to your organization with zero vendor lock-in and zero recurring licensing fees.',
      },
    ],
  },

  // ==========================================
  // 2. FOREX & BROKERAGE SOLUTIONS
  // ==========================================
  'forex-brokerage': {
    slug: 'forex-brokerage',
    familyTitle: 'Forex & Brokerage Solutions',
    categoryBadge: 'BROKERAGE PLATFORMS & TRADING ECOSYSTEMS',
    headline: 'Connect Your Traders, Operations & Partner Network.',
    tagline: 'Turnkey software for modern Forex brokerages — high-converting trader cabinets, multi-tier Introducing Broker (IB) portals, automated KYC/AML, and direct MT4/MT5 server bridges.',
    metrics: [
      { value: '< 0.4ms Ping', label: 'Direct MT4/MT5 Server Bridge', live: true },
      { value: '5-Tier IB Tree', label: 'Real-Time Commission Splits', live: true },
      { value: 'Automated KYC', label: 'Instant Document Verification' },
      { value: 'A/B-Book Engine', label: 'Dynamic Risk Routing Controls' },
    ],
    sandbox: {
      address: 'broker.aayaamx.internal/ecosystem-manager',
      liveBadge: 'BRIDGE SYNCHRONIZED',
      footerNote: 'Brokerage Engine Simulation • MT4/MT5 manager bridge, multi-tier IB rebates & risk analytics',
      tabs: [
        {
          id: 'bridge-core',
          label: 'MT5 Server Bridge',
          icon: 'TrendingUp',
          badge: 'MT5 Manager API',
          metricLabel1: 'BRIDGE LATENCY',
          metricValue1: '0.38ms Execution',
          metricLabel2: 'CONNECTION STATE',
          metricValue2: 'Active Sync (Primary)',
          metricLabel3: 'LEVERAGE MODEL',
          metricValue3: 'Dynamic Account Groups',
          codeTitle: 'mt5-sync.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Real-Time MetaTrader 5 Manager Bridge Synchronization' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'syncTraderPosition', kind: 'func' },
                { text: '(login: number) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const positions = await ' },
                { text: 'mt5Manager.getOpenPositions', kind: 'func' },
                { text: '(login);' },
                { text: '  // 0.4ms Ping', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'cabinetWebSocket.broadcastEquity', kind: 'func' },
                { text: '(login, positions.equity);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'ib-tree',
          label: 'Multi-Tier IB Rebates',
          icon: 'GitFork',
          badge: 'Recursive 5-Tier',
          metricLabel1: 'COMMISSION SPLIT',
          metricValue1: 'Instant Pip / Lot Split',
          metricLabel2: 'HIERARCHY DEPTH',
          metricValue2: 'Configurable to 10 Levels',
          metricLabel3: 'WALLET SETTLEMENT',
          metricValue3: 'Instant Internal Credit',
          codeTitle: 'ib-rebate-calculator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-Tier IB Commission Calculation' }] },
            {
              parts: [
                { text: 'const ancestors = await ' },
                { text: 'ibHierarchy.getAncestors', kind: 'func' },
                { text: '(traderAccountId);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'for (const partner of ancestors) {' },
                { text: '  // Instant Split', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  const commission = tradeVolume * partner.tierRate;' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'partnerWallet.credit', kind: 'func' },
                { text: '(partner.id, commission);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'risk-exposure',
          label: 'A/B-Book Exposure',
          icon: 'ShieldAlert',
          badge: 'Dynamic Hedging',
          metricLabel1: 'NET LOT EXPOSURE',
          metricValue1: '142.5 Lots EUR/USD',
          metricLabel2: 'STP ROUTING',
          metricValue2: 'Tier-1 Prime Liquidity',
          metricLabel3: 'B-BOOK DRAWDOWN',
          metricValue3: 'Real-Time P&L Tracking',
          codeTitle: 'risk-exposure.guard.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Net Exposure Monitor with Automated STP Routing' }] },
            {
              parts: [
                { text: 'const netExposure = await ' },
                { text: 'riskEngine.calculateSymbolExposure', kind: 'func' },
                { text: '("EURUSD");' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (netExposure > symbolLimit.maxBBook) {' },
                { text: '  // Auto STP Route', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'primeLiquidityBridge.hedgePosition', kind: 'func' },
                { text: '(netExposure - symbolLimit.maxBBook);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'broker-infrastructure',
        title: 'Broker Infrastructure',
        description: 'Direct server bridges to MT4, MT5, and cTrader for real-time account setup, execution updates, and risk exposure dashboards.',
      },
      {
        slug: 'brokerage-crm-ecosystem',
        title: 'Brokerage CRM Ecosystem',
        description: 'Command center for staff to review applications and manage accounts, paired with high-converting client trader rooms.',
      },
      {
        slug: 'ib-and-affiliate-management',
        title: 'IB & Affiliate Management',
        description: 'Multi-tier Introducing Broker tracking, configurable rebate rules, partner dashboards, and automated commission payouts.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Trading Servers & Bridges',
        icon: 'TrendingUp',
        items: ['MetaTrader 5 Manager API', 'MetaTrader 4 Server API', 'cTrader Open API', 'FIX 4.4 / 5.0 Engine', 'TradingView Charting', 'VertexFX Bridge'],
      },
      column2: {
        title: 'CRM & Backoffice Stack',
        icon: 'Database',
        items: ['Next.js 14 App Router', 'TypeScript 5', 'Node.js / Go Microservices', 'PostgreSQL TimescaleDB', 'Redis In-Memory State', 'Docker Containers'],
      },
      column3: {
        title: 'Identity & Cashier APIs',
        icon: 'Lock',
        items: ['SumSub Automated KYC/AML', 'Praxis Cashier Gateway', 'Crypto USDT On-Ramp', 'Bank Wire SEPA/ACH', 'Role-Based Staff Access', 'Cloudflare WAF Defense'],
      },
    },
    deliverables: [
      {
        badge: 'Trader Experience',
        title: 'High-Performance Trader Room Dashboard',
        description: 'Modern, responsive client cabinet where traders open live/demo accounts, deposit funds, view trade history, request payouts, and monitor performance.',
        specs: ['Instant Account Provisioning', 'Multi-Currency Wallets', 'Deposit & Withdrawal Cashier', 'TradingView Web Terminal'],
      },
      {
        badge: 'Broker Management',
        title: 'Comprehensive Broker Backoffice Command Center',
        description: 'Command center for broker operations — client management, financial reconciliation, KYC review, deposit approval workflows, and staff role permissions.',
        specs: ['Unified Client Management', 'Deposit & Withdrawal Approval', 'A-Book / B-Book Configuration', 'Detailed Financial Ledger'],
      },
      {
        badge: 'Affiliate Growth',
        title: 'Multi-Tier Introducing Broker (IB) Engine',
        description: 'Hierarchical multi-tier affiliate system with customizable pip and dollar commissions, real-time rebate calculation, and automated sub-IB distribution.',
        specs: ['Unlimited Tree Depth', 'Real-Time Rebate Crediting', 'Custom Referral Links', 'IB Performance Dashboard'],
      },
      {
        badge: 'Bridge Connectivity',
        title: 'MT4 / MT5 / cTrader Trading Server Bridge',
        description: 'Direct server-to-server API bridge linking your web applications and CRM to MT4, MT5, cTrader, and tier-1 liquidity providers.',
        specs: ['Manager API Integration', 'Sub-millisecond Trade Routing', 'Real-time WebSocket Equity Stream', 'Risk Exposure Analytics'],
      },
      {
        badge: 'Turnkey Delivery',
        title: 'Production Setup, Deployment & SLA Handover',
        description: 'Full white-label deployment to your dedicated cloud servers, staff training sessions, and continuous post-launch technical SLA coverage.',
        specs: ['10-14 Day Turnkey Deployment', 'Staff Backoffice Training', '24/7 Server Health Monitoring', '30-Day Critical SLA'],
      },
    ],
    project: {
      name: 'Succeed Capital FX',
      slug: 'succeed-capital-fx',
      summary: 'Enterprise platform for a multi-asset brokerage. The client portal, broker CRM, and trading applications share a high-throughput backend with dedicated risk controls.',
      metrics: 'Sub-millisecond Routing · 45,000 Active Accounts · MT5 Integrated',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Platform & License Architecture',
        focus: 'We connect trading server APIs (MT4/MT5/cTrader), configure payment processor credentials, and blueprint IB commission structures.',
        bullets: ['Trading Server API Connection', 'Payment Gateway & KYC Setup', 'IB Hierarchy & Rebate Mapping', 'Staff Role Permissions Spec'],
      },
      stage2: {
        title: 'Stage 2: Staging Testing & Cashier Certification',
        focus: 'We test live order execution, balance deposits, IB commission splits, and automated drawdown triggers in a staging environment.',
        bullets: ['Deposit & Withdrawal Cashier Stress Tests', 'Live Order Routing & Rebate Tests', 'Manager Bridge Failover Drills', 'Backoffice Staff Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Launch & 24/7 SRE Coverage',
        focus: 'We deploy to production infrastructure with 24/7 server monitoring, staff training, and continuous trading support.',
        bullets: ['Production Bridge Deployment', 'Backoffice Staff Training', 'High-Availability Server Setup', 'Critical SLA Trading Coverage'],
      },
    },
    faqs: [
      {
        question: 'How do you connect our CRM to existing MT4 or MT5 servers?',
        answer: 'We connect directly to the MetaTrader Server using official MetaTrader Manager APIs and Server API protocols, running low-latency microservices that synchronize accounts, open positions, trade history, and equity in real time.',
      },
      {
        question: 'Can the IB affiliate engine handle custom commission splits per currency pair?',
        answer: 'Yes! Our IB engine allows broker administrators to define granular commission matrices based on symbol groups (Forex, Metals, Indices, Crypto), account types, trading volume tiers, and custom rates per affiliate level.',
      },
      {
        question: 'How are deposits and withdrawal approvals handled?',
        answer: 'Deposits through verified gateways (crypto or cards) are automatically credited to the trading account within seconds. Withdrawal requests pass through an automated risk check (margin level, open trades, bonus deductions) before routing to staff for one-click approval.',
      },
      {
        question: 'What is the typical deployment timeline for a complete brokerage ecosystem?',
        answer: 'Depending on your server readiness and platform licensing (MT4, MT5, or standalone terminal), our white-label turnkey deployments can be configured and live in as little as 10 to 14 business days.',
      },
    ],
  },

  // ==========================================
  // 3. PROP TRADING SOLUTIONS
  // ==========================================
  'prop-trading': {
    slug: 'prop-trading',
    familyTitle: 'Prop Trading Solutions',
    categoryBadge: 'PROPRIETARY TRADING INFRASTRUCTURE',
    headline: 'Run Trader Challenges From Sign-Up to Payout Review.',
    tagline: 'End-to-end software for proprietary trading firms — automated multi-phase challenge evaluations, real-time drawdown monitors, trader dashboards, and streamlined payout reviews.',
    metrics: [
      { value: 'Real-Time Drawdown', label: 'Sub-second High-Water Mark Engine', live: true },
      { value: 'Automated Evals', label: 'Phase 1 & Phase 2 Instant Detection', live: true },
      { value: 'Zero Manual Audit', label: 'Automated Breach Enforcement' },
      { value: 'Crypto & Fiat Payouts', label: 'Automated Eligibility & Disbursement' },
    ],
    sandbox: {
      address: 'prop.aayaamx.internal/challenge-evaluator',
      liveBadge: 'RISK GUARDIAN ACTIVE',
      footerNote: 'Prop Firm Engine Simulation • High-water mark drawdown, automated phase rules & payout queues',
      tabs: [
        {
          id: 'rules-engine',
          label: 'Phase Rules Engine',
          icon: 'Gauge',
          badge: 'Phase 1 & 2',
          metricLabel1: 'PROFIT TARGET',
          metricValue1: 'Phase 1: 8.0% / Phase 2: 5.0%',
          metricLabel2: 'DAILY LOSS LIMIT',
          metricValue2: '5.0% Trailing Equity',
          metricLabel3: 'MAX TOTAL LOSS',
          metricValue3: '10.0% Static Initial',
          codeTitle: 'challenge-evaluator.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Multi-Phase Challenge Evaluator' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'evaluateTraderMetrics', kind: 'func' },
                { text: '(account: PropAccount) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const hasHitTarget = account.profitPct >= challenge.profitTarget;' },
                { text: '  // Auto Pass', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  if (hasHitTarget && account.tradingDays >= challenge.minDays) {' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'provisionNextPhase', kind: 'func' },
                { text: '(account.traderId, challenge.nextStage);' },
              ],
            },
            { parts: [{ text: '  }' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'drawdown-monitor',
          label: 'Drawdown Guardian',
          icon: 'ShieldAlert',
          badge: 'High-Water Mark',
          metricLabel1: 'CALCULATION INTERVAL',
          metricValue1: '100ms High-Frequency',
          metricLabel2: 'EQUITY VS BALANCE',
          metricValue2: 'Dynamic High-Water Mark',
          metricLabel3: 'BREACH ACTION',
          metricValue3: 'Instant Account Freeze',
          codeTitle: 'drawdown-guardian.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Sub-Second Trailing Drawdown Breaching Guard' }] },
            {
              parts: [
                { text: 'const dailyDrawdown = (' },
                { text: 'highWaterMark - currentEquity', kind: 'prop' },
                { text: ') / highWaterMark;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (dailyDrawdown > 0.05) {' },
                { text: '  // 5% Breach', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'tradingServer.closeAllTradesAndFreeze', kind: 'func' },
                { text: '(login);' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'notifyTraderOfBreach', kind: 'func' },
                { text: '(traderId, "Daily Loss Exceeded");' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'payout-queue',
          label: 'Payout Review Ledger',
          icon: 'Wallet',
          badge: 'Profit Split 80/20',
          metricLabel1: 'PROFIT SPLIT',
          metricValue1: '80% Trader / 20% Firm',
          metricLabel2: 'KYC STATUS',
          metricValue2: 'SumSub Verified',
          metricLabel3: 'PAYOUT RAILS',
          metricValue3: 'USDT TRC20 / Bank Wire',
          codeTitle: 'payout-queue.manager.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Payout Eligibility & Disbursement' }] },
            {
              parts: [
                { text: 'const isEligible = await ' },
                { text: 'verifyPayoutRules', kind: 'func' },
                { text: '(traderId, { noOpenTrades: true });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (isEligible) await ' },
                { text: 'disburseFunds', kind: 'func' },
                { text: '(payoutRequest.cryptoAddress, traderShare);' },
                { text: '  // Instant Payout', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'evaluation-platforms',
        title: 'Evaluation Platforms',
        description: 'Trader sign-ups, automated challenge stage tracking, pass/fail notifications, and instant account credential delivery.',
      },
      {
        slug: 'challenge-management',
        title: 'Challenge Management',
        description: 'Configurable rulesets for profit targets, trailing/static drawdown limits, minimum trading days, and rule exception history.',
      },
      {
        slug: 'trader-dashboards',
        title: 'Trader Dashboards',
        description: 'Real-time interactive charts showing live profit targets, daily loss meters, open equity, and evaluation countdowns.',
      },
      {
        slug: 'payout-management',
        title: 'Payout Management',
        description: 'Automated eligibility checks, profit split allocations, compliance sign-offs, and batch payout processing.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Trading Servers & Engines',
        icon: 'Gauge',
        items: ['MetaTrader 5 Manager API', 'MetaTrader 4 Server Bridge', 'cTrader Open API', 'Match-Trader Bridge', 'DXtrade Integration', 'TradingView Chart Widgets'],
      },
      column2: {
        title: 'High-Frequency Risk Stack',
        icon: 'Database',
        items: ['Go Concurrency Workers', 'PostgreSQL TimescaleDB', 'Redis In-Memory State', 'ClickHouse Tick Analytics', 'Apache Kafka Streaming', 'BullMQ Queue Manager'],
      },
      column3: {
        title: 'Payout & Compliance Rails',
        icon: 'Lock',
        items: ['USDT TRC20 & ERC20 On-Chain', 'Rise Works / Deel Payouts', 'SumSub KYC & Identity Verification', 'Automated Certificate Minting', 'Cloudflare DDoS Mitigation', 'Role-Based Risk Access'],
      },
    },
    deliverables: [
      {
        badge: 'Evaluation Portal',
        title: 'Turnkey Trader Challenge Evaluation Portal',
        description: 'High-converting trader dashboard where users buy challenges, monitor their daily metrics, track progress toward funded status, and claim certificates.',
        specs: ['Instant Account Provisioning', 'Dynamic Progress Bars', 'Pass / Fail Rule Badges', 'Automated Certificate Generator'],
      },
      {
        badge: 'Risk Engine',
        title: 'High-Frequency Real-Time Drawdown & Risk Engine',
        description: 'Sub-second calculation engine tracking daily drawdown and total maximum loss across thousands of concurrent accounts with automated breach execution.',
        specs: ['High-Water Mark Trailing Logic', 'Static Balance Fallback Mode', 'Sub-100ms Rule Evaluation', 'Automated Trade Liquidation'],
      },
      {
        badge: 'Firm Operations',
        title: 'Administrative Risk Management Command Center',
        description: 'Command center for prop firm operators to monitor firm-wide exposure, review flagged accounts, inspect trade logs, and manage challenge configurations.',
        specs: ['Firm-Wide Equity Exposure', 'Flagged Account Inspection Queue', 'Challenge Pricing & Rules Admin', 'Staff Activity Audit Logs'],
      },
      {
        badge: 'Payout Rails',
        title: 'Automated Payout Eligibility & Disbursement Gateway',
        description: 'Automated profit-split calculation and verification system ensuring only compliant traders receive payouts via crypto or wire transfer.',
        specs: ['Automated Rule Eligibility Checks', '80/20 & 90/10 Split Calculators', 'USDT On-Chain Payout Integration', 'One-Click Staff Approval'],
      },
      {
        badge: 'Production Delivery',
        title: 'Complete Handover & 30-Day Critical SLA Support',
        description: 'Full source code ownership transfer, automated Docker deployment pipelines, infrastructure documentation, and guaranteed post-launch SLA coverage.',
        specs: ['100% Source Code Ownership', 'Docker & Kubernetes Ready', 'Comprehensive Runbooks', '30-Day Critical SLA Warranty'],
      },
    ],
    project: {
      name: 'Solitaire Markets Prop Engine',
      slug: 'solitaire-markets',
      summary: 'Complete prop firm management architecture: automated 2-step evaluation tracking, real-time equity drawdown monitor, and instant funded account provisioning.',
      metrics: 'Sub-100ms Rule Checks · 15k+ Daily Traders · Automated Breaches',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Challenge Rules & Risk Configuration',
        focus: 'We define your 1-step, 2-step, or instant funding parameters, daily drawdown logic, leverage limits, and trading platform bridges.',
        bullets: ['Challenge Model & Phase Specs', 'Drawdown Calculation Method (Equity vs Balance)', 'Trading Server API Setup', 'Payment & Payout Rails Specification'],
      },
      stage2: {
        title: 'Stage 2: Engine Stress Testing & Breach Verification',
        focus: 'We simulate thousands of fast tick updates, execute automated breach scenarios, and verify that pass/fail criteria trigger with 100% precision.',
        bullets: ['High-Concurrency Drawdown Simulations', 'Automated Account Freeze Drills', 'Trader Dashboard UI Testing', 'Payout Flow Verification'],
      },
      stage3: {
        title: 'Stage 3: Production Release & Risk Monitoring',
        focus: 'We deploy the platform to dedicated cloud infrastructure with real-time alerting, staff operational training, and SLA support.',
        bullets: ['Live Server Deployment', 'Firm Risk Team Training', '24/7 Tick Telemetry Setup', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'How does your drawdown engine calculate trailing vs static daily loss?',
        answer: 'Our engine supports both standard models: (1) High-Water Mark Trailing Drawdown, which locks into peak floating equity and trails dynamically, and (2) Balance-Based Static Drawdown, calculated strictly against the 00:00 UTC day-start balance. Both run with sub-100ms evaluation loops.',
      },
      {
        question: 'Does the platform support 1-step, 2-step, and instant funding challenge models?',
        answer: 'Yes! Administrators can configure an unlimited number of challenge types (1-Step, 2-Step, 3-Step, or Instant Funding) with customizable profit targets, minimum trading days, leverage tiers, and maximum drawdowns per phase.',
      },
      {
        question: 'How are account breaches detected and enforced?',
        answer: 'When a trader account crosses a configured daily or maximum drawdown threshold, our automated risk worker instantly sends a freeze command to the trading server, closes all open market positions, marks the account as breached, and notifies the trader via email and dashboard alerts.',
      },
      {
        question: 'Can we restrict news trading, weekend holding, or expert advisors (EAs)?',
        answer: 'Yes. Our platform includes configurable trade restrictions that automatically cross-reference economic calendars to flag or close trades opened within buffer windows of high-impact news events, as well as optional restrictions on weekend holding and Martingale EAs.',
      },
    ],
  },

  // ==========================================
  // 4. BLOCKCHAIN SOLUTIONS
  // ==========================================
  blockchain: {
    slug: 'blockchain',
    familyTitle: 'Blockchain Solutions',
    categoryBadge: 'DIGITAL ASSETS & DECENTRALIZED PROTOCOLS',
    headline: 'Make Digital Assets Reliable, Audited & Easy to Use.',
    tagline: 'Web3 applications, tokenization protocols, and non-custodial wallet infrastructure engineered for seamless user onboarding, gasless transactions, and tamper-evident smart contracts.',
    metrics: [
      { value: 'Multi-Chain', label: 'EVM & Solana High-Speed RPCs', live: true },
      { value: 'ERC-4337', label: 'Gasless Account Abstraction', live: true },
      { value: 'MPC Custody', label: 'Multi-Party Key Sharding' },
      { value: '100% Audited', label: 'Foundry & Slither Static Analysis' },
    ],
    sandbox: {
      address: 'web3.aayaamx.internal/protocol-gateway',
      liveBadge: 'NODE CLUSTER ACTIVE',
      footerNote: 'Web3 Simulation • Account abstraction paymasters, ERC-4626 vault & automated sweepers',
      tabs: [
        {
          id: 'account-abstraction',
          label: 'ERC-4337 Account Abstraction',
          icon: 'Blocks',
          badge: 'Gasless Paymaster',
          metricLabel1: 'ONBOARDING UX',
          metricValue1: 'Social Login (Passkey)',
          metricLabel2: 'GAS SPONSORSHIP',
          metricValue2: '100% Paymaster Covered',
          metricLabel3: 'BATCH TRANSACTIONS',
          metricValue3: 'Single-Click Approve+Swap',
          codeTitle: 'smart-account.bundler.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Gasless Account Abstraction UserOperation Dispatch' }] },
            {
              parts: [
                { text: 'const userOp = await ' },
                { text: 'builder.buildUserOperation', kind: 'func' },
                { text: '({ target, data, value });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'userOp.paymasterAndData = await ' },
                { text: 'paymaster.sponsorTransaction', kind: 'func' },
                { text: '(userOp);' },
                { text: '  // Gas Sponsored', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await ' },
                { text: 'bundlerClient.sendUserOperation', kind: 'func' },
                { text: '(userOp);' },
              ],
            },
          ],
        },
        {
          id: 'token-vault',
          label: 'ERC-4626 Token Vault',
          icon: 'Wallet',
          badge: 'Solidity 0.8.28',
          metricLabel1: 'REENTRANCY GUARD',
          metricValue1: 'OpenZeppelin Verified',
          metricLabel2: 'STORAGE PACKING',
          metricValue2: 'Yul Gas-Optimized',
          metricLabel3: 'STATIC ANALYSIS',
          metricValue3: '0 Critical / 0 High Findings',
          codeTitle: 'TokenizedVault.sol',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Audited ERC-4626 Tokenized Asset Vault' }] },
            {
              parts: [
                { text: 'function ', kind: 'keyword' },
                { text: 'deposit', kind: 'func' },
                { text: '(uint256 assets, address receiver) external ' },
                { text: 'nonReentrant ', kind: 'prop' },
                { text: 'returns (uint256 shares) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  shares = ' },
                { text: '_previewDeposit', kind: 'func' },
                { text: '(assets);' },
                { text: '  // Safe Math', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  _asset.safeTransferFrom(msg.sender, address(this), assets);' },
              ],
            },
            {
              parts: [
                { text: '  _mint(receiver, shares);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'sweeper-bot',
          label: 'Multi-Chain Sweeper',
          icon: 'TrendingUp',
          badge: 'Automated Indexer',
          metricLabel1: 'CONFIRMATION DEPTH',
          metricValue1: '12 Blocks (Finalized)',
          metricLabel2: 'GAS EFFICIENCY',
          metricValue2: 'Dynamic EIP-1559 Oracle',
          metricLabel3: 'SWEEP DESTINATION',
          metricValue3: 'Multi-Sig Cold Vault',
          codeTitle: 'deposit-sweeper.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Multi-Chain Deposit Sweeper' }] },
            {
              parts: [
                { text: 'const isConfirmed = ' },
                { text: 'currentBlock - tx.blockNumber', kind: 'prop' },
                { text: ' >= requiredConfirmations;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (isConfirmed) await ' },
                { text: 'sweepToColdStorage', kind: 'func' },
                { text: '(tx.address, coldVaultAddress);' },
                { text: '  // Auto Sweep', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'digital-assets',
        title: 'Digital Assets',
        description: 'Balance tracking, dynamic deposit addresses, and operational reconciliation for exchanges and payment apps.',
      },
      {
        slug: 'tokenization',
        title: 'Tokenization',
        description: 'Smart contracts and dashboards for creating tokens, tracking ownership, and enforcing compliance rules.',
      },
      {
        slug: 'decentralized-platforms',
        title: 'Decentralized Platforms',
        description: 'Web applications connected to wallets and smart contract rules with clear transaction signing feedback.',
      },
      {
        slug: 'wallet-infrastructure',
        title: 'Wallet Infrastructure',
        description: 'Systems behind wallet experiences: multi-chain deposit monitoring, automated sweepers, and balance updates.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Blockchain Networks',
        icon: 'Blocks',
        items: ['Ethereum Mainnet (EVM)', 'Polygon PoS & zkEVM', 'Arbitrum & Base L2', 'Binance Smart Chain (BSC)', 'Solana (Rust / Anchor)', 'Avalanche C-Chain'],
      },
      column2: {
        title: 'Smart Contracts & Frameworks',
        icon: 'Code2',
        items: ['Solidity 0.8.x', 'Foundry (Forge & Cast)', 'Hardhat Test Suite', 'OpenZeppelin Standards', 'ERC-4337 Account Abstraction', 'The Graph Subgraphs'],
      },
      column3: {
        title: 'Custody & Security Tools',
        icon: 'ShieldCheck',
        items: ['Safe Multi-Sig Vaults', 'Turnkey / Web3Auth MPC', 'Slither Static Analysis', 'Mythril Security Fuzzing', 'Chainlink Decentralized Oracles', 'Etherscan Code Verification'],
      },
    },
    deliverables: [
      {
        badge: 'Smart Contracts',
        title: 'Audited Smart Contracts & Tokenization Protocols',
        description: 'Clean, secure, and gas-optimized smart contracts written in Solidity or Rust, following industry-standard OpenZeppelin architectures.',
        specs: ['Gas-Optimized Bytecode', 'Reentrancy Protection', '10,000+ Invariant Fuzz Runs', 'Verified on Etherscan'],
      },
      {
        badge: 'Custody Infrastructure',
        title: 'Non-Custodial Multi-Chain Wallet Architecture',
        description: 'Enterprise-grade digital wallets for iOS, Android, and web with Account Abstraction (ERC-4337), biometric MPC, and gas sponsorship.',
        specs: ['Social & Passkey Login', 'Gasless Transactions', 'Multi-Party Computation (MPC)', 'Multi-Chain Asset Support'],
      },
      {
        badge: 'Frontend dApp',
        title: 'High-Performance Web3 dApp Frontend Interfaces',
        description: 'Responsive, accessible Next.js and React frontends connecting directly to blockchain RPCs, The Graph subgraphs, and Web3 wallets.',
        specs: ['Sub-second UI Feedback', 'Viem / Wagmi Integration', 'Clear Transaction Simulators', 'Mobile Responsive Layout'],
      },
      {
        badge: 'Indexer & Bots',
        title: 'Automated Sweeper Bots & Confirmation Indexers',
        description: 'High-throughput background indexers that track on-chain deposit events, verify block confirmations, and sweep funds to cold multi-sigs.',
        specs: ['Zero Reorganization Misses', 'Dynamic EIP-1559 Gas Pricing', 'Cold Storage Automated Sweep', 'Real-time WebSocket Feeds'],
      },
      {
        badge: 'Production Delivery',
        title: 'Complete Handover, Foundry Test Suites & SLA Support',
        description: '100% intellectual property ownership transfer, comprehensive Foundry test suites, NatSpec documentation, and post-launch SLA coverage.',
        specs: ['Full Source Code Transfer', '100% Branch Test Coverage', 'Third-Party Audit Prep', '30-Day Critical SLA Warranty'],
      },
    ],
    project: {
      name: 'Smart Contract Payment Application',
      slug: 'smart-contract-payment-application',
      summary: 'Decentralized payment and escrow system with automated smart contract release conditions, multi-signature governance, and sub-second UI feedback.',
      metrics: 'Zero Vulnerabilities · Sub-second Confirmations · Foundry Tested',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Tokenomics & Security Threat Modeling',
        focus: 'We architect token economic models, mathematical formulas, access controls, upgradeability paths, and threat models before writing code.',
        bullets: ['Mathematical Model Validation', 'NatSpec Interface Specification', 'Threat Modeling & Attack Vectors', 'Gas Budget Optimization'],
      },
      stage2: {
        title: 'Stage 2: Foundry Test-Driven Development',
        focus: 'We write Foundry unit tests and invariant fuzz tests alongside the contracts, running static analysis on every pull request.',
        bullets: ['Solidity / Rust Development', 'Property-Based Fuzz Testing', 'Slither & Mythril Analysis', 'Testnet Staging Verification'],
      },
      stage3: {
        title: 'Stage 3: Audit Signoff & Mainnet Deployment',
        focus: 'We review external audit reports, implement all remediation recommendations, and deploy to mainnet behind a Safe multi-sig.',
        bullets: ['Audit Report Remediation', 'Safe Multi-Sig Deployment', 'Block Explorer Verification', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'Can users interact with the app without holding cryptocurrency for gas fees?',
        answer: 'Yes! We implement ERC-4337 Account Abstraction with Paymaster contracts. Your application can sponsor user gas fees or allow users to pay gas in stablecoins (like USDC or USDT) using familiar social logins or Apple Passkeys.',
      },
      {
        question: 'How do you protect smart contracts against reentrancy and exploits?',
        answer: 'We adhere to the highest standard of Web3 security: OpenZeppelin contracts, checks-effects-interactions patterns, reentrancy guards, automated Slither static analysis, and rigorous Foundry invariant fuzz testing with over 10,000 randomized state permutations.',
      },
      {
        question: 'Which blockchain networks and layer-2 solutions do you build on?',
        answer: 'We build on Ethereum, Polygon, Arbitrum, Optimism, Base, Binance Smart Chain (BSC), Avalanche, and Solana (Rust / Anchor). We also construct cross-chain bridges and LayerZero messaging integrations.',
      },
      {
        question: 'Do you help with third-party security audits?',
        answer: 'Yes! We deliver clean, NatSpec-documented code, complete test suites, and threat modeling documentation. We also interface directly with audit firms (like CertiK, OpenZeppelin, Hacken) to resolve all findings swiftly.',
      },
    ],
  },

  // ==========================================
  // 5. ENTERPRISE SOLUTIONS
  // ==========================================
  enterprise: {
    slug: 'enterprise',
    familyTitle: 'Enterprise Solutions',
    categoryBadge: 'ENTERPRISE SYSTEMS & WORKFLOW PLATFORMS',
    headline: 'Keep Teams Working From the Same Records.',
    tagline: 'Custom enterprise CRMs, modular ERP systems, and workflow automation platforms engineered around how your company actually operates — with zero recurring per-seat fees.',
    metrics: [
      { value: '100% IP Ownership', label: 'Full Source Code & Database Rights', live: true },
      { value: 'Zero Per-Seat Tax', label: 'No Recurring User Licensing Fees', live: true },
      { value: 'Enterprise SSO', label: 'Okta, Azure AD, SAML 2.0' },
      { value: 'Sub-50ms Latency', label: 'Multi-Region High Availability' },
    ],
    sandbox: {
      address: 'corp.aayaamx.internal/workflow-engine',
      liveBadge: 'SYSTEMS SYNCHRONIZED',
      footerNote: 'Enterprise System Simulation • Multi-department workflow, SAP/Salesforce sync & RBAC audit logs',
      tabs: [
        {
          id: 'workflow-queue',
          label: 'Department Workflow Queue',
          icon: 'Building2',
          badge: 'Event-Driven',
          metricLabel1: 'ACTIVE PIPELINES',
          metricValue1: '14 Cross-Dept Workflows',
          metricLabel2: 'SLA COMPLIANCE',
          metricValue2: '99.4% On-Time Completion',
          metricLabel3: 'ESCALATION QUEUE',
          metricValue3: 'Automated Manager Alert',
          codeTitle: 'approval-workflow.engine.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-Stage Departmental Approval Routing' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'advanceWorkflowStep', kind: 'func' },
                { text: '(requestId: string, action: Action) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const nextStage = await ' },
                { text: 'workflowRules.resolveNextStage', kind: 'func' },
                { text: '(requestId, action);' },
                { text: '  // Auto Route', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'notificationHub.dispatch', kind: 'func' },
                { text: '(nextStage.assignedTeam, { priority: "HIGH" });' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'record-sync',
          label: 'Unified ERP / CRM Sync',
          icon: 'Layers',
          badge: 'Bidirectional Sync',
          metricLabel1: 'SYNC ENGINE',
          metricValue1: 'Dead-Letter Queue Retries',
          metricLabel2: 'CONNECTORS',
          metricValue2: 'SAP, Salesforce, NetSuite',
          metricLabel3: 'DATA CONSISTENCY',
          metricValue3: 'Zero Reconciliation Drift',
          codeTitle: 'enterprise-sync.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Bidirectional ERP Record Synchronization' }] },
            {
              parts: [
                { text: 'const syncResult = await ' },
                { text: 'sapConnector.pushRecordChanges', kind: 'func' },
                { text: '(changedRecord);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (!syncResult.ok) await ' },
                { text: 'deadLetterQueue.retryWithBackoff', kind: 'func' },
                { text: '(changedRecord);' },
                { text: '  // Zero Data Loss', kind: 'badge' },
              ],
            },
          ],
        },
        {
          id: 'rbac-audit',
          label: 'Cryptographic Audit Vault',
          icon: 'Lock',
          badge: 'Immutable Hash',
          metricLabel1: 'SSO PROVIDER',
          metricValue1: 'Okta / Azure AD (OIDC)',
          metricLabel2: 'AUDIT HASH',
          metricValue2: 'SHA-256 Tamper-Evident',
          metricLabel3: 'ACCESS MODEL',
          metricValue3: 'Fine-Grained Resource RBAC',
          codeTitle: 'audit-vault.logger.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Immutable Cryptographic Audit Log Vault' }] },
            {
              parts: [
                { text: 'const prevHash = await ' },
                { text: 'auditChain.getLastHash', kind: 'func' },
                { text: '();' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const newBlock = ' },
                { text: 'createAuditBlock', kind: 'func' },
                { text: '(action, staffId, prevHash);' },
                { text: '  // Tamper-Proof', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await auditDb.append(newBlock);' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'enterprise-crm',
        title: 'Enterprise CRM',
        description: 'Unified customer records, account ownership, sales follow-ups, and role-based permissions shaped around your exact sales process.',
      },
      {
        slug: 'erp-systems',
        title: 'ERP Systems',
        description: 'Multi-department operational records, procurement workflows, stock inventory tracking, and seamless accounting integration.',
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation',
        description: 'Automated request intake, multi-tier manager approvals, automatic team assignment, and cross-tool database synchronization.',
      },
      {
        slug: 'business-intelligence',
        title: 'Business Intelligence',
        description: 'Executive dashboards, cross-department data warehousing, automated KPI calculations, and drill-down operational metrics.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Core Frameworks & Runtimes',
        icon: 'Building2',
        items: ['Next.js 14 App Router', 'TypeScript 5', 'Node.js / Express', 'Go (Golang)', 'Python FastAPI', '.NET 8 Core'],
      },
      column2: {
        title: 'Databases & Message Queues',
        icon: 'Database',
        items: ['PostgreSQL with RLS', 'Apache Kafka', 'RabbitMQ / BullMQ', 'Redis Enterprise', 'Elasticsearch / OpenSearch', 'TimescaleDB'],
      },
      column3: {
        title: 'Enterprise Auth & Deployments',
        icon: 'Lock',
        items: ['SAML 2.0 / Okta SSO', 'Azure Active Directory', 'Docker & Kubernetes', 'AWS GovCloud / Cloudflare', 'SOC 2 Ready Audit Logging', 'GitHub Actions CI/CD'],
      },
    },
    deliverables: [
      {
        badge: 'Custom CRM',
        title: 'Custom Enterprise CRM & Account Workspace',
        description: 'Bespoke CRM tailored to your enterprise sales cycles, lead routing, customer onboarding, account management, and contract lifecycles.',
        specs: ['Custom Stage Workflows', 'Sub-second Navigation', 'Role-Based Access Views', 'Export to Excel & PDF'],
      },
      {
        badge: 'Operations',
        title: 'Modular ERP & Operational Inventory Platform',
        description: 'Centralized operations hub connecting procurement, warehouse inventory, vendor contracts, and departmental resource planning.',
        specs: ['Multi-Location Inventory Tracking', 'Purchase Order Approval Chains', 'Automated Low-Stock Alerts', 'Accounting Export Feeds'],
      },
      {
        badge: 'Automation',
        title: 'Multi-Department Workflow Automation Engine',
        description: 'Event-driven workflow engine that routes internal requests, enforces approval deadlines, and updates connected business tools.',
        specs: ['Configurable Approval Matrices', 'Automatic Task Escalations', 'Two-Way Webhook Sync', 'Dead-Letter Queue Retries'],
      },
      {
        badge: 'Intelligence',
        title: 'Enterprise Data Warehouse & BI Analytics Dashboard',
        description: 'Consolidated reporting layer providing executives and managers with real-time operational metrics, conversion funnels, and KPI charts.',
        specs: ['Interactive Drill-Down Charts', 'Automated Daily Summaries', 'Data Freshness Indicators', 'Custom Metric Formulations'],
      },
      {
        badge: 'Handover & SLA',
        title: 'Complete Source Code Ownership & 30-Day Critical SLA',
        description: '100% intellectual property ownership, source code handover, CI/CD automated deployment, and guaranteed post-launch SLA support.',
        specs: ['Full Source Code Transfer', 'OpenAPI / Swagger Specs', 'Dockerized Deployments', '30-Day Guaranteed SLA'],
      },
    ],
    project: {
      name: 'Bus Booking Admin Management System',
      slug: 'bus-booking-admin-management-system',
      summary: 'Enterprise administrative command center: fleet allocation, driver scheduling, real-time ticket sales reconciliation, and operational audit trails.',
      metrics: 'Sub-second Scheduling · 100k+ Monthly Bookings · Multi-Tier RBAC',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Process Discovery & System Blueprinting',
        focus: 'We dissect your existing cross-departmental operations, interview team leads, map data flow bottlenecks, and define software specs.',
        bullets: ['Operational Workflow Dissection', 'Data Entity & Schema Mapping', 'SSO & Security Policy Alignment', 'Fixed Milestone Scope & Timeline'],
      },
      stage2: {
        title: 'Stage 2: Agile Iterations & Stakeholder Demos',
        focus: 'We build modular services in 2-week agile sprints, conducting bi-weekly live staging demos with department heads.',
        bullets: ['2-Week Agile Sprints', 'Departmental Staging Demos', 'Automated Integration Testing', 'Iterative Feedback Loops'],
      },
      stage3: {
        title: 'Stage 3: Zero-Downtime Migration & Staff Training',
        focus: 'We execute data migration from legacy spreadsheets/tools, deploy to production, train staff, and provide continuous SLA support.',
        bullets: ['Legacy Data Cleanse & Import', 'Blue/Green Cloud Deployment', 'Staff Video Playbooks & Training', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Why build custom enterprise software instead of paying for Salesforce, SAP, or HubSpot?',
        answer: 'Off-the-shelf platforms charge steep recurring per-seat fees that increase exponentially as your company grows, and force your team into rigid, generic workflows. Custom enterprise software is engineered 100% around your exact business processes, carries zero recurring licensing costs, and remains your proprietary asset forever.',
      },
      {
        question: 'Can the new system integrate with our existing legacy databases and ERPs?',
        answer: 'Yes! We build resilient integration middleware with dead-letter queue retries and schema validation, allowing your new platform to seamlessly sync data bidirectionally with SAP, Salesforce, legacy SQL databases, or internal file servers.',
      },
      {
        question: 'How do you handle enterprise security and Single Sign-On (SSO)?',
        answer: 'We integrate with enterprise identity providers via SAML 2.0 and OIDC (Okta, Azure Active Directory, Google Workspace). We also implement fine-grained Role-Based Access Control (RBAC) and immutable cryptographic audit logging for full SOC 2 compliance.',
      },
      {
        question: 'What happens after launch? Who maintains the system?',
        answer: 'Every custom enterprise build includes a 30-day post-launch warranty and SLA coverage. Following launch, we offer flexible dedicated support retainers for continuous feature expansion, infrastructure monitoring, and security patching.',
      },
    ],
  },

  // ==========================================
  // 6. AI BUSINESS SOLUTIONS
  // ==========================================
  'ai-business': {
    slug: 'ai-business',
    familyTitle: 'AI Business Solutions',
    categoryBadge: 'PRACTICAL ARTIFICIAL INTELLIGENCE',
    headline: 'Put AI to Work Where Your Team Needs It.',
    tagline: 'Autonomous workflow assistants, enterprise RAG document search, and intelligent document extraction pipelines engineered with strict guardrails and private cloud deployments.',
    metrics: [
      { value: 'Zero Hallucination', label: 'Grounded RAG with Citations', live: true },
      { value: '< 1.2s', label: 'Sub-second Tool Execution', live: true },
      { value: 'Private VPC GPU', label: 'Zero Public Training Retention' },
      { value: 'Enterprise Guardrails', label: 'OWASP LLM Top 10 Hardened' },
    ],
    sandbox: {
      address: 'ai.aayaamx.internal/business-engine',
      liveBadge: 'AGENT OPERATIONAL',
      footerNote: 'AI Business Simulation • Document extraction, grounded RAG search & automated triage',
      tabs: [
        {
          id: 'doc-extractor',
          label: 'Document Extraction',
          icon: 'BrainCircuit',
          badge: 'Structured JSON',
          metricLabel1: 'EXTRACTION ACCURACY',
          metricValue1: '99.6% Clean Precision',
          metricLabel2: 'PARSING SPEED',
          metricValue2: '< 1.4s Multi-Page PDF',
          metricLabel3: 'SCHEMA ENFORCEMENT',
          metricValue3: 'Zod / Pydantic Strict',
          codeTitle: 'document-extractor.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Unstructured Document Parsing & Schema Validation' }] },
            {
              parts: [
                { text: 'const rawText = await ' },
                { text: 'ocrEngine.extractText', kind: 'func' },
                { text: '(uploadedInvoicePdf);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const invoiceData = await ' },
                { text: 'llm.extractStructuredJSON', kind: 'func' },
                { text: '(rawText, InvoiceSchema);' },
                { text: '  // 100% Validated', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await ' },
                { text: 'erpDatabase.insertInvoice', kind: 'func' },
                { text: '(invoiceData);' },
              ],
            },
          ],
        },
        {
          id: 'enterprise-rag',
          label: 'Knowledge RAG Search',
          icon: 'Search',
          badge: 'pgvector Cosine',
          metricLabel1: 'HYBRID SEARCH',
          metricValue1: 'Dense Vector + BM25',
          metricLabel2: 'RERANKING',
          metricValue2: 'Cohere Rerank v3',
          metricLabel3: 'SOURCE CITATION',
          metricValue3: 'Direct Link to Paragraph',
          codeTitle: 'knowledge-retrieval.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Grounded Hybrid Retrieval with Exact Citations' }] },
            {
              parts: [
                { text: 'const results = await ' },
                { text: 'hybridRetriever.query', kind: 'func' },
                { text: '(staffQuestion, { topK: 4 });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'prompt.injectContext(results.chunks);' },
                { text: '  // Zero Hallucinations', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'return ' },
                { text: 'llm.generateAnswerWithCitations', kind: 'func' },
                { text: '(prompt);' },
              ],
            },
          ],
        },
        {
          id: 'support-agent',
          label: 'Autonomous Support Agent',
          icon: 'Terminal',
          badge: 'ReAct Agent',
          metricLabel1: 'TRIAGE CONFIDENCE',
          metricValue1: '96.2% Autonomous Action',
          metricLabel2: 'HUMAN ESCALATION',
          metricValue2: 'Automatic on Edge Cases',
          metricLabel3: 'SAFETY FILTERS',
          metricValue3: 'NeMo Guardrails Active',
          codeTitle: 'support-agent.workflow.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Autonomous Support Triage with Human Escalation' }] },
            {
              parts: [
                { text: 'const intent = await ' },
                { text: 'agent.classifyIntent', kind: 'func' },
                { text: '(customerMessage);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (intent.confidence < 0.85) {' },
                { text: '  // Escalate', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return ' },
                { text: 'humanReviewQueue.routeToAgent', kind: 'func' },
                { text: '(customerMessage);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'intelligent-assistants',
        title: 'Intelligent Assistants',
        description: 'Support and operations assistants that pull account context, draft accurate replies, and ground answers in approved policies.',
      },
      {
        slug: 'ai-analytics',
        title: 'AI Analytics',
        description: 'Pattern detection across business data, root-cause investigation, and natural language queries linked to underlying records.',
      },
      {
        slug: 'ai-workflow-automation',
        title: 'AI Workflow Automation',
        description: 'Reading unstructured invoices, emails, or PDF forms, extracting verified fields, and routing data to finance or ERP systems.',
      },
      {
        slug: 'knowledge-management-systems',
        title: 'Knowledge Management Systems',
        description: 'Semantic vector search over company documents, answering staff questions with direct links to approved sources.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'LLMs & AI Foundations',
        icon: 'BrainCircuit',
        items: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'Llama 3.3 (Self-Hosted vLLM)', 'DeepSeek V3', 'LangChain & LangGraph', 'LlamaIndex'],
      },
      column2: {
        title: 'Vector Databases & Indexing',
        icon: 'Database',
        items: ['PostgreSQL with pgvector', 'Pinecone Vector DB', 'Qdrant / Milvus', 'Unstructured.io Document Parser', 'Cohere Rerank v3', 'Redis Semantic Cache'],
      },
      column3: {
        title: 'Guardrails & Observability',
        icon: 'Lock',
        items: ['NeMo Guardrails', 'LangSmith Tracing', 'Helicone Token Telemetry', 'PII Redaction & Masking', 'Private VPC GPU Deployment', 'Human-in-the-Loop Controls'],
      },
    },
    deliverables: [
      {
        badge: 'Intelligent Assistants',
        title: 'Autonomous Intelligent Business Assistants',
        description: 'Custom AI agents that connect to your help desk, CRM, and internal databases to draft customer replies, summarize threads, and prepare actions for staff.',
        specs: ['ReAct Reasoning Loop', 'Human-in-the-Loop Signoff', 'Strict Policy Grounding', 'Multi-Turn Conversation Memory'],
      },
      {
        badge: 'Enterprise RAG',
        title: 'Enterprise RAG Knowledge Search & Semantic Memory',
        description: 'Enterprise search engine that ingests company manuals, contracts, and internal wikis, delivering instant answers with clickable source citations.',
        specs: ['Hybrid Dense & BM25 Search', 'Exact Paragraph Citations', 'Automated Index Sync', 'Zero-Hallucination Guardrails'],
      },
      {
        badge: 'Document Parsing',
        title: 'AI-Powered Document Parsing & Workflow Extraction',
        description: 'Automated processing pipeline converting complex PDF invoices, legal contracts, and scanned forms into structured, typed JSON data for ERP import.',
        specs: ['99%+ Field Extraction Accuracy', 'Zod / Pydantic Schema Validation', 'OCR Preprocessing', 'Automatic ERP Sync'],
      },
      {
        badge: 'Safety & Compliance',
        title: 'Enterprise Safety Guardrails & PII Masking Engine',
        description: 'Comprehensive security filters that detect and block prompt injection attacks, mask Personally Identifiable Information (PII), and enforce corporate tone.',
        specs: ['NeMo Guardrail Integration', 'PII Redaction Vault', 'OWASP LLM Top 10 Hardened', 'Tamper-Evident Prompt Audit Logs'],
      },
      {
        badge: 'MLOps & Handover',
        title: 'Real-Time Token Telemetry, Evals & Handover SLA',
        description: 'Complete monitoring dashboards tracking cost per query, latency budgets, evaluation benchmarks, and post-launch maintenance SLA.',
        specs: ['LangSmith / Helicone Dashboards', 'Continuous Eval Benchmarking', 'Private VPC Deployment', '30-Day Critical SLA Warranty'],
      },
    ],
    project: {
      name: 'Autonomous Enterprise Research Agent',
      slug: 'autonomous-enterprise-research-agent',
      summary: 'Multi-agent autonomous research and document synthesis system that reads unstructured PDF financials, extracts balance sheet metrics, and prepares audit-ready summaries.',
      metrics: '99.4% Extraction Accuracy · Sub-2s Synthesis · Private GPU',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Use Case Discovery & Data Curation',
        focus: 'We identify manual document tasks, audit sample inputs, define accuracy metrics, and select model architectures (commercial vs open-source).',
        bullets: ['Business Workflow Mapping', 'Data Ingestion & Chunking Strategy', 'Accuracy Benchmark Formulation (>95%)', 'Security & Private VPC Hosting Spec'],
      },
      stage2: {
        title: 'Stage 2: RAG Pipeline Build & Eval Benchmarking',
        focus: 'We construct LangGraph pipelines, fine-tune vector search retrieval, run automated evaluations against ground truth, and test guardrails.',
        bullets: ['Hybrid Vector Index Construction', 'Rigorous Automated Eval Runs', 'Prompt Injection Red-Teaming', 'Staging User Validation'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Telemetry Handover',
        focus: 'We deploy to private GPU infrastructure with live token observability, staff training, and continuous model improvement SLA.',
        bullets: ['Private VPC GPU Deployment', 'Real-Time Tracing Dashboard Handover', 'Staff Playbooks & Training', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'How do you guarantee the AI will not hallucinate or fabricate information?',
        answer: 'We employ Grounded Retrieval-Augmented Generation (RAG) combined with strict source citation requirements. The AI is structurally constrained to generate answers strictly from retrieved corporate documents, and every statement includes a direct link to the underlying paragraph.',
      },
      {
        question: 'Does our proprietary corporate data get sent to OpenAI or used for model training?',
        answer: 'Never. For clients with strict privacy or compliance mandates, we deploy state-of-the-art open-weights models (such as Llama 3.3 or DeepSeek) on dedicated, private cloud GPU instances (AWS/GCP/vLLM) inside your own VPC, ensuring zero external data leakage.',
      },
      {
        question: 'Can AI workflows be audited and reviewed by human operators before taking action?',
        answer: 'Yes! We implement Human-in-the-Loop (HITL) approval gates for all consequential operations (such as issuing financial payouts, modifying ERP records, or emailing external clients). Routine tasks execute autonomously, while edge cases are routed to human review queues.',
      },
      {
        question: 'How do you monitor and optimize recurring LLM token costs?',
        answer: 'We integrate telemetry tools like LangSmith and Helicone to monitor token usage per employee and task. We also use semantic caching, prompt compression, and intelligent model routing (directing simple queries to fast models and complex queries to frontier models) to reduce costs by 40-60%.',
      },
    ],
  },
};

// Helper to look up solution data
export function getSolutionData(slugOrPath: string): SolutionData {
  const clean = slugOrPath.replace(/^\/+/, '').replace(/^solutions\//, '').split('/')[0] || '';
  
  const aliasMap: Record<string, string> = {
    fintech: 'fintech',
    'digital-payments': 'fintech',
    'financial-platforms': 'fintech',
    'financial-automation': 'fintech',
    'forex-brokerage': 'forex-brokerage',
    'broker-infrastructure': 'forex-brokerage',
    'brokerage-crm-ecosystem': 'forex-brokerage',
    'ib-and-affiliate-management': 'forex-brokerage',
    'prop-trading': 'prop-trading',
    'evaluation-platforms': 'prop-trading',
    'challenge-management': 'prop-trading',
    'trader-dashboards': 'prop-trading',
    'payout-management': 'prop-trading',
    blockchain: 'blockchain',
    'digital-assets': 'blockchain',
    tokenization: 'blockchain',
    'decentralized-platforms': 'blockchain',
    'wallet-infrastructure': 'blockchain',
    enterprise: 'enterprise',
    'enterprise-crm': 'enterprise',
    'erp-systems': 'enterprise',
    'workflow-automation': 'enterprise',
    'business-intelligence': 'enterprise',
    'ai-business': 'ai-business',
    'intelligent-assistants': 'ai-business',
    'ai-analytics': 'ai-business',
    'ai-workflow-automation': 'ai-business',
    'knowledge-management-systems': 'ai-business',
  };

  const targetKey = aliasMap[clean] || aliasMap[slugOrPath] || 'fintech';
  return solutionsData[targetKey];
}
