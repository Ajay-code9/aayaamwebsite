import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import styles from './ArchitectureHero.module.css';

export default function ArchitectureHero({
  trail, label, title, intro, jump, preview,
}: {
  trail: readonly (readonly [title: string, href: string])[];
  label: string;
  title: string;
  intro: string;
  jump: readonly [label: string, href: string];
  preview: ReactNode;
}) {
  return <header className={styles.hero} data-architecture-hero="">
    <div className={styles.shell}>
      <nav className={styles.crumb} aria-label="Breadcrumb">
        {trail.map(([name, href]) => <span key={href}><Link href={href}>{name}</Link><span aria-hidden="true">/</span></span>)}
        <span aria-current="page">{label}</span>
      </nav>
      <div className={styles.grid}>
        <div>
          <h1>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          <div className={styles.actions}>
            <Link href="/company#contact">Discuss Your Project <ArrowUpRight size={16} aria-hidden="true"/></Link>
            <a href={jump[1]}>{jump[0]} <ArrowDown size={16} aria-hidden="true"/></a>
          </div>
        </div>
        <div className={styles.preview}>{preview}</div>
      </div>
    </div>
  </header>;
}

export function ArchitectureSteps({ title, steps }: { title: string; steps: readonly string[] }) {
  return <div className={styles.steps}>
    <strong>{title}</strong>
    <ol>{steps.map((step, index) => <li key={step}><span aria-hidden="true">{index + 1}</span>{step}</li>)}</ol>
  </div>;
}

export function ArchitectureTechnicalDetails({ children }: { children: ReactNode }) {
  return <details className={styles.technical}>
    <summary>View Technical Details</summary>
    <div>{children}</div>
  </details>;
}
