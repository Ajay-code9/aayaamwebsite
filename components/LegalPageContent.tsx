import Link from 'next/link';
import { Mail, ShieldCheck } from 'lucide-react';
import { legalContact, legalPages, type LegalPage } from '@/lib/legal-pages';
import styles from './LegalPageContent.module.css';

export default function LegalPageContent({ page }: { page: LegalPage }) {
  const isPrivacy = page.href === '/legal/privacy-policy';

  return <article className={styles.document} data-privacy-policy={isPrivacy || undefined}>
    <header>
      {isPrivacy && <span className={styles.heroIcon}><ShieldCheck size={29} strokeWidth={1.65} aria-hidden="true"/></span>}
      <h1>{page.title}</h1><p>{page.description}</p>
    </header>
    <div className={styles.layout}>
      {page.sections.length > 0 && <nav aria-label="On this page" className={styles.index}>
        <strong>On This Page</strong>
        <ul>{page.sections.map(([id, title]) => <li key={id}><a href={'#' + id}>{title}</a></li>)}</ul>
      </nav>}
      <div>
        {page.sections.map(([id, title, ...paragraphs]) => <section key={id} className={styles.section} aria-labelledby={id}>
          <h2 id={id}>{title}</h2>{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
        <section className={`${styles.section} ${styles.contact}`} aria-labelledby="legal-contact">
          <h2 id="legal-contact">Contact</h2>
          <p>Aayaam Nextgen Technologies Private Limited</p>
          <address>{legalContact.address}, India</address>
          <p><a href={'mailto:' + legalContact.email}>{isPrivacy && <Mail size={17} aria-hidden="true"/>}{legalContact.email}</a></p>
        </section>
        <nav className={styles.related} aria-label="Related legal pages">
          {legalPages.filter(item => item.href !== page.href).map(item => <Link key={item.href} href={item.href}>{item.title}</Link>)}
        </nav>
      </div>
    </div>
  </article>;
}
