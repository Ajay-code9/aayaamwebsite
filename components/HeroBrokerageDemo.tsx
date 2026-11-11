'use client';

import { useState } from 'react';
import useCountUp from '@/hooks/useCountUp';
import Link from 'next/link';
import { ArrowDownLeft, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Check, Cloud, Code2, Gauge, LayoutGrid, Layers3, ShieldCheck, Smartphone, Wallet, PanelsTopLeft } from 'lucide-react';
import { caseStudies, caseStudyHref, caseStudyMedia } from '@/lib/portfolio';
import WorkspaceWorkflow from './WorkspaceWorkflow';
import styles from './HeroBrokerageDemo.module.css';

const views = [
  { name: 'Overview', icon: LayoutGrid },
  { name: 'My Accounts', icon: PanelsTopLeft },
  { name: 'Verification', icon: ShieldCheck },
  { name: 'Funds', icon: Wallet },
  { name: 'Reports', icon: ChartNoAxesCombined },
] as const;

type View = (typeof views)[number]['name'];
const projects = [
  { name: 'Project Overview', icon: LayoutGrid, href: '' },
  { name: 'AI & Automation', icon: BrainCircuit, href: '/products/ai-powered' },
  { name: 'Forex & Brokerage', icon: ChartNoAxesCombined, href: '/products/forex-crm' },
  { name: 'Broker Backoffice', icon: ShieldCheck, href: '/products/broker-backoffice' },
  { name: 'Prop Trading', icon: Gauge, href: '/products/prop-trading-management' },
  { name: 'Blockchain & Wallets', icon: Wallet, href: '/products/blockchain-wallet' },
  { name: 'Enterprise SaaS', icon: Layers3, href: '/products/enterprise-saas' },
  { name: 'Web & Custom Software', icon: Code2, href: '/products/custom-product-ecosystems' },
  { name: 'Mobile Apps', icon: Smartphone, href: '/services/software-engineering/mobile-app-development' },
  { name: 'Cloud & APIs', icon: Cloud, href: '/services/cloud-infrastructure' },
] as const;
const accountTypes = ['Real', 'Demo'] as const;
const periods = ['7 Days', '30 Days'] as const;
const chart = {
  '7 Days': [30, 47, 38, 66, 53, 74, 63],
  '30 Days': [35, 47, 29, 51, 43, 61, 55, 72, 60, 86, 72, 79],
};
const verification = ['Profile completed', 'Identity verified', 'Account approved'];
const transactions = [
  ['Deposit', 'Today, 09:30', '+$1,250.00', 'Completed'],
  ['Withdrawal', 'Yesterday, 14:10', '−$320.00', 'In Review'],
  ['Deposit', '18 Oct, 11:42', '+$750.00', 'Completed'],
] as const;

