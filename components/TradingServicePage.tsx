import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import { tradingHref, tradingServices, type TradingService } from '@/lib/trading-services';
import { caseStudies, caseStudyHref } from '@/lib/portfolio';
import styles from './TradingServicePage.module.css';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';

export default function TradingServicePage({ service }: { service: TradingService }) {
  const project = caseStudies.find(item => item.slug === service.project);
  const isFix = service.slug === 'fix-api-integration';

  return <>
    <Navbar/>
    <main className={styles.page}>
      <ArchitectureHero
        trail={[[ 'Services', '/services' ], [ 'Trading Technology', tradingHref ]]}
        label={service.name}
        title={service.headline}
        intro={service.intro}
        jump={['See Deliverables', '#trading-capabilities']}
        preview={<>
          <ArchitectureSteps title="Order Routing Workflow" steps={service.workflow}/>
          {isFix && <details><summary>View Technical Details</summary><p>A trading app submits an order over the FIX session. The execution venue returns an execution report, which the app uses to update order status. Integration testing covers reconnects and reconciliation.</p></details>}
        </>}
      />

      <div className={styles.inner}>
        <section className={styles.capabilities} aria-labelledby="trading-capabilities">
          <h2 id="trading-capabilities">What We Can Build</h2>
          <dl>{service.capabilities.map(([title, detail]) => <div key={title}>
            <dt>{title}</dt><dd>{detail}</dd>
          </div>)}</dl>
          {isFix && <p className={styles.stack}>We confirm the FIX version and message types with your counterparty. Depending on the platform, implementation may use a FIX engine such as QuickFIX, application logs for session monitoring and a database for order reconciliation.</p>}
        </section>

        <div className={styles.split}>
          {project && <section className={styles.project} aria-labelledby="trading-project">
            <p className={styles.label}>Selected Work</p>
            <h2 id="trading-project">{project.name}</h2>
            <p>{service.projectDetail}</p>
            <a className={styles.textLink} href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={16} aria-hidden="true"/></a>
          </section>}
          <section className={styles.contact} aria-labelledby="trading-contact">
            <h2 id="trading-contact">Plan Your Integration.</h2>
            <p>{service.brief}</p>
            <Link className={styles.textLink} href="/company#contact">Talk to Our Team <ArrowUpRight size={16} aria-hidden="true"/></Link>
          </section>
        </div>

        <nav className={styles.related} aria-label="Related trading services">
          {isFix && <Link href="/solutions/forex-brokerage">Forex & Brokerage Solutions<ArrowUpRight size={15} aria-hidden="true"/></Link>}
          {tradingServices.filter(item => item.slug !== service.slug).map(item =>
            <Link key={item.slug} href={tradingHref + '/' + item.slug}>{item.name}<ArrowUpRight size={15} aria-hidden="true"/></Link>
          )}
        </nav>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
