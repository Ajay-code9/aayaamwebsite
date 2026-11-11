export interface SandboxTab {
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

export interface ServiceDeliverable {
  badge: string;
  title: string;
  description: string;
  specs: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  categoryBadge: string;
  categoryHref: string;
  title: string;
  tagline: string;
  metrics: Array<{ value: string; label: string; live?: boolean }>;
  sandbox: {
    address: string;
    liveBadge: string;
    footerNote: string;
    tabs: SandboxTab[];
  };
  techMatrix: {
    column1: { title: string; icon: string; items: string[] };
    column2: { title: string; icon: string; items: string[] };
    column3: { title: string; icon: string; items: string[] };
  };
  deliverables: ServiceDeliverable[];
  methodology: {
    stage1: { title: string; focus: string; bullets: string[] };
    stage2: { title: string; focus: string; bullets: string[] };
    stage3: { title: string; focus: string; bullets: string[] };
  };
  faqs: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceData> = {
  // ==========================================
  // 1. CUSTOM SOFTWARE DEVELOPMENT
  // ==========================================
  'custom-software-development': {
    slug: 'custom-software-development',
    categoryBadge: 'CUSTOM ENTERPRISE SOFTWARE & ARCHITECTURE',
    categoryHref: '/services/software-engineering',
    title: 'Custom Enterprise Software & Scalable Digital Platforms.',
    tagline: 'Engineered around your business workflows — custom portals, distributed backend services, and scalable database architectures designed to replace fragmented legacy tools.',
    metrics: [
      { value: '99.9% Uptime', label: 'Enterprise Availability SLA', live: true },
      { value: '< 50ms Latency', label: 'Global Data Layer Query Budget', live: true },
      { value: '100% IP Ownership', label: 'Full Source Code & Repositories' },
      { value: 'Zero Licensing Fees', label: 'No Per-Seat Recurring Tax' },
    ],
    sandbox: {
      address: 'app.aayaamx.internal/enterprise-portal',
      liveBadge: '99.9% HEALTH',
      footerNote: 'Enterprise Architecture Simulation • Multi-tenant data isolation & distributed workers',
      tabs: [
        {
          id: 'multi-tenant',
          label: 'Multi-Tenant Core',
          icon: 'Layers',
          badge: 'Tenant Context',
          metricLabel1: 'ISOLATION MODEL',
          metricValue1: 'Row-Level Security (RLS)',
          metricLabel2: 'TENANT ROUTING',
          metricValue2: '< 1.4ms lookup',
          metricLabel3: 'DATA ENCRYPTION',
          metricValue3: 'AES-256 at Rest',
          codeTitle: 'tenant-middleware.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Dynamic Tenant Resolver & Context Isolation' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'withTenantContext', kind: 'func' },
                { text: '(req: EnterpriseRequest) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const tenant = await ' },
                { text: 'resolveTenantId', kind: 'func' },
                { text: '(req.headers.get("x-org-id"));' },
                { text: '  // RLS Active', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  db.setSession(' },
                { text: '"app.current_tenant_id"', kind: 'string' },
                { text: ', tenant.id);' },
              ],
            },
            {
              parts: [
                { text: '  return ' },
                { text: 'createTenantScopedSandbox', kind: 'func' },
                { text: '(tenant);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'workers',
          label: 'Event Queue & Workers',
          icon: 'Cpu',
          badge: 'Distributed BullMQ',
          metricLabel1: 'CONCURRENCY',
          metricValue1: '5,000 jobs/sec',
          metricLabel2: 'RETRY POLICY',
          metricValue2: 'Exponential Backoff',
          metricLabel3: 'DELIVERY GUARANTEE',
          metricValue3: 'At-Least-Once',
          codeTitle: 'event-processor.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// High-Throughput Event Worker with DLQ' }] },
            {
              parts: [
                { text: 'const worker = new ' },
                { text: 'Worker', kind: 'component' },
                { text: '("enterprise-tasks", async (job) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const result = await ' },
                { text: 'executeWorkflowStep', kind: 'func' },
                { text: '(job.data);' },
                { text: '  // Zero Drops', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'auditLog.record', kind: 'func' },
                { text: '({ taskId: job.id, duration: job.duration });' },
              ],
            },
            { parts: [{ text: '}, { concurrency: 64, limiter: { max: 1000, duration: 1000 } });' }] },
          ],
        },
        {
          id: 'sso-rbac',
          label: 'Enterprise SSO & RBAC',
          icon: 'Lock',
          badge: 'SAML 2.0 / Okta',
          metricLabel1: 'AUTH PROVIDER',
          metricValue1: 'Okta / Azure AD / OIDC',
          metricLabel2: 'AUDIT LOGGING',
          metricValue2: 'Immutable Hash Chaining',
          metricLabel3: 'SESSION DURATION',
          metricValue3: 'Rolling JWT (15m)',
          codeTitle: 'rbac-policy.guard.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Fine-grained Role-Based Access Control' }] },
            {
              parts: [
                { text: 'export const ' },
                { text: 'RequirePermission', kind: 'keyword' },
                { text: ' = (perm: Permission) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  return ' },
                { text: 'verifySessionAndRole', kind: 'func' },
                { text: '(perm, { strictAudit: true });' },
                { text: '  // 100% Audited', kind: 'badge' },
              ],
            },
            { parts: [{ text: '};' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Application & Frameworks',
        icon: 'Code2',
        items: ['Next.js (App Router)', 'TypeScript 5', 'Node.js / Express', 'Go (Golang)', 'Python (FastAPI)', '.NET Core'],
      },
      column2: {
        title: 'Databases & Distributed Queues',
        icon: 'Database',
        items: ['PostgreSQL (ACID)', 'Redis Enterprise', 'BullMQ / RabbitMQ', 'Apache Kafka', 'Prisma / Drizzle ORM', 'Elasticsearch'],
      },
      column3: {
        title: 'Infrastructure & Security',
        icon: 'Server',
        items: ['Docker Containers', 'Kubernetes (K8s)', 'AWS / Cloudflare', 'SAML 2.0 / Okta SSO', 'OWASP Hardening', 'GitHub Actions CI/CD'],
      },
    },
    deliverables: [
      {
        badge: 'Custom Portals',
        title: 'Custom Workflow & Customer Portals',
        description: 'Bespoke web applications and administrative dashboards tailored to your internal company operations, approval chains, and client onboarding.',
        specs: ['Custom UI Design System', 'Sub-second Navigation', 'Strict Role-Based Views', 'Export to Excel / PDF'],
      },
      {
        badge: 'Distributed Backend',
        title: 'Scalable Microservices & APIs',
        description: 'Decoupled, modular REST and GraphQL microservices engineered for high concurrency, event streaming, and automated fault tolerance.',
        specs: ['Non-Blocking Async IO', 'Distributed Tracing', 'Connection Pooling', 'Zero-Downtime Rollouts'],
      },
      {
        badge: 'Enterprise Security',
        title: 'SSO, RBAC & Audit Trails',
        description: 'Turnkey enterprise authentication with Okta, Google Workspace, Azure AD, fine-grained access control, and tamper-evident audit logs.',
        specs: ['SAML 2.0 & OIDC SSO', 'Granular Permissions', 'Immutable Audit Trails', 'AES-256 Encryption'],
      },
      {
        badge: 'Third-Party Integration',
        title: 'Legacy & ERP System Integrations',
        description: 'Seamless integration with existing databases, SAP, Salesforce, payment gateways, and third-party SaaS without data corruption.',
        specs: ['Two-Way Data Sync', 'Dead-Letter Queue Retries', 'Webhook Verification', 'Schema Migration Scripts'],
      },
      {
        badge: 'Production Readiness',
        title: 'Complete Handover & SLA Support',
        description: '100% intellectual property ownership, source code handover, CI/CD automated deployment, and guaranteed post-launch SLA support.',
        specs: ['Full Source Code Transfer', 'OpenAPI / Swagger Specs', 'Dockerized Deployments', '30-Day Guaranteed SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Align & System Architecture',
        focus: 'We clarify operational workflows, legacy system constraints, data models, and enterprise security compliance requirements.',
        bullets: ['Domain Workflow Analysis', 'Database Schema & API Contracts', 'Security & SSO Requirements', 'Fixed Sprint Roadmap & Milestones'],
      },
      stage2: {
        title: 'Stage 2: Iterative Engineering & Demos',
        focus: 'We ship bi-weekly working increments, conduct milestone reviews, and maintain continuous automated testing.',
        bullets: ['Agile 2-Week Sprints', 'Staging Environment Demos', 'Automated Unit & Integration Tests', 'Continuous Client Feedback Loops'],
      },
      stage3: {
        title: 'Stage 3: Production Deployment & Handover',
        focus: 'Zero-downtime deployment, staff onboarding, complete source code transfer, and ongoing maintenance coverage.',
        bullets: ['Blue/Green Zero-Downtime Deploy', 'Full Git Repository Transfer', 'Staff Admin Training Sessions', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'What types of custom software do you build?',
        answer: 'We build enterprise B2B portals, workflow automation platforms, customer-facing web and mobile applications, trading terminals, broker management systems, multi-tenant SaaS products, and custom API integrations tailored to specific operational requirements.',
      },
      {
        question: 'How do you handle software that needs to scale to high volumes?',
        answer: 'We design systems with decoupled microservices, database connection pooling, Redis caching layers, asynchronous message queues (Kafka/RabbitMQ), and containerized auto-scaling clusters (Kubernetes/AWS ECS) that effortlessly handle traffic spikes.',
      },
      {
        question: 'Do we own the full source code and intellectual property?',
        answer: 'Yes, 100%. Upon project milestone completion, all source code, design assets, database schemas, and documentation are transferred directly to your company repositories with zero vendor lock-in and zero recurring licensing fees.',
      },
      {
        question: 'Do you provide ongoing support and maintenance after delivery?',
        answer: 'Every custom software project includes our 30-day post-launch warranty and SLA support. Beyond launch, we offer flexible retainers for infrastructure monitoring, feature additions, security patching, and scaling assistance.',
      },
    ],
  },

  // ==========================================
  // 2. MOBILE APP DEVELOPMENT
  // ==========================================
  'mobile-app-development': {
    slug: 'mobile-app-development',
    categoryBadge: 'NATIVE & CROSS-PLATFORM MOBILE ENGINEERING',
    categoryHref: '/services/software-engineering',
    title: 'Native iOS & Android Mobile App Development.',
    tagline: 'High-performance React Native, Flutter, Swift, and Kotlin mobile applications engineered for 60fps fluidity, resilient offline sync, biometric security, and guaranteed App Store submission.',
    metrics: [
      { value: '60 fps', label: 'Interaction Fluidity Budget', live: true },
      { value: '< 1ms', label: 'Local SQLite Query Latency', live: true },
      { value: 'Biometric Auth', label: 'FaceID & Fingerprint Security' },
      { value: '100% Approval', label: 'Guaranteed Store Submission' },
    ],
    sandbox: {
      address: 'mobile.aayaamx.internal/runtime-bridge',
      liveBadge: '60 FPS STABLE',
      footerNote: 'Mobile Engine Simulation • Native thread bridge, offline sqlite sync & biometric keychain',
      tabs: [
        {
          id: 'native-ui',
          label: 'React Native & Flutter',
          icon: 'Smartphone',
          badge: 'Fabric / Impeller',
          metricLabel1: 'RENDER THREAD',
          metricValue1: '60.0 FPS Dedicated',
          metricLabel2: 'GESTURE ENGINE',
          metricValue2: 'Reanimated 3 (Direct)',
          metricLabel3: 'BUNDLE SIZE',
          metricValue3: '< 18 MB Optimized',
          codeTitle: 'NativeMotionCard.tsx',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Hardware-Accelerated 60fps Gesture Driver' }] },
            {
              parts: [
                { text: 'const animatedStyle = ' },
                { text: 'useAnimatedStyle', kind: 'func' },
                { text: '(() => ({' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  transform: [{ translateY: ' },
                { text: 'withSpring', kind: 'func' },
                { text: '(offset.value, { damping: 15 }) }]' },
                { text: '  // Native Thread', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}));' }] },
            {
              parts: [
                { text: 'return <' },
                { text: 'GestureDetector', kind: 'component' },
                { text: ' gesture={panGesture}>' },
              ],
            },
            {
              parts: [
                { text: '  <' },
                { text: 'Animated.View', kind: 'component' },
                { text: ' style={[styles.card, animatedStyle]} />' },
              ],
            },
            { parts: [{ text: '</' }, { text: 'GestureDetector', kind: 'component' }, { text: '>;' }] },
          ],
        },
        {
          id: 'offline-sync',
          label: 'Offline Sync & SQLite',
          icon: 'Database',
          badge: 'WatermelonDB',
          metricLabel1: 'LOCAL ENGINE',
          metricValue1: 'SQLite / Realm',
          metricLabel2: 'SYNC STRATEGY',
          metricValue2: 'Delta Sync with CRDT',
          metricLabel3: 'QUERY SPEED',
          metricValue3: '< 0.8ms Local',
          codeTitle: 'offline-sync-engine.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Background Delta Synchronization Engine' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'synchronizeLocalDatabase', kind: 'func' },
                { text: '() {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'synchronize', kind: 'func' },
                { text: '({ database, pullChanges, pushChanges });' },
                { text: '  // Zero Data Loss', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'localStore.markClean', kind: 'func' },
                { text: '();' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'biometric-store',
          label: 'Biometrics & FCM Push',
          icon: 'ShieldCheck',
          badge: 'Secure Enclave',
          metricLabel1: 'AUTH METHOD',
          metricValue1: 'FaceID / TouchID / Keystore',
          metricLabel2: 'PUSH PROTOCOL',
          metricValue2: 'FCM / APNs Direct',
          metricLabel3: 'DEEP LINKING',
          metricValue3: 'Universal Links & App Links',
          codeTitle: 'biometric-guard.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Biometric Key Retrieval from Hardware Keystore' }] },
            {
              parts: [
                { text: 'const credential = await ' },
                { text: 'Keychain.getGenericPassword', kind: 'func' },
                { text: '({' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  authenticationPrompt: ' },
                { text: '"Authenticate with FaceID"', kind: 'string' },
                { text: '  // Hardware Protected', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Cross-Platform & Native',
        icon: 'Smartphone',
        items: ['React Native (Fabric)', 'Flutter (Impeller)', 'Swift / SwiftUI (iOS)', 'Kotlin / Jetpack (Android)', 'TypeScript', 'Expo SDK'],
      },
      column2: {
        title: 'Local Storage & State',
        icon: 'Database',
        items: ['SQLite / WatermelonDB', 'Realm Mobile DB', 'MMKV Storage', 'Redux Toolkit / Zustand', 'React Query / TanStack', 'RxDart'],
      },
      column3: {
        title: 'Push & Security Services',
        icon: 'Lock',
        items: ['Firebase Cloud Messaging', 'Apple APNs', 'iOS Secure Enclave', 'Android Keystore', 'Sentry Mobile Telemetry', 'Fastlane Automated CI'],
      },
    },
    deliverables: [
      {
        badge: 'Cross-Platform & Native',
        title: 'Native & Cross-Platform Mobile Apps',
        description: 'High-performance React Native, Flutter, or pure Swift/Kotlin mobile application built for fluid 60fps scrolling and responsive touch handling.',
        specs: ['60fps Animation Budget', 'Hardware-Accelerated UI', 'Shared Codebase Efficiency', 'Consistent iOS & Android UX'],
      },
      {
        badge: 'Offline Resilience',
        title: 'Offline Data Sync & Local Storage',
        description: 'Local SQLite or Realm caching with automated background synchronization upon network reconnection to ensure zero data loss on spotty signals.',
        specs: ['SQLite / Realm Database', 'Conflict-Free Delta Sync', 'Background Job Sync', 'Instant Local Query Latency'],
      },
      {
        badge: 'Engagement & Linking',
        title: 'Push Notifications & Deep Links',
        description: 'Firebase Cloud Messaging (FCM) integration for real-time user alerts, marketing campaign triggers, and Universal/App Links routing directly to in-app screens.',
        specs: ['APNs & FCM Delivery', 'Custom Rich Media Alerts', 'Universal Links Routing', 'User Notification Preferences'],
      },
      {
        badge: 'Hardware Security',
        title: 'Biometric Auth & Mobile Security',
        description: 'Secure iOS Keychain and Android Keystore integration for FaceID, fingerprint login, encrypted local auth tokens, and OWASP mobile security hardening.',
        specs: ['FaceID & TouchID Integration', 'Secure Enclave Storage', 'SSL Pinning Protection', 'App Integrity Attestation'],
      },
      {
        badge: 'Store Delivery',
        title: 'App Store & Play Store Guaranteed Submission',
        description: 'Full store guidelines review, compliance audit, release asset packaging, and guaranteed app submission to Apple App Store & Google Play.',
        specs: ['Guideline Compliance Audit', 'App Store Review Assistance', 'Automated Fastlane Deployment', 'Store Listing Asset Pack'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: UX Wireframing & Tech Stack Choice',
        focus: 'We finalize mobile wireframes, define device permissions, choose React Native vs Flutter vs Native, and blueprint API payloads.',
        bullets: ['Mobile User Journey Design', 'Figma Clickable Prototypes', 'Architecture & Offline Strategy', 'Store Guideline Pre-Check'],
      },
      stage2: {
        title: 'Stage 2: Core Development & TestFlight Beta',
        focus: 'We ship bi-weekly builds to Apple TestFlight and Google Play Internal Testing for hands-on stakeholder verification.',
        bullets: ['TestFlight & Internal Builds', 'Device Hardware Integration', 'Offline Sync & Stress Testing', 'Crashlytics Telemetry Setup'],
      },
      stage3: {
        title: 'Stage 3: Production Review & Store Release',
        focus: 'We manage the entire submission process with Apple and Google until both apps are published live.',
        bullets: ['Apple Review Coordination', 'Google Play Policy Signoff', 'Production CDN & API Linking', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'Should I choose React Native, Flutter, or Pure Native (Swift/Kotlin)?',
        answer: 'React Native and Flutter provide native 60fps performance while sharing 85-95% of the codebase across iOS and Android, saving substantial development and maintenance costs. We only recommend pure Swift/Kotlin for apps requiring low-level hardware drivers, complex AR/VR, or heavy on-device ML.',
      },
      {
        question: 'How do you guarantee approval on the Apple App Store and Google Play?',
        answer: 'We rigorously audit our builds against Apple Human Interface Guidelines and Google Play Developer Policies. We handle all reviewer inquiries, test account setup, privacy labels, and policy compliance until your app is approved and live.',
      },
      {
        question: 'Can the app work completely offline?',
        answer: 'Yes! We implement offline-first architectures using SQLite, Realm, or WatermelonDB. Users can view and create data without internet connectivity; once a network connection is detected, changes sync smoothly with conflict-resolution algorithms.',
      },
      {
        question: 'Do you provide push notification and marketing tools integration?',
        answer: 'Yes, we integrate Firebase Cloud Messaging (FCM), OneSignal, and analytics tools like Mixpanel and PostHog to enable targeted push notifications, user segmentation, and deep-link campaign tracking.',
      },
    ],
  },

  // ==========================================
  // 3. FOREX CRM & TRADING TECHNOLOGY
  // ==========================================
  'forex-crm-development': {
    slug: 'forex-crm-development',
    categoryBadge: 'FINTECH & TRADING INFRASTRUCTURE',
    categoryHref: '/services/trading-technology',
    title: 'Forex CRM, Trader Cabinets & Broker Backoffice.',
    tagline: 'Enterprise trading infrastructure for brokerages and prop trading firms — multi-tier IB management, real-time trader cabinets, automated KYC/AML, payment gateway orchestration, and MT4/MT5 bridges.',
    metrics: [
      { value: 'Sub-Millisecond', label: 'Execution & Quote Broadcast', live: true },
      { value: 'Multi-Tier IB', label: 'Real-Time Commission Engine', live: true },
      { value: 'Multi-Bridge', label: 'MT4, MT5, cTrader & Vertex' },
      { value: 'Automated KYC', label: 'Instant Verification & Payouts' },
    ],
    sandbox: {
      address: 'trade.aayaamx.internal/broker-engine',
      liveBadge: 'TERMINAL READY',
      footerNote: 'Trading Architecture Simulation • MT4/MT5 bridge, IB commission tree & prop firm risk',
      tabs: [
        {
          id: 'trader-room',
          label: 'Trader Cabinet & Bridge',
          icon: 'TrendingUp',
          badge: 'MT4 / MT5 Bridge',
          metricLabel1: 'BRIDGE STATUS',
          metricValue1: 'Connected (0.4ms ping)',
          metricLabel2: 'BALANCE SYNC',
          metricValue2: 'Real-time WebSocket',
          metricLabel3: 'LEVERAGE CONTROL',
          metricValue3: 'Dynamic Tiering (1:500)',
          codeTitle: 'mt5-bridge.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Real-Time MetaTrader 5 Manager Bridge Handshake' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'provisionTradingAccount', kind: 'func' },
                { text: '(traderId: string, group: string) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const account = await ' },
                { text: 'mt5Server.createAccount', kind: 'func' },
                { text: '({ group, leverage: 200 });' },
                { text: '  // Instant Sync', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'crmDatabase.linkLogin', kind: 'func' },
                { text: '(traderId, account.login);' },
              ],
            },
            { parts: [{ text: '  return account;' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'ib-tree',
          label: 'IB Multi-Tier Tree',
          icon: 'GitFork',
          badge: '5-Tier Rebates',
          metricLabel1: 'REBATE CALCULATION',
          metricValue1: 'Instant Pip / Lot Split',
          metricLabel2: 'TREE DEPTH',
          metricValue2: 'Up to 10 Levels',
          metricLabel3: 'PAYOUT AUTOMATION',
          metricValue3: 'USDT / Bank Wire',
          codeTitle: 'ib-commission-calculator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Recursive IB Tree Rebate Allocation' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'distributeRebate', kind: 'func' },
                { text: '(trade: ClosedTrade) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const ancestors = await ' },
                { text: 'getIBAscendants', kind: 'func' },
                { text: '(trade.accountId);' },
                { text: '  // Multi-Level', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  for (const ib of ancestors) {' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'creditWallet', kind: 'func' },
                { text: '(ib.walletId, trade.lots * ib.tierRate);' },
              ],
            },
            { parts: [{ text: '  }' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'prop-risk',
          label: 'Prop Firm Risk Monitor',
          icon: 'ShieldAlert',
          badge: 'Drawdown Engine',
          metricLabel1: 'DAILY LOSS LIMIT',
          metricValue1: '5.0% Strict Trailing',
          metricLabel2: 'MAX LOSS LIMIT',
          metricValue2: '10.0% Static Equity',
          metricLabel3: 'BREACH ACTION',
          metricValue3: 'Instant Account Read-Only',
          codeTitle: 'prop-evaluator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// High-Frequency Drawdown Breaching Guard' }] },
            {
              parts: [
                { text: 'const isBreached = ' },
                { text: 'equityMetrics.currentDrawdown', kind: 'prop' },
                { text: ' >= challenge.maxDailyLoss;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (isBreached) await ' },
                { text: 'lockAccountAndCloseTrades', kind: 'func' },
                { text: '(login);' },
                { text: '  // Auto Safeguard', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Trading Platforms & Protocols',
        icon: 'TrendingUp',
        items: ['MetaTrader 5 (MT5 Manager)', 'MetaTrader 4 (MT4 Server API)', 'cTrader Open API', 'FIX 4.4 / 5.0 Protocol', 'TradingView Charting', 'VertexFX Bridge'],
      },
      column2: {
        title: 'Fintech & Payment Gateways',
        icon: 'Wallet',
        items: ['Crypto On/Off-Ramp (USDT)', 'Bank Wire & SEPA / ACH', 'Stripe & Credit Cards', 'SumSub KYC / AML', 'Praxis Cashier', 'Automated Payout Ledgers'],
      },
      column3: {
        title: 'Backend & High-Throughput DB',
        icon: 'Server',
        items: ['Go / Node.js High Concurrency', 'PostgreSQL TimescaleDB', 'Redis In-Memory Tickers', 'WebSocket Order Broadcast', 'Docker Microservices', 'AES-256 Wallet Vaults'],
      },
    },
    deliverables: [
      {
        badge: 'Client Portal',
        title: 'High-Performance Trader Room Dashboard',
        description: 'Modern, responsive client cabinet where traders open live/demo accounts, deposit funds, view trade history, request payouts, and monitor performance.',
        specs: ['Instant Account Provisioning', 'Multi-Currency Wallets', 'Deposit & Withdrawal Cashier', 'TradingView Web Terminal'],
      },
      {
        badge: 'Broker Management',
        title: 'Comprehensive Broker Backoffice',
        description: 'Command center for broker operations — client management, financial reconciliation, KYC review, deposit approval workflows, and staff role permissions.',
        specs: ['Unified Client Management', 'Deposit & Withdrawal Approval', 'A-Book / B-Book Configuration', 'Detailed Financial Ledger'],
      },
      {
        badge: 'Affiliate Engine',
        title: 'Multi-Tier Introducing Broker (IB) Engine',
        description: 'Hierarchical multi-tier affiliate system with customizable pip and dollar commissions, real-time rebate calculation, and automated sub-IB distribution.',
        specs: ['Unlimited Tree Depth', 'Real-Time Rebate Crediting', 'Custom Referral Links', 'IB Performance Dashboard'],
      },
      {
        badge: 'Prop Trading',
        title: 'Prop Firm Challenge & Evaluation Platform',
        description: 'Turnkey proprietary trading firm technology: automated 1-step/2-step challenge evaluations, daily and max drawdown monitoring, and instant breach notifications.',
        specs: ['Automated Rule Evaluations', 'Trailing & Static Drawdown', 'Profit Target Triggers', 'Certificate & Funded Phase Issuance'],
      },
      {
        badge: 'Bridge & Liquidity',
        title: 'MT4 / MT5 / cTrader Trading Bridge',
        description: 'Direct server-to-server API bridge linking your web applications and CRM to MT4, MT5, cTrader, and tier-1 liquidity providers.',
        specs: ['Manager API Integration', 'Sub-millisecond Trade Routing', 'Real-time WebSocket Equity Stream', 'Risk Exposure Analytics'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Broker Model & Platform Setup',
        focus: 'We configure trading server bridges (MT4/MT5/cTrader), design payment routing rules, set IB commission structures, and define prop firm rules.',
        bullets: ['Trading Server API Connection', 'Payment Gateway & KYC Setup', 'IB Tree & Rebate Mapping', 'Risk Parameters Configuration'],
      },
      stage2: {
        title: 'Stage 2: Staging Deployment & Execution Tests',
        focus: 'We test live order execution, balance deposits, IB commission splits, and automated drawdown triggers in a staging environment.',
        bullets: ['End-to-End Cashier Stress Test', 'Live Trade & Rebate Testing', 'Prop Challenge Rule Verification', 'Security & Penetration Audit'],
      },
      stage3: {
        title: 'Stage 3: Production Launch & SRE Support',
        focus: 'We deploy to production infrastructure with 24/7 server monitoring, staff training, and continuous trading support.',
        bullets: ['Production Bridge Deployment', 'Backoffice Staff Training', 'High-Availability Server Setup', 'Critical SLA Trading Coverage'],
      },
    },
    faqs: [
      {
        question: 'What modules are included in the Forex CRM platform?',
        answer: 'Our Forex CRM includes the Trader Cabinet, Broker Backoffice Admin, Multi-Tier IB Partner Portal, Payment Cashier (Crypto + Fiat), automated KYC/AML verification, MT4/MT5/cTrader bridge integration, and advanced financial reporting.',
      },
      {
        question: 'Does the platform support Prop Firm challenge rules and risk parameters?',
        answer: 'Yes! Our prop firm engine features automated evaluation algorithms that track daily drawdown, maximum overall loss, profit targets, minimum trading days, and news trading restrictions with instant automated breach enforcement.',
      },
      {
        question: 'Can you integrate custom payment gateways and crypto processors?',
        answer: 'Yes. We support custom payment integrations for credit cards, bank wire, local alternative payment methods (UPI, PIX, SEPA), and crypto payment processors (USDT, BTC, ETH) with automated address generation and callback confirmations.',
      },
      {
        question: 'How fast can a turnkey broker CRM and terminal be deployed?',
        answer: 'Depending on your server readiness and licensing (MT4, MT5, or standalone terminal), our white-label turnkey deployments can be configured and live in as little as 10 to 14 business days.',
      },
    ],
  },

  // ==========================================
  // 4. API DEVELOPMENT & BACKEND
  // ==========================================
  'api-development': {
    slug: 'api-development',
    categoryBadge: 'BACKEND ARCHITECTURE & DATA STREAMING',
    categoryHref: '/services/cloud-infrastructure',
    title: 'High-Throughput REST APIs & Real-Time WebSocket Streaming.',
    tagline: 'High-performance backend services engineered for high-concurrency environments — low-latency REST endpoints, WebSocket market feeds, Redis caching, and PostgreSQL clustering.',
    metrics: [
      { value: '< 20ms', label: 'p95 Response Latency', live: true },
      { value: '100k+', label: 'Concurrent WebSocket Clients', live: true },
      { value: 'OpenAPI 3.0', label: 'Automated Swagger Contracts' },
      { value: 'Zero Drop', label: 'Rate-Limited DDOS Protection' },
    ],
    sandbox: {
      address: 'api.aayaamx.internal/v1/metrics',
      liveBadge: '200 OK (14ms)',
      footerNote: 'Backend Gateway Simulation • Low-latency REST, non-blocking websockets & Redis clusters',
      tabs: [
        {
          id: 'rest-gateway',
          label: 'REST & GraphQL API',
          icon: 'Terminal',
          badge: 'Go / FastAPI',
          metricLabel1: 'P95 LATENCY',
          metricValue1: '14.2ms Global',
          metricLabel2: 'THROUGHPUT',
          metricValue2: '35,000 req/sec',
          metricLabel3: 'SCHEMA SPEC',
          metricValue3: 'OpenAPI / Swagger 3.0',
          codeTitle: 'api-router.go',
          codeLines: [
            { type: 'comment', parts: [{ text: '// High-Throughput REST Router with Rate Limiting' }] },
            {
              parts: [
                { text: 'func ', kind: 'keyword' },
                { text: 'GetMarketQuotes', kind: 'func' },
                { text: '(c *gin.Context) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  quotes, err := ' },
                { text: 'cache.FetchOrCompute', kind: 'func' },
                { text: '(ctx, "quotes:all", 2*time.Second)' },
                { text: '  // sub-2ms cache', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  c.JSON(http.StatusOK, quotes)' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'ws-streaming',
          label: 'WebSocket Tick Broadcast',
          icon: 'Radio',
          badge: 'uWebSockets',
          metricLabel1: 'CONCURRENT SOCKS',
          metricValue1: '120,000 Connected',
          metricLabel2: 'BROADCAST TICK',
          metricValue2: 'Sub-5ms to edge',
          metricLabel3: 'SERIALIZATION',
          metricValue3: 'Protocol Buffers / Binary',
          codeTitle: 'stream-hub.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Binary WebSocket Streaming Hub' }] },
            {
              parts: [
                { text: 'wsHub.on(' },
                { text: '"market_tick"', kind: 'string' },
                { text: ', (tick: BinaryTick) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  wsHub.publish(' },
                { text: 'tick.symbol', kind: 'prop' },
                { text: ', tick.payload, true);' },
                { text: '  // Zero CPU Overhead', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
        {
          id: 'db-cluster',
          label: 'Postgres & Redis Cluster',
          icon: 'Database',
          badge: 'PgBouncer + Sentinel',
          metricLabel1: 'CONNECTION POOL',
          metricValue1: 'Max 250 (PgBouncer)',
          metricLabel2: 'CACHE HIT RATE',
          metricValue2: '96.8% In-Memory',
          metricLabel3: 'READ REPLICAS',
          metricValue3: '3 Geographic Nodes',
          codeTitle: 'db-cluster.config.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Intelligent Read/Write Query Routing' }] },
            {
              parts: [
                { text: 'const pool = ' },
                { text: 'isWriteQuery', kind: 'func' },
                { text: '(sql) ? primaryPool : replicaPool;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'return await pool.query(sql, params);' },
                { text: '  // Zero Replica Lag', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Backend Runtimes',
        icon: 'Server',
        items: ['Go (Golang)', 'Node.js (Fastify / Express)', 'Python (FastAPI / Django)', 'Rust (Actix / Axum)', 'Java / Spring Boot', '.NET 8 Core'],
      },
      column2: {
        title: 'Protocols & Streaming',
        icon: 'Radio',
        items: ['RESTful JSON APIs', 'WebSocket & SSE Streams', 'gRPC & Protocol Buffers', 'GraphQL (Apollo / Nexus)', 'Webhooks with HMAC Signatures', 'FIX Protocol Engine'],
      },
      column3: {
        title: 'Persistence & Caching',
        icon: 'Database',
        items: ['PostgreSQL with TimescaleDB', 'Redis Sentinel & Cluster', 'ClickHouse Analytics', 'MongoDB Distributed', 'Kafka / RabbitMQ', 'Cloudflare Workers Edge'],
      },
    },
    deliverables: [
      {
        badge: 'REST & GraphQL',
        title: 'High-Throughput REST & GraphQL APIs',
        description: 'Clean, performant, and versioned backend APIs engineered to handle tens of thousands of requests per second with sub-20ms p95 latencies.',
        specs: ['Strict TypeScript / Go Contracts', 'Automatic OpenAPI / Swagger Spec', 'JWT & OAuth2 Authentication', 'Idempotency Key Handling'],
      },
      {
        badge: 'Real-Time Feeds',
        title: 'Real-Time WebSocket Streaming Servers',
        description: 'Persistent, bidirectional WebSocket channels capable of streaming financial ticks, sports data, live chat, or IoT telemetry to hundreds of thousands of concurrent clients.',
        specs: ['Binary & JSON Serialization', 'Channel-Based Pub/Sub', 'Heartbeat Reconnection Guard', 'Edge CDN Offloading'],
      },
      {
        badge: 'Database Scaling',
        title: 'Database Clustering & Caching Architecture',
        description: 'ACID-compliant PostgreSQL primary-replica topologies, PgBouncer connection pooling, and multi-tier Redis caching for ultra-fast query responses.',
        specs: ['Read/Write Query Splitting', 'Sub-millisecond Redis Caching', 'Automated Index Optimization', 'Zero-Downtime Data Migrations'],
      },
      {
        badge: 'Security & Throttling',
        title: 'Enterprise Rate Limiting & DDOS Protection',
        description: 'Token bucket and sliding window rate limiting, IP reputation filtering, CORS policies, and automated protection against abusive traffic spikes.',
        specs: ['Sliding Window Throttling', 'API Key Management & Tiers', 'mTLS / IP Whitelisting', 'Cloudflare WAF Rules'],
      },
      {
        badge: 'Documentation',
        title: 'Interactive Swagger & Postman Handover',
        description: 'Interactive API documentation, OpenAPI 3.0 schemas, Postman collection exports, and client SDK generation for fast third-party developer onboarding.',
        specs: ['Interactive Swagger UI', 'Complete Postman Workspace', 'Automated TypeScript Client SDK', 'Webhook Testing Sandbox'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: API Contract & Schema Architecture',
        focus: 'We define REST/GraphQL schemas, database entity relations, authentication flows, and latency SLA targets before writing code.',
        bullets: ['OpenAPI 3.0 Contract Definition', 'Database ERD & Index Strategy', 'Auth & Scope Specification', 'Throughput & RPS Budgeting'],
      },
      stage2: {
        title: 'Stage 2: Implementation & Load Testing',
        focus: 'We build endpoints with automated unit tests and run k6 load tests to simulate 50,000+ concurrent users under heavy read/write stress.',
        bullets: ['k6 Concurrency & Spike Tests', 'Database Query Optimization', 'Redis Cache Tuning', 'End-to-End Endpoint Coverage'],
      },
      stage3: {
        title: 'Stage 3: Cloud Deployment & Monitoring',
        focus: 'We deploy to containerized clusters with automated CI/CD, Prometheus metrics, and automated alerts for p99 latency regressions.',
        bullets: ['Docker & Kubernetes Deployment', 'Prometheus & Grafana Dashboards', 'Alertmanager Integration', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you ensure APIs can handle massive traffic spikes?',
        answer: 'We architect backends using non-blocking asynchronous runtimes (Go/Node.js), multi-layer Redis caching, read-replica database pools, and auto-scaling container clusters that scale dynamically based on CPU and request queue depth.',
      },
      {
        question: 'Do you build WebSockets for financial market data and live tickers?',
        answer: 'Yes! We have deep expertise building ultra-low latency WebSocket streaming infrastructure for crypto exchanges, forex brokers, and sportsbooks, handling millions of message broadcasts per second with binary serialization.',
      },
      {
        question: 'How do you secure API endpoints against unauthorized access and scraping?',
        answer: 'We implement layered defenses: OAuth2 / JWT token validation, signed HMAC request payloads, sliding-window rate limiting per IP and API key, and Cloudflare WAF integration to block malicious botnets.',
      },
      {
        question: 'Will our frontend developers receive typed SDKs and documentation?',
        answer: 'Yes. Every API we build includes automated OpenAPI 3.0 specs, interactive Swagger documentation, and auto-generated TypeScript / Python SDKs so your frontend and client teams integrate in minutes.',
      },
    ],
  },

  // ==========================================
  // 5. AI AGENT & AUTOMATION
  // ==========================================
  'ai-agent-development': {
    slug: 'ai-agent-development',
    categoryBadge: 'AUTONOMOUS AI SYSTEMS & AGENTS',
    categoryHref: '/services/ai-automation',
    title: 'Autonomous AI Agent & Multi-Agent Architecture.',
    tagline: 'Self-governing AI agents and autonomous multi-agent swarms engineered to execute complex multi-step workflows, query enterprise databases, and automate end-to-end business operations.',
    metrics: [
      { value: 'ReAct Agent', label: 'Reasoning & Action Execution', live: true },
      { value: '< 1.2s', label: 'Parallel Tool Call Execution', live: true },
      { value: 'pgvector Memory', label: 'Long-Term Semantic Context' },
      { value: 'Human-in-Loop', label: 'Granular Approval Gates' },
    ],
    sandbox: {
      address: 'agent.aayaamx.internal/swarm-runtime',
      liveBadge: 'SWARM ACTIVE',
      footerNote: 'AI Engine Simulation • ReAct reasoning loop, function calling & vector memory',
      tabs: [
        {
          id: 'agent-loop',
          label: 'Autonomous ReAct Loop',
          icon: 'BrainCircuit',
          badge: 'ReAct Engine',
          metricLabel1: 'REASONING CYCLE',
          metricValue1: 'Thought → Action → Obs',
          metricLabel2: 'TOOL SUCCESS',
          metricValue2: '99.4% Valid Outputs',
          metricLabel3: 'TOKEN EFFICIENCY',
          metricValue3: 'Semantic Pruning (-35%)',
          codeTitle: 'autonomous-agent.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// ReAct Execution Loop with Self-Correction' }] },
            {
              parts: [
                { text: 'const action = await ' },
                { text: 'agent.reason', kind: 'func' },
                { text: '({ goal, history, availableTools });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const observation = await ' },
                { text: 'executeTool', kind: 'func' },
                { text: '(action.tool, action.params);' },
                { text: '  // Automated Step', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'if (observation.hasError) await ' },
                { text: 'agent.selfCorrect', kind: 'func' },
                { text: '(observation.error);' },
              ],
            },
          ],
        },
        {
          id: 'tools-api',
          label: 'Tool Calling & APIs',
          icon: 'Terminal',
          badge: 'Function Calling',
          metricLabel1: 'SCHEMA FORMAT',
          metricValue1: 'JSON Schema Validation',
          metricLabel2: 'CONNECTORS',
          metricValue2: 'SQL, REST, CRM, Slack',
          metricLabel3: 'SAFETY GATE',
          metricValue3: 'Configurable Human Signoff',
          codeTitle: 'enterprise-tools.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Safe Database Query Tool with Approval Gate' }] },
            {
              parts: [
                { text: 'export const ' },
                { text: 'databaseTool', kind: 'component' },
                { text: ' = defineTool({' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  name: "queryCustomerRecords",' },
                { text: '  requireApproval: true,' },
                { text: '  // Safety Enforced', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
        {
          id: 'vector-rag',
          label: 'Vector Memory & RAG',
          icon: 'Database',
          badge: 'pgvector / Pinecone',
          metricLabel1: 'SIMILARITY METRIC',
          metricValue1: 'Cosine Distance (0.91)',
          metricLabel2: 'EMBEDDING MODEL',
          metricValue2: 'Text-Embedding-3-Large',
          metricLabel3: 'SEARCH LATENCY',
          metricValue3: '< 25ms Vector Index',
          codeTitle: 'semantic-memory.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Semantic Retrieval of Enterprise Context' }] },
            {
              parts: [
                { text: 'const context = await ' },
                { text: 'vectorStore.similaritySearch', kind: 'func' },
                { text: '(queryEmbedding, 5);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'prompt.injectContext(context.documents);' },
                { text: '  // Grounded Truth', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'LLM Foundations & Swarms',
        icon: 'BrainCircuit',
        items: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'Llama 3.3 (Self-Hosted)', 'LangChain & LangGraph', 'LlamaIndex', 'AutoGPT / CrewAI'],
      },
      column2: {
        title: 'Vector Databases & Memory',
        icon: 'Database',
        items: ['PostgreSQL with pgvector', 'Pinecone Vector DB', 'Qdrant / Milvus', 'Redis Semantic Cache', 'Unstructured.io Parsing', 'Cohere Rerank v3'],
      },
      column3: {
        title: 'Observability & Safety',
        icon: 'Lock',
        items: ['LangSmith Tracing', 'Helicone Telemetry', 'NeMo Guardrails', 'Prompt Injection Defense', 'Docker Container Sandbox', 'Human-in-the-Loop Approval'],
      },
    },
    deliverables: [
      {
        badge: 'Autonomous Swarms',
        title: 'Autonomous Multi-Agent Systems',
        description: 'Specialized agent swarms that divide complex enterprise workflows into planning, research, drafting, execution, and validation phases.',
        specs: ['ReAct Reasoning Loop', 'Self-Correcting Execution', 'Inter-Agent Communication', 'Failure Recovery Policies'],
      },
      {
        badge: 'Enterprise Knowledge',
        title: 'Enterprise RAG & Semantic Memory',
        description: 'High-precision Retrieval-Augmented Generation connecting agents to company manuals, databases, tickets, and internal documentation with zero hallucinations.',
        specs: ['pgvector / Pinecone Storage', 'Hybrid Keyword & Vector Search', 'Strict Source Attributions', 'Automated Re-ranking'],
      },
      {
        badge: 'System Integration',
        title: 'Tool Calling & Business System Integrations',
        description: 'Equip agents with verified tool-calling abilities to query SQL databases, send emails, generate PDF invoices, and update CRMs.',
        specs: ['JSON Schema Enforced Tools', 'Rollback Support on Failure', 'Fine-Grained Permissions', 'Human-in-the-Loop Gates'],
      },
      {
        badge: 'Security & Guardrails',
        title: 'Enterprise Guardrails & Security',
        description: 'Defenses against prompt injection, jailbreaking, data leakage, and toxic outputs to ensure enterprise compliance and Brand safety.',
        specs: ['NeMo Guardrail Integration', 'PII Masking & Redaction', 'OWASP LLM Top 10 Hardened', 'Audit Logging on Every Turn'],
      },
      {
        badge: 'Telemetry & MLOps',
        title: 'Continuous Evaluation & Telemetry',
        description: 'Full observability dashboards tracking token usage, latency budgets, tool call success rates, and real-time response quality.',
        specs: ['LangSmith / Helicone Tracing', 'Cost & Token Tracking', 'Automated Evals & Benchmarks', '30-Day Post-Launch SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Workflow Discovery & Tool Definition',
        focus: 'We dissect your manual business operations, identify repetitive tasks, define agent roles, and specify tool interfaces.',
        bullets: ['Business Process Workflow Mapping', 'Tool & Database Connector Spec', 'Security & Guardrail Requirements', 'Success & Accuracy Metrics'],
      },
      stage2: {
        title: 'Stage 2: Agent Prototyping & Eval Benchmark',
        focus: 'We train and test agents in sandboxed environments with synthetic edge cases, evaluating accuracy against human baselines.',
        bullets: ['LangGraph Workflow Build', 'Evaluation Benchmarking (>95% Goal)', 'Guardrail Stress Testing', 'Staging User Validation'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Telemetry',
        focus: 'We deploy agents with human-in-the-loop controls, live token monitoring, and continuous model improvement.',
        bullets: ['Controlled Canary Rollout', 'Real-Time Tracing Dashboard', 'Staff Training & Playbooks', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you prevent AI agents from hallucinating or taking wrong actions?',
        answer: 'We employ multi-layered safeguards: Grounded RAG with strict source citations, deterministic JSON schema validation for all tool calls, self-correction reasoning loops, and human-in-the-loop approval gates for critical actions (such as initiating financial transactions or altering databases).',
      },
      {
        question: 'Can agents run on our private infrastructure without sending data to OpenAI?',
        answer: 'Yes! We frequently deploy open-source models like Llama 3.3 and DeepSeek on dedicated, private cloud GPUs (AWS/GCP/vLLM) where your data never leaves your VPC and is never used for training.',
      },
      {
        question: 'What kind of business tasks can AI agents automate?',
        answer: 'Agents excel at customer support triage, automated data entry & invoice reconciliation, financial statement analysis, competitive intelligence gathering, automated code reviews, and cross-application workflows across CRMs, Slack, and ERPs.',
      },
      {
        question: 'How do you monitor agent performance and cost?',
        answer: 'We integrate telemetry tools like LangSmith and Helicone, providing real-time dashboards for latency, token expenditure per user, tool call error rates, and qualitative response ratings.',
      },
    ],
  },

  // ==========================================
  // 6. SMART CONTRACTS & BLOCKCHAIN
  // ==========================================
  'smart-contract-development': {
    slug: 'smart-contract-development',
    categoryBadge: 'BLOCKCHAIN & DECENTRALIZED PROTOCOLS',
    categoryHref: '/services/blockchain',
    title: 'Audited Smart Contract Development (Solidity & Rust).',
    tagline: 'Security-audited, gas-optimized smart contracts for EVM (Ethereum, Polygon, Arbitrum, BSC) and Solana (Rust / Anchor) — built with rigorous unit tests and invariant testing.',
    metrics: [
      { value: '100% Pass', label: 'Slither & Mythril Static Analysis', live: true },
      { value: 'Gas-Optimized', label: 'Yul & Assembly Storage Packing', live: true },
      { value: 'Reentrancy Safe', label: 'OpenZeppelin Verified Contracts' },
      { value: 'Multi-Sig Safe', label: 'Timelock Governance Integration' },
    ],
    sandbox: {
      address: 'contracts.aayaamx.internal/evm-simulator',
      liveBadge: 'MAINNET READY',
      footerNote: 'Blockchain Engine Simulation • Gas optimization, reentrancy guards & multi-sig governance',
      tabs: [
        {
          id: 'solidity-core',
          label: 'Solidity Contract',
          icon: 'Blocks',
          badge: 'Solidity 0.8.28',
          metricLabel1: 'GAS PROFILE',
          metricValue1: '41,200 gas (Transfer)',
          metricLabel2: 'STATIC ANALYSIS',
          metricValue2: '0 Critical / 0 High',
          metricLabel3: 'BYTECODE SIZE',
          metricValue3: '14.2 KB (< 24 KB Limit)',
          codeTitle: 'VaultContract.sol',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Gas-Optimized ERC-4626 Vault with Reentrancy Guard' }] },
            {
              parts: [
                { text: 'function ', kind: 'keyword' },
                { text: 'deposit', kind: 'func' },
                { text: '(uint256 assets, address receiver) ' },
                { text: 'external ', kind: 'keyword' },
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
                { text: '  // Gas-Optimized', kind: 'badge' },
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
          id: 'foundry-tests',
          label: 'Foundry Invariant Tests',
          icon: 'CheckCircle2',
          badge: 'Foundry / Forge',
          metricLabel1: 'TEST RUNS',
          metricValue1: '10,000 Fuzz Runs',
          metricLabel2: 'INVARIANTS',
          metricValue2: 'Solvency & Zero-Loss Passed',
          metricLabel3: 'CODE COVERAGE',
          metricValue3: '100% Branch Coverage',
          codeTitle: 'Vault.t.sol',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Invariant Fuzzing: Vault Solvency Check' }] },
            {
              parts: [
                { text: 'function ', kind: 'keyword' },
                { text: 'invariant_totalAssetsMatchesSupply', kind: 'func' },
                { text: '() public view {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  assertGe(vault.totalAssets(), vault.totalSupply());' },
                { text: '  // Always Solvent', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'multisig-timelock',
          label: 'Timelock & Multi-Sig',
          icon: 'Lock',
          badge: 'Safe Multi-Sig',
          metricLabel1: 'GOVERNANCE',
          metricValue1: '3 of 5 Signature Quorum',
          metricLabel2: 'TIMELOCK DELAY',
          metricValue2: '48 Hours Mandatory Delay',
          metricLabel3: 'UPGRADE MODEL',
          metricValue3: 'ERC-1967 UUPS Proxy',
          codeTitle: 'governance.config.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-Sig Execution with Mandatory Timelock' }] },
            {
              parts: [
                { text: 'const tx = await ' },
                { text: 'timelockController.schedule', kind: 'func' },
                { text: '(target, data, 172800);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await safeSdk.executeTransaction(tx);' },
                { text: '  // Timelocked', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Chains & Virtual Machines',
        icon: 'Blocks',
        items: ['Ethereum (EVM)', 'Polygon PoS & zkEVM', 'Arbitrum & Optimism', 'Binance Smart Chain (BSC)', 'Solana (Rust / Anchor)', 'Avalanche C-Chain'],
      },
      column2: {
        title: 'Smart Contract Standards',
        icon: 'Code2',
        items: ['ERC-20 & BEP-20 Tokens', 'ERC-721 & ERC-1155 NFTs', 'ERC-4626 Tokenized Vaults', 'ERC-4337 Account Abstraction', 'ERC-1967 Upgradeable Proxies', 'EIP-712 Typed Signatures'],
      },
      column3: {
        title: 'Testing & Security Tools',
        icon: 'ShieldCheck',
        items: ['Foundry (Forge & Cast)', 'Hardhat Test Framework', 'Slither Static Analyzer', 'Mythril & Echidna Fuzzing', 'Safe Multi-Sig Vaults', 'Chainlink Oracles'],
      },
    },
    deliverables: [
      {
        badge: 'Secure Contracts',
        title: 'Production-Grade Audited Smart Contracts',
        description: 'Clean, secure, and gas-optimized smart contracts written in Solidity or Rust, following industry-standard OpenZeppelin architectures.',
        specs: ['Gas-Optimized Storage', 'Reentrancy Protection', 'Overflow / Underflow Guards', 'Zero Critical Vulnerabilities'],
      },
      {
        badge: 'Rigorous Testing',
        title: 'Foundry & Hardhat Test Suite',
        description: 'Comprehensive automated test suites including unit testing, integration testing, property-based fuzzing, and invariant checks to guarantee code safety.',
        specs: ['10,000+ Fuzz Invariant Runs', '100% Branch Test Coverage', 'Gas Benchmarking Reports', 'Automated CI/CD Validation'],
      },
      {
        badge: 'Audit Readiness',
        title: 'Security Audit Preparation & Documentation',
        description: 'Complete technical whitepaper, natspec documentation, architectural threat models, and coordination with tier-1 smart contract audit firms.',
        specs: ['Complete NatSpec Comments', 'Threat Modeling Whitepaper', 'Audit Remediation Assistance', 'Static Analysis Report'],
      },
      {
        badge: 'Governance & Upgrades',
        title: 'Multi-Sig Governance & Timelock Architecture',
        description: 'Implementation of Safe multi-signature ownership, 48-hour timelock controllers, and UUPS upgradeable proxies ensuring community trust.',
        specs: ['Safe Multi-Sig Integration', 'Custom Timelock Controllers', 'UUPS / Transparent Proxies', 'Emergency Pause Guardians'],
      },
      {
        badge: 'Mainnet Deployment',
        title: 'Mainnet Deployment & Block Explorer Verification',
        description: 'Flawless contract deployment to mainnet and testnets, with bytecode verification on Etherscan, Polygonscan, and Arbiscan.',
        specs: ['Multi-Chain Deployment Scripts', 'Etherscan Code Verification', 'Subgraph Deployment', '30-Day Post-Launch SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Tokenomics & Security Architecture',
        focus: 'We architect token economic models, mathematical formulas, access controls, upgradeability paths, and threat models.',
        bullets: ['Mathematical Model Validation', 'NatSpec Interface Specification', 'Threat Modeling & Attack Vectors', 'Gas Budget Optimization'],
      },
      stage2: {
        title: 'Stage 2: Foundry Test-Driven Development',
        focus: 'We write Foundry unit tests and invariant fuzz tests alongside the contracts, running static analysis on every pull request.',
        bullets: ['Solidity / Rust Development', 'Property-Based Fuzz Testing', 'Slither & Mythril Analysis', 'Testnet Staging Verification'],
      },
      stage3: {
        title: 'Stage 3: Audit Signoff & Mainnet Launch',
        focus: 'We review external audit reports, implement all remediation recommendations, and deploy to mainnet behind a Safe multi-sig.',
        bullets: ['Audit Report Remediation', 'Safe Multi-Sig Deployment', 'Block Explorer Verification', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you guarantee that smart contracts are safe from hacks and exploits?',
        answer: 'We adhere to the highest standard of Web3 security: OpenZeppelin contracts, checks-effects-interactions patterns, reentrancy guards, automated Slither static analysis, and rigorous Foundry invariant fuzz testing with over 10,000 randomized state permutations.',
      },
      {
        question: 'Can smart contracts be upgraded if we need to add features later?',
        answer: 'Yes. We build upgradeable contracts using the ERC-1967 UUPS (Universal Upgradeable Proxy Standard) or Transparent Proxy patterns, protected behind a Safe multi-signature wallet and a mandatory timelock delay to ensure transparency.',
      },
      {
        question: 'Which blockchains and layer-2 networks do you support?',
        answer: 'We support Ethereum, Polygon, Arbitrum, Optimism, Base, Binance Smart Chain (BSC), Avalanche, and Solana (Rust / Anchor). We also build cross-chain bridges and LayerZero messaging integrations.',
      },
      {
        question: 'Do you help with third-party security audits?',
        answer: 'Yes! We deliver clean, NatSpec-documented code, complete test suites, and threat modeling documentation. We also interface directly with audit firms (like CertiK, OpenZeppelin, Hacken) to resolve all findings swiftly.',
      },
    ],
  },
};

// Helper to look up service data with aliases
export function getServiceData(slugOrPath: string): ServiceData {
  const clean = slugOrPath.replace(/^\/+/, '').replace(/^services\//, '').split('/').pop() || '';
  
  const aliasMap: Record<string, string> = {
    'custom-software-development': 'custom-software-development',
    'software-engineering': 'custom-software-development',
    'saas-development': 'custom-software-development',
    'mobile-apps': 'mobile-app-development',
    'mobile-app-development': 'mobile-app-development',
    'mobile-dev-android-and-ios-app-development': 'mobile-app-development',
    'crm-trading': 'forex-crm-development',
    'trading-technology': 'forex-crm-development',
    'forex-crm-development': 'forex-crm-development',
    'broker-backoffice-development': 'forex-crm-development',
    'trading-platform-integration': 'forex-crm-development',
    'fix-api-integration': 'forex-crm-development',
    'liquidity-integration': 'forex-crm-development',
    'apis': 'api-development',
    'api-development': 'api-development',
    'cloud-infrastructure': 'api-development',
    'cloud-engineering': 'api-development',
    'devops-and-ci-cd': 'api-development',
    'system-integration': 'api-development',
    'ai-automation': 'ai-agent-development',
    'ai-auto-ai-automation': 'ai-agent-development',
    'ai-agent-development': 'ai-agent-development',
    'generative-ai-solutions': 'ai-agent-development',
    'machine-learning': 'ai-agent-development',
    'business-process-automation': 'ai-agent-development',
    'blockchain': 'smart-contract-development',
    'smart-contract-development': 'smart-contract-development',
    'web3-development': 'smart-contract-development',
    'digital-wallet-development': 'smart-contract-development',
    'defi-development': 'smart-contract-development',
    'product-engineering': 'custom-software-development',
    'product-strategy': 'custom-software-development',
    'ui-ux-engineering': 'custom-software-development',
    'mvp-development': 'custom-software-development',
    'product-modernization': 'custom-software-development',
  };

  const targetKey = aliasMap[clean] || aliasMap[slugOrPath] || 'custom-software-development';
  return servicesData[targetKey];
}
