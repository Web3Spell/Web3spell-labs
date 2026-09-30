'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'
import type { CaseStudy } from '@/lib/content'
import { ProjectArtwork } from '@/components/project-artwork'
import { CaseArchitectureDiagram, CaseSequenceDiagram } from '@/components/case-architecture-diagram'

/**
 * Strips **bold** highlight markers so prose reads as calm, uninterrupted sentences,
 * while preserving `literal_code` identifiers in monospace.
 */
function renderCalmProse(text: string) {
  const withoutBoldBoxes = text.replace(/\*\*(.*?)\*\*/g, '$1')
  const parts = withoutBoldBoxes.split(/(`.*?`)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={idx} className="case-literal-code">
          {part.slice(1, -1)}
        </code>
      )
    }
    return part
  })
}

type DossierTabKey = '03' | '04' | '05' | '06'

export function CaseStudyDossier({
  item,
  prevStudy,
  nextStudy,
}: {
  item: CaseStudy
  prevStudy: CaseStudy
  nextStudy: CaseStudy
}) {
  const availableTabs: {
    key: DossierTabKey
    navId: string
    shortLabel: string
    title: string
    countLabel: string
  }[] = []

  if (item.architectureLayers && item.architectureLayers.length > 0) {
    availableTabs.push({
      key: '03',
      navId: 'architecture',
      shortLabel: 'Defense Stack',
      title: item.architectureSectionTitle ?? 'Why a single primitive is never enough.',
      countLabel: `${item.architectureLayers.length} Layers`,
    })
  }
  if (item.cryptoRelations && item.circuitConstraints) {
    availableTabs.push({
      key: '04',
      navId: 'specification',
      shortLabel: 'Cryptographic Spec',
      title: item.specSectionTitle ?? 'Cryptographic Specification & Invariants.',
      countLabel: `${item.cryptoRelations.length + item.circuitConstraints.length} Specs`,
    })
  }
  if (item.lifecyclePhases && item.lifecyclePhases.length > 0) {
    const totalSteps = item.lifecyclePhases.reduce((acc, p) => acc + p.steps.length, 0)
    availableTabs.push({
      key: '05',
      navId: 'lifecycle',
      shortLabel: 'Execution Trace',
      title: item.lifecycleSectionTitle ?? `${totalSteps}-step end-to-end settlement lifecycle.`,
      countLabel: `${totalSteps} Steps`,
    })
  }
  if (item.engineeringDecisions && item.engineeringDecisions.length > 0) {
    availableTabs.push({
      key: '06',
      navId: 'decisions',
      shortLabel: 'Trade-Offs',
      title: item.decisionsSectionTitle ?? 'Systems engineering decisions under the hood.',
      countLabel: `${item.engineeringDecisions.length} Decisions`,
    })
  }

  const [activeTab, setActiveTab] = useState<DossierTabKey>(availableTabs[0]?.key ?? '03')
  const [activeSection, setActiveSection] = useState<string>('telemetry')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [videoMissing, setVideoMissing] = useState(false)
  const [reelIndex, setReelIndex] = useState(0)
  const [reelPaused, setReelPaused] = useState(false)

  useEffect(() => {
    if (!item.galleryImages || item.galleryImages.length === 0 || !videoMissing || reelPaused) {
      return
    }
    const timer = window.setInterval(() => {
      setReelIndex((prev) => (prev + 1) % item.galleryImages!.length)
    }, 3400)
    return () => window.clearInterval(timer)
  }, [item.galleryImages, videoMissing, reelPaused])

  // Track overall page read progress
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
      setScrollProgress(pct)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab])

  // IntersectionObserver for scroll-spy highlighting in sticky sub-nav
  useEffect(() => {
    const sectionIds = ['telemetry', 'thesis', 'field-production', 'technical-dossier']
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          const id = visible[0].target.id
          setActiveSection(id)
        }
      },
      {
        rootMargin: '-140px 0px -50% 0px',
        threshold: [0.1, 0.3],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeTab])

  function handleNavJump(targetId: string) {
    setActiveSection(targetId)
    const el = document.getElementById(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleSelectTab(tabKey: DossierTabKey, shouldScrollToTop = false) {
    setActiveTab(tabKey)
    setActiveSection('technical-dossier')
    if (shouldScrollToTop) {
      const el = document.getElementById('technical-dossier-tabs')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const secondaryDocUrl = item.auditReportUrl ?? item.whitepaperUrl
  const secondaryDocLabel = item.auditReportUrl
    ? item.auditReportLabel ?? 'Read Security Audit Report'
    : item.whitepaperLabel ?? 'Read Technical Whitepaper'

  const activeTabIndex = availableTabs.findIndex((t) => t.key === activeTab)
  const prevTab = activeTabIndex > 0 ? availableTabs[activeTabIndex - 1] : null
  const nextTab =
    activeTabIndex >= 0 && activeTabIndex < availableTabs.length - 1
      ? availableTabs[activeTabIndex + 1]
      : null

  return (
    <>
      {/* 1. Narrative-First Hero */}
      <section className="case-dossier-hero">
        <div className="case-container">
          <div className="case-dossier-topbar">
            <Link href="/work" className="case-back-link">
              <ArrowLeft size={15} />
              <span>All Case Studies</span>
            </Link>
            <p className="case-plain-tag-line">
              {item.number} / {item.label} · {item.meta}
            </p>
          </div>

          <div className="case-dossier-title-grid">
            <div className="case-dossier-main">
              <div className="case-title-row">
                {item.logoImage && (
                  <div className="case-hero-logo">
                    <Image
                      src={item.logoImage}
                      alt={`${item.title} logo`}
                      width={64}
                      height={64}
                      unoptimized
                    />
                  </div>
                )}
                <h1 className="case-display-h1">{item.title}</h1>
              </div>
              <p className="case-dossier-subtitle">{item.body}</p>
            </div>

            <div className="case-dossier-actions">
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="case-ext-link primary"
                >
                  <span>Launch Live Application</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
              {secondaryDocUrl && (
                <a
                  href={secondaryDocUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="case-ext-link"
                >
                  <span>{secondaryDocLabel}</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="case-github-icon-link"
                  aria-label={`Inspect ${item.title} GitHub repository`}
                  title="Inspect GitHub Repository"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quiet Sticky Sub-Navigation Bar */}
      <nav className="case-chapter-nav" aria-label="Case study sections">
        <div className="case-scroll-progress-track" aria-hidden="true">
          <div className="case-scroll-progress-fill" style={{ width: `${scrollProgress}%` }} />
        </div>
        <div className="case-container case-chapter-nav-inner">
          <span className="case-chapter-label">INDEX</span>
          <div className="case-chapter-links">
            <button
              type="button"
              className={activeSection === 'telemetry' ? 'is-active' : ''}
              onClick={() => handleNavJump('telemetry')}
            >
              01 Overview
            </button>
            <button
              type="button"
              className={activeSection === 'thesis' ? 'is-active' : ''}
              onClick={() => handleNavJump('thesis')}
            >
              02 Executive Thesis
            </button>
            {(item.loopVideoUrl || (item.galleryImages && item.galleryImages.length > 0)) && (
              <button
                type="button"
                className={activeSection === 'field-production' ? 'is-active' : ''}
                onClick={() => handleNavJump('field-production')}
              >
                03 Field Reel &amp; Gallery
              </button>
            )}
            {availableTabs.length > 0 && (
              <button
                type="button"
                className={activeSection === 'technical-dossier' ? 'is-active' : ''}
                onClick={() => handleNavJump('technical-dossier')}
              >
                {item.loopVideoUrl || (item.galleryImages && item.galleryImages.length > 0)
                  ? '04 Architecture & Execution'
                  : '03 Architecture & Verification'}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 3. Pure Cover Image Frame + Quiet Editorial Telemetry Below (Zero Neon Strips) */}
      <section className="case-study-showcase" id="telemetry">
        <div className="case-container">
          {/* Standalone, Pure Product Frame */}
          <div className="case-study-showcase-frame">
            <div className="case-showcase-chrome" aria-hidden="true">
              <div className="case-chrome-dots">
                <i />
                <i />
                <i />
              </div>
              <span className="case-chrome-domain">{item.href}</span>
              <span className="case-chrome-spacer" />
            </div>

            {item.heroImage ? (
              <div className="case-showcase-media">
                <Image
                  src={item.heroImage}
                  alt={`${item.title} product interface`}
                  width={1600}
                  height={900}
                  unoptimized
                  className="case-study-showcase-img"
                  priority
                />
              </div>
            ) : (
              <div className="case-study-showcase-diagram">
                <ProjectArtwork project={item.slug} />
              </div>
            )}
          </div>

          {/* Clean, Unboxed Telemetry & Metadata Below Cover Image */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="case-clean-metrics-grid" aria-label="Key system benchmarks">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="case-clean-metric-item">
                  <strong className="case-clean-metric-value">{metric.value}</strong>
                  <span className="case-clean-metric-label">{metric.label}</span>
                  <p>{metric.detail}</p>
                </div>
              ))}
            </div>
          )}

          {/* Quiet 1-Line Editorial Metadata Strip */}
          <div className="case-quiet-meta-bar">
            <div className="case-quiet-meta-item">
              <span>Client</span>
              <strong>{item.client}</strong>
            </div>
            <div className="case-quiet-meta-item">
              <span>Runtime</span>
              <strong>{item.network ?? item.techStack.slice(0, 2).join(' · ')}</strong>
            </div>
            <div className="case-quiet-meta-item">
              <span>Release</span>
              <strong>{item.timeline ?? 'Production Release'}</strong>
            </div>
            {item.programId ? (
              <div className="case-quiet-meta-item">
                <span>On-Chain Artifact</span>
                <code className="case-literal-code">
                  {item.programId.length > 24
                    ? `${item.programId.slice(0, 8)}...${item.programId.slice(-6)}`
                    : item.programId}
                </code>
              </div>
            ) : (
              <div className="case-quiet-meta-item">
                <span>Scope</span>
                <strong>{item.role}</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. 02 / Executive Thesis + Architecture Flow Diagram */}
      <section className="case-section case-section-bordered" id="thesis">
        <div className="case-container">
          <div className="case-section-head-grid">
            <div>
              <span className="section-kicker">02 / EXECUTIVE THESIS</span>
              <h2 className="case-display-h2">
                Designing for <em>the real constraint.</em>
              </h2>
            </div>
            <p className="case-prose-capped">
              Every architectural decision begins by isolating the structural failure modes of existing solutions and engineering directly against them.
            </p>
          </div>

          <div className="case-thesis-editorial">
            <article className="case-thesis-column">
              <span className="section-kicker">01 / THE PROBLEM</span>
              <h3>Vulnerability &amp; Friction Surface</h3>
              <p className="case-prose-capped">{renderCalmProse(item.problem)}</p>
            </article>

            <article className="case-thesis-column">
              <span className="section-kicker">02 / OUR APPROACH</span>
              <h3>Protocol &amp; Product Strategy</h3>
              <p className="case-prose-capped">{renderCalmProse(item.approach)}</p>
            </article>

            <article className="case-thesis-column">
              <span className="section-kicker">03 / DELIVERED</span>
              <h3>Shipped Production System</h3>
              <p className="case-prose-capped">{renderCalmProse(item.built)}</p>
            </article>
          </div>

          <div id="architecture-diagram">
            <CaseArchitectureDiagram slug={item.slug} />
          </div>
        </div>
      </section>

      {/* 4B. Looping Landscape Video Stage + On-Ground Field Photography Gallery */}
      {(item.loopVideoUrl || (item.galleryImages && item.galleryImages.length > 0)) && (
        <section className="case-section case-section-bordered" id="field-production">
          <div className="case-container">
            <div className="case-section-head-grid">
              <div>
                <span className="section-kicker">03 / ON-GROUND FILM &amp; FIELD ARCHIVE</span>
                <h2 className="case-display-h2">
                  Inside the <em>36-hour war room.</em>
                </h2>
              </div>
              <p className="case-prose-capped">
                Continuous landscape reel and documentary photography from Jagran Lakecity University (JLU), Bhopal, capturing the mainstage keynotes, 250+ builders in the auditorium, and campus-wide execution.
              </p>
            </div>

            {/* Landscape 16:9 Looping Video Player (with automatic Cinema Reel fallback until video file is placed) */}
            {item.loopVideoUrl && (
              <div className="case-loop-video-block">
                <div className="case-loop-video-topbar">
                  <div className="case-loop-video-status">
                    <i className="case-loop-live-dot" aria-hidden="true" />
                    <span>
                      {videoMissing
                        ? 'CONTINUOUS LANDSCAPE REEL · AUTO-LOOPING 16:9 STAGE'
                        : 'LANDSCAPE AFTERMOVIE · CONTINUOUS 16:9 LOOP'}
                    </span>
                  </div>
                  <span className="case-loop-video-meta">
                    {item.loopVideoCaption ?? `${item.title} · Landscape Loop`}
                  </span>
                </div>

                <div
                  className="case-loop-video-viewport"
                  onMouseEnter={() => setReelPaused(true)}
                  onMouseLeave={() => setReelPaused(false)}
                >
                  {!videoMissing ? (
                    <video
                      src={item.loopVideoUrl}
                      poster={item.heroImage}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="case-loop-video-el"
                      onError={() => setVideoMissing(true)}
                    />
                  ) : item.galleryImages && item.galleryImages.length > 0 ? (
                    <div className="case-loop-cinema-fallback">
                      <Image
                        src={item.galleryImages[reelIndex].src}
                        alt={item.galleryImages[reelIndex].title}
                        fill
                        unoptimized
                        className="case-loop-cinema-img"
                      />
                      <div className="case-loop-cinema-overlay">
                        <div>
                          <span className="ui-tag-chip">
                            0{reelIndex + 1} / 0{item.galleryImages.length} ·{' '}
                            {item.galleryImages[reelIndex].tag}
                          </span>
                          <h3>{item.galleryImages[reelIndex].title}</h3>
                          <p>{item.galleryImages[reelIndex].caption}</p>
                        </div>
                        <div className="case-loop-cinema-dots" role="tablist" aria-label="Select reel frame">
                          {item.galleryImages.map((img, i) => (
                            <button
                              key={img.src}
                              type="button"
                              role="tab"
                              aria-selected={reelIndex === i}
                              aria-label={`Show frame ${i + 1}: ${img.title}`}
                              className={`case-loop-dot ${reelIndex === i ? 'is-active' : ''}`}
                              onClick={() => setReelIndex(i)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )}

            {/* Editorial Field Photography Grid */}
            {item.galleryImages && item.galleryImages.length > 0 && (
              <div className="case-field-gallery">
                <div className="case-field-gallery-head">
                  <span className="section-kicker">
                    DOCUMENTARY ARCHIVE · 0{item.galleryImages.length} VERIFIED FRAMES FROM JLU BHOPAL
                  </span>
                  <span className="case-diagram-hint">
                    Click any frame to spotlight in the landscape stage above
                  </span>
                </div>

                <div className="case-field-gallery-grid">
                  {item.galleryImages.map((photo, idx) => (
                    <article
                      key={photo.src}
                      className={`case-field-photo-item ${idx === 0 ? 'is-featured' : ''} ${reelIndex === idx ? 'is-selected' : ''}`}
                      onClick={() => setReelIndex(idx)}
                    >
                      <div className="case-field-photo-media">
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          fill
                          unoptimized
                          sizes="(max-width: 900px) 94vw, 620px"
                          className="case-field-photo-img"
                        />
                      </div>
                      <div className="case-field-photo-caption">
                        <div className="case-field-photo-meta">
                          <span>0{idx + 1}</span>
                          <span>{photo.tag}</span>
                        </div>
                        <h3>{photo.title}</h3>
                        <p>{photo.caption}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Always-Visible Technical Dossier with Horizontal Tab Switcher (Zero Jump-to-Footer) */}
      {availableTabs.length > 0 && (
        <section className="case-section case-section-bordered" id="technical-dossier">
          <div className="case-container">
            <div className="case-section-head-grid">
              <div>
                <span className="section-kicker">TECHNICAL ARCHITECTURE &amp; PROOF</span>
                <h2 className="case-display-h2">
                  Architecture <em>&amp; verification.</em>
                </h2>
              </div>
              <p className="case-prose-capped">
                Explore the defense-in-depth matrix, formal cryptographic equations, end-to-end execution trace, and systems engineering trade-offs.
              </p>
            </div>

            {/* Anchored Horizontal Tab Bar: Switching tabs swaps content below without collapsing height above */}
            <div
              className="case-dossier-tabs-bar"
              id="technical-dossier-tabs"
              role="tablist"
              aria-label="Technical dossier chapters"
            >
              {availableTabs.map((tab) => {
                const isSelected = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`case-dossier-tab-btn ${isSelected ? 'is-active' : ''}`}
                    onClick={() => handleSelectTab(tab.key, false)}
                  >
                    <span className="case-dossier-tab-num">
                      {tab.key} · {tab.countLabel}
                    </span>
                    <strong className="case-dossier-tab-title">{tab.shortLabel}</strong>
                  </button>
                )
              })}
            </div>

            {/* Active Tab Panel */}
            <div className="case-dossier-tab-panel" role="tabpanel">
              {/* TAB 03 / Architecture & Semantic Threat/Leak Matrix */}
              {activeTab === '03' && item.architectureLayers && (
                <div className="case-tab-content" id="architecture">
                  <div className="case-tab-panel-header">
                    <div>
                      <span className="section-kicker">
                        {item.architectureSectionKicker ?? '03 / FOUR-LAYER PRIVACY STACK'}
                      </span>
                      <h3>
                        {item.architectureSectionTitle ?? 'Why a single primitive is never enough.'}
                      </h3>
                    </div>
                    <p className="case-prose-capped">
                      {item.architectureSectionSubtitle ??
                        'Each layer consumes the cryptographic output of the layer before it. Dropping any single boundary re-opens a concrete inference vector across storage, compute, claim verification, or token settlement.'}
                    </p>
                  </div>

                  <div className="case-layer-rows">
                    {item.architectureLayers.map((layer, idx) => (
                      <div key={layer.name} className="case-layer-row">
                        <div className="case-layer-meta">
                          <span className="ui-tag-chip">LAYER 0{idx + 1}</span>
                          <h4>{layer.name}</h4>
                          <span className="case-layer-stack">{layer.stack}</span>
                        </div>

                        <div className="case-semantic-pair">
                          <div className="case-semantic-card is-positive">
                            <div className="case-semantic-head">
                              <CheckCircle2 size={16} />
                              <span>{item.archCol1Label ?? 'THREAT ELIMINATED'}</span>
                            </div>
                            <p className="case-prose-capped">
                              {renderCalmProse(layer.threatEliminated)}
                            </p>
                          </div>

                          <div className="case-semantic-card is-negative">
                            <div className="case-semantic-head">
                              <AlertTriangle size={16} />
                              <span>{item.archCol2Label ?? 'IF OMITTED (LEAK VECTOR)'}</span>
                            </div>
                            <p className="case-prose-capped">
                              {renderCalmProse(layer.failureModeIfDropped)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 04 / Cryptographic Specification */}
              {activeTab === '04' && item.cryptoRelations && item.circuitConstraints && (
                <div className="case-tab-content" id="specification">
                  <div className="case-tab-panel-header">
                    <div>
                      <span className="section-kicker">
                        {item.specSectionKicker ?? '04 / CRYPTOGRAPHIC SPECIFICATION'}
                      </span>
                      <h3>
                        {item.specSectionTitle ??
                          'Cryptographic Specification & Formal Invariants.'}
                      </h3>
                    </div>
                    <p className="case-prose-capped">
                      {item.specSectionSubtitle ??
                        'All commitments, Merkle nodes, nullifiers, and public-input sponges operate over the BN254 scalar field 𝔽_p (p ≈ 2²⁵⁴), eliminating cross-field bit-packing and endianness divergence.'}
                    </p>
                  </div>

                  <div className="case-crypto-split">
                    <div className="case-crypto-panel">
                      <div className="case-panel-kicker">
                        {item.specLeftPanelKicker ?? 'PRIMITIVES OVER BN254 SCALAR FIELD 𝔽_p'}
                      </div>
                      <div className="case-relations-list">
                        {item.cryptoRelations.map((rel, idx) => (
                          <div key={rel.symbol} className="case-relation-item">
                            <div className="case-spec-chip-line">
                              <span className="ui-tag-chip">SPEC 0{idx + 1}</span>
                              <strong>{rel.symbol}</strong>
                            </div>
                            <code>{rel.formula}</code>
                            <p className="case-prose-capped">{rel.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="case-crypto-panel">
                      <div className="case-panel-kicker">
                        {item.specRightPanelKicker ?? 'VOUCHER.CIRCOM // 5 R1CS CONSTRAINTS'}
                      </div>
                      <div className="case-constraints-list">
                        {item.circuitConstraints.map((constraint, idx) => (
                          <div key={constraint.id} className="case-constraint-item">
                            <div className="case-spec-chip-line">
                              <span className="ui-tag-chip">SPEC 0{idx + 1}</span>
                              <strong>
                                {constraint.id.replace(
                                  /^(C\d+|ARCHETYPE \d+|FRICTION \d+)\s*·\s*/,
                                  ''
                                )}
                              </strong>
                            </div>
                            <code>{constraint.expression}</code>
                            <p className="case-prose-capped">{constraint.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 05 / Protocol Execution Trace */}
              {activeTab === '05' && item.lifecyclePhases && (
                <div className="case-tab-content" id="lifecycle">
                  <div className="case-tab-panel-header">
                    <div>
                      <span className="section-kicker">
                        {item.lifecycleSectionKicker ?? '05 / PROTOCOL EXECUTION TRACE'}
                      </span>
                      <h3>
                        {item.lifecycleSectionTitle ?? '13-step end-to-end settlement lifecycle.'}
                      </h3>
                    </div>
                    <p className="case-prose-capped">
                      Step-by-step state transitions tracing how client browsers, confidential enclaves, smart contracts, and settlement rails coordinate in production.
                    </p>
                  </div>

                  <CaseSequenceDiagram phases={item.lifecyclePhases} />

                  <div className="case-lifecycle-phases">
                    {item.lifecyclePhases.map((phase) => (
                      <div key={phase.phase} className="case-lifecycle-phase">
                        <div className="case-phase-header">
                          <span className="section-kicker">{phase.phase}</span>
                          <h4>{phase.title}</h4>
                        </div>

                        <div className="case-timeline-list">
                          {phase.steps.map((stepItem) => (
                            <div key={stepItem.step} className="case-timeline-row">
                              <div className="case-timeline-step-col">
                                <span className="ui-tag-chip">STEP {stepItem.step}</span>
                              </div>
                              <div className="case-timeline-actor-col">
                                <span>{stepItem.actor}</span>
                              </div>
                              <div className="case-timeline-content-col">
                                <strong>{stepItem.action}</strong>
                                <p className="case-prose-capped">
                                  {renderCalmProse(stepItem.detail)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 06 / Systems Engineering Trade-Offs */}
              {activeTab === '06' && item.engineeringDecisions && (
                <div className="case-tab-content" id="decisions">
                  <div className="case-tab-panel-header">
                    <div>
                      <span className="section-kicker">
                        {item.decisionsSectionKicker ?? '06 / ARCHITECTURAL TRADE-OFFS'}
                      </span>
                      <h3>
                        {item.decisionsSectionTitle ??
                          'Systems engineering decisions under the hood.'}
                      </h3>
                    </div>
                    <p className="case-prose-capped">
                      Why specific cryptographic primitives, custody models, and execution topologies were chosen over conventional alternatives.
                    </p>
                  </div>

                  <div className="case-decisions-ledger">
                    {item.engineeringDecisions.map((decision, idx) => (
                      <article key={decision.title} className="case-decision-row">
                        <div className="case-decision-chip-col">
                          <span className="ui-tag-chip">SPEC 0{idx + 1}</span>
                        </div>
                        <div className="case-decision-copy-col">
                          <h4>{decision.title}</h4>
                          <p className="case-prose-capped">
                            {renderCalmProse(decision.rationale)}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Tab Switcher Footer (keeps viewport anchored to the tab bar) */}
              <div className="case-tab-panel-footer">
                {prevTab ? (
                  <button
                    type="button"
                    className="case-tab-step-btn"
                    onClick={() => handleSelectTab(prevTab.key, true)}
                  >
                    <ArrowLeft size={15} />
                    <span>
                      {prevTab.key} / {prevTab.shortLabel}
                    </span>
                  </button>
                ) : (
                  <span />
                )}

                {nextTab ? (
                  <button
                    type="button"
                    className="case-tab-step-btn is-next"
                    onClick={() => handleSelectTab(nextTab.key, true)}
                  >
                    <span>
                      Next: {nextTab.key} / {nextTab.shortLabel}
                    </span>
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Adjacent Case Study Switcher */}
      <section className="case-switcher-section">
        <div className="case-container case-switcher-grid">
          <Link href={`/work/${prevStudy.slug}`} className="case-switcher-card">
            <span className="case-switcher-dir">
              <ArrowLeft size={14} /> PREVIOUS · {prevStudy.number}
            </span>
            <strong>{prevStudy.title}</strong>
            <p>{prevStudy.body}</p>
          </Link>

          <Link href={`/work/${nextStudy.slug}`} className="case-switcher-card is-next">
            <span className="case-switcher-dir">
              NEXT · {nextStudy.number} <ArrowRight size={14} />
            </span>
            <strong>{nextStudy.title}</strong>
            <p>{nextStudy.body}</p>
          </Link>
        </div>
      </section>

      {/* 7. Consolidated Footer CTA */}
      <section className="work-archive-callout">
        <div className="case-container work-archive-callout-inner">
          <div className="work-archive-callout-head">
            <span className="section-kicker">HAVE A RELATED CHALLENGE?</span>
            <h2 className="case-display-h2">
              Let&apos;s make
              <br />
              <em>it ship.</em>
            </h2>
          </div>
          <div className="work-archive-callout-copy">
            <p>
              Whether you are architecting zero-knowledge circuits, formally verified DeFi primitives, or a 250-builder ecosystem hackathon, you work directly with our founders and senior engineers.
            </p>
            <div className="work-archive-callout-actions">
              <Link className="solid-cta" href="/contact">
                <span>Discuss a project</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link className="case-plain-archive-link" href="/portfolio">
                Explore the 15-build archive →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
