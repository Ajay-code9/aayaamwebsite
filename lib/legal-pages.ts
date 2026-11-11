import { company, disclaimer, legalInformation, riskWarning } from './company';

export const legalPages = [
  {
    href: '/legal/privacy-policy',
    title: 'Privacy Policy',
    description: 'How Aayaam Nextgen Technologies Private Limited handles information from this website and project enquiries.',
    sections: [
      ['scope', 'Who We Are', 'Aayaam Nextgen Technologies Private Limited, doing business as AayaamX, operates this website. This policy covers website visits and enquiries you send us. If we process personal information on behalf of a client during a project, the applicable client agreement and data processing terms govern that work.'],
      ['collection', 'Information We Receive', 'When you email or call us, we may receive your name, contact details, company information and anything you choose to share about your project. Website hosting and security systems may process technical information such as IP address, browser details, requested pages and access times to deliver and protect the site.'],
      ['forms', 'How the Project Enquiry Form Works', 'The form prepares your brief in your browser. It does not submit the brief to a website server. You can copy or download it, or open a draft in your email app and choose whether to send it. We receive the information you choose to send. Please leave passwords, payment card details and production customer records out of initial enquiries.'],
      ['use', 'How We Use Information', 'We use information to respond to enquiries, understand requirements, prepare proposals, manage business communications and protect the website. We may also use it to maintain necessary records, comply with applicable obligations and resolve disputes.'],
      ['storage', 'Browser Storage', 'The site uses browser local storage to remember your selected light or dark theme. You can remove that preference by clearing site data in your browser.'],
      ['sharing', 'Who May Receive Information', 'Relevant staff and service providers may receive information as needed to operate the website, manage communications or respond to an enquiry. We may also disclose information when required by applicable law or to protect legal rights. External websites and your email provider apply their own privacy terms.'],
      ['retention', 'Retention and Security', 'We retain information as needed to handle the enquiry or business relationship and meet applicable recordkeeping, legal and dispute-resolution needs. Retention depends on the type of information and the reason we hold it. Please contact us to arrange a suitable way to share sensitive project materials.'],
      ['requests', 'Privacy Requests and Concerns', 'Contact us to ask how we handle your information or to request access, correction or deletion. We may need to verify your identity before acting. Available rights and any limits depend on applicable law. If we rely on your consent for a specific use, you can contact us to withdraw it.'],
      ['updates', 'Changes to This Policy', 'We may update this policy when website features or information-handling practices change. The current version will be available on this page.'],
    ],
  },
  {
    href: '/legal/terms-and-conditions',
    title: 'Terms & Conditions',
    description: 'Terms for using the AayaamX website and for starting a software project discussion.',
    sections: [
      ['scope', 'Website Use and Project Agreements', 'Aayaam Nextgen Technologies Private Limited, doing business as AayaamX, provides this website to explain its services and allow visitors to contact the company. Browsing the site or submitting an enquiry does not create a project engagement. A signed agreement or statement of work governs any commissioned services and takes precedence for that engagement.'],
      ['services', 'Nature of Our Services', disclaimer, legalInformation],
      ['scope-delivery', 'Scope, Delivery and Changes', 'Project scope, milestones, acceptance criteria and support arrangements are agreed in writing. Changes to requirements, integrations or delivery assumptions can affect fees and timelines. The project agreement sets out how those changes are approved.'],
      ['fees', 'Fees and Payment', 'Pricing, currency, taxes, invoicing, payment milestones and cancellation terms are set out in the applicable project agreement. Examples and product descriptions on this website are provided for discussion. Confirm current availability and scope with our team.'],
      ['responsibilities', 'Client Responsibilities and Third Parties', 'Clients are responsible for providing timely feedback, authorised access and materials they have the right to share. Where work depends on external providers, their terms, approvals and availability may affect what can be delivered. Responsibilities for operating a product are agreed in the project contract.'],
      ['ownership', 'Intellectual Property and Confidentiality', 'Website content and branding belong to AayaamX or the relevant rights holders. Use of project deliverables, ownership of source code, third-party licences and confidentiality obligations are governed by the written agreement for that project. Avoid sending confidential material through an initial enquiry unless an appropriate arrangement is in place.'],
      ['procurement', 'NDA, Data Security and Vendor Review', 'If your organisation requires an NDA, security questionnaire, data processing agreement or vendor onboarding documents, raise those requirements during project discussions. Before sharing production data or credentials, agree in writing how access, permitted use, retention and handover will be handled for your project.'],
      ['acceptable-use', 'Acceptable Use', 'Use the website lawfully. Do not attempt to gain unauthorised access, disrupt the website, impersonate another person or submit material you do not have permission to share.'],
      ['risk', 'Availability and Delivery Risk', riskWarning, 'The website and its examples are provided for general information. Service warranties, acceptance, remedies and liability for a project are governed by the applicable agreement and law. Nothing in these terms limits rights that applicable law does not allow us to limit.'],
      ['changes', 'Changes and Questions', 'We may update these website terms as the site changes. Any change to an existing project agreement follows that agreement’s terms. Contact us with questions about website use or an engagement.'],
    ],
  },
  { href: '/legal/disclaimer', title: 'Disclaimer', description: disclaimer, sections: [['information', 'General Information', legalInformation]] },
  { href: '/legal/risk-warning', title: 'Risk Warning', description: riskWarning, sections: [] },
] as const;

export type LegalPage = (typeof legalPages)[number];

export const legalContact = { email: company.email, address: company.address };
