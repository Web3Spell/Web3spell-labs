import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Careers | Web3Spell Labs',
  description:
    'Join a 10-person senior engineering, design, and developer relations studio shipping production protocols and ecosystem programs.',
};

interface OpenRole {
  code: string;
  title: string;
  discipline: string;
  location: string;
  commitment: string;
  summary: string;
  whatYouWillOwn: string[];
  whatWeLookFor: string[];
  stack: string[];
}

const studioPrinciples = [
  {
    index: '01',
    title: 'Small senior bench, zero middle management',
    body: 'We do not employ account managers or junior outsourcing tiers. Every person at Web3Spell Labs writes production code, designs interfaces, or runs live developer workshops directly with founders.',
  },
  {
    index: '02',
    title: 'Proof of work over credentials',
    body: 'Show us a GitHub repository, a deployed contract address, a technical teardown you wrote, or a product interface you shipped under real constraints.',
  },
  {
    index: '03',
    title: 'End-to-end ownership across stack boundaries',
    body: 'Our engineers care about how a transaction feels in the browser, and our designers understand what happens in the mempool.',
  },
  {
    index: '04',
    title: 'Remote-first with high-intensity field weeks',
    body: 'Asynchronous engineering from India, paired with on-ground sprints when we produce 36-hour ecosystem hackathons and university bootcamps.',
  },
];

