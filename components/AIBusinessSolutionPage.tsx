import Link from 'next/link';
import ArchitectureHero from './ArchitectureHero';
import SolutionImplementation from './SolutionImplementation';
import { ArrowRight, ArrowUpRight, BrainCircuit, Check } from 'lucide-react';
import type { SolutionPageData } from '@/lib/solutions';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './AIBusinessSolutionPage.module.css';

const overview = {
  headline: 'Give Your Team a Faster Way to Get Work Done.',
  scenario: 'A support team gets the same billing questions every week. An assistant finds the current policy and drafts a reply. The team reviews the draft before it goes to the customer.',
  input: 'Can I change the email address on my invoices?',
  output: 'Draft ready with the billing policy attached.',
  review: 'A support specialist checks the policy and approves the reply.',
  question: 'Where should we start?',
  answer: 'Pick one frequent task with examples of good and bad outcomes. We can compare the first version against those examples and measure how much review the team still needs.',
  brief: 'Bring a recurring task, a few representative examples and the person who owns the process.',
} as const;

const topics = {
  'intelligent-assistants': {
    headline: 'Give Your Support Team a Head Start on Every Reply.',
    scenario: 'A customer asks about an invoice. The assistant looks up the approved billing guidance and drafts a reply. If it cannot find the relevant policy, it sends the request to staff with the context it did find.',
    input: 'Where can I update my billing email?',
    output: 'Draft reply based on the approved account guide.',
    review: 'Support checks the answer before sending it.',
    question: 'Can we keep staff in control of replies?',
    answer: 'Yes. Start in draft mode and agree when the assistant should hand a request to a person, such as when the source is missing or the customer asks for an exception.',
    brief: 'Bring common support requests, approved answers and the help desk your team uses.',
  },
  'ai-analytics': {
    headline: 'Find Out What Changed in Your Business Data.',
    scenario: 'An operations lead sees a jump in late orders. AI summarises which locations and dates contributed most, then links to the records. The lead checks those records before deciding what caused the change.',
    input: 'Where did late orders increase this week?',
    output: 'A breakdown by location with the order records behind it.',
    review: 'Operations checks the records and investigates the cause.',
    question: 'Will AI calculate the numbers?',
    answer: 'We can keep calculations in your reporting layer and use AI to explain the results in plain language. That keeps the metric definition consistent and gives staff a way to verify the answer.',
    brief: 'Bring one report, its source data and the questions managers ask when the numbers change.',
  },
  'ai-workflow-automation': {
    headline: 'Turn Incoming Documents Into Work Your Team Can Act On.',
    scenario: 'Invoices arrive in a shared inbox. AI pulls out the supplier, invoice number and total. If the total is unreadable or a required field is missing, the invoice goes to staff for review before anything is recorded.',
    input: 'A supplier invoice arrives as a PDF.',
    output: 'Supplier and invoice number found. Total needs review.',
    review: 'Finance checks the amount and approves the update.',
    question: 'What happens when a document is unclear?',
    answer: 'We can route incomplete or uncertain results to a review queue with the original document attached. Your team defines which fields must be verified before data is saved.',
    brief: 'Bring typical documents, the fields you need and the system that should receive approved records.',
  },
  'knowledge-management-systems': {
    headline: 'Help Staff Find the Policy They Can Rely On.',
    scenario: 'A new employee asks how to submit an expense. The system searches the documents that employee can access, shows the relevant steps and links to the policy. If guidance is missing, it can point them to the responsible team.',
    input: 'How do I submit a travel expense?',
    output: 'Steps from the expense policy, with a link to the source.',
    review: 'The employee can open the policy and check the details.',
    question: 'Can answers respect existing document permissions?',
    answer: 'We scope access around the identity and permissions your source systems provide. We also plan what happens when a document is updated, removed or no longer visible to a user.',
    brief: 'Bring your document sources, access rules and the questions employees ask most often.',
  },
} as const;

export default function AIBusinessSolutionPage({ data }: { data: SolutionPageData }) {
  const { group, family, link, detail, title, intro } = data;
  const slug = link?.href.slice(group.href.length + 1) as keyof typeof topics | undefined;
  const topic = (slug && topics[slug]) || overview;

  return <>
    <Navbar/>
    <main className={styles.page} data-ai-business="">
      {link && <ArchitectureHero
        trail={[[ 'Solutions', '/solutions' ], [ group.title, group.href ]]}
        label={title}
        title={topic.headline}
        intro={intro}
        jump={['See What We Build', '#ai-business-scope']}
        preview={<><strong>Example Input</strong><p>{topic.input}</p><strong>AI Output</strong><p>{topic.output}</p></>}
      />}
      <div className={styles.inner}>

        <section className={styles.example} aria-labelledby="ai-business-example">
          <div>
            <p className={styles.label}>Example Workflow</p>
            <h2 id="ai-business-example">How It Works in Practice</h2>
            <p>{topic.scenario}</p>
          </div>
          <dl className={styles.preview}>
            <div><dt>Incoming Work</dt><dd>{topic.input}</dd></div>
            <div><dt><BrainCircuit size={17} aria-hidden="true"/>AI Output</dt><dd>{topic.output}</dd></div>
            <div><dt><Check size={17} aria-hidden="true"/>Team Check</dt><dd>{topic.review}</dd></div>
          </dl>
        </section>

        <section className={styles.scope} aria-labelledby="ai-business-scope">
          <h2 id="ai-business-scope">{detail ? 'What We Can Build' : 'Find the Right AI Solution'}</h2>
          {detail && link ? <SolutionImplementation href={link.href} scope={detail.scope}/> : <ul>{group.links.map(item =>
            <li key={item.href}><Link href={item.href}>{item.title}<ArrowRight size={18} aria-hidden="true"/></Link>
              <p>{family.details[item.href.slice(group.href.length + 1)].intro}</p></li>
          )}</ul>}
        </section>

        <div className={styles.bottom}>
          <section aria-labelledby="ai-business-questions">
            <h2 id="ai-business-questions">Common Questions</h2>
            <details><summary>{topic.question}</summary><p>{topic.answer}</p></details>
            <details><summary>How do we know it is ready to use?</summary><p>We agree on examples to test, what a correct result looks like and when the system should ask for help. Your team can review the results before rollout.</p></details>
          </section>
          <section className={styles.contact} aria-labelledby="ai-business-contact">
            <h2 id="ai-business-contact">What to Bring to the First Call</h2>
            <p>{topic.brief}</p>
            <Link href="/company#contact">Share Your AI Use Case <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </section>
        </div>
        {link && <nav className={styles.related} aria-label="Related AI business solutions">
          {group.links.filter(item => item.href !== link.href).map(item =>
            <Link key={item.href} href={item.href}>{item.title}<ArrowUpRight size={15} aria-hidden="true"/></Link>
          )}
        </nav>}
      </div>
    </main>
    <SiteFooter/>
  </>;
}
