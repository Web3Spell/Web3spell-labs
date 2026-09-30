import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/site-shell';
import { caseStudies } from '@/lib/content';
import {
  getAdjacentInsights,
  getInsightBySlug,
  insightArticles,
} from '@/lib/insights-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return {
      title: 'Insight Not Found | Web3Spell Labs',
    };
  }

  return {
    title: `${article.title} | Insights | Web3Spell Labs`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const { prev, next } = getAdjacentInsights(article.slug);
  const relatedCase = caseStudies.find((c) => c.slug === article.relatedCaseStudy);
  const allTakeaways = article.sections.flatMap((sec) => sec.takeaways ?? []);

  return (
    <PageShell dark>
      <article className="insight-reader">
        <div className="case-container">
          {/* Top Breadcrumb & Dispatch Code */}
          <div className="insight-article__topbar">
            <Link href="/insights" className="insight-article__back">
              <ArrowLeft size={14} /> All Insights
            </Link>
            <span className="insight-article__code">
              {article.number} / {article.category} · {article.readTime}
            </span>
          </div>

          {/* Spacious Editorial Hero */}
          <header className="insight-article__header">
            <div className="insight-article__meta-row">
              <span>{article.date}</span>
              <span className="insight-article__dot">·</span>
              <span>
                By {article.author} ({article.authorRole})
              </span>
            </div>

            <h1 className="insight-article__title">{article.title}</h1>
            <p className="insight-article__subtitle">{article.subtitle}</p>
          </header>

          {/* Main 2-Column Editorial Layout: Sidebar Context + Spacious Article Body */}
          <div className="insight-article__layout">
            <aside className="insight-article__sidebar">
              {allTakeaways.length > 0 && (
                <div className="insight-article__sidebar-block">
                  <span className="insight-article__sidebar-label">TL;DR TAKEAWAYS</span>
                  <ul className="insight-article__takeaways">
                    {allTakeaways.map((point: string, idx: number) => (
                      <li key={idx}>
                        <span className="insight-article__takeaway-idx">
                          0{idx + 1}
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedCase && (
                <div className="insight-article__sidebar-block">
                  <span className="insight-article__sidebar-label">
                    CONNECTED CASE STUDY
                  </span>
                  <Link
                    href={`/work/${relatedCase.slug}`}
                    className="insight-article__related-link"
                  >
                    <span className="insight-article__related-title">
                      {relatedCase.title}
                    </span>
                    <span className="insight-article__related-note">
                      {relatedCase.body}
                    </span>
                    <span className="insight-article__related-cta">
                      Inspect Case Study <ArrowUpRight size={13} />
                    </span>
                  </Link>
                </div>
              )}
            </aside>

            <div className="insight-article__content">
              {article.sections.map((section, idx: number) => (
                <section key={idx} className="insight-article__section">
                  <div className="insight-article__section-head">
                    <h2>{section.heading}</h2>
                  </div>

                  {section.body.map((paragraph: string, pIdx: number) => (
                    <p key={pIdx} className="insight-article__paragraph">
                      {paragraph}
                    </p>
                  ))}

                  {section.codeSnippet && (
                    <div className="insight-article__codeblock">
                      <div className="insight-article__codeblock-bar">
                        <span>{section.codeSnippet.label}</span>
                        <span>SOURCE</span>
                      </div>
                      <pre>
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>

          {/* Next / Previous Dispatch Navigation */}
          <nav
            className="insight-article__pagination"
            aria-label="Adjacent field notes"
          >
            {prev ? (
              <Link
                href={`/insights/${prev.slug}`}
                className="insight-article__page-link"
              >
                <span className="insight-article__page-dir">
                  ← PREVIOUS NOTE ({prev.number})
                </span>
                <strong className="insight-article__page-title">
                  {prev.title}
                </strong>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/insights/${next.slug}`}
                className="insight-article__page-link insight-article__page-link--next"
              >
                <span className="insight-article__page-dir">
                  NEXT NOTE ({next.number}) →
                </span>
                <strong className="insight-article__page-title">
                  {next.title}
                </strong>
              </Link>
            )}
          </nav>
        </div>
      </article>
    </PageShell>
  );
}
