import { PageShell, RouteHero } from '@/components/site-shell'
import { FaqCenter } from '@/components/faq-center'

export default function FaqPage() {
  return <PageShell dark>
    <RouteHero kicker="10 / HELP DESK" title={<>Good questions.<br /><em>Clear answers.</em></>} intro="Practical details about how Web3Spell scopes, designs, and ships product and ecosystem work." />
    <section className="route-section faq-center-section"><FaqCenter /></section>
  </PageShell>
}
