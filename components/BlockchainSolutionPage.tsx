import Link from 'next/link';
import ArchitectureHero from './ArchitectureHero';
import SolutionImplementation from './SolutionImplementation';
import { ArrowUpRight, Blocks, Coins, Fingerprint, Network, Wallet } from 'lucide-react';
import type { SolutionPageData } from '@/lib/solutions';
import { caseStudies, caseStudyHref } from '@/lib/portfolio';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './BlockchainSolutionPage.module.css';

const overviewExample = {
  title: 'How a Digital Payment Fits Into an Existing Product',
  paragraphs: [
    'A merchant adds a digital asset payment option to an existing checkout. The checkout shows the asset, network and amount the customer needs to send. After payment, the customer can see its status in the same order screen.',
    'Behind the scenes, the payment system matches the transfer to the order and records the result. The merchant’s team can review unmatched payments from its operations dashboard.',
  ],
};

const topics = {
  'digital-assets': {
    icon: Coins,
    headline: 'Give Every Digital Asset Transfer a Clear Status.',
    scopeDetails: [
      'Show customers what they hold, which network each asset is on, and which deposits or transfers are still pending.',
      'Give customers the correct deposit address and show when the network has confirmed a transfer and when your platform has credited it.',
      'Give staff a searchable history that links each platform balance update to its blockchain transaction. Flag deposits that need review.',
    ],
    example: {
      title: 'What a Customer Sees After Sending a Deposit',
      paragraphs: [
        'A customer sends a supported digital asset to the deposit address shown in your app. The app shows that the transfer is pending, updates the status as the network confirms it, and marks it as credited after your platform updates the balance.',
        'If the customer asks where the deposit is, staff can look up the same transaction and see which step is still pending.',
      ],
    },
    question: 'Can we add digital asset tracking to an existing platform?',
    answer: 'Yes, where your platform and providers expose the required data. We start by mapping the account records, wallet or payment provider and networks you already use, then decide what the first release needs to connect.',
    additionalQuestions: [
      ['Why can a deposit be confirmed but still pending in our app?', 'A network confirmation and a balance update are separate events. Your app can show both so customers know whether the transfer is still waiting on the network or your platform is processing it.'],
      ['How do we start with a smaller release?', 'Pick one asset, one network and one workflow, such as deposits. Agree when to credit the balance and what staff should see when a deposit needs review before adding more assets or transfers.'],
    ],
    brief: 'Bring the assets and networks you want to support, your current wallet or payment provider, and one example of a deposit your staff had to investigate.',
    project: 'blockchain-crypto-payment-gateway',
  },
  tokenization: {
    icon: Fingerprint,
    headline: 'Turn an Entitlement Into a Token People Can Use.',
    scopeDetails: [
      'Define who can issue a token and give staff a record of when it was issued and which account holds it.',
      'Decide whether holders can pass a token to someone else, and show them which transfers are allowed before they act.',
      'Give holders a screen that explains what the token represents, where they can use it and what actions are available.',
    ],
    example: {
      title: 'How a Member Uses a Token for Access',
      paragraphs: [
        'A membership platform issues a token to an eligible member. When the member connects their wallet, the app checks whether that wallet holds the required token and shows which area it grants access to.',
        'If membership expires, the app checks the membership status before granting access. Staff can review when the token was issued and whether the membership is still active.',
      ],
    },
    question: 'Do we need interchangeable tokens or unique ones?',
    answer: 'That depends on what each token represents. For example, Ethereum’s ERC-20 standard supports interchangeable units, while ERC-721 tracks distinct items. We start by defining what users can do with the token, then choose a suitable standard.',
    reference: ['Ethereum token standards', 'https://ethereum.org/developers/docs/standards/tokens'],
    additionalQuestions: [
      ['Can we restrict transfers?', 'We can design transfer rules around the use case. For example, a membership token can be tied to the original holder. We agree the restrictions before choosing the contract design.'],
      ['Where do names and contact details go?', 'We can keep personal details in your existing application and use the blockchain to record the token and its holder address. We agree which data each system needs before building.'],
    ],
    brief: 'Bring one example of what the token should represent, who can issue it and what happens when a holder transfers it, uses it or loses access.',
  },
  'decentralized-platforms': {
    icon: Network,
    headline: 'Make Wallet Actions Easy to Understand.',
    scopeDetails: [
      'Show users which wallet and network they are using, and explain the action in the app before the wallet asks them to approve it.',
      'Connect the app to smart contracts that apply your product rules, such as recording a payment.',
      'Show whether the user cancelled, the transaction is waiting on the network or it has been confirmed, with a clear next step for each outcome.',
    ],
    example: {
      title: 'What a Buyer Sees at a Wallet Checkout',
      paragraphs: [
        'The buyer connects a supported wallet and reviews the amount and network in the checkout. After they approve the transaction in their wallet, the order page shows that the payment is waiting for confirmation.',
        'Once the network confirms the payment, the app updates the order. If the buyer cancels before submitting, the order stays unpaid and they can return to checkout.',
      ],
    },
    question: 'Does the whole application have to run on a blockchain?',
    answer: 'A typical decentralized app combines a regular interface with smart contracts. We agree which actions need a blockchain record and which features, such as search or notifications, can run in your existing software.',
    reference: ['Ethereum guide to decentralized apps', 'https://ethereum.org/en/developers/docs/dapps/'],
    additionalQuestions: [
      ['Can we add wallet features to our existing website?', 'Yes, if your existing checkout or account system can share the necessary order and user data. We can scope wallet connection and transaction tracking as one part of that experience.'],
      ['What if the customer connects to the wrong network?', 'The app can explain which network is required and ask the customer to switch before requesting a signature. We test that alongside cancelled and delayed transactions.'],
    ],
    brief: 'Share one action users need to complete, the wallets or networks you expect to support, and the screen where users should see the result.',
    project: 'smart-contract-payment-application',
  },
  'wallet-infrastructure': {
    icon: Wallet,
    headline: 'Connect Wallet Activity to Your Platform Balances.',
    scopeDetails: [
      'Define which assets and networks your platform supports and show the right deposit details for each account.',
      'Detect incoming deposits, track network confirmations and flag transfers that do not match an expected record.',
      'Record the credit once it meets your platform’s rules, then give staff a transaction reference they can use to check it.',
    ],
    example: {
      title: 'How a Deposit Reaches the Right Account',
      paragraphs: [
        'Your app requests a deposit address for a customer on a supported network. When a transfer arrives, the wallet integration matches it to that address and tracks confirmations.',
        'Once the deposit meets your crediting rules, the platform updates the customer’s balance. If the same deposit notification arrives twice, it should still produce a single credit. Staff can trace that credit back to the network transaction.',
      ],
    },
    question: 'Can we use an existing wallet?',
    answer: 'Yes, if it supports your networks and the actions your app needs. We can also scope deposit tracking and balance updates. An early decision is who controls the keys and who can approve transactions.',
    reference: ['Ethereum wallet guide', 'https://ethereum.org/en/wallets/'],
    additionalQuestions: [
      ['Who controls the wallet keys?', 'That depends on your setup. Users can control their own wallets, or you can connect a provider that manages keys for your platform. We scope access and approval responsibilities around your chosen setup.'],
      ['What if a deposit cannot be matched to an account?', 'We can route unmatched deposits to a review queue with the transaction reference, asset and network. Your team defines how those cases are investigated and resolved.'],
    ],
    brief: 'Bring your wallet provider, supported assets and networks, and the rules you use to credit deposits or approve withdrawals.',
    project: 'blockchain-crypto-payment-gateway',
  },
} as const;

