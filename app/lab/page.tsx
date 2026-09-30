import { ArrowUpRight } from 'lucide-react'
import { PageShell, RouteHero } from '@/components/site-shell'

const team = [
  {
    number: '01',
    name: 'Rythme Nagrani',
    role: 'Co-Founder, Protocol Engineering & DevRel',
    image: '/images/team/rythme.jpg',
    detail:
      'Works across zero-knowledge systems, account abstraction, EVM architecture, and developer programs. Track prize winner at TOKEN2049 Origins; recipient of a Compound Protocol grant for ChainPot.',
    links: [
      ['GitHub', 'https://github.com/rythmern02'],
      ['X', 'https://x.com/RythmeNagr64107'],
      ['Portfolio', 'https://rythmastic.vercel.app'],
    ],
  },
  {
    number: '02',
    name: 'Swarna Nagrani',
    role: 'Co-Founder, Design & Operations',
    image: '/images/team/swarna.jpg',
    detail:
      'Leads design and operations, shaping clear product experiences and supporting the teams building technically ambitious products.',
    links: [
      ['X', 'https://x.com/swarnasn29'],
      ['Portfolio', 'https://swarn.framer.website'],
    ],
  },
]

export default function LabPage() {
  return (
    <PageShell dark>
      <RouteHero
        kicker="07 / THE CORE LAB"
        title={
          <>
            10 builders.
            <br />
            <em>Built to ship.</em>
          </>
        }
        intro="Web3Spell Labs is a 10-person engineering, product design, and developer relations studio led by two hands-on co-founders and an 8-person specialist bench."
      />
      <section className="route-section lab-grid team-profile-grid">
        {team.map((person) => (
          <article key={person.number} className="lab-profile-card">
            <div className="lab-card-top">
              <div className="lab-card-portrait">
                <img
                  src={person.image}
                  alt={`${person.name}, ${person.role}`}
                  loading="lazy"
                  className="founder-portrait-img"
                />
              </div>
              <div className="lab-card-meta">
                <span>{person.number} / CO-FOUNDER</span>
                <h2>{person.name}</h2>
                <p>{person.role}</p>
              </div>
            </div>
            <strong>{person.detail}</strong>
            <div className="profile-links">
              {person.links.map(([label, href]) => (
                <a href={href} key={label} target="_blank" rel="noreferrer">
                  {label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="route-section lab-roster-section">
        <div className="core-team-statement">
          <span className="section-kicker">10-MEMBER CORE STUDIO · 02 CO-FOUNDERS + 08 SPECIALISTS</span>
          <h3>
            <em>08 core team members</em> working across the agency in{' '}
            <span>product management</span>, <span>frontend engineering</span>,{' '}
            <span>full-stack Web3</span>, and <span>backend protocol systems</span>.
          </h3>
        </div>
      </section>

      <section className="work-archive-callout">
        <div className="case-container work-archive-callout-inner">
          <div className="work-archive-callout-head">
            <span className="section-kicker">HOW WE WORK</span>
            <h2 className="case-display-h2">
              Senior builders
              <br />
              <em>in the room.</em>
            </h2>
          </div>
          <div className="work-archive-callout-copy">
            <p>
              Senior people stay close to the work. We partner with founding teams from product definition through implementation, formal verification, launch, and developer adoption.
            </p>
            <div className="work-archive-callout-actions">
              <a className="solid-cta" href="/contact">
                <span>Start a project</span>
                <ArrowUpRight size={17} />
              </a>
              <a className="case-plain-archive-link" href="/careers">
                View open roles →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
