import type { CaseStudySlug } from './portfolio';

export type CaseStudyDetail = {
  challenge: string;
  solution: string;
  architectureDetails: readonly [string, string][];
  keyCapabilities: readonly [string, string][];
  technicalStack: readonly string[];
  impactMetrics: readonly [string, string][];
};

export const caseStudyExtendedDetails: Record<CaseStudySlug, CaseStudyDetail> = {
  'succeed-capital-fx': {
    challenge: 'Succeed Capital needed a unified, compliant ecosystem to manage global multi-asset trader onboarding, CRM operations, wallet funding, and trading terminal connectivity without manual friction.',
    solution: 'Engineered a full-scale client portal and broker CRM integrated with MetaTrader 5 and proprietary web terminals, featuring automated KYC, real-time risk controls, and automated PSP payment gateways.',
    architectureDetails: [
      ['Unified Backend API', 'Centralized microservices powering trader portal, broker CRM, and partner portal in real time.'],
      ['Multi-Tier Account Model', 'Instant switching and portfolio aggregation across Real, Demo, and Archived accounts.'],
      ['High-Throughput Risk Engine', 'Automated margin surveillance, equity protection triggers, and volume tiering.'],
      ['Payment Gateway Mesh', 'Multi-currency PSP routing with instant auto-approval limits and automated ledger balancing.']
    ],
    keyCapabilities: [
      ['Automated Onboarding & KYC', 'Seamless client registration, tiered identity verification, and automated compliance auditing.'],
      ['Multi-Currency Wallet Hub', 'Instant deposits, multi-network withdrawals, and internal balance transfers with zero manual overhead.'],
      ['Partner & IB Workspace', 'Multi-tier rebate calculations, referral tracking, and automated commission payouts.'],
      ['Economic Intelligence Calendar', 'Live macro event feeds with projected volatility flags and historic variance charts.']
    ],
    technicalStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'MetaTrader 5 API', 'Docker'],
    impactMetrics: [
      ['Account Setup Time', '< 2 Minutes'],
      ['Processing Uptime', '99.98%'],
      ['Monthly Volume', '$120M+'],
      ['KYC Verification', '85% Automated']
    ]
  },
  'solitaire-markets': {
    challenge: 'Solitaire Markets required institutional-grade FIX 4.4 order routing, ultra-low latency execution engines, and custom web & mobile trading interfaces for high-volume brokerage operations.',
    solution: 'Designed and deployed a dedicated C++ & Node.js FIX 4.4 routing engine connected directly to Tier-1 liquidity providers, paired with ultra-responsive Web & Mobile trading terminals.',
    architectureDetails: [
      ['Dedicated FIX 4.4 Engine', 'Institutional standard financial information exchange protocol for sub-millisecond order handling.'],
      ['Liquidity Bridge & Aggregator', 'Real-time price feed normalization across multiple liquidity providers with intelligent smart order routing.'],
      ['Cross-Platform Trading Suite', 'Low-latency WebSockets streaming live order books, depth of market (DOM), and sub-tick charting.'],
      ['Failover & Redundancy Cluster', 'Active-active hot failover ensuring 100% trade continuity without dropped sessions.']
    ],
    keyCapabilities: [
      ['Sub-Millisecond Order Routing', 'Market, limit, stop, and trailing orders executed with minimal slippage.'],
      ['Real-Time Market Depth (L2 DOM)', 'Live streaming order books and institutional quote ladders.'],
      ['Comprehensive Broker Backoffice', 'Live trader positions, exposure matrix, A/B book routing rules, and P&L monitors.'],
      ['Institutional Compliance Audit', 'Full trade lifecycle logging conforming to global regulatory reporting standards.']
    ],
    technicalStack: ['C++', 'FIX 4.4 Protocol', 'Next.js', 'WebSockets', 'Redis Streams', 'PostgreSQL', 'TimescaleDB'],
    impactMetrics: [
      ['Order Latency', '< 8ms'],
      ['Execution Success', '99.99%'],
      ['Daily Volume Handled', '$45M+'],
      ['Slippage Reduction', '42%']
    ]
  },
  'blockchain-crypto-payment-gateway': {
    challenge: 'Enterprises handling global payments suffered high credit card fees, cross-border settlement delays, and chargeback fraud, requiring an automated multi-chain cryptocurrency gateway.',
    solution: 'Engineered an automated non-custodial crypto payment infrastructure supporting Bitcoin, Ethereum, Solana, and EVM chains with instant confirmation webhooks and automated fiat/stablecoin settlement.',
    architectureDetails: [
      ['Hierarchical Deterministic (HD) Derivation', 'Generates unique, secure on-chain deposit addresses for every invoice without storing private keys online.'],
      ['Block Scanner & Mempool Monitor', 'Real-time RPC cluster monitoring mempools and multi-block confirmations with auto-reorg protection.'],
      ['Automated Sweeping Engine', 'Optimized gas batching algorithms sweeping incoming deposits to cold treasury vaults.'],
      ['Merchant Webhook Dispatcher', 'Idempotent webhook delivery with HMAC verification guaranteeing zero duplicate payment processing.']
    ],
    keyCapabilities: [
      ['Multi-Chain Network Coverage', 'Native support for BTC, ETH, SOL, Tron, BSC, Polygon, and major stablecoins (USDT/USDC).'],
      ['Dynamic Slippage & Gas Protection', 'Real-time exchange rate locking with dynamic fee buffers preventing underpaid transactions.'],
      ['Merchant Management Console', 'Invoice generation, API credential rotation, settlement history, and financial audit logs.'],
      ['Automated Treasury Rebalancing', 'Threshold-based auto-conversion to USDC or fiat bank rails via automated liquidity routes.']
    ],
    technicalStack: ['Golang', 'Node.js', 'Ethers.js', 'Solana Web3.js', 'PostgreSQL', 'Redis', 'Docker'],
    impactMetrics: [
      ['Settlement Speed', 'Instant to < 3 min'],
      ['Chargeback Rate', '0.0%'],
      ['Transaction Savings', '78% vs Cards'],
      ['Volume Handled', '$65M+']
    ]
  },
  'smart-contract-payment-application': {
    challenge: 'Web3 organizations required a transparent, trustless invoicing and automated milestone payout system where funds are escrowed in smart contracts and released upon programmatic approval.',
    solution: 'Built an enterprise Web3 escrow and milestone payment dApp utilizing audited Solidity contracts, EIP-712 gasless permit signatures, and real-time on-chain indexing.',
    architectureDetails: [
      ['Audited Escrow Smart Contracts', 'Non-custodial smart contracts locking funds and distributing payouts based on cryptographic multi-sig signatures.'],
      ['Gasless Meta-Transactions (EIP-2771/712)', 'Bypasses crypto gas friction by allowing users to sign approvals with zero ETH in their wallets.'],
      ['Decentralized Subgraph Indexer', 'Custom The Graph subgraph streaming on-chain payment states into high-speed front-end queries.'],
      ['Arbitration & Dispute Modules', 'Automated timelocks and decentralized multi-signature resolution mechanisms.']
    ],
    keyCapabilities: [
      ['Multi-Wallet Authentication', 'Native support for MetaMask, WalletConnect, Coinbase Wallet, and hardware keys.'],
      ['Milestone-Based Escrow Releases', 'Programmatic tranche releases tied to deliverable milestones with inspector approvals.'],
      ['Automated Invoicing & Receipts', 'On-chain cryptographic receipts with downloadable PDF accounting summaries.'],
      ['Multi-Token Treasury Acceptance', 'Native handling of ERC-20, SPL, and cross-chain wrapped assets with instant verification.']
    ],
    technicalStack: ['Solidity', 'Foundry', 'Hardhat', 'Next.js', 'Wagmi / Viem', 'The Graph', 'IPFS'],
    impactMetrics: [
      ['Escrowed Funds Security', '$18M+ Locked'],
      ['Contract Vulnerabilities', '0 Critical/High'],
      ['Payout Settlement', 'Block Confirmation Time'],
      ['Gas Optimization', '35% Gas Saved']
    ]
  },
  'crypto-exchange-spot-futures-p2p': {
    challenge: 'Fintech startups seeking to enter the crypto market needed an institutional exchange stack offering high-speed Spot matching, 100x leverage Futures, and a secure local fiat P2P marketplace.',
    solution: 'Engineered an end-to-end cryptocurrency trading exchange combining a memory-mapped order matching engine, cross/isolated margin futures, and an escrow-protected P2P fiat trading desk.',
    architectureDetails: [
      ['High-Performance Matching Engine', 'In-memory order book processing up to 100,000 orders/sec with deterministic price-time priority.'],
      ['Cross & Isolated Margin Engine', 'Real-time mark price calculation, dynamic funding rates, and automated liquidation risk engines.'],
      ['P2P Escrow Ledger', 'Automated on-chain asset lockup during fiat dispute resolution with dual-party release authentication.'],
      ['Institutional Cold/Hot Wallet Vaults', 'Multi-signature threshold cryptography (MPC) securing 95%+ of client funds in air-gapped cold storage.']
    ],
    keyCapabilities: [
      ['Triple-Tier Trading Suite', 'Spot exchange, perpetual futures contracts with up to 100x leverage, and localized P2P trading.'],
      ['Interactive TradingView Integration', 'Full-screen pro charts with 100+ technical indicators, drawing tools, and one-click order placement.'],
      ['KYC/AML Compliance Pipeline', 'Automated identity verification, sanctions screening, and suspicious transaction flagging.'],
      ['Real-Time WebSockets & REST APIs', 'Public market data feeds, private account WebSockets, and institutional API key controls.']
    ],
    technicalStack: ['C++', 'Rust', 'Next.js', 'Node.js', 'TimescaleDB', 'Redis Cluster', 'TradingView Pro'],
    impactMetrics: [
      ['Engine Throughput', '100k TPS'],
      ['P2P Trade Completion', '< 8 Minutes'],
      ['Matching Latency', '< 1.5ms'],
      ['Security Track Record', '0 Breaches']
    ]
  },
  'bus-booking-admin-management-system': {
    challenge: 'A national intercity transport operator struggled with fragmented legacy ticketing, manual bus dispatching, lack of driver communication, and zero real-time passenger capacity tracking.',
    solution: 'Delivered an integrated transport operations platform featuring an intuitive customer booking portal, centralized operations dispatch backoffice, and dedicated mobile driver workflows.',
    architectureDetails: [
      ['Multi-Platform Architecture', 'Unified database serving public booking web app, administrative dispatch hub, and driver mobile apps.'],
      ['Dynamic Seat Inventory Engine', 'Real-time seat reservation lock preventing double bookings across simultaneous user checkouts.'],
      ['Route & Stop Sequence Graph', 'Configurable route nodes, variable stop fares, departure schedules, and automated delay notifications.'],
      ['Driver Dispatch & Manifest Sync', 'Live digital boarding lists with QR code ticket scanning and passenger attendance check-ins.']
    ],
    keyCapabilities: [
      ['Interactive Seat Map Selection', 'Visual deck layout selector showing available, reserved, and premium seating.'],
      ['Dynamic Pricing Engine', 'Automated ticket pricing adjustments based on departure proximity, seasonal demand, and seat occupancy.'],
      ['Fleet Maintenance & Crew Scheduling', 'Driver shift rosters, bus inspection logs, fuel efficiency metrics, and vehicle maintenance alerts.'],
      ['Ticket Validation & QR Scanning', 'Sub-second boarding validation using mobile cameras with offline synchronization capability.']
    ],
    technicalStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'PWA'],
    impactMetrics: [
      ['Booking Conversion Rate', '+38%'],
      ['Boarding Time Reduction', '65% Faster'],
      ['Double Booking Incidents', '0%'],
      ['Active Routes Managed', '140+ Daily']
    ]
  },
  'white-label-lms-platform': {
    challenge: 'Educational institutions and corporate training providers lacked a modern white-label system to host branded academies, manage complex curricula, and administer assessments efficiently.',
    solution: 'Engineered a multi-tenant SaaS learning management platform enabling training organizations to deploy custom-branded academies with admissions workflows, video courses, interactive quizzes, and certification.',
    architectureDetails: [
      ['Multi-Tenant Isolation', 'Secure database partitioning and custom domain mapping (CNAME) for each customer academy.'],
      ['Adaptive Video Streaming Pipeline', 'HLS video encoding with CDN caching providing smooth playback across low-bandwidth mobile devices.'],
      ['Dynamic Quiz & Assessment Engine', 'Multiple choice, coding exercises, essay submissions, and automated grading matrices.'],
      ['Verifiable Digital Credentials', 'Cryptographically verifiable completion certificates with QR code verification endpoints.']
    ],
    keyCapabilities: [
      ['Custom Domain & Branding Suite', 'Individual themes, custom logos, subdomains, and bespoke typography per academy.'],
      ['Admissions & Student Pipeline', 'Full applicant funnel tracking from registration, tuition fee payment, to course enrollment.'],
      ['Live Instructor & Grading Dashboard', 'Student progress analytics, assignment submissions review, and cohort engagement metrics.'],
      ['Mobile-First Learning Portal', 'Optimized for seamless offline mobile learning and bite-sized quiz completion on any smartphone.']
    ],
    technicalStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS S3 / CloudFront', 'FFmpeg', 'Redis'],
    impactMetrics: [
      ['Student Engagement', '+52% Completion'],
      ['Platform Onboarding', '< 15 Minutes'],
      ['Video Delivery Latency', '< 1.2s Start'],
      ['Active Students', '28,000+']
    ]
  },
  'resvip-travel-booking': {
    challenge: 'ResVIP, a luxury coach operator in Sweden, needed a high-end Scandinavian booking experience that matched their premium service, fleet presentation, and route transparency.',
    solution: 'Designed and built an ultra-clean, multilingual Scandinavian travel booking platform with route exploration, coach fleet galleries, and dedicated driver operations portals.',
    architectureDetails: [
      ['Route-Based Geographic Search', 'Origin-destination autocomplete with schedule timeline filtering and multi-leg journey support.'],
      ['Interactive Luxury Fleet Showcase', 'High-resolution interior 360-degree views, amenities breakdown (WiFi, power, leather seating), and vehicle specs.'],
      ['Digital Boarding Pass System', 'Apple Wallet and Google Pay ticket passes with live trip push notifications and cancellation shields.'],
      ['Driver Trip Workspace', 'Real-time manifest synchronization, delay reporting, and emergency passenger messaging.']
    ],
    keyCapabilities: [
      ['Frictionless 3-Step Checkout', 'Fast seat selection, meal preferences, baggage add-ons, and local payment (Klarna, Swish, Cards).'],
      ['Dynamic Timetable & Route Planner', 'Real-time arrival forecasts taking into account traffic bottlenecks and weather conditions.'],
      ['Passenger Self-Service Portal', 'One-click ticket rescheduling, refunds, and invoice downloads.'],
      ['Fleet Telematics Integration', 'Live GPS coach tracking embedded into passenger status screens.']
    ],
    technicalStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Klarna SDK', 'Google Maps API'],
    impactMetrics: [
      ['Mobile Booking Share', '74%'],
      ['Customer Satisfaction', '4.9 / 5.0'],
      ['Checkout Drop-off Reduction', '28%'],
      ['Ticket Processing Time', '< 45 Seconds']
    ]
  },
  'fxregulation': {
    challenge: 'Emerging forex brokerages needed a turnkey, compliant platform combining institutional .NET trading server backends with modern MERN client portals and real-time regulatory compliance engines.',
    solution: 'Delivered an integrated Forex Brokerage Platform leveraging .NET microservices for ultra-reliable trade operations and a modern React portal for client onboarding and affiliate management.',
    architectureDetails: [
      ['Hybrid .NET + MERN Architecture', '.NET Core for mission-critical order handling and margin calculation; MERN stack for high-agility client UIs.'],
      ['Regulatory Audit Engine', 'Automated reporting generator complying with CySEC, FCA, and offshore regulatory disclosure standards.'],
      ['Multi-Tier Affiliate & IB Engine', 'Sub-IB trees with customizable lot rebates, spread markups, and instant wallet credit.'],
      ['CRM & Lead Management Pipeline', 'Broker sales pipeline, document compliance reviews, ticket support, and lead tracking.']
    ],
    keyCapabilities: [
      ['Turnkey Broker Deployment', 'Brand-ready white label ready for launch in under 2 weeks with full operational controls.'],
      ['Live Financial Accounting Ledger', 'Real-time net deposits, P&L reporting, margin call alerts, and liquidity provider reconciliation.'],
      ['Automated AML & Fraud Detection', 'Pattern detection for latency arbitrage, account sharing, and suspicious deposit behavior.'],
      ['Trader Web Terminal', 'Custom responsive charting terminal with one-click trading, pending orders, and stop-loss management.']
    ],
    technicalStack: ['.NET Core', 'C#', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'SignalR', 'Redis'],
    impactMetrics: [
      ['Launch Turnaround', '14 Days'],
      ['Regulatory Compliance', '100% Audit Ready'],
      ['Concurrent Traders Handled', '15,000+'],
      ['Operations Cost Reduction', '46%']
    ]
  }
};
