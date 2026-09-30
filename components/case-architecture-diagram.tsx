import type { CaseStudy } from '@/lib/content'

type CaseStudyLifecyclePhase = NonNullable<CaseStudy['lifecyclePhases']>[number]

interface DiagramNode {
  id: string
  stepNum: string
  title: string
  descriptor: string
  detailTooltip: string
  accent?: boolean
}

interface ArchitectureDiagramSpec {
  kicker: string
  title: string
  nodes: DiagramNode[]
  edgeLabels: string[]
  returnNote: string
}

const diagramSpecs: Record<string, ArchitectureDiagramSpec> = {
  civitas: {
    kicker: 'SYSTEM ARCHITECTURE',
    title: 'Four-layer confidential payroll pipeline.',
    nodes: [
      {
        id: 'browser',
        stepNum: '01',
        title: 'Employee Browser',
        descriptor: 'Local ZK Witness',
        detailTooltip: 'Samples 254-bit credential_nonce in IndexedDB and proves Groth16 witness in WASM',
      },
      {
        id: 'nildb',
        stepNum: '02',
        title: 'Nillion nilDB',
        descriptor: '3-of-3 MPC Storage',
        detailTooltip: 'Splits salary vouchers into 3 additive secret shares across independent MPC nodes',
      },
      {
        id: 'nilcc',
        stepNum: '03',
        title: 'Nillion nilCC V4',
        descriptor: 'SEV-SNP Enclave',
        detailTooltip: 'Hardware-attested confidential VM (~0.3s) builds depth-20 Poseidon Merkle tree',
        accent: true,
      },
      {
        id: 'solana',
        stepNum: '04',
        title: 'Solana Program',
        descriptor: 'Groth16 Verifier',
        detailTooltip: 'Verifies 256-byte proof via alt_bn128_pairing (~175k CU) and locks Nullifier PDA',
        accent: true,
      },
      {
        id: 'magicblock',
        stepNum: '05',
        title: 'MagicBlock TEE',
        descriptor: '5× Payout Splitter',
        detailTooltip: 'Fragments USDC payout into 5 randomized transfers across a [500ms, 30s] window',
      },
    ],
    edgeLabels: ['Blinded Tag', 'Roster Shares', '256B Proof', 'TEE Dispatch'],
    returnNote: 'Asynchronous settlement attestation returns from MagicBlock TEE to the Solana Nullifier PDA.',
  },
  chainpot: {
    kicker: 'SYSTEM ARCHITECTURE',
    title: 'Certora-verified ROSCA & Compound III pipeline.',
    nodes: [
      {
        id: 'passkey',
        stepNum: '01',
        title: 'Passkey Client',
        descriptor: 'ERC-4337 Account',
        detailTooltip: 'WebAuthn biometric authentication with USDC Paymaster gas sponsorship',
      },
      {
        id: 'registry',
        stepNum: '02',
        title: 'MemberRegistryV4',
        descriptor: 'Merkle Access & Score',
        detailTooltip: 'Enforces invite-only Merkle rosters, reputation tracking, and default blacklisting',
      },
      {
        id: 'engines',
        stepNum: '03',
        title: 'Circle & Auction V4',
        descriptor: 'Dual ROSCA Engines',
        detailTooltip: 'Payment-gated Chainlink VRF V2.5 draws and ≥2% step reverse-discount auctions',
        accent: true,
      },
      {
        id: 'vault',
        stepNum: '04',
        title: 'VaultV4 Custody',
        descriptor: 'Pull-Only Escrow',
        detailTooltip: 'Non-custodial store-then-finalize pull settlement with zero organizer custody',
        accent: true,
      },
      {
        id: 'compound',
        stepNum: '05',
        title: 'Compound III',
        descriptor: '80/20 Yield & Reserve',
        detailTooltip: 'Supplies idle float to cUSDCv3: 80% member yield + 20% Safety Module backstop',
      },
    ],
    edgeLabels: ['Sponsored Op', 'Verified Member', 'Cycle Winner', 'Idle Float'],
    returnNote: 'Live cUSDCv3 balance queries stream 80% yield to members and 20% to the Safety Module reserve.',
  },
  'divergence-router': {
    kicker: 'SYSTEM ARCHITECTURE',
    title: 'Sub-second divergence detection & atomic routing.',
    nodes: [
      {
        id: 'stream',
        stepNum: '01',
        title: 'Somnia Stream',
        descriptor: '<380ms Block Feed',
        detailTooltip: 'Continuous Viem v2 WebSocket stream ingesting newHeads and DreamDEX pool logs',
      },
      {
        id: 'classifier',
        stepNum: '02',
        title: 'Divergence Engine',
        descriptor: '3-Tier Classifier',
        detailTooltip: 'Classifies spread dislocation into Equilibrium (≤0.5%), Dislocation, or Halt (>3.0%)',
        accent: true,
      },
      {
        id: 'statemachine',
        stepNum: '03',
        title: 'Crossing Failover',
        descriptor: 'PostOnly → IOC',
        detailTooltip: 'Intercepts crossing spreads and transitions to bounded IOC without reverting',
      },
      {
        id: 'router',
        stepNum: '04',
        title: 'DivergenceRouter',
        descriptor: 'Atomic Split Proxy',
        detailTooltip: 'Executes dual-leg 50/50 complete-set mints in a single atomic EVM transaction',
        accent: true,
      },
      {
        id: 'dreamdex',
        stepNum: '05',
        title: 'DreamDEX CLOB',
        descriptor: 'ERC-6909 Settlement',
        detailTooltip: 'Mints OutcomeToken6909 claims or rolls back 100% of tUSDC if either leg slips',
      },
    ],
    edgeLabels: ['Live Quotes', 'Regime Gate', 'Bounded Order', 'Dual-Leg Mint'],
    returnNote: 'All-or-nothing EVM rollback guarantees 100% tUSDC refund if either binary leg breaches minFillAmount.',
  },
  'core-nexus': {
    kicker: 'HACKATHON EXECUTION PIPELINE',
    title: '36-hour builder conversion & verification funnel.',
    nodes: [
      {
        id: 'bootcamp',
        stepNum: '01',
        title: 'JLU Bootcamp',
        descriptor: '250+ Builders On-Site',
        detailTooltip: 'Pre-sprint wallet setup, Arbitrum RPC config, and partner SDK workshops in the JLU auditorium',
      },
      {
        id: 'tracks',
        stepNum: '02',
        title: 'Track Scoping',
        descriptor: 'Top 3 + 5 Partner Tracks',
        detailTooltip: 'Dual-tier prize architecture across Mainstage Top 3 and Arbitrum, Verbwire, QuillAI, Civic & .xyz',
        accent: true,
      },
      {
        id: 'warroom',
        stepNum: '03',
        title: '36h War Room',
        descriptor: '03:00 AM Code Clinics',
        detailTooltip: 'Practicing Web3Spell protocol engineers debugging smart contracts and wallet flows overnight',
        accent: true,
      },
      {
        id: 'dorahacks',
        stepNum: '04',
        title: 'DoraHacks Gate',
        descriptor: '150+ Verified BUIDLs',
        detailTooltip: 'Mandatory GitHub repository, onchain contract address, and working demo verification',
      },
      {
        id: 'finale',
        stepNum: '05',
        title: 'Mainstage Jury',
        descriptor: 'Live Onchain Demos',
        detailTooltip: 'Live stage pitches crowning the Top 3 overall winners and partner bounty recipients',
      },
    ],
    edgeLabels: ['SDK Ready', 'Idea Lock', 'Midnight Audit', 'Shortlist'],
    returnNote: '60%+ builder-to-submission conversion rate: 250+ on-campus participants shipped 150+ verified DoraHacks projects.',
  },
}

