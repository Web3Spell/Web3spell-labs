import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/site-shell'
import { ProjectArtwork } from '@/components/project-artwork'
import { caseStudies } from '@/lib/content'

function cleanSummary(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`(.*?)`/g, '$1')
}

export default function WorkPage() {
  return (
    <PageShell>
      {/* Monumental Editorial Hero */}
      <section className="work-index-hero">
        <div className="case-container">
          <div className="work-index-hero-top">
            <span className="section-kicker">SELECTED WORK · 04 FLAGSHIP CASE STUDIES</span>
            <Link href="/portfolio" className="work-index-archive-pill">
              <span>Explore all 15 shipped builds</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="work-index-hero-grid">
            <div>
              <h1 className="case-display-h1">
                Engineered for
                <br />
                <em>production.</em>
              </h1>
            </div>

            <div className="work-index-hero-copy">
              <p>
                Deep architectural dossiers on our flagship zero-knowledge protocols, formally verified DeFi primitives, low-latency market execution engines, and high-output builder hackathons, documented down to their on-chain contracts, mathematical invariants, and live field telemetry.
              </p>
            </div>
          </div>

          {/* Quick-Jump Dossier Index Bar Above the Fold */}
          <div className="work-index-quicknav" aria-label="Jump to case study">
            {caseStudies.map((item) => (
              <a key={item.slug} href={`#case-${item.slug}`} className="work-index-quicklink">
                <span className="work-index-quicknum">{item.number}</span>
                <strong>{item.title}</strong>
                <span className="work-index-quickdomain">{item.client}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Case Study Editorial Rows */}
      <section className="work-index-list-section">
        <div className="case-container work-index-stack">
          {caseStudies.map((item) => {
            const secondaryExternalUrl = item.liveUrl ?? item.auditReportUrl ?? item.whitepaperUrl
            const secondaryExternalLabel = item.liveUrl
              ? 'Live Application'
              : item.auditReportUrl
                ? 'Certora Audit Report'
                : 'Technical Whitepaper'

            return (
              <article
                key={item.slug}
                id={`case-${item.slug}`}
                className="work-editorial-row"
              >
                <Link
                  href={`/work/${item.slug}`}
                  className="work-editorial-media"
                  aria-label={`Read ${item.title} case study`}
                >
                  <ProjectArtwork project={item.slug} />
                </Link>

                <div className="work-editorial-content">
                  <div className="work-editorial-meta">
                    <span>
                      {item.number} / {item.label} · {item.meta}
                    </span>
                  </div>

                  <div className="work-editorial-heading">
                    <h2>
                      <Link href={`/work/${item.slug}`}>{item.title}</Link>
                    </h2>
                    <p className="work-editorial-subtitle">{item.body}</p>
                    <p className="work-editorial-summary">{cleanSummary(item.built)}</p>
                  </div>

                  {item.metrics && item.metrics.length > 0 && (
                    <div className="work-editorial-metrics">
                      {item.metrics.slice(0, 3).map((m) => (
                        <div key={m.label} className="work-editorial-metric">
                          <strong>{m.value}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="work-editorial-actions">
                    <Link href={`/work/${item.slug}`} className="case-ext-link primary">
                      <span>Read Case Study</span>
                      <ArrowRight size={15} />
                    </Link>

                    {secondaryExternalUrl && (
                      <a
                        href={secondaryExternalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="case-ext-link"
                      >
                        <span>{secondaryExternalLabel}</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Bottom Archive & Conversion Callout */}
      <section className="work-archive-callout">
        <div className="case-container work-archive-callout-inner">
          <div className="work-archive-callout-head">
            <span className="section-kicker">COMPLETE ENGINEERING INDEX · 15 SYSTEMS</span>
            <h2 className="case-display-h2">
              Explore the full
              <br />
              <em>Build Archive.</em>
            </h2>
          </div>
          <div className="work-archive-callout-copy">
            <p>
              Beyond these four flagship dossiers, our engineering archive indexes all 15 shipped dApps, smart contract suites, and developer tools across Solana, Base, Somnia, Rootstock, and EVM Layer 2s.
            </p>
            <div className="work-archive-callout-actions">
              <Link className="solid-cta" href="/portfolio">
                <span>Open Build Archive (15)</span>
                <ArrowUpRight size={17} />
              </Link>
              <Link className="case-plain-archive-link" href="/contact">
                Start a project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
