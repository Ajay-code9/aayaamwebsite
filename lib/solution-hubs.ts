import type { SolutionPageData } from './solutions';

type Hub = {
  scenario: string;
  stages: readonly (readonly [string, string, string])[];
  checks: readonly string[];
  brief: string;
};

const hubs: Record<string, Hub> = {
  fintech: {
    scenario: 'A payment arrives. Can both the customer and finance team see where it stands?',
    stages: [
      ['Customer Portal', 'Capture a payment reference', 'Show the order or account the customer intends to pay and record the reference used for matching.'],
      ['Payment Integration', 'Check the provider update', 'Use the provider’s status and transaction reference to match the payment to the right record.'],
      ['Finance Workspace', 'Resolve unmatched payments', 'Show exceptions alongside the original payment details so staff can investigate and record a decision.'],
    ],
    checks: ['Repeated provider updates create one payment record.', 'Customers can tell pending payments from completed ones.', 'Finance can trace an adjustment to its original transaction.'],
    brief: 'Bring your payment providers, a sample settlement report and an example of a payment your team could not match.',
  },
  'forex-brokerage': {
    scenario: 'A trader applies. How does approval turn into a usable trading account?',
    stages: [
      ['Trader Portal', 'Collect the application', 'Show what the trader still needs to submit and keep their application tied to a single customer record.'],
      ['Brokerage CRM', 'Review the verification result', 'Give staff the provider result, missing information and an approval history.'],
      ['Trading Platform', 'Link the approved account', 'Use the available platform interface to create or link the trading account and return its status to the portal.'],
    ],
    checks: ['Staff can see why an application is waiting.', 'An account setup failure reaches an operator for review.', 'The portal and CRM show the same linked account.'],
    brief: 'Bring your trading platform and verification provider details, plus a recent application that required manual follow-up.',
  },
  'prop-trading': {
    scenario: 'A trader completes a challenge. Can staff explain how the result was reached?',
    stages: [
      ['Trader Workspace', 'Record the programme and stage', 'Show which evaluation the trader joined and the rules that apply to the current stage.'],
      ['Rules & Activity', 'Calculate progress', 'Check the trading activity available from your platform against the targets and limits your firm defines.'],
      ['Operations Review', 'Review the outcome', 'Show the activity behind each result and route exceptions or eligible payout requests to staff.'],
    ],
    checks: ['Each result uses the rules that applied to that trader.', 'Delayed activity is visible before staff make a decision.', 'Payout reviews retain eligibility and approval history.'],
    brief: 'Bring your challenge rules, sample trading activity and examples of results that currently require a manual review.',
  },
  blockchain: {
    scenario: 'A customer pays from a wallet. What happens between approval and the order update?',
    stages: [
      ['Checkout & Wallet', 'Show what the user is approving', 'Display the asset, amount and supported network before asking the wallet to approve the transaction.'],
      ['Network & Contracts', 'Track the transaction', 'Follow the submitted transaction and apply the confirmation rules agreed for the product.'],
      ['Application Records', 'Update the order once', 'Match the payment to the order and show the customer its status. Send unmatched transfers to operations.'],
    ],
    checks: ['Users see how to switch from an unsupported network.', 'Pending, confirmed and credited states are distinguishable.', 'Repeated notifications do not credit a deposit twice.'],
    brief: 'Bring one transaction flow, the networks and wallets it needs, and who should approve or review exceptions.',
  },
  enterprise: {
    scenario: 'A customer changes an order. How do support, operations and finance stay in sync?',
    stages: [
      ['Customer Records', 'Capture the request once', 'Attach the requested change to the customer and order so staff can see the history.'],
      ['Operations Workflow', 'Review and approve the change', 'Send the request to the team responsible for fulfilment and record what it can deliver.'],
      ['Finance & Reporting', 'Share the approved update', 'Give finance the agreed change before it updates the invoice and keep reporting tied to the order.'],
    ],
    checks: ['Each team sees the actions and records it has permission to access.', 'Failed updates remain visible to their owner.', 'Reports link back to the operational records behind them.'],
    brief: 'Bring one handoff that causes repeat work and a sample record from each tool the teams use.',
  },
  'ai-business': {
    scenario: 'A customer asks a billing question. How does the team get a draft it can trust?',
    stages: [
      ['Help Desk', 'Collect the request', 'Capture the question and the context staff are authorised to see.'],
      ['Approved Knowledge', 'Find the policy and draft a reply', 'Search the sources available to that user and link the relevant guidance. Flag missing information for review.'],
      ['Team Review', 'Check the draft before sending', 'Let the reviewer see the source, correct the draft and decide what should go to the customer.'],
    ],
    checks: ['Answers respect document access rules.', 'A reviewer can open the source behind an answer.', 'Missing guidance sends the request to staff.'],
    brief: 'Bring common requests, approved answers and examples where your team would want the AI to hand the work back.',
  },
};

export function getSolutionHub(data: SolutionPageData) {
  return hubs[data.key];
}
