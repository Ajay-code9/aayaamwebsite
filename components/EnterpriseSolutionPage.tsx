import Link from 'next/link';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';
import SolutionImplementation from './SolutionImplementation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { SolutionPageData } from '@/lib/solutions';
import { caseStudyHref } from '@/lib/portfolio';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './EnterpriseSolutionPage.module.css';

const overview = {
  scenario: 'When an Order Changes, Every Team Sees the Update',
  example: 'A customer changes an order after it is confirmed. Support sees the request in the customer record, operations reviews what can be fulfilled, and finance can see the approved change before updating the invoice.',
  steps: ['Support records the change', 'Operations reviews the order', 'Finance sees the approved update'],
  answers: [
    ['Do we need to replace our existing tools?', 'We map where your records live and what each tool can share. That lets us scope an integration, a new workspace or a phased replacement around the workflow you want to improve.'],
    ['What should we start with?', 'Choose one recurring handoff where updates get missed or entered twice. Bring a recent example and the screens or spreadsheets each team uses.'],
  ],
} as const;

const topics = {
  'enterprise-crm': {
    scenario: 'Keep the Customer History With the Account',
    example: 'A customer contacts support after speaking with sales. The support team sees the previous conversation, who owns the account and the next action. The account owner can see the support update without asking for a separate handover.',
    steps: ['Log a customer conversation', 'Assign the next action', 'Show the update to the account team'],
    answers: [
      ['Can we bring over records from our current CRM?', 'We review available exports or APIs, map fields and test a sample migration. Before switching, your team can check which contacts, activities and ownership records came across.'],
      ['Who can see customer information?', 'We define access by role and team. For example, staff can see accounts assigned to them while managers can review activity across their teams.'],
    ],
  },
  'erp-systems': {
    scenario: 'Follow a Purchase From Request to Receipt',
    example: 'A team requests equipment. The budget owner reviews the request, purchasing records the order and receiving marks what arrived. Each team can see what is still open without maintaining its own version of the purchase record.',
    steps: ['Submit a purchase request', 'Approve and record the order', 'Match the delivery to the order'],
    answers: [
      ['What is an ERP system?', 'An enterprise resource planning system connects operational records across teams. The first release might cover purchasing and stock while connecting to your existing accounting tools.'],
      ['Can we launch one module at a time?', 'Yes. We identify which teams and records the first module depends on, test those connections and agree how to move the data before switching over.'],
    ],
  },
  'workflow-automation': {
    scenario: 'Get Requests Out of the Inbox',
    example: 'A new supplier submits its details through a form. The system checks what is missing, sends the request to the right reviewer and records the decision. Staff can see who owns the next action and follow up on overdue requests.',
    steps: ['Collect the request', 'Route it to the right reviewer', 'Record the decision and notify staff'],
    answers: [
      ['Can staff still approve exceptions?', 'Yes. We agree which rules the system should apply automatically and which cases need a person to review, such as a missing document or an unusual request.'],
      ['What happens if an update fails?', 'We can show the failed step, preserve the request history and give an authorised operator a way to review or retry it.'],
    ],
  },
  'business-intelligence': {
    scenario: 'See Where Work Is Getting Stuck',
    example: 'An operations manager sees an increase in late orders. They filter by team or location and open the records behind the number. The dashboard shows when the data was last refreshed so the team knows what period it covers.',
    steps: ['Combine the relevant records', 'Apply agreed metric definitions', 'Open the records behind the number'],
    answers: [
      ['Can we use data from tools we already have?', 'Yes, where those systems provide exports or an API. We map the sources and check how records match before relying on the dashboard for reporting.'],
      ['How often can reports update?', 'It depends on how quickly each source makes new data available and how current the report needs to be. We agree a refresh schedule and show the last successful update.'],
    ],
  },
} as const;

export default function EnterpriseSolutionPage({ data }: { data: SolutionPageData }) {
  const { group, family, link, detail, intro, title } = data;
  const slug = link?.href.slice(group.href.length + 1) as keyof typeof topics | undefined;
  const topic = (slug && topics[slug]) || overview;

  return <>
    <Navbar/>
    <main className={styles.page} data-enterprise="">
      {link && <ArchitectureHero
        trail={[[ 'Solutions', '/solutions' ], [ group.title, group.href ]]}
        label={title}
        title={link ? topic.scenario + '.' : family.headline}
        intro={intro}
        jump={['See What We Build', '#enterprise-scope']}
        preview={<ArchitectureSteps title="Example Workflow" steps={topic.steps}/>}
      />}
      <div className={styles.inner}>

        <section className={styles.scenario} aria-labelledby="enterprise-example">
          <h2 id="enterprise-example">{link ? 'How It Works in Practice' : topic.scenario}</h2><p>{topic.example}</p>
        </section>

        {detail && <section className={styles.scope} aria-labelledby="enterprise-scope">
          <h2 id="enterprise-scope">What We Can Build</h2>
          {link && <SolutionImplementation href={link.href} scope={detail.scope}/>}
        </section>}

        <section className={styles.directory} aria-labelledby="enterprise-directory">
          <h2 id="enterprise-directory">{link ? 'Related Enterprise Solutions' : 'Explore Enterprise Solutions'}</h2>
          <ul>{group.links.filter(item => item.href !== link?.href).map(item => <li key={item.href}>
            <Link href={item.href}>{item.title}<ArrowRight size={18} aria-hidden="true"/></Link>
            {!link && <p>{family.details[item.href.slice(group.href.length + 1)].intro}</p>}
          </li>)}</ul>
        </section>

        <section className={styles.faq} aria-labelledby="enterprise-questions">
          <h2 id="enterprise-questions">Common Questions</h2>
          <div>{topic.answers.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        {!link && <section className={styles.scenario} aria-labelledby="enterprise-work">
          <h2 id="enterprise-work">AayaamX’s Bus Booking Platform</h2>
          <p>We connected a customer booking site, an operations dashboard and a driver portal around shared routes, schedules and bookings.</p>
          <a href={caseStudyHref('bus-booking-admin-management-system')}>Read the Case Study <ArrowUpRight size={17} aria-hidden="true"/></a>
        </section>}
      </div>
    </main>
    <SiteFooter/>
  </>;
}
