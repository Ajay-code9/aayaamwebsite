import Link from 'next/link';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import { blockchainHref, blockchainServices, type BlockchainService } from '@/lib/blockchain-services';
import { caseStudies, caseStudyHref, caseStudyMedia } from '@/lib/portfolio';
import styles from './BlockchainServicePage.module.css';

export default function BlockchainServicePage({ service }: { service: BlockchainService }) {
  const project = caseStudies.find(item => item.slug === service.project);

  return <>
    <Navbar/>
    <main className={styles.page}>
      <ArchitectureHero trail={[[ 'Services', '/services' ], [ 'Blockchain Development', blockchainHref ]]}
        label={service.name} title={service.headline} intro={service.intro}
        jump={['See Deliverables', '#blockchain-capabilities']}
        preview={<ArchitectureSteps title="Integration Scope" steps={service.capabilities.map(([title]) => title)}/>}
      />
      <div className={styles.layout}>
        <aside className={styles.rail}>
          <nav aria-label="Blockchain services">
            <Link className={styles.parent} href={blockchainHref}>Blockchain Development <ArrowUpRight size={15} aria-hidden="true"/></Link>
            {blockchainServices.map(item => <Link key={item.slug} href={blockchainHref + '/' + item.slug}
              aria-current={item.slug === service.slug ? 'page' : undefined}>{item.name}</Link>)}
          </nav>
        </aside>

        <div className={styles.content}>


          <section className={styles.capabilities} aria-labelledby="blockchain-capabilities">
            <h2 id="blockchain-capabilities">What We Can Build</h2>
            <dl>{service.capabilities.map(([title, detail]) => <div key={title}>
              <dt>{title}</dt><dd>{detail}</dd>
            </div>)}</dl>
          </section>

          {project && <section className={styles.project} aria-labelledby="blockchain-project">
            <figure style={{ height: 'auto', aspectRatio: 'auto', alignSelf: 'center', overflow: 'hidden', lineHeight: 0 }}>
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
            <div>
              <p className={styles.label}>Selected Work</p>
              <h2 id="blockchain-project">{project.name}</h2>
              <p>{service.projectDetail}</p>
              <a href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={16} aria-hidden="true"/></a>
            </div>
          </section>}

          <section className={styles.contact} aria-labelledby="blockchain-contact">
            <h2 id="blockchain-contact">Let’s Scope Your Project.</h2>
            <p>{service.brief}</p>
            <Link className={styles.button} href="/company#contact">Discuss Your Blockchain Requirements <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </section>
        </div>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
