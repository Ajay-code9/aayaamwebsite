'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import HomepageSections from './HomepageSections';
import ProjectEnquiry from './ProjectEnquiry';
import HeroBrokerageDemo from './HeroBrokerageDemo';
import CursorGlow from './CursorGlow';
import MarqueeStats from './MarqueeStats';
import NetflixIntro from './NetflixIntro';

// "Software That Powers Your Growth."
// Plain words animate first; em words animate in accent green
const HEADLINE_PLAIN = ['Software', 'That', 'Powers'];
const HEADLINE_EM = ['Your', 'Growth.'];
const ALL_WORDS = [...HEADLINE_PLAIN, ...HEADLINE_EM];

export default function Homepage() {
  const [contact, setContact] = useState(false);

  return <>
    <NetflixIntro />
    <CursorGlow />
    <Navbar/>
    <main className="editorial-home">
      <section className="product-hero" aria-labelledby="product-hero-title">
        <div className="product-hero-inner">
          <div className="product-hero-copy">
            <h1 id="product-hero-title" className="kinetic-headline">
              {HEADLINE_PLAIN.map((word, i) => (
                <span key={word} style={{ animationDelay: `${i * 0.08}s` }}>{word} </span>
              ))}
              <em>
                {HEADLINE_EM.map((word, i) => (
                  <span
                    key={word}
                    className="kinetic-em"
                    style={{ animationDelay: `${(HEADLINE_PLAIN.length + i) * 0.08}s` }}
                  >
                    {word}{i < HEADLINE_EM.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </em>
            </h1>
            <p className="product-hero-intro">AayaamX builds AI Applications, Trading Platforms, Blockchain Solutions and Custom Enterprise Software. We take your product from planning through launch and ongoing support.</p>
            <div className="product-hero-actions">
              <button type="button" onClick={() => setContact(true)}>Request a Technical Consultation <ArrowUpRight size={16} aria-hidden="true"/></button>
              <Link href="#featured-work">View Case Studies <ArrowUpRight size={18} aria-hidden="true"/></Link>
            </div>
          </div>
          <HeroBrokerageDemo/>
        </div>
      </section>
      <MarqueeStats />
      <HomepageSections onContact={() => setContact(true)}/>
    </main>
    <ProjectEnquiry open={contact} onClose={() => setContact(false)}/>
  </>;
}
