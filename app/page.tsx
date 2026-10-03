'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers3,
  PanelsTopLeft,
  Play,
  ScanSearch,
  Workflow,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies, episodes } from '@/lib/content'
import { ProjectEnquiryForm } from '@/components/project-enquiry-form'
import { SiteHeader, SiteFooter } from '@/components/site-shell'
import { ProofStats } from '@/components/proof-stats'
import { FaqAccordion, projectFaqs } from '@/components/faq-accordion'
import { TreatedImage } from '@/components/treated-image'
import { BookingButton } from '@/components/booking-widget'
import { ProgramDrawer, type ProgramDetail } from '@/components/program-drawer'
import { InteractiveCard } from '@/components/interactive-card'
import { ProjectArtwork } from '@/components/project-artwork'

const programs: ProgramDetail[] = [
  {
    number: '01',
    title: 'Protocol engineering',
    description: 'We engineer your protocol from foundation and mechanism spec to audited smart contracts, ZK circuits, SDK, and mainnet launch.',
    detail: 'End-to-end protocol builds for founders starting from a whitepaper or upgrading core onchain infrastructure, from zero to Hero.',
    tags: ['0-to-Hero Build', 'Solana Rust & EVM', 'ZK & Formal Verification'],
    focus: 'Full-lifecycle protocol engineering',
    caseStudy: 'chainpot',
    deliverables: [
      'Mechanism specification, state machine & threat model',
      'Production smart contracts (Anchor / Solidity) + Certora & Foundry suite',
      'TypeScript SDK, indexer pipeline, and flagship mainnet dApp',
    ],
  },
  {
    number: '02',
    title: 'Product & protocol UX',
    description: 'Make wallet, account, and transaction flows easier to understand and trust.',
    detail: 'A focused review of product flows and architecture, with a prioritized plan your team can ship.',
    tags: ['UX strategy', 'Account abstraction', 'Product architecture'],
    focus: 'Product strategy and design',
    caseStudy: 'civitas',
    deliverables: [
      'Wallet and account flow audit',
      'Transaction UX prototype',
      'Usability findings and prioritized roadmap',
    ],
  },
  {
    number: '03',
    title: 'Developer ecosystem programs',
    description: 'Give developers the tools, guidance, and reasons to build with your protocol.',
    detail: 'From technical onboarding and workshops to hackathons and ongoing builder support.',
    tags: ['GTM systems', 'Technical content', 'Developer ecosystems'],
    focus: 'Hackathon, bootcamp, or builder program',
    caseStudy: 'core-nexus',
    deliverables: [
      'Developer journey and activation plan',
      'Workshop or hackathon run of show',
      'Technical content and follow-up kit',
    ],
  },
]

