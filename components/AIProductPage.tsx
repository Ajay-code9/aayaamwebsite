import Link from 'next/link';
import { ArrowDown, ArrowUpRight, BookOpen, FileText, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import AIProductShowcase from './AIProductShowcase';
import styles from './AIProductPage.module.css';

const useCases = [
  { icon: MessageSquare, title: 'Support Assistants', copy: 'Pull approved billing or product guidance into a draft reply. Give staff the source and a clear handoff when a request needs an exception.', href: '/solutions/ai-business/intelligent-assistants' },
  { icon: FileText, title: 'Document Workflows', copy: 'Extract details from invoices, forms or email attachments. Flag incomplete fields for review before saving information to your business system.', href: '/solutions/ai-business/ai-workflow-automation' },
  { icon: BookOpen, title: 'Internal Knowledge Search', copy: 'Answer staff questions from the policies they can access. Show the original source so people can check the details.', href: '/solutions/ai-business/knowledge-management-systems' },
];

const questions = [
  ['Can it work with our existing systems?', 'We review your help desk, document store or business application and check which records and permissions are available. That determines what the first release can connect to.'],
  ['What happens when the AI is unsure?', 'We agree which requests should go to a person, such as missing policy guidance, incomplete documents or decisions that require approval.'],
  ['How do we judge the first release?', 'Choose a set of real examples and agree what a correct answer looks like. Compare the results with your current process, including how much staff review each output needs.'],
];

export default function AIProductPage({ intro }: { intro: string }) {
  return <>
    <Navbar/>
    <main className={styles.page} data-ai-product="">
      <header className={styles.hero}>
        <div className={styles.shell}>
          <nav className={styles.crumb} aria-label="Breadcrumb"><Link href="/products">Products</Link><span aria-hidden="true">/</span><span aria-current="page">AI-Powered Products</span></nav>
          <div className={styles.heroGrid}>
            <div><h1>Make AI Part of Your <em>Everyday Work.</em></h1><p className={styles.lead}>{intro}</p>
              <div className={styles.actions}><Link className={styles.primary} href="/company#contact">Discuss Your Use Case <ArrowUpRight size={17} aria-hidden="true"/></Link>
              <a href="#ai-product-use-cases">Explore Use Cases <ArrowDown size={16} aria-hidden="true"/></a></div>
            </div>
            <AIProductShowcase/>
          </div>
        </div>
      </header>
      <div className={styles.shell}>
        <section className={styles.useCases} id="ai-product-use-cases" aria-labelledby="ai-cases">
          <h2 id="ai-cases">Start With One Task Your Team Repeats.</h2>
          <div className={styles.cards}>{useCases.map(({ icon: Icon, title, copy, href }) => <article key={title}>
            <Icon size={24} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p>
            <Link href={href}>Explore {title} <ArrowUpRight size={15} aria-hidden="true"/></Link>
          </article>)}</div>
        </section>
        <div className={styles.bottom}>
          <section aria-labelledby="ai-product-faq"><h2 id="ai-product-faq">Common Questions</h2>
            {questions.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </section>
          <section className={styles.brief} aria-labelledby="ai-product-brief">
            <h2 id="ai-product-brief">Bring One Real Example.</h2>
            <p>A support ticket, a document or a question your staff answer often is enough to start. Tell us where the approved information lives and who should review the result.</p>
            <Link className={styles.primary} href="/company#contact">Share Your AI Workflow <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </section>
        </div>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
