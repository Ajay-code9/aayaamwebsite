import Link from 'next/link';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';
import { ArrowUpRight, Bot, BookOpen, ChartNoAxesCombined, Workflow } from 'lucide-react';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import { aiServices, aiServicesHref, type AIService } from '@/lib/ai-services';
import styles from './AIServicePage.module.css';

const icons = {
  'ai-agent-development': Bot,
  'generative-ai-solutions': BookOpen,
  'machine-learning': ChartNoAxesCombined,
  'business-process-automation': Workflow,
};

export default function AIServicePage({ service }: { service: AIService }) {
  const Icon = icons[service.slug];

  return <>
    <Navbar/>
    <main className={styles.page} data-service={service.slug}>
      <ArchitectureHero trail={[[ 'Services', '/services' ], [ 'AI & Automation', aiServicesHref ]]}
        label={service.name} title={service.headline} intro={service.intro}
        jump={['See an Example', '#ai-workflow']}
        preview={<ArchitectureSteps title={service.example} steps={service.steps.map(([title]) => title)}/>}
      />

      <section id="ai-workflow" className={styles.workflow} aria-labelledby="ai-workflow-title">
        <div className={styles.workflowTitle}>
          <div><p className={styles.label}>Example Workflow</p><h2 id="ai-workflow-title">{service.example}</h2></div>
          <Icon size={32} aria-hidden="true"/>
        </div>
        <ol>{service.steps.map(([title, detail]) => <li key={title}>
          <span className={styles.node} aria-hidden="true"/>
          <h3>{title}</h3>
          <p>{detail}</p>
        </li>)}</ol>
      </section>

      <section className={styles.offers} aria-labelledby="ai-offers-title">
        <h2 id="ai-offers-title">What We Can Build.</h2>
        <div>{service.offers.map(([title, detail]) => <article key={title}>
          <h3>{title}</h3><p>{detail}</p>
        </article>)}</div>
      </section>

      <section className={styles.contact} aria-labelledby="ai-contact-title">
        <div><h2 id="ai-contact-title">Tell Us Where You Want to Start.</h2><p>{service.brief}</p></div>
        <Link className={styles.primary} href="/company#contact">Share Your AI Requirements <ArrowUpRight size={17} aria-hidden="true"/></Link>
      </section>

      <nav className={styles.related} aria-label="Related AI services">
        {aiServices.filter(item => item.slug !== service.slug).map(item =>
          <Link key={item.slug} href={aiServicesHref + '/' + item.slug}>{item.name}<ArrowUpRight size={16} aria-hidden="true"/></Link>
        )}
      </nav>
    </main>
    <SiteFooter/>
  </>;
}
