'use client';

import { useState } from 'react';
import { ArrowRight, Check, Shield, Wallet, Users } from 'lucide-react';
import styles from './BackofficeProductPage.module.css';

const queues = [
  { name: 'Funding', icon: Wallet, reference: 'FND-2048', title: 'Deposit needs matching', details: [['Account', 'TR-1082'], ['Amount', 'USD 2,500.00'], ['Provider', 'Reference matched']], action: 'Approve Match', done: 'Match approved', note: 'Compare the provider reference with the account request before marking the deposit as matched.' },
  { name: 'Accounts', icon: Users, reference: 'ACC-1082', title: 'Application ready for review', details: [['Account', 'TR-1082'], ['Application', 'Documents received'], ['Verification', 'Provider result available']], action: 'Complete Review', done: 'Review completed', note: 'Check the application and provider result before handing the account to the onboarding team.' },
  { name: 'Risk', icon: Shield, reference: 'RSK-0316', title: 'Exposure threshold reached', details: [['Account', 'TR-1136'], ['Alert', 'Exposure review'], ['Owner', 'Risk operations']], action: 'Acknowledge Alert', done: 'Alert acknowledged', note: 'Acknowledge the alert to record that a risk operator has seen it. The underlying exposure remains visible.' },
] as const;

export default function BackofficeDesk() {
  const [active, setActive] = useState(0);
  const [reviewed, setReviewed] = useState<number[]>([]);
  const queue = queues[active];
  const complete = reviewed.includes(active);

  return <section className={styles.desk} aria-labelledby="broker-desk">
    <div className={styles.deskHead}><h2 id="broker-desk">Broker Operations Desk</h2><span>Interactive Example</span></div>
    <div className={styles.tabs} role="group" aria-label="Operations queues">
      {queues.map(({ name, icon: Icon }, index) => <button key={name} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
        <Icon size={16} aria-hidden="true"/>{name}
      </button>)}
    </div>
    <div className={styles.record}>
      <div className={styles.recordHead}><div><span>{queue.reference}</span><h3>{queue.title}</h3></div>
        <p role="status">{complete ? <><Check size={15} aria-hidden="true"/>{queue.done}</> : 'Needs Review'}</p></div>
      <dl>{queue.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <p className={styles.note}>{queue.note}</p>
      <button className={styles.review} type="button" disabled={complete} onClick={() => setReviewed(items => [...items, active])}>
        {complete ? 'Reviewed' : queue.action}<ArrowRight size={16} aria-hidden="true"/>
      </button>
    </div>
  </section>;
}
