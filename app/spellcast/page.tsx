import { ArrowUpRight, Play } from 'lucide-react'
import { PageShell } from '@/components/site-shell'
import { episodes } from '@/lib/content'

export default function SpellcastPage() {
  return (
    <PageShell dark>
      <section className="spellcast-route-hero">
        <div className="spellcast-route-hero-copy">
          <span className="section-kicker">06 / SPELLCAST BY WEB3SPELL</span>
          <h1>
            Real conversations.
            <br />
            <em>Web3 ideas.</em>
          </h1>
          <p>
            A field recording of founders, protocol architects, and DevRel operators thinking out loud about stablecoins, zero-knowledge systems, ecosystem scaling, and the people who use them.
          </p>
          <div className="spellcast-route-actions">
            <a
              className="text-cta"
              href="https://www.youtube.com/playlist?list=PLPvD5K6HssNA"
              target="_blank"
              rel="noreferrer"
            >
              Watch full playlist <ArrowUpRight size={16} />
            </a>
            <a
              className="text-cta text-cta-secondary"
              href="https://www.youtube.com/@Web3Spell"
              target="_blank"
              rel="noreferrer"
            >
              @Web3Spell on YouTube <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="route-section spellcast-episodes-grid">
        {episodes.map((episode) => (
          <article key={episode.number} className="spellcast-embed-card">
            <div className="spellcast-embed-top">
              <span className="spellcast-embed-num">{episode.number}</span>
              <span className="spellcast-embed-meta">
                <Play size={11} fill="currentColor" /> {episode.duration} · {episode.published}
              </span>
            </div>

            <div className="spellcast-embed-video">
              <iframe
                src={`https://www.youtube.com/embed/${episode.videoId}?rel=0`}
                title={episode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="spellcast-embed-body">
              <span className="spellcast-embed-guest">{episode.guest}</span>
              <h2>{episode.title}</h2>
              <p>{episode.summary}</p>
              <a
                href={episode.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="spellcast-embed-link"
              >
                <span>Watch on YouTube</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