export default function HeroBrokerageDemo() {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState<View>('Overview');
  const [account, setAccount] = useState<(typeof accountTypes)[number]>('Real');
  const [period, setPeriod] = useState<(typeof periods)[number]>('7 Days');
  const project = projects[selected];
  const brokerage = project.href === '/products/forex-crm';
  // Animated count-up for metric numbers
  const balance = useCountUp(24850);
  const equity = useCountUp(25310);

  return <div className={styles.stage}>
    <section className={styles.frame} aria-labelledby="brokerage-demo-title">
      <aside className={styles.sidebar}>
        <div className={styles.brand}><img src="/aayaamx-logo.png" alt="AayaamX Technologies" width="1168" height="359"/></div>
        <div className={styles.menu} role="group" aria-label="Project categories">
          {projects.map(({ name, icon: Icon }, index) => <button key={name} type="button" aria-pressed={selected === index} aria-controls="brokerage-demo-view"
            onClick={() => setSelected(index)}><Icon size={17} aria-hidden="true"/>{name}</button>)}
        </div>
      </aside>

      <div className={styles.main}>
        <header className={styles.top}><h2 id="brokerage-demo-title">AayaamX Project Workspace</h2></header>
        <div id="brokerage-demo-view" className={styles.view} key={selected} role="region" aria-label={project.name} tabIndex={0}>
          {!project.href && <>
            <div className={styles.heading}><div><h3>Explore What We Build</h3><p>Choose a project category to try a sample workflow.</p></div></div>
            <div className={styles.projectGrid}>{projects.slice(1).map(({ name, icon: Icon }, index) =>
              <button type="button" key={name} onClick={() => setSelected(index + 1)}
                aria-controls="brokerage-demo-view"><Icon size={20} aria-hidden="true"/><strong>{name}</strong><ArrowUpRight size={15} aria-hidden="true"/></button>
            )}</div>
            <div className={styles.panel}>
              <h4>Published Projects</h4>
              <div className={styles.previewProjects}>{caseStudies.filter(item => item.slug === 'succeed-capital-fx' || item.slug === 'resvip-travel-booking').map(item =>
                <Link key={item.slug} href={caseStudyHref(item.slug)}>
                  <img src={caseStudyMedia(item.slug).cover.src} alt="" width={1500} height={600} loading="lazy"/>
                  <span>{item.name}<ArrowUpRight size={14} aria-hidden="true"/></span>
                </Link>)}</div>
              <div className={styles.caseLinks}>{caseStudies.filter(item => item.slug !== 'succeed-capital-fx' && item.slug !== 'resvip-travel-booking').map(item => <a key={item.slug} href={caseStudyHref(item.slug)}>{item.name}<ArrowUpRight size={14} aria-hidden="true"/></a>)}</div>
            </div>
          </>}
          {!brokerage && project.href && <WorkspaceWorkflow name={project.name} href={project.href} icon={project.icon}/>}
          {brokerage && <>
          <div className={styles.heading}><div><h3>Forex &amp; Brokerage</h3><p>Simulated trading workspace</p></div><Link href={project.href}>Explore Platform <ArrowUpRight size={15} aria-hidden="true"/></Link></div>
          <div className={styles.filters} role="group" aria-label="Brokerage dashboard views">{views.map(({ name }) =>
            <button type="button" key={name} aria-pressed={view === name} onClick={() => setView(name)}>{name}</button>
          )}</div>
          <div className={styles.heading}>
            <div><h3>{view === 'Overview' ? 'Account Overview' : view}</h3><p>Sample account · AX-1042</p></div>
            {view === 'Overview' && <span className={styles.status}><ShieldCheck size={15} aria-hidden="true"/> Verified</span>}
          </div>

          {view === 'Overview' && <>
            <div className={styles.metrics}>
              <article><Wallet size={21} aria-hidden="true"/><p>Total Balance</p><strong>${balance}</strong></article>
              <article><ChartNoAxesCombined size={21} aria-hidden="true"/><p>Account Equity</p><strong>${equity}</strong></article>
              <article><PanelsTopLeft size={21} aria-hidden="true"/><p>Trading Accounts</p><strong>2</strong></article>
            </div>
            <div className={styles.panel}><h4>Recent Activity</h4><div className={styles.row}><span>Account verification completed</span><span className={styles.status}>Complete</span></div>
              <div className={styles.row}><span>Deposit received</span><strong>+$1,250.00</strong></div></div>
          </>}

          {view === 'My Accounts' && <div className={styles.panel}>
            <div className={styles.filters} role="group" aria-label="Account type">{accountTypes.map(type =>
              <button type="button" key={type} aria-pressed={type === account} onClick={() => setAccount(type)}>{type}</button>)}</div>
            <div className={styles.row}><div><h4>{account === 'Real' ? 'Standard Trading Account' : 'Practice Trading Account'}</h4>
              <p>{account === 'Real' ? 'AX-1042 · USD' : 'AX-D208 · Virtual USD'}</p></div><strong>{account === 'Real' ? '$24,850.00' : '$50,000.00'}</strong></div>
          </div>}

          {view === 'Verification' && <div className={styles.panel}>
            <h4>Verification Progress</h4>
            {verification.map(item => <div className={styles.row} key={item}><span>{item}</span><span className={styles.status}><Check size={15} aria-hidden="true"/> Complete</span></div>)}
          </div>}

          {view === 'Funds' && <div className={styles.panel}>
            <h4>Transaction History</h4>
            {transactions.map(([kind, date, amount, state]) => <div className={styles.row} key={date}>
              <div className={styles.transaction}>{kind === 'Deposit' ? <ArrowDownLeft size={17} aria-hidden="true"/> : <ArrowUpRight size={17} aria-hidden="true"/>}
                <div><strong>{kind}</strong><p>{date}</p></div></div><strong>{amount}</strong><span className={state === 'Completed' ? styles.status : styles.pending}>{state}</span>
            </div>)}
          </div>}

          {view === 'Reports' && <div className={styles.panel}>
            <div className={styles.reportHeading}><h4>Account Activity</h4><div className={styles.filters} role="group" aria-label="Report date range">{periods.map(item =>
              <button type="button" key={item} aria-pressed={item === period} onClick={() => setPeriod(item)}>{item}</button>)}</div></div>
            <div className={styles.chart} role="img" aria-label={`Illustrative account activity for the last ${period.toLowerCase()}`}>
              {chart[period].map((height, index) => <span key={index} style={{ height: `${height}%` }}/>)}
            </div>
          </div>}
          </>}
        </div>
      </div>
    </section>
  </div>;
}
