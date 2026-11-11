'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Gauge,
  Globe,
  Layers,
  Lock,
  Radio,
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
import { SolutionData } from '@/lib/solutions-data';

const iconMap: Record<string, any> = {
  Wallet,
  TrendingUp,
  Gauge,
  Blocks,
  Building2,
  BrainCircuit,
  Database,
  Lock,
  Server,
  Code2,
  Cpu,
  ShieldAlert,
  ShieldCheck,
  Search,
  Terminal,
  Layers,
  Globe,
};

function DynamicIcon({ name, size = 20, className = '' }: { name: string; size?: number; className?: string }) {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent size={size} className={className} />;
}

export default function SolutionDetailPage({
  data,
  currentSubSlug,
}: {
  data: SolutionData;
  currentSubSlug?: string;
}) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentSub = currentSubSlug
    ? data.subSolutions.find((s) => s.slug === currentSubSlug)
    : undefined;

  return (
    <>
      <Navbar />

      <main className="service-page">
        {/* ========================================================
            HERO SECTION
            ======================================================== */}
        <section className="service-hero">
          <div className="service-hero-inner" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div className="service-hero-content" style={{ maxWidth: '100%' }}>
              <nav aria-label="Breadcrumb" className="destination-breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/solutions">Solutions</Link>
                <span>/</span>
                {currentSub ? (
                  <>
                    <Link href={`/solutions/${data.slug}`}>{data.familyTitle}</Link>
                    <span>/</span>
                    <span>{currentSub.title}</span>
                  </>
                ) : (
                  <span>{data.familyTitle}</span>
                )}
              </nav>

              <div className="eyebrow">
                <span /> {data.categoryBadge}
              </div>

              <h1 className="service-hero-title">
                {currentSub ? currentSub.title : data.headline}
              </h1>

              <p className="service-hero-lead">
                {currentSub ? currentSub.description : data.tagline}
              </p>

              <div className="service-hero-actions">
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setEnquiryOpen(true)}
                >
                  Discuss Custom Scope <ArrowRight size={16} />
                </button>
                <a href="#deliverables" className="secondary-button">
                  View Architecture <ArrowUpRight size={16} />
                </a>
              </div>

              {/* 4 Live Engineering Metrics */}
              <div className="service-metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '36px' }}>
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
            </div>
          </div>
        </section>

        {/* ========================================================
            SUB-SOLUTIONS DIRECTORY: SPECIALIZED MODULES
            ======================================================== */}
        <section className="service-section service-stacks-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> SOLUTION CAPABILITIES</p>
            <h2>Specialized Architectural Modules.</h2>
            <p>
              Explore the dedicated subsystems we engineer within the {data.familyTitle} ecosystem.
            </p>
          </div>

          <div className="service-stacks-grid">
            {data.subSolutions.map((sub) => {
              const isActive = currentSubSlug === sub.slug;
              return (
                <div
                  key={sub.slug}
                  className="service-stack-card"
                  style={isActive ? { borderColor: '#38b284', boxShadow: '0 8px 24px rgba(56, 178, 132, 0.12)' } : undefined}
                >
                  <div className="service-stack-icon">
                    <DynamicIcon name={data.techMatrix.column1.icon} size={20} />
                  </div>
                  <h3>{sub.title}</h3>
                  <p>{sub.description}</p>
                  <div style={{ marginTop: '16px' }}>
                    <Link
                      href={`/solutions/${data.slug}/${sub.slug}`}
                      className="home-text-link"
                      style={{ fontSize: '13px', fontWeight: 600 }}
                    >
                      Explore {sub.title} ↗
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            TECH MATRIX: 3-COLUMN MODERN STACK
            ======================================================== */}
        <section className="service-section service-stacks-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> TECHNOLOGY MATRIX</p>
            <h2>Enterprise Stacks We Build With.</h2>
            <p>
              We select battle-tested, high-concurrency technologies tailored to financial, brokerage,
              and enterprise requirements.
            </p>
          </div>

          <div className="service-stacks-grid">
            <div className="service-stack-card">
              <div className="service-stack-icon">
                <DynamicIcon name={data.techMatrix.column1.icon} size={20} />
              </div>
              <h3>{data.techMatrix.column1.title}</h3>
              <p>Core integration libraries, protocols, and transaction runtimes.</p>
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
              <p>ACID-compliant storage, in-memory caching, and distributed queues.</p>
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
              <p>Hardware vaults, enterprise authentication, and automated audit trails.</p>
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
            <h2>Production-Ready Deliverables.</h2>
            <p>
              Every solution engineered by AayaamX includes production-ready deliverables built for high
              performance, regulatory auditability, and long-term scalability.
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
            CASE STUDY SPOTLIGHT (SELECTED WORK)
            ======================================================== */}
        {data.project && (
          <section className="service-section">
            <div className="service-section-header">
              <p className="eyebrow"><span /> SELECTED WORK</p>
              <h2>Proven Architecture in Production.</h2>
              <p>Explore how our engineering team solved complex operational requirements for live platforms.</p>
            </div>

            <div
              className="service-stack-card"
              style={{
                maxWidth: '920px',
                margin: '0 auto',
                padding: 'clamp(28px, 4vw, 44px)',
                background: 'linear-gradient(145deg, var(--card-bg, #ffffff), #f7fafc)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', margin: '0 0 12px' }}>
                    {data.project.name}
                  </h3>
                  <p style={{ maxWidth: '64ch', fontSize: '15px', lineHeight: 1.65, color: 'var(--muted)' }}>
                    {data.project.summary}
                  </p>
                </div>
                <Link
                  href={`/portfolio#${data.project.slug}`}
                  className="secondary-button"
                  style={{ alignSelf: 'center' }}
                >
                  Read Case Study <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            EXECUTION METHODOLOGY: 3-STAGE INTERACTIVE WORKFLOW
            ======================================================== */}
        <section className="service-section service-methodology-section">
          <div className="service-section-header">
            <p className="eyebrow"><span /> EXECUTION METHODOLOGY</p>
            <h2>How We Deliver.</h2>
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
            <h2>Ready to Engineer Your Solution?</h2>
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
