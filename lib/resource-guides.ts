type ResourceGuide = {
  intro: string;
  entries: readonly (readonly [title: string, body: string, link?: string, label?: string])[];
};

const guides: Record<string, ResourceGuide> = {
  '/resources/whitepapers': {
    intro: 'Technical decision briefs for teams planning integrations, payment workflows and AI-assisted operations.',
    entries: [
      ['Connect a CRM to a trading platform', 'Decide which system owns customer records, trading accounts and order history. Document how updates are matched across systems, how failed updates are retried and how operations teams resolve discrepancies.', '/solutions/forex-brokerage/brokerage-crm-ecosystem', 'Explore Brokerage CRM'],
      ['Design a digital asset payment workflow', 'Give each deposit a traceable reference. Define confirmation rules per network and separate detected, confirmed and credited states so finance teams can reconcile payments and review exceptions.', '/solutions/fintech/digital-payments', 'Explore Digital Payments'],
      ['Introduce AI with a review step', 'Start with one task and measure how it performs on representative inputs. Give reviewers the original input, generated output and a way to correct or escalate the result before it affects a customer.', '/solutions/ai-business/ai-workflow-automation', 'Explore AI Workflow Automation'],
    ],
  },
  '/resources/industry-reports': {
    intro: 'AayaamX engineering perspectives on what teams in these industries need from their software.',
    entries: [
      ['Brokerage operations', 'Map onboarding, account changes and partner referrals across the client portal and backoffice. Identify where staff re-enter data or need to confirm an action before it reaches the trading platform.', '/industries/forex-brokerage', 'Explore Forex & Brokerage'],
      ['Payments and financial services', 'Trace a payment from initiation through confirmation, settlement and reconciliation. Define which records finance teams can export and which exceptions require review.', '/industries/financial-services', 'Explore Financial Services'],
      ['Enterprise software', 'Identify where teams maintain conflicting versions of a record. Agree who owns updates, which roles need access and what the migration needs to preserve before replacing a shared workflow.', '/solutions/enterprise', 'Explore Enterprise Solutions'],
    ],
  },
  '/resources/faqs': {
    intro: 'Answers to common questions about starting, building and launching a software project with AayaamX.',
    entries: [
      ['What should I share to start a project?', 'Tell us who will use the product, what they need to do, what tools are already in place and any launch constraints. A workflow, a few screenshots or a short written brief is enough to start the discussion.', '/company#contact', 'Prepare a Project Brief'],
      ['Can you work with our existing software?', 'Yes. We first review the existing interfaces, data ownership, access requirements and integration constraints. That review helps define what can be reused and which parts need changes.', '/company#technology-expertise', 'See Technology Expertise'],
      ['How do you estimate cost and delivery time?', 'The first estimate depends on the workflows in scope, integrations, data migration and release requirements. We use discovery to identify dependencies and agree what belongs in the first release.', '/company#our-approach', 'See Our Approach'],
      ['Can you help after launch?', 'Handover and ongoing support can be scoped with the project. Agree what the team will operate, who handles issues and how improvements will be prioritised.', '/company#contact', 'Discuss Support'],
    ],
  },
  '/resources/documentation': {
    intro: 'Project documentation checklists for preparing an integration, a release or a handover.',
    entries: [
      ['Integration brief', 'List the systems involved, the data each system owns and what triggers an update. Include access requirements, a test environment and who investigates failed requests.', '/services/cloud-infrastructure/api-development', 'Explore API Development'],
      ['Release readiness checklist', 'Record which workflows were tested, who approves the release and how to recover if it fails. Confirm production access, monitoring and the support contact before launch.', '/services/cloud-infrastructure/devops-and-ci-cd', 'Explore DevOps & CI/CD'],
      ['Handover checklist', 'Identify who owns the code, environments and integrations. Document how to deploy, restore backups, review logs and escalate issues. Agree where the team will keep these instructions current.', '/company#our-approach', 'See Our Delivery Process'],
    ],
  },
};

export function getResourceGuide(path: string): ResourceGuide | undefined {
  return guides[path];
}