const openRoles: OpenRole[] = [
  {
    code: '01',
    title: 'Senior Product Engineer (Full-Stack Web3)',
    discipline: 'EXPERIENCE & INTERFACES',
    location: 'India · Remote-First',
    commitment: 'Full-Time',
    summary:
      'Own the client-side architecture for high-throughput DeFi routers, zero-knowledge payroll dashboards, and real-time onchain analytics interfaces.',
    whatYouWillOwn: [
      'Architect sub-second React 19 and Next.js interfaces that stream live mempool, order-book, and indexer state without UI jank.',
      'Build deterministic transaction lifecycles using Viem, Wagmi, and ERC-4337 session keys so users never guess whether a transaction succeeded.',
      'Collaborate directly with our smart contract engineers to shape contract ABIs, custom errors, and offchain indexing schemas.',
    ],
    whatWeLookFor: [
      'Deep production fluency in TypeScript, React, Next.js App Router, and state synchronization against unreliable RPC nodes.',
      'Hands-on experience integrating EVM or non-EVM wallets, permit signatures (EIP-712), and transaction simulation flows.',
      'Strong visual sensibility: you notice alignment shifts, broken easing curves, and layout shift before a designer points them out.',
    ],
    stack: ['TypeScript', 'Next.js', 'Viem / Wagmi', 'WebSockets', 'Account Abstraction'],
  },
  {
    code: '02',
    title: 'Protocol & Smart Contract Engineer',
    discipline: 'PROTOCOL ENGINEERING',
    location: 'India · Remote-First',
    commitment: 'Full-Time',
    summary:
      'Design, implement, and stress-test production smart contracts, cross-DEX settlement routers, and zero-knowledge circuits from whitepaper math to mainnet.',
    whatYouWillOwn: [
      'Write gas-optimized, invariant-tested smart contracts in Solidity or Rust for DeFi primitives, escrow systems, and governance protocols.',
      'Build comprehensive Foundry fuzzing suites, stateful handler tests, and adversarial economic simulations before external audits.',
      'Maintain client-side and server-side proving pipelines (Circom / Noir / Groth16) for privacy-preserving enterprise applications.',
    ],
    whatWeLookFor: [
      'Proven track record of authoring and deploying non-trivial smart contracts on EVM chains, Solana, or Move-based networks.',
      'Obsession with security invariants, CEI patterns, reentrancy surfaces, oracle manipulation vectors, and decimal precision.',
      'Ability to explain complex mechanism trade-offs clearly in written architecture specifications for protocol founders.',
    ],
    stack: ['Solidity', 'Foundry', 'Rust / Anchor', 'Circom / Noir', 'Formal Verification'],
  },
  {
    code: '03',
    title: 'Developer Relations & Ecosystem Lead',
    discipline: 'ECOSYSTEM & DEVREL',
    location: 'India · Hybrid + Event Travel',
    commitment: 'Full-Time',
    summary:
      'Lead our technical ecosystem programs: author starter kits, teach hands-on protocol workshops, and direct flagship 250+ builder hackathons across India.',
    whatYouWillOwn: [
      'Write production-grade starter repositories, CLI scaffolding tools, and interactive integration guides that take builders from clone to testnet in 5 minutes.',
      'Lead technical curriculum and on-site mentorship for flagship initiatives like our 36-hour Core Nexus hackathon and multi-city build stations.',
      'Run technical judging, repository code audits, and post-event grant cohort follow-ups for our L1 and L2 foundation partners.',
    ],
    whatWeLookFor: [
      'You are an engineer first: you can debug a participant’s broken Foundry script or React wallet hook live at 03:00 AM during a hackathon.',
      'Clear, crisp technical writing and public speaking ability in front of rooms of 100 to 300 developers.',
      'High operational ownership: you enjoy orchestrating technical mentors, partner tracks, and builder communities that outlast a single weekend.',
    ],
    stack: ['Solidity / TypeScript', 'Technical Writing', 'SDK Design', 'Live Workshops', 'Hackathon Ops'],
  },
  {
    code: '04',
    title: 'Product Designer & Design Systems Engineer',
    discipline: 'DESIGN & INTERACTION',
    location: 'India · Remote-First',
    commitment: 'Full-Time / Contract',
    summary:
      'Shape the visual identity, institutional credibility, and complex transaction ergonomics of next-generation protocols and developer platforms.',
    whatYouWillOwn: [
      'Design end-to-end product flows for complex financial primitives: multi-hop swap routers, cryptographic proof states, and DAO treasury consoles.',
      'Build and maintain tokenized design systems in Figma and production CSS that scale across web applications, documentation portals, and pitch artifacts.',
      'Partner with engineers during implementation to tune micro-interactions, typography hierarchies, and responsive data density.',
    ],
    whatWeLookFor: [
      'A portfolio demonstrating sharp typographic control, dark-mode data density, and complex application states rather than generic landing page templates.',
      'Understanding of Web3 UX failure modes (signature fatigue, gas estimation anxiety, bridge latency) and how to solve them visually.',
      'Bonus: ability to jump directly into CSS / React components to refine spacing, motion, and layout details in code.',
    ],
    stack: ['Figma', 'Design Systems', 'Interaction Design', 'Editorial Typography', 'CSS / Motion'],
  },
];

