export interface PortfolioProject {
  id: string
  rank: string
  coverImage?: string
  logoImage?: string
  title: string
  category: string
  score: string
  chain: string
  tagline: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
  statusText: string
  verifiedContract?: string
  highlight: string
}

export const portfolioCategories = [
  'All Builds',
  'AI × Crypto',
  'DeFi & Derivatives',
  'Bitcoin L2 & AA',
  'Creative Tech & Gaming',
  'Privacy & Identity'
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'chainpot',
    rank: '01',
    coverImage: '/images/work/chainpot-cover-hd.png',
    logoImage: '/images/work/chainpot-logo.jpg',
    title: 'ChainPot',
    category: 'DeFi & Derivatives',
    score: '4.85 / 5.0',
    chain: 'Base (EVM)',
    tagline: 'Decentralized Rotating Savings & Credit Association (ROSCA) Protocol',
    description: 'Trust-minimized, yield-bearing rotating savings protocol with dual engines, CircleEngineV4 (Chainlink VRF social circles) and AuctionEngineV4 (competitive discount business ROSCAs), accruing yield via Compound III (cUSDCv3). Supported by Compound Protocol and formally verified & audited by Certora.',
    techStack: ['Solidity 0.8.24', 'Foundry', 'Compound III (Comet)', 'Chainlink VRF V2.5', 'ERC-4337 AA', 'Certora CVL'],
    githubUrl: 'https://github.com/Web3Spell/chainpot',
    liveUrl: 'https://chainpot.fun',
    statusText: 'Certora Audited · Live',
    highlight: 'Supported by Compound Protocol; formally verified & audited by Certora (18/18 findings remediated); Thrive Power List honoree.'
  },
  {
    id: 'civitas',
    rank: '02',
    coverImage: '/images/work/civitas-cover-hd.png',
    logoImage: '/images/work/civitas-logo.png',
    title: 'Civitas',
    category: 'Privacy & Identity',
    score: 'N/A',
    chain: 'Solana',
    tagline: 'Confidential payroll with zero-knowledge proofs',
    description: 'A confidential payroll product on Solana, designed around employee privacy. The product uses zero-knowledge proofs so teams can run payroll without exposing employee data in the interface.',
    techStack: ['Next.js', 'Solana', 'Zero-knowledge proofs', 'Account abstraction'],
    githubUrl: '',
    liveUrl: 'https://meetcivitas.xyz',
    statusText: 'Colosseum Frontier · Solana Track',
    highlight: 'Product design and full-stack engineering for a privacy-first payroll experience.'
  },
  {
    id: 'divergence-router',
    rank: '03',
    coverImage: '/images/work/divergence-router-cover-hd.png',
    logoImage: '/images/work/divergence-router-logo.jpg',
    title: 'Divergence Router',
    category: 'DeFi & Derivatives',
    score: '4.95 / 5.0',
    chain: 'Somnia Shannon',
    tagline: 'Institutional 1-Click Atomic Execution Engine for Prediction Market CLOBs',
    description: 'Transforms binary prediction market coin-flips into structured delta-neutral spreads. Executes cross-asset divergence splits (Long BTC / Short ETH) and calendar term-structure inversions on Somnia DreamDEX with atomic settlement.',
    techStack: ['Solidity 0.8.20', 'ERC-6909', 'Next.js 14 Frameless', 'DreamDEX CLOB', 'Viem'],
    githubUrl: 'https://github.com/rythmern02/Divergence-Router',
    liveUrl: 'https://divergence-router.vercel.app',
    statusText: 'Live App',
    highlight: '11 Solidity contracts including ERC-6909 multi-token standard with atomic settlement on Somnia DreamDEX.'
  },
  {
    id: 'swarm-broker',
    coverImage: '/images/portfolio/swarm-broker.webp',
    rank: '04',
    title: 'Swarm Broker',
    category: 'AI × Crypto',
    score: '4.92 / 5.0',
    chain: 'BOT Chain Testnet',
    tagline: 'Autonomous Machine-to-Machine (M2M) Economy for AI Agents via x402',
    description: 'Full-stack payment infrastructure empowering autonomous AI agents to negotiate, sign, and pay for APIs using the HTTP 402 Payment Required (x402) standard. Bypasses credit card limits via gasless EIP-2612 permit micro-settlements.',
    techStack: ['TypeScript', 'x402 Protocol', 'EIP-2612', 'BOT Chain EVM', 'Vite'],
    githubUrl: 'https://github.com/rythmern02/Swarm-Broker',
    liveUrl: 'https://swarm-broker-frontend.vercel.app',
    verifiedContract: '0x0a787b1BDeD316ff833113be958Dcd1dF9654940',
    statusText: 'Live App',
    highlight: 'Full agent-client, provider node daemon, and deployed EIP-2612 settlement token on BOT Chain.'
  },
  {
    id: 'liveness-vault',
    coverImage: '/images/portfolio/liveness-vault.webp',
    rank: '05',
    title: 'Liveness Vault',
    category: 'Bitcoin L2 & AA',
    score: '4.90 / 5.0',
    chain: 'Rootstock (RSK) L2',
    tagline: 'Trustless Proof-of-Liveness Cryptoeconomic Staking & Slashing Protocol',
    description: 'Cryptoeconomic mechanism enforcing participant vitality via on-chain heartbeats on Bitcoin Layer 2. Inactive stakers are slashed by automated external keepers who receive a 10% bounty, with 90% burned to a treasury sink.',
    techStack: ['Solidity ^0.8.20', 'Foundry Invariants', 'TypeScript Keeper', 'Wagmi'],
    githubUrl: 'https://github.com/rythmern02/liveness-vault',
    liveUrl: 'https://liveness-vault.vercel.app',
    verifiedContract: '0xA51CbD66985DDD1a04858d8bE11bF26BE32f3870',
    statusText: 'Live & Verified',
    highlight: '100% test coverage with formal Foundry invariant fuzz testing (GameTheory.t.sol) & keeper daemon.'
  },
  {
    id: 'skyscreen',
    coverImage: '/images/portfolio/skyscreen.webp',
    rank: '06',
    title: 'SkyScreen',
    category: 'Creative Tech & Gaming',
    score: '4.88 / 5.0',
    chain: 'WebGL / Three.js',
    tagline: 'Award-Grade 3D WebGL Airborne Display Cinematic Experience',
    description: 'Cinematic marketing and technology experience showcasing a massive drone-suspended LED aerial display. Engineered with procedural Three.js drone rigs, emissive canvas shader ads, magnetic cursor physics, and Lenis scroll choreography.',
    techStack: ['Next.js 16', 'React 19', 'Three.js', 'React Three Fiber', 'Custom GLSL', 'GSAP'],
    githubUrl: 'https://github.com/rythmern02/skyscreen',
    liveUrl: 'https://skyscreen-one.vercel.app',
    statusText: 'Live 3D App',
    highlight: 'Custom GLSL night sky shaders, dynamic volumetric bloom, and interactive exploded drone rig.'
  },
  {
    id: 'instacredit',
    coverImage: '/images/portfolio/instacredit.webp',
    rank: '07',
    title: 'InstaCredit',
    category: 'AI × Crypto',
    score: '4.80 / 5.0',
    chain: 'Celo · Polygon · Arbitrum',
    tagline: 'Mobile Web3 Buy Now Pay Later (BNPL) with Polygon ID ZK Proofs',
    description: 'Decentralized mobile BNPL platform bridging real-world retail with crypto credit lines. Combines Polygon ID zero-knowledge proofs for private KYC verification, Chainlink price oracles for live collateral conversion, and automated liquidity staking pools.',
    techStack: ['Flutter / Dart', 'Riverpod', 'web3dart', 'Polygon ID ZK', 'Chainlink Feeds', 'IPFS'],
    githubUrl: 'https://github.com/rythmern02/InstaCredit',
    liveUrl: 'https://github.com/rythmern02/InstaCredit',
    verifiedContract: '0x707a124485314C30310C83E4b06A53E46cb9069a',
    statusText: 'Production Mobile',
    highlight: 'Full 12-screen Flutter mobile dApp with verifier.sol (Polygon ID ZK) & multi-chain web3dart routing.'
  },
  {
    id: 'labelo',
    coverImage: '/images/portfolio/labelo.webp',
    rank: '08',
    title: 'Labelo',
    category: 'AI × Crypto',
    score: '4.75 / 5.0',
    chain: 'Initia MiniEVM Rollup',
    tagline: 'Decentralized B2B RLHF Data-Labeling Marketplace',
    description: 'Decentralized RLHF data labeling marketplace built for the DoraHacks INITIATE Hackathon on an Initia MiniEVM appchain. Workers swipe to label AI pairs and earn instant USDC via 0-gas session keys, while enterprises upload dataset bounties into escrow.',
    techStack: ['Solidity ^0.8.20', 'Initia Rollup', 'Session Keys', 'InterwovenKit', 'Supabase'],
    githubUrl: 'https://github.com/rythmern02/Labelo',
    liveUrl: 'https://youtu.be/sFbP8MftqH0',
    statusText: 'Video Demo',
    highlight: '0-Gas Session Key UX on custom Initia rollup with BountyEscrow.sol for DoraHacks INITIATE.'
  },
  {
    id: 'permit-wiz',
    coverImage: '/images/portfolio/permit-wiz.webp',
    rank: '09',
    title: 'Permit-Wiz',
    category: 'Bitcoin L2 & AA',
    score: '4.70 / 5.0',
    chain: 'Rootstock (RSK)',
    tagline: 'Gasless EIP-712 / EIP-2612 Signature Studio & Debugger',
    description: 'Developer utility designed to eliminate "Invalid Signature" reverts in gasless transactions. Extracts exact on-chain DOMAIN_SEPARATORs, token nonces, and decimals via raw RPC calls, validates typed data signatures, and exports Solidity & Viem snippets.',
    techStack: ['TypeScript', 'Next.js 16', 'Viem', 'Wagmi', 'Vitest', 'CSP Hardened'],
    githubUrl: 'https://github.com/rythmern02/Permit-Wiz',
    liveUrl: 'https://github.com/rythmern02/Permit-Wiz',
    statusText: 'Developer Tool',
    highlight: 'Automated Vitest test suite with strict Content Security Policies and bytecode decoders.'
  },
  {
    id: 'fee-radar',
    coverImage: '/images/portfolio/fee-radar.webp',
    rank: '10',
    title: 'Fee-Radar',
    category: 'Bitcoin L2 & AA',
    score: '4.65 / 5.0',
    chain: 'Rootstock & Bitcoin L1',
    tagline: 'Cross-Layer Cost Estimator for Bitcoin L1 Peg-Outs',
    description: 'Provides an "Amazon Checkout" transparent fee breakdown for Rootstock users pegging out to the Bitcoin network. Simultaneously calculates L2 RSK gas, PowPeg/Flyover bridging fees, and Bitcoin L1 miner vByte costs using strict BigInt math.',
    techStack: ['React 19', 'Next.js 16', 'TanStack Query', 'Strict BigInt', 'Mempool API'],
    githubUrl: 'https://github.com/rythmern02/Fee-Radar',
    liveUrl: 'https://github.com/rythmern02/Fee-Radar',
    statusText: 'RSK Devtool',
    highlight: 'Models 3-of-5 P2SH multisig vByte weights against live mempool telemetry with zero floating-point error.'
  },
  {
    id: 'rootstock-paymaster',
    coverImage: '/images/portfolio/rootstock-paymaster.webp',
    rank: '11',
    title: 'Rootstock Paymaster Kit',
    category: 'Bitcoin L2 & AA',
    score: '4.65 / 5.0',
    chain: 'Rootstock Testnet',
    tagline: 'Production-Grade ERC-4337 v0.7 Account Abstraction Suite',
    description: 'Complete Account Abstraction toolkit on Rootstock. Contains custom VerifyingPaymaster, SimpleAccountFactory, and MockToken contracts enabling users to sponsor gas or pay gas fees using arbitrary ERC-20 tokens (e.g. rUSD).',
    techStack: ['Solidity', 'ERC-4337 v0.7', 'Foundry', 'Viem', 'TypeScript Signer'],
    githubUrl: 'https://github.com/rythmern02/Rootstock-Paymaster-Kit',
    liveUrl: 'https://explorer.testnet.rootstock.io/address/0x6f944C5EDeb5629ca4972eEeb6aEf998bC11783A',
    verifiedContract: '0x6f944C5EDeb5629ca4972eEeb6aEf998bC11783A',
    statusText: 'Verified on RSK',
    highlight: 'Off-chain TypeScript signing service with nonce-replay guards and direct handleOps execution.'
  },
  {
    id: 'metapass',
    coverImage: '/images/portfolio/metapass.webp',
    rank: '12',
    title: 'MetaPass',
    category: 'DeFi & Derivatives',
    score: '4.55 / 5.0',
    chain: 'Base Blockchain',
    tagline: 'Dynamic NFT Passports & Escrow Rental Infrastructure',
    description: 'Web3 membership platform turning traditional subscriptions into dynamic, tradable NFT assets on Base. Governed by 5 Solidity contracts managing primary issuance, secondary royalties, activity perk tiering, and temporary membership rentals.',
    techStack: ['Solidity', 'Base EVM', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/rythmern02/MetaPass',
    liveUrl: 'https://github.com/rythmern02/MetaPass',
    statusText: '5 Contracts Suite',
    highlight: '5 dedicated smart contracts: MetaPass.sol, Marketplace.sol, Rental.sol, PaymentGateway.sol, Rewards.sol.'
  },
  {
    id: 'pokerliars',
    coverImage: '/images/portfolio/pokerliars.webp',
    rank: '13',
    title: 'PokerLiars',
    category: 'Creative Tech & Gaming',
    score: '4.50 / 5.0',
    chain: 'EVM & Huddle01',
    tagline: 'On-Chain Bluffing Game with Decentralized Video Rooms',
    description: 'On-chain poker bluffing game combining Solidity game state contracts with decentralized audio/video calling via Huddle01. Players join tables, stake tokens, and bluff face-to-face in real-time with smart contract pot settlements.',
    techStack: ['Next.js 15', 'Huddle01 WebRTC', 'Solidity', 'Web3Modal', 'Framer Motion'],
    githubUrl: 'https://github.com/rythmern02/PokerLiars',
    liveUrl: 'https://github.com/rythmern02/PokerLiars',
    statusText: 'dApp Suite',
    highlight: 'Deep integration of @huddle01/react for p2p encrypted live video inside an on-chain poker table.'
  },
  {
    id: 'petoverse-web',
    coverImage: '/images/portfolio/petoverse.webp',
    rank: '14',
    title: 'Petoverse',
    category: 'Creative Tech & Gaming',
    score: '4.45 / 5.0',
    chain: 'Avalanche C-Chain',
    tagline: 'AI Dynamic Companions with Autonomous Smart Wallets',
    description: 'Virtual AI companion ecosystem on Avalanche C-Chain where each pet is an evolving ERC-721A NFT with dynamic on-chain mood/memory and a non-custodial smart wallet delegated to perform user-permitted staking and voting actions.',
    techStack: ['TypeScript', 'Avalanche', 'React Three Fiber', 'Three.js', 'Next.js 15'],
    githubUrl: 'https://github.com/rythmern02/Petoverse-web',
    liveUrl: 'https://petoverse-web.vercel.app',
    statusText: 'Live App',
    highlight: 'Combines 3D pet models in Three.js with non-custodial delegated wallet execution.'
  },
  {
    id: 'elf-escrow',
    coverImage: '/images/portfolio/elf-escrow.webp',
    rank: '15',
    title: 'Elf Escrow',
    category: 'AI × Crypto',
    score: '4.40 / 5.0',
    chain: 'BNB Chain / opBNB',
    tagline: 'Skin-in-the-Game Accountability Protocol for AI Trading Alpha',
    description: 'Accountability protocol bridging Binance Agent OS with opBNB smart contracts via MCP. Resolves AI trading hallucinations by requiring signal agents to stake collateral, automatically slashing their stake if predictions exceed loss drawdowns.',
    techStack: ['Solidity 0.8.24', 'Model Context Protocol (MCP)', 'Binance Agent OS', 'opBNB'],
    githubUrl: 'https://github.com/rythmern02/elf-escrow',
    liveUrl: 'https://github.com/rythmern02/elf-escrow',
    statusText: 'Hackathon Suite',
    highlight: 'Built for Binance Agent OS Mini Hackathon Track A with custom MCP server and deterministic slashing rules.'
  },
]

export const trophies = [
  'Supported by Compound Protocol · Formally Verified & Audited by Certora (ChainPot V4)',
  'Token 2049 Origins Hackathon · Track Winner',
  'Top 500 · Thrive Power List (Jan 2026)',
  'Binance Agent OS Mini Hackathon · AI Agent Build (Elf Escrow)',
  'DoraHacks INITIATE Hackathon · Initia Rollup Track (Labelo)',
  'Colosseum Frontier Hackathon · Solana Track (Civitas)',
  'Rootstock Builder Rootcamp · Foundry Actions, RNS Resolver & Refuel Kit',
  '65+ Web3 Developer Workshops & Protocol Deep-Dives (Web3Spell)'
]
