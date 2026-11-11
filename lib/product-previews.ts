export const productPreviews = {
  '/products/forex-crm': {
    title: 'Trader Onboarding Desk',
    reference: 'Application FX-1042',
    states: ['Documents Received', 'Verification Reviewed', 'Trading Account Linked'],
    records: ['Applicant · Maya Patel', 'Review · Identity result checked', 'Client portal · Account FX-1082'],
    actions: ['Review Verification', 'Link Trading Account'],
  },
  '/products/prop-trading-management': {
    title: 'Challenge Operations',
    reference: 'Evaluation PT-0316',
    states: ['Trader Enrolled', 'Rules Checked', 'Result Ready for Review'],
    records: ['Programme · Two-stage challenge', 'Checks · Target and loss limits', 'Queue · Operator review'],
    actions: ['Check Challenge Rules', 'Open Result Review'],
  },
  '/products/enterprise-saas': {
    title: 'Customer Workspace Setup',
    reference: 'Workspace Northline',
    states: ['Workspace Created', 'Team Access Set', 'First Task Completed'],
    records: ['Organisation · Northline Studio', 'Access · Owner and team roles', 'Activity · First request submitted'],
    actions: ['Assign Team Access', 'Preview First Task'],
  },
  '/products/blockchain-wallet': {
    title: 'Deposit Operations',
    reference: 'Deposit DEP-2048',
    states: ['Transfer Detected', 'Network Confirmed', 'Balance Credited'],
    records: ['Asset · USDC on Ethereum', 'Network · Confirmation rule met', 'Ledger · Credit recorded once'],
    actions: ['Check Network Status', 'Record Account Credit'],
  },
  '/products/custom-product-ecosystems': {
    title: 'Connected Booking Workspace',
    reference: 'Booking BK-1250',
    states: ['Booking Confirmed', 'Schedule Updated', 'Driver Portal Updated'],
    records: ['Customer site · Seat 12A', 'Operations · Reservation added to trip', 'Driver portal · Passenger list refreshed'],
    actions: ['View Operations Update', 'View Driver Handoff'],
  },
} as const;

export function getProductPreview(path: string) {
  return Object.hasOwn(productPreviews, path) ? productPreviews[path as keyof typeof productPreviews] : undefined;
}

export type ProductPreviewData = NonNullable<ReturnType<typeof getProductPreview>>;
