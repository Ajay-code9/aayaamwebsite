'use client';
import Link from 'next/link';
import {useRef,useState} from 'react';
import {useInView} from 'framer-motion';
import {ArrowUpRight,ArrowRight,BrainCircuit,ChartNoAxesCombined,Layers3,Code2,Wallet,Compass,ShieldCheck,Check,Rocket,Send,Network,Database,ClipboardList,Monitor} from 'lucide-react';
import {verticals} from '@/lib/homepage';
import {company} from '@/lib/company';
import {caseStudies,caseStudyHref} from '@/lib/portfolio';
import CaseStudyCarousel from './CaseStudyCarousel';

function ProjectLogoBackground() {
  return <div className="cta-infinity" aria-hidden="true">
    <img src="/aayaamx-infinity.png" alt="" width="460" height="297" loading="eager"/>
  </div>;
}
const capabilityCopy = [
  ['AI & Automation', 'Build AI Agents, Machine Learning Pipelines and Workflow Automation for tasks like processing documents and drafting replies.', 'Operations, Support & Customer Service Teams'],
  ['Trading & Brokerage', 'Build Trading Terminals, Forex CRMs and Prop Trading Engines that connect client accounts with daily trading operations.', 'Forex Brokers, Prop Trading Firms & FinTech Teams'],
  ['Blockchain & Payments', 'Build Smart Contracts, Crypto Exchanges and Web3 payment workflows that track digital assets from deposit to settlement.', 'Crypto Exchanges, Payment Providers & Web3 Teams'],
  ['Custom Software', 'Develop Enterprise Platforms, Customer Portals and Mobile Apps around the way your teams and customers work.', 'SaaS Companies, Startups & Enterprise Teams'],
  ['Cloud & API Engineering', 'Build Microservices, REST APIs and WebSocket Streams for applications that process high volumes of data.', 'Product, Platform & Engineering Teams'],
];
const capabilityIcons = [BrainCircuit, ChartNoAxesCombined, Wallet, Code2, Network];
const capabilityPhotos = [
  'ai-automation',
  'trading-brokerage',
  'blockchain-payments',
  'custom-software',
  'cloud-api',
] as const;

function CapabilityCard({index,href}:{index:number;href:string}) {
  const [title,description,audience] = capabilityCopy[index];
  const Icon = capabilityIcons[index];

  return <article className="ecosystem-card reveal-block" data-capability={index}>
    <div className="capability-top-bar">
      <span className="capability-category-badge" aria-hidden="true">
        <Icon size={16} strokeWidth={2}/>
        <span>0{index + 1}</span>
      </span>
      <Link href={href} className="capability-arrow-btn" aria-label={`Explore ${title}`}>
        <ArrowUpRight size={17} strokeWidth={2}/>
      </Link>
    </div>
    <div className="capability-copy">
      <h3><Link href={href}>{title}</Link></h3>
      <p>{description}</p>
      <div className="capability-audience">
        <strong>Who it’s for</strong>
        <span>{audience}</span>
      </div>
    </div>
    <div className="capability-visual">
      <img className="capability-photo" src={`/capabilities/${capabilityPhotos[index]}.webp`} alt={title} width={1200} height={675} loading="lazy" decoding="async"/>
    </div>
  </article>;
}

const platformTools = [
  ['GitHub', 'github'], ['Redis', 'redis'], ['GraphQL', 'graphql'],
  ['React', 'react'], ['Node.js', 'nodejs'], ['TypeScript', 'typescript'],
  ['Python', 'python'], ['PostgreSQL', 'postgresql'], ['Next.js', 'nextjs'],
  ['Three.js', 'threejs'],
  ['JavaScript', 'javascript'], ['HTML5', 'html5'], ['CSS3', 'css3'],
  ['Tailwind CSS', 'tailwindcss'], ['Docker', 'docker'], ['Kubernetes', 'kubernetes'], ['AWS', 'aws'],
];