export default function BlockchainSolutionPage({ data }: { data: SolutionPageData }) {
  const { group, family, link, detail, title, intro } = data;
  const slug = link?.href.slice(group.href.length + 1) as keyof typeof topics | undefined;
  const topic = slug ? topics[slug] : undefined;
  const example = topic?.example ?? overviewExample;
  const Icon = topic?.icon ?? Blocks;
  const projectSlug = topic && 'project' in topic ? topic.project : !link ? family.project : undefined;
  const project = caseStudies.find(item => item.slug === projectSlug);

  return <>
    <Navbar/>
    <main className={styles.page} data-blockchain-solution="">
      {link && <ArchitectureHero
        trail={[[ 'Solutions', '/solutions' ], [ group.title, group.href ]]}
        label={title}
        title={topic?.headline ?? family.headline}
        intro={intro}
        jump={['See What We Build', '#chain-options']}
        preview={<div className={styles.stage} aria-hidden="true"><div className={styles.stack}><span/><span/><span><Icon size={58} strokeWidth={1.45}/></span></div></div>}
      />}
      <div className={styles.inner}>

        <section className={styles.options} aria-labelledby="chain-options">
          <h2 id="chain-options">{detail ? 'What We Can Build' : 'Explore Blockchain Solutions'}</h2>
          {detail && link ? <SolutionImplementation href={link.href} scope={detail.scope} descriptions={topic?.scopeDetails}/> :
            <ul>{group.links.map(item => <li key={item.href}>
              <Link href={item.href}>{item.title}<ArrowUpRight size={17} aria-hidden="true"/></Link>
              <p>{family.details[item.href.slice(group.href.length + 1)].intro}</p>
            </li>)}</ul>}
        </section>

        <section className={styles.brief} aria-labelledby="chain-example">
          <h2 id="chain-example">{example.title}</h2>
          {example.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <div className={styles.grid}>
          <section aria-labelledby="chain-questions">
            <h2 id="chain-questions">Common Questions</h2>
            <details><summary>{topic?.question ?? 'Where does blockchain fit into our product?'}</summary>
              <p>{topic?.answer ?? 'Start with the action users need to complete. We can help decide whether a shared record of ownership or transfers is useful, and how it should connect to the software your team already uses.'}</p>
              {topic && 'reference' in topic && <a href={topic.reference[1]}>{topic.reference[0]} <ArrowUpRight size={15} aria-hidden="true"/></a>}
            </details>
            {(topic?.additionalQuestions ?? [
              ['Can this connect to our existing software?', 'We review your checkout, customer accounts and payment provider to see what can be connected and which parts need to be built.'],
              ['How do we test before launch?', 'We can plan a test environment to review successful transactions, rejected actions and delays before connecting the product to a live network.'],
            ]).map(([question, answer]) =>
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            )}
          </section>
          <section className={styles.brief} aria-labelledby="chain-brief">
            <h2 id="chain-brief">What to Bring to the First Call</h2>
            <p>{topic?.brief ?? 'Share who will use the product, what they need to do with the asset and which networks or tools you already use.'}</p>
            <Link href="/company#contact">Share Your Blockchain Use Case <ArrowUpRight size={17} aria-hidden="true"/></Link>
          </section>
        </div>

        {project && <section className={styles.proof} aria-labelledby="chain-project">
          <div><h2 id="chain-project">{project.name}</h2><p>{project.summary}</p></div>
          <a href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={17} aria-hidden="true"/></a>
        </section>}
        {link && <nav className={styles.related} aria-label="Related blockchain solutions">
          {group.links.filter(item => item.href !== link.href).map(item => <Link key={item.href} href={item.href}>{item.title}<ArrowUpRight size={15} aria-hidden="true"/></Link>)}
        </nav>}
      </div>
    </main>
    <SiteFooter/>
  </>;
}
