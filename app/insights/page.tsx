'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/site-shell';
import { insightArticles, type InsightArticle } from '@/lib/insights-data';

const CATEGORIES: Array<'All' | InsightArticle['category']> = [
  'All',
  'Protocol Engineering',
  'Zero-Knowledge',
  'Market Structure',
  'Design & UX',
  'Ecosystem & DevRel',
];

const CASE_LABELS: Record<InsightArticle['relatedCaseStudy'], string> = {
  civitas: 'Civitas (SVM ZK Payroll)',
  chainpot: 'ChainPot (Certora Verified ROSCA)',
  'divergence-router': 'Divergence Router (Somnia CLOB)',
  'core-nexus': 'Core Nexus (250+ Builder Hackathon)',
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | InsightArticle['category']>('All');

  const filtered =
    activeCategory === 'All'
      ? insightArticles
      : insightArticles.filter((a) => a.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <PageShell dark>
      {/* Spacious Hero */}
      <section className="insights-v2-hero">
        <div className="case-container">
          <div className="insights-v2-hero__top">
            <span className="section-kicker">06 / INSIGHTS &amp; FIELD NOTES</span>
            <span className="insights-v2-hero__count">
              {insightArticles.length} TECHNICAL DISPATCHES
            </span>
          </div>

          <div className="insights-v2-hero__grid">
            <h1 className="case-display-h1">
              Field notes on
              <br />
              <em>protocol systems.</em>
            </h1>
            <p className="insights-v2-hero__lead">
              Architecture breakdowns, zero-knowledge circuit patterns, and developer ecosystem playbooks written directly by our engineering and design bench.
            </p>
          </div>

          {/* Easy Topic Filter Bar */}
          <nav className="insights-v2-filter" aria-label="Filter insights by discipline">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === 'All'
                  ? insightArticles.length
                  : insightArticles.filter((a) => a.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    isActive
                      ? 'insights-v2-filter__pill is-active'
                      : 'insights-v2-filter__pill'
                  }
                >
                  <span>{category}</span>
                  <small>{count}</small>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Spacious Editorial Feed */}
      <section className="insights-v2-body">
        <div className="case-container">
          {/* Featured Article (Spacious 2-Column Split, Single Clear Thesis) */}
          {featured && (
            <Link
              href={`/insights/${featured.slug}`}
              className="insights-v2-lead"
            >
              <div className="insights-v2-lead__left">
                <div className="insights-v2-meta">
                  <span className="insights-v2-meta__num">{featured.number}</span>
                  <span className="insights-v2-meta__cat">{featured.category}</span>
                  <span className="insights-v2-meta__dot">·</span>
                  <span className="insights-v2-meta__time">{featured.readTime}</span>
                </div>

                <h2 className="insights-v2-lead__title">{featured.title}</h2>
              </div>

              <div className="insights-v2-lead__right">
                <p className="insights-v2-lead__excerpt">{featured.excerpt}</p>

                <div className="insights-v2-lead__tags">
                  {featured.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="insights-v2-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="insights-v2-foot">
                  <div className="insights-v2-foot__context">
                    <small>FROM CASE STUDY</small>
                    <strong>{CASE_LABELS[featured.relatedCaseStudy]}</strong>
                  </div>

                  <span className="insights-v2-cta">
                    Read field note <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Spacious 2-Column Grid for Remaining Dispatches */}
          {rest.length > 0 && (
            <div className="insights-v2-grid">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="insights-v2-card"
                >
                  <div className="insights-v2-card__top">
                    <div className="insights-v2-meta">
                      <span className="insights-v2-meta__num">{article.number}</span>
                      <span className="insights-v2-meta__cat">{article.category}</span>
                      <span className="insights-v2-meta__dot">·</span>
                      <span className="insights-v2-meta__time">{article.readTime}</span>
                    </div>

                    <h3 className="insights-v2-card__title">{article.title}</h3>
                    <p className="insights-v2-card__excerpt">{article.excerpt}</p>
                  </div>

                  <div className="insights-v2-card__bottom">
                    <div className="insights-v2-lead__tags">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="insights-v2-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="insights-v2-foot">
                      <div className="insights-v2-foot__context">
                        <small>FROM CASE STUDY</small>
                        <strong>{CASE_LABELS[article.relatedCaseStudy]}</strong>
                      </div>

                      <span className="insights-v2-cta">
                        Read <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="work-archive-callout">
        <div className="case-container work-archive-callout-inner">
          <div className="work-archive-callout-head">
            <span className="section-kicker">WORKING ON A HARD PROTOCOL PROBLEM?</span>
            <h2 className="case-display-h2">
              Bring us into your
              <br />
              <em>architecture review.</em>
            </h2>
          </div>
          <div className="work-archive-callout-copy">
            <p>
              Whether you are designing an order-book router, proving client-side ZK circuits, or planning a 250-builder ecosystem hackathon, we work directly with founding teams.
            </p>
            <div className="work-archive-callout-actions">
              <Link className="solid-cta" href="/contact">
                <span>Start a project</span>
                <ArrowUpRight size={17} />
              </Link>
              <Link className="case-plain-archive-link" href="/work">
                Explore Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
