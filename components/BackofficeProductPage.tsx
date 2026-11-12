import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ClipboardCheck, Shield, Wallet } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import BackofficeDesk from './BackofficeDesk';
import { caseStudyHref } from '@/lib/portfolio';
import styles from './BackofficeProductPage.module.css';

const modules = [
  { title: 'Funding & Reconciliation', icon: Wallet, copy: 'Match funding requests to provider records, flag differences and let finance staff see which requests still need action.' },
  { title: 'Account Operations', icon: ClipboardCheck, copy: 'Put applications, verification results and account changes in a review queue. Record who reviewed each request and what happened next.' },
  { title: 'Risk Visibility', icon: Shield, copy: 'Bring available trading activity and exposure into one view. Give the risk team a queue for alerts and a record of their response.' },
];

const questions = [
  ['Can we keep our existing CRM and trading platform?', 'Where your providers expose the necessary data, we can build the workspace around those tools. We start by mapping account references, payment records and the trading data each team needs.'],
  ['Can finance, support and risk have different access?', 'Yes. We agree which records each role can see and who can approve or change them. For example, finance can review deposits while support can see their status.'],
  ['What happens if a provider update is missing?', 'The request can stay in a review queue with its last known status and source reference. Staff can investigate it before approving any change.'],
];

export default function BackofficeProductPage({ intro }: { intro: string }) {
  return <>
    <Navbar/>
    <main className={styles.page} data-backoffice-product="">
      <header className={styles.hero}>
        <div className={styles.shell}>
          <nav className={styles.crumb} aria-label="Breadcrumb"><Link href="/products">Products</Link><span aria-hidden="true">/</span><span aria-current="page">Broker Backoffice Platform</span></nav>
          <div className={styles.heroGrid}>
            <div><h1>Give Your Brokerage <em>One Operations Desk.</em></h1><p className={styles.lead}>{intro}</p>
              <div className={styles.actions}><Link className={styles.primary} href="/company#contact">Discuss Your Backoffice <ArrowUpRight size={17} aria-hidden="true"/></Link>
                <a href="#backoffice-modules">Explore Modules <ArrowDown size={16} aria-hidden="true"/></a></div>
            </div>
            <BackofficeDesk/>
          </div>
        </div>
      </header>
      <div className={styles.shell}>
        <section className={styles.section} id="backoffice-modules" aria-labelledby="backoffice-modules-title">
          <h2 id="backoffice-modules-title">What We Can Build</h2>
          <div className={styles.modules}>{modules.map(({ title, icon: Icon, copy }) => <article key={title}>
            <Icon size={24} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p>
          </article>)}</div>
        </section>
        <section className={styles.proof} aria-labelledby="backoffice-proof">
          <div><h2 id="backoffice-proof">Succeed Capital FX</h2><p>AayaamX connected the brokerage CRM, web and mobile trading apps to a shared backend with dedicated risk monitoring.</p></div>
          <a href={caseStudyHref('succeed-capital-fx')}>Read the Case Study <ArrowUpRight size={17} aria-hidden="true"/></a>
        </section>
        <div className={styles.bottom}>
          <section aria-labelledby="backoffice-faq"><h2 id="backoffice-faq">Common Questions</h2>
            {questions.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </section>
          <section className={styles.brief} aria-labelledby="backoffice-brief">
            <h2 id="backoffice-brief">Start With One Review Queue.</h2>
            <p>Bring a funding request, account change or risk alert your staff currently checks by hand. Tell us where the source record lives and who can approve the next step.</p>
            <Link className={styles.primary} href="/company#contact">Discuss Your Backoffice Requirements <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </section>
        </div>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
