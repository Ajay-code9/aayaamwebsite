'use client';

import { useState } from 'react';
import Link from 'next/link';
import ArchitectureHero, { ArchitectureSteps, ArchitectureTechnicalDetails } from './ArchitectureHero';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Globe,
  Layers,
  Lock,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import ProjectEnquiry from '@/components/ProjectEnquiry';

const frontendStack = ['React', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'];
const backendStack = ['Node.js', 'Python (FastAPI / Django)', 'Go', '.NET Core', 'Laravel', 'REST & GraphQL'];
const databaseStack = ['PostgreSQL (ACID)', 'Redis (In-Memory)', 'MongoDB', 'Supabase', 'Docker', 'AWS / Cloudflare'];

const deliverables = [
  {
    icon: Code2,
    badge: 'Frontend Architecture',
    title: 'Responsive Frontend Architecture',
    description:
      'High-performance React / Next.js component system engineered for custom web applications with 60fps responsiveness, fluid multi-screen breakpoints, and strict TypeScript types.',
    specs: ['60fps Interaction Budget', 'Strict TypeScript Safety', 'Reusable Design System', 'Sub-second Navigation'],
  },
  {
    icon: Server,
    badge: 'Backend & Data',
    title: 'Scalable Backend API & Database',
    description:
      'Modular Node.js, Python, or Go REST & GraphQL backend with ACID-compliant PostgreSQL data persistence, connection pooling, and sub-2ms Redis caching layers.',
    specs: ['PostgreSQL with ACID Guarantees', 'Redis In-Memory Caching', 'REST & GraphQL Endpoints', 'Connection Pooling'],
  },
  {
    icon: Search,
    badge: 'SEO & Performance',
    title: 'SEO & Core Web Vitals Optimization',
    description:
      '95+ target scores across Google Lighthouse, automatic OpenGraph meta tags, semantic HTML5 structure, and edge-rendered SSR/SSG for maximum organic search indexing.',
    specs: ['95+ Target Lighthouse Scores', 'Automatic OpenGraph Tags', 'Edge SSR & SSG Rendering', 'Schema.org JSON-LD'],
  },
  {
    icon: ShieldCheck,
    badge: 'Security & Access',
    title: 'Enterprise Security & Access Control',
    description:
      'Role-based access control (RBAC), OAuth2 / JWT session management, OWASP Top 10 security hardening, sanitized input validation, and encrypted audit trails.',
    specs: ['Role-Based Access Control (RBAC)', 'OAuth2 & JWT Auth', 'OWASP Hardening & Sanitzation', 'Audit Trails & Logging'],
  },
  {
    icon: FileCode2,
    badge: 'Handover & SLA',
    title: 'Complete Handover & SLA Support',
    description:
      'OpenAPI / Swagger interactive documentation, automated CI/CD deployment scripts, Docker containerization, and post-launch maintenance SLA.',
    specs: ['OpenAPI / Swagger API Docs', 'Automated CI/CD Workflows', 'Full Source Code Ownership', 'Post-Launch Maintenance SLA'],
  },
];

const methodologySteps = [
  {
    stage: 'Stage 01',
    name: 'Align',
    tagline: 'Discovery, Architecture & Scope Definition',
    description:
      'We clarify business outcomes, technical constraints, data schemas, and success metrics before development begins. You receive a clear architectural roadmap with milestone timelines.',
    deliverable: 'Architecture Spec & Sprint Roadmap',
    sla: 'Guaranteed SLA',
    details: ['Technical requirements scoping', 'Database schema & API modeling', 'Milestone & sprint scheduling'],
  },
  {
    stage: 'Stage 02',
    name: 'Build',
    tagline: 'Iterative Engineering & Continuous Demos',
    description:
      'We ship in bi-weekly sprint iterations with live staging previews, automated code reviews, and continuous client feedback loops. You see working software at every stage.',
    deliverable: 'Live Staging Demos & Code Reviews',
    sla: 'Guaranteed SLA',
    details: ['Bi-weekly sprint demo releases', 'Live staging preview environments', 'Strict PR reviews & test suites'],
  },
  {
    stage: 'Stage 03',
    name: 'Launch',
    tagline: 'Zero-Downtime Rollout & Ongoing Support',
    description:
      'We deploy to production with zero-downtime cutover, configure real-time telemetry monitoring, train your internal team, and stay on-call with dedicated post-launch SLA support.',
    deliverable: 'Production Deployment & SLA Support',
    sla: 'Guaranteed SLA',
    details: ['Zero-downtime cutover execution', 'Telemetry & error monitoring', 'Dedicated SLA warranty & updates'],
  },
];

const handoverChecklist = [
  '100% Uncompiled Source Code & Full Intellectual Property Transfer',
  'Automated GitHub Actions CI/CD Deployment Scripts',
  'Interactive OpenAPI / Swagger Documentation & Postman Collection',
  'Docker & Container Orchestration Configuration Files',
  'Database Migration Scripts & Automated Rollback Procedures',
  'Production Telemetry, Health Check Endpoints & Logging Setup',
  'Engineering Architecture Diagram & Developer Onboarding Guide',
  'Post-Launch Maintenance SLA & Priority Support Window',
];

function ArchitectureSandbox() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'security'>('frontend');

  return (
    <div className="sandbox-window" role="region" aria-label="Interactive architecture sandbox">
      {/* Titlebar */}
      <div className="sandbox-titlebar">
        <div className="sandbox-traffic-lights" aria-hidden="true">
          <span className="traffic-light close" />
          <span className="traffic-light minimize" />
          <span className="traffic-light expand" />
        </div>
        <div className="sandbox-address-bar">
          <Lock size={11} className="sandbox-lock-icon" />
          <span>app.aayaamx.internal/architecture</span>
        </div>
        <div className="sandbox-live-badge">
          <span className="live-dot" />
          <span>60 FPS</span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="sandbox-nav-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'frontend'}
          className={`sandbox-tab-btn ${activeTab === 'frontend' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          <Code2 size={13} />
          <span>Next.js Frontend</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'backend'}
          className={`sandbox-tab-btn ${activeTab === 'backend' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          <Server size={13} />
          <span>API & PostgreSQL</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'security'}
          className={`sandbox-tab-btn ${activeTab === 'security' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          <ShieldCheck size={13} />
          <span>RBAC & Security</span>
        </button>
      </div>

      {/* Tab Panels with Smooth Motion */}
      <div className="sandbox-body">
        <AnimatePresence mode="wait">
          {activeTab === 'frontend' && (
            <motion.div
              key="frontend"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="sandbox-tab-content"
            >
              <div className="sandbox-metric-row">
                <div className="sandbox-metric-pill">
                  <small>Rendering</small>
                  <strong>SSR + Streaming RSC</strong>
                </div>
                <div className="sandbox-metric-pill">
                  <small>Lighthouse Target</small>
                  <strong className="text-emerald">99 / 100</strong>
                </div>
                <div className="sandbox-metric-pill">
                  <small>Hydration Budget</small>
                  <strong className="text-emerald">&lt; 14ms</strong>
                </div>
              </div>

              <div className="sandbox-terminal-tree">
                <div className="tree-line">
                  <span className="tree-keyword">export default</span> function AppLayout() &#123;
                </div>
                <div className="tree-line indent-1">
                  &lt;<span className="tree-component">ServerProvider</span> stream=&#123;true&#125;&gt;
                </div>
                <div className="tree-line indent-2">
                  &lt;<span className="tree-component">ResponsiveGrid</span> cols=&#123;12&#125; gap=&#123;16&#125;&gt;
                </div>
                <div className="tree-line indent-3 highlight-line">
                  &lt;<span className="tree-component">LiveMetricsFeed</span> latency=&quot;18ms&quot; /&gt;
                  <span className="tree-badge">Streaming</span>
                </div>
                <div className="tree-line indent-2">
                  &lt;/<span className="tree-component">ResponsiveGrid</span>&gt;
                </div>
                <div className="tree-line indent-1">
                  &lt;/<span className="tree-component">ServerProvider</span>&gt;
                </div>
                <div className="tree-line">&#125;</div>
              </div>
            </motion.div>
          )}

          {activeTab === 'backend' && (
            <motion.div
              key="backend"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="sandbox-tab-content"
            >
              <div className="sandbox-metric-row">
                <div className="sandbox-metric-pill">
                  <small>Database</small>
                  <strong>PostgreSQL 16 (ACID)</strong>
                </div>
                <div className="sandbox-metric-pill">
                  <small>Redis Cache</small>
                  <strong className="text-emerald">HIT (0.7ms)</strong>
                </div>
                <div className="sandbox-metric-pill">
                  <small>API Protocol</small>
                  <strong>REST / GraphQL</strong>
                </div>
              </div>

              <div className="sandbox-terminal-tree">
                <div className="tree-line comment">// Microservice Pipeline · High Concurrency</div>
                <div className="tree-line">
                  <span className="tree-keyword">POST</span> /api/v2/workspace/query
                </div>
                <div className="tree-line indent-1">
                  → <span className="tree-func">Redis.cacheLookup</span>(key) → <span className="text-emerald">CACHE_HIT (0.7ms)</span>
                </div>
                <div className="tree-line indent-1">
                  → <span className="tree-func">PgPool.withTransaction</span>(isolation: READ_COMMITTED)
                </div>
                <div className="tree-line indent-2 highlight-line">
                  ✓ Query executed in 1.4ms · 12 pooled connections idle
                </div>
                <div className="tree-line">
                  Status: <span className="text-emerald">200 OK</span> · Response payload: 1.2 KB
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="sandbox-tab-content"
            >
              <div className="sandbox-metric-row">
                <div className="sandbox-metric-pill">
                  <small>Authentication</small>
                  <strong>OAuth2 / JWT Bearer</strong>
                </div>
                <div className="sandbox-metric-pill">
                  <small>Hardening</small>
                  <strong className="text-emerald">OWASP Top 10</strong>
                </div>
                <div className="sandbox-metric-pill">
                  <small>Rate Limit</small>
                  <strong>200 req/min</strong>
                </div>
              </div>

              <div className="sandbox-terminal-tree">
                <div className="tree-line comment">// Enterprise RBAC & Security Middleware</div>
                <div className="tree-line">
                  <span className="tree-func">verifySessionToken</span>(jwtHeader) → <span className="text-emerald">VALID_SIGNATURE</span>
                </div>
                <div className="tree-line indent-1">
                  Role: <span className="tree-badge">Enterprise Admin</span> · Permissions: [read, write, audit]
                </div>
                <div className="tree-line indent-1">
                  CSP Nonce: <span className="text-muted">sha256-w9k...e81a</span> (HSTS Active)
                </div>
                <div className="tree-line indent-2 highlight-line">
                  ✓ Input sanitized · SQL injection & XSS filters passed
                </div>
                <div className="tree-line">
                  Audit Trail: <span className="text-emerald">Logged to Immutable Event Stream</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sandbox Footer */}
      <div className="sandbox-footer">
        <span className="sandbox-footer-dot" />
        <span>Live Architecture Simulation · Switch tabs to inspect runtime</span>
      </div>
    </div>
  );
}

export default function WebDevelopmentPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  return (
    <>
      <Navbar />

      <main className="service-page">
        <ArchitectureHero trail={[[ 'Services', '/services' ], [ 'Software Engineering', '/services/software-engineering' ]]} label={"Web & Mobile Development"} title={"Web & Mobile Platform Development."} intro={"We design and build customer-facing websites, web applications and mobile experiences, with the backend integrations needed to support them."}
          jump={['See Deliverables', '#what-we-deliver']}
          preview={<ArchitectureSteps title="Delivery Workflow" steps={['Plan the user journey', 'Build the interface and backend', 'Test and prepare for launch']}/>}
        />
        <ArchitectureTechnicalDetails>
          <div className="service-metrics-grid">
                <div className="service-metric-card">
                  <div className="metric-header">
                    <span className="metric-dot" />
                    <strong>95+ Target</strong>
                  </div>
                  <span>Google Lighthouse Score</span>
                </div>
                <div className="service-metric-card">
                  <div className="metric-header">
                    <span className="metric-dot" />
                    <strong>&lt; 100ms</strong>
                  </div>
                  <span>Server Response Budget (TTFB)</span>
                </div>
                <div className="service-metric-card">
                  <div className="metric-header">
                    <span className="metric-dot" />
                    <strong>60 fps</strong>
                  </div>
                  <span>Fluid Interaction Budget</span>
                </div>
                <div className="service-metric-card">
                  <div className="metric-header">
                    <span className="metric-dot" />
                    <strong>OWASP</strong>
                  </div>
                  <span>Enterprise Security Hardening</span>
                </div>
              </div>
          <ArchitectureSandbox />
        </ArchitectureTechnicalDetails>

        {/* TECHNOLOGY STACKS */}
        <section className="service-section service-stacks-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> TECHNOLOGY MATRIX</p>
            <h2>Full-Spectrum Stacks We Build With.</h2>
            <p>
              We select battle-tested, modern technologies tailored to your application&apos;s concurrency, security, and scalability needs.
            </p>
          </div>

          <div className="service-stacks-grid">
            <div className="service-stack-card">
              <div className="service-stack-icon"><Globe size={20} /></div>
              <h3>Frontend Core</h3>
              <p>Responsive, accessible user interfaces built for instant load times and fluid multi-device interaction.</p>
              <div className="service-stack-tags">
                {frontendStack.map(item => (
                  <span key={item} className="stack-pill">{item}</span>
                ))}
              </div>
            </div>

            <div className="service-stack-card">
              <div className="service-stack-icon"><Server size={20} /></div>
              <h3>Backend & Microservices</h3>
              <p>Type-safe REST and GraphQL APIs with asynchronous job processing, strict validation, and high concurrency.</p>
              <div className="service-stack-tags">
                {backendStack.map(item => (
                  <span key={item} className="stack-pill">{item}</span>
                ))}
              </div>
            </div>

            <div className="service-stack-card">
              <div className="service-stack-icon"><Database size={20} /></div>
              <h3>Data & Cloud Infrastructure</h3>
              <p>ACID-compliant relational databases, low-latency in-memory cache, and automated deployment pipelines.</p>
              <div className="service-stack-tags">
                {databaseStack.map(item => (
                  <span key={item} className="stack-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER (STANDARD ENGINEERING PACKAGE) */}
        <section id="what-we-deliver" className="service-section service-deliverables-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> STANDARD ENGINEERING PACKAGE</p>
            <h2>What We Deliver.</h2>
            <p>
              Every project engineered by AayaamX includes production-ready deliverables built for high performance and long-term scalability.
            </p>
          </div>

          <div className="deliverables-grid">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="deliverable-card">
                  <div className="deliverable-card-header">
                    <span className="deliverable-icon"><Icon size={20} /></span>
                    <span className="deliverable-badge">{item.badge}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="deliverable-specs">
                    {item.specs.map(spec => (
                      <li key={spec}>
                        <Check size={14} aria-hidden="true" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* HOW WE WORK (EXECUTION METHODOLOGY) */}
        <section className="service-section service-methodology-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> EXECUTION METHODOLOGY</p>
            <h2>How We Work.</h2>
            <p>
              Our 3-stage agile delivery workflow ensures clear communication, visible sprint progress, and zero-downtime deployment.
            </p>
          </div>

          <div className="methodology-grid">
            {methodologySteps.map((step, index) => (
              <div
                key={step.stage}
                className={`methodology-card ${activeStage === index ? 'is-active' : ''}`}
                onClick={() => setActiveStage(index)}
              >
                <div className="methodology-card-top">
                  <span className="methodology-stage">{step.stage}</span>
                  <span className="methodology-sla">{step.sla}</span>
                </div>
                <h3>{step.name}</h3>
                <h4 className="methodology-tagline">{step.tagline}</h4>
                <p>{step.description}</p>
                <div className="methodology-deliverable">
                  <small>Target Deliverable:</small>
                  <strong>{step.deliverable}</strong>
                </div>
                <ul className="methodology-bullets">
                  {step.details.map(detail => (
                    <li key={detail}>
                      <CheckCircle2 size={14} aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* COMPLETE HANDOVER CHECKLIST */}
        <section className="service-section service-handover-section">
          <div className="handover-container">
            <div className="handover-intro">
              <p className="eyebrow"><span /> PRODUCTION ASSETS TRANSFER</p>
              <h2>Everything You Own At Handover.</h2>
              <p>
                No proprietary lock-in. When we complete your web platform, you receive complete source code, deployment automation, and clear documentation.
              </p>
              <button
                type="button"
                className="primary-button"
                onClick={() => setContactOpen(true)}
              >
                Discuss Custom Scope <ArrowRight size={16} />
              </button>
            </div>

            <div className="handover-checklist">
              {handoverChecklist.map((item) => (
                <div key={item} className="handover-item">
                  <span className="handover-check"><Check size={14} /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="service-final-cta">
          <div className="service-final-cta-inner">
            <p className="eyebrow"><span /> START YOUR PROJECT</p>
            <h2>Ready to build your web platform?</h2>
            <p>
              Talk directly with our engineering team to review requirements, feasibility, architecture, and sprint timelines.
            </p>
            <div className="service-final-cta-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() => setContactOpen(true)}
              >
                Discuss Custom Scope <ArrowRight size={16} />
              </button>
              <Link href="/portfolio" className="secondary-button">
                Explore Case Studies <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <ProjectEnquiry open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
