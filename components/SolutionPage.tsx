import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Blocks, BrainCircuit, Building2, ChartNoAxesCombined, Check, Gauge, Wallet } from 'lucide-react';
import type { SolutionPageData } from '@/lib/solutions';
import { caseStudies, caseStudyHref } from '@/lib/portfolio';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './SolutionPage.module.css';

const icons = {
  fintech: Wallet,
  'forex-brokerage': ChartNoAxesCombined,
  'prop-trading': Gauge,
  blockchain: Blocks,
  enterprise: Building2,
  'ai-business': BrainCircuit,
};

export default function SolutionPage({ data }: { data: SolutionPageData }) {
  const { key, group, family, link, detail, title, intro } = data;
  const Icon = icons[key as keyof typeof icons] ?? Building2;
  const project = !detail && caseStudies.find(item => item.slug === family.project);
  const links = group.links.filter(item => item.href !== link?.href);

  return <>
    <Navbar/>
    <main className={styles.page} data-family={key}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/solutions">Solutions</Link><span aria-hidden="true">/</span>
          {link ? <Link href={group.href}>{group.title}</Link> : <span aria-current="page">{group.title}</span>}
          {link && <><span aria-hidden="true">/</span><span aria-current="page">{title}</span></>}
        </nav>

        <header className={styles.hero}>
          <div>
            {link ? <Link className={styles.label} href={group.href}>{group.title}</Link> : <p className={styles.label}>{group.title}</p>}
            <h1>{link ? title : family.headline}</h1>
            <p className={styles.lead}>{intro}</p>
            <Link className={styles.button} href="/company#contact">Discuss Your Project <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </div>
          <div className={styles.emblem} aria-hidden="true"><Icon strokeWidth={1.35}/></div>
        </header>

        {detail && <section className={styles.scope} aria-labelledby="solution-scope">
          <h2 id="solution-scope">What We Can Build</h2>
          <ul>{detail.scope.map(item => <li key={item}><Check size={19} aria-hidden="true"/>{item}</li>)}</ul>
        </section>}

        <section className={styles.directory} aria-labelledby="solution-directory">
          <h2 id="solution-directory">{detail ? 'More in ' + group.title : 'Explore This Solution'}</h2>
          <ul>{links.map(item => {
            const preview = family.details[item.href.slice(group.href.length + 1)];
            return <li key={item.href}><Link href={item.href}>
              <div><strong>{item.title}</strong>{!detail && preview && <p>{preview.intro}</p>}</div>
              <ArrowRight size={20} aria-hidden="true"/>
            </Link></li>;
          })}</ul>
        </section>

        {project && <section className={styles.project} aria-labelledby="solution-project">
          <div><p className={styles.label}>Selected Work</p><h2 id="solution-project">{project.name}</h2><p>{project.summary}</p></div>
          <a href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={17} aria-hidden="true"/></a>
        </section>}
      </div>
    </main>
    <SiteFooter/>
  </>;
}
