'use client';

import { useState } from 'react';
import { ArrowRight, BookOpen, Check, FileText, MessageSquare } from 'lucide-react';
import styles from './AIProductPage.module.css';

const examples = [
  { name: 'Support Replies', icon: MessageSquare, input: 'Can I change the email address on my invoices?', source: 'Billing Help Centre', output: 'Yes. Open Account Settings, select Billing, and update your invoice email under Billing Contacts.', action: 'Approve Draft', complete: 'Draft approved for sending' },
  { name: 'Invoice Intake', icon: FileText, input: 'Invoice 1042 · Northline Studio · USD 1,250.00', source: 'Supplier invoice · page 1', output: 'Supplier: Northline Studio. Invoice: 1042. Total: USD 1,250.00.', action: 'Confirm Fields', complete: 'Fields confirmed for handoff' },
  { name: 'Knowledge Search', icon: BookOpen, input: 'Where do I submit an expense after a work trip?', source: 'Travel & Expenses Guide', output: 'Open the expense portal, choose Travel, and attach the receipts before submitting your claim.', action: 'Confirm Answer', complete: 'Answer marked as reviewed' },
];

export default function AIProductShowcase() {
  const [selected, setSelected] = useState(0);
  const [reviewed, setReviewed] = useState(false);
  const example = examples[selected];

  return <section className={styles.console} aria-labelledby="ai-preview">
    <div className={styles.consoleTop}><h2 id="ai-preview">AI Workspace</h2><span>Interactive Example</span></div>
    <div className={styles.controls} aria-label="Choose a workflow" role="group">
      {examples.map(({ name, icon: Icon }, index) => <button type="button" key={name} aria-pressed={index === selected} onClick={() => {
        if (index === selected) return;
        setSelected(index);
        setReviewed(false);
      }}><Icon size={17} aria-hidden="true"/>{name}</button>)}
    </div>
    <div className={styles.result} key={example.name}>
      <p className={styles.caption}>Incoming Work</p><p>{example.input}</p>
      <div className={styles.output}><p className={styles.caption}>AI Output</p><p>{example.output}</p>
        <span><BookOpen size={14} aria-hidden="true"/>{example.source}</span></div>
    </div>
    <div className={styles.review}>
      <p role="status">{reviewed ? <><Check size={16} aria-hidden="true"/>{example.complete}</> : 'Waiting for Team Review'}</p>
      <button type="button" disabled={reviewed} onClick={() => setReviewed(true)}>{reviewed ? 'Reviewed' : example.action}<ArrowRight size={16} aria-hidden="true"/></button>
    </div>
  </section>;
}
