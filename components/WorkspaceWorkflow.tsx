'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, RotateCcw, type LucideIcon } from 'lucide-react';
import styles from './HeroBrokerageDemo.module.css';

type Phase = readonly [action: string, status: string, detail: string, value: string];
type Workflow = {
  record: string;
  reference: string;
  kind: string;
  fields: readonly (readonly [string, string])[];
  metric: string;
  phases: readonly [Phase, Phase, Phase, Phase];
};

const workflows: Record<string, Workflow> = {
  '/products/ai-powered': {
    record: 'Change the billing email', reference: 'SUP-1042', kind: 'inbox',
    fields: [['Channel', 'Support inbox'], ['Source', 'Billing help centre'], ['Owner', 'Customer Support']],
    metric: 'Reply',
    phases: [
      ['Draft reply', 'New request', '“Can I change where my invoices are sent?”', 'Awaiting draft'],
      ['Send for review', 'Draft prepared', 'Open Account Settings → Billing, then update Billing Contacts.', 'Source attached'],
      ['Approve reply', 'In review', 'A reviewer checks the instructions against the billing help article.', 'Review requested'],
      ['', 'Reply approved', 'The approved reply is ready for the support team to send.', 'Ready to send'],
    ],
  },
  '/products/broker-backoffice': {
    record: 'Client onboarding review', reference: 'KYC-2081', kind: 'review',
    fields: [['Queue', 'Account Operations'], ['Documents', 'Identity + address'], ['Account type', 'Standard']],
    metric: 'Access',
    phases: [
      ['Check documents', 'Submitted', 'A client application is ready in the review queue.', 'Restricted'],
      ['Request approval', 'Documents checked', 'The sample identity and address checks are recorded.', 'Restricted'],
      ['Approve account', 'Approval pending', 'Operations can review the checks and make a decision.', 'Awaiting approval'],
      ['', 'Account approved', 'The sample account is cleared for activation.', 'Activation enabled'],
    ],
  },
  '/products/prop-trading-management': {
    record: 'Two-stage evaluation', reference: 'CH-3304', kind: 'evaluation',
    fields: [['Starting equity', '$50,000'], ['Profit target', '8%'], ['Maximum drawdown', '10%']],
    metric: 'Target progress',
    phases: [
      ['Import trade history', 'Challenge active', 'The evaluation is waiting for the sample trading activity.', '0%'],
      ['Check rules', 'Trades imported', 'Trading activity puts the sample account at 75% of the target.', '75%'],
      ['Record result', 'Rules checked', 'The latest sample equity meets the target and stays within the drawdown limit.', '100%'],
      ['', 'Stage passed', 'The result is available to the trader and review team.', '100%'],
    ],
  },
  '/products/blockchain-wallet': {
    record: 'Incoming wallet deposit', reference: 'DEP-8056', kind: 'payment',
    fields: [['Amount', '250.00 USDC'], ['Network', 'Ethereum'], ['Destination', 'Customer wallet']],
    metric: 'Confirmations',
    phases: [
      ['Detect deposit', 'Awaiting deposit', 'A deposit address is ready for the sample transfer.', '0 / 3'],
      ['Confirm on network', 'Deposit detected', 'The incoming transfer is matched to the deposit address.', '1 / 3'],
      ['Credit balance', 'Network confirmed', 'The transfer has reached the required confirmations.', '3 / 3'],
      ['', 'Balance credited', 'The wallet ledger records a single credit of 250.00 USDC.', '3 / 3'],
    ],
  },
  '/products/enterprise-saas': {
    record: 'Launch a customer workspace', reference: 'ORG-7104', kind: 'workspace',
    fields: [['Organisation', 'Northline Studio'], ['Plan', 'Team'], ['Default role', 'Member']],
    metric: 'Seats assigned',
    phases: [
      ['Create workspace', 'Setup requested', 'A new organisation is ready for onboarding.', '0 / 5'],
      ['Invite the team', 'Workspace created', 'The customer workspace has its own settings and access rules.', '1 / 5'],
      ['Enable access', 'Invites prepared', 'The workspace owner can review the sample invitations and roles.', '3 / 5'],
      ['', 'Workspace active', 'The sample team can access its workspace and start work.', '3 / 5'],
    ],
  },
  '/products/custom-product-ecosystems': {
    record: 'Coach booking request', reference: 'BK-4821', kind: 'booking',
    fields: [['Route', 'Stockholm → Gothenburg'], ['Passengers', '2'], ['Channel', 'Booking portal']],
    metric: 'Reservation',
    phases: [
      ['Check availability', 'Request received', 'A traveller searches for two seats on a coach.', 'Pending'],
      ['Reserve seats', 'Seats available', 'The booking portal finds two seats on the requested route.', 'Available'],
      ['Issue ticket', 'Seats reserved', 'Operations can see the reservation against the scheduled trip.', 'Reserved'],
      ['', 'Booking confirmed', 'The customer portal shows the ticket and operations sees the updated trip.', 'Confirmed'],
    ],
  },
  '/services/software-engineering/mobile-app-development': {
    record: 'Field inspection', reference: 'JOB-6082', kind: 'device',
    fields: [['Assignment', 'Site inspection'], ['Checklist', '3 items'], ['Device', 'Field app']],
    metric: 'Sync status',
    phases: [
      ['Save inspection offline', 'Assigned', 'A field worker opens the inspection on their phone.', 'Connected'],
      ['Reconnect device', 'Saved locally', 'The completed checklist is saved on the device while offline.', 'Queued'],
      ['Sync to operations', 'Connection restored', 'The app is ready to upload the queued inspection.', 'Ready to sync'],
      ['', 'Inspection synced', 'Operations sees the completed inspection in the shared workspace.', 'Up to date'],
    ],
  },
  '/services/cloud-infrastructure': {
    record: 'Order status request', reference: 'REQ-9427', kind: 'trace',
    fields: [['Method', 'GET'], ['Endpoint', '/orders/4821'], ['Caller', 'Customer portal']],
    metric: 'HTTP response',
    phases: [
      ['Route request', 'Request received', 'The customer portal requests the latest order status.', 'Pending'],
      ['Read order record', 'Access checked', 'The gateway checks access and routes the request to the orders service.', 'Processing'],
      ['Return response', 'Order retrieved', 'The service finds the matching record and prepares a response.', 'Ready'],
      ['', 'Response returned', 'The portal receives the sample order status and the request trace is complete.', '200 OK'],
    ],
  },
};

