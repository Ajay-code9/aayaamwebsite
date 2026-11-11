import Link from 'next/link';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import { deliveryGroups, deliveryServices, type DeliveryService } from '@/lib/delivery-services';
import styles from './DeliveryServicePage.module.css';

export default function DeliveryServicePage({ service }: { service: DeliveryService }) {
  const groupHref = '/services/' + service.group;
  const related = deliveryServices.filter(item => item.group === service.group && item.slug !== service.slug);

  return <>
    <Navbar/>
    <main className={styles.page} data-group={service.group}>
      <ArchitectureHero trail={[[ 'Services', '/services' ], [ deliveryGroups[service.group], groupHref ]]}
        label={service.name} title={service.headline} intro={service.intro}
        jump={['See Deliverables', '#delivery-scope']}
        preview={<ArchitectureSteps title={service.example} steps={service.steps}/>}
      />
      <div className={styles.inner}>

        <div className={styles.body}>
          <section className={styles.scope} aria-labelledby="delivery-scope">
            <h2 id="delivery-scope">What We Can Deliver</h2>
            <dl>{service.scope.map(([title, description]) => <div key={title}>
              <dt>{title}</dt><dd>{description}</dd>
            </div>)}</dl>
          </section>
          <figure className={styles.example}>
            <figcaption><span className={styles.label}>Example Workflow</span><strong>{service.example}</strong></figcaption>
            <ol>{service.steps.map(step => <li key={step}>{step}</li>)}</ol>
          </figure>
        </div>

        <section className={styles.contact} aria-labelledby="delivery-contact">
          <div><h2 id="delivery-contact">Tell Us What You Need.</h2><p>{service.brief}</p></div>
          <Link className={styles.button} href="/company#contact">Talk to Our Team <ArrowUpRight size={17} aria-hidden="true"/></Link>
        </section>

        <nav className={styles.related} aria-label="Related services">
          {related.map(item => <Link key={item.slug} href={groupHref + '/' + item.slug}>{item.name}<ArrowUpRight size={15} aria-hidden="true"/></Link>)}
        </nav>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
