import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import { caseStudies, caseStudyMedia, succeedCapitalPortalFeatures } from '@/lib/portfolio';
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
          <dl><dt>{project.architecture[1]}</dt><dd>{project.architecture[0]}</dd></dl>
          <Link href="/company#contact" className="home-text-link">Discuss a Similar Project <ArrowUpRight size={16} aria-hidden="true"/></Link>
        </section>
      </div>
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
