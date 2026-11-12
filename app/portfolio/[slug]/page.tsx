import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import { caseStudies, caseStudyDeliveryFacts, caseStudyMedia, succeedCapitalPortalFeatures } from '@/lib/portfolio';
import { caseStudyExtendedDetails } from '@/lib/caseStudyDetails';
import styles from './page.module.css';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find(item => item.slug === slug);
  if (!project) notFound();
  return { title: `${project.name} | AayaamX Case Studies`, description: project.summary };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = caseStudies.find(item => item.slug === slug);
  if (!project) notFound();
  const { cover, gallery } = caseStudyMedia(project.slug);
  const details = caseStudyExtendedDetails[project.slug];

  return <>
    <Navbar/>
    <main className={styles.page}>
      <Link href="/portfolio" className="home-text-link"><ArrowLeft size={16} aria-hidden="true"/> All Case Studies</Link>
      <header className={styles.header}>
        <p className="eyebrow"><span/> {project.category}</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </header>
      <div className={styles.overview}>
        <figure><img src={cover.src} alt={cover.caption} width={cover.width} height={cover.height}/></figure>
        <section aria-labelledby="case-study-scope" className={styles.scope}>
          <h2 id="case-study-scope">What We Built</h2>
          <ul>{project.scope.map(item => <li key={item}>{item}</li>)}</ul>
          <Link href="/company#contact" className="home-text-link">Discuss a Similar Project <ArrowUpRight size={16} aria-hidden="true"/></Link>
        </section>
      </div>
      {/* Challenge & Solution Deep Dive */}
      {details && <div className={styles.deepDive}>
        <article className={styles.narrativeCard}>
          <h3>The Challenge</h3>
          <p>{details.challenge}</p>
        </article>
        <article className={styles.narrativeCard}>
          <h3>Our Engineering Solution</h3>
          <p>{details.solution}</p>
        </article>
      </div>}

      {/* Measurable Project Impact */}
      {details?.impactMetrics && <section className={styles.metricsSection} aria-labelledby="project-impact-title">
        <h2 id="project-impact-title">Impact & Performance Benchmarks</h2>
        <div className={styles.metricsGrid}>
          {details.impactMetrics.map(([metric, value]) => (
            <div key={metric} className={styles.metricCard}>
              <span className={styles.metricVal}>{value}</span>
              <span className={styles.metricLbl}>{metric}</span>
            </div>
          ))}
        </div>
      </section>}

      <section className={styles.gallery} aria-labelledby="case-study-delivery">
        <h2 id="case-study-delivery">Delivery at a Glance</h2>
        <dl className={styles.deliveryFacts}>
          {[project.architecture, ...caseStudyDeliveryFacts[project.slug]].map(([label, detail]) => (
            <div key={label} className={styles.scope}>
              <dt>{label}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Core Architectural Capabilities */}
      {details?.keyCapabilities && <section className={styles.gallery} aria-labelledby="key-capabilities-title">
        <h2 id="key-capabilities-title">Key Architectural Capabilities</h2>
        <div className={styles.featureGrid}>
          {details.keyCapabilities.map(([capTitle, capDesc]) => (
            <article className={styles.scope} key={capTitle}>
              <h3>{capTitle}</h3>
              <p>{capDesc}</p>
            </article>
          ))}
        </div>
      </section>}

      {/* Engineering Stack */}
      {details?.technicalStack && <section className={styles.gallery} aria-labelledby="tech-stack-title">
        <h2 id="tech-stack-title">Technologies & Infrastructure</h2>
        <div className={styles.techTags}>
          {details.technicalStack.map(tech => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      </section>}

      {project.slug === 'succeed-capital-fx' && <section className={styles.gallery} aria-labelledby="brokerage-portal-features">
        <h2 id="brokerage-portal-features">How the Client Portal Works</h2>
        <div className={styles.featureGrid}>
          {succeedCapitalPortalFeatures.map(([title, description]) => <article className={styles.scope} key={title}>
            <h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
        <p className={styles.source}><a href="https://www.succeedcapitalfx.com/platform">Succeed Capital FX platform overview</a></p>
      </section>}
      {gallery.length > 0 && <section className={styles.gallery} aria-labelledby="case-study-screens">
        <h2 id="case-study-screens">Inside the Product</h2>
        {gallery.map(screen => <figure key={screen.src} className={screen.height > screen.width ? styles.portrait : undefined}>
          <img src={screen.src} alt="" width={screen.width} height={screen.height} loading="lazy"/>
          <figcaption>{screen.caption}</figcaption>
        </figure>)}
      </section>}
    </main>
    <SiteFooter/>
  </>;
}
