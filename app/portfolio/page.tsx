import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: 'Case Studies | AayaamX Technologies',
  description: 'Explore AayaamX projects across Fintech, Blockchain, Custom Software and EdTech.',
};

export default function PortfolioPage() {
  return <>
    <Navbar/>
    <main className="portfolio-page">
      <header className="portfolio-intro">
        <Link href="/#featured-work" className="home-text-link"><ArrowLeft size={16}/> Back to homepage</Link>
        <p className="eyebrow"><span/> ENGINEERED BY AAYAAMX</p>
        <h1>Case Studies.</h1>
        <p>Explore what we built for brokerages, digital payment providers, transport operators and education teams.</p>
      </header>
      <div className="portfolio-grid">
        {caseStudies.map((project, index) => <CaseStudyCard key={project.slug} project={project} index={index}/>)}
      </div>
    </main>
    <SiteFooter/>
  </>;
}
