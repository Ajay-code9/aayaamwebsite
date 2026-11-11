import { Mail, MapPin, Phone } from 'lucide-react';
import { ProjectBriefForm } from './ProjectEnquiry';
import { company } from '@/lib/company';
import styles from './CompanyPage.module.css';

export const contactIntro = 'Tell us what you want to build, who will use it and which tools it needs to connect to. Share any timeline or constraints that will shape the first release.';

export default function ContactContent() {
  return <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
    <header className={styles.sectionHead}>
      <p className={styles.label}>Contact Us</p>
      <h2 id="contact-title">Tell Us What You Want to Build.</h2>
      <p>{contactIntro}</p>
    </header>
    <div className={styles.contactGrid}>
      <section className={styles.note} aria-labelledby="contact-details">
        <h3 id="contact-details">Contact Details</h3>
        <p><a href={`mailto:${company.email}`}><Mail size={17} aria-hidden="true"/>{company.email}</a></p>
        <p><a href={`tel:${company.phoneHref}`}><Phone size={17} aria-hidden="true"/>{company.phone}</a></p>
        <h3><MapPin size={17} aria-hidden="true"/> Registered Office</h3>
        <address>{company.address}, India</address>
        <h3>Business Hours</h3>
        <p>{company.hours}<br/>{company.closed}</p>
      </section>
      <section className={styles.formCard} aria-labelledby="contact-brief">
        <h3 id="contact-brief">Prepare a Project Brief</h3>
        <p>Start with one workflow, a product idea or an existing system you want to improve. Review your brief in your email app before sending.</p>
        <ProjectBriefForm/>
      </section>
    </div>
  </section>;
}
