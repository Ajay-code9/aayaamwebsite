export const companyPages = {
  about: {
    title: 'About AayaamX', headline: 'Engineering for the Way Your Business Works.',
    intro: 'AayaamX is a software development and product engineering company based in Ahmedabad, India. We help startups and established businesses turn complex requirements into software their customers and teams can use.',
    heading: 'What We Build',
    items: [
      ['Customer Products', 'Build web, mobile and SaaS applications around the tasks customers need to complete.', '/services/software-engineering'],
      ['Trading & Financial Platforms', 'Connect trader portals, brokerage operations and execution systems so teams can follow account and order activity.', '/services/trading-technology'],
      ['AI, Blockchain & Integrations', 'Add reviewable AI workflows, wallet-enabled features and the APIs that connect them to existing products.', '/solutions'],
    ],
    note: ['From First Release to Ongoing Support', 'We can help define the scope, design the experience, build the software and plan the launch and handover.'],
    action: ['View Case Studies', '/portfolio'],
  },
  'our-story': {
    title: 'Our Story', headline: 'From Individual Tools to Connected Products.',
    intro: 'AayaamX’s published work shows how a customer-facing product becomes more useful when it connects to the people and systems that operate it.',
    heading: 'Three Projects That Show How We Work',
    items: [
      ['Connect the Brokerage', 'For Succeed Capital FX, AayaamX connected web and mobile trading apps, a brokerage CRM and dedicated risk monitoring.', '/portfolio/succeed-capital-fx'],
      ['Connect the Payment Record', 'The Blockchain Crypto Payment Gateway tracks deposits from address creation through network confirmation and settlement.', '/portfolio/blockchain-crypto-payment-gateway'],
      ['Connect the People Running a Trip', 'The Bus Booking platform brings customer reservations, operations schedules and driver passenger lists together.', '/portfolio/bus-booking-admin-management-system'],
    ],
    note: ['What These Projects Have in Common', 'Each product gives different users the view they need while keeping the underlying activity connected.'],
    action: ['View Case Studies', '/portfolio'],
  },
  'vision-mission': {
    title: 'Vision & Mission', headline: 'Build Software People Can Rely On.',
    intro: 'Our aim is to help businesses turn ambitious ideas into secure, maintainable digital products that solve problems their customers and teams face every day.',
    heading: 'What Guides the Work',
    items: [
      ['Innovation With a Purpose', 'Start with a problem worth solving. Choose technology based on what it helps the business or user do.'],
      ['Integrity in Delivery', 'Make scope, trade-offs and progress visible so teams can make informed decisions as the product takes shape.'],
      ['Impact People Can See', 'Define what should improve and review real workflows before expanding the product.'],
    ],
    note: ['Our Mission', 'Design, build and support software that businesses can operate today and adapt as their needs change.'],
    action: ['See Our Approach', '/company#our-approach'],
  },
  'our-approach': {
    title: 'Our Approach', headline: 'Know What We’re Building and What Comes Next.',
    intro: 'Start with the user, the business goal and the systems involved. Review working software as it takes shape, then plan the transition to everyday use.',
    heading: 'How a Project Moves Forward',
    items: [
      ['Align', 'Map the main workflow, agree what belongs in the first release and identify dependencies early.'],
      ['Build & Review', 'Review working versions, test integrations and check how the software handles expected actions and exceptions.'],
      ['Launch & Handover', 'Agree the rollout sequence, verify the production setup and share what your team needs to operate the product.'],
    ],
    note: ['Build Security Into the Process', 'Agree access rules early and review how the software handles sensitive records before release. NIST’s Secure Software Development Framework is a reference for incorporating security practices into delivery.'],
    reference: ['NIST Secure Software Development Framework', 'https://csrc.nist.gov/pubs/sp/800/218/final'],
    action: ['Share Your Project Brief', '/company#contact'],
  },
  'technology-expertise': {
    title: 'Technology Expertise', headline: 'Choose Technology Around What the Product Needs.',
    intro: 'AayaamX works across customer interfaces, backend systems, cloud infrastructure and specialised platforms. We scope the stack around your users, data and existing tools.',
    heading: 'Where We Work',
    items: [
      ['Web, Mobile & SaaS', 'Build customer portals, mobile applications and separate workspaces for business customers.', '/services/software-engineering'],
      ['AI & Automation', 'Connect approved knowledge sources, extract document fields and route uncertain results for staff review.', '/services/ai-automation'],
      ['Trading & Blockchain', 'Integrate order workflows, wallet activity and transaction status with the applications people use.', '/solutions'],
      ['Cloud & APIs', 'Design backend interfaces, deployment environments and operational checks around how your product runs.', '/services/cloud-infrastructure'],
    ],
    note: ['Working With Your Existing Stack', 'Bring the systems you already use. We review their interfaces and data before proposing integrations or replacements.'],
    action: ['Explore Services', '/services'],
  },
  'leadership-team': {
    title: 'Leadership & Team', headline: 'Meet the Roles Behind Your Project.',
    intro: 'A software project needs clear ownership across product decisions, technical design and delivery. Here is what those responsibilities look like when you work with AayaamX.',
    heading: 'Who Helps Move the Work Forward',
    items: [
      ['Product & Delivery', 'Clarify priorities, organise reviews and keep the team working towards the agreed first release.'],
      ['Technical Architecture', 'Translate requirements into system boundaries, integrations, data flows and technical decisions.'],
      ['Engineering & Quality', 'Build and test the workflows, capture feedback and prepare the handover.'],
    ],
    note: ['Agree How We’ll Work Together', 'At kickoff, identify who owns decisions, who reviews progress and how questions reach the right person.'],
    action: ['Request a Consultation', '/company#contact'],
  },
  careers: {
    title: 'Careers', headline: 'Help Businesses Build and Use Better Software.',
    intro: 'AayaamX works across custom software, fintech platforms, APIs and digital products. The live careers page lists opportunities in sales and marketing and in practical technology education.',
    heading: 'Explore Career Paths',
    items: [
      ['Sales & Marketing', 'Help businesses understand which platforms and engineering services fit their needs, from initial enquiries to project discussions.'],
      ['Trainers & Instructors', 'Help learners build practical projects in areas such as full-stack or mobile development.'],
    ],
    note: ['How to Apply', 'Check the live listings for current openings and role requirements. Email your CV to hr@aayaamx.com with the exact job title in the subject line.'],
    reference: ['Email HR', 'mailto:hr@aayaamx.com'],
    action: ['See Current Openings', 'https://www.aayaamx.com/careers'],
  },
} satisfies Record<string, CompanyPageData>;

export type CompanyPageData = {
  title: string;
  headline: string;
  intro: string;
  heading: string;
  items: readonly (readonly [string, string, string?])[];
  note: readonly [string, string];
  reference?: readonly [string, string];
  action: readonly [string, string];
};

export function getCompanyPage(path: string): CompanyPageData | undefined {
  const slug = path.match(/^\/company\/([a-z-]+)$/)?.[1];
  return slug && Object.hasOwn(companyPages, slug) ? companyPages[slug as keyof typeof companyPages] : undefined;
}
