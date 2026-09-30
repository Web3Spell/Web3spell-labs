import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  {
    value: '15',
    suffix: '+',
    label: 'SHIPPED ONCHAIN SYSTEMS',
    detail: 'Production dApps, zero-knowledge protocols, DeFi primitives, and execution engines.',
    href: '/portfolio',
  },
  {
    value: '04',
    suffix: '',
    label: 'FLAGSHIP CASE STUDIES',
    detail: 'Deep architectural dossiers across Solana ZK, Certora DeFi, Somnia CLOB & Core Nexus.',
    href: '/work',
  },
  {
    value: '75',
    suffix: '+',
    label: 'BUILDER ACTIVATIONS',
    detail: 'High-conversion hackathons, technical bootcamps, and residencies across APAC.',
    href: '/work/core-nexus',
  },
  {
    value: '5k',
    suffix: '+',
    label: 'GLOBAL DEVELOPER REACH',
    detail: 'Engineers building with our open-source tools, SDKs, and smart contract libraries.',
    href: '/services/ecosystem-devrel',
  },
]

export function ProofStats() {
  return (
    <section className="proof-stats" aria-label="Web3Spell Labs in numbers">
      <div className="proof-stats-head">
        <span className="section-kicker">05 / FIELD RECORD</span>
        <p className="proof-stats-lead">
          Shipped protocols, production infrastructure, and active developer ecosystems.
        </p>
      </div>
      <div className="proof-stats-grid">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="proof-stat-card">
            <div className="proof-stat-top">
              <strong>
                {stat.value}
                <em>{stat.suffix}</em>
              </strong>
              <ArrowUpRight size={17} className="proof-stat-arrow" />
            </div>
            <span className="proof-stat-label">{stat.label}</span>
            <p className="proof-stat-detail">{stat.detail}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
