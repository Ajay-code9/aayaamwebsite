export const aiServicesHref = '/services/ai-automation';

export const aiServices = [
  {
    slug: 'ai-agent-development',
    name: 'AI Agent Development',
    headline: 'Give Repetitive Tasks an Assistant.',
    intro: 'AayaamX builds AI Agents that can read requests, look up information and take defined actions across your business tools. Your team decides which steps the agent can handle and where a person needs to approve.',
    example: 'Support Request Triage',
    steps: [
      ['Read', 'Identify what the customer is asking for.'],
      ['Look Up', 'Find the relevant account and support policy.'],
      ['Hand Over', 'Prepare a reply for the support team to review.'],
    ],
    offers: [
      ['Task Assistants', 'Triage incoming requests, collect context and prepare the next action.'],
      ['Tool Integrations', 'Connect agents to approved documents, help desks and business systems.'],
      ['Human Review', 'Define when to ask for approval, escalate or leave a record of an action.'],
    ],
    brief: 'Bring one task your team handles repeatedly. We’ll map the tools, decisions and approvals involved.',
  },
  {
    slug: 'generative-ai-solutions',
    name: 'Generative AI Solutions',
    headline: 'Turn Company Knowledge Into Useful Answers.',
    intro: 'AayaamX builds Generative AI applications that search internal knowledge, draft responses and extract information from documents. Connect the application to the sources your team already trusts.',
    example: 'Internal Knowledge Assistant',
    steps: [
      ['Ask', 'An employee asks a question about a policy.'],
      ['Retrieve', 'Find relevant passages in approved documents.'],
      ['Answer', 'Summarise the guidance and link to the source.'],
    ],
    offers: [
      ['Knowledge Assistants', 'Give staff a way to search policies and product documentation in plain language.'],
      ['Document Processing', 'Turn incoming PDFs and forms into structured fields a team can review.'],
      ['Drafting Tools', 'Prepare replies, summaries or first drafts with approved reference material.'],
    ],
    brief: 'Tell us what your team needs to find or create and where the source material lives.',
  },
  {
    slug: 'machine-learning',
    name: 'Machine Learning',
    headline: 'Use Your Data to Make Better Decisions.',
    intro: 'AayaamX builds Machine Learning pipelines for business teams that need to classify records, forecast demand or flag unusual activity. We start with the decision the model should support and the data available to test it.',
    example: 'Demand Forecasting',
    steps: [
      ['Prepare', 'Combine order history and seasonal patterns.'],
      ['Evaluate', 'Test forecasts against past periods.'],
      ['Monitor', 'Compare forecasts with actual demand over time.'],
    ],
    offers: [
      ['Forecasting', 'Estimate demand or workload so teams can plan capacity earlier.'],
      ['Classification', 'Sort records into useful categories and flag uncertain results for review.'],
      ['Model Pipelines', 'Prepare data, evaluate models and track how they perform once deployed.'],
    ],
    brief: 'Share the decision you want to improve, the data you collect and how you currently measure the result.',
  },
  {
    slug: 'business-process-automation',
    name: 'Business Process Automation',
    headline: 'Keep Work Moving Between Your Tools.',
    intro: 'AayaamX builds Workflow Automation that connects business systems, moves records and routes approvals. Give each request a clear next step and send exceptions to the people who can resolve them.',
    example: 'Invoice Approval',
    steps: [
      ['Capture', 'Collect an invoice and check the required fields.'],
      ['Route', 'Send it to the right approver using your rules.'],
      ['Record', 'Update the finance system once it is approved.'],
    ],
    offers: [
      ['Intake & Approvals', 'Route requests by team, amount or priority and show where each one stands.'],
      ['Connected Systems', 'Sync updates between tools so teams can avoid entering the same information twice.'],
      ['Exception Handling', 'Send incomplete or unusual records to a reviewer and keep a history of changes.'],
    ],
    brief: 'Walk us through a process that slows your team down. We’ll look at the handoffs and rules that can be automated.',
  },
] as const;

export type AIService = (typeof aiServices)[number];

export function getAIService(path: string) {
  return aiServices.find(service => path === aiServicesHref + '/' + service.slug);
}