function TechnologyStack() {
  return <div className="tech-stack" role="group" aria-labelledby="tech-stack-title">
    <p className="eyebrow"><span/> TECHNOLOGIES WE USE</p>
    <h3 id="tech-stack-title">The Tools Behind What We Build.</h3>
    <div className="tech-stack-window" tabIndex={0} aria-label="Technology logos">
      <div className="tech-stack-track">
        {[false,true].map(copy => <ul key={String(copy)} aria-hidden={copy || undefined}>
          {platformTools.map(([name, slug]) => <li key={slug}>
            <img src={'/technology/' + slug + '.svg'} alt="" width="32" height="32" loading="lazy" decoding="async"/>
            <strong>{name}</strong>
          </li>)}
        </ul>)}
      </div>
    </div>
  </div>;
}
const workSteps = [
  {title:'Plan', icon:Compass, detail:'Define the requirements, scope and milestones before development starts.'},
  {title:'Build', icon:Layers3, detail:'Review working software in demos while we test features and integrations.'},
  {title:'Launch', icon:Rocket, detail:'Deploy the product, hand it over to your team and support it after launch.'},
];

function WorkOverview() {
  const steps = useRef<HTMLOListElement>(null);
  const visible = useInView(steps,{amount:.2,once:true});

  return <section id="work-overview" className="home-section work-overview" aria-labelledby="work-overview-title">
    <div className="work-overview-heading reveal-block">
      <Link className="work-overview-tag" href="/company#our-approach"><ArrowUpRight size={14}/> Our work process</Link>
      <h2 id="work-overview-title">Your idea. Built to grow.</h2>
      <p>Three simple steps from your first conversation to launch.</p>
    </div>
    <ol className="work-overview-steps" ref={steps} data-live={visible}>
      {workSteps.map(({title,icon:Icon,detail},index) => <li key={title} className="work-overview-step reveal-block" style={{'--step-delay':index * 1.45 + 's'} as React.CSSProperties}>
        <div className="work-overview-copy"><h3>{title}</h3><p>{detail}</p></div>
        <div className="work-overview-icon"><Icon size={26} strokeWidth={1.7}/><span aria-hidden="true">0{index + 1}</span></div>
        {index < 2 && <svg className="work-overview-arrow" viewBox="0 0 220 64" fill="none" aria-hidden="true">
          <path d={index === 0 ? 'M4 55C64-2 145-2 214 55m-14-2 14 2-2-14' : 'M4 9c63 56 145 56 210 0m-14 1 14-1-2 14'}/>
          <path className="work-overview-signal" pathLength="1" d={index === 0 ? 'M4 55C64-2 145-2 214 55' : 'M4 9c63 56 145 56 210 0'}/>
        </svg>}
      </li>)}
    </ol>
  </section>;
}
function FeaturedWork() {
  return <section id="featured-work" className="home-section featured-work" aria-labelledby="featured-work-title">
    <div className="featured-work-heading reveal-block">
      <div><div className="eyebrow"><span/> SELECTED WORK</div><h2 id="featured-work-title">Engineered by AayaamX.</h2></div>
      <Link className="home-text-link" href="/portfolio">View all case studies <ArrowUpRight size={17}/></Link>
    </div>
    <CaseStudyCarousel/>
    <div className="portfolio-evidence reveal-block" aria-labelledby="portfolio-evidence-title">
      <div className="portfolio-evidence-intro">
        <p className="eyebrow"><span/> PROJECT EVIDENCE</p>
        <h3 id="portfolio-evidence-title">Measurable Track Record.</h3>
      </div>
      <dl className="portfolio-evidence-stats" aria-describedby="portfolio-evidence-source">
        <div><dt>Products Engineered</dt><dd>120+</dd></div>
        <div><dt>Volume Processed</dt><dd>$380M+</dd></div>
        <div><dt>System Uptime SLA</dt><dd>99.97%</dd></div>
        <div><dt>Enterprise Clients</dt><dd>43+</dd></div>
      </dl>
      <p id="portfolio-evidence-source" className="portfolio-evidence-source">Company-reported figures. Explore {caseStudies.length} published case studies across {new Set(caseStudies.map(project => project.category)).size} project categories.</p>
      <a className="portfolio-evidence-example" href={caseStudyHref('solitaire-markets')}>
        <span>ENGINEERING EXAMPLE</span>
        <strong>FIX 4.4 Execution Engine <ArrowUpRight size={16} aria-hidden="true"/></strong>
        <small>Built for order routing and execution at Solitaire Markets.</small>
      </a>
    </div>
  </section>;
}
const reasonsToChooseAayaamX = [
  {icon:ChartNoAxesCombined, title:'Experience with complex products', detail:'Our portfolio includes Broker CRMs, Trading Platforms with dedicated execution engines, and multi-chain payment gateways.', label:'See the case studies', href:'/portfolio', example:'How a trade gets executed', steps:['Trader places order','Engine routes it','Broker confirms']},
  {icon:Code2, title:'Software built around your workflows', detail:'We build customer portals, mobile apps and internal tools around the tasks your users and teams need to get done.', label:'Explore Software Engineering', href:'/services/software-engineering', example:'How a portal handles a request', steps:['Customer submits','Team reviews','Status updates']},
  {icon:Layers3, title:'Systems that work together', detail:'We connect new applications to existing systems through APIs and shared data, so teams can work across tools without re-entering information.', label:'Explore Cloud & Infrastructure', href:'/services/cloud-infrastructure', example:'How tools share an update', steps:['App records change','API shares data','CRM stays current']},
];