export default function CareersPage() {
  return (
    <PageShell dark>
      <section className="insights-v2-hero">
        <div className="case-container">
          <div className="insights-v2-hero__top">
            <span className="section-kicker">08 / CAREERS AT WEB3SPELL LABS</span>
            <span className="insights-v2-hero__count">
              BHOPAL HQ · INDIA REMOTE · 10-PERSON SENIOR STUDIO
            </span>
          </div>

          <div className="insights-v2-hero__grid">
            <h1 className="case-display-h1">
              Small team.
              <br />
              <em>Zero filler.</em>
            </h1>
            <p className="insights-v2-hero__lead">
              We are a tight-knit bench of protocol engineers, product designers, and developer advocates. We keep the studio deliberately small so every member works directly on mission-critical contracts, flagship interfaces, and high-energy builder ecosystems.
            </p>
          </div>
        </div>
      </section>

      <div className="case-container careers-body-wrap">
        {/* Studio Principles: Unboxed Hairline Grid */}
        <section className="careers-principles" aria-label="How We Operate">
          <div className="careers-section-head">
            <span className="section-kicker">STUDIO OPERATING SYSTEM</span>
            <h2>Why senior builders stay here.</h2>
          </div>

          <div className="careers-principles__grid">
            {studioPrinciples.map((item) => (
              <div key={item.index} className="careers-principle">
                <span className="careers-principle__index">{item.index}</span>
                <h3 className="careers-principle__title">{item.title}</h3>
                <p className="careers-principle__body">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Roles Ledger */}
        <section className="careers-roles" aria-label="Open Roles">
          <div className="careers-section-head">
            <span className="section-kicker">OPEN POSITIONS ({openRoles.length})</span>
            <h2>Current openings on the bench.</h2>
          </div>

          <div className="careers-roles__list">
            {openRoles.map((role) => (
              <article key={role.code} className="careers-role">
                <div className="careers-role__top">
                  <div className="careers-role__title-group">
                    <div className="careers-role__meta">
                      <span className="careers-role__code">ROLE / {role.code}</span>
                      <span>·</span>
                      <span>{role.discipline}</span>
                      <span>·</span>
                      <span>{role.location}</span>
                      <span>·</span>
                      <span>{role.commitment}</span>
                    </div>
                    <h3 className="careers-role__title">{role.title}</h3>
                    <p className="careers-role__summary">{role.summary}</p>
                  </div>

                  <div className="careers-role__cta-col">
                    <a
                      href={`mailto:hello@web3spell.com?subject=${encodeURIComponent(
                        `Application: ${role.title}`
                      )}`}
                      className="hero-primary"
                    >
                      Apply with Proof of Work <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                <div className="careers-role__details">
                  <div className="careers-role__col">
                    <span className="careers-role__subhead">WHAT YOU WILL OWN</span>
                    <ul>
                      {role.whatYouWillOwn.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="careers-role__col">
                    <span className="careers-role__subhead">WHAT WE LOOK FOR</span>
                    <ul>
                      {role.whatWeLookFor.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="careers-role__stack">
                  <span className="careers-role__stack-label">CORE STACK //</span>
                  <div className="careers-role__tags">
                    {role.stack.map((tag) => (
                      <span key={tag} className="insights-v2-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How to Apply / Open Application */}
        <section className="careers-apply-banner" aria-label="How to Apply">
          <div className="careers-apply-banner__left">
            <span className="section-kicker">DIRECT APPLICATION PROTOCOL</span>
            <h2>Skip the cover letter. Send us what you shipped.</h2>
            <p>
              Don&apos;t see your exact title above? If you are an obsessive smart contract auditor, Rust systems engineer, creative technologist, or campus ecosystem builder, write to us directly with links to your GitHub, live deployments, or Figma files.
            </p>
          </div>

          <div className="careers-apply-banner__right">
            <div className="careers-apply-steps">
              <div className="careers-apply-step">
                <span className="careers-apply-step__num">01</span>
                <div>
                  <strong>Send your best work</strong>
                  <p>Email hello@web3spell.com with 2 to 3 links to real code, contracts, or interfaces you built.</p>
                </div>
              </div>
              <div className="careers-apply-step">
                <span className="careers-apply-step__num">02</span>
                <div>
                  <strong>45-minute architecture dive</strong>
                  <p>Walk our founders through a hard technical or design problem you solved first-hand. No whiteboard trivia.</p>
                </div>
              </div>
              <div className="careers-apply-step">
                <span className="careers-apply-step__num">03</span>
                <div>
                  <strong>Paid sprint collaboration</strong>
                  <p>We run a scoped, paid trial module together so both sides experience how we communicate and ship.</p>
                </div>
              </div>
            </div>

            <div className="careers-apply-banner__actions">
              <a
                href="mailto:hello@web3spell.com?subject=Open%20Application%20-%20Web3Spell%20Labs"
                className="hero-primary"
              >
                Email hello@web3spell.com <ArrowUpRight size={15} />
              </a>
              <Link href="/work" className="secondary-button">
                Inspect Our Work First
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
