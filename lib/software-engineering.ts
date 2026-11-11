const root = '/services/software-engineering';

export const engineeringPages = [
  {
    href:root, name:'Software Engineering', headline:'Software that fits the way you work.',
    intro:'Build a new product or replace a system your team has outgrown. AayaamX designs and develops Custom Software, SaaS Platforms, Web Applications and Mobile Apps.',
    flow:['Customer Experience','Business Logic','Connected Systems'],
    deliverables:[
      ['Custom Business Platforms','Replace manual work with portals, dashboards and internal tools built around your workflows.'],
      ['SaaS Products','Give each customer their own workspace, with clear roles and billing rules.'],
      ['Web & Mobile Applications','Build experiences customers and staff can use on the devices they already rely on.'],
    ],
    scope:'Tell us who uses the system, what they need to do, and which tools the new software should connect to.',
    project:'bus-booking-admin-management-system',
  },
  {
    href:root + '/custom-software-development', name:'Custom Software Development', headline:'Software built around how your business works.',
    heroImage:{src:'/service-heroes/custom-software-development.webp', alt:'Operations workspace with separate approval queue and reporting panels'},
    intro:'AayaamX builds Custom Software for operations that need their own tools. Bring workflows, records and reporting into one platform, with integrations for the systems your team already uses.',
    flow:['Capture a Request','Assign and Approve','Track the Outcome'],
    focus:{
      title:'Give your teams one place to run operations.',
      description:'Start with the work people do across spreadsheets, inboxes and disconnected tools. We map the steps, decide what to automate and build the first release around the workflow that matters most.',
      examples:['Operations and booking platforms','Internal portals and approval workflows','Management dashboards and reporting'],
      projectDetail:'The booking platform connects three sides of the same operation. Passengers book seats online, staff manage routes and schedules, and drivers see their passenger lists in a dedicated portal.',
    },
    deliverables:[
      ['Internal Tools & Portals','Give teams one place to manage requests, track progress and see who owns the next step.'],
      ['Integrations & Data Migration','Map existing records, connect APIs and plan how data moves into the new system.'],
      ['Roles & Reporting','Control access by role and give managers the reports they need to make decisions.'],
    ],
    scope:'Bring one workflow that costs your team time today. We can use it to define what the first release should cover.',
    project:'bus-booking-admin-management-system',
  },
  {
    href:root + '/saas-development', name:'SaaS Development', headline:'One product. A workspace for every customer.',
    heroImage:{src:'/service-heroes/saas-development.webp', alt:'SaaS dashboard with two tenant workspaces and a billing panel'},
    intro:'AayaamX builds SaaS Platforms that let organisations manage their own teams, data and settings. We plan onboarding, access and account administration around how your customers will use the product.',
    flow:['Create an Account','Set Up a Workspace','Invite the Team'],
    focus:{
      title:'Make it easy for the next customer to get started.',
      description:'Decide what a customer can set up on their own, what your team manages centrally and what needs to stay separate for each organisation. Add custom branding or domains where the product calls for them.',
      examples:['Multi-tenant B2B products','White-label customer platforms','Self-service onboarding and administration'],
      projectDetail:'We built a shared learning platform where each academy can launch a branded portal under its own domain, manage admissions and courses, and track learner progress.',
    },
    deliverables:[
      ['Multi-Tenant Workspaces','Separate customer data and settings so each organisation has its own workspace.'],
      ['Onboarding & Billing','Define sign-up, invitations, plan changes and billing-provider integrations.'],
      ['Product Administration','Give your team tools to manage accounts, support customers and understand adoption.'],
    ],
    scope:'Tell us who buys the product, who uses it and what should be included in each workspace or plan.',
    project:'white-label-lms-platform',
  },
  {
    href:root + '/web-application-development', name:'Web Application Development', headline:'Make everyday work easier in the browser.',
    heroImage:{src:'/service-heroes/web-application-development.webp', alt:'Customer portal in wide and compact browser layouts'},
    intro:'AayaamX builds Web Applications for customers and teams, from booking experiences and self-service portals to dashboards. We develop the interface and connect it to the data and systems behind it.',
    flow:['Choose a Seat','Confirm the Booking','Send the Ticket'],
    focus:{
      title:'Design around the task people came to finish.',
      description:'We map the steps from first visit to completion, then build responsive screens, role-based access and the APIs that keep records current. Teams can review working versions before release.',
      examples:['Customer portals and online booking','Admin dashboards and reporting tools','Account access and integrated web workflows'],
      projectDetail:'For ResVIP, the browser experience lets travellers search by route, date and passenger count, explore coach interiors and track a ticket.',
    },
    deliverables:[
      ['Responsive Interfaces','Design for desktop and mobile browsers, including keyboard navigation and clear loading and error states.'],
      ['Accounts & Permissions','Build sign-in, user roles and the admin tools your product needs.'],
      ['Backend & Integrations','Connect the interface to databases and existing services through documented APIs.'],
    ],
    scope:'Share the main task a user needs to complete in the browser and which existing systems the app needs to use.',
    project:'resvip-travel-booking',
  },
  {
    href:root + '/mobile-app-development', name:'Mobile App Development', headline:'Build an app people can use on the move.',
    heroImage:{src:'/service-heroes/mobile-app-development.webp', alt:'Two smartphones showing booking and confirmation screens'},
    intro:'AayaamX develops native and cross-platform Mobile Apps for iOS and Android. We build consumer products and enterprise tools that connect to your existing systems and support the tasks people need to finish on their phones.',
    flow:['Open the App','Complete a Task','Sync the Update'],
    focus:{
      title:'Choose the right build for your app and its users.',
      description:'We help choose between Flutter or React Native for a shared codebase and Swift or Kotlin for native development. We plan device permissions, secure storage and store submission around what the app needs.',
      examples:['Consumer apps for iOS and Android','Mobile workflows for field and operations teams','Mobile apps connected to web platforms and CRMs'],
      projectDetail:'For Succeed Capital FX, the mobile trading apps share a backend with the web terminal and brokerage CRM. The brokerage can manage those channels through one connected platform.',
    },
    deliverables:[
      ['iOS & Android Experiences','Design navigation, forms and device features around how people use your app on the move.'],
      ['Sync & Notifications','Connect to your backend and plan for slow networks, offline states and push notifications where needed.'],
      ['Release & Handover','Prepare app-store submissions, release testing and a handover for future updates.'],
    ],
    scope:'Tell us what people need to do on their phones, which devices they use and whether the app must work offline.',
    project:'succeed-capital-fx',
  },
] as const;

export function getEngineeringPage(path:string) {
  return engineeringPages.find(page => page.href === path);
}

export type EngineeringPageData = (typeof engineeringPages)[number];
