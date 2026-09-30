import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { PageShell } from '@/components/site-shell'
import { richServices } from '@/lib/services-data'
import { caseStudies } from '@/lib/content'
import { BookingButton } from '@/components/booking-widget'

export function generateStaticParams() {
  return richServices.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = richServices.find((item) => item.slug === slug)
  if (!service) notFound()

  const parentService = service.parentSlug
    ? richServices.find((item) => item.slug === service.parentSlug)
    : null

  const linkedCaseStudy = caseStudies.find(
    (study) => study.slug === service.relatedCaseStudy
  )

  return (
    <PageShell dark>
      {/* 1. Breadcrumb + Hero + Hard Metrics Ledger */}
      <section className="service-detail-hero">
        <div className="service-detail-breadcrumb">
          <Link href="/services" className="service-breadcrumb-back">
            <ArrowLeft size={14} />
            <span>All Capabilities</span>
          </Link>
          <span className="service-breadcrumb-sep">/</span>
          {parentService ? (
            <>
              <Link
                href={`/services/${parentService.slug}`}
                className="service-breadcrumb-parent"
              >
                {parentService.categoryLabel.replace('/', '')}
              </Link>
              <span className="service-breadcrumb-sep">/</span>
            </>
          ) : null}
          <span className="service-breadcrumb-current">{service.eyebrow}</span>
        </div>

        <div className="service-detail-hero-grid">
          <div>
            <span className="section-kicker">
              {service.number} / {service.eyebrow}
            </span>
            <h1>
              {service.title}
              <br />
              <em>{service.titleAccent}</em>
            </h1>
          </div>
          <div className="service-detail-hero-aside">
            <p>{service.description}</p>
            <div className="service-detail-hero-actions">
              <Link className="hero-primary" href="/contact">
                Scope this engagement <ArrowUpRight size={16} />
              </Link>
              <BookingButton className="booking-nav" />
            </div>
          </div>
        </div>

        {/* 3-Column Hard Metrics Strip */}
        <div className="service-detail-metrics" aria-label="Capability proof metrics">
          {service.metrics.map((metric) => (
            <div key={metric.label} className="service-detail-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Founder's Field Perspective (Unboxed Editorial Contrast) */}
      <section className="service-detail-founder">
        <div className="service-detail-founder-head">
          <span className="section-kicker">01 / FOUNDER PERSPECTIVE</span>
          <h2>{service.founderNoteTitle}</h2>
        </div>

        <div className="service-detail-founder-grid">
          <div className="service-founder-col service-founder-problem">
            <span className="service-founder-tag">WHY MOST TEAMS STALL HERE</span>
            <p>{service.founderProblem}</p>
          </div>
          <div className="service-founder-col service-founder-solution">
            <span className="service-founder-tag is-accent">
              HOW WE ENGINEER IT AT WEB3SPELL LABS
            </span>
            <p>{service.founderSolution}</p>
          </div>
        </div>
      </section>

      {/* 3. Deep Technical Capability Breakdown (4 Unboxed Architecture Blocks) */}
      <section className="service-detail-capabilities">
        <div className="service-detail-section-head">
          <span className="section-kicker">02 / TECHNICAL ARCHITECTURE &amp; SCOPE</span>
          <div className="service-detail-section-title">
            <h2>
              What we actually
              <br />
              <em>design and ship.</em>
            </h2>
            <p>
              No vague retainers or slide-deck theater. Every engagement in this practice is decomposed into concrete engineering and design workstreams.
            </p>
          </div>
        </div>

        <div className="service-capabilities-list">
          {service.capabilities.map((cap, index) => (
            <article key={cap.title} className="service-capability-row">
              <div className="service-capability-meta">
                <span className="service-capability-idx">0{index + 1}</span>
                <span className="service-capability-tag">{cap.tag}</span>
              </div>
              <div className="service-capability-main">
                <h3>{cap.title}</h3>
                <p>{cap.body}</p>
              </div>
              <div className="service-capability-specs">
                <span className="service-specs-label">SPECIFICATIONS &amp; ARTIFACTS</span>
                <ul>
                  {cap.specs.map((spec) => (
                    <li key={spec}>
                      <Check size={14} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Execution Cadence (4-Step Process Ledger) */}
      <section className="service-detail-process">
        <div className="service-detail-section-head">
          <span className="section-kicker">03 / EXECUTION CADENCE</span>
          <div className="service-detail-section-title">
            <h2>
              How an engagement
              <br />
              <em>runs week by week.</em>
            </h2>
            <p>
              Direct Slack/Telegram channel with our founders and engineers, weekly shippable milestones, and clean handoff to your internal team.
            </p>
          </div>
        </div>

        <div className="service-process-ledger">
          {service.processSteps.map((step) => (
            <article key={step.step} className="service-process-step">
              <div className="service-process-top">
                <span className="service-process-num">{step.step}</span>
                <span className="service-process-duration">{step.duration}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="service-process-output">
                <span>OUTPUT</span>
                <strong>{step.output}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Who It's For + Deliverables + Tech Stack + Connected Case Study Proof */}
      <section className="service-detail-ledger">
        <div className="service-detail-ledger-grid">
          <div className="service-ledger-col">
            <span className="section-kicker">WHO THIS IS BUILT FOR</span>
            <ul className="service-ledger-list">
              {service.whoItsFor.map((item) => (
                <li key={item}>
                  <span className="service-ledger-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-ledger-col">
            <span className="section-kicker">TANGIBLE DELIVERABLES</span>
            <ul className="service-ledger-list is-deliverables">
              {service.deliverables.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-ledger-col">
            <span className="section-kicker">PRODUCTION STACK &amp; TOOLING</span>
            <div className="service-stack-pills">
              {service.techStack.map((tech) => (
                <span key={tech} className="service-stack-pill">
                  {tech}
                </span>
              ))}
            </div>

            {linkedCaseStudy && (
              <div className="service-connected-proof">
                <span className="section-kicker">
                  SHIPPED PROOF · {linkedCaseStudy.client.toUpperCase()}
                </span>
                <h3>{linkedCaseStudy.title}</h3>
                <p>{service.relatedCaseStudyNote}</p>
                <div className="service-connected-links">
                  <Link
                    href={`/work/${linkedCaseStudy.slug}`}
                    className="service-EditorialLink"
                  >
                    Read {linkedCaseStudy.client} case study <ArrowUpRight size={15} />
                  </Link>
                  {linkedCaseStudy.liveUrl && (
                    <a
                      href={linkedCaseStudy.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="service-EditorialLink is-muted"
                    >
                      Inspect live deployment <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Sibling & Parent Capability Navigation (So Every Navbar Link Cross-Links Cleanly) */}
      <section className="service-detail-related">
        <div className="service-detail-related-top">
          <span className="section-kicker">
            04 / RELATED IN {service.categoryLabel.toUpperCase()}
          </span>
          <Link href="/services" className="service-EditorialLink is-muted">
            View all 09 capabilities <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="service-related-grid">
          {service.subLinks.map((sub) => (
            <Link key={sub.href} href={sub.href} className="service-related-item">
              <div className="service-related-item-top">
                <span>{sub.tag}</span>
                <ArrowUpRight size={16} />
              </div>
              <h3>{sub.title}</h3>
              <p>{sub.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Closing Conversion Section */}
      <section className="service-editorial-closing">
        <div>
          <span className="section-kicker">READY WHEN YOU ARE</span>
          <h2>
            Bring us your
            <br />
            <em>hardest problem.</em>
          </h2>
          <p>
            Whether you need a focused 4-week intervention in {service.title.toLowerCase()} or a complete 0-to-Hero protocol build, you work directly with our founders and senior engineers.
          </p>
        </div>
        <div className="service-editorial-closing-actions">
          <Link className="hero-primary" href="/contact">
            Start a project <ArrowUpRight size={16} />
          </Link>
          <BookingButton className="booking-nav" />
        </div>
      </section>
    </PageShell>
  )
}
