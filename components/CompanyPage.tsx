import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, Layers3 } from 'lucide-react';
import { companyPages, type CompanyPageData } from '@/lib/company-pages';
import { companySections } from '@/lib/navigation';
import { caseStudies, caseStudyMedia } from '@/lib/portfolio';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import ContactContent from './ContactContent';
import styles from './CompanyPage.module.css';

const stacks = [
  ['React', 'Next.js', 'TypeScript'],
  ['Python', 'PostgreSQL + pgvector', 'Model APIs'],
  ['FIX', 'WebSockets', 'Solidity'],
  ['Node.js', 'Docker', 'PostgreSQL'],
];

function PageLink({ href, children }: { href: string; children: string }) {
  const label = <>{children} <ArrowUpRight size={16} aria-hidden="true"/></>;
  return href.startsWith('/') ? <Link href={href}>{label}</Link> : <a href={href}>{label}</a>;
}

function SectionHeader({ id, data }: { id: string; data: CompanyPageData }) {
  return <header className={styles.sectionHead}>
    <p className={styles.label}>{data.title}</p>
    <h2 id={id + '-title'}>{data.headline}</h2>
    <p>{data.intro}</p>
  </header>;
}

function Cards({ data, showStack = false }: { data: CompanyPageData; showStack?: boolean }) {
  return <div className={styles.cards}>{data.items.map(([title, description, href], index) => <article key={title}>
    <h3>{title}</h3><p>{description}</p>
    {showStack && <ul className={styles.tags} aria-label="Example technologies">{stacks[index].map(tool => <li key={tool}>{tool}</li>)}</ul>}
    {href && <PageLink href={href}>{'Explore ' + title}</PageLink>}
  </article>)}</div>;
}

export default function CompanyPage() {
  const about = companyPages.about;
  const story = companyPages['our-story'];
  const vision = companyPages['vision-mission'];
  const approach = companyPages['our-approach'];
  const expertise = companyPages['technology-expertise'];
  const team = companyPages['leadership-team'];
  const careers = companyPages.careers;

  return <>
    <Navbar/>
    <main className={styles.page} data-company-page="">
      <section className={styles.hero} id="about" aria-labelledby="about-title">
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.label}>{about.title}</p>
              <h1 id="about-title">{about.headline}</h1>
              <p>{about.intro}</p>
              <div className={styles.action}><PageLink href="/company#contact">Discuss Your Project</PageLink>
                <a className={styles.heroJump} href="#our-story">See Our Work <ArrowDown size={16} aria-hidden="true"/></a></div>
            </div>
            <div className={styles.heroPanel}>
              <Layers3 size={27} aria-hidden="true"/><h2>{about.heading}</h2>
              <ul>{about.items.map(([title, description, href]) => <li key={title}>
                <PageLink href={href}>{title}</PageLink><p>{description}</p>
              </li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <nav className={styles.index} aria-label="Company sections">
        <div className={styles.shell}>{companySections.map(([title,id]) => <a key={id} href={'#'+id}>{title}</a>)}</div>
      </nav>
      <div className={styles.shell}>
        <section id="our-story" className={styles.content} aria-labelledby="our-story-title">
          <SectionHeader id="our-story" data={story}/>
          <div className={styles.storyGrid}>{story.items.map(([title, description, href]) => {
            const project = caseStudies.find(item => href.endsWith('/' + item.slug));
            return <article key={title}>
              {project && <div className={styles.projectImage} style={{ height: 'auto', aspectRatio: 'auto', overflow: 'hidden', lineHeight: 0 }}>
                <img
                  src={caseStudyMedia(project.slug).cover.src}
                  alt={caseStudyMedia(project.slug).cover.caption || project.name}
                  width={caseStudyMedia(project.slug).cover.width}
                  height={caseStudyMedia(project.slug).cover.height}
                  loading="lazy"
                  decoding="async"
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>}
              <div><h3>{project?.name ?? title}</h3><p>{description}</p><PageLink href={href}>Read the Case Study</PageLink></div>
            </article>;
          })}</div>
        </section>
        <section id="vision-mission" className={styles.band} aria-labelledby="vision-mission-title">
          <SectionHeader id="vision-mission" data={vision}/>
          <div className={styles.split}>
            <div className={styles.note}><h3>{vision.note[0]}</h3><p>{vision.note[1]}</p></div>
            <ul className={styles.principles}>{vision.items.map(([title, description]) => <li key={title}><Check size={18} aria-hidden="true"/><div><strong>{title}</strong><p>{description}</p></div></li>)}</ul>
          </div>
        </section>
        <section id="our-approach" className={styles.content} aria-labelledby="our-approach-title">
          <SectionHeader id="our-approach" data={approach}/>
          <ol className={styles.timeline}>{approach.items.map(([title, description], index) => <li key={title}>
            <details name="company-approach" open={index === 0}>
              <summary><span aria-hidden="true">{index + 1}</span>{title}</summary>
              <p>{description}</p>
            </details>
          </li>)}</ol>
          <p className={styles.reference}><PageLink href={approach.reference[1]}>{approach.reference[0]}</PageLink></p>
        </section>
        <section id="technology-expertise" className={styles.band} aria-labelledby="technology-expertise-title">
          <SectionHeader id="technology-expertise" data={expertise}/>
          <Cards data={expertise} showStack/>
          <p className={styles.reference}>{expertise.note[1]}</p>
        </section>
        <section id="leadership-team" className={styles.content} aria-labelledby="leadership-team-title">
          <SectionHeader id="leadership-team" data={team}/>
          <Cards data={team}/>
        </section>
        <section id="careers" className={styles.band} aria-labelledby="careers-title">
          <SectionHeader id="careers" data={careers}/>
          <Cards data={careers}/>
          <div className={styles.careerAction}><p>{careers.note[1]}</p>
            <PageLink href={careers.action[1]}>{careers.action[0]}</PageLink>
            <PageLink href={careers.reference[1]}>{careers.reference[0]}</PageLink>
          </div>
        </section>
        <ContactContent/>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
