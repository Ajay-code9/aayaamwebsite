import Link from 'next/link';
import ArchitectureHero from './ArchitectureHero';
import { solutionDelivery } from '@/lib/solution-delivery';
import SolutionImplementation from './SolutionImplementation';
import { ArrowUpRight } from 'lucide-react';
import type { SolutionPageData } from '@/lib/solutions';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './PropTradingSolutionPage.module.css';

const topics = {
  'evaluation-platforms': {
    stage: 'Enrol',
    question: 'Can we run more than one evaluation programme?',
    answer: 'We can scope separate programmes with their own enrolment steps, rules and stages. Your team decides what happens when a trader passes, fails or needs a manual review.',
    brief: 'Share your programmes, evaluation stages and how trading accounts are created today.',
  },
  'challenge-management': {
    stage: 'Evaluate',
    question: 'Can the system apply our own challenge rules?',
    answer: 'Your firm sets the rules. We map targets, loss limits and any time or trading-day requirements to the data available from your trading platform, then agree how exceptions are handled.',
    brief: 'Bring your rulebook and examples of results your team currently reviews by hand.',
  },
  'trader-dashboards': {
    stage: 'Track',
    question: 'How current will the dashboard data be?',
    answer: 'Update frequency depends on the data your trading platform makes available. We agree which figures traders need, how often they should refresh and how to show when data was last updated.',
    brief: 'Share your trading platform and the figures or alerts traders need to see first.',
  },
  'payout-management': {
    stage: 'Review Payout',
    question: 'Can we keep a manual approval step?',
    answer: 'Yes. The software can check your eligibility rules and route a request to staff for approval. If a payment provider is connected, its status can be displayed alongside the approval history.',
    brief: 'Share your eligibility rules, approval steps and the provider you use to send payments.',
  },
} as const;

export default function PropTradingSolutionPage({ data }: { data: SolutionPageData }) {
  const { group, family, link, detail, intro, title } = data;
  const slug = link?.href.slice(group.href.length + 1) as keyof typeof topics | undefined;
  const topic = slug ? topics[slug] : undefined;

  return <>
    <Navbar/>
    <main className={styles.page} data-prop-trading="">
      {link && <ArchitectureHero
        trail={[[ 'Solutions', '/solutions' ], [ group.title, group.href ]]}
        label={title}
        title={link ? title : family.headline}
        intro={intro}
        jump={['See What We Build', '#prop-build']}
        preview={<><strong>Example Workflow</strong><p>{solutionDelivery[link.href.split('/').at(-1) ?? '']?.[0]}</p></>}
      />}
      <div className={styles.inner}>

        <nav className={styles.journey} aria-label="Trader journey">
          <h2>The Trader Journey</h2>
          <ol>{group.links.map(item => {
            const stage = topics[item.href.slice(group.href.length + 1) as keyof typeof topics].stage;
            return <li key={item.href}><Link href={item.href} aria-current={item.href === link?.href ? 'page' : undefined}>
              <strong>{stage}</strong><span>{item.title}</span><ArrowUpRight size={15} aria-hidden="true"/>
            </Link></li>;
          })}</ol>
        </nav>

        <div className={styles.body}>
          <section aria-labelledby="prop-build">
            <h2 id="prop-build">{detail ? 'What We Can Build' : 'Choose Where to Start'}</h2>
            {detail && link ? <SolutionImplementation href={link.href} scope={detail.scope}/> :
              <dl className={styles.directory}>{group.links.map(item => <div key={item.href}>
                <dt><Link href={item.href}>{item.title} <ArrowUpRight size={15} aria-hidden="true"/></Link></dt>
                <dd>{family.details[item.href.slice(group.href.length + 1)].intro}</dd>
              </div>)}</dl>}
          </section>
          <section className={styles.questions} aria-labelledby="prop-questions">
            <h2 id="prop-questions">Before We Start</h2>
            <details><summary>{topic?.question ?? 'Can we start with one part of the journey?'}</summary>
              <p>{topic?.answer ?? 'Yes. We can start with the part your firm needs first, such as evaluation tracking or payout review. We’ll identify which existing systems the first release needs to connect to.'}</p>
            </details>
            <details><summary>What should we bring to the first call?</summary>
              <p>{topic?.brief ?? 'Share your trading platform, challenge rules and current review process. Tell us where your team spends the most time today.'}</p>
            </details>
          </section>
        </div>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
