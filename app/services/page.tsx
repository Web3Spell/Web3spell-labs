import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageShell } from '@/components/site-shell'
import { coreServicesList } from '@/lib/services-data'
import { caseStudies } from '@/lib/content'
import { BookingButton } from '@/components/booking-widget'

export default function ServicesPage() {
  return (
    <PageShell dark>
      <section className="services-hub-hero">
        <div className="services-hub-hero-top">
          <span className="section-kicker">01 / CAPABILITIES &amp; DISCIPLINES</span>
          <span className="services-hub-meta">03 CORE DISCIPLINES · 09 SPECIALIZED PRACTICE AREAS</span>
        </div>

        <div className="services-hub-hero-grid">
          <h1>
            Engineered from first
            <br />
            <em>whitepaper to mainnet.</em>
          </h1>
          <div className="services-hub-hero-copy">
            <p>
              Most agencies either draw pretty Figma screens that break against RPC latency, or write smart contracts that regular humans are terrified to sign. At Web3Spell Labs, protocol engineers, product designers, and developer advocates work as a single unit.
            </p>
            <div className="services-hub-hero-actions">
              <Link className="hero-primary" href="/contact">
                Scope an engagement <ArrowUpRight size={16} />
              </Link>
              <BookingButton className="booking-nav" />
            </div>
          </div>
        </div>

        <div className="services-hub-NavStrip" aria-label="Jump to discipline">
          {coreServicesList.map((discipline) => (
            <a
              key={discipline.slug}
              href={`#${discipline.slug}`}
              className="services-hub-jump"
            >
              <span className="services-hub-jump-num">{discipline.number}</span>
              <div>
                <strong>{discipline.categoryLabel.replace('/', '')}</strong>
                <span>{discipline.subLinks.map((s) => s.title).join(' · ')}</span>
              </div>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </section>

      {/* Flagship 0-to-Hero Protocol Engineering Banner */}
      <section className="services-zero-hero">
        <div className="services-zero-hero-head">
          <span className="section-kicker">FLAGSHIP PROGRAM / 0 TO HERO</span>
          <span className="services-zero-badge">END-TO-END PROTOCOL BUILD</span>
        </div>
        <div className="services-zero-hero-grid">
          <div>
            <h2>
              Zero-to-Hero
              <br />
              <em>Protocol Engineering.</em>
            </h2>
            <p className="services-zero-lead">
              Starting from a thesis, mechanism paper, or blank repository? We engineer the entire protocol stack from the ground up: cryptographic circuits, formally verified smart contracts, indexer pipelines, TypeScript SDK, production interface, and developer activation.
            </p>
          </div>
          <div className="services-zero-columns">
            <div className="services-zero-col">
              <span>01 / FOUNDATION &amp; SPEC</span>
              <strong>Mechanism, Threat Model &amp; State Machine</strong>
              <p>
                We turn your core thesis into a formal state transition spec, economic invariant matrix, and adversarial threat model before writing a line of contract code.
              </p>
            </div>
            <div className="services-zero-col">
              <span>02 / ONCHAIN CORE &amp; ZK</span>
              <strong>Contracts, Circuits &amp; Verification</strong>
              <p>
                Production Solana Rust (Anchor) or EVM Solidity contracts, Groth16 / Circom circuits, Foundry fuzzing suites, and Certora formal verification rules.
              </p>
            </div>
            <div className="services-zero-col">
              <span>03 / SURFACE, SDK &amp; GTM</span>
              <strong>Mainnet Terminal, SDK &amp; Ecosystem</strong>
              <p>
                Sub-second Next.js dApp, typed TypeScript SDK, custom WebSocket indexers, interactive developer docs, and launch hackathons.
              </p>
            </div>
          </div>
        </div>
        <div className="services-zero-foot">
          <div className="services-zero-proof">
            <span>SHIPPED 0-TO-HERO SYSTEMS:</span>
            <Link href="/work/civitas">Civitas (Solana + Groth16 + Nillion)</Link>
            <i>·</i>
            <Link href="/work/chainpot">ChainPot V4 (Base + Compound V3 + Certora)</Link>
            <i>·</i>
            <Link href="/work/divergence-router">Divergence Router (Somnia + Atomic CLOB)</Link>
          </div>
          <Link className="service-editorial-cta" href="/contact">
            Scope a 0-to-Hero build <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* Deep Editorial Sections for Each of the 3 Core Disciplines + 9 Sub-Pages */}
      <div className="services-hub-ledger">
        {coreServicesList.map((discipline) => {
          const linkedStudy = caseStudies.find((c) => c.slug === discipline.relatedCaseStudy)

          return (
            <section
              key={discipline.slug}
              id={discipline.slug}
              className="services-hub-discipline"
            >
              <div className="services-hub-discipline-topbar">
                <span className="section-kicker">
                  {discipline.number} / {discipline.eyebrow}
                </span>
                <Link
                  href={`/services/${discipline.slug}`}
                  className="services-hub-discipline-link"
                >
                  Open full discipline dossier <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="services-hub-discipline-intro">
                <div>
                  <h2>
                    <Link href={`/services/${discipline.slug}`}>
                      {discipline.title}{' '}
                      <em>{discipline.titleAccent}</em>
                    </Link>
                  </h2>
                </div>
                <div className="services-hub-discipline-summary">
                  <p>{discipline.description}</p>
                  <div className="services-hub-metrics">
                    {discipline.metrics.map((m) => (
                      <div key={m.label} className="services-hub-metric">
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                        <small>{m.detail}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Founder Note */}
              <div className="services-hub-founder">
                <div className="services-hub-founder-label">
                  <span>FOUNDER PERSPECTIVE</span>
                  <strong>{discipline.founderNoteTitle}</strong>
                </div>
                <div className="services-hub-founder-cols">
                  <div>
                    <small>WHERE MOST TEAMS BREAK</small>
                    <p>{discipline.founderProblem}</p>
                  </div>
                  <div>
                    <small>HOW WE ENGINEER IT</small>
                    <p>{discipline.founderSolution}</p>
                  </div>
                </div>
              </div>

              {/* Dedicated Sub-Pages Grid (The 3 Navbar Links per Discipline) */}
              <div className="services-hub-subpages-head">
                <span>DEDICATED CAPABILITY PAGES IN {discipline.categoryLabel.toUpperCase()}</span>
                <span>CLICK ANY PRACTICE TO INSPECT SPECS &amp; DELIVERABLES</span>
              </div>

              <div className="services-hub-subpages">
                {discipline.subLinks.map((sub, idx) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="services-hub-subcard"
                  >
                    <div className="services-hub-subcard-top">
                      <span>0{idx + 1} · {sub.tag}</span>
                      <ArrowUpRight size={17} />
                    </div>
                    <h3>{sub.title}</h3>
                    <p>{sub.description}</p>
                    <span className="services-hub-subcard-cta">
                      Read capability breakdown
                    </span>
                  </Link>
                ))}
              </div>

              {/* Deliverables + Tech Stack + Case Study Proof Footer */}
              <div className="services-hub-discipline-foot">
                <div className="services-hub-deliverables">
                  <span className="services-hub-foot-kicker">KEY DELIVERABLES</span>
                  <ul>
                    {discipline.deliverables.slice(0, 4).map((item) => (
                      <li key={item}>
                        <Check size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-hub-stack">
                  <span className="services-hub-foot-kicker">PRODUCTION STACK</span>
                  <div className="services-hub-tags">
                    {discipline.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                {linkedStudy && (
                  <Link
                    href={`/work/${linkedStudy.slug}`}
                    className="services-hub-proof"
                  >
                    <span className="services-hub-foot-kicker">
                      SHIPPED PROOF · {linkedStudy.client.toUpperCase()}
                    </span>
                    <strong>{linkedStudy.title}</strong>
                    <p>{discipline.relatedCaseStudyNote}</p>
                    <span className="services-hub-proof-link">
                      Inspect {linkedStudy.client} dossier <ArrowUpRight size={14} />
                    </span>
                  </Link>
                )}
              </div>
            </section>
          )
        })}
      </div>

      <section className="service-editorial-closing">
        <div>
          <span className="section-kicker">START AN ENGAGEMENT</span>
          <h2>
            Need a single slice or a
            <br />
            <em>full 0-to-Hero build?</em>
          </h2>
          <p>
            Talk directly with Rythme and Swarna. No account managers, no junior handoffs. We scope your architecture and product path on the first call.
          </p>
        </div>
        <div className="service-editorial-closing-actions">
          <Link className="hero-primary" href="/contact">
            Send project brief <ArrowUpRight size={16} />
          </Link>
          <BookingButton className="booking-nav" />
        </div>
      </section>
    </PageShell>
  )
}
