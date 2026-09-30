import { PageShell } from '@/components/site-shell'
import { ProjectEnquiryForm } from '@/components/project-enquiry-form'
import { FaqAccordion } from '@/components/faq-accordion'

export default function ContactPage() {
  return (
    <PageShell dark>
      <section className="contact-stage" id="book-a-call">
        <div className="contact-stage-left">
          <h1>
            Bring us your
            <br />
            <em>hard problem.</em>
          </h1>
          <p className="contact-stage-lead">
            Tell us what you are building and where you are stuck. Senior principals reply within one business day.
          </p>
          <p className="contact-tertiary-email">
            Prefer direct email?{' '}
            <a href="mailto:hello@web3spell.com">hello@web3spell.com</a>
          </p>
        </div>

        <div className="contact-stage-right">
          <ProjectEnquiryForm />
        </div>
      </section>

      <section className="route-section contact-faq">
        <div className="contact-faq-head">
          <span className="section-kicker">COMMON QUESTIONS</span>
          <h2>
            Before we
            <br />
            <em>get to work.</em>
          </h2>
        </div>
        <FaqAccordion />
      </section>
    </PageShell>
  )
}
