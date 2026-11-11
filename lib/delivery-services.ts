export const deliveryGroups = {
  'cloud-infrastructure': 'Cloud & Infrastructure',
  'product-engineering': 'Product Engineering',
};

export const deliveryServices = [
  {
    group: 'cloud-infrastructure',
    slug: 'cloud-engineering',
    name: 'Cloud Engineering',
    headline: 'Build a Cloud Setup Your Team Can Run.',
    intro: 'AayaamX designs cloud environments around how your application runs, what data it stores and how demand changes. We plan deployment and day-to-day operations together.',
    example: 'Run a Customer Portal',
    steps: ['Receive requests', 'Run the application', 'Monitor service health'],
    scope: [
      ['Cloud Architecture', 'Choose where applications, databases and storage run, with clear boundaries between environments.'],
      ['Deployment & Scaling', 'Package services for deployment and plan how capacity changes as usage grows.'],
      ['Operational Readiness', 'Set up logs, alerts and backup procedures around the systems your team needs to keep running.'],
    ],
    brief: 'Share your current hosting setup, expected demand and the services you need to move or launch.',
  },
  {
    group: 'cloud-infrastructure',
    slug: 'devops-and-ci-cd',
    name: 'DevOps & CI/CD',
    headline: 'Make Releases Easier to Repeat.',
    intro: 'AayaamX connects code changes, automated checks and deployment in a repeatable release process. Your team can review changes in staging and see what was released to production.',
    example: 'Release an Application Update',
    steps: ['Run build and tests', 'Review in staging', 'Approve production release'],
    scope: [
      ['Build & Test Automation', 'Run agreed checks when code changes and keep build results visible to the team.'],
      ['Staging & Production', 'Define environment settings, secrets and approvals for each release stage.'],
      ['Release Recovery', 'Document how to roll back a release and verify that the application is healthy afterward.'],
    ],
    brief: 'Tell us how you ship today, where releases get stuck and which checks should happen before deployment.',
  },
  {
    group: 'cloud-infrastructure',
    slug: 'api-development',
    name: 'API Development',
    headline: 'Give Your Applications a Reliable Way to Share Data.',
    intro: 'AayaamX develops REST APIs and WebSocket services for applications that need to request data or receive updates as they happen. We define the interface around what each consumer needs.',
    example: 'Deliver an Order Update',
    steps: ['Request current status', 'Read the order record', 'Send updates as it changes'],
    scope: [
      ['REST APIs', 'Define requests, responses and error handling for the records and actions an application needs.'],
      ['Real-Time Updates', 'Use WebSockets where clients need to receive new events without repeatedly asking for them.'],
      ['Access & Documentation', 'Define who can call each endpoint and document how client applications should use it.'],
    ],
    brief: 'Bring the applications that will use the API, the data they need and which updates must arrive in real time.',
  },
  {
    group: 'cloud-infrastructure',
    slug: 'system-integration',
    name: 'System Integration',
    headline: 'Keep Records in Sync Across Your Business.',
    intro: 'AayaamX connects existing business tools and new applications through APIs and shared data. We map which system owns each record and what should happen when an update fails.',
    example: 'Sync a Customer Update',
    steps: ['Capture the change', 'Validate and send it', 'Confirm the receiving record'],
    scope: [
      ['Data Mapping', 'Agree on shared fields, record identifiers and the system responsible for each value.'],
      ['Connected Workflows', 'Move updates between portals, CRMs and internal tools when the business process calls for it.'],
      ['Reconciliation', 'Make delayed or failed updates visible so teams can resolve differences between systems.'],
    ],
    brief: 'Tell us which tools need to communicate, what information should move and how often it changes.',
  },
  {
    group: 'product-engineering',
    slug: 'product-strategy',
    name: 'Product Strategy',
    headline: 'Decide What’s Worth Building First.',
    intro: 'AayaamX helps turn a product idea into a practical delivery plan. We clarify who will use it, the problem it should solve and what the first release needs to prove.',
    example: 'Scope a New Product',
    steps: ['Define the user and problem', 'Prioritise the first release', 'Agree on milestones'],
    scope: [
      ['Discovery', 'Map the users, business goals and constraints that shape the product.'],
      ['Release Scope', 'Prioritise the essential user journeys and identify which decisions can wait.'],
      ['Delivery Plan', 'Capture milestones, dependencies and the criteria for reviewing progress.'],
    ],
    brief: 'Share your product idea, who it serves and what would make the first release successful.',
  },
  {
    group: 'product-engineering',
    slug: 'ui-ux-engineering',
    name: 'UI/UX Engineering',
    headline: 'Design Around What Users Need to Do.',
    intro: 'AayaamX brings UI/UX design and frontend engineering together for web and mobile products. We map the key tasks and carry the design through to working screens.',
    example: 'Improve a Sign-Up Flow',
    steps: ['Map the current journey', 'Prototype the new flow', 'Build and review the screens'],
    scope: [
      ['User Journeys', 'Identify where people start, what they need to complete and where they get stuck.'],
      ['Prototypes', 'Make key flows tangible so stakeholders can review decisions before implementation.'],
      ['Interface Engineering', 'Build reusable, responsive components with clear feedback for loading, errors and completion.'],
    ],
    brief: 'Bring a screen or journey that needs work and tell us what users struggle to complete.',
  },
  {
    group: 'product-engineering',
    slug: 'mvp-development',
    name: 'MVP Development',
    headline: 'Launch the First Version Users Can Try.',
    intro: 'AayaamX builds MVPs around the core problem your product solves. We work in iterations with demos and feedback, then prepare the release for your first users.',
    example: 'Launch a First Release',
    steps: ['Choose the core journey', 'Build and review a demo', 'Release to initial users'],
    scope: [
      ['Focused Scope', 'Choose the essential workflow, accounts and integrations required for launch.'],
      ['Iterative Build', 'Review working versions and use feedback to refine the product before release.'],
      ['Launch & Handover', 'Prepare the release environment and document what the team needs to operate and extend the product.'],
    ],
    brief: 'Tell us what early users should be able to do and what you want to learn from the release.',
  },
  {
    group: 'product-engineering',
    slug: 'product-modernization',
    name: 'Product Modernization',
    headline: 'Improve the Software Your Team Already Relies On.',
    intro: 'AayaamX helps update existing products as their business requirements change. We review the current workflows and dependencies, then plan improvements around the parts that need attention first.',
    example: 'Replace an Outdated Workflow',
    steps: ['Review the existing system', 'Migrate one workflow', 'Verify before switching over'],
    scope: [
      ['Product & System Review', 'Identify friction in key workflows and map the systems, data and teams that depend on them.'],
      ['Phased Upgrades', 'Plan interface, backend or infrastructure changes in stages that teams can review.'],
      ['Migration & Handover', 'Define how records move, how the new workflow is checked and what operators need after release.'],
    ],
    brief: 'Share the workflows your team relies on and the issues that make them difficult to maintain or use.',
  },
] as const;

export type DeliveryService = (typeof deliveryServices)[number];

export function getDeliveryService(path: string) {
  return deliveryServices.find(service => path === `/services/${service.group}/${service.slug}`);
}
