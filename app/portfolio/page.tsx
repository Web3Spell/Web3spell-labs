'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, ExternalLink, GitBranch, Search, X } from 'lucide-react'
import { portfolioCategories, portfolioProjects, trophies, type PortfolioProject } from '@/lib/portfolio-data'
import { SiteHeader } from '@/components/site-shell'
import './portfolio.css'

function ExternalAction({ href, children, icon }: { href?: string; children: string; icon: React.ReactNode }) {
  if (!href) return null
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
      {icon}
      {children} ↗
    </a>
  )
}

function ProjectVisual({ project, large = false, showTitle = true }: { project: PortfolioProject; large?: boolean; showTitle?: boolean }) {
  const categorySlug = project.category.split(' ')[0].toLowerCase()
  const seed = Array.from(project.id).reduce((value, character) => value + character.charCodeAt(0), 0)
  const points = Array.from({ length: 9 }, (_, index) => ({ x: 46 + ((seed * (index + 7) + index * 73) % 308), y: 34 + ((seed * (index + 11) + index * 41) % 142) }))
  return (
    <div className={`project-visual project-visual-${categorySlug} project-visual-${project.id} ${large ? 'project-visual-large' : ''}`}>
      {project.coverImage ? (
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes={large ? '(max-width: 900px) 100vw, 620px' : '(max-width: 900px) 100vw, 45vw'}
          className="project-visual-image"
        />
      ) : (
        <svg className="project-visual-pattern" viewBox="0 0 400 220" aria-hidden="true">
          <path d="M0 55H400M0 110H400M0 165H400M100 0V220M200 0V220M300 0V220" />
          {points.map((point, index) => <g key={index}>
            {index < points.length - 1 && <path d={`M${point.x} ${point.y}L${points[index + 1].x} ${points[index + 1].y}`} />}
            {index < points.length - 3 && index % 2 === 0 && <path d={`M${point.x} ${point.y}L${points[index + 3].x} ${points[index + 3].y}`} />}
            <circle cx={point.x} cy={point.y} r={index % 3 === seed % 3 ? 3 : 1.7} />
          </g>)}
        </svg>
      )}
      <span>{project.chain}</span>
      {showTitle && <strong>{project.title}</strong>}
      <i />
      <small>
        {project.logoImage && (
          <span className="project-visual-logo">
            <Image src={project.logoImage} alt="" width={22} height={22} />
          </span>
        )}
        W3S / {project.rank}
      </small>
    </div>
  )
}

function FeaturedVisual({ project }: { project: PortfolioProject }) {
  return (
    <div className={`featured-visual featured-visual-${project.id} ${project.coverImage ? 'has-cover-image' : ''}`} aria-hidden="true">
      {project.coverImage && (
        <Image
          src={project.coverImage}
          alt={`${project.title} product screenshot`}
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
          className="featured-visual-image"
        />
      )}
      <div className="featured-visual-top">
        <span>WEB3SPELL / {project.rank}</span>
        <span>{project.chain}</span>
      </div>
      <div className="featured-visual-foot">
        <span className="featured-visual-brand">
          {project.logoImage && (
            <span className="featured-visual-logo">
              <Image src={project.logoImage} alt="" width={28} height={28} />
            </span>
          )}
          <span>{project.title.toUpperCase()} · {project.statusText.toUpperCase()}</span>
        </span>
        <i />
      </div>
    </div>
  )
}

function signal(project: PortfolioProject) {
  if (project.id === 'chainpot') return 'CERTORA AUDITED'
  if (project.id === 'instacredit') return 'PRODUCTION'
  if (project.category.includes('Bitcoin')) return project.statusText.toUpperCase()
  if (project.category.includes('Creative')) return project.statusText.includes('Live') ? 'LIVE DEMO' : 'HACKATHON SUITE'
  return project.statusText.toUpperCase()
}

function projectLinkLabel(project: PortfolioProject) {
  if (project.liveUrl.includes('youtube.com') || project.liveUrl.includes('youtu.be')) return 'WATCH DEMO'
  if (project.liveUrl.includes('github.com')) return 'VIEW REPOSITORY'
  return 'OPEN LIVE PRODUCT'
}

