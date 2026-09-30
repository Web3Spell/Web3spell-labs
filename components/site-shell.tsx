'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Compass,
  Cpu,
  FileCode2,
  FolderGit2,
  Layers,
  Loader2,
  Menu,
  Mic,
  Radio,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { BookingButton } from '@/components/booking-widget'

type MegaItem = {
  title: string
  tag: string
  href: string
  icon: typeof Compass
}

type MegaColumn = {
  kicker: string
  items: MegaItem[]
}

type NavMenuKey = 'services' | 'work' | 'portfolio' | 'lab'

const navMenus: Record<
  NavMenuKey,
  {
    label: string
    href: string
    columns: MegaColumn[]
  }
> = {
  services: {
    label: 'Services',
    href: '/services',
    columns: [
      {
        kicker: 'Overview/',
        items: [
          {
            title: 'All Services',
            tag: 'Three studio disciplines',
            href: '/services',
            icon: Layers,
          },
          {
            title: 'Start a Project',
            tag: 'Scope an engagement',
            href: '/contact',
            icon: Sparkles,
          },
        ],
      },
      {
        kicker: 'Experience/',
        items: [
          {
            title: 'UX & Strategy',
            tag: 'Product & wallet flows',
            href: '/services/ux-strategy',
            icon: Compass,
          },
          {
            title: 'Prototyping',
            tag: 'Interactive validation',
            href: '/services/prototyping',
            icon: Workflow,
          },
          {
            title: 'Design Systems',
            tag: 'Brand & UI tokens',
            href: '/services/design-systems',
            icon: Sparkles,
          },
        ],
      },
      {
        kicker: 'Engineering/',
        items: [
          {
            title: 'ZK & Protocol',
            tag: 'Groth16, MPC & AA',
            href: '/services/zk-protocol',
            icon: Cpu,
          },
          {
            title: 'Smart Contracts',
            tag: 'Solana Rust & EVM',
            href: '/services/smart-contracts',
            icon: ShieldCheck,
          },
          {
            title: 'Web & dApps',
            tag: 'Interfaces & SDKs',
            href: '/services/web-dapps',
            icon: Code2,
          },
        ],
      },
      {
        kicker: 'Ecosystem/',
        items: [
          {
            title: 'DevRel & GTM',
            tag: 'Builder activation',
            href: '/services/devrel-gtm',
            icon: Users,
          },
          {
            title: 'Hackathons',
            tag: 'Cohorts & build rooms',
            href: '/services/hackathons',
            icon: Terminal,
          },
          {
            title: 'Technical Docs',
            tag: 'Guides & reference kits',
            href: '/services/technical-docs',
            icon: FileCode2,
          },
        ],
      },
    ],
  },
  work: {
    label: 'Case Studies',
    href: '/work',
    columns: [
      {
        kicker: 'Overview/',
        items: [
          {
            title: 'All Case Studies',
            tag: '04 flagship dossiers',
            href: '/work',
            icon: Layers,
          },
        ],
      },
      {
        kicker: 'Zero-Knowledge/',
        items: [
          {
            title: 'Civitas',
            tag: 'ZK payroll on Solana',
            href: '/work/civitas',
            icon: Cpu,
          },
        ],
      },
      {
        kicker: 'DeFi & Markets/',
        items: [
          {
            title: 'ChainPot',
            tag: 'Certora-verified ROSCA',
            href: '/work/chainpot',
            icon: ShieldCheck,
          },
          {
            title: 'Divergence Router',
            tag: 'Atomic CLOB on Somnia',
            href: '/work/divergence-router',
            icon: Workflow,
          },
        ],
      },
      {
        kicker: 'Ecosystem & Hackathons/',
        items: [
          {
            title: 'Core Nexus',
            tag: '36h Hackathon · JLU Bhopal',
            href: '/work/core-nexus',
            icon: Terminal,
          },
        ],
      },
    ],
  },
  portfolio: {
    label: 'Build Archive',
    href: '/portfolio',
    columns: [
      {
        kicker: 'Overview/',
        items: [
          {
            title: 'Full Archive',
            tag: '15 shipped systems',
            href: '/portfolio',
            icon: FolderGit2,
          },
        ],
      },
      {
        kicker: 'ZK & Privacy/',
        items: [
          {
            title: 'Civitas Protocol',
            tag: 'Solana · Groth16 · Nillion',
            href: '/work/civitas',
            icon: Cpu,
          },
          {
            title: 'ZK & Identity',
            tag: 'Proofs & attestations',
            href: '/portfolio',
            icon: ShieldCheck,
          },
        ],
      },
      {
        kicker: 'DeFi & CLOB/',
        items: [
          {
            title: 'ChainPot Protocol',
            tag: 'Base · Compound v3',
            href: '/work/chainpot',
            icon: Layers,
          },
          {
            title: 'Divergence Router',
            tag: 'Somnia · Sub-second EVM',
            href: '/work/divergence-router',
            icon: Workflow,
          },
        ],
      },
      {
        kicker: 'Agents & Infra/',
        items: [
          {
            title: 'AI Agents & SDKs',
            tag: 'ElizaOS & tooling',
            href: '/portfolio',
            icon: Terminal,
          },
        ],
      },
    ],
  },
  lab: {
    label: 'The Lab',
    href: '/lab',
    columns: [
      {
        kicker: 'Overview/',
        items: [
          {
            title: 'About The Lab',
            tag: 'Team & studio principles',
            href: '/lab',
            icon: Compass,
          },
        ],
      },
      {
        kicker: 'Leadership/',
        items: [
          {
            title: 'Rythme Nagrani',
            tag: 'Protocol & DevRel',
            href: '/lab',
            icon: Cpu,
          },
          {
            title: 'Swarna Nagrani',
            tag: 'Design & Operations',
            href: '/lab',
            icon: Sparkles,
          },
        ],
      },
      {
        kicker: 'Media/',
        items: [
          {
            title: 'SpellCast',
            tag: 'Founder conversations',
            href: '/spellcast',
            icon: Mic,
          },
          {
            title: 'Insights',
            tag: 'Technical field notes',
            href: '/insights',
            icon: BookOpen,
          },
        ],
      },
      {
        kicker: 'Connect/',
        items: [
          {
            title: 'Start a Project',
            tag: 'Work with the team',
            href: '/contact',
            icon: Workflow,
          },
          {
            title: 'FAQ',
            tag: 'How we engage',
            href: '/faq',
            icon: Layers,
          },
        ],
      },
    ],
  },
}