export default function WorkspaceWorkflow({ name, href, icon: Icon }: { name: string; href: string; icon: LucideIcon }) {
  const [phase, setPhase] = useState(0);
  const workflow = workflows[href];
  const [action, status, detail, value] = workflow.phases[phase];

  return <>
    <div className={styles.heading}>
      <div><h3>{name}</h3><p>Simulated workflow</p></div>
      <Link href={href}>Explore Platform <ArrowUpRight size={15} aria-hidden="true"/></Link>
    </div>
    <article className={styles.workbench} data-workflow={workflow.kind}>
      <header className={styles.workbenchHeader}>
        <span className={styles.workbenchIcon}><Icon size={20} aria-hidden="true"/></span>
        <div><p>{workflow.reference}</p><h4>{workflow.record}</h4></div>
        <button type="button" className={styles.reset} disabled={phase === 0} onClick={() => setPhase(0)}>
          <RotateCcw size={14} aria-hidden="true"/> Reset
        </button>
      </header>
      <div className={styles.workbenchBody}>
        <div>
          <dl className={styles.recordFields}>{workflow.fields.map(([label, field]) =>
            <div key={label}><dt>{label}</dt><dd>{field}</dd></div>)}</dl>
          <div className={styles.recordResult} aria-live="polite" aria-atomic="true">
            <div key={phase} className={styles.resultContent}>
              <p>{workflow.metric}</p><strong>{value}</strong><p>{detail}</p>
            </div>
          </div>
          <button className={styles.advance} type="button" onClick={() => setPhase(action ? phase + 1 : 0)}>
            {action || 'Replay Workflow'} {action ? <ArrowRight size={15} aria-hidden="true"/> : <RotateCcw size={15} aria-hidden="true"/>}
          </button>
        </div>
        <ol className={styles.progress} aria-label="Workflow progress">
          {workflow.phases.map(([, label], index) => <li key={label} aria-current={index === phase ? 'step' : undefined} data-complete={index < phase ? '' : undefined}>
            <span aria-hidden="true">{index < phase ? <Check size={14}/> : index + 1}</span>{label}
          </li>)}
        </ol>
      </div>
      <footer className={styles.workbenchFooter}><span className={styles.status}>{status}</span><span>Step {phase + 1} of {workflow.phases.length}</span></footer>
    </article>
  </>;
}