export default function PortfolioPage() {
  const [category, setCategory] = useState('All Builds')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('Index')
  const [selected, setSelected] = useState<PortfolioProject | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const featuredProjects = portfolioProjects.slice(0, 3)
  const featuredIds = new Set(featuredProjects.map((project) => project.id))

  const matchesSearch = (project: PortfolioProject) =>
    [project.title, project.description, project.tagline, project.chain, project.category, ...project.techStack]
      .join(' ')
      .toLowerCase()
      .includes(query.toLowerCase())

  const filtered = useMemo(
    () => portfolioProjects.filter(matchesSearch).filter((project) => category === 'All Builds' || project.category === category),
    [query, category]
  )

  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) =>
        sort === 'Category'
          ? a.category.localeCompare(b.category)
          : sort === 'Ecosystem'
          ? a.chain.localeCompare(b.chain)
          : Number(a.rank) - Number(b.rank)
      ),
    [filtered, sort]
  )

  const showFeatured = category === 'All Builds' && query.trim() === ''
  const listedProjects = sorted.filter((project) => !showFeatured || !featuredIds.has(project.id))

  useEffect(() => {
    if (!selected) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selected])

  const copyAddress = async (address: string) => {
    await navigator.clipboard.writeText(address)
    setCopied(address)
    window.setTimeout(() => setCopied(null), 1800)
  }

  return (
    <main className="portfolio-page">
      <SiteHeader />

      <section className="portfolio-hero">
        <span className="portfolio-eyebrow">
          <i className="status-pulse" />
          WEB3SPELL LABS / BUILD ARCHIVE (15)
        </span>
        <div className="portfolio-hero-grid">
          <div>
            <h1>
              Build
              <br />
              <em>archive.</em>
            </h1>
            <p className="portfolio-lead">
              The complete index of 15 shipped protocols, dApps, smart contract suites, and developer tools engineered by Web3Spell Labs.
            </p>
          </div>
          <div className="portfolio-metrics">
            <div>
              <strong>{portfolioProjects.length.toString().padStart(2, '0')}</strong>
              <span>PROJECTS IN THE ARCHIVE</span>
            </div>
            <div>
              <strong>{(portfolioCategories.length - 1).toString().padStart(2, '0')}</strong>
              <span>TECHNOLOGY DOMAINS</span>
            </div>
          </div>
        </div>
      </section>

      {showFeatured && <section className="portfolio-featured" aria-labelledby="featured-projects-title">
        <div className="featured-heading">
          <div>
            <span className="mono-label">01 / THE LEAD BUILDS</span>
            <h2 id="featured-projects-title">Three projects.<br /><em>Built to matter.</em></h2>
          </div>
          <p>A focused look at the products, protocols, and infrastructure leading the Web3Spell portfolio.</p>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => <motion.article
            className={`featured-project ${index === 0 ? 'featured-lead' : 'featured-support'}`}
            key={project.id}
            whileHover={{ y: -3 }}
          >
            <FeaturedVisual project={project} />
            <div className="featured-project-body">
              <div className="featured-project-meta"><span>{project.rank} / {project.category}</span><b>{signal(project)}</b></div>
              <button className="project-open featured-project-title" type="button" onClick={() => setSelected(project)} aria-label={`View ${project.title} project details`}>
                {project.title}<ArrowUpRight size={20} aria-hidden="true" />
              </button>
              <p>{project.tagline}</p>
              <div className="portfolio-tags">
                {project.techStack.slice(0, index === 0 ? 4 : 3).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="featured-project-actions">
                <ExternalAction href={project.liveUrl} icon={<ExternalLink size={14} />}>
                  {projectLinkLabel(project)}
                </ExternalAction>
                <button type="button" onClick={() => setSelected(project)}>View project brief <ArrowUpRight size={14} /></button>
              </div>
            </div>
          </motion.article>)}
        </div>
      </section>}

      <section className="portfolio-work">
        <div className="portfolio-toolbar">
          <div>
          <span className="mono-label">02 / COMPLETE ARCHIVE</span>
            <h2>
              {showFeatured ? 'More work' : 'Project archive'} <span>({listedProjects.length.toString().padStart(2, '0')})</span>
            </h2>
          </div>
          <div className="portfolio-controls">
            <label className="portfolio-search">
              <Search size={15} />
              <input
                aria-label="Search projects"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, ecosystems, technology"
              />
            </label>
            <label className="portfolio-sort">
              SORT BY{' '}
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option>Index</option>
                <option>Ecosystem</option>
                <option>Category</option>
              </select>
            </label>
          </div>
        </div>

        <div className="portfolio-filters">
          {portfolioCategories.map((item) => (
            <button
              className={category === item ? 'active' : ''}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              key={item}
            >
              {item}
              <span>
                {item === 'All Builds'
                  ? portfolioProjects.length
                  : portfolioProjects.filter((project) => project.category === item).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {listedProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  className="portfolio-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectVisual project={project} showTitle={false} />
                  <div className="portfolio-card-body">
                    <div className="card-labels">
                      <span className="portfolio-category">{project.category}</span>
                      <b>{signal(project)}</b>
                      {project.githubUrl && <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`${project.title} GitHub`}
                      >
                        <GitBranch size={14} />
                      </a>}
                    </div>
                    <button className="project-open" type="button" onClick={() => setSelected(project)} aria-label={`View ${project.title} project details`}>{project.title}<ArrowUpRight size={18} /></button>
                    <p className="portfolio-tagline">{project.tagline}</p>
                    <div className="portfolio-tags">
                      {project.techStack.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                      {project.techStack.length > 4 && <span>+{project.techStack.length - 4}</span>}
                    </div>
                  </div>
                  <div className="portfolio-card-foot">
                    <ExternalAction href={project.liveUrl} icon={<ExternalLink size={13} />}>
                      {projectLinkLabel(project)}
                    </ExternalAction>
                    <span>{project.rank} / VIEW BRIEF</span>
                  </div>
                </motion.article>
              ))}
          </AnimatePresence>
        </motion.div>
        {listedProjects.length === 0 && (
          <div className="portfolio-empty" role="status">
            <strong>No projects match this view.</strong>
            <span>Try another search or show all work.</span>
            <button type="button" onClick={() => { setQuery(''); setCategory('All Builds') }}>Show all projects</button>
          </div>
        )}
      </section>

      <section className="trophy-shelf">
        <div>
          <span className="mono-label">03 / RECOGNITION</span>
          <h2>
            Proof of
            <br />
            <em>shipping.</em>
          </h2>
        </div>
        <div className="trophy-grid">
          {trophies.map((trophy, index) => (
            <div key={trophy}>
              <span>0{index + 1}</span>
              <strong>{trophy}</strong>
              <ArrowUpRight size={15} />
            </div>
          ))}
        </div>
      </section>

      <footer className="portfolio-terminal">
        <span>
          <b className="terminal-prompt">WEB3SPELL LABS</b> · Building with intent.
        </span>
        <div className="terminal-addresses">
          <span>PRODUCTS · PROTOCOLS · INFRASTRUCTURE</span>
          <small>SELECTED WORK</small>
        </div>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.aside
              className="portfolio-modal"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-dialog-title"
            >
              <button
                className="portfolio-modal-close"
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
              <ProjectVisual project={selected} large />
              <span className="mono-label">{selected.rank} / ARCHITECTURE BRIEF</span>
              <h2 id="portfolio-dialog-title">{selected.title}</h2>
              <p className="portfolio-modal-tagline">{selected.tagline}</p>
              <div className="modal-data">
                <span>DOMAIN</span>
                <strong>{selected.category}</strong>
                <span>CHAIN</span>
                <strong>{selected.chain}</strong>
                <span>STATUS</span>
                <strong className="verified-text">
                  <Check size={14} />
                  {selected.statusText}
                </strong>
              </div>
              <p className="portfolio-description">{selected.description}</p>
              <div className="contract-box">
                <span>VERIFIED CONTRACT</span>
                {selected.verifiedContract ? (
                  <>
                    <code>{selected.verifiedContract}</code>
                    <button
                      type="button"
                      onClick={() => copyAddress(selected.verifiedContract!)}
                      aria-label="Copy contract address"
                    >
                      {copied === selected.verifiedContract ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </>
                ) : (
                  <code>NO ON-CHAIN CONTRACT PUBLISHED</code>
                )}
              </div>
              <p className="portfolio-description">
                <strong>HIGHLIGHT // </strong>
                {selected.highlight}
              </p>
              <div className="modal-links">
                <ExternalAction href={selected.liveUrl} icon={<ExternalLink size={14} />}>
                  {projectLinkLabel(selected)}
                </ExternalAction>
                <ExternalAction href={selected.githubUrl} icon={<GitBranch size={14} />}>
                  GITHUB
                </ExternalAction>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {copied && (
        <div className="copy-toast" role="status">
          COPIED TO CLIPBOARD // {copied.slice(0, 8)}...
        </div>
      )}
    </main>
  )
}
