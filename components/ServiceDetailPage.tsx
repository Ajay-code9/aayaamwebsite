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
  ChevronDown,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Globe,
  HelpCircle,
  Layers,
  Lock,
  Radio,
  Rocket,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import ProjectEnquiry from '@/components/ProjectEnquiry';
import { ServiceData } from '@/lib/services-data';

const iconMap: Record<string, any> = {
  Code2,
  Cpu,
  Database,
  FileCode2,
  Globe,
  Layers,
  Lock,
  Radio,
  Rocket,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  TrendingUp,
  Wallet,
  Zap,
  CheckCircle2,
};

function DynamicIcon({ name, size = 20, className = '' }: { name: string; size?: number; className?: string }) {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent size={size} className={className} />;
}

export default function ServiceDetailPage({ data }: { data: ServiceData }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState(data.sandbox.tabs[0]?.id || '');
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeTab = data.sandbox.tabs.find((t) => t.id === activeTabId) || data.sandbox.tabs[0];

  return (
    <>
      <Navbar />

      <main className="service-page">
        <ArchitectureHero trail={data.categoryHref === '/services' ? [['Services', '/services']] : [['Services', '/services'], [data.categoryBadge, data.categoryHref]]}
          label={data.title} title={data.title} intro={data.tagline}
          jump={['See Deliverables', '#deliverables']}
          preview={<ArchitectureSteps title="Delivery Workflow" steps={Object.values(data.methodology).map(stage => stage.title)}/>}
        />
        <ArchitectureTechnicalDetails>
          <div className="service-metrics-grid">
                {data.metrics.map((m, idx) => (
                  <div className="service-metric-card" key={idx}>
                    <div className="metric-header">
                      {m.live && <span className="metric-dot" />}
                      <strong>{m.value}</strong>
                    </div>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
          <div className="sandbox-window">
                {/* Title Bar */}
                <div className="sandbox-titlebar">
                  <div className="traffic-lights">
                    <span className="traffic-light red" />
                    <span className="traffic-light yellow" />
                    <span className="traffic-light green" />
                  </div>
                  <div className="sandbox-address-bar">
                    <Lock size={12} className="sandbox-lock-icon" />
                    <span>{data.sandbox.address}</span>
                  </div>
                  <div className="sandbox-live-badge">
                    <span className="live-dot" />
                    <span>{data.sandbox.liveBadge}</span>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="sandbox-nav-tabs">
                  {data.sandbox.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`sandbox-tab-btn ${activeTabId === tab.id ? 'is-active' : ''}`}
                      onClick={() => setActiveTabId(tab.id)}
                    >
                      <DynamicIcon name={tab.icon} size={13} />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Body with Animated Content */}
                <div className="sandbox-body">
                  <AnimatePresence mode="wait" initial={false}>
                    {activeTab && (
                      <motion.div
                        key={activeTab.id}
                        className="sandbox-tab-content"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                      >
                        {/* Metric Row */}
                        <div className="sandbox-metric-row">
                          <div className="sandbox-metric-pill">
                            <small>{activeTab.metricLabel1}</small>
                            <strong>{activeTab.metricValue1}</strong>
                          </div>
                          <div className="sandbox-metric-pill">
                            <small>{activeTab.metricLabel2}</small>
                            <strong className="text-emerald">{activeTab.metricValue2}</strong>
                          </div>
                          <div className="sandbox-metric-pill">
                            <small>{activeTab.metricLabel3}</small>
                            <strong>{activeTab.metricValue3}</strong>
                          </div>
                        </div>

                        {/* Code / Architecture Preview Box */}
                        <div className="sandbox-terminal-tree">
                          {activeTab.codeLines.map((line, lIdx) => (
                            <div
                              key={lIdx}
                              className={`tree-line ${line.type === 'comment' ? 'comment' : ''} ${
                                line.type === 'highlight' ? 'highlight-line' : ''
                              }`}
                            >
                              {line.parts.map((p, pIdx) => {
                                if (p.kind === 'badge') {
                                  return (
                                    <span key={pIdx} className="tree-badge">
                                      {p.text}
                                    </span>
                                  );
                                }
                                return (
                                  <span
                                    key={pIdx}
                                    className={
                                      p.kind === 'keyword'
                                        ? 'tree-keyword'
                                        : p.kind === 'func'
                                        ? 'tree-func'
                                        : p.kind === 'component'
                                        ? 'tree-component'
                                        : p.kind === 'string'
                                        ? 'tree-string'
                                        : p.kind === 'prop'
                                        ? 'tree-prop'
                                        : ''
                                    }
                                  >
                                    {p.text}
                                  </span>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Sandbox Footer */}
                <div className="sandbox-footer">
                  <span className="live-dot" />
                  <span>{data.sandbox.footerNote}</span>
                </div>
              </div>
        </ArchitectureTechnicalDetails>

        {/* ========================================================
            TECH MATRIX: 3-COLUMN MODERN STACK
            ======================================================== */}
        <section className="service-section service-stacks-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> TECHNOLOGY MATRIX</p>
            <h2>Full-Spectrum Stacks We Build With.</h2>
            <p>
              We select battle-tested, modern technologies tailored to your application's concurrency,
              security, and scalability needs.
            </p>
          </div>

          <div className="service-stacks-grid">
            <div className="service-stack-card">
              <div className="service-stack-icon">
                <DynamicIcon name={data.techMatrix.column1.icon} size={20} />
              </div>
              <h3>{data.techMatrix.column1.title}</h3>
              <p>Enterprise runtime libraries and core framework primitives.</p>
              <div className="service-stack-tags">
                {data.techMatrix.column1.items.map((tech) => (
                  <span key={tech} className="stack-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="service-stack-card">
              <div className="service-stack-icon">
                <DynamicIcon name={data.techMatrix.column2.icon} size={20} />
              </div>
              <h3>{data.techMatrix.column2.title}</h3>
              <p>Data persistence, in-memory caching and distributed message queues.</p>
              <div className="service-stack-tags">
                {data.techMatrix.column2.items.map((tech) => (
                  <span key={tech} className="stack-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="service-stack-card">
              <div className="service-stack-icon">
                <DynamicIcon name={data.techMatrix.column3.icon} size={20} />
              </div>
              <h3>{data.techMatrix.column3.title}</h3>
              <p>Containerized deployment, cloud infrastructure, and security controls.</p>
              <div className="service-stack-tags">
                {data.techMatrix.column3.items.map((tech) => (
                  <span key={tech} className="stack-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            DELIVERABLES SECTION: 5 CARDS WITH SPEC CHECKLISTS
            ======================================================== */}
        <section id="deliverables" className="service-section service-deliverables-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> STANDARD ENGINEERING PACKAGE</p>
            <h2>What We Deliver.</h2>
            <p>
              Every project engineered by AayaamX includes production-ready deliverables built for high
              performance and long-term scalability.
            </p>
          </div>

          <div className="deliverables-grid">
            {data.deliverables.map((item, idx) => (
              <div className="deliverable-card" key={idx}>
                <div className="deliverable-top">
                  <span className="deliverable-icon-wrap">
                    <CheckCircle2 size={20} />
                  </span>
                  <span className="deliverable-badge">{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="deliverable-specs">
                  {item.specs.map((spec) => (
                    <li key={spec}>
                      <Check size={14} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            EXECUTION METHODOLOGY: 3-STAGE INTERACTIVE WORKFLOW
            ======================================================== */}
        <section className="service-section service-methodology-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> EXECUTION METHODOLOGY</p>
            <h2>How We Work.</h2>
            <p>
              Our 3-stage agile delivery workflow ensures clear communication, visible sprint progress, and
              zero-downtime deployment.
            </p>
          </div>

          <div className="methodology-cards-grid">
            {/* Stage 1 */}
            <div
              className={`methodology-card ${activeStage === 1 ? 'is-active' : ''}`}
              onClick={() => setActiveStage(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className="methodology-top-row">
                <span className="methodology-stage">STAGE 01</span>
                <span className="methodology-sla">Guaranteed SLA</span>
              </div>
              <h3>Align</h3>
              <p className="methodology-tagline">We clarify outcomes, constraints, and success metrics.</p>
              <div className="methodology-deliverable">
                <small>STAGE DELIVERABLE</small>
                <strong>Architecture Blueprint & Sprint Scope</strong>
              </div>
              <ul className="methodology-bullets">
                {data.methodology.stage1.bullets.map((b, i) => (
                  <li key={i}>
                    <Check size={14} /> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stage 2 */}
            <div
              className={`methodology-card ${activeStage === 2 ? 'is-active' : ''}`}
              onClick={() => setActiveStage(2)}
              style={{ cursor: 'pointer' }}
            >
              <div className="methodology-top-row">
                <span className="methodology-stage">STAGE 02</span>
                <span className="methodology-sla">Guaranteed SLA</span>
              </div>
              <h3>Build</h3>
              <p className="methodology-tagline">We ship in iterations with demos and feedback loops.</p>
              <div className="methodology-deliverable">
                <small>STAGE DELIVERABLE</small>
                <strong>Production Increments with CI/CD Tests</strong>
              </div>
              <ul className="methodology-bullets">
                {data.methodology.stage2.bullets.map((b, i) => (
                  <li key={i}>
                    <Check size={14} /> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stage 3 */}
            <div
              className={`methodology-card ${activeStage === 3 ? 'is-active' : ''}`}
              onClick={() => setActiveStage(3)}
              style={{ cursor: 'pointer' }}
            >
              <div className="methodology-top-row">
                <span className="methodology-stage">STAGE 03</span>
                <span className="methodology-sla">Guaranteed SLA</span>
              </div>
              <h3>Launch</h3>
              <p className="methodology-tagline">We deploy, train, and stay available for what comes next.</p>
              <div className="methodology-deliverable">
                <small>STAGE DELIVERABLE</small>
                <strong>Zero-Downtime Release & SLA Handover</strong>
              </div>
              <ul className="methodology-bullets">
                {data.methodology.stage3.bullets.map((b, i) => (
                  <li key={i}>
                    <Check size={14} /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================
            PRODUCTION READINESS: HANDOVER CHECKLIST
            ======================================================== */}
        <section className="service-section service-handover-section">
          <div className="handover-inner">
            <div className="handover-intro">
              <p className="eyebrow"><span /> PRODUCTION READINESS</p>
              <h2>Complete Handover & SLA Support.</h2>
              <p>
                We do not believe in vendor lock-in. Every build includes clean documentation, automated
                pipelines, and full intellectual property ownership.
              </p>
            </div>
            <div className="handover-checklist">
              <div className="handover-item">
                <span className="handover-check">
                  <Check size={16} />
                </span>
                <span>Full Source Code Ownership & Git History</span>
              </div>
              <div className="handover-item">
                <span className="handover-check">
                  <Check size={16} />
                </span>
                <span>OpenAPI / Swagger API Documentation</span>
              </div>
              <div className="handover-item">
                <span className="handover-check">
                  <Check size={16} />
                </span>
                <span>Automated Docker & CI/CD Deployment Scripts</span>
              </div>
              <div className="handover-item">
                <span className="handover-check">
                  <Check size={16} />
                </span>
                <span>Unit & Integration Test Suite Coverage</span>
              </div>
              <div className="handover-item">
                <span className="handover-check">
                  <Check size={16} />
                </span>
                <span>Cloud Infrastructure Runbooks & Architecture Diagrams</span>
              </div>
              <div className="handover-item">
                <span className="handover-check">
                  <Check size={16} />
                </span>
                <span>Post-Launch Maintenance SLA & Bug-Fix Warranty</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BUYER FAQS ACCORDION
            ======================================================== */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="service-section service-faq-section">
            <div className="service-section-header">
              <p className="eyebrow"><span /> BUYER FAQS</p>
              <h2>Frequently Asked Questions.</h2>
              <p>Answers to common questions about timelines, technology stacks, scaling, and intellectual property.</p>
            </div>

            <div className="faq-accordion-list">
              {data.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div key={fIdx} className={`faq-card ${isOpen ? 'is-expanded' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-text">{faq.question}</span>
                      <span className={`faq-toggle-icon ${isOpen ? 'is-open' : ''}`}>
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="faq-answer-text">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================================
            BOTTOM CONVERSION CTA BANNER
            ======================================================== */}
        <section className="service-final-cta">
          <div className="service-final-cta-inner">
            <p className="eyebrow"><span /> START YOUR BUILD</p>
            <h2>Ready to Engineer Your Next Platform?</h2>
            <p>
              Connect with our technical architects to discuss your scope, constraints, and delivery schedule.
            </p>
            <div className="service-final-cta-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() => setEnquiryOpen(true)}
              >
                Discuss Custom Scope <ArrowRight size={16} />
              </button>
              <Link href="/portfolio" className="secondary-button">
                Explore Portfolio <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Project Enquiry Slide-Over Drawer */}
      <ProjectEnquiry
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}
