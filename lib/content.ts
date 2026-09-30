// Shared content data for all routes

export interface Service {
  slug: string
  number: string
  eyebrow: string
  title: string
  description: string
  whatItIs: string
  whoItsFor: string[]
  processSteps: { step: number; title: string; description: string; duration: string }[]
  deliverables: string[]
  techStack: string[]
  engagementModels: {
    name: string
    description: string
    scope: string
  }[]
  relatedCaseStudy: string
  faqItems: { q: string; a: string }[]
  tone: 'service-lime' | 'service-blue' | 'service-dark'
  offerings: [string, string][]
}

export interface CaseStudy {
  slug: string
  number: string
  label: string
  title: string
  body: string
  meta: string
  href: string
  liveUrl?: string
  githubUrl?: string
  whitepaperUrl?: string
  whitepaperLabel?: string
  auditReportUrl?: string
  auditReportLabel?: string
  programId?: string
  programIdLabel?: string
  network?: string
  settlementAsset?: string
  tone: 'blue' | 'lime' | 'dark' | 'white'
  heroImage?: string
  logoImage?: string
  client: string
  timeline?: string
  techStack: string[]
  role: string
  problem: string
  approach: string
  built: string
  results?: string
  metrics?: { value: string; label: string; detail: string }[]
  architectureSectionKicker?: string
  architectureSectionTitle?: string
  architectureSectionSubtitle?: string
  archCol1Label?: string
  archCol2Label?: string
  architectureLayers?: {
    layer: string
    name: string
    stack: string
    threatEliminated: string
    failureModeIfDropped: string
  }[]
  specSectionKicker?: string
  specSectionTitle?: string
  specSectionSubtitle?: string
  specLeftPanelKicker?: string
  specRightPanelKicker?: string
  cryptoRelations?: {
    symbol: string
    formula: string
    description: string
  }[]
  circuitConstraints?: {
    id: string
    expression: string
    purpose: string
  }[]
  lifecycleSectionKicker?: string
  lifecycleSectionTitle?: string
  lifecyclePhases?: {
    phase: string
    title: string
    steps: { step: string; actor: string; action: string; detail: string }[]
  }[]
  decisionsSectionKicker?: string
  decisionsSectionTitle?: string
  engineeringDecisions?: {
    index: string
    title: string
    rationale: string
  }[]
  loopVideoUrl?: string
  loopVideoCaption?: string
  galleryImages?: {
    src: string
    title: string
    caption: string
    tag: string
  }[]
  quote?: { text: string; author: string; role: string }
}

export interface EpisodeItem {
  number: string
  title: string
  guest: string
  duration: string
  videoId: string
  youtubeUrl: string
  published: string
  summary: string
}

export interface BlogArticle {
  slug: string
  title: string
  category: string
  readTime: string
  date: string
  excerpt: string
}

export interface CareerRole {
  id: string
  title: string
  level: string
  type: string
  description: string
  skills: string[]
}