const services = [
  {
    number: '01',
    eyebrow: 'EXPERIENCE / BRAND',
    title: 'Make complexity feel inevitable.',
    description: 'We turn cryptographic primitives, multi-leg transactions, and non-custodial state machines into interfaces users understand and trust on sight.',
    tone: 'service-lime',
    href: '/services/ux-brand-strategy',
    offerings: [
      ['UX & product strategy', 'Wallet flows, account abstraction, and transaction state architecture.', '/services/ux-strategy'],
      ['Interactive prototyping', 'High-fidelity clickable flows & live testnet sandboxes validated with real users.', '/services/prototyping'],
      ['Design systems & UI tokens', 'Multi-surface Figma + React component libraries built for high-density data.', '/services/design-systems'],
      ['Transaction trust design', 'Human-readable intent previews, fee sponsorship, and deterministic failure states.', '/services/ux-strategy'],
      ['Brand & category positioning', 'Visual identity and technical narrative for serious infrastructure teams.', '/services/ux-brand-strategy'],
    ] as const,
  },
  {
    number: '02',
    eyebrow: 'PRODUCT / ENGINEERING',
    title: 'Ship the thing people came for.',
    description: 'From 0-to-Hero protocol builds to production dApps, we write the Circom circuits, Anchor/Solidity contracts, and sub-second trading interfaces.',
    tone: 'service-blue',
    href: '/services/product-engineering',
    offerings: [
      ['ZK & protocol architecture', 'Groth16 circuits, Nillion blind MPC, Poseidon Merkle trees, and ERC-4337 AA.', '/services/zk-protocol'],
      ['Smart contract systems', 'Production Solana Rust (Anchor) & EVM Solidity with Certora formal verification.', '/services/smart-contracts'],
      ['Web, dApps & TypeScript SDKs', 'Low-latency trading terminals, non-custodial web apps, and developer SDKs.', '/services/web-dapps'],
      ['0-to-Hero protocol engineering', 'End-to-end engineering from mechanism spec to audited mainnet deployment.', '/services/product-engineering'],
      ['Indexers & execution engines', 'Custom WebSocket pipelines, divergence scanners, and atomic bundle routers.', '/services/web-dapps'],
    ] as const,
  },
  {
    number: '03',
    eyebrow: 'ECOSYSTEM / DEVREL',
    title: 'Build the motion around the protocol.',
    description: 'We turn quiet SDKs and new L1/L2 runtimes into active builder ecosystems, backed by 75+ shipped workshops, hackathons, and technical docs.',
    tone: 'service-dark',
    href: '/services/ecosystem-devrel',
    offerings: [
      ['DevRel & builder GTM', 'First-15-minute developer onboarding, funnels, and ecosystem growth engines.', '/services/devrel-gtm'],
      ['Hackathons & build rooms', '36h–48h build sprints, university bootcamps, and founder residencies across APAC.', '/services/hackathons'],
      ['Technical docs & starter kits', 'Interactive documentation, `npx` scaffolds, and copy-pasteable cookbooks.', '/services/technical-docs'],
      ['Ecosystem representation', 'Keynotes, technical workshops, and live coding clinics by practicing engineers.', '/services/devrel-gtm'],
      ['Founder & builder media', 'Long-form technical deep dives and ecosystem storytelling via SpellCast.', '/services/ecosystem-devrel'],
    ] as const,
  },
]

const episodeDurations = ['42:18', '38:05', '46:12', '41:20']
const featuredCaseStudies = caseStudies.slice(0, 4)

const eventMoments = [
  {
    src: '/images/events/event-01.jpg',
    index: '01',
    alt: 'Arbitrum Ignite Bootcamp',
    tag: 'ARB · COHORT',
    metric: '250+ DEVS',
    variant: 'wide',
  },
  {
    src: '/images/events/event-02.jpg',
    index: '02',
    alt: 'Core Nexus Hackathon',
    tag: 'CORE · 36H SPRINT',
    metric: '180+ BUILDERS',
    variant: 'tall',
  },
  {
    src: '/images/events/event-03.jpg',
    index: '03',
    alt: 'TOKEN2049 Origins Singapore',
    tag: 'SGP · ORIGINS',
    metric: 'TRACK WINNER',
    variant: 'standard',
    objectPosition: 'center 34%',
  },
  {
    src: '/images/events/event-04.jpg',
    index: '04',
    alt: 'ZK Circuits & Groth16 Lab',
    tag: 'ZK · PROVING',
    metric: 'HANDS-ON LAB',
    variant: 'wide',
  },
  {
    src: '/images/events/event-05.jpg',
    index: '05',
    alt: 'EVM Systems Architecture Clinic',
    tag: 'EVM · ARCHITECTURE',
    metric: 'PROTOCOL JAM',
    variant: 'standard',
  },
  {
    src: '/images/events/event-06.jpg',
    index: '06',
    alt: 'Central India Builder Residency',
    tag: 'IND · RESIDENCY',
    metric: '48H BUILD ROOM',
    variant: 'tall',
  },
  {
    src: '/images/events/event-07.jpg',
    index: '07',
    alt: 'Solana SVM Runtime Workshop',
    tag: 'SVM · SBF / RUST',
    metric: 'ANCHOR DEEP DIVE',
    variant: 'wide',
  },
  {
    src: '/images/events/event-08.jpg',
    index: '08',
    alt: 'Account Abstraction UX Sprint',
    tag: 'ERC-4337 · UX',
    metric: 'WALLET FLOWS',
    variant: 'standard',
  },
  {
    src: '/images/events/event-09.jpg',
    index: '09',
    alt: 'Founder & DevRel Roundtable',
    tag: 'GTM · ECOSYSTEM',
    metric: 'OPERATOR SUMMIT',
    variant: 'tall',
    objectPosition: 'center 14%',
  },
  {
    src: '/images/events/event-10.jpg',
    index: '10',
    alt: 'Smart Contract Security Review',
    tag: 'SEC · THREAT MODEL',
    metric: 'AUDIT CLINIC',
    variant: 'wide',
  },
  {
    src: '/images/events/event-11.jpg',
    index: '11',
    alt: 'DeFi Primitives & Orderbook Lab',
    tag: 'DEFI · EXECUTION',
    metric: 'CLOB + AMM',
    variant: 'standard',
  },
  {
    src: '/images/events/event-12.jpg',
    index: '12',
    alt: 'Mainstage Finalist Demo Day',
    tag: 'LIVE · DEMO STAGE',
    metric: 'JURY REVIEW',
    variant: 'tall',
  },
  {
    src: '/images/events/event-13.jpg',
    index: '13',
    alt: '03:00 AM Hackathon Ship Room',
    tag: 'SHIP · WAR ROOM',
    metric: 'PRODUCTION DEPLOY',
    variant: 'wide',
  },
]

