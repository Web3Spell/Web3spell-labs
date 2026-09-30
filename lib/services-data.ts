export interface ServiceDeepBreakdown {
  title: string
  tag: string
  body: string
  specs: string[]
}

export interface ServiceMetric {
  value: string
  label: string
  detail: string
}

export interface RichServicePage {
  slug: string
  parentSlug?: 'ux-brand-strategy' | 'product-engineering' | 'ecosystem-devrel'
  categoryLabel: string
  number: string
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  founderNoteTitle: string
  founderProblem: string
  founderSolution: string
  metrics: ServiceMetric[]
  capabilities: ServiceDeepBreakdown[]
  processSteps: {
    step: string
    title: string
    description: string
    duration: string
    output: string
  }[]
  whoItsFor: string[]
  deliverables: string[]
  techStack: string[]
  relatedCaseStudy: 'civitas' | 'chainpot' | 'divergence-router' | 'core-nexus'
  relatedCaseStudyNote: string
  subLinks: {
    title: string
    tag: string
    href: string
    description: string
  }[]
  tone: 'service-lime' | 'service-blue' | 'service-dark'
}

export const richServices: RichServicePage[] = [
  // ============================================================================
  // PILLAR 01: EXPERIENCE / BRAND (PARENT + 3 DEDICATED CAPABILITY PAGES)
  // ============================================================================
  {
    slug: 'ux-brand-strategy',
    categoryLabel: 'Experience/',
    number: '01',
    eyebrow: 'EXPERIENCE / BRAND',
    title: 'Make cryptographic complexity',
    titleAccent: 'feel obvious.',
    description:
      'Most Web3 products fail not because the underlying contract is flawed, but because the interface forces users to think like protocol engineers. We design wallet flows, zero-knowledge states, and product architectures that people trust on sight.',
    founderNoteTitle: 'Why protocol interfaces lose users at the wallet prompt.',
    founderProblem:
      'Founders often hand a finished smart contract or ZK circuit to a generalist UI designer who treats on-chain state like a standard SaaS database. The result is an interface full of raw hex hashes, blind signing prompts, jarring latency gaps during proof generation, and confusing multi-step approvals that scare away both retail and institutional capital.',
    founderSolution:
      'At Web3Spell Labs, product design is led alongside systems engineering. Before we draw a single screen, we map the actual state transitions (whether that is a 2-second client-side Groth16 witness build, an ERC-4337 session key delegation, or a dual-leg CLOB order) and shape the interface around clear human intent, explicit safety guarantees, and zero-surprise execution.',
    metrics: [
      {
        value: '0-Click',
        label: 'BLIND-SIGNING ELIMINATED',
        detail: 'Human-readable state previews before every wallet signature or proof submission.',
      },
      {
        value: '15+',
        label: 'PRODUCTION SURFACES SHIPPED',
        detail: 'Designed and engineered across Solana, Base, Somnia, Arbitrum, and Bitcoin L2s.',
      },
      {
        value: '100%',
        label: 'ENGINEER-READY SYSTEMS',
        detail: 'Tokenized Figma libraries mapped 1:1 to React, Tailwind, and wallet state machines.',
      },
    ],
    capabilities: [
      {
        title: 'On-Chain UX & Wallet Flow Architecture',
        tag: 'UX & STRATEGY',
        body: 'We deconstruct multi-step contract interactions, including approvals, permits, cross-chain intents, and ZK proof generation, into calm, single-intent journeys where users always know what is happening to their funds.',
        specs: [
          'ERC-4337 / EIP-7702 & Solana session-key onboarding flows',
          'Deterministic transaction preview & slippage guardrails',
          'Asynchronous state design for TEE enclaves, VRF callbacks & ZK proving',
        ],
      },
      {
        title: 'Interactive Protocol Prototyping',
        tag: 'PROTOTYPING',
        body: 'Static mockups cannot test how a trading terminal or savings circle feels under real network latency. We build clickable, state-driven prototypes wired to testnet RPCs so your team and investors can test the real flow.',
        specs: [
          'Live wallet-connected sandboxes before full frontend commitment',
          'Stress-testing edge cases: partial fills, reverted legs, and RPC timeouts',
          'Founder demo environments for seed/Series A fundraising and audit walkthroughs',
        ],
      },
      {
        title: 'Tokenized Design Systems & Brand Identity',
        tag: 'DESIGN SYSTEMS',
        body: 'We replace generic crypto templates with authoritative visual identities and tokenized component kits engineered for high-density financial data, dark-room legibility, and instant developer handoff.',
        specs: [
          'WCAG AA high-contrast typography & tabular numeric scales',
          'Multi-surface component tokens (Marketing site + Operator dApp + Docs)',
          '1:1 Figma-to-Code parity with React 19, Next.js, and CSS variables',
        ],
      },
      {
        title: 'UX Audits & Conversion Rescue',
        tag: 'AUDIT & REMEDIATION',
        body: 'Already live on testnet or mainnet but seeing users drop off between wallet connect and first deposit? We run a forensic tear-down of your live dApp and ship the exact flow fixes.',
        specs: [
          'Step-by-step funnel friction & signature-fatigue analysis',
          'Error-state & transaction-recovery redesign',
          'Prioritized PR-ready engineering backlog for immediate uplift',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Constraint & State Mapping',
        description:
          'We read your smart contracts, IDL/ABI, and whitepaper first, mapping every user action to its exact on-chain latency, gas requirement, and failure mode.',
        duration: 'Week 1',
        output: 'System State & User Flow Architecture',
      },
      {
        step: '02',
        title: 'Wireframes & Interactive Sandbox',
        description:
          'We build low-friction structural flows and clickable prototypes to validate wallet onboarding, signing prompts, and complex data views with real users.',
        duration: 'Week 2–3',
        output: 'Validated Interactive Prototype',
      },
      {
        step: '03',
        title: 'Visual Direction & Token System',
        description:
          'We craft a distinctive, non-generic visual language and assemble a complete component library covering every empty, loading, success, and revert state.',
        duration: 'Week 3–5',
        output: 'Production Design System & Brand Kit',
      },
      {
        step: '04',
        title: 'Engineering Handoff & QA',
        description:
          'We don’t throw Figma links over a wall. We pair directly with frontend engineers, or build the frontend ourselves, to ensure pixel and state accuracy.',
        duration: 'Week 5–6',
        output: 'Shipped UI & Component Documentation',
      },
    ],
    whoItsFor: [
      'Pre-mainnet protocols translating complex cryptography or DeFi mechanics into a first product',
      'Live dApps losing users during wallet onboarding, signing, or multi-step transactions',
      'Founders preparing a flagship product surface before a major institutional raise or ecosystem launch',
      'Engineering-heavy teams that need a senior product & design partner who speaks Solidity and Rust',
    ],
    deliverables: [
      'End-to-end user journey & on-chain state architecture map',
      'Interactive, state-accurate Figma & code prototypes',
      'Complete production UI across desktop and mobile viewports',
      'Tokenized design system (typography, color, spacing, status semantics)',
      'Edge-case matrix (pending tx, ZK witness generation, slippage revert, RPC fallback)',
      'Brand identity, narrative positioning & launch visual assets',
    ],
    techStack: [
      'Figma & Design Tokens',
      'React 19 / Next.js',
      'Tailwind / CSS Systems',
      'Framer Motion',
      'ERC-4337 / EIP-2612 Flows',
      'Solana Wallet Adapter UX',
    ],
    relatedCaseStudy: 'civitas',
    relatedCaseStudyNote:
      'See how we turned a 4-layer Solana privacy stack (Nillion MPC + TEE + Groth16 ZK + MagicBlock) into a calm, 1-click payroll portal for Civitas.',
    subLinks: [
      {
        title: 'UX & Strategy',
        tag: 'Product & wallet flows',
        href: '/services/ux-strategy',
        description: 'Information architecture, wallet onboarding, account abstraction flows, and transaction clarity.',
      },
      {
        title: 'Prototyping',
        tag: 'Interactive validation',
        href: '/services/prototyping',
        description: 'High-fidelity, state-driven sandboxes to test protocol mechanics before full engineering.',
      },
      {
        title: 'Design Systems',
        tag: 'Brand & UI tokens',
        href: '/services/design-systems',
        description: 'Distinctive brand identity and tokenized component libraries built for technical products.',
      },
    ],
    tone: 'service-lime',
  },

  {
    slug: 'ux-strategy',
    parentSlug: 'ux-brand-strategy',
    categoryLabel: 'Experience / 01',
    number: '01.1',
    eyebrow: 'EXPERIENCE / UX & STRATEGY',
    title: 'Product & wallet flows',
    titleAccent: 'built for trust.',
    description:
      'We architect the complete user journey from first wallet connection to settled transaction, eliminating signature fatigue, raw contract jargon, and drop-offs.',
    founderNoteTitle: 'Good Web3 UX is not hiding the blockchain; it is making every state transition legible.',
    founderProblem:
      'When users interact with a DeFi router, a rotating savings vault, or a zero-knowledge payroll system, uncertainty kills conversion. If a user does not understand why they are signing an EIP-712 permit, what happens if one leg of a trade slips, or where their collateral sits during a cycle, they close the tab.',
    founderSolution:
      'We start every UX engagement by auditing your contract’s exact entry points and events. Then we design progressive-disclosure interfaces that surface the exact right invariant at the exact right moment, turning 8-step technical chores into confident 1-click actions.',
    metrics: [
      {
        value: '3×',
        label: 'FASTER ONBOARDING PATH',
        detail: 'Streamlining approve-then-execute loops via EIP-2612 permits, AA, and batched calls.',
      },
      {
        value: '100%',
        label: 'STATE COVERAGE',
        detail: 'Every loading, optimistic, partial-fill, and revert path explicitly designed.',
      },
      {
        value: '< 2s',
        label: 'TIME TO COMPREHENSION',
        detail: 'Clear payoff matrices and human-readable transaction summaries above the fold.',
      },
    ],
    capabilities: [
      {
        title: 'Wallet Onboarding & Account Abstraction Flows',
        tag: 'ONBOARDING',
        body: 'Whether your audience is institutional treasuries using multisigs or retail users needing social login and gas sponsorship, we design friction-free entry paths.',
        specs: [
          'Embedded wallet, passkey, and ERC-4337 paymaster UX',
          'Multi-chain network switching without losing form state',
          'Clear allowance management and EIP-712 typed-data readability',
        ],
      },
      {
        title: 'Complex Financial & Cryptographic Information Architecture',
        tag: 'ARCHITECTURE',
        body: 'We structure high-density trading terminals, yield dashboards, and ZK credential portals so first-time visitors grasp the value immediately while power users keep full telemetry.',
        specs: [
          '4-quadrant payoff matrices & real-time risk indicators (as shipped in Divergence Router)',
          'Client-side ZK proof generation progress & witness status feedback (as shipped in Civitas)',
          'Dual-engine DeFi cycle tracking & collateral health gauges (as shipped in ChainPot)',
        ],
      },
      {
        title: 'Forensic UX Audits of Existing dApps',
        tag: 'UX AUDIT',
        body: 'We record and instrument every click, signature, and RPC wait in your current application to pinpoint exactly where users hesitate or abandon transactions.',
        specs: [
          'Heuristic evaluation across wallet connect, deposit, active position, and withdrawal',
          'Gas-drag and signature-count reduction blueprint',
          'Screen-by-screen redesign of high-drop-off flows',
        ],
      },
      {
        title: 'Error Recovery & Deterministic Safety UX',
        tag: 'RESILIENCE',
        body: 'In Web3, RPCs drop, keepers lag, and slippage bounds get breached. We design calm recovery paths so users never feel like their funds are stuck.',
        specs: [
          'Human-readable custom contract error decoding (no raw hex dumps)',
          'One-click retry, fallback RPC routing, and timeout escape hatches',
          'Verifiable on-chain receipt links for every completed step',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Contract & Funnel Teardown',
        description: 'We inspect your ABI/IDL and walk through every user persona to map friction points and unnecessary signatures.',
        duration: 'Days 1–4',
        output: 'Friction Audit & State Map',
      },
      {
        step: '02',
        title: 'Flow Restructuring',
        description: 'We collapse multi-step interactions using permits, batched calls, and clearer information hierarchy.',
        duration: 'Week 2',
        output: 'End-to-End Wireframe Flows',
      },
      {
        step: '03',
        title: 'High-Fidelity Screen Design',
        description: 'We design every screen and micro-state, including wallet prompts, proof progress bars, and error recovery.',
        duration: 'Week 3–4',
        output: 'Production Figma Specs',
      },
      {
        step: '04',
        title: 'Developer Pairing',
        description: 'We work directly alongside your frontend team to wire the state machine cleanly to wagmi/viem or Solana web3.js.',
        duration: 'Week 5',
        output: 'Verified Live Implementation',
      },
    ],
    whoItsFor: [
      'Protocols preparing their flagship dApp for testnet or mainnet launch',
      'DeFi, ZK, and infra teams whose current UI feels like an internal developer tool',
      'Teams integrating Account Abstraction, session keys, or cross-chain intents',
      'Founders who want senior product strategists that understand on-chain mechanics',
    ],
    deliverables: [
      'Complete user journey & contract-state mapping blueprint',
      'High-fidelity UI screens for all primary and edge-case flows',
      'Wallet signature & transaction-preview specification',
      'Custom contract error-to-human-copy mapping table',
      'Prioritized engineering implementation guide',
    ],
    techStack: ['Figma', 'FigJam', 'EIP-712 / EIP-2612', 'ERC-4337 AA', 'Solana Wallet Adapter', 'Viem / Wagmi UX'],
    relatedCaseStudy: 'divergence-router',
    relatedCaseStudyNote:
      'In Divergence Router, we replaced confusing binary orderbooks with a 1-click 2D Strategy Matrix and a 4-Quadrant Payoff Preview, making institutional relative-value spreads legible in seconds.',
    subLinks: [
      {
        title: 'Experience Overview',
        tag: 'Parent discipline',
        href: '/services/ux-brand-strategy',
        description: 'Full overview of our Experience & Brand discipline.',
      },
      {
        title: 'Prototyping',
        tag: 'Interactive validation',
        href: '/services/prototyping',
        description: 'Clickable, state-driven prototypes to validate flows early.',
      },
      {
        title: 'Design Systems',
        tag: 'Brand & UI tokens',
        href: '/services/design-systems',
        description: 'Scalable visual languages and component libraries.',
      },
    ],
    tone: 'service-lime',
  },

  {
    slug: 'prototyping',
    parentSlug: 'ux-brand-strategy',
    categoryLabel: 'Experience / 02',
    number: '01.2',
    eyebrow: 'EXPERIENCE / PROTOTYPING',
    title: 'Interactive validation',
    titleAccent: 'before heavy code.',
    description:
      'Test real user behavior, wallet interactions, and economic mechanics with high-fidelity interactive prototypes and live testnet sandboxes before committing months of engineering.',
    founderNoteTitle: 'You cannot evaluate an on-chain mechanism from a static PDF or slide deck.',
    founderProblem:
      'Teams routinely spend three months writing production frontend code around a new DeFi mechanism or game loop, only to discover on launch day that users misunderstand the bidding window, the payoff curve, or the claim timing.',
    founderSolution:
      'We build realistic, interactive prototypes, both in state-driven Figma/Framer and in lightweight React + Viem/Solana sandboxes, in a matter of days. You can put a live, clickable product in front of power users, auditors, and investors while your core contract team is still finalizing the protocol.',
    metrics: [
      {
        value: '7–14d',
        label: 'CONCEPT TO CLICKABLE SANDBOX',
        detail: 'Rapid turnaround from whitepaper mechanism to testable interactive product.',
      },
      {
        value: '100%',
        label: 'REALISTIC STATE FLOWS',
        detail: 'Simulates wallet signing, block confirmations, slippage alerts, and payouts.',
      },
      {
        value: 'Zero',
        label: 'WASTED ENGINEERING CYCLES',
        detail: 'Catch mechanism UX flaws before writing thousands of lines of production UI.',
      },
    ],
    capabilities: [
      {
        title: 'State-Driven Product Sandboxes',
        tag: 'LIVE SANDBOX',
        body: 'We build interactive React/Next.js or high-logic Figma prototypes that simulate real balances, live price feeds, and transaction lifecycles.',
        specs: [
          'Simulated or devnet-connected wallet state transitions',
          'Interactive sliders and payoff calculators wired to your exact math formulas',
          'Realistic latency states for ZK proof generation or cross-chain settlement',
        ],
      },
      {
        title: 'Mechanism & Payoff Validation Clinics',
        tag: 'USER TESTING',
        body: 'We run structured 1-on-1 testing sessions with target traders, DAO operators, or retail users to observe where they hesitate or misread the interface.',
        specs: [
          'Recorded task-completion testing with real DeFi/Web3 users',
          'Comprehension testing on fee structures, liquidation thresholds, and yields',
          'Rapid 24-hour iteration loops between user sessions',
        ],
      },
      {
        title: 'Investor & Grant Demo Environments',
        tag: 'FOUNDER DEMOS',
        body: 'Raising a seed round or presenting to a foundation grant committee? A live, tactile product surface speaks ten times louder than a pitch deck.',
        specs: [
          'Self-contained, zero-setup demo URLs for partner & VC walkthroughs',
          'Pre-populated deterministic scenarios showing happy-path and protection invariants',
          'Clean architectural overlays explaining what happens under the hood',
        ],
      },
      {
        title: 'Production Frontend Scaffolding',
        tag: 'CODE READY',
        body: 'When our code prototypes are validated, they don’t get thrown away; they become the clean Next.js + TypeScript foundation for your production dApp.',
        specs: [
          'Modular React 19 components ready for contract ABI/IDL binding',
          'Clean separation between mock state adapters and live RPC hooks',
          'Zero throwaway work when transitioning to full product engineering',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Scenario Selection',
        description: 'We identify the 2–3 critical product loops that must prove intuitive for your protocol to succeed.',
        duration: 'Days 1–2',
        output: 'Core Loop Script & Math Spec',
      },
      {
        step: '02',
        title: 'Rapid Prototype Build',
        description: 'We assemble an interactive, high-contrast prototype with real math calculations and simulated wallet states.',
        duration: 'Days 3–8',
        output: 'Live Interactive Prototype URL',
      },
      {
        step: '03',
        title: 'User & Stakeholder Walkthroughs',
        description: 'We test the prototype with real target users and your technical advisors, logging every point of friction.',
        duration: 'Days 9–11',
        output: 'Validation Findings & Refinements',
      },
      {
        step: '04',
        title: 'V2 Lock & Spec Handoff',
        description: 'We fold the learnings into the final prototype and lock the specification for production engineering.',
        duration: 'Days 12–14',
        output: 'Locked Product Spec & UI Repo',
      },
    ],
    whoItsFor: [
      'Founders turning a technical whitepaper into a tangible product for investors and early design partners',
      'Protocols introducing a novel primitive (intent routers, ZK claims, ROSCA circles, prediction spreads)',
      'Product teams who want to validate a major V2 redesign with existing community members before shipping',
    ],
    deliverables: [
      'Hosted interactive web sandbox or high-logic Figma prototype',
      'Deterministic scenario switcher (happy path, slippage revert, claim settlement)',
      'User validation session recordings & synthesis notes',
      'Reusable React/TypeScript UI scaffold ready for contract integration',
    ],
    techStack: ['Next.js / React', 'TypeScript', 'Framer Motion', 'Figma Advanced Prototyping', 'Viem / Solana Devnet Mocks'],
    relatedCaseStudy: 'chainpot',
    relatedCaseStudyNote:
      'For ChainPot, we prototyped both the random-draw CircleEngine and the competitive-bidding AuctionEngine flows so non-crypto savers and SMEs could test rotating credit cycles effortlessly.',
    subLinks: [
      {
        title: 'Experience Overview',
        tag: 'Parent discipline',
        href: '/services/ux-brand-strategy',
        description: 'Full overview of our Experience & Brand discipline.',
      },
      {
        title: 'UX & Strategy',
        tag: 'Product & wallet flows',
        href: '/services/ux-strategy',
        description: 'Information architecture, wallet onboarding, and transaction clarity.',
      },
      {
        title: 'Design Systems',
        tag: 'Brand & UI tokens',
        href: '/services/design-systems',
        description: 'Scalable visual languages and component libraries.',
      },
    ],
    tone: 'service-lime',
  },

  {
    slug: 'design-systems',
    parentSlug: 'ux-brand-strategy',
    categoryLabel: 'Experience / 03',
    number: '01.3',
    eyebrow: 'EXPERIENCE / DESIGN SYSTEMS',
    title: 'Brand & UI tokens',
    titleAccent: 'engineered to scale.',
    description:
      'We craft authoritative brand identities and tokenized component systems that unify your marketing site, operator dApp, and developer documentation.',
    founderNoteTitle: 'Why most Web3 brands look identical, and how to stand apart.',
    founderProblem:
      'Ninety percent of crypto projects look like they were generated from the same purple-gradient template: glowing neon blobs, unreadable low-contrast text, and disconnected UI components between the landing page and the actual dApp. That visual inconsistency immediately signals "short-term project" to serious users and institutional partners.',
    founderSolution:
      'We build editorial, architectural design systems rooted in precision typography, intentional color semantics, and strict component tokens. Your landing page, your trading or vault interface, and your developer docs share one unmistakable visual DNA.',
    metrics: [
      {
        value: 'AAA/AA',
        label: 'CONTRAST & LEGIBILITY',
        detail: 'Engineered for high-density financial telemetry and long-session operator comfort.',
      },
      {
        value: '1:1',
        label: 'FIGMA-TO-CODE TOKENS',
        detail: 'Every spacing, color, border, and typographic token maps directly to CSS/Tailwind.',
      },
      {
        value: '40%+',
        label: 'FASTER FEATURE SHIPPING',
        detail: 'Your internal engineers assemble new views from battle-tested primitives in hours.',
      },
    ],
    capabilities: [
      {
        title: 'Protocol Brand Identity & Art Direction',
        tag: 'BRAND SYSTEM',
        body: 'We define how your protocol looks, speaks, and carries itself, creating a sharp visual identity that commands authority among builders and institutions.',
        specs: [
          'Logo mark, monogram, and custom typographic hierarchy',
          'Editorial color palette with mathematically calibrated dark/light contrast',
          'Custom architectural diagrams, schematic illustrations, and launch key visuals',
        ],
      },
      {
        title: 'Tokenized Multi-Surface Component Library',
        tag: 'UI LIBRARY',
        body: 'We build a unified set of components designed specifically for Web3 interfaces: wallet modals, token selectors, order tickets, proof badges, and telemetry tables.',
        specs: [
          'Semantic status tokens (verified, pending enclave, slippage warning, reverted)',
          'Tabular numeric typography for orderbooks, balances, and countdowns',
          'Responsive grid rules across desktop terminals and mobile wallets',
        ],
      },
      {
        title: 'Design-to-Code Component Engineering',
        tag: 'CODE PARITY',
        body: 'A Figma file is only half a design system. We deliver the matching React + CSS/Tailwind component primitives so your engineers never have to guess a margin or hover state.',
        specs: [
          'Accessible headless primitives (keyboard navigation, focus traps, ARIA live regions)',
          'Motion & micro-interaction tokens (spring physics, skeletons, state transitions)',
          'Zero-bloat CSS variable architecture',
        ],
      },
      {
        title: 'Launch & Ecosystem Asset Kits',
        tag: 'GTM ASSETS',
        body: 'We equip your team with modular templates for mainnet announcements, audit reports, governance proposals, and hackathon tracks so every touchpoint stays cohesive.',
        specs: [
          'Technical whitepaper & audit report editorial layout templates',
          'Social announcement, changelog, and partner co-marketing templates',
          'Clear brand governance rules for internal and community contributors',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Visual Audit & Positioning',
        description: 'We map your protocol’s technical differentiation and establish a visual direction that breaks away from generic Web3 clichés.',
        duration: 'Week 1',
        output: 'Art Direction & Visual Thesis',
      },
      {
        step: '02',
        title: 'Foundations & Token Architecture',
        description: 'We lock typography, color scales, grid geometry, and semantic status tokens across dark and light surfaces.',
        duration: 'Week 2',
        output: 'Core Token Specification',
      },
      {
        step: '03',
        title: 'Component & Pattern Library',
        description: 'We build every atomic component and complex Web3 pattern (wallet bar, transaction stepper, data tables, modals).',
        duration: 'Week 3–4',
        output: 'Complete Figma Component System',
      },
      {
        step: '04',
        title: 'React Token Export & Docs',
        description: 'We export the tokens and core components directly into your frontend repository with usage guidelines.',
        duration: 'Week 5',
        output: 'Production Code Primitives',
      },
    ],
    whoItsFor: [
      'New protocols establishing their flagship brand and product identity before launch',
      'Growing teams whose marketing site, dApp, and docs look like three different companies',
      'Engineering teams that want a clean, reusable component kit to ship new features fast',
    ],
    deliverables: [
      'Complete brand identity system (logo, typography, color, schematic style)',
      'Figma component library with auto-layout, variants, and design tokens',
      'Production CSS/Tailwind token configuration & React UI primitives',
      'WCAG AA contrast and accessibility verification across all components',
      'Launch social, whitepaper, and announcement asset templates',
    ],
    techStack: ['Figma Variables & Tokens', 'CSS Custom Properties', 'Tailwind CSS', 'React 19 Primitives', 'Radix / Accessible UI', 'SVG Schematic Systems'],
    relatedCaseStudy: 'civitas',
    relatedCaseStudyNote:
      'For Civitas, we created an institutional monochrome-and-emerald identity and component system that made a 4-layer Solana zero-knowledge protocol feel as composed as a private bank.',
    subLinks: [
      {
        title: 'Experience Overview',
        tag: 'Parent discipline',
        href: '/services/ux-brand-strategy',
        description: 'Full overview of our Experience & Brand discipline.',
      },
      {
        title: 'UX & Strategy',
        tag: 'Product & wallet flows',
        href: '/services/ux-strategy',
        description: 'Information architecture, wallet onboarding, and transaction clarity.',
      },
      {
        title: 'Prototyping',
        tag: 'Interactive validation',
        href: '/services/prototyping',
        description: 'Clickable, state-driven prototypes to validate flows early.',
      },
    ],
    tone: 'service-lime',
  },

  // ============================================================================
  // PILLAR 02: PRODUCT / ENGINEERING (PARENT + 3 DEDICATED CAPABILITY PAGES)
  // ============================================================================
  {
    slug: 'product-engineering',
    categoryLabel: 'Engineering/',
    number: '02',
    eyebrow: 'PRODUCT / ENGINEERING',
    title: 'Zero-to-Hero protocol',
    titleAccent: '& product engineering.',
    description:
      'We engineer complete on-chain systems from first-principles whitepaper math to formally verified smart contracts, zero-knowledge circuits, TypeScript SDKs, and high-frequency web applications.',
    founderNoteTitle: 'Why splitting contract engineering from product engineering breaks timelines.',
    founderProblem:
      'Many teams hire an isolated contract freelancer to write Solidity or Rust, and a separate web agency to build the React frontend. Six weeks later, the frontend team discovers the contract doesn’t emit the events needed for the UI, the ZK proof takes 40 seconds in the browser, or a missing slippage invariant exposes users to legging-in risk.',
    founderSolution:
      'We operate as a unified protocol-to-interface engineering lab. The same senior architects who write your Anchor programs, Solidity contracts, and Circom circuits also design your event indexers, TypeScript SDKs, and Next.js operator surfaces. Everything is co-designed around real execution constraints from day one.',
    metrics: [
      {
        value: '~175k CU',
        label: 'ON-CHAIN ZK VERIFICATION',
        detail: 'Groth16 proof verification on Solana via native alt_bn128 pairing syscalls.',
      },
      {
        value: '18 / 18',
        label: 'CERTORA AUDIT REMEDIATION',
        detail: '100% formal verification & security finding remediation on ChainPot V4.',
      },
      {
        value: '< 380ms',
        label: 'ATOMIC CLOB EXECUTION',
        detail: 'Dual-leg ERC-6909 relative-value routing shipped on Somnia Shannon.',
      },
    ],
    capabilities: [
      {
        title: 'Zero-Knowledge, MPC & Privacy Systems',
        tag: 'ZK & PROTOCOL',
        body: 'We architect and implement practical privacy and verifiable compute systems, combining Circom/Noir circuits, Groth16 verifiers, Nillion blind storage/compute, and TEE enclaves.',
        specs: [
          'Custom Circom 2.1.6 / Noir circuits & Poseidon commitment trees',
          'Solana alt_bn128 syscall verifiers & EVM pairing precompile verifiers',
          'Nillion nilDB (MPC secret shares) + nilCC (AMD SEV-SNP TEE) integration',
        ],
      },
      {
        title: 'Solana (Rust/Anchor) & EVM (Solidity/Foundry) Smart Contracts',
        tag: 'SMART CONTRACTS',
        body: 'We write deterministic, gas-optimized smart contract suites from scratch, engineered with explicit state machines, custom errors, and formal verification specs.',
        specs: [
          'Solana Anchor programs, PDA vault topologies, and SPL Token-2022 hooks',
          'EVM Solidity 0.8.24+ protocols, ERC-6909 multi-tokens, ERC-4337 AA & DeFi integrations',
          'Foundry fuzz/invariant test suites & Certora CVL formal verification rules',
        ],
      },
      {
        title: 'Production Web Applications, Terminals & TypeScript SDKs',
        tag: 'WEB & DAPPS',
        body: 'We build sub-second operator interfaces, browser-native ZK provers, real-time WebSocket indexers, and clean TypeScript SDKs that make your protocol effortless to integrate.',
        specs: [
          'Next.js / React 19 applications with Viem v2, Wagmi, and Solana Web3.js',
          'In-browser WebWorker snarkjs witness & proof generation pipelines',
          'Real-time WebSocket orderbook streams, event indexers & zero-dependency SDKs',
        ],
      },
      {
        title: '0-to-Hero End-to-End Protocol Delivery',
        tag: '0 TO HERO',
        body: 'Bring us a raw mechanism idea or whitepaper draft. We take full ownership of architecture, contracts, audit prep, SDK, and flagship dApp through mainnet launch.',
        specs: [
          'Mechanism design, economic edge-case modeling & whitepaper specification',
          'Parallel contract + indexer + frontend execution with locked ABI/IDL schemas',
          'Audit coordination (Certora, OtterSec, etc.), remediation & mainnet deployment',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Mechanism & Invariant Spec',
        description:
          'We formalize your state transitions, threat model, account/storage topology, and lock the ABI/IDL boundary before writing implementation code.',
        duration: 'Week 1–2',
        output: 'Formal Technical Spec & Locked IDL/ABI',
      },
      {
        step: '02',
        title: 'Contract, Circuit & SDK Build',
        description:
          'We implement the smart contracts or ZK circuits alongside a 100% branch-covered Foundry/Anchor test suite and a typed client SDK.',
        duration: 'Week 3–6',
        output: 'Verified Contracts, Circuits & SDK',
      },
      {
        step: '03',
        title: 'Operator dApp & Indexer Integration',
        description:
          'We wire the production web interface, WebSocket streams, and client-side proving pipelines against live devnet/testnet deployments.',
        duration: 'Week 5–8',
        output: 'Live Testnet Application',
      },
      {
        step: '04',
        title: 'Audit Remediation & Mainnet Ship',
        description:
          'We work directly with formal verification provers and security auditors, resolve every finding, and execute your deterministic mainnet launch.',
        duration: 'Week 8–10',
        output: 'Audited Mainnet Launch & Handoff',
      },
    ],
    whoItsFor: [
      'Founders who want a single senior lab to take a protocol from 0-to-1 whitepaper to live mainnet product',
      'Protocols needing specialized cryptography (Groth16 ZK, MPC, TEEs) or complex DeFi state machines',
      'Ecosystem foundations commissioning flagship reference protocols or developer SDKs on their chain',
      'Core teams preparing for a formal security audit (Certora, Trail of Bits, etc.) needing V4+ remediation',
    ],
    deliverables: [
      'Formal protocol specification, threat model & invariant documentation',
      'Production Solana (Rust/Anchor) or EVM (Solidity/Foundry) smart contract repository',
      'Custom ZK circuits (Circom/Noir), proving keys & on-chain verifier contracts',
      'Comprehensive unit, fuzz, integration & formal verification (CVL) test suites',
      'TypeScript client SDK, event indexer & production Next.js web application',
      'Audit remediation log & deterministic deployment scripts',
    ],
    techStack: [
      'Rust / Anchor 0.31+',
      'Solidity 0.8.24 / Foundry',
      'Circom 2.1.6 / Groth16',
      'Nillion nilDB & nilCC TEE',
      'Certora Prover (CVL)',
      'Next.js / React 19 / TypeScript',
      'Viem v2 / Solana Web3.js',
    ],
    relatedCaseStudy: 'chainpot',
    relatedCaseStudyNote:
      'In ChainPot V4, we engineered a 5-contract modular ROSCA suite integrated with Compound III and Chainlink VRF V2.5, remediating 18/18 Certora audit findings with 48/48 passing Foundry tests.',
    subLinks: [
      {
        title: 'ZK & Protocol',
        tag: 'Groth16, MPC & AA',
        href: '/services/zk-protocol',
        description: 'Zero-knowledge circuits, Nillion MPC/TEE privacy stacks, and protocol mechanism design.',
      },
      {
        title: 'Smart Contracts',
        tag: 'Solana Rust & EVM',
        href: '/services/smart-contracts',
        description: 'Audited Anchor/Rust and Solidity/Foundry contract systems with formal verification.',
      },
      {
        title: 'Web & dApps',
        tag: 'Interfaces & SDKs',
        href: '/services/web-dapps',
        description: 'High-frequency operator terminals, browser ZK provers, indexers, and TypeScript SDKs.',
      },
    ],
    tone: 'service-blue',
  },

  {
    slug: 'zk-protocol',
    parentSlug: 'product-engineering',
    categoryLabel: 'Engineering / 01',
    number: '02.1',
    eyebrow: 'ENGINEERING / ZK & PROTOCOL',
    title: 'Groth16, MPC, TEEs',
    titleAccent: '& protocol primitives.',
    description:
      'We design and ship production privacy stacks, zero-knowledge circuits, and low-level protocol primitives that verify cleanly within real on-chain compute budgets.',
    founderNoteTitle: 'Why a single privacy primitive is never enough in production.',
    founderProblem:
      'Many teams assume that dropping a basic ZK circuit into a protocol makes it "private." In practice, if plaintext inputs sit in a central database, if commitment roots are computed on an untrusted server, or if on-chain payouts transfer exact amounts straight to a recipient’s wallet, observers can still reconstruct the entire graph via timing and amount correlation.',
    founderSolution:
      'As we proved with Civitas on Solana, real protocol privacy requires defense-in-depth across storage, compute, proof verification, and settlement. We combine MPC secret-sharing (Nillion nilDB), hardware-attested TEE enclaves (nilCC AMD SEV-SNP), Circom Groth16 circuits verified via native syscalls, and settlement splitting, all within a sub-200k CU on-chain budget.',
    metrics: [
      {
        value: '256 B',
        label: 'GROTH16 PROOF PAYLOAD',
        detail: 'Compact A(64B) + B(128B) + C(64B) BN254 proof verified in a single transaction.',
      },
      {
        value: '~175k CU',
        label: 'SOLANA PAIRING SYSCALLS',
        detail: 'Native alt_bn128_addition, multiplication, and pairing checks on Solana L1.',
      },
      {
        value: '3-of-3',
        label: 'MPC + SEV-SNP ENCLAVE',
        detail: 'Zero single-node plaintext exposure across storage and Merkle root generation.',
      },
    ],
    capabilities: [
      {
        title: 'Circom & Noir Zero-Knowledge Circuit Engineering',
        tag: 'ZK CIRCUITS',
        body: 'We write tightly constrained arithmetic circuits for confidential claims, solvency proofs, selective-disclosure identity (SoulPass), and private state transitions.',
        specs: [
          'Poseidon hash commitments, depth-20 Merkle inclusion proofs & nullifier binding',
          'Signal-tagging and recipient-binding constraints to prevent front-running',
          'Browser-native WebAssembly witness generation + snarkjs Groth16 proving',
        ],
      },
      {
        title: 'On-Chain Verifier Optimization (Solana & EVM)',
        tag: 'ON-CHAIN VERIFIERS',
        body: 'A circuit is useless if verifying it exceeds block compute limits. We engineer custom on-chain verifiers that execute in a fraction of standard gas/CU budgets.',
        specs: [
          'Solana Rust verifiers using solana_nostd_entrypoint & alt_bn128 syscalls',
          'EVM Solidity/Yul BN254 pairing precompile verifiers',
          'PDA/mapping nullifier registries with replay-protection invariants',
        ],
      },
      {
        title: 'MPC, TEE Enclaves & Ephemeral Rollups',
        tag: 'BLIND COMPUTE',
        body: 'We integrate zero-knowledge proofs with multi-party computation and Trusted Execution Environments for workloads that require multi-party private state.',
        specs: [
          'Nillion nilDB (`%allot` secret-sharing across independent MPC nodes)',
          'Nillion nilCC (AMD SEV-SNP hardware-attested enclaves for blind batch compute)',
          'MagicBlock Ephemeral Rollups & TEE-backed private payment splitting',
        ],
      },
      {
        title: '0-to-1 Protocol Mechanism & Whitepaper Engineering',
        tag: 'PROTOCOL DESIGN',
        body: 'We partner with founders at the earliest stage to formalize cryptographic relations, game-theoretic incentives, and formal whitepapers that stand up to institutional scrutiny.',
        specs: [
          'Formal mathematical specification of commitments, invariants, and payoff matrices',
          'Account abstraction (ERC-4337 / EIP-7702) & gasless relayer architectures',
          'Authoritative technical whitepapers and architecture dossiers',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Threat Model & Cryptographic Spec',
        description: 'We define exactly what must remain private or verifiable, what each actor is allowed to see, and the formal circuit constraints.',
        duration: 'Week 1–2',
        output: 'Cryptographic Spec & Threat Matrix',
      },
      {
        step: '02',
        title: 'Circuit & Enclave Implementation',
        description: 'We write the Circom/Noir circuits, configure the MPC/TEE pipelines, and benchmark client-side proving times.',
        duration: 'Week 3–5',
        output: 'Compiled Circuits & Proving Pipeline',
      },
      {
        step: '03',
        title: 'On-Chain Verifier & Nullifier State',
        description: 'We build the Solana or EVM verifier contract, nullifier storage, and token settlement hooks.',
        duration: 'Week 5–7',
        output: 'On-Chain Verifier & Settlement Suite',
      },
      {
        step: '04',
        title: 'End-to-End Integration & Benchmarks',
        description: 'We wire the browser prover, relayer, and on-chain verifier into a unified SDK and verify compute/gas benchmarks.',
        duration: 'Week 7–8',
        output: 'Production ZK Protocol & Benchmarks',
      },
    ],
    whoItsFor: [
      'Teams building confidential payroll, private DeFi, dark pools, or compliant selective-disclosure identity',
      'Protocols integrating Nillion, MagicBlock, Aztec/Noir, or custom Groth16 circuits on Solana or EVM',
      'Founders who need a rigorous cryptographic whitepaper translated into working, benchmarked code',
    ],
    deliverables: [
      'Auditable Circom / Noir circuit source code & R1CS constraint tests',
      'Solana (Rust) or EVM (Solidity) Groth16 on-chain verifier contract',
      'MPC / TEE enclave worker scripts & hardware attestation verifiers',
      'Browser WebWorker proving SDK & gasless relayer service',
      'Formal cryptographic whitepaper & compute-unit benchmark dossier',
    ],
    techStack: [
      'Circom 2.1.6 / SnarkJS',
      'Groth16 / BN254',
      'Solana alt_bn128 Syscalls',
      'Poseidon Commitments',
      'Nillion nilDB & nilCC (SEV-SNP)',
      'MagicBlock TEE',
      'ERC-4337 / EIP-712',
    ],
    relatedCaseStudy: 'civitas',
    relatedCaseStudyNote:
      'Explore the Civitas dossier to inspect our 4-layer privacy stack, exact Poseidon/Groth16 equations, and 175k CU Solana on-chain verification trace.',
    subLinks: [
      {
        title: 'Engineering Overview',
        tag: 'Parent discipline',
        href: '/services/product-engineering',
        description: 'Full overview of our Product & Protocol Engineering discipline.',
      },
      {
        title: 'Smart Contracts',
        tag: 'Solana Rust & EVM',
        href: '/services/smart-contracts',
        description: 'Audited Anchor/Rust and Solidity/Foundry contract systems.',
      },
      {
        title: 'Web & dApps',
        tag: 'Interfaces & SDKs',
        href: '/services/web-dapps',
        description: 'High-frequency operator terminals, indexers, and TypeScript SDKs.',
      },
    ],
    tone: 'service-blue',
  },

  {
    slug: 'smart-contracts',
    parentSlug: 'product-engineering',
    categoryLabel: 'Engineering / 02',
    number: '02.2',
    eyebrow: 'ENGINEERING / SMART CONTRACTS',
    title: 'Solana Rust & EVM',
    titleAccent: 'contract systems.',
    description:
      'We architect, write, and formally verify production smart contracts across Solana (Rust/Anchor) and EVM (Solidity/Foundry), built for audit readiness from line one.',
    founderNoteTitle: 'Smart contracts are financial state machines, not web backends.',
    founderProblem:
      'Most contract exploits and audit delays happen because contracts are written as monolithic scripts without explicit state invariants, pull-over-push accounting, or atomic rollback guarantees. When an external oracle lags or a lending pool rounding edge case hits, funds lock up.',
    founderSolution:
      'We engineer smart contracts around strict mathematical invariants. Whether we are building a 5-contract modular ROSCA suite with Compound III yield integration (ChainPot V4) or a dual-leg atomic CLOB router with ERC-6909 claims (Divergence Router), every state transition is guarded by custom errors, reentrancy locks, and exhaustive Foundry/Anchor invariant suites.',
    metrics: [
      {
        value: '18 / 18',
        label: 'AUDIT FINDINGS REMEDIATED',
        detail: '100% remediation across Critical, High, Medium, and Low findings with Certora.',
      },
      {
        value: '48 / 48',
        label: 'FOUNDRY & ANCHOR SUITES',
        detail: 'Unit, fuzz, and multi-actor lifecycle tests shipping with every repository.',
      },
      {
        value: 'Zero',
        label: 'ORPHANED LEGS OR LOCKED FUNDS',
        detail: 'Strict pull-over-push claimable accounting and atomic EVM/SVM rollback invariants.',
      },
    ],
    capabilities: [
      {
        title: 'EVM Protocol Engineering (Solidity & Foundry)',
        tag: 'EVM / SOLIDITY',
        body: 'We build modular, gas-optimized Solidity contract systems across Base, Arbitrum, Ethereum, Somnia, and Bitcoin L2s.',
        specs: [
          'DeFi vaults, CLOB routers, lending adapters (Compound III / Aave), and ERC-6909 / ERC-4626 tokens',
          'Chainlink VRF V2.5, Pyth / RedStone oracle integrations & keeper automation',
          'EIP-712 typed signatures, EIP-2612 permits & ERC-4337 smart account modules',
        ],
      },
      {
        title: 'Solana Program Engineering (Rust & Anchor)',
        tag: 'SOLANA / SVM',
        body: 'We engineer high-throughput Solana programs with deterministic PDA hierarchies, zero-copy account layouts, and SPL Token-2022 extensions.',
        specs: [
          'Deterministic PDA escrow vaults, Merkle root registries & CPI composability',
          'Compute-unit optimization and custom nostd syscall integrations',
          'TypeScript Anchor client generation & deterministic devnet/mainnet deploy pipelines',
        ],
      },
      {
        title: 'Formal Verification (Certora CVL) & Fuzz Testing',
        tag: 'VERIFICATION',
        body: 'Unit tests only check the scenarios you thought of. We write stateful fuzz tests and Certora Verification Language (CVL) rules to prove solvency across all possible inputs.',
        specs: [
          'Vault solvency invariants (`sum(userClaims) <= vaultBalance`) proven mathematically',
          'Multi-actor lifecycle simulations (defaults, liquidations, partial fills, emergency pause)',
          'Pre-audit internal threat modeling to make external security audits fast and clean',
        ],
      },
      {
        title: 'Audit Remediation & V4+ Protocol Upgrades',
        tag: 'REMEDIATION',
        body: 'Received an audit report from Certora, Trail of Bits, or OtterSec? We step in to re-architect vulnerable modules, fix every finding, and verify the patch suite.',
        specs: [
          'Monolithic-to-modular contract refactoring (breaking 24KB+ bytecode limits cleanly)',
          'Replacing push-transfer loops with DoS-proof pull-over-push accounting',
          'Line-by-line audit remediation verification and regression test coverage',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Storage, PDA & Invariant Design',
        description: 'We define every contract storage slot or Solana PDA seed, access-control role, and mathematical solvency rule before coding.',
        duration: 'Week 1',
        output: 'Contract Architecture & Invariant Spec',
      },
      {
        step: '02',
        title: 'Modular Contract Implementation',
        description: 'We write clean, documented Solidity or Rust code with custom errors, explicit events, and minimal external trust assumptions.',
        duration: 'Week 2–4',
        output: 'Core Smart Contract Suite',
      },
      {
        step: '03',
        title: 'Fuzzing & Formal Verification',
        description: 'We build exhaustive Foundry/Anchor test suites and CVL formal verification rules to stress-test every edge case.',
        duration: 'Week 4–5',
        output: '100% Passing Test & Prover Suite',
      },
      {
        step: '04',
        title: 'Audit Support & Mainnet Deployment',
        description: 'We shepherd the codebase through external security audits, remediate findings, and run deterministic deployment scripts.',
        duration: 'Week 6+',
        output: 'Verified Mainnet Contracts',
      },
    ],
    whoItsFor: [
      'DeFi, prediction market, consumer crypto, and infrastructure protocols building on EVM or Solana',
      'Teams preparing for a top-tier security audit who want formal invariants and clean modular code',
      'Protocols needing a V2/V4 architectural overhaul after outgrowing their initial MVP contracts',
    ],
    deliverables: [
      'Production Solidity (Foundry) or Solana Rust (Anchor) smart contract repository',
      'Complete unit, stateful fuzz, and integration test suite',
      'Certora CVL formal verification rules & solvency proofs (for EVM DeFi)',
      'Deterministic deployment scripts, ABI/IDL artifacts & contract verification',
      'Audit-ready technical documentation and state-transition diagrams',
    ],
    techStack: [
      'Solidity 0.8.24',
      'Foundry (Forge / Cast / Anvil)',
      'Rust / Anchor 0.31',
      'Certora Prover (CVL)',
      'OpenZeppelin V5',
      'ERC-6909 / ERC-4626 / SPL Token-2022',
      'Chainlink VRF V2.5 / Compound III',
    ],
    relatedCaseStudy: 'chainpot',
    relatedCaseStudyNote:
      'Read the ChainPot dossier to see how we decomposed a monolithic contract into 5 modular V4 engines, integrated Compound III yield, and remediated all 18 Certora audit findings.',
    subLinks: [
      {
        title: 'Engineering Overview',
        tag: 'Parent discipline',
        href: '/services/product-engineering',
        description: 'Full overview of our Product & Protocol Engineering discipline.',
      },
      {
        title: 'ZK & Protocol',
        tag: 'Groth16, MPC & AA',
        href: '/services/zk-protocol',
        description: 'Zero-knowledge circuits, Nillion MPC/TEE privacy stacks, and protocol primitives.',
      },
      {
        title: 'Web & dApps',
        tag: 'Interfaces & SDKs',
        href: '/services/web-dapps',
        description: 'High-frequency operator terminals, indexers, and TypeScript SDKs.',
      },
    ],
    tone: 'service-blue',
  },

  {
    slug: 'web-dapps',
    parentSlug: 'product-engineering',
    categoryLabel: 'Engineering / 03',
    number: '02.3',
    eyebrow: 'ENGINEERING / WEB & DAPPS',
    title: 'Operator interfaces,',
    titleAccent: 'indexers & SDKs.',
    description:
      'We build ultra-responsive Web3 web applications, real-time orderbook terminals, browser ZK provers, and zero-dependency TypeScript SDKs.',
    founderNoteTitle: 'Your frontend is where users actually experience your protocol’s speed.',
    founderProblem:
      'Even on a sub-second chain like Solana or Somnia, a poorly engineered frontend with polling bottlenecks, unbatched RPC calls, or main-thread blocking cryptography feels sluggish and unreliable.',
    founderSolution:
      'We engineer Web3 frontends like financial trading terminals. We stream state over WebSockets, run heavy cryptographic witness generation inside background WebWorkers, cache and batch RPC reads deterministically, and ship typed SDKs so both your own dApp and third-party integrators get instant reactivity.',
    metrics: [
      {
        value: '< 380ms',
        label: 'WEBSOCKET TELEMETRY SYNC',
        detail: 'Real-time orderbook & block stream synchronization on Somnia and Solana.',
      },
      {
        value: '~2.0s',
        label: 'IN-BROWSER ZK PROVING',
        detail: 'Non-blocking WebWorker Groth16 proof generation on standard laptops.',
      },
      {
        value: 'Zero',
        label: 'STALE RPC UI FLICKER',
        detail: 'Optimistic state transitions paired with deterministic event receipt verification.',
      },
    ],
    capabilities: [
      {
        title: 'High-Frequency Trading & DeFi Web Terminals',
        tag: 'OPERATOR UI',
        body: 'We build frameless, keyboard-accessible financial interfaces that handle live orderbook ticks, multi-leg execution previews, and portfolio telemetry without frame drops.',
        specs: [
          'Next.js App Router + React 19 + Viem v2 / Wagmi / Solana Wallet Adapter',
          'Live spread z-score engines, 4-quadrant payoff matrices & slippage guards',
          'Optimistic transaction steppers with instant block-explorer receipt binding',
        ],
      },
      {
        title: 'In-Browser Cryptography & Relayer Middleware',
        tag: 'CLIENT CRYPTO',
        body: 'We wire complex client-side cryptography (Poseidon hashing, Merkle path assembly, snarkjs proving, and EIP-712 signing) into smooth, single-click user flows.',
        specs: [
          'Dedicated WebWorker proving threads so the UI never freezes',
          'Gasless relayer & ERC-4337 bundler middleware for zero-SOL / zero-ETH claims',
          'Deterministic key derivation and encrypted local session storage',
        ],
      },
      {
        title: 'TypeScript SDKs & Developer Integration Kits',
        tag: 'SDK ENGINEERING',
        body: 'Want other dApps, bots, or institutions to integrate your protocol? We wrap your contract ABIs/IDLs into a clean, documented, tree-shakeable TypeScript SDK.',
        specs: [
          'Strictly typed contract wrappers, quote calculators & transaction builders',
          'Built-in pre-flight simulation and human-readable error decoding',
          'Published NPM packages with copy-paste runnable examples',
        ],
      },
      {
        title: 'Event Indexers & Sub-Second State Streams',
        tag: 'INDEXING & DATA',
        body: 'Querying raw blockchain nodes from the browser doesn’t scale. We build lightweight indexers and WebSocket state streams that serve historical and live protocol data instantly.',
        specs: [
          'Custom event indexers for EVM logs and Solana program accounts',
          'Sub-second WebSocket push pipelines for live orderbooks and cycle updates',
          'Automated RPC failover and multi-provider load balancing',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'State & RPC Architecture',
        description: 'We map every contract read, event subscription, and wallet write into a clean client-side state machine and SDK interface.',
        duration: 'Week 1',
        output: 'Typed SDK & State Architecture',
      },
      {
        step: '02',
        title: 'Core Terminal & Wallet Wiring',
        description: 'We build the production Next.js views and wire live wallet signing, pre-flight simulations, and error handling.',
        duration: 'Week 2–4',
        output: 'Connected Testnet Application',
      },
      {
        step: '03',
        title: 'Real-Time Streams & Performance Tuning',
        description: 'We integrate WebSocket telemetry, WebWorker provers, and sub-second UI updates, profiling every render cycle.',
        duration: 'Week 4–5',
        output: 'Benchmarked Production UI',
      },
      {
        step: '04',
        title: 'CI/CD, Monitoring & Launch',
        description: 'We configure deterministic builds, RPC fallbacks, analytics, and ship to production with full documentation.',
        duration: 'Week 6',
        output: 'Live Mainnet dApp & SDK',
      },
    ],
    whoItsFor: [
      'Protocols with finished or in-progress smart contracts that need a flagship production frontend',
      'Teams building high-frequency CLOBs, prediction markets, or ZK apps where UI performance is critical',
      'Infrastructure protocols that need a clean TypeScript SDK so partner teams can integrate in hours',
    ],
    deliverables: [
      'Production Next.js / React 19 web application repository',
      'Typed TypeScript client SDK for contract reads, quotes, and transaction building',
      'Real-time WebSocket / indexer data layer & multi-RPC failover config',
      'End-to-end Playwright / wallet-simulation test flows',
      'Deployment pipeline (Vercel / AWS) with environment & security headers configured',
    ],
    techStack: [
      'Next.js 15/16 & React 19',
      'TypeScript 5',
      'Viem v2 & Wagmi',
      'Solana Web3.js & Anchor TS',
      'WebWorkers + SnarkJS',
      'WebSockets / Subgraphs',
      'Tailwind CSS & Framer Motion',
    ],
    relatedCaseStudy: 'divergence-router',
    relatedCaseStudyNote:
      'See how we engineered the Divergence Router terminal on Somnia Shannon, combining a live WebSocket spread detector, a PostOnly-to-IOC routing engine, and 1-click atomic execution.',
    subLinks: [
      {
        title: 'Engineering Overview',
        tag: 'Parent discipline',
        href: '/services/product-engineering',
        description: 'Full overview of our Product & Protocol Engineering discipline.',
      },
      {
        title: 'ZK & Protocol',
        tag: 'Groth16, MPC & AA',
        href: '/services/zk-protocol',
        description: 'Zero-knowledge circuits, Nillion MPC/TEE privacy stacks, and protocol primitives.',
      },
      {
        title: 'Smart Contracts',
        tag: 'Solana Rust & EVM',
        href: '/services/smart-contracts',
        description: 'Audited Anchor/Rust and Solidity/Foundry contract systems.',
      },
    ],
    tone: 'service-blue',
  },

  // ============================================================================
  // PILLAR 03: ECOSYSTEM / DEVREL (PARENT + 3 DEDICATED CAPABILITY PAGES)
  // ============================================================================
  {
    slug: 'ecosystem-devrel',
    categoryLabel: 'Ecosystem/',
    number: '03',
    eyebrow: 'ECOSYSTEM / DEVREL',
    title: 'Turn passive developers into',
    titleAccent: 'shipping ecosystems.',
    description:
      'We have run 75+ builder activations, bootcamps, and hackathons reaching 5,000+ developers. We build the technical documentation, starter kits, and field programs that get serious engineers shipping on your protocol.',
    founderNoteTitle: 'Why most ecosystem grants and hackathons fail to retain builders.',
    founderProblem:
      'Foundations spend hundreds of thousands of dollars sponsoring generic conference booths and prize pools, only to watch mercenary teams submit recycled boilerplate repos and vanish the day prizes are paid. Why? Because the docs are outdated, there are no working reference templates, and nobody in the room can debug a compiler error at 2:00 AM.',
    founderSolution:
      'Because we are active protocol engineers ourselves, having won tracks at TOKEN2049 Origins, Colosseum Frontier, Somnia, and Certora, we run DevRel from the terminal, not from a marketing slide. We write the starter repos, teach the architecture clinics, debug alongside teams in the build room, and structure post-hackathon incubation so projects actually reach mainnet.',
    metrics: [
      {
        value: '75+',
        label: 'BUILDER ACTIVATIONS RUN',
        detail: 'Hackathons, residencies, and technical bootcamps delivered across India & APAC.',
      },
      {
        value: '5,000+',
        label: 'DEVELOPERS ONBOARDED',
        detail: 'Hands-on engineers trained across EVM, Solana, Arbitrum, Core, and ZK stacks.',
      },
      {
        value: '< 15m',
        label: 'TIME TO FIRST DEPLOY',
        detail: 'Our benchmark for every starter kit and documentation suite we ship.',
      },
    ],
    capabilities: [
      {
        title: 'Developer Relations & Technical GTM Strategy',
        tag: 'DEVREL & GTM',
        body: 'We design and execute your end-to-end developer acquisition and retention funnel, from first GitHub clone to funded ecosystem project.',
        specs: [
          'Developer persona mapping & friction audit of your current onboarding path',
          'Technical narrative, launch threads, architecture deep-dives & founder podcast (SpellCast)',
          'Grant milestone design & technical evaluation rubrics that filter out mercenary spam',
        ],
      },
      {
        title: 'High-Signal Hackathons, Bootcamps & Build Rooms',
        tag: 'HACKATHONS',
        body: 'We produce curated 36-to-48-hour build rooms, multi-week university & senior-dev cohorts, and ecosystem residencies where every team ships working on-chain code.',
        specs: [
          'End-to-end production: venue, curation, technical mentors, judging & prize distribution',
          'Hands-on live coding workshops (Solidity, Anchor/Rust, ZK circuits, Account Abstraction)',
          '2:00 AM architecture debugging clinics led by our senior protocol engineers',
        ],
      },
      {
        title: 'Interactive Technical Documentation & Starter Kits',
        tag: 'TECHNICAL DOCS',
        body: 'Developers don’t read 60-page PDFs; they clone working code. We build crystal-clear documentation portals paired with 1-command starter repositories.',
        specs: [
          '0-to-Deploy quickstarts that get a developer live on testnet in under 15 minutes',
          'Production reference implementations & full-stack boilerplate repos',
          'API/SDK reference guides, architecture diagrams & interactive code sandboxes',
        ],
      },
      {
        title: 'Cohort Incubation & Post-Hackathon Retention',
        tag: 'RETENTION',
        body: 'An activation is only successful if teams keep building after Sunday evening. We run structured 4-to-8-week follow-on cohorts to turn hackathon winners into mainnet dApps.',
        specs: [
          'Weekly architecture office hours, code reviews & UX clinics for cohort teams',
          'Audit preparation & demo-day investor readiness coaching',
          'Transparent funnel telemetry tracking repo commits, testnet txs, and mainnet deploys',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'DX Audit & Starter Kit Build',
        description:
          'Before inviting a single developer, we test your SDK/chain ourselves, fix onboarding blockers, and ship a working 1-command starter repo.',
        duration: 'Week 1–2',
        output: 'DX Audit & Production Starter Kit',
      },
      {
        step: '02',
        title: 'Docs, Curriculum & Narrative',
        description:
          'We publish the quickstart documentation, workshop curriculum, and bounty tracks tailored to the exact apps your ecosystem needs.',
        duration: 'Week 3–4',
        output: 'Docs Portal, Bounties & Workshop Deck',
      },
      {
        step: '03',
        title: 'Field Activation & Build Rooms',
        description:
          'We mobilize our 5,000+ builder network, run hands-on technical workshops, and staff the hackathon or bootcamp with senior engineers.',
        duration: 'Week 5–8',
        output: 'Live Cohort / Hackathon & Shipped Repos',
      },
      {
        step: '04',
        title: 'Cohort Incubation & Telemetry',
        description:
          'We evaluate every submission, onboard top teams into post-event office hours, and deliver a full ecosystem impact dossier.',
        duration: 'Week 9–12',
        output: 'Retained Builders & Ecosystem Report',
      },
    ],
    whoItsFor: [
      'L1 / L2 blockchains launching a new testnet, mainnet, or regional developer expansion',
      'Infrastructure protocols (ZK, MPC, AA, Oracles, DeFi primitives) needing third-party dApp integrations',
      'Ecosystem foundations that want real shipped repositories and retained founders instead of vanity event photos',
    ],
    deliverables: [
      'Complete Developer Experience (DX) friction audit & GTM roadmap',
      'Interactive technical documentation portal & architecture guides',
      '2–3 production-grade `create-*` starter repositories & reference dApps',
      'Full hackathon / bootcamp production (curation, workshops, mentoring, judging)',
      'Verified submission ledger (GitHub repos, deployed contract addresses, demo videos)',
      'Post-program builder retention & grant-readiness report',
    ],
    techStack: [
      'Nextra / Mintlify / Fumadocs',
      'TypeScript / Rust / Solidity Starter Kits',
      'GitHub Template Repos & CI',
      'Foundry & Anchor Workshops',
      'SpellCast Media & Distribution',
      'Builder Funnel Telemetry',
    ],
    relatedCaseStudy: 'core-nexus',
    relatedCaseStudyNote:
      'At Core Nexus Bhopal (Jagran Lakecity University), we activated 250+ on-campus builders and drove 150+ verified DoraHacks project submissions across a 36-hour sprint with Arbitrum, Verbwire, QuillAI Network, and Civic.',
    subLinks: [
      {
        title: 'DevRel & GTM',
        tag: 'Builder activation',
        href: '/services/devrel-gtm',
        description: 'End-to-end developer acquisition strategy, DX audits, and technical GTM campaigns.',
      },
      {
        title: 'Hackathons',
        tag: 'Cohorts & build rooms',
        href: '/services/hackathons',
        description: 'High-signal hackathons, bootcamps, and builder residencies across 75+ activations.',
      },
      {
        title: 'Technical Docs',
        tag: 'Guides & reference kits',
        href: '/services/technical-docs',
        description: '15-minute quickstarts, interactive docs, SDK guides, and working reference repos.',
      },
    ],
    tone: 'service-dark',
  },

  {
    slug: 'devrel-gtm',
    parentSlug: 'ecosystem-devrel',
    categoryLabel: 'Ecosystem / 01',
    number: '03.1',
    eyebrow: 'ECOSYSTEM / DEVREL & GTM',
    title: 'Builder activation',
    titleAccent: '& technical GTM.',
    description:
      'We turn your protocol’s technical breakthroughs into a compounding developer motion, combining DX engineering, reference builds, and credible technical storytelling.',
    founderNoteTitle: 'Developers ignore marketing hype. They pay attention to working code and clear primitives.',
    founderProblem:
      'Many protocols launch with a brilliant whitepaper and a quiet Discord, wondering why no external teams are building on their stack. Traditional PR agencies write generic press releases that developers immediately mute, while internal engineers are too busy shipping core protocol upgrades to run developer onboarding.',
    founderSolution:
      'We act as your embedded DevRel and Technical GTM team. We audit your developer onboarding experience, build flagship reference apps that prove what your stack can do, publish deep architectural breakdowns, and put your protocol directly in front of 5,000+ active Web3 engineers.',
    metrics: [
      {
        value: '5,000+',
        label: 'ACTIVE BUILDER NETWORK',
        detail: 'Direct reach across proven Solidity, Rust, and ZK engineers.',
      },
      {
        value: '15+',
        label: 'REFERENCE BUILDS SHIPPED',
        detail: 'We build real apps on your stack first to prove and document the developer path.',
      },
      {
        value: '100%',
        label: 'ENGINEER-LED DEVREL',
        detail: 'Every workshop, thread, and office hour is run by shipping protocol engineers.',
      },
    ],
    capabilities: [
      {
        title: 'First-Principles Developer Experience (DX) Audits',
        tag: 'DX AUDIT',
        body: 'We step into the shoes of a first-time external developer trying to build on your protocol, logging every broken CLI command, confusing error message, and missing SDK helper.',
        specs: [
          'Timed "Zero-to-First-Transaction" friction log across your docs and SDK',
          'CLI, faucet, RPC, and testnet explorer usability remediation',
          'Concrete PRs to your SDK and starter templates to cut setup time in half',
        ],
      },
      {
        title: 'Flagship Reference Applications ("Show, Don’t Tell")',
        tag: 'REFERENCE APPS',
        body: 'The fastest way to inspire developers to build on a new chain or primitive is to ship an open-source flagship app that they can fork and study.',
        specs: [
          'Open-source, production-grade reference dApps showcasing your unique primitives',
          'Annotated architecture walkthroughs explaining how each module integrates',
          'Live hosted demos used by your BD and DevRel teams in every partner call',
        ],
      },
      {
        title: 'Technical Storytelling, Deep-Dives & SpellCast Media',
        tag: 'TECHNICAL GTM',
        body: 'We translate your protocol’s architecture into high-signal technical essays, diagrams, video walkthroughs, and founder conversations on SpellCast.',
        specs: [
          'Architectural deep-dives & comparative benchmarks written for senior engineers',
          'Dedicated SpellCast podcast episodes unpacking your protocol thesis with founders',
          'Bounty RFPs ("Requests for Products") that give builders concrete startup ideas',
        ],
      },
      {
        title: 'Grant Funnel Architecture & Technical Diligence',
        tag: 'ECOSYSTEM OPS',
        body: 'We help foundations structure milestone-based grant and incubation funnels that reward shipped mainnet code rather than pitch decks.',
        specs: [
          'Technical RFP catalog aligned with ecosystem gaps (DeFi, privacy, consumer, AI)',
          'Code-level milestone verification before grant tranches are unlocked',
          'Bi-weekly office hours and architecture clinics for grantee teams',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'DX Friction Audit',
        description: 'Our engineers build a test app on your stack from scratch, documenting every friction point in your current SDK and docs.',
        duration: 'Week 1–2',
        output: 'DX Friction Report & SDK Fixes',
      },
      {
        step: '02',
        title: 'Reference App & RFP Catalog',
        description: 'We ship an open-source reference build and publish a curated list of concrete product ideas (RFPs) for ecosystem builders.',
        duration: 'Week 3–5',
        output: 'Open-Source Reference Repo & RFPs',
      },
      {
        step: '03',
        title: 'Campaign & Media Rollout',
        description: 'We launch technical deep-dives, workshops, and SpellCast episodes while activating our builder network.',
        duration: 'Week 6–8',
        output: 'Live Developer Activation Campaign',
      },
      {
        step: '04',
        title: 'Builder Support & Conversion',
        description: 'We host technical office hours, review builder repos, and transition top teams into your grant or incubation pipeline.',
        duration: 'Ongoing',
        output: 'Active Ecosystem Integrations',
      },
    ],
    whoItsFor: [
      'L1/L2 ecosystems and middleware protocols preparing for a major testnet or mainnet developer push',
      'Technical founders who want engineer-to-engineer GTM instead of surface-level crypto marketing',
      'Ecosystem heads looking to increase the quality and retention of grant and hackathon applicants',
    ],
    deliverables: [
      'Zero-to-First-Deploy DX friction audit & remediation PRs',
      'Open-source flagship reference dApp + starter template repository',
      'Ecosystem RFP ("Requests for Products") blueprint for external builders',
      'Technical deep-dive essays, architecture diagrams & SpellCast media feature',
      'Monthly developer funnel telemetry (clones, testnet deploys, active repos)',
    ],
    techStack: ['TypeScript / Rust / Solidity', 'GitHub & NPM Tooling', 'SpellCast Media', 'Technical Writing', 'Developer Funnel Analytics'],
    relatedCaseStudy: 'civitas',
    relatedCaseStudyNote:
      'Civitas demonstrates how combining Nillion, MagicBlock, and Solana native ZK syscalls into a documented, open-architecture reference product proves what is possible on next-gen infrastructure.',
    subLinks: [
      {
        title: 'Ecosystem Overview',
        tag: 'Parent discipline',
        href: '/services/ecosystem-devrel',
        description: 'Full overview of our Ecosystem & DevRel discipline.',
      },
      {
        title: 'Hackathons',
        tag: 'Cohorts & build rooms',
        href: '/services/hackathons',
        description: 'High-signal hackathons, bootcamps, and builder residencies.',
      },
      {
        title: 'Technical Docs',
        tag: 'Guides & reference kits',
        href: '/services/technical-docs',
        description: '15-minute quickstarts, interactive docs, and reference kits.',
      },
    ],
    tone: 'service-dark',
  },

  {
    slug: 'hackathons',
    parentSlug: 'ecosystem-devrel',
    categoryLabel: 'Ecosystem / 02',
    number: '03.2',
    eyebrow: 'ECOSYSTEM / HACKATHONS & COHORTS',
    title: 'Cohorts, bootcamps',
    titleAccent: '& 48h build rooms.',
    description:
      'We design and run high-signal hackathons, builder residencies, and multi-week technical cohorts where curated engineers ship real, deployed code on your protocol.',
    founderNoteTitle: 'We have been on both sides of the hackathon table, as 75+ event operators and as global track winners.',
    founderProblem:
      'Most hackathons treat builders like event attendees: long sponsor speeches, weak Wi-Fi, zero technical mentorship after 6:00 PM, and judging panels that reward slick slide decks over working smart contracts. Serious developers leave frustrated, and sponsors get zero usable projects.',
    founderSolution:
      'We run build rooms designed by hackers, for hackers. We curate applicants by their actual GitHub history, run hands-on compiler-and-contract bootcamps before the clock starts, keep our own senior Rust/Solidity/ZK engineers on the floor at 3:00 AM to unblock teams, and enforce a "live deployed contract" rule at judging.',
    metrics: [
      {
        value: '75+',
        label: 'EVENTS & COHORTS DELIVERED',
        detail: 'From Arbitrum Ignite and Core Nexus to TOKEN2049 side-activations and residencies.',
      },
      {
        value: '250+',
        label: 'BUILDERS PER FLAGSHIP SPRINT',
        detail: 'Curated, high-retention rooms of full-stack, contract, and ZK engineers.',
      },
      {
        value: '100%',
        label: 'ON-CHAIN SUBMISSION RULE',
        detail: 'Every demo-stage finalist is verified for live contract deployment and working code.',
      },
    ],
    capabilities: [
      {
        title: 'Flagship 36h–48h Hackathons & Builder Residencies',
        tag: 'BUILD ROOMS',
        body: 'We handle complete end-to-end production for high-energy in-person and hybrid hackathons, focused entirely on builder output.',
        specs: [
          'Application curation filtering for active GitHub contributors and systems engineers',
          ' Venue production engineered for 48-hour coding (enterprise Wi-Fi, power grids, war rooms)',
          'Live mainstage demo day with code-verified technical judging rubrics',
        ],
      },
      {
        title: 'Multi-Week Technical Bootcamps & Developer Cohorts',
        tag: 'COHORTS',
        body: 'Before a hackathon, or as a standalone program, we run structured 2-to-6-week cohorts that take developers from zero to deploying complex contracts on your stack.',
        specs: [
          'Live coding curriculum covering your chain’s VM, SDK, and security patterns',
          'Weekly graded milestones (deploy contract -> wire indexer -> ship frontend)',
          'Direct mentorship on Discord/Telegram and live debugging clinics',
        ],
      },
      {
        title: 'On-Floor Senior Engineering Mentorship',
        tag: 'WAR ROOM SUPPORT',
        body: 'The difference between a failed hackathon submission and a breakout ecosystem dApp usually happens at 2:00 AM when a team hits an ABI/IDL mismatch or RPC error.',
        specs: [
          'Web3Spell Labs engineers embedded directly on the floor to debug Rust, Solidity & ZK code',
          'Pre-built bounty starter templates so teams spend 48 hours on product logic, not boilerplate',
          'Architecture reviews mid-sprint to help teams scope a shippable demo',
        ],
      },
      {
        title: 'Post-Event Incubation & Grant Handoff',
        tag: 'FOLLOW-THROUGH',
        body: 'We don’t pack up and disappear when prizes are announced. We track every winning repository and guide top teams into your ecosystem grant program.',
        specs: [
          'Complete submission dossier: GitHub links, contract addresses, team contacts & scores',
          '4-week post-hackathon follow-up sprint with top 5–10 finalist teams',
          'Mainnet launch support for breakout cohort projects',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Track Design & Starter Kits',
        description: 'We define concrete bounty tracks and prepare copy-paste starter repositories so teams can start building immediately.',
        duration: 'Weeks 1–2',
        output: 'Bounty Spec & Starter Templates',
      },
      {
        step: '02',
        title: 'Builder Curation & Pre-Bootcamp',
        description: 'We open applications across our 5,000+ builder network, vet GitHub profiles, and run pre-event technical workshops.',
        duration: 'Weeks 3–5',
        output: 'Curated Cohort & Trained Builders',
      },
      {
        step: '03',
        title: '48h Build Room Execution',
        description: 'We run the live hackathon or residency with round-the-clock engineering mentorship and live code verification.',
        duration: 'Week 6',
        output: 'Live Demo Day & Deployed Projects',
      },
      {
        step: '04',
        title: 'Winner Incubation & Dossier',
        description: 'We audit finalist codebases, distribute bounties, and transition top builders into your ongoing ecosystem pipeline.',
        duration: 'Weeks 7–8',
        output: 'Verified Submission Ledger & Cohort Handoff',
      },
    ],
    whoItsFor: [
      'L1/L2 foundations expanding their developer footprint across India, APAC, and global hubs',
      'Protocols launching a new SDK, VM, or privacy/DeFi primitive that needs 30–50 live dApp experiments',
      'Ecosystem teams tired of low-effort hackathon spam who want curated, code-verified build rooms',
    ],
    deliverables: [
      'Complete hackathon / bootcamp run-of-show, bounty tracks & judging rubric',
      'Pre-event technical workshops & custom starter kit repositories',
      'Full venue, production, branding & on-floor engineering mentorship',
      'Code-verified submission ledger (repos, deployed contract hashes, demo links)',
      'Post-event impact report & finalist incubation handoff',
    ],
    techStack: ['Foundry & Anchor Clinics', 'Starter Repo Templates', 'GitHub Submission Verification', 'Live Demo Production', 'Cohort LMS & Telemetry'],
    relatedCaseStudy: 'core-nexus',
    relatedCaseStudyNote:
      'Inspect our Core Nexus Bhopal case study at Jagran Lakecity University: 250+ on-campus developers, 36 continuous hours of engineering mentorship, and 150+ shipped Web3 projects across Mainstage Top 3 and partner bounty tracks.',
    subLinks: [
      {
        title: 'Ecosystem Overview',
        tag: 'Parent discipline',
        href: '/services/ecosystem-devrel',
        description: 'Full overview of our Ecosystem & DevRel discipline.',
      },
      {
        title: 'DevRel & GTM',
        tag: 'Builder activation',
        href: '/services/devrel-gtm',
        description: 'End-to-end developer acquisition strategy, DX audits, and technical GTM.',
      },
      {
        title: 'Technical Docs',
        tag: 'Guides & reference kits',
        href: '/services/technical-docs',
        description: '15-minute quickstarts, interactive docs, and reference kits.',
      },
    ],
    tone: 'service-dark',
  },

  {
    slug: 'technical-docs',
    parentSlug: 'ecosystem-devrel',
    categoryLabel: 'Ecosystem / 03',
    number: '03.3',
    eyebrow: 'ECOSYSTEM / TECHNICAL DOCS',
    title: 'Guides, whitepapers',
    titleAccent: '& reference kits.',
    description:
      'We transform dense protocol codebases and research notes into crystal-clear developer documentation, formal whitepapers, and 1-command starter kits.',
    founderNoteTitle: 'Your documentation is your protocol’s true API.',
    founderProblem:
      'Brilliant protocols routinely lose integrators because their documentation consists of auto-generated TypeDoc stubs, broken code snippets from two versions ago, and zero explanation of how accounts, fees, or failure modes actually work together.',
    founderSolution:
      'We read your smart contracts and SDK source code line by line, run every command in a clean terminal, and write documentation the way senior engineers actually want to read it: a 5-minute mental model, a 15-minute copy-paste quickstart that compiles on the first try, exact architectural sequence diagrams, and production reference repos.',
    metrics: [
      {
        value: '< 15m',
        label: 'ZERO-TO-DEPLOY QUICKSTART',
        detail: 'Every quickstart guide is tested in a fresh environment until it runs in under 15 minutes.',
      },
      {
        value: '100%',
        label: 'COMPILE-VERIFIED SNIPPETS',
        detail: 'No pseudo-code: every Solidity, Rust, and TypeScript snippet is tested against live SDKs.',
      },
      {
        value: '3-Tier',
        label: 'PROGRESSIVE DEPTH',
        detail: 'Structured for 5-minute skimmers, full-stack integrators, and security auditors alike.',
      },
    ],
    capabilities: [
      {
        title: 'Interactive Developer Documentation Portals',
        tag: 'DOCS PORTAL',
        body: 'We architect and build fast, searchable documentation sites (Fumadocs, Mintlify, Nextra) structured around real developer jobs-to-be-done.',
        specs: [
          'Clear mental-model overviews + step-by-step integration guides',
          'Typed SDK, RPC, and smart contract ABI/IDL reference tables',
          'Interactive code sandboxes and copy-paste CLI quickstarts',
        ],
      },
      {
        title: 'Formal Whitepapers & Protocol Specification Dossiers',
        tag: 'WHITEPAPERS',
        body: 'We author rigorous, peer-review-grade technical whitepapers and architecture specifications for founders, institutional partners, and auditors.',
        specs: [
          'Formal mathematical notation for cryptographic commitments, pricing curves & invariants',
          'End-to-end execution traces and actor swimlane sequence diagrams',
          'Threat models, trust assumptions, and explicit security trade-off analyses',
        ],
      },
      {
        title: '1-Command Starter Kits (`npx create-*`) & Reference Repos',
        tag: 'STARTER KITS',
        body: 'Nothing accelerates integration faster than a clean repository that already has wallet connection, contract bindings, and environment variables wired up.',
        specs: [
          'Full-stack Next.js + Foundry/Anchor template repositories',
          'Pre-configured testnet deployment scripts and automated CI checks',
          'Annotated example transactions for every core protocol entry point',
        ],
      },
      {
        title: 'Audit Prep & Internal Architecture Playbooks',
        tag: 'AUDIT DOCS',
        body: 'Entering a security audit without clear invariant documentation wastes half your audit budget while auditors reverse-engineer your intent. We write the exact spec auditors need.',
        specs: [
          'Function-by-function state transition & access-control matrices',
          'Explicit mathematical invariants for Certora CVL and fuzz testing',
          'Post-audit remediation changelogs and security advisories',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Codebase & ABI/IDL Immersion',
        description: 'We read your contracts, circuits, and SDK directly from the repo, with no endless interviews required from your core devs.',
        duration: 'Week 1',
        output: 'Documentation IA & Gap Analysis',
      },
      {
        step: '02',
        title: 'Quickstarts & Starter Repo Build',
        description: 'We build the working starter kit and write the 15-minute integration quickstarts, verifying every command from a blank machine.',
        duration: 'Week 2',
        output: 'Verified Quickstarts & Starter Repo',
      },
      {
        step: '03',
        title: 'Architecture Guides, Diagrams & API Reference',
        description: 'We author deep-dive concept guides, sequence diagrams, error reference tables, and whitepaper specifications.',
        duration: 'Week 3–4',
        output: 'Complete Docs Portal / Whitepaper',
      },
      {
        step: '04',
        title: 'Developer Testing & CI Handoff',
        description: 'We test the docs with external engineers, set up automated snippet/link checks in GitHub Actions, and hand over a self-sustaining system.',
        duration: 'Week 5',
        output: 'Live Docs Site & Maintenance Playbook',
      },
    ],
    whoItsFor: [
      'Protocols launching an SDK, testnet, or mainnet that need documentation developers actually enjoy using',
      'Founders who have working code or research notes and need an institutional-grade technical whitepaper',
      'Teams preparing for a security audit who need formal architecture and invariant documentation',
    ],
    deliverables: [
      'Deployed, searchable documentation portal (Nextra / Fumadocs / Mintlify)',
      '15-minute Quickstart guide + working GitHub starter template repository',
      'Complete smart contract / SDK reference with error-code lookup tables',
      'Custom architectural flowcharts, sequence diagrams & LaTeX mathematical specs',
      'Formal technical whitepaper (Markdown + print-ready PDF)',
    ],
    techStack: ['Fumadocs / Nextra / Mintlify', 'MDX & LaTeX / KaTeX', 'Mermaid & Custom SVG Schematics', 'TypeScript / Solidity / Rust Examples', 'GitHub Actions Docs CI'],
    relatedCaseStudy: 'civitas',
    relatedCaseStudyNote:
      'Inspect our Civitas and ChainPot case study dossiers and whitepapers to see our exact standard for cryptographic specification, sequence traces, and invariant documentation.',
    subLinks: [
      {
        title: 'Ecosystem Overview',
        tag: 'Parent discipline',
        href: '/services/ecosystem-devrel',
        description: 'Full overview of our Ecosystem & DevRel discipline.',
      },
      {
        title: 'DevRel & GTM',
        tag: 'Builder activation',
        href: '/services/devrel-gtm',
        description: 'End-to-end developer acquisition strategy, DX audits, and technical GTM.',
      },
      {
        title: 'Hackathons',
        tag: 'Cohorts & build rooms',
        href: '/services/hackathons',
        description: 'High-signal hackathons, bootcamps, and builder residencies.',
      },
    ],
    tone: 'service-dark',
  },
]

export const coreServicesList = richServices.filter((s) => !s.parentSlug)
export const subServicesList = richServices.filter((s) => Boolean(s.parentSlug))
