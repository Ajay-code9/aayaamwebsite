import Link from 'next/link';
import Image from 'next/image';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';
import { ArrowUpRight, Check } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import { engineeringPages, type EngineeringPageData } from '@/lib/software-engineering';
import { caseStudies, caseStudyHref, caseStudyMedia } from '@/lib/portfolio';
import styles from './EngineeringPage.module.css';


export default function EngineeringPage({data}: {data:EngineeringPageData}) {
  const project = caseStudies.find(item => item.slug === data.project);
  const related = engineeringPages.slice(1).filter(page => page.href !== data.href);
  const focus = 'focus' in data ? data.focus : undefined;
  const heroImage = 'heroImage' in data ? data.heroImage : undefined;

  return <>
    <Navbar/>
    <main className={styles.page}>
      <ArchitectureHero trail={data === engineeringPages[0] ? [[ 'Services', '/services' ]] : [[ 'Services', '/services' ], [ 'Software Engineering', engineeringPages[0].href ]]}
        label={data.name} title={data.headline} intro={data.intro}
        jump={['See Deliverables', '#deliverables']}
        preview={heroImage ? (
          <Image
            data-architecture-hero-image=""
            src={heroImage.src}
            alt={heroImage.alt}
            width={1200}
            height={900}
            loading="eager"
            fetchPriority="high"
            unoptimized
          />
        ) : <ArchitectureSteps title="Example Workflow" steps={data.flow}/>}
      />
      <section className={styles.section} id="deliverables" aria-labelledby="engineering-deliverables">
        <p className={styles.eyebrow}>DELIVERABLES</p>
        <h2 id="engineering-deliverables">What We Can Build.</h2>
        <div className={styles.cards}>{data.deliverables.map(([title,detail],index) => <article key={title}>
          <span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{detail}</p>
        </article>)}</div>
      </section>
      {focus && <section className={`${styles.section} ${styles.focus}`} aria-labelledby="engineering-focus">
        <div>
          <h2 id="engineering-focus">{focus.title}</h2>
          <p>{focus.description}</p>
        </div>
        <ul aria-label="Example projects">{focus.examples.map(example => <li key={example}>
          <Check size={18} aria-hidden="true"/>{example}
        </li>)}</ul>
      </section>}
      {project && <section className={`${styles.proof} ${focus ? styles.proofWithImage : ''}`} aria-labelledby="engineering-proof">
        {focus && <figure
          className={styles.projectImage}
          style={{
            height: 'auto',
            aspectRatio: 'auto',
            alignSelf: 'center',
            overflow: 'hidden',
            lineHeight: 0,
          }}
        >
          <img
            src={caseStudyMedia(project.slug).cover.src}
            alt={caseStudyMedia(project.slug).cover.caption || project.name}
            width={caseStudyMedia(project.slug).cover.width}
            height={caseStudyMedia(project.slug).cover.height}
            loading="lazy"
            decoding="async"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              maxHeight: 'none',
              objectFit: 'contain',
            }}
          />
        </figure>}
        <div>
          <p className={styles.eyebrow}>SELECTED WORK</p>
          <h2 id="engineering-proof">{project.name}</h2>
          <p>{focus?.projectDetail ?? project.summary}</p>
          <a className={styles.secondary} href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={16}/></a>
        </div>
      </section>}
      <section className={styles.section} aria-labelledby="engineering-related">
        <h2 id="engineering-related">{data === engineeringPages[0] ? 'Explore Software Services.' : 'Related Services.'}</h2>
        <ul className={styles.related}>{related.map(page => <li key={page.href}>
          <Link href={page.href}>{page.name}<ArrowUpRight size={16}/></Link>
        </li>)}</ul>
      </section>
      <section className={styles.cta} aria-labelledby="engineering-cta">
        <div><p className={styles.eyebrow}>START A CONVERSATION</p><h2 id="engineering-cta">What Do You Want to Build?</h2><p>{data.scope}</p></div>
        <Link className={styles.primary} href="/company#contact">Share Your Project Brief <ArrowUpRight size={17}/></Link>
      </section>
    </main>
    <SiteFooter/>
  </>;
}