const navMenuOrder: NavMenuKey[] = ['services', 'work', 'portfolio', 'lab']

const directNavLinks = [
  { label: 'SpellCast', href: '/spellcast', icon: Radio },
  { label: 'Insights', href: '/insights', icon: BookOpen },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<NavMenuKey | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const closeTimerRef = useRef<number | null>(null)

  function openMenu(key: NavMenuKey) {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveMenu(key)
  }

  function scheduleCloseMenu() {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null)
    }, 120)
  }

  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveMenu(null)
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    }
  }, [])

  const currentColumns = activeMenu ? navMenus[activeMenu].columns : []

  return (
    <header
      ref={headerRef}
      className={`site-header ${activeMenu ? 'has-mega-open' : ''}`}
      onMouseLeave={scheduleCloseMenu}
    >
      <div className="site-header-bar">
        <Link
          className="brand"
          href="/"
          onClick={() => {
            setOpen(false)
            setActiveMenu(null)
          }}
        >
          <span className="brand-mark">W3S</span>
          <span className="brand-text">
            web3spell<span className="brand-muted">/labs</span>
          </span>
        </Link>

        <nav
          id="site-navigation"
          className={open ? 'main-nav is-open' : 'main-nav'}
          aria-label="Primary navigation"
        >
          {navMenuOrder.map((key) => {
            const menu = navMenus[key]
            const isRouteActive =
              pathname === menu.href || pathname?.startsWith(`${menu.href}/`)
            const isOpen = activeMenu === key
            return (
              <div
                key={key}
                className="nav-dropdown"
                onMouseEnter={() => openMenu(key)}
              >
                <Link
                  href={menu.href}
                  className={`nav-link-item ${isRouteActive || isOpen ? 'is-active' : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpen(false)
                    setActiveMenu(null)
                  }}
                >
                  <span>{menu.label}</span>
                  <span
                    className={`nav-plus-box ${isOpen ? 'is-open' : ''}`}
                    aria-hidden="true"
                  >
                    {isOpen ? '×' : '+'}
                  </span>
                </Link>
              </div>
            )
          })}

          {directNavLinks.map((item) => {
            const Icon = item.icon
            const isActive =
              pathname === item.href || pathname?.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-item ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveMenu(null)}
                onClick={() => {
                  setOpen(false)
                  setActiveMenu(null)
                }}
              >
                <span>{item.label}</span>
                <span className="nav-plus-box nav-icon-box" aria-hidden="true">
                  <Icon size={11} />
                </span>
              </Link>
            )
          })}

          <Link
            className="mobile-nav-cta"
            href="/contact"
            onClick={() => {
              setOpen(false)
              setActiveMenu(null)
            }}
          >
            <span>Start a project</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        <div className="header-actions" onMouseEnter={() => setActiveMenu(null)}>
          <BookingButton className="booking-nav" />
          <Link className="header-cta" href="/contact">
            <span>Start a project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sui-Style Compact 4-Column Hover Panel */}
      <div
        className={`nav-mega-drawer ${activeMenu ? 'is-open' : ''}`}
        role="region"
        aria-label="Navigation menu"
        onMouseEnter={() => {
          if (activeMenu) openMenu(activeMenu)
        }}
        onMouseLeave={scheduleCloseMenu}
      >
        <div className="nav-mega-inner">
          {currentColumns.map((col) => (
            <div key={col.kicker} className="nav-mega-col">
              <div className="nav-mega-col-head">{col.kicker}</div>
              <div className="nav-mega-col-body">
                {col.items.map((sub) => {
                  const Icon = sub.icon
                  return (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className="nav-mega-subitem"
                      onClick={() => {
                        setActiveMenu(null)
                        setOpen(false)
                      }}
                    >
                      <span className="nav-mega-subicon" aria-hidden="true">
                        <Icon size={16} strokeWidth={1.6} />
                      </span>
                      <span className="nav-mega-subtext">
                        <span className="nav-mega-subtitle">
                          {sub.title}
                          <ArrowUpRight size={11} />
                        </span>
                        <span className="nav-mega-subtag">{sub.tag}</span>
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [subState, setSubState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setSubState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      })
      if (res.ok) {
        setSubState('done')
        setEmail('')
      } else {
        setSubState('error')
      }
    } catch {
      setSubState('error')
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <span className="section-kicker">SITEMAP</span>
          <Link href="/services">Services</Link>
          <Link href="/work">Case Studies</Link>
          <Link href="/portfolio">Build Archive (15)</Link>
          <Link href="/spellcast">SpellCast</Link>
          <Link href="/lab">The Lab</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <div className="footer-column">
          <span className="section-kicker">CONTACT</span>
          <Link href="/contact">hello@web3spell.com</Link>
          <Link href="/contact">Start a project</Link>
          <BookingButton className="footer-booking" />
        </div>
        <div className="footer-column">
          <span className="section-kicker">FOLLOW</span>
          <a href="https://x.com/web3spell" target="_blank" rel="noreferrer">
            X / Twitter <ArrowUpRight size={14} />
          </a>
          <a href="https://github.com/rythmern02" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
        <form className="footer-column footer-newsletter" onSubmit={handleNewsletter}>
          <span className="section-kicker">SPELLCAST UPDATES</span>
          <label htmlFor="footer-email">
            {subState === 'done'
              ? 'Subscribed. You will receive new SpellCast field notes.'
              : 'Receive new episodes and architecture field notes.'}
          </label>
          <div>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (subState !== 'idle') setSubState('idle')
              }}
              placeholder="Your work email"
              disabled={subState === 'loading'}
              required
            />
            <button
              type="submit"
              disabled={subState === 'loading'}
              aria-label="Subscribe to SpellCast updates"
            >
              {subState === 'loading' ? (
                <Loader2 size={15} className="animate-spin" />
              ) : subState === 'done' ? (
                <Check size={16} />
              ) : (
                <ArrowUpRight size={16} />
              )}
            </button>
          </div>
          {subState === 'error' && (
            <small className="footer-newsletter-error">
              Unable to subscribe right now. Please try again.
            </small>
          )}
        </form>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Web3Spell Labs. All rights reserved.</span>
        <span>Built for teams shipping onchain products and ecosystems.</span>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        <span>WEB3SPELL</span>
        <em>LABS</em>
      </div>
    </footer>
  )
}

export function PageShell({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <main className={dark ? 'route-shell route-dark' : 'route-shell'}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  )
}

export function RouteHero({
  kicker,
  title,
  intro,
}: {
  kicker: string
  title: React.ReactNode
  intro: string
}) {
  return (
    <section className="route-hero">
      <span className="section-kicker">{kicker}</span>
      <div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  )
}

export function ArrowLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link className="arrow-link" href={href}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  )
}
