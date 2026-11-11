type DeliveryExample = readonly [scenario: string, firstRelease: string, acceptance: string];

export const solutionDelivery: Record<string, DeliveryExample> = {
  'digital-payments': [
    'A customer pays an invoice. Finance needs to know which order the payment belongs to and why it might still be pending.',
    'Connect one payment provider, attach each payment to an order reference and give finance a queue for unmatched payments.',
    'Send the same provider notification twice and confirm the invoice is credited once. Check that a payment with the wrong amount stays in review.',
  ],
  'financial-platforms': [
    'A customer submits an account application and wants to see what is still required without calling support.',
    'Build one onboarding flow, a customer account view and a staff queue for incomplete applications.',
    'Submit an incomplete application, request a correction and check that the customer sees the updated status without accessing anyone else’s account.',
  ],
  'financial-automation': [
    'Finance receives reimbursement requests from several teams and needs a record of who approved each one.',
    'Connect one request form to approval rules and pass approved requests to the finance system.',
    'Check that an above-limit request reaches the correct approver and a rejected request never creates a finance record.',
  ],
  'broker-infrastructure': [
    'A brokerage approves a trader and needs the client portal, backoffice and trading platform to agree on the new account’s status.',
    'Integrate one trading platform. Give operations a single view of account setup, provider responses and unresolved requests.',
    'Simulate a provider timeout and confirm staff can see what happened and retry without creating another account.',
  ],
  'brokerage-crm-ecosystem': [
    'A trader asks support about a pending account request while operations is reviewing it.',
    'Give both teams a shared customer record with account status, ownership and notes, with access limited by role.',
    'Verify that support can see the status and contact the owner while restricted review notes remain visible only to authorised staff.',
  ],
  'ib-and-affiliate-management': [
    'A partner refers a client and wants to understand how that referral appears on their commission statement.',
    'Start with one referral programme, attribution rules and a partner view of referred accounts and commission records.',
    'Check a duplicate referral and a reversed commission. Verify that finance can trace both decisions and the partner sees the corrected statement.',
  ],
  'evaluation-platforms': [
    'A prop firm needs to show a participant’s evaluation status using the same rules staff apply during review.',
    'Launch one evaluation programme with enrolment, trading activity import and a review queue for exceptions.',
    'Replay accounts that pass, breach a rule and have missing activity. Confirm each receives the expected status.',
  ],
  'challenge-management': [
    'A firm wants to change a challenge rule for new entrants while keeping existing participants on the rules they joined under.',
    'Create one challenge with versioned rules, defined stages and a staff view of enrolment and progression.',
    'Enrol participants before and after a rule change and verify each account keeps the correct limits and progression rules.',
  ],
  'trader-dashboards': [
    'A trader wants to see how close they are to a challenge limit and which activity affected their progress.',
    'Show progress, remaining limits, recent trades and the latest update time in one dashboard.',
    'Compare the dashboard with a known trade history. Check that delayed data is flagged and the trader sees only their own account.',
  ],
  'payout-management': [
    'A trader requests a payout and finance needs to review eligibility, record the decision and track the payout status.',
    'Connect the request form to an eligibility check and staff approval queue. Record the final payment reference.',
    'Test an ineligible request and a failed transfer. Check that neither is marked paid and both retain their review history.',
  ],
  'digital-assets': [
    'An operations team needs to see which assets a customer holds and trace a transfer from submission to confirmation.',
    'Support one asset and network with a balance view, transfer history and staff exception queue.',
    'Verify that a pending transfer is visibly distinct from a confirmed one and can be traced to its network reference.',
  ],
  'tokenization': [
    'An issuer wants to track who is permitted to receive a token and record how its ownership changes.',
    'Define the issuance and transfer rules for one asset type, then build an operator view for approvals and history.',
    'Check that an eligible transfer succeeds, an ineligible transfer is blocked and both attempts are visible to authorised staff.',
  ],
  'decentralized-platforms': [
    'A user connects a wallet and needs to understand what they are approving and whether the action went through.',
    'Build one wallet-connected journey with clear transaction details and pending, confirmed and failed states.',
    'Reject a wallet request and simulate a failed transaction. Verify the user sees the correct status and can safely try again.',
  ],
  'wallet-infrastructure': [
    'A customer deposits a supported asset while operations needs to identify incoming funds and investigate delayed confirmations.',
    'Start with one network and wallet provider, define address and confirmation rules, and connect incoming activity to the account history.',
    'Replay a repeated provider event and a delayed confirmation. Check that the history stays accurate and the balance is credited only once.',
  ],
  'enterprise-crm': [
    'Sales hands an account to delivery, and both teams need to see what was promised and who owns the next action.',
    'Migrate a defined set of customer records and build one account view with activities, ownership and follow-ups.',
    'Check a sample of migrated accounts and verify that an ownership change routes future tasks to the right team.',
  ],
  'erp-systems': [
    'Purchasing raises an order, a manager approves it and the warehouse needs to see what is expected without maintaining a second spreadsheet.',
    'Connect purchase requests, approvals and goods receipt for one department. Agree which records the ERP and accounting system each own.',
    'Approve an order and receive only part of it. Verify that stock reflects the actual receipt, the remainder stays open and accounting receives the agreed update.',
  ],
  'workflow-automation': [
    'An employee submits a request and wants to see its status without chasing the approver.',
    'Build one request form, route requests by policy and update the source record after approval.',
    'Check reassignment when an approver is unavailable and verify that a rejected request leaves the source record unchanged.',
  ],
  'business-intelligence': [
    'Two departments report different totals for the same metric because they use different source files and cutoffs.',
    'Agree one metric definition, connect the source records and build a dashboard with date filters and drill-downs.',
    'Reconcile a reporting period against the source and check that a failed refresh shows a warning instead of silently presenting stale figures.',
  ],
  'intelligent-assistants': [
    'A support rep needs to draft a reply using the current policy and check the source before responding.',
    'Connect approved guides to one support queue and give staff a draft with source links and an escalation option.',
    'Test an answerable and an ambiguous request. Verify the first cites the right policy and the second goes to a person for review.',
  ],
  'ai-analytics': [
    'An operations manager asks why weekly sales dropped and needs to see which locations or products contributed.',
    'Connect one approved reporting dataset and let users ask questions about a defined set of metrics. Show the period, filters and underlying figures alongside the explanation.',
    'Compare answers against known reports, test a question the data cannot answer and confirm that the tool respects each user’s access.',
  ],
  'ai-workflow-automation': [
    'An operations inbox receives documents in different formats and staff need to confirm extracted fields before posting them.',
    'Start with one document type, highlight fields the system could not read confidently and pass reviewed records to the destination system.',
    'Test a document with missing fields and a duplicate submission. Confirm both stop for review before any record is posted.',
  ],
  'knowledge-management-systems': [
    'A new employee asks how to complete a process and needs an answer from the current guide they are allowed to see.',
    'Index one approved document collection, preserve access rules and show a link to the source passage with every supported answer.',
    'Replace an old guide and ask a restricted question. Verify that answers use the updated version and restricted content remains hidden.',
  ],
};
