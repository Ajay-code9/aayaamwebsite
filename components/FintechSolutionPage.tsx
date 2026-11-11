import Link from 'next/link';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';
import SolutionImplementation from './SolutionImplementation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { caseStudies, caseStudyHref } from '@/lib/portfolio';
import type { SolutionPageData } from '@/lib/solutions';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './FintechSolutionPage.module.css';

const examples: Record<string, { title: string; steps: string[]; project?: string }> = {
  'digital-payments': {
    title: 'From Deposit to Settlement',
    steps: ['Create a deposit address', 'Track network confirmations', 'Record the settled payment'],
    project: 'blockchain-crypto-payment-gateway',
  },
  'financial-platforms': {
    title: 'From Registration to Account Access',
    steps: ['Submit account details', 'Review the application', 'Open the customer workspace'],
    project: 'succeed-capital-fx',
  },
  'financial-automation': {
    title: 'From Request to Recorded Decision',
    steps: ['Capture the request', 'Send exceptions for review', 'Update the finance record'],
  },
};

export default function FintechSolutionPage({ data }: { data: SolutionPageData }) {
  const { group, family, link, detail, title, intro } = data;
  const example = link ? examples[link.href.slice(group.href.length + 1)] : undefined;
  const project = caseStudies.find(item => item.slug === (link ? example?.project : family.project));

  return <>
    <Navbar/>
    <main className={styles.page} data-fintech="">
      {link && example && <ArchitectureHero
        trail={[[ 'Solutions', '/solutions' ], [ group.title, group.href ]]}
        label={title}
        title={link ? title : family.headline}
        intro={intro}
        jump={['See What We Build', '#fintech-scope']}
        preview={<ArchitectureSteps title={example.title} steps={example.steps}/>}
      />}
      <div className={styles.inner}>

        <section className={styles.content} aria-labelledby="fintech-scope">
          <h2 id="fintech-scope">{detail ? 'What We Can Build' : 'Choose Where to Start'}</h2>
          {detail && link ? <SolutionImplementation href={link.href} scope={detail.scope}/> :
            <ul>{group.links.map(item => <li key={item.href}>
              <Link href={item.href}>{item.title}<ArrowUpRight size={17} aria-hidden="true"/></Link>
              <p>{family.details[item.href.slice(group.href.length + 1)].intro}</p>
            </li>)}</ul>}
        </section>

        {project && <section className={styles.proof} aria-labelledby="fintech-project">
          <div><p className={styles.label}>Selected Work</p><h2 id="fintech-project">{project.name}</h2><p>{project.summary}</p></div>
          <a href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={17} aria-hidden="true"/></a>
        </section>}

        {link && <nav className={styles.related} aria-label="Related fintech solutions">
          {group.links.filter(item => item.href !== link.href).map(item =>
            <Link key={item.href} href={item.href}>{item.title}<ArrowRight size={16} aria-hidden="true"/></Link>
          )}
        </nav>}
      </div>
    </main>
    <SiteFooter/>
  </>;
}
