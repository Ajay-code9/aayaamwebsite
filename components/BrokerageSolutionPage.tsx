import Link from 'next/link';
import SolutionImplementation from './SolutionImplementation';
import { ArrowUpRight } from 'lucide-react';
import type { SolutionPageData } from '@/lib/solutions';
import { caseStudyHref } from '@/lib/portfolio';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './BrokerageSolutionPage.module.css';
import ArchitectureHero from './ArchitectureHero';
import { solutionDelivery } from '@/lib/solution-delivery';

const topics = {
  'broker-infrastructure': {
    questions: [
      ['Can you work with our existing trading platform?', 'Yes, where the platform provides the required interfaces. We review how your terminal, client portal and backend exchange account and order information before proposing changes.'],
      ['What can our operations team see?', 'Depending on the available data, the team can track account setup, order status and risk activity from internal dashboards.'],
    ],
    brief: 'Share your trading platform, current systems and the account or order information that needs to move between them.',
  },
  'brokerage-crm-ecosystem': {
    questions: [
      ['What is a brokerage CRM?', 'It is the workspace your team uses to manage client applications, identity checks and trading accounts. A separate client portal lets traders submit documents and track progress.'],
      ['Can we connect our verification and payment providers?', 'We can scope those connections around the providers you use, the information they make available and the steps your team needs to review.'],
    ],
    brief: 'Share how clients sign up today, which providers you use and where staff are entering the same information twice.',
  },
  'ib-and-affiliate-management': {
    questions: [
      ['What does IB mean?', 'An introducing broker is a partner who refers clients to a brokerage. The software records referrals and gives partners and staff a view of referral activity.'],
      ['Who sets commission and payout rules?', 'Your brokerage defines the rules. We build the software that applies them, shows how amounts were calculated and routes exceptions for review.'],
    ],
    brief: 'Share your partner tiers, how referrals are tracked today and how commissions are reviewed and paid.',
  },
} as const;

const overviewQuestions = [
  ['Can we keep the tools we already use?', 'We start by reviewing your trading platform, CRM and providers. The interfaces and data they expose determine what can be connected and what needs separate work.'],
  ['Can we start with one part of the brokerage?', 'Yes. Start with the problem you need to solve first, such as onboarding or partner reporting, and agree which systems the first release needs to connect.'],
  ['What does AayaamX provide?', 'AayaamX provides software development, technical architecture and implementation. Your brokerage handles regulated activities and operating decisions.'],
] as const;

export default function BrokerageSolutionPage({ data }: { data: SolutionPageData }) {
  const { group, family, link, detail, title, intro } = data;
  const slug = link?.href.slice(group.href.length + 1) as keyof typeof topics | undefined;
  const topic = slug ? topics[slug] : undefined;
  const questions = topic?.questions ?? overviewQuestions;
  const isInfrastructure = slug === 'broker-infrastructure';

  return <>
    <Navbar/>
    <main className={styles.page} data-brokerage="">
      {link && <ArchitectureHero
        trail={[[ 'Solutions', '/solutions' ], [ group.title, group.href ]]}
        label={title}
        title={isInfrastructure ? "Connect the Systems Your Brokerage Runs On." : title}
        intro={intro}
        jump={['See First-Release Scope', '#brokerage-options']}
        preview={<><strong>Example Workflow</strong><p>{solutionDelivery[slug ?? '']?.[0]}</p></>}
      />}
      <div className={styles.inner}>
        <section className={styles.options} id="brokerage-options" aria-labelledby="brokerage-options-title">
          <h2 id="brokerage-options-title">{detail ? 'What We Can Build' : 'Where Do You Need Help?'}</h2>
          {detail && link ? <SolutionImplementation href={link.href} scope={detail.scope}/> :
            <ul>{group.links.map(item => <li key={item.href}>
              <Link href={item.href}>{item.title}<ArrowUpRight size={17} aria-hidden="true"/></Link>
              <p>{family.details[item.href.slice(group.href.length + 1)].intro}</p>
            </li>)}</ul>}
        </section>

        <div className={styles.grid}>
          <section className={styles.faq} aria-labelledby="brokerage-faq">
            <h2 id="brokerage-faq">Common Questions</h2>
            {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </section>
          <section className={styles.contact} aria-labelledby="brokerage-contact">
            <h2 id="brokerage-contact">What to Bring to the First Call</h2>
            <p>{topic?.brief ?? 'Share what you want to improve, the tools you use today and which teams need access. We can use that to define the first release.'}</p>
            <Link href="/company#contact">Discuss Your Brokerage Requirements <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </section>
        </div>

        {!link && <section className={styles.proof} aria-labelledby="brokerage-proof">
          <h2 id="brokerage-proof">Succeed Capital FX</h2>
          <p>AayaamX connected the brokerage website, CRM and web and mobile trading apps to a shared backend with dedicated risk monitoring.</p>
          <a href={caseStudyHref('succeed-capital-fx')}>Read the Case Study <ArrowUpRight size={16} aria-hidden="true"/></a>
        </section>}

        {link && <nav className={styles.related} aria-label="Related brokerage solutions">
          {group.links.filter(item => item.href !== link.href).map(item => <Link key={item.href} href={item.href}>{item.title}<ArrowUpRight size={16} aria-hidden="true"/></Link>)}
        </nav>}
      </div>
    </main>
    <SiteFooter/>
  </>;
}
