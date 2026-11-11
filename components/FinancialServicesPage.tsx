import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, Landmark } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import { caseStudies, caseStudyMedia, caseStudyHref } from '@/lib/portfolio';
import type { getIndustryPage } from '@/lib/industry-pages';
import styles from './FinancialServicesPage.module.css';

export const financialServicesIntro = 'AayaamX builds software for financial services teams. Connect customer onboarding, payments, trading and internal operations so customers know where they stand and staff can trace what happened.';

const capabilities = [
  ['Payments & Reconciliation', 'Give customers a clear payment status and give staff the records to match payments to accounts or orders. Route unmatched payments for review.', '/solutions/fintech/digital-payments'],
  ['Onboarding & Customer Accounts', 'Collect applications and documents, connect your verification provider, and show applicants what is still needed before their account can open.', '/solutions/fintech/financial-platforms'],
  ['Trading & Brokerage Infrastructure', 'Connect trader portals, brokerage systems and trading platforms so staff can follow account activity and traders can see order updates.', '/solutions/forex-brokerage'],
  ['Finance Operations & Reporting', 'Route exceptions and approvals, keep a history of decisions and link reports back to the records staff use to investigate.', '/solutions/fintech/financial-automation'],
] as const;

const workflow = [
  ['Payment received', 'Capture the provider reference, amount and timestamp as the payment arrives.'],
  ['Matched to a record', 'Check the amount and reference before updating the customer’s status.'],
  ['If there’s no match', 'Send the payment to staff with the details they need to investigate before crediting it.'],
] as const;

const questions = [
  ['Can you build around the tools we already use?', 'Yes, where those tools provide the required interfaces or exports. We review your providers, internal systems and data before agreeing what can be integrated and what needs to be built.'],
  ['How do we control access and trace changes?', 'We can define access by role, require approvals for selected actions and record who changed what. We agree which events and records your team needs to review.'],
  ['Can we migrate existing records in stages?', 'We can plan a sample migration, compare source and destination records, and agree how to switch each workflow over. We scope testing and handover around what your operations team needs to keep running.'],
  ['What does AayaamX handle?', 'AayaamX handles software development, technical architecture and implementation. Your organisation sets operating rules and owns regulated activities and compliance decisions.'],
] as const;

export default function FinancialServicesPage({ industry }: { industry?: ReturnType<typeof getIndustryPage> }) {
  const projectSlugs = industry?.projects ?? ['succeed-capital-fx', 'blockchain-crypto-payment-gateway'];
  const projects = caseStudies.filter(item => projectSlugs.includes(item.slug));
  return <>
    <Navbar/>
    <main className={styles.page} data-industry-page="" data-financial-services={industry ? undefined : ''}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <nav className={styles.crumb} aria-label="Breadcrumb"><Link href="/industries">Industries</Link><span aria-hidden="true">/</span><span aria-current="page">{industry?.name ?? 'Financial Services'}</span></nav>
            <h1>{industry?.headline ?? 'Make Every Financial Workflow Easier to Trace.'}</h1>
            <p>{industry?.intro ?? financialServicesIntro}</p>
            <div className={styles.actions}>
              <Link className={styles.button} href="/company#contact">Discuss Your Project <ArrowUpRight size={18} aria-hidden="true"/></Link>
              <a href="#financial-workflows">Explore Use Cases <ArrowDown size={17} aria-hidden="true"/></a>
            </div>
          </div>
          <section className={styles.desk} aria-labelledby="payment-example">
            <div className={styles.deskHeader}><Landmark size={22} aria-hidden="true"/><div><small>Example Workflow</small><h2 id="payment-example">{industry?.workflowTitle ?? 'Payment Reconciliation'}</h2></div></div>
            {(industry?.workflow ?? workflow).map(([title, detail]) => <details key={title}><summary>{title}</summary><p>{detail}</p></details>)}
          </section>
        </div>
      </header>

      <div className={styles.inner}>
        <section className={styles.section} id="financial-workflows" aria-labelledby="financial-capabilities">
          <h2 id="financial-capabilities">What We Can Build</h2>
          <p>{industry?.audience ?? 'For payment teams, brokerages, fintech platforms and financial operations teams.'}</p>
          <div className={styles.cards}>{(industry?.capabilities ?? capabilities).map(([title, detail, href]) => <article key={title}>
            <h3>{title}</h3><p>{detail}</p><Link href={href}>Explore {industry ? title : title.split(' & ')[0]} <ArrowUpRight size={16} aria-hidden="true"/></Link>
          </article>)}</div>
        </section>

        <section className={styles.context} aria-labelledby="financial-integration">
          <div><h2 id="financial-integration">{industry ? 'What We Check Before Building' : 'Agree What Each System Needs to Know.'}</h2>
            {industry ? <p>{industry.integration}</p> : <><p>For cross-border payments, the BIS Committee on Payments and Market Infrastructures highlights how consistent payment data can help systems work together. In a project, that starts with agreeing which fields move between providers, how you match records and who reviews exceptions.</p><a href="https://www.bis.org/committees/cpmi/cross-border-payments/overview">Read the BIS cross-border payments overview <ArrowUpRight size={16} aria-hidden="true"/></a></>}
          </div>
          <ul>{(industry?.checks ?? ['Map provider interfaces and data fields', 'Set permissions and approval rules', 'Test failed and duplicate updates before launch']).map(item => <li key={item}><Check size={18} aria-hidden="true"/>{item}</li>)}</ul>
        </section>

        {projects.length > 0 && <section className={styles.section} aria-labelledby="financial-projects">
          <h2 id="financial-projects">Selected AayaamX Work</h2>
          <div className={styles.projects}>{projects.map(project => <article key={project.slug}>
            <figure style={{ height: 'auto', aspectRatio: 'auto', overflow: 'hidden', lineHeight: 0 }}>
              <img
                src={caseStudyMedia(project.slug).cover.src}
                alt={caseStudyMedia(project.slug).cover.caption || project.name}
                width={caseStudyMedia(project.slug).cover.width}
                height={caseStudyMedia(project.slug).cover.height}
                loading="lazy"
                decoding="async"
                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </figure>
            <div><h3>{project.name}</h3><p>{project.summary}</p><a href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={16} aria-hidden="true"/></a></div>
          </article>)}</div>
        </section>}

        <section className={`${styles.context} ${projects.length ? '' : styles.questionsWithoutProjects}`} aria-labelledby="financial-questions">
          <h2 id="financial-questions">Common Questions</h2>
          <div className={styles.faq}>{(industry?.questions ?? questions).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.cta} aria-labelledby="financial-contact">
          <div><h2 id="financial-contact">Start With One Workflow.</h2><p>{industry?.brief ?? 'Bring a recent example, the tools or providers involved and what staff have to do by hand today.'}</p></div>
          <Link className={styles.button} href="/company#contact">Talk to Our Team <ArrowUpRight size={17} aria-hidden="true"/></Link>
        </section>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
