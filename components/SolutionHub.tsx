import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { getSolutionHub } from '@/lib/solution-hubs';
import { getSolutionImplementation } from '@/lib/solution-implementation';
import type { SolutionPageData } from '@/lib/solutions';
import { caseStudies, caseStudyMedia, caseStudyHref } from '@/lib/portfolio';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './SolutionHub.module.css';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';

export default function SolutionHub({ data }: { data: SolutionPageData }) {
  const { family, group } = data;
  const hub = getSolutionHub(data);
  const project = caseStudies.find(item => item.slug === family.project);
  const options = <section className={styles.section} aria-labelledby="solution-options">
    <h2 id="solution-options">Explore {group.title}</h2>
    <p>Technology options depend on the workflow and the systems you already use. Each solution explains where its tools fit.</p>
    <div className={styles.options}>{group.links.map(link => {
      const slug = link.href.slice(group.href.length + 1);
      const detail = family.details[slug];
      const tools = [...new Set(getSolutionImplementation(slug)?.flatMap(([, ...options]) => options))];
      return <article key={link.href}><h3>{link.title}</h3><p>{detail.intro}</p>
        <ul className={styles.tools} aria-label="Technology options">{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
        <Link href={link.href}>Explore {link.title} <ArrowRight size={16} aria-hidden="true"/></Link>
      </article>;
    })}</div>
  </section>;

  return <>
    <Navbar/>
    <main className={styles.page} data-solution-hub={data.key}>
      <ArchitectureHero
        trail={[[ 'Solutions', '/solutions' ]]}
        label={group.title}
        title={family.headline}
        intro={family.intro}
        jump={['Explore Solutions', '#solution-options']}
        preview={<ArchitectureSteps title="Systems in This Example" steps={hub.stages.map(([system]) => system)}/>}
      />

      <div className={styles.shell}>
        {options}
        <section className={styles.section} id="solution-architecture" aria-labelledby="solution-flow-title">
          <h2 id="solution-flow-title">{hub.scenario}</h2>
          <p>Open each step to see what the software does and where your team comes in.</p>
          <ol className={styles.flow}>{hub.stages.map(([system, title, description]) =>
            <li key={system}><details><summary><span>{system}</span><strong>{title}</strong></summary><p>{description}</p></details></li>
          )}</ol>
        </section>


        {project && <section className={styles.proof} aria-labelledby="solution-proof">
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
          <div><p>Selected AayaamX Work</p><h2 id="solution-proof">{project.name}</h2><p>{project.summary}</p>
            <a href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={17} aria-hidden="true"/></a>
          </div>
        </section>}

        <section className={`${styles.section} ${styles.checks}`} aria-labelledby="solution-checks">
          <h2 id="solution-checks">What We’d Check Before Launch</h2>
          <ul>{hub.checks.map(check => <li key={check}><Check size={17} aria-hidden="true"/>{check}</li>)}</ul>
        </section>

        <section className={styles.cta} aria-labelledby="solution-contact">
          <div><h2 id="solution-contact">Start With One Workflow</h2><p>{hub.brief}</p></div>
          <Link className={styles.button} href="/company#contact">Talk to Our Team <ArrowUpRight size={17} aria-hidden="true"/></Link>
        </section>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