export default function Page() {
  const [activeProgram, setActiveProgram] = useState<(typeof programs)[number] | null>(null)
  const [activeService, setActiveService] = useState(0)
  const [activeWorkIndex, setActiveWorkIndex] = useState(0)
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0)
  const [spellcastPlaying, setSpellcastPlaying] = useState(false)
  const [hoveredEventKey, setHoveredEventKey] = useState<string | null>(null)

  const programTriggerRef = useRef<HTMLButtonElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const eventsReelRef = useRef<HTMLDivElement>(null)
  const eventsPausedRef = useRef(false)
  const eventsDragRef = useRef<{ isDown: boolean; startX: number; scrollLeft: number }>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  })
  const dragStateRef = useRef<{ isDown: boolean; startX: number; scrollLeft: number }>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  })

  const closeProgram = useCallback(() => setActiveProgram(null), [])
  const returnProgramFocus = useCallback(() => programTriggerRef.current?.focus(), [])

  useEffect(() => {
    const reel = eventsReelRef.current
    if (!reel) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rafId = 0
    let subPixel = reel.scrollLeft

    const step = () => {
      if (!eventsPausedRef.current && !eventsDragRef.current.isDown && reel) {
        subPixel += 0.65
        const halfWidth = reel.scrollWidth / 2
        if (halfWidth > 0 && subPixel >= halfWidth) {
          subPixel -= halfWidth
        }
        reel.scrollLeft = subPixel
      } else if (reel) {
        subPixel = reel.scrollLeft
      }
      rafId = window.requestAnimationFrame(step)
    }

    rafId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  const nudgeEventsReel = useCallback((direction: 1 | -1) => {
    const reel = eventsReelRef.current
    if (!reel) return
    eventsPausedRef.current = true
    reel.scrollBy({ left: direction * 380, behavior: 'smooth' })
    window.setTimeout(() => {
      eventsPausedRef.current = false
    }, 900)
  }, [])

  const scrollToWorkSlide = useCallback((index: number) => {
    const track = carouselRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(featuredCaseStudies.length - 1, index))
    const slides = track.querySelectorAll<HTMLElement>('.work-carousel-slide')
    const target = slides[clamped]
    if (!target) return
    const targetLeft = target.offsetLeft - (track.clientWidth - target.clientWidth) / 2
    track.scrollTo({ left: targetLeft, behavior: 'smooth' })
    setActiveWorkIndex(clamped)
  }, [])

  const handleCarouselScroll = useCallback(() => {
    const track = carouselRef.current
    if (!track) return
    const slides = Array.from(track.querySelectorAll<HTMLElement>('.work-carousel-slide'))
    if (!slides.length) return
    const trackCenter = track.scrollLeft + track.clientWidth / 2
    let closestIdx = 0
    let closestDist = Infinity
    slides.forEach((slide, idx) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2
      const dist = Math.abs(slideCenter - trackCenter)
      if (dist < closestDist) {
        closestDist = dist
        closestIdx = idx
      }
    })
    setActiveWorkIndex(closestIdx)
  }, [])

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="eyebrow">
          <span className="eyebrow-dot" /> Product engineering · Onchain systems · Developer ecosystems
        </div>
        <div className="hero-grid">
          <h1>
            Web3 Spells,
            <br />
            <em>engineered to work</em>
          </h1>
          <div className="hero-aside">
            <div className="hero-copy">
              <p>
                Web3Spell Labs is an independent product engineering and developer ecosystem studio. We build across zero-knowledge, smart contract systems, and onchain products.
              </p>
              <div className="hero-actions">
                <a className="hero-primary" href="/contact">
                  Start a project <ArrowUpRight size={16} />
                </a>
                <BookingButton className="hero-booking" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-proof" aria-label="Web3Spell Labs capabilities">
          <div>
            <span className="proof-index">01</span>
            <strong>
              Protocol
              <br />
              product lab
            </strong>
          </div>
          <div>
            <span className="proof-index">02</span>
            <strong>
              Design
              <br />
              engineering
            </strong>
          </div>
          <div>
            <span className="proof-index">03</span>
            <strong>
              Developer
              <br />
              ecosystems
            </strong>
          </div>
          <span className="proof-line" />
        </div>
        <div className="hero-foot">
          <span>01 / 10</span>
          <span>Scroll to explore</span>
          <span aria-hidden="true">⌄</span>
        </div>
      </section>

      <div className="marquee-wrap" aria-label="Partner ecosystems">
        <div className="marquee">
          <span>Solana</span>
          <i>✳</i>
          <span>Arbitrum</span>
          <i>✳</i>
          <span>Compound</span>
          <i>✳</i>
          <span>Rootstock</span>
          <i>✳</i>
          <span>Somnia</span>
          <i>✳</i>
          <span>Base</span>
          <i>✳</i>
          <span> Arc Chain</span>
          <i>✳</i>
          <span>Starknet</span>
          <i>✳</i>
          <span>BNB Chain</span>
          <i>✳</i>
          <span>Stellar</span>
          <i>✳</i>
          <span>Stacks</span>
          <i>✳</i>
          <span>Near</span>
          <i>✳</i>
          <span>Polkadot</span>
          <i>✳</i>
        </div>
      </div>

      <section className="intro section-pad">
        <div className="section-kicker">01 / POSITIONING</div>
        <div>
          <p className="display-copy">
            Protocol engineering,
            <br />
            <em>shaped around the people</em> who use it.
          </p>
          <div className="intro-bottom">
            <p>
              Product design, protocol engineering, and developer relations work together from the first product decision through launch.
            </p>
            <Link className="arrow-label" href="/lab">
              Meet the team <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-kicker">02 / WHAT WE DO</div>
        <div className="services-heading">
          <h2>
            One lab.
            <br />
            <em>Three disciplines.</em>
          </h2>
          <p>
            Strategy, craft, and systems thinking in one senior team. Choose the intervention your product needs now, or bring us in from the first question.
          </p>
        </div>
        <div className="services-tabs">
          <div className="service-rail" role="group" aria-label="Select a capability">
            {services.map((service, index) => (
              <button
                type="button"
                aria-pressed={activeService === index}
                className={activeService === index ? 'is-active' : ''}
                onClick={() => setActiveService(index)}
                key={service.number}
              >
                <span>{service.number}</span>
                {service.eyebrow.split(' / ')[0]}
                <i />
              </button>
            ))}
          </div>
          <article
            className={`service-feature ${services[activeService].tone}`}
            data-number={services[activeService].number}
          >
            <div className="service-card-top">
              <span>{services[activeService].number}</span>
              <span>{services[activeService].eyebrow}</span>
            </div>
            <div className="service-card-intro">
              <h3>{services[activeService].title}</h3>
              <p>{services[activeService].description}</p>
              <Link href={services[activeService].href} className="service-discipline-cta">
                Explore discipline
                <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="offerings service-offerings">
              {services[activeService].offerings.map(([title, description, offeringHref], index) => {
                const Preview = [ScanSearch, Compass, Workflow, PanelsTopLeft, Layers3][index]
                return (
                  <Link
                    href={offeringHref}
                    className="offering"
                    key={title}
                    style={{ '--offer-delay': `${index * 45}ms` } as React.CSSProperties}
                  >
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                    <span className="offering-preview" aria-hidden="true">
                      <Preview size={20} strokeWidth={1.4} />
                    </span>
                    <ArrowUpRight className="offering-arrow" size={17} />
                  </Link>
                )
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="programs section-pad" id="programs">
        <div className="section-kicker">03 / CORE PROGRAMS</div>
        <div className="programs-content">
          <h2>
            Focused work.
            <br />
            <em>Clear outcomes.</em>
          </h2>
          <div className="program-list">
            {programs.map((program) => (
              <button
                className="program-row"
                key={program.number}
                onClick={(event) => {
                  programTriggerRef.current = event.currentTarget
                  setActiveProgram(program)
                }}
              >
                <span>{program.number}</span>
                <span className="program-title">{program.title}</span>
                <span className="program-description">{program.description}</span>
                <ArrowUpRight />
              </button>
            ))}
          </div>
          <div className="method-steps">
            <div>
              <span>01 / ALIGN</span>
              <strong>Find the real constraint.</strong>
              <p>Scope the user problem, protocol constraints, and first shippable milestone before writing code.</p>
            </div>
            <div>
              <span>02 / DESIGN</span>
              <strong>Make the path clear.</strong>
              <p>Prototype wallet, account, and onchain flows early and validate them with real builders and users.</p>
            </div>
            <div>
              <span>03 / SHIP</span>
              <strong>Leave a system behind.</strong>
              <p>Deliver production code, design systems, and technical documentation your internal team can own.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" aria-label="Web3Spell capabilities">
        <div className="marquee">
          <span>Product engineering</span>
          <i>✳</i>
          <span>Protocol infrastructure</span>
          <i>✳</i>
          <span>Zero-knowledge systems</span>
          <i>✳</i>
          <span>Developer programs</span>
          <i>✳</i>
          <span>Smart contract systems</span>
          <i>✳</i>
          <span>Onchain product design</span>
          <i>✳</i>
          <span>Product engineering</span>
          <i>✳</i>
          <span>Protocol infrastructure</span>
          <i>✳</i>
          <span>Zero-knowledge systems</span>
          <i>✳</i>
          <span>Developer programs</span>
          <i>✳</i>
          <span>Smart contract systems</span>
          <i>✳</i>
          <span>Onchain product design</span>
          <i>✳</i>
        </div>
      </div>

      <section className="work section-pad" id="work">
        <div className="section-kicker">04 / SELECTED CASE STUDIES</div>
        <div className="work-heading">
          <h2>
            Selected work
            <br />
            <em>across the stack.</em>
          </h2>
          <p>
            Flagship case studies across confidential payroll, DeFi savings, atomic CLOB routing, and core identity infrastructure.
          </p>
        </div>

        <div className="work-carousel-shell">
          <button
            type="button"
            className="work-carousel-arrow work-carousel-prev"
            onClick={() => scrollToWorkSlide(activeWorkIndex - 1)}
            disabled={activeWorkIndex === 0}
            aria-label="Previous case study"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className="work-carousel-arrow work-carousel-next"
            onClick={() => scrollToWorkSlide(activeWorkIndex + 1)}
            disabled={activeWorkIndex === featuredCaseStudies.length - 1}
            aria-label="Next case study"
          >
            <ArrowRight size={18} />
          </button>

          <div
            ref={carouselRef}
            className="work-carousel-track"
            onScroll={handleCarouselScroll}
            onMouseDown={(event) => {
              const track = carouselRef.current
              if (!track) return
              dragStateRef.current = {
                isDown: true,
                startX: event.pageX - track.offsetLeft,
                scrollLeft: track.scrollLeft,
              }
            }}
            onMouseLeave={() => {
              dragStateRef.current.isDown = false
            }}
            onMouseUp={() => {
              dragStateRef.current.isDown = false
            }}
            onMouseMove={(event) => {
              const track = carouselRef.current
              if (!dragStateRef.current.isDown || !track) return
              event.preventDefault()
              const x = event.pageX - track.offsetLeft
              const walk = (x - dragStateRef.current.startX) * 1.25
              track.scrollLeft = dragStateRef.current.scrollLeft - walk
            }}
          >
            {featuredCaseStudies.map((item, index) => {
              const isActive = index === activeWorkIndex
              return (
                <div
                  key={item.slug}
                  className={`work-carousel-slide ${isActive ? 'is-center' : 'is-offcenter'}`}
                >
                  <InteractiveCard className={`work-card ${item.tone}`}>
                    <Link
                      className="work-card-visual"
                      href={`/work/${item.slug}`}
                      aria-label={`View ${item.title} case study`}
                      draggable={false}
                    >
                      <ProjectArtwork project={item.slug} />
                    </Link>
                    <div className="work-card-content">
                      <div className="card-top">
                        <span>
                          {item.number} / {item.label}
                        </span>
                        <ArrowUpRight aria-hidden="true" />
                      </div>
                      <div className="work-card-copy">
                        <h3>
                          <Link href={`/work/${item.slug}`}>{item.title}</Link>
                        </h3>
                        <p>{item.body}</p>
                      </div>
                      <div className="work-card-tags">
                        {item.techStack.slice(0, 3).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <span className="card-meta">
                        <span>{item.meta}</span>
                        <Link href={`/work/${item.slug}`} className="work-card-cta">
                          Read case study <ArrowUpRight size={15} aria-hidden="true" />
                        </Link>
                      </span>
                    </div>
                  </InteractiveCard>
                </div>
              )
            })}
          </div>

          <div className="work-carousel-pagination" role="tablist" aria-label="Case study slides">
            {featuredCaseStudies.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={index === activeWorkIndex}
                aria-label={`Go to slide ${item.number}: ${item.title}`}
                className={`work-carousel-dot ${index === activeWorkIndex ? 'is-active' : ''}`}
                onClick={() => scrollToWorkSlide(index)}
              >
                <i />
                <span>{item.number}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="work-footer">
          <p>
            Deep-dive case studies cover our flagship engagements; the Build Archive indexes all 15 shipped protocols, dApps, and tools.
          </p>
          <div className="work-footer-links">
            <Link className="text-cta" href="/work">
              All flagship case studies <ArrowUpRight size={17} />
            </Link>
            <Link className="text-cta text-cta-secondary" href="/portfolio">
              Browse 15-build archive <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <ProofStats />

      <section className="spellcast section-pad" id="spellcast">
        <div className="section-kicker">06 / SPELLCAST</div>
        <div className="spellcast-grid">
          <div className="spellcast-left-col">
            <div className="podcast-mark">
              <span>W3S / MEDIA</span>
              <span>04 EPISODES</span>
            </div>
            <h2>
              Ideas from
              <br />
              <em>the people</em>
              <br />
              building Web3.
            </h2>
            <p className="spellcast-note">
              SpellCast is Web3Spell&apos;s channel for technical conversations, architecture breakdowns, and field notes with founders and protocol engineers across Web3.
            </p>

            <div className="spellcast-cta-row">
              <Link className="text-cta spellcast-all-link" href="/spellcast">
                Explore all 4 episodes <ArrowUpRight size={17} />
              </Link>
              <a
                className="text-cta text-cta-secondary"
                href="https://www.youtube.com/playlist?list=PLPvD5K6HssNA"
                target="_blank"
                rel="noreferrer"
              >
                Full playlist <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="spellcast-player-card">
            <div className="spellcast-stage-bar">
              <span>
                <i className="live-dot" /> NOW STREAMING · {episodes[activeEpisodeIndex].number}
              </span>
              <div className="spellcast-stage-actions">
                <span>
                  {episodes[activeEpisodeIndex].duration} · {episodes[activeEpisodeIndex].published}
                </span>
                <a
                  className="spellcast-yt-direct"
                  href={episodes[activeEpisodeIndex].youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch ${episodes[activeEpisodeIndex].title} on YouTube`}
                >
                  <span>YouTube</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="spellcast-video-stage">
              <iframe
                key={`${episodes[activeEpisodeIndex].videoId}-${spellcastPlaying ? 'play' : 'idle'}`}
                className="spellcast-iframe"
                src={`https://www.youtube.com/embed/${episodes[activeEpisodeIndex].videoId}?rel=0${spellcastPlaying ? '&autoplay=1' : ''}`}
                title={episodes[activeEpisodeIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="spellcast-episode-strip" role="tablist" aria-label="Select SpellCast episode">
              {episodes.map((ep, idx) => {
                const isSelected = activeEpisodeIndex === idx
                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`spellcast-episode-row ${isSelected ? 'is-active' : ''}`}
                    key={ep.number}
                    onClick={() => {
                      setActiveEpisodeIndex(idx)
                      setSpellcastPlaying(true)
                    }}
                  >
                    <span className="spellcast-ep-num">{ep.number}</span>
                    <div className="spellcast-ep-copy">
                      <strong>{ep.title}</strong>
                      <small>
                        {ep.guest} · {ep.published}
                      </small>
                    </div>
                    <span className="spellcast-ep-time">
                      <Play size={11} fill="currentColor" />
                      {ep.duration}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="events section-pad">
        <div className="section-kicker">07 / ECOSYSTEM WORK</div>
        <div className="events-head">
          <h2>
            75+ events
            <br />
            <em>for builders.</em>
          </h2>
          <p>
            Web3Spell organizes developer workshops, bootcamps, hackathons, and community programs across India.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {[
            ['2025', 'Arbitrum Ignite Bootcamp', '12-day Web3 bootcamp · 250+ developers'],
            ['2025', 'Core Nexus Hackathon', '36-hour hackathon · Central India'],
            ['2025', 'Buildstation Bhopal', '40+ projects submitted from our buildstation in global hackathon even few won and are live grants till now'],
          ].map((event) => (
            <article className="timeline-item" key={event[0] + event[1]}>
              <span>{event[0]}</span>
              <div>
                <h3>{event[1]}</h3>
                <p>{event[2]}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="events-carousel-shell">
          <div className="events-carousel-toolbar">
            <div className="events-reel-status">
              <i className="events-reel-dot" aria-hidden="true" />
              <span>FIELD ARCHIVE REEL · 13 FRAMES · HOVER ANY FRAME FOR FULL COLOR</span>
            </div>
            <div className="events-carousel-controls">
              <button
                type="button"
                className="events-reel-btn"
                onClick={() => nudgeEventsReel(-1)}
                aria-label="Scroll event photos left"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                className="events-reel-btn"
                onClick={() => nudgeEventsReel(1)}
                aria-label="Scroll event photos right"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={eventsReelRef}
            className={`events-carousel-viewport ${hoveredEventKey ? 'has-hover' : ''}`}
            onMouseEnter={() => {
              eventsPausedRef.current = true
            }}
            onMouseLeave={() => {
              eventsPausedRef.current = false
              eventsDragRef.current.isDown = false
              setHoveredEventKey(null)
            }}
            onMouseDown={(event) => {
              const reel = eventsReelRef.current
              if (!reel) return
              eventsDragRef.current = {
                isDown: true,
                startX: event.pageX - reel.offsetLeft,
                scrollLeft: reel.scrollLeft,
              }
            }}
            onMouseUp={() => {
              eventsDragRef.current.isDown = false
            }}
            onMouseMove={(event) => {
              const reel = eventsReelRef.current
              if (!eventsDragRef.current.isDown || !reel) return
              event.preventDefault()
              const x = event.pageX - reel.offsetLeft
              const walk = (x - eventsDragRef.current.startX) * 1.35
              reel.scrollLeft = eventsDragRef.current.scrollLeft - walk
            }}
          >
            <div className="events-carousel-track">
              {[...eventMoments, ...eventMoments].map((item, idx) => {
                const cardKey = `${item.index}-${idx}`
                const isHovered = hoveredEventKey === cardKey
                return (
                  <div
                    key={cardKey}
                    className={`events-carousel-card is-${item.variant} ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoveredEventKey(cardKey)}
                    onMouseLeave={() => setHoveredEventKey((prev) => (prev === cardKey ? null : prev))}
                  >
                    <TreatedImage
                      src={item.src}
                      index={item.index}
                      alt={item.alt}
                      tag={item.tag}
                      metric={item.metric}
                      objectPosition={item.objectPosition}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="events-footer-bar">
          <Link className="text-cta events-cta" href="/contact">
            Plan a builder program <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="lab section-pad" id="lab">
        <div className="team-photo-wash" aria-hidden="true" />
        <div className="section-kicker">08 / THE CORE LAB</div>
        <div className="lab-head">
          <h2>
            The people
            <br />
            <em>behind the work.</em>
          </h2>
          <p>
            A hands-on team across protocol engineering, product design, and developer relations. The people doing the work are the people in the room.
          </p>
        </div>
        <div className="team-grid">
          <InteractiveCard className="person featured">
            <div className="portrait portrait-rythme portrait-photo">
              <img
                src="/images/team/rythme.jpg"
                alt="Rythme Nagrani, Co-Founder, Protocol Engineering & DevRel"
                loading="lazy"
                className="founder-portrait-img"
              />
            </div>
            <div className="person-copy">
              <span className="person-role">CO-FOUNDER · PROTOCOL ENGINEERING &amp; DEVREL</span>
              <h3>Rythme Nagrani</h3>
              <p>
                Works across zero-knowledge systems, account abstraction, EVM architecture, and developer programs.
              </p>
              <div className="socials">
                <a
                  href="https://github.com/rythmern02"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Rythme on GitHub"
                >
                  GH
                </a>
                <a
                  href="https://x.com/RythmeNagr64107"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Rythme on X"
                >
                  𝕏
                </a>
                <a
                  href="https://rythmastic.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Rythme's portfolio"
                >
                  ↗
                </a>
              </div>
            </div>
          </InteractiveCard>
          <InteractiveCard className="person featured">
            <div className="portrait portrait-swarna portrait-photo">
              <img
                src="/images/team/swarna.jpg"
                alt="Swarna Nagrani, Co-Founder, Design & Operations"
                loading="lazy"
                className="founder-portrait-img"
              />
            </div>
            <div className="person-copy">
              <span className="person-role">CO-FOUNDER · DESIGN &amp; OPERATIONS</span>
              <h3>Swarna Nagrani</h3>
              <p>
                Leads design and operations, shaping clear product experiences for technically ambitious teams.
              </p>
              <div className="socials">
                <a
                  href="https://x.com/swarnasn29"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Swarna on X"
                >
                  𝕏
                </a>
                <a
                  href="https://swarn.framer.website"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Swarna's portfolio"
                >
                  ↗
                </a>
              </div>
            </div>
          </InteractiveCard>
        </div>

        <div className="core-team-statement">
          <span className="section-kicker">10-MEMBER CORE STUDIO · 02 CO-FOUNDERS + 08 SPECIALISTS</span>
          <h3>
            <em>08 core team members</em> working across the agency in{' '}
            <span>product management</span>, <span>frontend engineering</span>,{' '}
            <span>full-stack Web3</span>, and <span>backend protocol systems</span>.
          </h3>
        </div>

        <div className="lab-footer-actions">
          <Link className="text-cta team-cta" href="/lab">
            Explore The Lab <ArrowUpRight size={17} />
          </Link>
          <a className="text-cta text-cta-secondary team-cta" href="https://x.com/web3spell" target="_blank" rel="noreferrer">
            Follow Web3Spell <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="home-faq section-pad">
        <div className="section-kicker">09 / COMMON QUESTIONS</div>
        <div className="faq-heading">
          <h2>
            Before we
            <br />
            <em>get to work.</em>
          </h2>
          <p>Clear answers about scope, collaboration, and how an engagement starts.</p>
        </div>
        <FaqAccordion items={projectFaqs.slice(0, 6)} />
        <Link className="faq-all-link" href="/faq">
          View all FAQs <ArrowUpRight size={17} />
        </Link>
      </section>

      <section className="contact" id="contact">
        <div className="contact-kicker">10 / START A PROJECT</div>
        <h2>
          Bring us the
          <br />
          <em>hard problem.</em>
        </h2>
        <p className="contact-lead">
          Tell us what you&apos;re building, where you&apos;re stuck, and what a successful launch looks like.
        </p>
        <div className="closing-actions">
          <a className="contact-link" href="/contact">
            Start a project <ArrowUpRight size={22} />
          </a>
          <BookingButton className="closing-booking" />
        </div>
        <div className="home-enquiry">
          <ProjectEnquiryForm compact />
        </div>
      </section>

      <ProgramDrawer program={activeProgram} onClose={closeProgram} returnFocus={returnProgramFocus} />

      <SiteFooter />
    </main>
  )
}