export const services: Service[] = [
  {
    slug: 'ux-brand-strategy',
    number: '01',
    eyebrow: 'EXPERIENCE / BRAND',
    title: 'Make complexity feel inevitable.',
    description: 'We turn technical ambition into clear, credible experiences that people can understand, trust, and use.',
    whatItIs:
      'User experience strategy defines how complex protocols and products become intuitive interfaces. We research user needs, map journeys, design information architecture, and establish visual systems that scale. The outcome: products that feel purpose-built rather than complicated.',
    whoItsFor: [
      'Early-stage protocols pre-mainnet',
      'DAOs scaling governance tooling',
      'Web3 platforms building trust',
      'Teams shipping consumer products into Web3',
    ],
    processSteps: [
      { step: 1, title: 'Discover', description: 'User research, competitive analysis, technical immersion', duration: 'Week 1–2' },
      { step: 2, title: 'Define', description: 'Journey mapping, information architecture, problem statement', duration: 'Week 2–3' },
      { step: 3, title: 'Design', description: 'High-fidelity prototypes, design systems, accessibility audit', duration: 'Week 3–5' },
      { step: 4, title: 'Validate', description: 'User testing, iteration, handoff documentation', duration: 'Week 5–6' },
    ],
    deliverables: [
      'Research findings & insights deck',
      'User journey maps',
      'Information architecture & sitemaps',
      'Design system & component library',
      'High-fidelity prototypes',
      'Accessibility audit report',
      'Brand guidelines',
    ],
    techStack: ['Figma', 'FigJam', 'Framer', 'Accessibility standards', 'Design tokens'],
    engagementModels: [
      {
        name: 'Team Extension',
        description: 'Embedded designer working as part of your core product team',
        scope: 'Ongoing, flexible hours',
      },
      {
        name: 'Dedicated Sprint',
        description: 'Fixed-scope design project with daily standups and weekly deliverables',
        scope: '4–8 weeks',
      },
      {
        name: 'Design Audit',
        description: 'Expert review of existing product surfaces with improvement roadmap',
        scope: '1–2 weeks',
      },
    ],
    relatedCaseStudy: 'civitas',
    faqItems: [
      {
        q: 'How long does a full UX audit take?',
        a: 'Typically 2–4 weeks depending on product complexity. A discovery sprint (Week 1) is often first to scope the deeper work.',
      },
      {
        q: 'Do you design for accessibility from the start?',
        a: 'Yes. WCAG 2.1 AA compliance is built into every design system we create, not bolted on at the end.',
      },
      {
        q: 'Can you embed with our existing design team?',
        a: 'Absolutely. Many clients want a senior designer embedded part-time to level up their in-house team while we solve specific problems.',
      },
      {
        q: "What if we don't have a clear product direction yet?",
        a: "Perfect fit for a design sprint. We'll run a focused workshop to align your team around the right problem before designing anything.",
      },
    ],
    tone: 'service-lime',
    offerings: [
      ['User experience strategy', 'Research, journeys, information architecture, and product direction.'],
      ['Design thinking & innovation', 'Workshops that align teams around the right problem before they build.'],
      ['Prototyping & validation', 'Fast, realistic prototypes tested with the people who matter.'],
      ['Design systems & brand', 'Visual languages and component systems built to scale with the product.'],
      ['Customer experience transformation', 'End-to-end service blueprints that connect every touchpoint.'],
    ],
  },
  {
    slug: 'product-engineering',
    number: '02',
    eyebrow: 'PRODUCT / ENGINEERING',
    title: 'Ship the thing people came for.',
    description: 'Senior product engineers create resilient digital products, protocol surfaces, and systems ready for the next stage.',
    whatItIs:
      'Product engineering bridges the gap between ambition and ship-readiness. We architect Web3 product surfaces, handle account abstraction, permissions, identity, and integrate onchain logic into cohesive experiences. The outcome: products that feel like they were born for Web3, not bolted on.',
    whoItsFor: ['Pre-mainnet protocols', 'DAOs building governance tools', 'DeFi platforms', 'Infrastructure projects needing consumer-grade surfaces'],
    processSteps: [
      { step: 1, title: 'Discover', description: 'Protocol deep-dive, user flow analysis, technical constraints mapping', duration: 'Week 1' },
      { step: 2, title: 'Define', description: 'Product spec, architecture design, security review checklist', duration: 'Week 1–2' },
      { step: 3, title: 'Build', description: 'Full-stack development, testing, devops setup', duration: 'Week 3–6' },
      { step: 4, title: 'Test & Ship', description: 'Security audit, performance tuning, mainnet launch support', duration: 'Week 7–8' },
    ],
    deliverables: [
      'Product specification document',
      'Architecture & data flow diagrams',
      'Production-grade web application',
      'Mobile app (optional)',
      'Dashboard & analytics',
      'Security audit report',
      'Deployment & launch documentation',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Solana/EVM chains', 'Smart contract integration', 'Wallet integration'],
    engagementModels: [
      {
        name: 'Dedicated Pod',
        description: 'Senior engineers embedded full-time for 6–12 week build',
        scope: 'Fixed scope, senior team',
      },
      {
        name: 'Team Extension',
        description: 'Staff engineers working part-time alongside your team',
        scope: 'Ongoing, flexible',
      },
      {
        name: 'Launch Sprint',
        description: 'Intensive 2–4 week sprint to ship a specific feature or product',
        scope: 'Short, focused',
      },
    ],
    relatedCaseStudy: 'chainpot',
    faqItems: [
      {
        q: 'How do you handle Web3 product architecture?',
        a: 'We architect for both onchain and offchain experiences. Wallet integration, account abstraction, permissions all happen early in the design phase.',
      },
      {
        q: 'Can you audit our existing codebase?',
        a: 'Yes. We can review architecture, security, and performance, then provide a prioritized roadmap for improvements.',
      },
      {
        q: 'Do you stay on for post-launch support?',
        a: 'We include a 2-week handoff period. Extended support and maintenance can be negotiated.',
      },
      {
        q: "What's your deployment & DevOps approach?",
        a: 'We deploy to Vercel or AWS, set up CI/CD pipelines, monitoring, and disaster recovery. Your team owns the keys.',
      },
    ],
    tone: 'service-blue',
    offerings: [
      ['Product discovery & definition', 'From opportunity mapping to a sharp, buildable product thesis.'],
      ['Web3 product architecture', 'Wallets, account abstraction, permissions, identity, and onchain flows.'],
      ['Web & app development', 'Production-grade web applications, dashboards, and mobile experiences.'],
      ['Design engineering', 'High-fidelity interfaces where motion, accessibility, and performance meet.'],
      ['Platform modernization', 'Refactor legacy surfaces into modular systems your team can own.'],
    ],
  },
  {
    slug: 'ecosystem-devrel',
    number: '03',
    eyebrow: 'ECOSYSTEM / DEVREL',
    title: 'Build the motion around the protocol.',
    description: 'We make developer ecosystems legible and active, from first contact to the moment a community ships independently.',
    whatItIs:
      'Developer relations is the connective tissue between your protocol and the builders who need it. We design developer experience, create technical content systems, run hackathons, and build programs that turn passive audiences into active contributors. The outcome: a self-sustaining builder motion.',
    whoItsFor: ['Protocols launching mainnet', 'DAOs scaling developer adoption', 'Infrastructure projects', 'New chains launching'],
    processSteps: [
      { step: 1, title: 'Discover', description: 'Developer persona research, ecosystem mapping, GTM analysis', duration: 'Week 1–2' },
      { step: 2, title: 'Define', description: 'DevRel strategy, content roadmap, program design', duration: 'Week 2–3' },
      { step: 3, title: 'Build', description: 'Documentation, tutorials, sample code, hackathon design', duration: 'Week 4–8' },
      { step: 4, title: 'Launch & Support', description: 'Community activation, feedback loops, ongoing iteration', duration: 'Ongoing' },
    ],
    deliverables: [
      'Developer experience strategy & roadmap',
      'Technical documentation suite',
      'Onboarding tutorial series',
      'Sample projects & SDKs',
      'Hackathon program design & execution',
      'Community engagement playbook',
      'Content calendar & templates',
    ],
    techStack: ['Technical writing', 'Developer tooling', 'Community platforms', 'Analytics', 'Video production'],
    engagementModels: [
      {
        name: 'Team Extension',
        description: 'Senior DevRel lead embedded part-time to build your program',
        scope: 'Ongoing, flexible',
      },
      {
        name: 'Program Launch',
        description: 'End-to-end DevRel program design and first-year execution',
        scope: '3–6 months',
      },
      {
        name: 'Hackathon Production',
        description: 'Design and run a high-signal hackathon event',
        scope: '2–3 months',
      },
    ],
    relatedCaseStudy: 'divergence-router',
    faqItems: [
      {
        q: 'How do you measure DevRel success?',
        a: 'We track developer activation (signups, active builds), content performance, community growth, and ecosystem grants deployed. Success is builders shipping, not vanity metrics.',
      },
      {
        q: 'Do you run hackathons?',
        a: 'Yes. We design, market, and run hackathon programs, from technical onboarding and builder support through event delivery.',
      },
      {
        q: 'Can you help us document a complex protocol?',
        a: "That's a core strength. We turn protocol whitepapers into clear, interactive documentation that developers can actually use.",
      },
      {
        q: "What's your approach to community moderation?",
        a: 'We help design community norms and guidelines, but typically recommend you build internal community moderators to own day-to-day. We set the culture, you own it.',
      },
    ],
    tone: 'service-dark',
    offerings: [
      ['Developer experience strategy', 'The roadmap, rituals, and feedback loops behind builder momentum.'],
      ['Technical content systems', 'Docs, tutorials, demos, changelogs, and narratives that compound.'],
      ['Hackathons & field programs', 'Designing rooms where serious builders learn, collaborate, and ship.'],
      ['Community & ecosystem design', 'Programs that turn passive audiences into useful networks.'],
      ['Launch & communications', 'A credible technical story for every audience that needs to believe.'],
    ],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'civitas',
    number: '01',
    label: 'CASE STUDY',
    title: 'Civitas',
    body: 'Four-layer confidential payroll on Solana.',
    meta: 'SOLANA · GROTH16 · NILLION TEE · MAGICBLOCK',
    href: 'meetcivitas.xyz',
    liveUrl: 'https://civitas-sol.vercel.app',
    githubUrl: 'https://github.com/MeetCivitas/Civitas-SOL',
    whitepaperUrl: 'https://github.com/MeetCivitas/Civitas-SOL/blob/main/WHITEPAPER.md',
    programId: 'CQW3TnN4X6iG2potguVv2hCKfk4f9tf8PMG7dTV6e24y',
    network: 'Solana Devnet · V4 Warm Workload',
    settlementAsset: 'USDC (SPL Token-2022 Vault)',
    timeline: 'v3.1 · May 2026',
    tone: 'blue',
    heroImage: '/images/work/civitas-cover-hd.png',
    logoImage: '/images/work/civitas-logo.png',
    client: 'Civitas Protocol',
    techStack: [
      'Anchor 0.31.x (Rust)',
      'Circom 2.1.6 / Groth16',
      'alt_bn128_pairing Syscalls',
      'Nillion nilDB (3-of-3 MPC)',
      'Nillion nilCC (AMD SEV-SNP)',
      'MagicBlock Private Payments',
      'SPL Token-2022',
      'Next.js 16 / React 19',
    ],
    role: 'Protocol architecture, zero-knowledge circuits & full-stack systems engineering',
    problem:
      'Public blockchains turn a single payroll run into a permanent intelligence leak: one transfer exposes **individual compensation to peers**, **headcount and burn rate to competitors**, and a **high-value transaction graph to extortionists**. Point solutions fail in production: a standalone ZK claim pool still leaks the plaintext salary roster to the database operator and links withdrawals by identical amounts. Meanwhile, Solana’s native **Token-2022 ElGamal ConfidentialTransfer** extension remains disabled on devnet and mainnet pending its **2026 security audit**.',
    approach:
      'We decomposed payroll privacy across **four cooperating layers** where each layer consumes only the cryptographic output of the layer before it. Employee tags and vouchers are secret-shared across a **3-of-3 Nillion nilDB MPC cluster**, while batch commitments and a **depth-20 Poseidon Merkle root** are computed inside a hardware-attested **AMD SEV-SNP confidential VM (nilCC V4)** in **~0.3s**. Employees prove voucher ownership in-browser via a **5-constraint Circom 2.1.6 Groth16 circuit** verified via Solana’s **alt_bn128_pairing** syscall, and final USDC payout is decoupled through **MagicBlock’s TEE Private Payments** splitter.',
    built:
      'An end-to-end confidential payroll protocol deployed on **Solana Devnet (CQW3Tn...6e24y)** featuring a **219-line custom Groth16 BN254 verifier** in Rust, a **10-field SpongePoseidon** public-input commitment, an append-only **Nullifier PDA registry**, a warm **nilCC V4 enclave workload**, and a dual-portal **Next.js 16** employer/employee command center with zero mocks.',
    results:
      '256-byte Groth16 proof verified on-chain in ~175k CU · ~0.3s AMD SEV-SNP enclave commitment · 5-way temporal & structural settlement splitting.',
    metrics: [
      {
        value: '256 B',
        label: 'GROTH16 PROOF FOOTPRINT',
        detail: 'Paired with a 580-byte verification key embedded in BPF; fits comfortably inside Solana’s single-packet 1,232-byte MTU without Address Lookup Tables.',
      },
      {
        value: '~175k CU',
        label: 'ON-CHAIN VERIFICATION COST',
        detail: 'Executes SpongePoseidon(10) input reconstruction + 4-pairing alt_bn128_pairing check well inside Solana’s 1.4M compute unit ceiling.',
      },
      {
        value: '~0.3s',
        label: 'WARM SEV-SNP ENCLAVE LATENCY',
        detail: 'Nillion nilCC V4 long-lived CVM replaces 2–5 minute per-job cold VM boots while keeping Ed25519-signed manifest attestation.',
      },
      {
        value: '5× Split',
        label: 'TEMPORAL & AMOUNT UNLINKABILITY',
        detail: 'MagicBlock TEE dispatcher fragments every USDC payout into 5 randomized sub-transfers delayed across a [500ms, 30s] window.',
      },
    ],
    archCol1Label: 'THREAT ELIMINATED',
    archCol2Label: 'IF OMITTED (LEAK VECTOR)',
    architectureLayers: [
      {
        layer: '01',
        name: 'Confidential Storage',
        stack: 'Nillion nilDB · @nillion/secretvaults v2.0 (3-of-3 MPC)',
        threatEliminated: 'Eliminates single-operator database read access to the **organizational salary table** and voucher records via **3-of-3 additive secret shares (%allot)**.',
        failureModeIfDropped: 'Any infrastructure operator or compromised cloud snapshot can dump the **entire payroll roster in plaintext**.',
      },
      {
        layer: '02',
        name: 'Confidential Compute',
        stack: 'Nillion nilCC V4 · AMD SEV-SNP Hardware-Attested CVM',
        threatEliminated: 'Prevents the employer’s browser or an API server from acting as a trusted party when computing **voucher commitments** and the **depth-20 Merkle root**.',
        failureModeIfDropped: 'Whoever computes the Merkle tree observes every **(employee_tag, amount)** pair simultaneously in unencrypted memory.',
      },
      {
        layer: '03',
        name: 'Zero-Knowledge Anonymous Claim',
        stack: 'Circom 2.1.6 · snarkjs 0.7 · Solana alt_bn128_pairing',
        threatEliminated: 'Breaks the on-chain link between an employee’s **identity leaf in the payroll Merkle tree** and the **destination wallet** claiming funds.',
        failureModeIfDropped: 'The on-chain settlement contract must know which **employee index** is claiming, trivially deanonymizing the recipient.',
      },
      {
        layer: '04',
        name: 'Unlinkable TEE Settlement',
        stack: 'MagicBlock Private Payments · tee.magicblock.app + SPL Token-2022',
        threatEliminated: 'Eliminates **amount-correlation** and **timing-graph heuristics** linking the ZK claim transaction to the USDC payout via **5-way randomized splitting**.',
        failureModeIfDropped: 'Block explorers trivially correlate the **exact USDC transfer amount and timestamp** back to the `claim_payment` transaction.',
      },
    ],
    cryptoRelations: [
      {
        symbol: 'τ (Employee Tag)',
        formula: 'τ := Poseidon₁(η)  ∈ 𝔽_p',
        description: 'Derived one-way in the browser from the employee’s 254-bit master credential_nonce (η) persisted in IndexedDB. Shared with the employer once; η never leaves the device.',
      },
      {
        symbol: 'C (Voucher Commitment)',
        formula: 'C := Poseidon₄(τ, a, e, ν)  ∈ 𝔽_p',
        description: 'Binds employee_tag (τ), salary amount (a), payroll epoch (e), and per-voucher entropy (ν) into a leaf of a depth-20 binary Poseidon Merkle tree (1,048,576 leaves).',
      },
      {
        symbol: 'N (Spend Nullifier)',
        formula: 'N := Poseidon₃(η, e, ν)  ∈ 𝔽_p',
        description: 'Deterministic per voucher but unlinkable to C without knowing η. Registered on-chain as an append-only PDA (seeds = [b"nullifier", N]) to reject double-claims.',
      },
      {
        symbol: 'π_hash (Public Input Sponge)',
        formula: 'π_hash := SpongePoseidon₁₀(root, N, recipient_ata, a, e, mint, vault_pda, program_id, run_id, domain_tag)',
        description: 'Collapses all 10 public settlement parameters into a single BN254 scalar field element, shrinking the on-chain verification key IC array to length 2 (580 bytes total).',
      },
    ],
    circuitConstraints: [
      {
        id: 'C1 · Tag Derivation',
        expression: 'employee_tag <== Poseidon(1)([credential_nonce])',
        purpose: 'Proves the claimant holds the master pre-image η behind the registered employee_tag τ.',
      },
      {
        id: 'C2 · Leaf Reconstruction',
        expression: 'commitment <== Poseidon(4)([employee_tag, amount, epoch, voucher_nonce])',
        purpose: 'Reconstructs the exact voucher leaf committed during the nilCC enclave payroll run.',
      },
      {
        id: 'C3 · Nullifier Integrity',
        expression: 'Poseidon(3)([credential_nonce, epoch, voucher_nonce]) === nullifier',
        purpose: 'Forces the public nullifier N to be deterministically bound to the claimant’s secret credential and voucher.',
      },
      {
        id: 'C4 · Depth-20 Membership',
        expression: 'MerkleProofVerify(20)(commitment, siblings, pathBits) === merkle_root',
        purpose: 'Verifies 20 levels of binary Poseidon hashing against the PayrollRun PDA’s on-chain Merkle root.',
      },
      {
        id: 'C5 · Sponge Binding',
        expression: 'SpongePoseidon10(merkle_root, nullifier, recipient_ata, amount, ...) === pi_hash',
        purpose: 'Cryptographically locks recipient ATA, amount, mint, vault PDA, and program ID against front-running or replay.',
      },
    ],
    lifecyclePhases: [
      {
        phase: 'PHASE I · EMPLOYER ENCLAVE DISPATCH',
        title: 'Secret-shared roster ingestion, SEV-SNP Merkle compilation, and SPL Token-2022 vault escrow.',
        steps: [
          {
            step: '01',
            actor: 'Employee Browser',
            action: 'Local Credential Generation',
            detail: 'Samples a 254-bit credential_nonce η in IndexedDB and computes employee_tag τ = Poseidon₁(η); transmits only τ to the employer.',
          },
          {
            step: '02',
            actor: 'Employer Portal',
            action: 'Payroll Batch Specification',
            detail: 'Defines (employee_tag, amount) rows for epoch e and generates a unique run_id.',
          },
          {
            step: '03',
            actor: 'Nillion nilCC V4 (AMD SEV-SNP)',
            action: 'Enclave Commitment & Merkle Root',
            detail: 'Warm CVM (~0.3s) samples per-row voucher_nonce ν_i, computes C_i = Poseidon₄(τ_i, a_i, e, ν_i), builds the depth-20 Poseidon Merkle tree, and returns an Ed25519-signed manifest.',
          },
          {
            step: '04',
            actor: 'Nillion nilDB (3-of-3 MPC)',
            action: 'Secret-Shared Voucher Persistence',
            detail: 'Splits voucher rows into 3 additive shares via %allot encrypted fields across independent nilDB nodes.',
          },
          {
            step: '05',
            actor: 'Solana Program (create_payroll_run)',
            action: 'On-Chain Root Publication',
            detail: 'Initializes PayrollRun PDA [b"payroll_run", employer, run_id] storing only merkle_root, total_committed, and nilcc_attestation_hash.',
          },
          {
            step: '06',
            actor: 'SPL Token-2022 Vault (deposit_payroll_funds)',
            action: 'Escrow Capitalization',
            detail: 'Transfers total aggregate USDC into the program-controlled vault via transfer_checked; individual salaries remain invisible on-chain.',
          },
        ],
      },
      {
        phase: 'PHASE II · ZK ANONYMOUS CLAIM & PRIVATE SETTLEMENT',
        title: 'In-browser Groth16 witness proving, alt_bn128 pairing verification, and 5-way TEE payout splitting.',
        steps: [
          {
            step: '07',
            actor: 'Employee Browser',
            action: 'Blind Voucher Discovery',
            detail: 'Queries nilDB by employee_tag τ, reconstructs the 3-of-3 shares client-side, and retrieves (amount, epoch, voucher_nonce, merkle_path).',
          },
          {
            step: '08',
            actor: 'snarkjs 0.7 + voucher.wasm',
            action: 'Client-Side Groth16 Proving (~2.4s)',
            detail: 'Evaluates the 5-constraint Circom circuit in-browser to produce a 256-byte BN254 Groth16 proof (A, B, C) and public nullifier N.',
          },
          {
            step: '09',
            actor: 'Solana Program (claim_payment)',
            action: 'Authoritative Sponge Re-Computation',
            detail: 'Recomputes π_hash on-chain via light-poseidon directly from instruction accounts (vault_pda, mint, program_id, merkle_root), preventing spoofed public inputs.',
          },
          {
            step: '10',
            actor: 'Solana alt_bn128_pairing Syscall',
            action: '4-Pairing Groth16 Verification',
            detail: 'Negates proof.A in 𝔽_q and verifies e(-A, B) · e(α, β) · e(vk_x, γ) · e(C, δ) == 1 in ~175,000 CU.',
          },
          {
            step: '11',
            actor: 'Nullifier Registry PDA',
            action: 'Atomic Double-Spend Lock',
            detail: 'Initializes NullifierAccount [b"nullifier", N] and emits the VoucherConsumed event without moving tokens in the claim tx.',
          },
          {
            step: '12',
            actor: 'MagicBlock Private Payments TEE',
            action: 'Temporal & Structural Payout Splitting',
            detail: 'Dispatcher invokes transferSpl with privateTransfer: { split: 5, minDelayMs: 500, maxDelayMs: 30000 } inside tee.magicblock.app.',
          },
          {
            step: '13',
            actor: 'Solana Program (confirm_settlement)',
            action: 'Final Settlement Attestation',
            detail: 'Records the settlement tx signature on the NullifierAccount PDA, transitioning the voucher state to Settled.',
          },
        ],
      },
    ],
    engineeringDecisions: [
      {
        index: '01',
        title: 'Why Groth16 on BN254 instead of PLONK or STARKs (Single-Packet MTU)',
        rationale:
          'Solana enforces a strict **1,232-byte raw packet MTU** and a **1.4M CU ceiling**. Groth16 yields a constant **256-byte proof** (two G₁ points at 64B + one G₂ point at 128B) and verifies via native **alt_bn128 syscalls in ~175k CU**, allowing the entire `claim_payment` instruction to land in a single transaction without multi-tx proof chunking.',
      },
      {
        index: '02',
        title: 'Collapsing 10 Public Inputs via SpongePoseidon(10) (Compact 580B VK)',
        rationale:
          'A standard Groth16 verifier stores one **64-byte G₁ generator** in `IC[]` per public input, requiring k scalar multiplications on-chain. By hashing all **10 settlement parameters** into a single field element `π_hash` inside the circuit and recomputing `π_hash` on-chain via `light-poseidon`, `IC[]` shrinks to **length 2 (580-byte total VK)** and requires only a single `alt_bn128_multiplication` syscall.',
      },
      {
        index: '03',
        title: 'Single-Field BN254 Arithmetic Across Browser, Enclave & BPF',
        rationale:
          'Every cryptographic primitive (`τ`, `C`, `N`, Merkle nodes, and `π_hash`) is computed over the same **BN254 scalar field 𝔽_p** using `circomlibjs` in Next.js/nilCC and `light-poseidon` in Solana BPF. Eliminating cross-field SHA-256 bit-packing cut circuit size by **~6×** and eliminated endianness mismatches between WASM and SBF.',
      },
      {
        index: '04',
        title: 'Decoupled TEE Settlement for Token-2022 ElGamal Audit Hold',
        rationale:
          'Because Solana’s native **Token-2022 ElGamal ConfidentialTransfer** instruction remains disabled on devnet/mainnet pending its **2026 security audit**, executing `transfer_checked` inside `claim_payment` would expose the exact salary amount in the same transaction as the ZK proof. Decoupling payout execution into **MagicBlock’s TEE splitter** breaks both amount and timing correlation on-chain.',
      },
    ],
  },
  {
    slug: 'chainpot',
    number: '02',
    label: 'CASE STUDY',
    title: 'ChainPot',
    body: 'Formally verified communal savings & credit protocol.',
    meta: 'BASE · COMPOUND III · CERTORA AUDITED · ERC-4337',
    href: 'chainpot.fun',
    liveUrl: 'https://chainpot.fun',
    githubUrl: 'https://github.com/Web3Spell/chainpot',
    auditReportUrl: 'https://github.com/Web3Spell/chainpot/blob/main/Certora%20-%20Chainpot%20-%20Report.pdf',
    auditReportLabel: 'Read Certora Audit Report (PDF)',
    whitepaperUrl: 'https://github.com/Web3Spell/chainpot/blob/main/userpersona.md',
    whitepaperLabel: 'Inspect User Personas & Vision Spec',
    programIdLabel: 'CHAINPOT V4 CORE SUITE (BASE SEPOLIA · CHAIN ID 84532)',
    programId: 'CircleEngineV4 · AuctionEngineV4 · RoscaEngineBaseV4 · VaultV4 · CompoundIntegratorV4',
    network: 'Base (EVM · Chain ID 84532)',
    settlementAsset: 'USDC + Compound III Comet (cUSDCv3)',
    timeline: 'V4 Remediated · Certora UX & GTM Stage',
    tone: 'lime',
    heroImage: '/images/work/chainpot-cover-hd.png',
    logoImage: '/images/work/chainpot-logo.jpg',
    client: 'ChainPot Protocol (Supported by Compound · Audited by Certora)',
    techStack: [
      'Solidity 0.8.24',
      'Foundry 1.4 (48/48 Tests)',
      'Compound III (cUSDCv3)',
      'Chainlink VRF V2.5',
      'Certora Prover (CVL)',
      'ERC-4337 Account Abstraction',
      'WebAuthn Passkeys',
      'Base L2',
    ],
    role: 'Protocol architecture, Certora formal verification remediation, Web2.5 UX & GTM execution',
    problem:
      'Rotating Savings and Credit Associations (ROSCAs), known globally as **chit funds, tandas, and susus**, mobilize hundreds of billions of dollars across **two billion people**, yet informal physical circles suffer from **unpenalized late-stage defaults**, **opaque manual ledger fraud**, **0% yield on idle cash**, and **5–9% remittance drag**. Conversely, institutional DeFi lending demands **>125% over-collateralization**, pricing out the exact communities that rely on cooperative credit.',
    approach:
      'Web3Spell engineered **ChainPot V4** on Base, backed by **Compound Protocol** and formally verified by **Certora**. After remediating **18/18 Certora Prover security findings** and **2 design directives** with 100% invariant compliance, Web3Spell and the official **Certora team** launched a joint operational scale-up: replacing seed phrases and ETH gas hurdles with **ERC-4337 Account Abstraction**, **WebAuthn passkeys**, and **USDC Paymaster sponsorship** across a phased Go-to-Market rollout.',
    built:
      'A **7-contract Solidity 0.8.24 suite** uniting **CircleEngineV4** (payment-gated **Chainlink VRF V2.5** social lotteries) and **AuctionEngineV4** (reverse-discount SME bidding pots) over **RoscaEngineBaseV4**, non-custodial pull-only **VaultV4** custody, an ERC-4626-hardened **CompoundIntegratorV4** supplying idle float into **Compound III Comet (cUSDCv3)** with an **80/20 yield-and-insurance split**, and **MemberRegistryV4** reputation scoring.',
    results:
      'Supported by Compound Protocol · Audited & Advised by Certora (18/18 V4 findings remediated · 48/48 Foundry & Base Mainnet-Fork tests passing).',
    metrics: [
      {
        value: '18 / 18',
        label: 'CERTORA FINDINGS REMEDIATED',
        detail: '100% remediation of all 18 security findings (H-01, M-01, L-01–L-10, I-01–I-06) plus design directives DR-02 and DR-03 under the Certora Prover.',
      },
      {
        value: '48 / 48',
        label: 'FOUNDRY & COMET FORK SUITE',
        detail: 'Complete invariant, unit, and live Base mainnet fork verification against production Compound III Comet (cUSDCv3) and Chainlink VRF V2.5.',
      },
      {
        value: '80 / 20',
        label: 'YIELD & SAFETY MODULE SPLIT',
        detail: '80% of time-weighted Compound III yield distributes pro-rata to members; 20% routes to the ChainPot Safety Module (POL insurance reserve).',
      },
      {
        value: '< 15%',
        label: 'TARGET ONBOARDING DROP-OFF',
        detail: 'Joint Certora × Web3Spell UX scale-up replacing seed phrases and native gas prompts with WebAuthn passkeys and ERC-4337 sponsored USDC transactions.',
      },
    ],
    architectureSectionKicker: '03 / CERTORA FORMAL VERIFICATION MATRIX',
    architectureSectionTitle: 'Mathematically proving solvency across recursive states.',
    architectureSectionSubtitle:
      'Because pooled communal capital represents the household savings and working capital of participants, empirical unit testing is insufficient. Certora applied formal verification alongside manual security review across four core audit dimensions.',
    archCol1Label: 'THREAT ELIMINATED (VERIFIED V4 INVARIANT)',
    archCol2Label: 'IF OMITTED (EXPLOIT / INSOLVENCY VECTOR)',
    architectureLayers: [
      {
        layer: '01',
        name: 'Solvency & Compound III Accounting',
        stack: 'VaultV4.sol · CompoundIntegratorV4.sol (L-01, L-02, L-09, H-05)',
        threatEliminated: 'Replaced cached `internalPrincipal` (L-09) with **live cUSDCv3 balance queries (L-01)** and virtual share offsets; proved that contract balances strictly match unallocated deposits + locked collateral (`backing == 0` post-claim).',
        failureModeIfDropped: 'ERC-4626 **donation/inflation attacks**, token rounding leakage, and ledger drift between internal principal accounting and live Compound III Comet balances.',
      },
      {
        layer: '02',
        name: 'Payout Distribution & Payment-Gated VRF',
        stack: 'CircleEngineV4.sol · VRFProviderV4.sol (H-01, F-01, C-03, DR-03)',
        threatEliminated: 'Enforced **payment-gated per-cycle draws** (`_drawGated` fires only when **≥2 eligible members pay**; single-payer assigns directly) and **2-step store-then-finalize** pull settlement.',
        failureModeIfDropped: 'Unfunded Circle pots spamming `_onStartPot()` to **drain the shared Chainlink VRF V2.5 subscription (H-01)**, payout reentrancy during claims, and skipped-cycle race conditions.',
      },
      {
        layer: '03',
        name: 'Reverse-Auction & Slashing Mechanics',
        stack: 'AuctionEngineV4.sol · MemberRegistryV4.sol (M-01, M-03, F-05, L-07)',
        threatEliminated: 'Enforced strict **2% minimum bid steps**, strictly-lower re-bids, deterministic deadline default flagging, **permanent reputation slashing**, and protocol-wide repeat-default blacklisting.',
        failureModeIfDropped: 'Bid manipulation during active payment windows (F-10), **bids exceeding `totalCollected` (H-03)**, unpenalized late-stage walkaways, and multi-bid reputation farming (M-02).',
      },
      {
        layer: '04',
        name: 'Lifecycle & Governance Boundaries',
        stack: 'RoscaEngineBaseV4.sol · VaultV4.sol (M-01, L-10, I-05, I-06, DR-02)',
        threatEliminated: 'Proved **absolute immutability** of pot parameters and **Merkle-whitelisted rosters** once `startPot()` executes, paired with timelocked engine binding and bounded admin safety guards.',
        failureModeIfDropped: 'Mid-cycle parameter tampering, **unauthorized roster mutations** after pot launch, griefing during pool finalization, and privilege escalation during initialization.',
      },
    ],
    specSectionKicker: '04 / DUAL-ENGINE SUITE & WEB2.5 PERSONA ARCHITECTURE',
    specSectionTitle: 'Pairing V4 smart contracts with behavioral onboarding.',
    specSectionSubtitle:
      'With protocol solvency proven at the contract layer, Web3Spell and the official Certora team aligned the V4 dual-engine architecture with five real-world user personas across three behavioral UX tiers.',
    specLeftPanelKicker: 'CHAINPOT V4 SMART CONTRACT SUITE · SOLIDITY 0.8.24',
    specRightPanelKicker: 'CERTORA × WEB3SPELL UX & ONBOARDING ARCHETYPES',
    cryptoRelations: [
      {
        symbol: 'Program A · CircleEngineV4 (Social Kitty Parties)',
        formula: 'Winner_c := ChainlinkVRF_V2.5(paidMembers_c ≥ 2) | PullClaim(VaultV4)',
        description: 'Built for family and neighbourhood circles (kuri, ajo, tanda). Fixed periodic USDC contributions; payment-gated VRF lottery ensures every honest member wins exactly once per pot plus pro-rata Compound III yield.',
      },
      {
        symbol: 'Program B · AuctionEngineV4 (Business ROSCAs)',
        formula: 'Dividend_i := (PotPool − LowestBid_c + NetCometYield_c) / N_eligible',
        description: 'Built for SMEs and merchant working capital. Members submit competitive discount bids (≥2% step); the lowest bidder receives immediate liquidity while patient savers capture the discount + net cUSDCv3 yield.',
      },
      {
        symbol: 'Time-Weighted Yield & Safety Module (VaultV4)',
        formula: 'NetYield := 0.80 · GrossCometYield (Members) + 0.20 · GrossCometYield (POL Backstop)',
        description: 'Idle cycle deposits supply directly into Compound III Comet (cUSDCv3) via CompoundIntegratorV4. Time-weighted deposit tracking (L-02) rewards early cycle payers while 20% capitalizes the on-chain insurance reserve.',
      },
      {
        symbol: 'Zero-Collateral Social Trust (MemberRegistryV4)',
        formula: 'Access := MerkleVerify(root, wallet) ∧ ¬isBlacklisted(wallet)',
        description: 'Organizers curate invite-only pots via Merkle roots frozen at launch. Completed cycles build portable on-chain reputation scores; missed deadlines trigger automatic default flagging and protocol blacklisting.',
      },
    ],
    circuitConstraints: [
      {
        id: 'ARCHETYPE 01 · EVERYDAY COMMUNITY SAVER (ASHA, HASSAN, MARIA)',
        expression: 'ERC-4337 Smart Account + WebAuthn Passkey + Paymaster USDC Gas',
        purpose: 'Eliminates seed-phrase anxiety and ETH gas barriers for traditional chit-fund chairwomen, gig workers, and overseas remittance senders. Users authenticate via Apple/Google/biometrics and view balances in clear fiat-denominated USDC.',
      },
      {
        id: 'ARCHETYPE 02 · COMMUNITY POOL ORGANIZER / CHAIRWOMAN',
        expression: 'Merkle Roster Builder + Pull-Only Custody ("Contract is the Boss")',
        purpose: 'Replaces manual WhatsApp ledger reconciliation and organizer fraud suspicion. VaultV4 is strictly pull-only (organizers cannot touch member funds), while automated deadline alerts and algorithmic penalties remove personal confrontation.',
      },
      {
        id: 'ARCHETYPE 03 · WEB3 COLLECTIVES, DAOs & SME SYNDICATES (DMITRI, PRIYA)',
        expression: 'Safe Multi-Sig Treasury + Reverse-Auction Hooks + Certora Provenance',
        purpose: 'Serves DeFi yield strategists, developer guilds, and DAO treasuries pooling capital for equipment, syndicate bids, or working-capital rotation with full audit provenance and composable contract hooks.',
      },
    ],
    lifecycleSectionKicker: '05 / COMMERCIALIZATION & GTM PLAYBOOK',
    lifecycleSectionTitle: 'Phased Go-to-Market & ecosystem scaling with Certora.',
    lifecyclePhases: [
      {
        phase: 'PHASE I · CONTROLLED VERIFICATION & FUNNEL OPTIMIZATION',
        title: 'Certora formal verification sign-off, ERC-4337 gasless funnel tuning, and alpha cohort deployment.',
        steps: [
          {
            step: '01',
            actor: 'Certora × Web3Spell Security',
            action: '18/18 Audit Remediation & Prover Sign-Off',
            detail: 'Closed all 18 formal verification and manual audit findings across the 7-contract V4 suite with 48/48 Foundry and Base mainnet-fork tests passing.',
          },
          {
            step: '02',
            actor: 'Web2.5 Onboarding Stack',
            action: 'Passkey & Paymaster Funnel Optimization',
            detail: 'Deploying social/biometric account abstraction and stablecoin gas sponsorship to drive onboarding funnel drop-off below 15%.',
          },
          {
            step: '03',
            actor: 'Developer Guilds & Alpha Cohorts',
            action: 'Controlled Pilot Pots',
            detail: 'Executing live multi-cycle CircleEngineV4 and AuctionEngineV4 cohorts targeting 100% round settlement execution and zero contract anomalies.',
          },
        ],
      },
      {
        phase: 'PHASE II · DIASPORA & REGIONAL COMMUNITY EXPANSION',
        title: 'Localized fiat onramps, organizer management consoles, and high-velocity mutual-aid corridors.',
        steps: [
          {
            step: '04',
            actor: 'Regional Fiat Rails (Onmeta / Local)',
            action: 'Direct Local-Currency-to-USDC Onramps',
            detail: 'Integrating low-fee local payment rails across India, West Africa, Latin America, and Southeast Asia so savers fund pots without CEX friction.',
          },
          {
            step: '05',
            actor: 'Cultural & Diaspora Associations',
            action: 'Zero-Remittance-Drag Family Circles',
            detail: 'Onboarding overseas workers and domestic family circles onto Merkle-gated CircleEngineV4 pots, replacing 5–9% remittance wire fees with yield-bearing settlement.',
          },
          {
            step: '06',
            actor: 'Community Pool Organizers',
            action: 'Cohort Retention & TVL Scaling',
            detail: 'Equipping chairwomen and susu coordinators with one-click pot templates and automated payment telemetry, targeting >75% multi-cycle cohort retention.',
          },
        ],
      },
      {
        phase: 'PHASE III · INSTITUTIONAL MICRO-CREDIT & CROSS-CHAIN SCALING',
        title: 'Portable on-chain reputation underwriting and microfinance balance-sheet integration.',
        steps: [
          {
            step: '07',
            actor: 'MemberRegistryV4 Credit Graph',
            action: 'Reputation-Based Underwriting',
            detail: 'Transforming verified multi-cycle ROSCA contribution histories into an on-chain credit score that unlocks progressive pot tiers and under-collateralized micro-credit.',
          },
          {
            step: '08',
            actor: 'Microfinance NGOs & Credit Unions',
            action: 'Institutional Balance-Sheet Integration',
            detail: 'Leveraging the Certora formal verification report to partner with regulated microfinance institutions and public-goods ecosystems for transparent capital delivery.',
          },
          {
            step: '09',
            actor: 'Multi-Chain EVM Deployment',
            action: 'Cross-Ecosystem Liquidity Expansion',
            detail: 'Scaling the hardened V4 contract suite and Safety Module reserve across high-throughput L2s and enterprise digital treasuries.',
          },
        ],
      },
    ],
    decisionsSectionKicker: '06 / STRUCTURAL MARKET COMPARISON',
    decisionsSectionTitle: 'Why ChainPot outperforms informal ROSCAs and over-collateralized DeFi.',
    engineeringDecisions: [
      {
        index: '01',
        title: 'Informal Peer Pressure vs. 125%+ DeFi Collateral vs. ChainPot V4',
        rationale:
          'Informal physical ROSCAs rely on fragile localized social pressure that breaks down across cities or borders, while institutional DeFi lending demands **>125% surplus collateral**, excluding anyone who actually needs working capital. ChainPot bridges both via **Merkle-whitelisted community rosters**, portable **MemberRegistryV4 reputation**, and **Certora-verified** state transitions.',
      },
      {
        index: '02',
        title: 'Pull-Only Vault Custody & Programmatic Slashing vs. Organizer Risk',
        rationale:
          'In traditional chit funds and susus, a single organizer holds the cash ledger, creating a single point of embezzlement, accounting disputes, or unpenalized late-stage walkaways. ChainPot’s **VaultV4 is strictly non-custodial and pull-only**, pairing algorithmic default blacklisting with a **20% Compound-yield Safety Module** backstop.',
      },
      {
        index: '03',
        title: 'Compound III (cUSDCv3) Time-Weighted Yield vs. Idle Physical Cash',
        rationale:
          'Closed-loop cash circles earn **0% yield** while domestic inflation erodes purchasing power. ChainPot routes every cycle deposit into **Compound III Comet via CompoundIntegratorV4**, computing exact **time-weighted yield shares (L-02)** so early payers and patient savers earn real DeFi yield on top of their rotating payout.',
      },
      {
        index: '04',
        title: 'Mathematical Solvency Proofs + Web2.5 Passkey Accessibility',
        rationale:
          'Consumer savings protocols cannot scale on "move fast and break things." By completing the **18-finding Certora formal verification remediation** first and now co-executing **ERC-4337 passkey onboarding** and GTM with the Certora team, ChainPot pairs institutional audit pedigree with consumer-grade simplicity.',
      },
    ],
  },
  {
    slug: 'divergence-router',
    number: '03',
    label: 'CASE STUDY',
    title: 'Divergence Router',
    body: 'Human-centric divergence detection & atomic multi-leg execution on Somnia.',
    meta: 'SOMNIA · DREAMDEX CLOB · ERC-6909 · ATOMIC ROUTING',
    href: 'divergence-router.vercel.app',
    liveUrl: 'https://divergence-router.vercel.app',
    githubUrl: 'https://github.com/rythmern02/Divergence-Router',
    whitepaperUrl: 'https://github.com/rythmern02/Divergence-Router/blob/main/README.md',
    whitepaperLabel: 'Inspect Architecture & Payoff Spec',
    programIdLabel: 'SOMNIA SHANNON TESTNET SUITE (CHAIN ID 50312)',
    programId: 'DivergenceRouter (0xdAf785...875F) · BinaryMarketsModule (0x3ecC69...e388) · OutcomeToken6909 (0xB52c59...55b9)',
    network: 'Somnia Shannon Testnet (Chain ID 50312 · Sub-380ms)',
    settlementAsset: 'tUSDC (0x0957C6...f8517) + ERC-6909 Claims',
    timeline: 'Live on Somnia Shannon · DreamDEX Integrated',
    tone: 'dark',
    heroImage: '/images/work/divergence-router-cover-hd.png',
    logoImage: '/images/work/divergence-router-logo.jpg',
    client: 'Somnia × DreamDEX Ecosystem',
    techStack: [
      'Solidity 0.8.20',
      'ERC-6909 Multi-Token',
      'DreamDEX CLOB & Event Pools',
      'Somnia Shannon (Chain ID 50312)',
      'Next.js 14 / React',
      'Viem v2 WebSocket Stream',
      'TailwindCSS',
    ],
    role: 'Protocol architecture, algorithmic order-book routing & ergonomic terminal design',
    problem:
      'Sub-second on-chain Central Limit Order Books (CLOBs) on high-throughput L1s like **Somnia** have widened the structural gulf between **automated latency bots** and human traders. Manual participants on **DreamDEX** face four compounding failure modes: **toxic slippage** during order-book dislocations, abrupt **`PostOnlyWouldCross` reverts** that burn gas without filling intent, fatal **"legging-in" exposure** when pairing multi-asset (`BTC/ETH`) or cross-cadence (`15m/1h`) binary contracts, and **acute cognitive overload** from flashing tick matrices.',
    approach:
      'Engineered by blockchain architect **Rythme Nagrani (`rythmern02`)**, Divergence Router inserts a non-custodial computational buffer and atomic proxy between human intent and DreamDEX on Somnia. The engine continuously evaluates real-time **price divergence (`D_t`)** across **three defensive regimes** (`≤0.50%` Equilibrium, `0.50%–3.00%` Dislocation, `>3.00%` Halt), wraps passive `PostOnly` maker orders in an automatic **`Immediate-Or-Cancel (IOC)` failover state machine**, and executes dual-leg splits inside a **single atomic EVM transaction**.',
    built:
      'A stateless 1-click execution router (**`DivergenceRouter.sol` at `0xdAf7...875F`**) integrated with DreamDEX’s **`BinaryMarketsModule`**, **`OutcomeToken6909` (`ERC-6909`)**, and **`BinarySettlement`** contracts on **Somnia Shannon (`Chain ID 50312`)**, paired with a calm execution terminal featuring **<380ms WebSocket block streaming**, a **2D Strategy Matrix**, a mandatory **4-Quadrant Payoff Matrix**, and a **Chaos Starved-Book Simulator**.',
    results:
      'Sub-380ms Somnia block-stream telemetry · Zero legging-in risk via atomic EVM rollback · Automated PostOnly-to-IOC revert elimination.',
    metrics: [
      {
        value: '≤ 0.50%',
        label: 'SAFE DIVERGENCE FLOOR (τ_safe)',
        detail: 'When D_t ≤ 0.005, the router enforces passive PostOnly maker placement on DreamDEX to capture fee rebates and avoid taker penalties.',
      },
      {
        value: '≥ 3.00%',
        label: 'CIRCUIT BREAKER CEILING (τ_max)',
        detail: 'When D_t ≥ 0.030, the autonomous circuit breaker halts execution to shield the trader’s balance sheet from flash crashes or manipulated books.',
      },
      {
        value: '< 380ms',
        label: 'SOMNIA TELEMETRY CADENCE',
        detail: 'Continuous JSON-RPC WebSocket stream ingesting newHeads and pool logs with off-chain pre-flight simulation before transactions touch the mempool.',
      },
      {
        value: '100% Atomic',
        label: 'ZERO LEGGING-IN EXPOSURE',
        detail: 'Both legs of a BTC/ETH or 15m/1h Divergence Split mint sequentially in a single EVM transaction or revert completely with 100% tUSDC refund.',
      },
    ],
    architectureSectionKicker: '03 / DIVERGENCE DETECTION & EXECUTION REGIMES',
    architectureSectionTitle: 'Absorbing microstructure volatility at the routing layer.',
    architectureSectionSubtitle:
      'Divergence Router continuously evaluates the scalar dislocation D_t = |P_local − P_benchmark| / P_benchmark prior to dispatch, dynamically routing orders across three protective regimes and an atomic multi-leg settlement guard.',
    archCol1Label: 'THREAT ELIMINATED (AUTOMATED ROUTER DEFENSE)',
    archCol2Label: 'IF OMITTED (MARKET FAILURE VECTOR)',
    architectureLayers: [
      {
        layer: '01',
        name: 'Equilibrium Regime: Passive Maker Rebate Capture (D_t ≤ 0.50%)',
        stack: 'PostOnly Maker Placement · DreamDEX CLOB',
        threatEliminated: 'Routes the trade as a passive **`PostOnly` maker order**, capturing exchange **fee rebates** and securing price improvement without adverse selection.',
        failureModeIfDropped: 'Naive market orders pay **unnecessary taker fees** and suffer spread-crossing costs despite tight order-book equilibrium.',
      },
      {
        layer: '02',
        name: 'Dislocation Regime: Adaptive IOC Failover (0.50% < D_t ≤ 3.00%)',
        stack: 'PostOnly → Immediate-Or-Cancel (IOC) State Machine',
        threatEliminated: 'Client-side middleware intercepts spread-crossing conditions and seamlessly transitions to a **bounded `IOC` crossing order** strictly within pre-authorized slippage limits.',
        failureModeIfDropped: 'A passive order that crosses a shifting spread reverts with **`PostOnlyWouldCross`**, **burning gas** and leaving trader intent unfulfilled.',
      },
      {
        layer: '03',
        name: 'Anomalous Regime: Autonomous Circuit Breaker (D_t > 3.00%)',
        stack: 'Pre-Flight Simulation Guard · Hard Execution Halt',
        threatEliminated: 'Engages an immediate **pre-flight circuit breaker** that blocks transaction broadcast and surfaces a clear visual dislocation rationale in the terminal.',
        failureModeIfDropped: 'Acute liquidity vacuums, oracle lag, or predatory book sweeping during breaking news expose manual traders to **catastrophic slippage**.',
      },
      {
        layer: '04',
        name: 'Multi-Leg Atomic Regime: Sequential Split Enforcer',
        stack: 'DivergenceRouter.sol (0xdAf785...875F) · openSplit()',
        threatEliminated: 'Executes Leg A and Leg B complete-set mints **atomically in one transaction**; if either leg breaches `minFillAmount`, **EVM rollback refunds 100% of tUSDC**.',
        failureModeIfDropped: 'Executing multi-asset (`BTC/ETH`) or cross-cadence (`15m/1h`) hedges in separate transactions strands traders with **naked 1-leg exposure** if Leg B slips.',
      },
    ],
    specSectionKicker: '04 / QUANTITATIVE MODEL & HUMAN-CENTERED ERGONOMICS',
    specSectionTitle: 'Translating sub-second volatility into trader reassurance.',
    specSectionSubtitle:
      'Technical infrastructure should absorb operational stress rather than projecting it onto the user. Divergence Router pairs formal microstructure invariants with an ergonomic interface that eliminates cognitive overload.',
    specLeftPanelKicker: 'QUANTITATIVE ROUTING & PAYOFF FORMULATIONS',
    specRightPanelKicker: 'ERGONOMIC TERMINAL SOLUTIONS VS. DEX FRICTION',
    cryptoRelations: [
      {
        symbol: 'D_t (Relative Price Divergence Scalar)',
        formula: 'D_t := |P_local(DreamDEX) − P_benchmark(Index)| / P_benchmark',
        description: 'Quantifies real-time order-book dislocation before every trade, governing automatic regime selection between passive maker placement (≤0.50%), bounded IOC crossing (0.50%–3.00%), and circuit-breaker halt (>3.00%).',
      },
      {
        symbol: '2D Orthogonal Strategy Matrix',
        formula: 'Split := Asset(BTC ⊥ ETH) × Cadence(15m ⊥ 1h ⊥ 4h)',
        description: 'Transforms isolated 1D binary coin-flips into structured institutional positions: Cross-Asset Divergence Splits (Long BTC UP + Long ETH DOWN) and Calendar Term-Structure Inversions (Long 15m UP + Long 1h DOWN).',
      },
      {
        symbol: '4-Quadrant Structured Payoff Matrix',
        formula: 'Payoff ∈ { 2.0× Divergence Win, 1.0× Co-Movement Flat, 0.0× Inverse Limit }',
        description: 'Resolves the Binary Correlation Trap: if both BTC and ETH move together (both UP or both DOWN), the winning leg (2.0×) offsets the losing leg (0.0×) for a 1.0× protected flat return, monetizing decoupling with zero directional beta.',
      },
      {
        symbol: 'ERC-6909 Multi-Token Outcome Claims',
        formula: 'openSplit(legA, legB, collateral, minFill) → OutcomeToken6909.mint()',
        description: 'Mints lightweight ERC-6909 outcome claims across DreamDEX BinaryMarketsModule pools and settles winning positions directly back to tUSDC via redeemSplit().',
      },
    ],
    circuitConstraints: [
      {
        id: 'FRICTION 01 · EXECUTION & REVERT ANXIETY',
        expression: 'Pre-Flight Simulation + Chaos Starved-Book Simulator',
        purpose: 'Replaces fear of PostOnlyWouldCross and InsufficientFill reverts with off-chain balance/allowance/depth verification and an interactive simulator that proves atomic rollback safety before signing.',
      },
      {
        id: 'FRICTION 02 · SENSORY & COGNITIVE OVERLOAD',
        expression: 'Calibrated 3-Tier Safety HUD vs. Flashing Order Ladders',
        purpose: 'Replaces disorienting streams of raw tick matrices and hex receipts with serene, color-calibrated regime indicators (Equilibrium, Managed Dislocation, Halted) and sub-380ms block telemetry.',
      },
      {
        id: 'FRICTION 03 · SILENT TAKER FEE EROSION',
        expression: 'Automated Maker Optimization & Rebate Telemetry',
        purpose: 'Prevents unnoticed capital erosion from aggressive taker orders by defaulting to PostOnly maker placement in equilibrium states and explicitly reporting accumulated fee savings.',
      },
      {
        id: 'FRICTION 04 · PAYOFF & ROUTING OPACITY',
        expression: 'Mandatory 4-Quadrant Modal & Plain-Language Route Rationale',
        purpose: 'Every routing adjustment, IOC fallback, or circuit-breaker intervention is accompanied by a transparent human-readable explanation and a 4-quadrant scenario breakdown.',
      },
    ],
    lifecycleSectionKicker: '05 / ATOMIC EXECUTION & FAILOVER TRACE',
    lifecycleSectionTitle: '8-step sub-second routing and rollback lifecycle.',
    lifecyclePhases: [
      {
        phase: 'PHASE I · TELEMETRY INGESTION & PRE-FLIGHT REGIME CLASSIFICATION',
        title: 'Sub-380ms Somnia WebSocket stream, divergence scalar evaluation, and 4-quadrant payoff verification.',
        steps: [
          {
            step: '01',
            actor: 'Viem v2 WebSocket Client',
            action: 'Sub-Second Block & Book Ingestion',
            detail: 'Streams newHeads and DreamDEX pool logs on Somnia Shannon (Chain ID 50312) without polling lag, maintaining live P_local depth.',
          },
          {
            step: '02',
            actor: 'Divergence Engine',
            action: 'Scalar Dislocation Calculation (D_t)',
            detail: 'Computes D_t against aggregate benchmark feeds and classifies the market into Equilibrium (≤0.5%), Dislocation (0.5%–3.0%), or Circuit Breaker (>3.0%).',
          },
          {
            step: '03',
            actor: '2D Strategy Terminal',
            action: '4-Quadrant Payoff Matrix Inspection',
            detail: 'Trader selects Cross-Asset (BTC/ETH) or Calendar (15m/1h) legs and reviews exact 2.0× / 1.0× / 0.0× quadrant outcomes.',
          },
          {
            step: '04',
            actor: 'Pre-Flight Route Validator',
            action: 'Off-Chain Simulation & Allowance Check',
            detail: 'Simulates openSplit() execution against current block state to verify tUSDC allowances, pool liquidity, and slippage bounds prior to wallet prompt.',
          },
        ],
      },
      {
        phase: 'PHASE II · ATOMIC ON-CHAIN EXECUTION, IOC FAILOVER & SETTLEMENT',
        title: 'Single-transaction dual-leg minting, PostOnly-to-IOC transition, and ERC-6909 payout redemption.',
        steps: [
          {
            step: '05',
            actor: 'Order Lifecycle State Machine',
            action: 'PostOnly Maker Attempt → IOC Failover',
            detail: 'Attempts passive maker placement first; if incoming block flow shifts the spread, automatically transitions to a bounded IOC crossing order without reverting.',
          },
          {
            step: '06',
            actor: 'DivergenceRouter.sol (openSplit)',
            action: 'Sequential Dual-Leg Complete-Set Minting',
            detail: 'Pulls tUSDC collateral and executes Leg A (e.g., BTC Pool) and Leg B (e.g., ETH Pool) mints sequentially via BinaryMarketsModule.',
          },
          {
            step: '07',
            actor: 'Slippage Invariant Enforcer',
            action: 'Atomic Fill Verification or Full Rollback',
            detail: 'Verifies both legs meet minFillAmount; if starved liquidity causes either leg to slip, reverts with InsufficientFill and unwinds the entire tx.',
          },
          {
            step: '08',
            actor: 'OutcomeToken6909 & BinarySettlement',
            action: 'ERC-6909 Custody & 1-Click Redemption',
            detail: 'Issues ERC-6909 outcome tokens to the trader and settles resolved winning claims back into tUSDC via redeemSplit().',
          },
        ],
      },
    ],
    decisionsSectionKicker: '06 / MICROSTRUCTURE & ARCHITECTURAL DECISIONS',
    decisionsSectionTitle: 'Engineering preemptions against prediction-market traps.',
    engineeringDecisions: [
      {
        index: '01',
        title: 'Reframing Pairs Trading into 4-Quadrant Divergence Splits',
        rationale:
          'In continuous spot markets, a pairs trade profits from relative outperformance (`P_A − P_B`). In **binary `{0, 1}` contracts**, if both BTC and ETH rally together, both resolve to UP, causing a naive short hedge to expire worthless. Framing positions as **Divergence Splits** with a mandatory **4-Quadrant Matrix** makes clear that co-movement yields a **1.0× protected flat return** while decoupling yields **2.0×**.',
      },
      {
        index: '02',
        title: 'Single-Transaction Sequential Minting with EVM Rollback',
        rationale:
          'Submitting Leg A and Leg B as two separate transactions on thin decentralized order books inevitably strands retail traders with **unhedged directional exposure** when the second leg slips. Executing both legs atomically inside **`DivergenceRouter.openSplit()`** guarantees **zero orphan positions**.',
      },
      {
        index: '03',
        title: 'Why Continuous Passive LP Vaults Fail on Short-Horizon Binaries',
        rationale:
          'Continuously rebalancing passive **`ERC-4626` LP capital** across **15-minute expiring binary outcome tokens** incurs prohibitive gas drag and severe expiration gamma loss. Designing Divergence Router as a **stateless, on-demand execution engine** eliminates idle pool risk and keeps custody **100% with the trader**.',
      },
      {
        index: '04',
        title: 'Matching Sub-380ms Block Finality with Adaptive Client Middleware',
        rationale:
          'On 12-second blockchains, order-book divergence signals decay before inclusion, turning protective routing into stale guesswork. **Somnia Shannon’s sub-second finality (<380ms)** allows the router’s WebSocket telemetry and **`PostOnly`-to-`IOC` state machine** to react within a single block lifecycle.',
      },
    ],
  },
  {
    slug: 'core-nexus',
    number: '04',
    label: 'ECOSYSTEM & HACKATHON',
    title: 'Core Nexus',
    body: "Central India's biggest 36-hour Web3 hackathon & builder bootcamp at Jagran Lakecity University, Bhopal, activating 250+ on-campus builders and 150+ shipped onchain projects.",
    meta: 'JLU BHOPAL · 36H HACKATHON · 150+ SUBMISSIONS',
    href: 'dorahacks.io · core-nexus-bhopal',
    network: 'Arbitrum · Multi-Chain EVM & Web3 Tooling',
    settlementAsset: 'Mainstage Top 3 Podium + Partner Bounty Tracks',
    tone: 'lime',
    heroImage: '/images/work/core-nexus/mainstage-wide.jpg',
    loopVideoUrl: '/videos/core-nexus.mp4',
    loopVideoCaption:
      'Core Nexus Bhopal: 36-Hour Continuous On-Campus Build Sprint at Jagran Lakecity University (JLU)',
    galleryImages: [
      {
        src: '/images/work/core-nexus/mainstage-wide.jpg',
        title: 'Mainstage Production at JLU Bhopal',
        caption:
          "Web3Spell Presents Core Nexus Bhopal, featuring mainstage production and partner showcase at Jagran Lakecity University, rated among Central India's premier campuses.",
        tag: 'MAINSTAGE · JLU BHOPAL',
      },
      {
        src: '/images/work/core-nexus/rythme-keynote.jpg',
        title: 'Opening Keynote & Technical Track Briefing',
        caption:
          'Web3Spell Labs Co-Founder Rythme Nagrani walking 250+ builders through the 36-hour architecture tracks, judging rubric, and partner SDK bounties across Arbitrum, Verbwire, QuillAI Network, Civic, and DoraHacks.',
        tag: 'KEYNOTE · TRACK BRIEFING',
      },
      {
        src: '/images/work/core-nexus/jlu-auditorium.jpg',
        title: '250+ On-Campus Builders in the JLU Auditorium',
        caption:
          'Packed main auditorium at Jagran Lakecity University during the opening technical bootcamp and live smart-contract deployment workshops.',
        tag: '250+ BUILDERS · COHORT',
      },
      {
        src: '/images/work/core-nexus/stage-led.jpg',
        title: 'Core Nexus Finale Stage & Live Demo Arena',
        caption:
          'The JLU auditorium LED stage prepared for the 36-hour closing ceremony, live onchain product demonstrations, and Top 3 podium evaluation.',
        tag: 'FINALE · DEMO ARENA',
      },
      {
        src: '/images/work/core-nexus/jlu-campus.jpg',
        title: 'Full-Campus Activation & Partner Pavilions',
        caption:
          'Outdoor campus activation at JLU Bhopal featuring the Core Nexus Community Partners wall, dedicated builder food zones, and 36-hour logistics hubs.',
        tag: 'CAMPUS OPS · BHOPAL',
      },
    ],
    client: 'Jagran Lakecity University (JLU) · Arbitrum & Ecosystem Partners',
    timeline: '36-Hour Continuous On-Campus Hackathon & Bootcamp (Bhopal, India)',
    techStack: [
      'Arbitrum',
      'DoraHacks',
      'Verbwire',
      'QuillAI Network',
      'Civic Auth',
      '.xyz Domains',
      'Solidity / EVM',
      'Next.js / Wagmi',
    ],
    role: 'End-to-End Concept, Curriculum, Partner GTM, 36h On-Ground Operations & Technical Judging',
    problem:
      'Most university and regional Web3 hackathons suffer from a fatal conversion drop: hundreds of students register for free swag, sit through generic slide decks, and either drop out overnight or submit recycled Web2 templates with zero real onchain integration. Furthermore, Tier-2 engineering hubs like Central India had immense raw developer talent at campuses like Jagran Lakecity University (JLU) Bhopal, but lacked a rigorous, production-grade Web3 build room where protocol engineers mentored teams hands-on through smart contract deployment, SDK integration, and live DoraHacks submission.',
    approach:
      'Web3Spell Labs designed and produced Core Nexus Bhopal from the ground up as a high-conversion 36-hour engineering sprint rather than a passive conference. Before the hackathon clock even started, we ran structured technical bootcamp sessions to get every team set up with wallets, testnet faucets, starter repositories, and partner SDKs. We structured the prize architecture into two clear tiers: a prestigious Mainstage Top 3 Podium for the strongest end-to-end protocols, paired with targeted Partner Bounty Tracks (Arbitrum, Verbwire, QuillAI Network, Civic, DoraHacks, and .xyz) so every team had a concrete technical specification to build against.',
    built:
      'Over 36 uninterrupted hours at Jagran Lakecity University in Bhopal, we hosted 250+ on-site builders, ran overnight debugging clinics at 03:00 AM, enforced mandatory onchain contract and repository verification on DoraHacks, and drove 150+ completed project submissions, culminating in live mainstage demos for the Top 3 overall winners and partner track awards.',
    results:
      '150+ verified Web3 projects submitted on DoraHacks · 250+ on-campus builders activated at JLU Bhopal · 36 hours of continuous build room execution · Mainstage Top 3 winners + 5 partner bounty tracks awarded.',
    metrics: [
      {
        value: '150+',
        label: 'Projects Submitted',
        detail:
          'Verified GitHub repositories and working onchain deployments submitted on DoraHacks before the 36-hour cutoff.',
      },
      {
        value: '250+',
        label: 'On-Site Builders',
        detail:
          'Curated developers and engineering teams hacking in person at Jagran Lakecity University, Bhopal.',
      },
      {
        value: '36 Hours',
        label: 'Continuous Build Sprint',
        detail:
          'Non-stop on-campus war room with 24/7 smart contract mentorship, midnight debugging, and checkpoint reviews.',
      },
      {
        value: 'Top 3 + Tracks',
        label: 'Podium & Partner Prizes',
        detail:
          '3 flagship mainstage podium winners plus dedicated partner tracks across Arbitrum, Verbwire, QuillAI, Civic & .xyz.',
      },
    ],
    architectureSectionKicker: '03 / FOUR-LAYER HACKATHON EXECUTION ARCHITECTURE',
    architectureSectionTitle: 'How you turn 250+ attendees into 150+ shipped Web3 projects.',
    architectureSectionSubtitle:
      'A high-output hackathon is an engineering funnel. Dropping any operational layer (pre-event SDK onboarding, partner track scoping, overnight mentorship, or submission verification) collapses submission quality.',
    archCol1Label: 'CONVERSION ENGINE DELIVERED',
    archCol2Label: 'FAILURE MODE IN STANDARD EVENTS',
    architectureLayers: [
      {
        layer: 'Layer 1: Pre-Sprint Bootcamp & SDK Readiness',
        name: 'Zero-Friction Technical Onboarding',
        stack: 'Starter Scaffolds · Testnet Faucets · Live SDK Clinics',
        threatEliminated:
          'Eliminated the **first-12-hour setup stall** by equipping all **250+ JLU builders** with pre-configured EVM/Arbitrum boilerplates, funded testnet wallets, and live walkthroughs before hacking began.',
        failureModeIfDropped:
          'Without pre-sprint environment setup, student teams spend the first 18 hours fighting RPC configs and Node version errors, leading to **>60% overnight drop-off**.',
      },
      {
        layer: 'Layer 2: Dual-Tier Bounty & Track Architecture',
        name: 'Mainstage Top 3 + Partner Bounty Tracks',
        stack: 'Arbitrum · Verbwire · QuillAI Network · Civic · DoraHacks · .xyz',
        threatEliminated:
          'Aligned builder incentives across **Mainstage Top 3 Podium prizes** for flagship full-stack dApps and **specific Partner Bounties** for targeted SDK integrations.',
        failureModeIfDropped:
          'Single-pool prize structures cause beginners to give up early against veteran teams, whereas **multi-track partner bounties** keep every team shipping toward a winnable target.',
      },
      {
        layer: 'Layer 3: 36-Hour On-Campus War Room & Mentorship',
        name: '24/7 Protocol Engineer Floor Support',
        stack: 'JLU Bhopal Campus · 03:00 AM Debug Clinics · Checkpoint Audits',
        threatEliminated:
          'Stationed **senior Web3Spell engineers on the floor for all 36 hours** to unblock smart contract reverts, wallet-adapter bugs, and deployment scripts in real time.',
        failureModeIfDropped:
          'When teams hit an unresolvable Solidity or ABI bug at 02:00 AM with no mentor on site, they abandon the onchain component and submit **mocked frontend slides**.',
      },
      {
        layer: 'Layer 4: DoraHacks Verification & Mainstage Jury',
        name: '150+ Verified BUIDL Submissions & Live Demos',
        stack: 'DoraHacks BUIDL Portal · GitHub Commit Audit · Live Stage Pitch',
        threatEliminated:
          'Enforced **mandatory DoraHacks BUIDL submissions** with public GitHub repos and live contract links, converting **250+ participants into 150+ verifiable project submissions**.',
        failureModeIfDropped:
          'Judging solely from slide decks rewards pitch theater over real code and leaves ecosystem sponsors with **zero verifiable developer adoption metrics**.',
      },
    ],
    specSectionKicker: '04 / PROGRAM METRICS & PARTNER TRACK MATRIX',
    specSectionTitle: 'Engineered for measurable partner ROI and builder conversion.',
    specSectionSubtitle:
      'Every sponsor and university partner at Core Nexus Bhopal received transparent funnel telemetry, from auditorium check-in to verified DoraHacks BUIDLs and post-event builder retention.',
    specLeftPanelKicker: 'CONVERSION FUNNEL & SUBMISSION BENCHMARKS',
    specRightPanelKicker: 'ECOSYSTEM PARTNER TRACK INTEGRATIONS',
    cryptoRelations: [
      {
        symbol: '60%+ Team-to-Submission Conversion Rate',
        formula: '250+ On-Site Builders → 150+ Verified DoraHacks BUIDLs',
        description:
          'Through solo-builder tracks, 2-to-4 person squad sprints, and mandatory midnight checkpoint reviews, Core Nexus achieved over 150 distinct project submissions across DeFi, AI x Web3, Identity, and Consumer dApps.',
      },
      {
        symbol: 'Dual-Tier Prize Distribution Model',
        formula: 'Prize Pool := Mainstage Top 3 (1st, 2nd, 3rd) ∪ Partner Track Bounties',
        description:
          'Structured the award ceremony so the Top 3 overall teams took home the flagship Core Nexus mainstage honours, while specialized teams won dedicated partner bounties for best protocol integrations.',
      },
      {
        symbol: '36-Hour Continuous Campus Operations',
        formula: 'T_0 (Opening Bootcamp) → T_18 (Midnight Audit) → T_36 (Code Freeze)',
        description:
          'Full-campus takeover at Jagran Lakecity University (JLU) Bhopal including auditorium keynotes, hacking halls, high-speed Wi-Fi redundancy, Food Zone hospitality, and 24-hour security.',
      },
      {
        symbol: 'Regional Ecosystem Hub Activation',
        formula: '15+ Community Partners × Central India Developer Network',
        description:
          'United 15+ regional university clubs and Web3 communities onto a single campus in Bhopal, establishing Central India as a proven talent corridor for global L1/L2 ecosystems.',
      },
    ],
    circuitConstraints: [
      {
        id: 'TRACK 01 · ARBITRUM L2 DEPLOYMENT TRACK',
        expression: 'Solidity / Stylus Smart Contracts Deployed on Arbitrum',
        purpose:
          'Teams built and deployed low-fee DeFi primitives, onchain games, and consumer applications directly onto Arbitrum testnet with verified block-explorer contracts.',
      },
      {
        id: 'TRACK 02 · VERBWIRE & QUILLAI INFRASTRUCTURE TRACKS',
        expression: 'Smart Contract APIs & AI-Powered Security / Agent Tooling',
        purpose:
          'Builders integrated Verbwire deployment/minting APIs and QuillAI Network security & agent primitives into working full-stack applications.',
      },
      {
        id: 'TRACK 03 · CIVIC IDENTITY & .XYZ WEB3 PRESENCE',
        expression: 'Sybil-Resistant Civic Auth + Live .xyz Production Domains',
        purpose:
          'Projects embedded Civic identity verification gates for onchain access control and shipped live, publicly accessible dApps on custom .xyz domains.',
      },
      {
        id: 'TRACK 04 · DORAHACKS VERIFIED BUIDL ARCHIVE',
        expression: '150+ Permanent Onchain Submission Records on DoraHacks',
        purpose:
          'Every project was indexed on DoraHacks with source code, architecture overview, and demo links, creating an auditable proof-of-work archive for partners.',
      },
    ],
    lifecycleSectionKicker: '05 / 36-HOUR RUN OF SHOW & EXECUTION TRACE',
    lifecycleSectionTitle: '8-step operational timeline from campus check-in to podium finals.',
    lifecyclePhases: [
      {
        phase: 'PHASE I · CAMPUS CHECK-IN, KEYNOTE & TECHNICAL BOOTCAMP (HOURS 00–08)',
        title: 'Onboarding 250+ builders at JLU Bhopal and aligning every team on partner SDKs.',
        steps: [
          {
            step: '01',
            actor: 'Web3Spell Campus Ops',
            action: 'JLU Bhopal Registration & Builder Kit Check-In',
            detail:
              'Checked in 250+ developers across the Jagran Lakecity University campus with custom Core Nexus apparel, ID lanyards, and war-room seating assignments.',
          },
          {
            step: '02',
            actor: 'Rythme Nagrani & Lead Speakers',
            action: 'Mainstage Opening Keynote & Track Breakdown',
            detail:
              'Unveiled the Core Nexus rules, judging rubric, Mainstage Top 3 criteria, and partner bounty specifications in the packed JLU main auditorium.',
          },
          {
            step: '03',
            actor: 'DevRel & Protocol Mentors',
            action: 'Hands-On Bootcamp & Starter Kit Deployment',
            detail:
              'Guided builders through live smart contract compilation, Arbitrum RPC configuration, Civic/Verbwire/QuillAI integration, and DoraHacks team setup.',
          },
          {
            step: '04',
            actor: 'Mentor Triage Desk',
            action: 'Architecture Validation & Idea Locking',
            detail:
              'Reviewed each team’s problem statement and system diagram to ensure every project had a concrete, shippable onchain component before nightfall.',
          },
        ],
      },
      {
        phase: 'PHASE II · OVERNIGHT WAR ROOM, 150+ SUBMISSIONS & PODIUM FINALS (HOURS 09–36)',
        title: 'Midnight debugging clinics, DoraHacks code freeze, and mainstage Top 3 jury evaluation.',
        steps: [
          {
            step: '05',
            actor: 'Web3Spell Engineering Floor',
            action: '03:00 AM Overnight Debugging & Code Clinics',
            detail:
              'Worked side-by-side with hacking teams through the night to resolve ABI mismatches, transaction reverts, and frontend wallet signing flows.',
          },
          {
            step: '06',
            actor: 'DoraHacks Submission Gate',
            action: 'Hour-32 Checkpoint & 150+ BUIDL Submissions',
            detail:
              'Verified repository commits, contract addresses, and demo videos as 150+ projects were formally submitted prior to the Hour-36 hard freeze.',
          },
          {
            step: '07',
            actor: 'Technical Jury Panel',
            action: 'Code Audit & Shortlist Filtering',
            detail:
              'Evaluated all 150+ submissions on smart contract originality, partner SDK depth, UX execution, and live demo reliability.',
          },
          {
            step: '08',
            actor: 'Core Nexus Mainstage',
            action: 'Live Finale Demos: Top 3 Podium & Partner Tracks',
            detail:
              'Finalist teams pitched live on the JLU auditorium stage, crowning the Mainstage Top 3 winners alongside all partner bounty track recipients.',
          },
        ],
      },
    ],
    decisionsSectionKicker: '06 / ECOSYSTEM & EVENT ENGINEERING DECISIONS',
    decisionsSectionTitle: 'Why Core Nexus achieved 150+ submissions on a 250+ builder floor.',
    engineeringDecisions: [
      {
        index: '01',
        title: 'Pairing a Pre-Hackathon Bootcamp with the 36-Hour Sprint',
        rationale:
          'Throwing university builders straight into a 36-hour timer without hands-on environment setup guarantees high attrition. Running **Core Nexus as a combined Hackathon + Bootcamp** meant even first-time Web3 developers deployed a working smart contract within their first 4 hours on campus.',
      },
      {
        index: '02',
        title: 'Splitting Mainstage Top 3 from Partner Track Bounties',
        rationale:
          'When all prizes are lumped into a single leaderboard, 90% of teams feel eliminated by Hour 20. Separating the **Mainstage Top 3 Podium** from **dedicated Partner Bounties (Arbitrum, Verbwire, QuillAI Network, Civic, .xyz)** gave solo builders, specialized squads, and full-stack teams multiple parallel paths to win, driving **150+ total submissions**.',
      },
      {
        index: '03',
        title: 'Full-Campus Takeover at Jagran Lakecity University (JLU) Bhopal',
        rationale:
          'Hotel ballrooms feel transactional and sterile. Hosting Core Nexus across **JLU Bhopal’s auditorium, hacking halls, and outdoor campus** created an electric residential atmosphere where 250+ builders coded, ate, and collaborated together for 36 hours straight.',
      },
      {
        index: '04',
        title: 'Practicing Protocol Engineers as Floor Mentors',
        rationale:
          'Instead of staffing mentor desks with non-technical community managers, **Web3Spell Labs put practicing ZK, Rust, and EVM engineers directly on the hacking floor**, turning late-night bugs into shipped DoraHacks deployments.',
      },
    ],
  },
]

export const episodes: EpisodeItem[] = [
  {
    number: 'EP / 04',
    title: 'How Stablecoins Are Changing Global Payments | 10KRotator × StableCorp | SpellCast Ep. 4',
    guest: '10KRotator × StableCorp · Web3 Spell',
    duration: '32:32',
    videoId: 'QunfaF4c2jI',
    youtubeUrl: 'https://www.youtube.com/watch?v=QunfaF4c2jI&list=PLPvD5K6HssNA&index=1&t=21s',
    published: '1 mo ago',
    summary:
      'An architectural and regulatory look at how institutional stablecoin rails are reshaping cross-border settlement, liquidity routing, and global payments.',
  },
  {
    number: 'EP / 03',
    title: 'The Reality of Scaling Web3 Ecosystems | Spellcast Ep 03',
    guest: 'Web3 Spell · Ecosystem Operations',
    duration: '26:35',
    videoId: 'Rlh8DRd7KIo',
    youtubeUrl: 'https://www.youtube.com/watch?v=Rlh8DRd7KIo&list=PLPvD5K6HssNA&index=2&t=64s',
    published: '1 mo ago',
    summary:
      'Field lessons from running 75+ builder activations: what actually retains developers after hackathons, grant incentives, and testnet launches.',
  },
  {
    number: 'EP / 02',
    title: 'Inside Cesto: Sitting Down with Founder Jason | Spellcast #2 with Rythme',
    guest: 'Jason · Founder, Cesto (with Rythme)',
    duration: '25:47',
    videoId: 'akDYXEWCx-E',
    youtubeUrl: 'https://www.youtube.com/watch?v=akDYXEWCx-E&list=PLPvD5K6HssNA&index=3',
    published: '2 mo ago',
    summary:
      'Rythme sits down with Cesto founder Jason to break down product iteration, consumer-grade Web3 onboarding, and shipping under real market constraints.',
  },
  {
    number: 'EP / 01',
    title: 'Spellcast #1: Building the Future of Web3 Gaming & Privacy with Magicblock devrel Jonas Chen',
    guest: 'Jonas Chen · DevRel, MagicBlock',
    duration: '28:15',
    videoId: 'GEl6iju3POg',
    youtubeUrl: 'https://www.youtube.com/watch?v=GEl6iju3POg&list=PLPvD5K6HssNA&index=4&t=1310s',
    published: '3 mo ago',
    summary:
      'Exploring ephemeral rollups on Solana, sub-second state transitions for on-chain gaming, and TEE-backed privacy primitives with MagicBlock DevRel Jonas Chen.',
  },
]

export const blogArticles: BlogArticle[] = [
  {
    slug: 'web3-ux-manifesto',
    title: 'The Web3 UX Manifesto: Making Complexity Intuitive',
    category: 'Design',
    readTime: '8 min',
    date: '2025-09-15',
    excerpt: 'How to design Web3 products that people actually want to use.',
  },
  {
    slug: 'devrel-as-first-motion',
    title: 'Developer Relations as Your First Motion',
    category: 'Strategy',
    readTime: '6 min',
    date: '2025-09-08',
    excerpt: 'Why successful protocols invest in DevRel from day one, not year three.',
  },
  {
    slug: 'shipping-with-uncertainty',
    title: 'Shipping Under Uncertainty: A Framework',
    category: 'Engineering',
    readTime: '10 min',
    date: '2025-09-01',
    excerpt: 'How we deliver production-grade systems when specs are still being written.',
  },
]

export const careerRoles: CareerRole[] = [
  {
    id: 'senior-product-engineer',
    title: 'Senior Product Engineer',
    level: 'IC4–IC5',
    type: 'Full-time',
    description: 'Lead architecture and execution on Web3 protocol surfaces.',
    skills: ['TypeScript', 'React', 'Web3 integration', 'System design'],
  },
  {
    id: 'protocol-architect',
    title: 'Protocol Architect',
    level: 'IC4–IC5',
    type: 'Full-time',
    description: 'Design and document Web3 systems from first principles.',
    skills: ['Protocol design', 'Rust/Move', 'Cryptography basics', 'Technical writing'],
  },
  {
    id: 'devrel-lead',
    title: 'Developer Relations Lead',
    level: 'IC3–IC4',
    type: 'Full-time',
    description: 'Build and execute developer programs from zero to active ecosystem.',
    skills: ['Technical communication', 'Community building', 'Event production'],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    level: 'IC3–IC4',
    type: 'Full-time',
    description: 'Design systems for complex Web3 products.',
    skills: ['System thinking', 'User research', 'Design systems', 'Figma mastery'],
  },
]

export const programs = [
  {
    number: '01',
    title: 'Protocol engineering: 0 to Hero',
    description: 'We engineer your protocol from foundation and mechanism spec to audited smart contracts, ZK circuits, SDK, and mainnet launch.',
    detail: 'End-to-end protocol builds from whitepaper to audited mainnet (0 to Hero).',
    tags: ['0-to-Hero Build', 'Solana Rust & EVM', 'ZK & Formal Verification'],
  },
  {
    number: '02',
    title: 'UX audits & AA',
    description: 'Turn complex onchain flows into products people understand, trust, and return to.',
    detail: "Product doesn't need AA? We'll waive it off.",
    tags: ['UX strategy', 'Account abstraction', 'Product architecture'],
  },
  {
    number: '03',
    title: 'Protocol DevRel',
    description: 'Build the technical narrative, content engine, and developer motion that compounds.',
    detail: 'From first tutorial to a self-sustaining builder ecosystem.',
    tags: ['GTM systems', 'Technical content', 'Developer ecosystems'],
  },
]

export const work = [
  { label: '01 / CASE STUDY', title: 'Civitas', body: 'Zero-knowledge decentralized payroll on SVM.', meta: 'SVM · ZK · PRODUCT SYSTEMS', href: 'meetcivitas.xyz', tone: 'blue' as const },
  { label: '02 / CASE STUDY', title: 'ChainPot', body: 'Compound-backed decentralized savings protocol.', meta: 'DEFI · YIELD · TRUST DESIGN', href: 'chainpot.fun', tone: 'lime' as const },
  { label: '03 / CASE STUDY', title: 'Divergence Router', body: 'Human-centric divergence detection & atomic multi-leg execution on Somnia.', meta: 'SOMNIA · DREAMDEX · ATOMIC ROUTING', href: 'divergence-router.vercel.app', tone: 'dark' as const },
  { label: '04 / CASE STUDY', title: 'Core Nexus', body: "Central India's 36-hour Web3 hackathon & bootcamp at JLU Bhopal (250+ builders, 150+ projects).", meta: 'JLU BHOPAL · 36H HACKATHON · 150+ SUBMISSIONS', href: 'dorahacks.io · core-nexus-bhopal', tone: 'lime' as const },
]
