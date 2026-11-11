export const blockchainHref = '/services/blockchain';

export const blockchainServices = [
  {
    slug: 'smart-contract-development',
    name: 'Smart Contract Development',
    headline: 'Put Your Transaction Rules on the Blockchain.',
    intro: 'AayaamX develops Smart Contracts for digital payments and asset workflows. We help define who can act, which conditions need to be met and what your application should show when a transaction succeeds or fails.',
    capabilities: [
      ['Payment & Transfer Rules', 'Define how payments are initiated, approved and recorded.'],
      ['Permissions & Exceptions', 'Plan who can manage contract settings and what happens when a transaction cannot complete.'],
      ['Testing & Deployment', 'Test expected and failed transactions before connecting contracts to your application.'],
    ],
    project: 'smart-contract-payment-application',
    projectDetail: 'AayaamX built the contract logic for a Web3 payment application and connected it to verified transaction updates in the app.',
    brief: 'Tell us what should happen on-chain, who can initiate it and what users need to see afterward.',
  },
  {
    slug: 'web3-development',
    name: 'Web3 Development',
    headline: 'Make On-Chain Actions Easy to Use.',
    intro: 'AayaamX builds Web3 Applications that connect a familiar web experience to wallets and Smart Contracts. Users can see what they are approving and follow a transaction from submission to confirmation.',
    capabilities: [
      ['Wallet Connection', 'Help users connect a supported wallet and switch networks when needed.'],
      ['Transaction Experience', 'Show the action, confirmation status and next step in plain language.'],
      ['Product Integrations', 'Connect on-chain activity to the records and dashboards your application needs.'],
    ],
    project: 'smart-contract-payment-application',
    projectDetail: 'The app gives users one place to connect a wallet, sign a payment and see its confirmed status.',
    brief: 'Share the action people need to complete, the wallets they use and the networks your product should support.',
  },
  {
    slug: 'digital-wallet-development',
    name: 'Digital Wallet Development',
    headline: 'Give Users a Clear View of Their Digital Assets.',
    intro: 'AayaamX builds Digital Wallet experiences for products that need to receive, track or transfer digital assets. We design around the assets you support, how access is managed and how users follow each transaction.',
    capabilities: [
      ['Asset & Network Support', 'Define supported assets and networks, and show users where to send or receive funds.'],
      ['Balances & Activity', 'Display transaction history, pending activity and confirmed balances.'],
      ['Deposit Workflows', 'Connect deposit addresses and network confirmations to your platform’s payment records.'],
    ],
    project: 'blockchain-crypto-payment-gateway',
    projectDetail: 'The gateway generates deposit addresses, tracks confirmations across networks and records payments through settlement.',
    brief: 'Tell us which assets and networks you need, and who should control access to the wallet.',
  },
  {
    slug: 'defi-development',
    name: 'DeFi Development',
    headline: 'Build the Software Behind On-Chain Finance.',
    intro: 'AayaamX develops DeFi software for decentralised exchange, token liquidity and vault workflows. We help translate protocol rules into contracts, user interfaces and the monitoring needed to operate them.',
    capabilities: [
      ['Liquidity Workflows', 'Design how users add or withdraw assets and see their position.'],
      ['Vault Contract Logic', 'Define the rules for deposits, withdrawals and access before implementation.'],
      ['Protocol Interfaces', 'Show transaction details and position changes in a web application connected to the protocol.'],
    ],
    project: 'smart-contract-payment-application',
    projectDetail: 'This Web3 commerce project shows how AayaamX connected smart-contract payments and escrow to a user-facing application.',
    brief: 'Bring your protocol rules, target networks and the actions users should be able to take.',
  },
] as const;

export type BlockchainService = (typeof blockchainServices)[number];

export function getBlockchainService(path: string) {
  return blockchainServices.find(service => path === blockchainHref + '/' + service.slug);
}
