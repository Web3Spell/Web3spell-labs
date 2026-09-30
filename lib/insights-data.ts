export interface InsightSection {
  heading: string
  body: string[]
  codeSnippet?: {
    label: string
    code: string
  }
  takeaways?: string[]
}

export interface InsightArticle {
  slug: string
  number: string
  title: string
  subtitle: string
  category: 'Design & UX' | 'Ecosystem & DevRel' | 'Protocol Engineering' | 'Zero-Knowledge' | 'Market Structure'
  readTime: string
  date: string
  author: string
  authorRole: string
  excerpt: string
  tags: string[]
  relatedCaseStudy: 'civitas' | 'chainpot' | 'divergence-router' | 'core-nexus'
  sections: InsightSection[]
}

export const insightArticles: InsightArticle[] = [
  {
    slug: 'web3-ux-manifesto',
    number: '01',
    title: 'The Web3 UX Manifesto: Designing for Cryptographic & Asynchronous State',
    subtitle:
      'Why copying Web2 SaaS templates breaks onchain applications, and how we design interfaces around client-side ZK proving, passkey account abstraction, and deterministic transaction states.',
    category: 'Design & UX',
    readTime: '8 min read',
    date: 'Sep 15, 2026',
    author: 'Swarna Nagrani',
    authorRole: 'Co-Founder, Design & Operations',
    excerpt:
      'Most users do not abandon Web3 apps because of visual styling. They leave because the interface forces them to act as their own systems engineer before signing a transaction.',
    tags: ['UX Architecture', 'ERC-4337 Passkeys', 'Client-Side ZK', 'Design Systems'],
    relatedCaseStudy: 'civitas',
    sections: [
      {
        heading: '01. The Fallacy of the "Clean" Web2 Wrapper',
        body: [
          'For the last four years, the standard advice in crypto design has been to make Web3 look like Web2. Teams hire generalist product designers who strip away technical indicators, wrap everything in minimal cards, and hand the Figma file to frontend engineers. The result looks great in a static pitch deck and falls apart the moment a real user connects a wallet on mainnet.',
          'Onchain software has fundamentally different physics than a REST API. In Web2, clicking a button triggers an optimistic database write that resolves in 80 milliseconds. In Web3, a single user action might require generating a Groth16 zero-knowledge witness in a browser WebWorker, querying an offchain MPC cluster, simulating slippage across two liquidity pools, and awaiting block finality. Hiding those mechanics behind a generic spinner does not simplify the product. It makes the user feel blind when custody of their capital is on the line.',
        ],
        takeaways: [
          'Never hide state transitions behind a generic loading spinner when user funds or cryptographic proofs are in flight.',
          'Replace raw hexadecimal call-data and cryptic RPC revert strings with plain-English pre-flight simulation summaries.',
          'Treat latency as a design material: structure 3-to-5 second proving or finality windows into deliberate, reassuring steps.',
        ],
      },
      {
        heading: '02. Designing Around Client-Side Zero-Knowledge Proving',
        body: [
          'When we engineered the interface for Civitas, our confidential payroll protocol on Solana, the hardest UX challenge was not visual layout. Every employee claim requires generating a Groth16 proof over a 20-level Poseidon Merkle tree directly inside the browser using snarkjs and WebAssembly. On a standard laptop or mobile browser, witness generation and proving take between 2.8 and 4.1 seconds.',
          'If a user clicks "Claim Salary" and the browser thread freezes for four seconds, they assume the app crashed and refresh the tab, destroying the ephemeral witness state. We solved this by moving proving into a dedicated WebWorker and designing a real-time 4-stage cryptographic progress drawer: (1) Fetching blinded MPC share from Nillion nilDB, (2) Computing Poseidon Merkle path locally, (3) Generating 256-byte Groth16 proof, and (4) Submitting to the Solana alt_bn128 verifier.',
        ],
        codeSnippet: {
          label: 'CIVITAS CLIENT-SIDE PROVING STATE MACHINE (UX TELEMETRY)',
          code: `type ClaimUxPhase =
  | { step: 1; label: 'Fetching blinded voucher share from Nillion nilDB...' }
  | { step: 2; label: 'Verifying depth-20 Poseidon Merkle path in local WASM...' }
  | { step: 3; label: 'Computing 256-byte Groth16 zero-knowledge proof (~3.2s)...' }
  | { step: 4; label: 'Dispatching nullifier & scheduling 5x jittered USDC payout...' }`,
        },
      },
      {
        heading: '03. Killing Seed-Phrase Friction with Passkey Account Abstraction',
        body: [
          'When we built ChainPot V4 on Base, our target users were not DeFi power users. Rotating savings circles (ROSCAs / chit funds) are used by everyday savers who want predictable USDC contributions and transparent yields via Compound V3. Asking a first-time saver to install a browser extension, write down 12 seed words, and buy ETH on Base just to pay $0.01 in gas kills 85% of the funnel before the first deposit.',
          'We integrated ERC-4337 smart accounts paired with WebAuthn biometric passkeys (FaceID / TouchID) and a USDC-sponsored Paymaster. Users create a non-custodial smart account in four seconds using their device biometrics, and gas fees are abstracted away completely. Good Web3 UX means matching the security model to the human workflow.',
        ],
        takeaways: [
          'Use biometric passkeys (WebAuthn + ERC-4337) for consumer and savings products while keeping hardware-wallet paths open for treasury operators.',
          'Sponsor gas via ERC-20 Paymasters so users only ever need to hold the settlement asset (e.g., USDC) they actually care about.',
          'Show explicit safety guarantees (such as atomic rollback protection or non-custodial pull-escrow rules) right next to the primary CTA.',
        ],
      },
    ],
  },
  {
    slug: 'devrel-as-first-motion',
    number: '02',
    title: 'Developer Relations as Your First Engineering Motion',
    subtitle:
      'Field lessons from activating 5,000+ developers across 75+ builder events and shipping 150+ verified projects in 36 hours at Core Nexus Bhopal.',
    category: 'Ecosystem & DevRel',
    readTime: '7 min read',
    date: 'Sep 08, 2026',
    author: 'Rythme Nagrani',
    authorRole: 'Co-Founder, Protocol Engineering & DevRel',
    excerpt:
      'Why developer ecosystems stall when DevRel is treated as a marketing function, and how engineer-led bootcamps, starter kits, and 36-hour war rooms convert attendees into shipped protocols.',
    tags: ['Developer Ecosystems', 'Core Nexus', 'Hackathon Ops', 'Technical GTM'],
    relatedCaseStudy: 'core-nexus',
    sections: [
      {
        heading: '01. Why Most Protocol Ecosystems Are Ghost Towns',
        body: [
          'We speak with L1, L2, and infrastructure founders every week who share the same frustration: they spent months engineering a novel VM, ZK coprocessor, or DeFi hook, launched a grant program, sponsored three conference booths, and still have zero external teams building real applications on their stack.',
          'The root cause is almost always the same. They treated Developer Relations as a content marketing role instead of a systems engineering role. Senior developers do not decide which protocol to build on because of X threads or branded hoodies. They decide during the first 15 minutes after cloning your starter repository. If your CLI fails on macOS, your testnet faucet is dry, or your documentation stops at "Hello World," serious builders close the tab and never come back.',
        ],
        takeaways: [
          'Audit your "Zero-to-First-Transaction" time before spending a single dollar on event sponsorships.',
          'Ship 2 to 3 production-grade, open-source reference dApps on your own stack so external teams have real architecture to fork.',
          'Staff every workshop and hackathon floor with practicing smart contract and full-stack engineers, not non-technical community managers.',
        ],
      },
      {
        heading: '02. Case Study: Converting 250+ Builders into 150+ Projects at Core Nexus Bhopal',
        body: [
          'When we produced Core Nexus at Jagran Lakecity University (JLU) in Bhopal, our goal was to prove that Central India could deliver one of the highest builder-to-submission conversion rates in the country. Most university hackathons see 300 students check in for free t-shirts and fewer than 25 teams actually submit working code.',
          'At Core Nexus, we flipped the format into a combined Bootcamp + 36-Hour Build Sprint. During the first 8 hours on campus, we packed the JLU auditorium with 250+ builders and ran live compiler, wallet, and SDK deployment sessions before the overnight clock even started. We structured prizes into a Mainstage Top 3 Podium alongside specialized partner bounty tracks (Arbitrum, Verbwire, QuillAI Network, Civic, DoraHacks, and .xyz), and stationed our own protocol engineers on the floor at 03:00 AM to debug Solidity reverts and ABI mismatches side by side with teams. The result: 150+ verified project submissions on DoraHacks before the 36-hour freeze.',
        ],
        codeSnippet: {
          label: 'CORE NEXUS BHOPAL CONVERSION FUNNEL TELEMETRY',
          code: `On-Campus Builders Checked In (JLU Bhopal):   250+ Developers
Pre-Sprint Bootcamp & SDK Setup Completion:  94% of Teams
Overnight War-Room Mentor Interventions:     180+ Debug Sessions
Verified DoraHacks BUIDL Submissions (36h):  150+ Shipped Projects
Award Structure:                             Mainstage Top 3 + 5 Partner Tracks`,
        },
      },
      {
        heading: '03. The Compounding Loop: Docs, Starter Kits, and Post-Hackathon Incubation',
        body: [
          'A hackathon should never be a one-off weekend spike. Across the 75+ builder activations and bootcamps we have delivered reaching 5,000+ developers, the real ROI comes from what happens in the 30 days after the closing ceremony.',
          'Every time a builder hits an undocumented edge case at 02:00 AM during one of our hackathons, we turn that fix into a permanent cookbook recipe and update the starter repository the next morning. And once the Top 3 winners and partner track finalists are crowned, we transition those teams directly into structured office hours and ecosystem grant pipelines so weekend prototypes mature into mainnet products.',
        ],
      },
    ],
  },
  {
    slug: 'shipping-with-uncertainty',
    number: '03',
    title: 'Zero-to-Hero Protocol Engineering: From Mechanism Spec to Formal Verification',
    subtitle:
      'How we take an onchain protocol from a blank repository or whitepaper thesis to audited smart contracts, mathematical invariants, and mainnet launch.',
    category: 'Protocol Engineering',
    readTime: '10 min read',
    date: 'Sep 01, 2026',
    author: 'Rythme Nagrani',
    authorRole: 'Co-Founder, Protocol Engineering & DevRel',
    excerpt:
      'Writing smart contracts before locking your state machine and economic invariants is the most expensive mistake in Web3. Here is our exact 0-to-Hero engineering blueprint.',
    tags: ['0-to-Hero Build', 'Formal Verification', 'Solidity & Rust', 'Certora CVL'],
    relatedCaseStudy: 'chainpot',
    sections: [
      {
        heading: '01. Why Protocols Break Between V1 and Audit',
        body: [
          'When founders come to Web3Spell Labs for a 0-to-Hero protocol build, they usually falls into one of two camps: either they have a sharp economic thesis on paper and need an engineering team to build the entire stack from scratch, or they hired a freelance dev shop that shipped a fragile V1 contract suite that is now un-auditable.',
          'In smart contract engineering, refactoring after deployment is not a routine sprint. Once liquidity enters a vault or state accumulates in Solana PDAs, an architectural oversight in custody accounting or reentrancy locking becomes an existential solvency risk. That is why our 0-to-Hero program treats mechanism specification, threat modeling, and formal verification as day-one engineering requirements rather than pre-launch checkboxes.',
        ],
        takeaways: [
          'Write the formal state machine and custody conservation equations before writing a single line of Solidity or Anchor Rust.',
          'Enforce strict module boundaries: separate access registries, execution engines, and non-custodial vault custody into isolated contracts.',
          'Pair Foundry fuzz testing (10,000+ randomized state runs) with Certora Prover CVL rules to mathematically rule out insolvency paths.',
        ],
      },
      {
        heading: '02. Case Study: Engineering ChainPot V4 to 18/18 Verified Certora Rules',
        body: [
          'In ChainPot V4 on Base, we engineered a decentralized rotating savings and credit association (ROSCA) that routes idle pool float into Compound V3 (cUSDCv3) while guaranteeing zero organizer custody. Early versions of onchain savings circles failed because they mixed bidding logic, randomness, and token custody inside a single monolithic contract.',
          'We decomposed ChainPot V4 into four strictly bounded modules: MemberRegistryV4 (Merkle allowlists and credit scoring), CircleEngineV4 (payment-gated Chainlink VRF V2.5 draws), AuctionEngineV4 (reverse-discount bidding with mandatory 2% step increments), and VaultV4 (pull-only non-custodial escrow with an 80/20 Compound III yield split and Safety Module backstop). We then wrote 18 formal verification rules in Certora Verification Language (CVL), catching and remediating every edge-case finding to reach 100% formal verification.',
        ],
        codeSnippet: {
          label: 'CHAINPOT V4 SOLVENCY INVARIANT (CERTORA CVL)',
          code: `// Conservation of Custody & Pull-Escrow Solvency Rule
rule vaultSolvencyConservation(method f, env e, calldataarg args) {
    uint256 assetsBefore = vaultTotalManagedAssets();
    uint256 claimsBefore = sumAllPendingMemberClaims() + safetyReserveBalance();
    require assetsBefore >= claimsBefore;

    f(e, args);

    uint256 assetsAfter = vaultTotalManagedAssets();
    uint256 claimsAfter = sumAllPendingMemberClaims() + safetyReserveBalance();
    assert assetsAfter >= claimsAfter, "Vault assets must always cover all member claims + reserve";
}`,
        },
      },
      {
        heading: '03. Leaving a Self-Sustaining System Behind',
        body: [
          'A true 0-to-Hero engagement does not end when the contracts pass audit. A protocol is only usable when its offchain indexer, TypeScript SDK, and flagship web terminal are just as resilient as its onchain bytecode.',
          'For every full-lifecycle build at Web3Spell Labs, we deliver the complete four-part package: (1) The formal mechanism spec and threat model, (2) The audited Solana/EVM smart contracts and test suite, (3) A typed TypeScript SDK and event indexer, and (4) The production Next.js application and developer documentation so your internal team can scale from day one.',
        ],
      },
    ],
  },
  {
    slug: 'zk-privacy-beyond-mixers',
    number: '04',
    title: 'Why Onchain Privacy Requires a 4-Layer Stack, Not a Single Primitive',
    subtitle:
      'Architectural field notes from building Civitas on Solana: combining Groth16 ZK proofs, Nillion blind MPC storage, SEV-SNP confidential compute, and TEE payout splitting.',
    category: 'Zero-Knowledge',
    readTime: '9 min read',
    date: 'Aug 22, 2026',
    author: 'Rythme Nagrani',
    authorRole: 'Co-Founder, Protocol Engineering & DevRel',
    excerpt:
      'A zero-knowledge proof hides the witness, but it does not hide where the encrypted state lives, who computed the Merkle root, or the timing correlation of the payout.',
    tags: ['Zero-Knowledge', 'Groth16 / Circom', 'Nillion MPC', 'Solana SVM'],
    relatedCaseStudy: 'civitas',
    sections: [
      {
        heading: '01. Why Single-Primitive Privacy Leaks in Production',
        body: [
          'Most "private" payroll or transfer protocols in Web3 rely on a single cryptographic primitive, usually a ZK commitment pool, and assume the privacy problem is solved. In practice, an adversary observing a public high-throughput chain like Solana does not need to break your Groth16 circuit to deanonymize your users.',
          'If an employer uploads a plaintext payroll CSV to a centralized backend to build the Merkle tree, the server operator sees every salary. If an employee claims their exact salary amount in a single transfer 12 seconds after the root is posted, simple amount-and-timing heuristics link the employer vault directly to the employee wallet. Real institutional privacy requires defense in depth across storage, tree construction, verification, and settlement.',
        ],
        takeaways: [
          'Never store plaintext credentials or salary tables on a single server: split secrets across independent MPC nodes (Nillion nilDB).',
          'Construct Poseidon Merkle trees inside hardware-attested confidential VMs (AMD SEV-SNP) so no operator ever sees the full roster.',
          'Verify Groth16 proofs natively onchain via alt_bn128 pairing syscalls (~175,000 CU on Solana) and break amount/timing correlation at payout.',
        ],
      },
      {
        heading: '02. Unifying Everything Over the BN254 Scalar Field',
        body: [
          'In Civitas, we unified every cryptographic operation over the BN254 scalar field F_p so that browser witnesses (Circom 2.1.6 / snarkjs), confidential enclave tree builders (Nillion nilCC V4), and onchain verifiers (Solana groth16-solana via alt_bn128 syscalls) speak the exact same mathematical language without expensive bit-packing or endianness bugs.',
          'To prevent replay attacks and cross-run collisions without revealing which leaf in the depth-20 Poseidon Merkle tree is being spent, our Voucher.circom circuit enforces a two-step deterministic nullifier derivation bound to a public-input Poseidon sponge.',
        ],
        codeSnippet: {
          label: 'VOUCHER.CIRCOM // TWO-STEP NULLIFIER & PUBLIC SPONGE',
          code: `// 1. Leaf Commitment inside depth-20 Poseidon Merkle Tree
commitment <== Poseidon(4)([credential_nonce, employee_tag, amount, epoch_id]);

// 2. Two-Step Deterministic Nullifier (prevents double-claim without revealing leaf index)
nullifier_secret <== Poseidon(2)([credential_nonce, epoch_id]);
nullifier_hash   <== Poseidon(2)([nullifier_secret, merkle_root]);

// 3. Public-Input Binding Sponge (locks recipient & amount against mempool tampering)
public_inputs_hash <== Poseidon(5)([merkle_root, nullifier_hash, amount, epoch_id, recipient_pubkey]);`,
        },
      },
      {
        heading: '03. Defeating Timing & Amount Correlation with MagicBlock TEE',
        body: [
          'Even after the Solana program verifies the 256-byte Groth16 proof and locks the Nullifier PDA, sending a single lump-sum USDC transfer to the recipient would leak the exact salary figure on Solscan.',
          'To close that final side channel, Civitas dispatches the verified settlement instruction to a MagicBlock Ephemeral Rollup TEE, which fragments the payout into 5 randomized sub-transfers executed across a jittered [500ms, 30s] window. Every layer of the 4-layer stack eliminates a specific real-world inference vector.',
        ],
      },
    ],
  },
  {
    slug: 'atomic-routing-subsecond-chains',
    number: '05',
    title: 'Eliminating Legging Risk on Sub-Second EVM Orderbooks',
    subtitle:
      'How we engineered Divergence Router on Somnia (<380ms block finality) to execute dual-leg relative-value binary trades atomically with PostOnly-to-IOC failover.',
    category: 'Market Structure',
    readTime: '7 min read',
    date: 'Aug 10, 2026',
    author: 'Rythme Nagrani',
    authorRole: 'Co-Founder, Protocol Engineering & DevRel',
    excerpt:
      'On high-frequency onchain orderbooks, submitting a two-leg relative-value trade as separate transactions guarantees you will eventually get stranded with naked one-leg exposure.',
    tags: ['Market Microstructure', 'Somnia EVM', 'Atomic Routing', 'ERC-6909'],
    relatedCaseStudy: 'divergence-router',
    sections: [
      {
        heading: '01. The Legging Trap in Decentralized Prediction & Binary Markets',
        body: [
          'Traders frequently want to express relative-value views rather than pure directional bets: for example, going Long BTC UP while simultaneously going Long ETH DOWN over a 15-minute window, or trading a calendar term-structure inversion between 15-minute and 1-hour pools.',
          'On traditional decentralized CLOBs, executing that thesis requires signing two separate transactions across two different pools. If Pool A fills at your target price but Pool B experiences a sudden liquidity vacuum or spread jump 400 milliseconds later, your second transaction reverts. You are now stranded holding unhedged directional exposure on Leg A.',
        ],
        takeaways: [
          'Never execute multi-leg relative-value strategies via separate client-side transactions: batch and enforce minFillAmount atomically onchain.',
          'Classify orderbook divergence in real time to automatically switch between passive maker orders (PostOnly), bounded IOC crossing, and circuit-breaker halts.',
          'Use lightweight ERC-6909 multi-token claims to minimize gas overhead during high-frequency mint and redemption cycles.',
        ],
      },
      {
        heading: '02. Atomic Dual-Leg Execution with Full EVM Rollback',
        body: [
          'When we built Divergence Router on Somnia Shannon (Chain ID 50312) for the DreamDEX CLOB, we engineered DivergenceRouter.sol as a stateless, non-custodial atomic execution proxy. When a trader submits a 50/50 divergence split via openSplit(), the contract pulls tUSDC collateral once and routes both complete-set mints sequentially inside a single EVM transaction.',
          'Crucially, the contract enforces a strict post-mint slippage invariant on both legs. If starved liquidity in either the BTC pool or the ETH pool causes the received ERC-6909 outcome shares to fall below minFillAmount, the router reverts with InsufficientFill and unwinds the entire transaction, returning 100% of the trader’s tUSDC with zero orphan exposure.',
        ],
        codeSnippet: {
          label: 'DIVERGENCEROUTER.SOL // ATOMIC DUAL-LEG SLIPPAGE GUARD',
          code: `function openSplit(
    PoolKey calldata legAPool,
    PoolKey calldata legBPool,
    uint256 totalCollateral,
    uint256 minFillLegA,
    uint256 minFillLegB
) external nonReentrant returns (uint256 sharesA, uint256 sharesB) {
    uint256 halfCollateral = totalCollateral / 2;
    tUSDC.transferFrom(msg.sender, address(this), totalCollateral);

    sharesA = dreamDex.mintOutcome(legAPool, halfCollateral, msg.sender);
    if (sharesA < minFillLegA) revert InsufficientFill(0, sharesA, minFillLegA);

    sharesB = dreamDex.mintOutcome(legBPool, totalCollateral - halfCollateral, msg.sender);
    if (sharesB < minFillLegB) revert InsufficientFill(1, sharesB, minFillLegB);
}`,
        },
      },
      {
        heading: '03. Pairing Sub-380ms Finality with a 3-Tier Regime HUD',
        body: [
          'Somnia’s sub-second block times (<380ms) unlocked a completely new class of client-side middleware. Using Viem v2 WebSocket subscriptions, Divergence Router continuously computes a real-time price divergence scalar D_t between DreamDEX pool depth and benchmark index feeds.',
          'In Equilibrium (D_t <= 0.50%), orders route as passive PostOnly makers to capture fee rebates. In Managed Dislocation (0.50% < D_t <= 3.00%), our state machine intercepts potential PostOnlyWouldCross reverts and transitions seamlessly to bounded Immediate-or-Cancel (IOC) execution. And if dislocation exceeds 3.00%, the terminal triggers an automatic circuit-breaker halt before the user can sign into a toxic spread.',
        ],
      },
    ],
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug)
}

export function getAdjacentInsights(slug: string): {
  prev?: InsightArticle
  next?: InsightArticle
} {
  const index = insightArticles.findIndex((article) => article.slug === slug)
  if (index === -1) return {}
  return {
    prev: index > 0 ? insightArticles[index - 1] : undefined,
    next: index < insightArticles.length - 1 ? insightArticles[index + 1] : undefined,
  }
}

