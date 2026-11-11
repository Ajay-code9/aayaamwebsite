const implementation: Record<string, readonly (readonly [string, ...string[]])[]> = {
  "digital-payments": [
    [
      "Create a deposit reference for each order and show when the payment is detected and confirmed.",
      "Node.js",
      "Payment provider APIs"
    ],
    [
      "Match confirmed payments against orders and retain records for finance reconciliation.",
      "PostgreSQL",
      "SQL"
    ],
    [
      "Give staff a queue for unmatched or duplicate notifications and a place to record their decision.",
      "React",
      "Redis"
    ]
  ],
  "financial-platforms": [
    [
      "Build a portal where customers can submit account details, see their status and review activity.",
      "Next.js",
      "TypeScript"
    ],
    [
      "Give operations a searchable history of transactions and exports that reconcile to the underlying records.",
      "Node.js",
      "PostgreSQL"
    ],
    [
      "Set which actions support, finance and administrators can perform, with a record of changes.",
      "OpenID Connect",
      "Role-based access control"
    ]
  ],
  "financial-automation": [
    [
      "Collect finance requests and check required fields before they enter the approval queue.",
      "React",
      "Node.js"
    ],
    [
      "Route exceptions to a reviewer and preserve the decision and its supporting records.",
      "PostgreSQL",
      "Redis"
    ],
    [
      "Send approved updates back to existing finance tools and surface failed updates for follow-up.",
      "REST APIs",
      "Webhooks"
    ]
  ],
  "broker-infrastructure": [
    [
      "Create or link trading accounts after approval and show the result in the client portal.",
      "Node.js",
      "Trading platform APIs"
    ],
    [
      "Bring acknowledgements, fills and rejections back to the portal where the execution interface supports them.",
      "FIX",
      "WebSockets"
    ],
    [
      "Give staff a view of account and trading activity with links to the original records.",
      "React",
      "PostgreSQL"
    ]
  ],
  "brokerage-crm-ecosystem": [
    [
      "Collect applications and route verification results or missing documents to the right staff queue.",
      "Next.js",
      "Identity verification APIs"
    ],
    [
      "Give traders a portal for account status and staff a record of what changed.",
      "React",
      "TypeScript"
    ],
    [
      "Keep account IDs and status aligned between the CRM and trading platform, and flag mismatches.",
      "Node.js",
      "PostgreSQL",
      "Trading platform APIs"
    ]
  ],
  "ib-and-affiliate-management": [
    [
      "Register introducing brokers and attach referral links or codes to the appropriate partner record.",
      "Next.js",
      "PostgreSQL"
    ],
    [
      "Apply the brokerage’s commission rules and show staff which activity contributed to each amount.",
      "Node.js",
      "SQL"
    ],
    [
      "Show partners their own referrals and give operations a separate view for disputes or adjustments.",
      "React",
      "Role-based access control"
    ]
  ],
  "evaluation-platforms": [
    [
      "Collect trader sign-ups and link each enrolment to the correct programme and account.",
      "Next.js",
      "Trading platform APIs"
    ],
    [
      "Record stage changes and retain the data that explains each result.",
      "Node.js",
      "PostgreSQL"
    ],
    [
      "Send incomplete or disputed results to staff for review before advancing the trader.",
      "React",
      "Redis"
    ]
  ],
  "challenge-management": [
    [
      "Let staff configure targets and limits and preserve the version assigned to each trader.",
      "React",
      "PostgreSQL"
    ],
    [
      "Check incoming trading activity against the assigned rules and flag incomplete data.",
      "Node.js",
      "Trading platform APIs"
    ],
    [
      "Keep the events and rule changes staff need to explain an exception.",
      "PostgreSQL",
      "SQL"
    ]
  ],
  "trader-dashboards": [
    [
      "Show account activity and progress towards the targets defined for the current stage.",
      "React",
      "TypeScript"
    ],
    [
      "Display remaining limits and when the platform last supplied an update.",
      "WebSockets",
      "Node.js"
    ],
    [
      "Show what the current result means and where to go next.",
      "Next.js",
      "PostgreSQL"
    ]
  ],
  "payout-management": [
    [
      "Collect payout requests and apply the firm’s eligibility rules before review.",
      "Next.js",
      "Node.js"
    ],
    [
      "Give reviewers the evidence behind each decision and retain approval history.",
      "React",
      "PostgreSQL"
    ],
    [
      "Match provider updates to approved requests and surface unmatched payments.",
      "Payment provider APIs",
      "Webhooks"
    ]
  ],
  "digital-assets": [
    [
      "Display asset holdings and transfers with their network and current status.",
      "React",
      "TypeScript"
    ],
    [
      "Use provider or network events to follow deposits from detection through confirmation.",
      "Node.js",
      "Blockchain RPC APIs"
    ],
    [
      "Link platform credits to their original transactions so operations can investigate differences.",
      "PostgreSQL",
      "SQL"
    ]
  ],
  "tokenization": [
    [
      "Define who can issue a token and let staff review issuance and current holder records.",
      "Solidity",
      "OpenZeppelin Contracts"
    ],
    [
      "Implement transfer rules appropriate to the chosen network and the asset.",
      "Solidity",
      "Foundry"
    ],
    [
      "Show what the token represents and which actions the holder can take.",
      "Next.js",
      "viem"
    ]
  ],
  "decentralized-platforms": [
    [
      "Connect supported wallets and explain the action before the user signs it.",
      "React",
      "WalletConnect"
    ],
    [
      "Connect the application to the contract and test success and failure cases before release.",
      "Solidity",
      "Foundry"
    ],
    [
      "Show when a transaction is pending, confirmed or rejected, with a next step.",
      "viem",
      "Blockchain RPC APIs"
    ]
  ],
  "wallet-infrastructure": [
    [
      "Request deposit addresses for supported assets from the chosen wallet provider.",
      "Node.js",
      "Wallet provider APIs"
    ],
    [
      "Track network confirmations and route deposits that cannot be matched to an account for review.",
      "Webhooks",
      "Blockchain RPC APIs"
    ],
    [
      "Record credits once and keep references that reconcile to wallet activity.",
      "PostgreSQL",
      "SQL"
    ]
  ],
  "enterprise-crm": [
    [
      "Put customer details, conversations and open work on a shared account record.",
      "Next.js",
      "PostgreSQL"
    ],
    [
      "Assign follow-ups and give each team visibility into the next owner.",
      "React",
      "Node.js"
    ],
    [
      "Set access by role and connect customer or activity updates from tools already in use.",
      "OpenID Connect",
      "REST APIs"
    ]
  ],
  "erp-systems": [
    [
      "Track purchase orders, stock or other operational records in one place.",
      "React",
      "PostgreSQL"
    ],
    [
      "Route approvals and show what is waiting on each department.",
      "Node.js",
      "Redis"
    ],
    [
      "Map existing records and validate a sample import before switching over.",
      "SQL",
      "REST APIs"
    ]
  ],
  "workflow-automation": [
    [
      "Collect requests in a form and assign them using the information submitted.",
      "React",
      "Node.js"
    ],
    [
      "Apply approval rules and keep cases that need judgement in a staff review queue.",
      "Redis",
      "PostgreSQL"
    ],
    [
      "Send approved updates to connected tools and record failed handoffs.",
      "REST APIs",
      "Webhooks"
    ]
  ],
  "business-intelligence": [
    [
      "Bring source records together and define how each metric is calculated.",
      "Python",
      "PostgreSQL"
    ],
    [
      "Build dashboards with filters and links to underlying records.",
      "React",
      "Apache ECharts"
    ],
    [
      "Track refresh jobs and show when data is incomplete or out of date.",
      "Python",
      "SQL"
    ]
  ],
  "intelligent-assistants": [
    [
      "Connect approved guides and help desk records within each user’s access rules.",
      "REST APIs",
      "PostgreSQL"
    ],
    [
      "Draft replies and attach the guidance used so staff can check it.",
      "Python",
      "LLM APIs"
    ],
    [
      "Hand off missing answers or unusual requests with their context intact.",
      "React",
      "Node.js"
    ]
  ],
  "ai-analytics": [
    [
      "Connect approved reports and define what data the assistant can use.",
      "Python",
      "PostgreSQL"
    ],
    [
      "Explain changes across dates, teams or locations using agreed calculations.",
      "SQL",
      "LLM APIs"
    ],
    [
      "Link answers to the source records managers can inspect.",
      "React",
      "TypeScript"
    ]
  ],
  "ai-workflow-automation": [
    [
      "Bring documents into a queue from email, forms or existing storage.",
      "Node.js",
      "REST APIs"
    ],
    [
      "Extract required fields and send unclear or missing values to staff for review.",
      "Python",
      "OCR",
      "LLM APIs"
    ],
    [
      "Write approved fields to the target system and record the update outcome.",
      "PostgreSQL",
      "Webhooks"
    ]
  ],
  "knowledge-management-systems": [
    [
      "Import approved documents and respect the access rules of the source system.",
      "REST APIs",
      "OpenID Connect"
    ],
    [
      "Find relevant passages and attach citations to answers.",
      "Python",
      "PostgreSQL + pgvector",
      "LLM APIs"
    ],
    [
      "Refresh changed documents and route unanswered questions to their owner.",
      "Node.js",
      "Redis"
    ]
  ]
};

export function getSolutionImplementation(slug: string) {
  return Object.hasOwn(implementation, slug) ? implementation[slug] : undefined;
}