function WhyAayaamX() {
  const [selected, setSelected] = useState(0);
  const example = useRef<HTMLDivElement>(null);
  const exampleVisible = useInView(example,{once:true,amount:.35});
  const reason = reasonsToChooseAayaamX[selected];
  const stepIcons = [[Send,Network,ShieldCheck],[ClipboardList,Check,Monitor],[Monitor,Network,Database]][selected];

  return <section id="why-aayaamx" className="home-section why-aayaamx" aria-labelledby="why-aayaamx-title">
    <div className="why-aayaamx-intro reveal-block">
      <p className="eyebrow"><span/> WHY AAYAAMX</p>
      <h2 id="why-aayaamx-title">An engineering partner for complex software.</h2>
      <p>Work with a team that understands the product your customers see and the systems behind it.</p>
    </div>
    <ul className="why-aayaamx-list">
      {reasonsToChooseAayaamX.map(({icon:Icon,title,detail,label,href},index) => <li key={title} className="reveal-block" data-selected={selected === index}>
        <span className="why-aayaamx-icon" aria-hidden="true"><Icon size={22}/></span>
        <div>
          <h3><button type="button" aria-pressed={selected === index} aria-controls="why-aayaamx-example" onClick={() => setSelected(index)}>{title}</button></h3>
          <p>{detail}</p>
          <Link className="home-text-link" href={href}>{label}<ArrowUpRight size={16}/></Link>
        </div>
      </li>)}
    </ul>
    <div ref={example} className="why-aayaamx-example" id="why-aayaamx-example" aria-live="polite" data-visible={exampleVisible}>
      <div key={selected} className="why-aayaamx-example-content">
        <p className="eyebrow"><span/> EXAMPLE WORKFLOW</p>
        <h3>{reason.example}</h3>
        <ol>
          {reason.steps.map((step,index) => {
            const StepIcon = stepIcons[index];
            return <li key={step} style={{'--step-order':index} as React.CSSProperties}>
              <span className="why-flow-icon" aria-hidden="true"><StepIcon size={19}/></span>
              <strong>{step}</strong>
            </li>;
          })}
        </ol>
      </div>
    </div>
  </section>;
}

export default function HomepageSections({onContact}:{onContact:()=>void}){
 return <div className="homepage-sections">
 <FeaturedWork/>
 <section id="ecosystem" className="home-section ecosystem-section" aria-labelledby="capabilities-title">
  <div className="home-section-heading"><h2 id="capabilities-title">What We Build.</h2><p>From AI Agents and Trading Engines to Enterprise Platforms, Web3 Applications and the Cloud APIs that connect them.</p></div>
  <div className="ecosystem-map">
    {[...verticals.map(({href}) => href), '/services/cloud-infrastructure'].map((href,index) => <CapabilityCard key={href} index={index} href={href}/>)}
  </div>
  <TechnologyStack/>
 </section>
 <WorkOverview/>
 <WhyAayaamX/>
 <section id="start-project" className="home-section final-cta-section"><div className="final-cta"><div className="eyebrow"><span/> YOUR NEXT CHAPTER</div><h2>Have an Idea?<br/><span>Let’s Engineer It.</span></h2><p>Tell us what you want to build, who will use it and what it needs to connect to. We’ll help define the scope and next steps.</p><div className="final-cta-actions"><button className="primary-button" onClick={onContact}>Start a Project<ArrowRight size={17}/></button><Link className="home-text-link" href="/company#contact">Contact Our Team<ArrowUpRight size={17}/></Link></div><p className="project-contact"><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phoneHref}`}>{company.phone}</a></p><ProjectLogoBackground/></div></section>
 </div>;
}



