export function CaseArchitectureDiagram({ slug }: { slug: string }) {
  const spec = diagramSpecs[slug] ?? diagramSpecs.civitas

  return (
    <div className="case-arch-diagram-wrap" role="region" aria-label={spec.title}>
      <div className="case-arch-diagram-header">
        <div>
          <span className="section-kicker">{spec.kicker}</span>
          <h3>{spec.title}</h3>
        </div>
        <span className="case-diagram-hint">Hover any node for technical detail</span>
      </div>

      {/* Clean 5-Node Structure: Max 2 lines per node + Hover Tooltip (#7) */}
      <div className="case-arch-nodes-track">
        {spec.nodes.map((node, index) => {
          const edgeLabel = spec.edgeLabels[index]
          return (
            <div key={node.id} className="case-arch-step-unit">
              <div
                className={`case-arch-node-clean ${node.accent ? 'is-accent' : ''}`}
                tabIndex={0}
              >
                <span className="case-arch-node-num">{node.stepNum}</span>
                <strong className="case-arch-node-name">{node.title}</strong>
                <span className="case-arch-node-desc">{node.descriptor}</span>
                <div className="case-arch-node-tooltip" role="tooltip">
                  {node.detailTooltip}
                </div>
              </div>

              {edgeLabel && (
                <div className="case-arch-arrow-unit" aria-hidden="true">
                  <span className="case-arch-arrow-label">{edgeLabel}</span>
                  <svg viewBox="0 0 64 16" fill="none">
                    <line
                      x1="0"
                      y1="8"
                      x2="54"
                      y2="8"
                      stroke="rgba(238,240,235,0.35)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M49 3L57 8L49 13"
                      stroke="rgba(238,240,235,0.65)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="case-arch-return-bar">
        <span className="ui-tag-chip">VERIFICATION LOOP</span>
        <p>{spec.returnNote}</p>
      </div>
    </div>
  )
}

export function CaseSequenceDiagram({
  phases,
}: {
  phases: CaseStudyLifecyclePhase[]
}) {
  const allSteps = phases.flatMap((p) => p.steps)
  const actors = Array.from(new Set(allSteps.map((s) => s.actor))).slice(0, 6)

  return (
    <div className="case-sequence-diagram">
      <div className="case-sequence-head">
        <span className="ui-tag-chip">{allSteps.length} STEPS</span>
        <span>Actor swimlanes participating in end-to-end execution</span>
      </div>

      <div
        className="case-swimlane-actors"
        style={{ gridTemplateColumns: `repeat(${actors.length}, minmax(130px, 1fr))` }}
      >
        {actors.map((actor, i) => (
          <div key={actor} className="case-swimlane-actor-pill">
            <span>0{i + 1}</span>
            <strong>{actor}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
