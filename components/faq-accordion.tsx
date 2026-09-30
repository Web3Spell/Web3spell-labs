'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

export const projectFaqs = [
  { category: 'Engagement & Pricing', q: 'What is a typical engagement length, and how does pricing work?', a: 'It depends on the scope and the stage of the product. We start by agreeing on the outcome, team, and first milestone, then propose a fixed scope or a time-based engagement with clear checkpoints.' },
  { category: 'Engagement & Pricing', q: 'Do you work with pre-seed teams, or only funded protocols?', a: 'We work with teams at different stages when the problem is concrete and the people closest to it are involved. Early conversations help us find a useful first scope.' },
  { category: 'Web3 & Technology', q: 'Which chains and stacks do you specialize in?', a: 'Our portfolio spans Solana, Ethereum and EVM systems, Bitcoin L2 work, and emerging ecosystems. The right stack follows the product and its constraints.' },
  { category: 'Process & Delivery', q: 'Who owns the code and design?', a: 'Ownership and licensing are set out in the project agreement before work begins. Third-party and open-source components retain their own licenses.' },
  { category: 'Team & Collaboration', q: 'How does collaboration work across time zones?', a: 'Web3Spell is based in New Delhi and works with global teams. We agree on overlap hours, written updates, and decision owners at the start of an engagement.' },
  { category: 'Process & Delivery', q: 'Can you embed with our engineers, or do you only run full builds?', a: 'Both models work. We can take a defined build from discovery through delivery or join an existing team for a focused engineering, design, or ecosystem workstream.' },
  { category: 'Process & Delivery', q: 'What should we bring to the first conversation?', a: 'A short description of the product, its current stage, the main constraint, and the outcome you want is enough. We can work through the open questions together.' },
  { category: 'Process & Delivery', q: 'What happens at handoff?', a: 'The team shares the agreed code, design files, implementation notes, and documentation for the work in scope, then reviews the next steps with your team.' },
  { category: 'Web3 & Technology', q: 'Can you help before a protocol or product is live?', a: 'Yes. Product strategy, architecture, prototypes, and developer experience can all be useful before launch. We shape the first scope around the product stage.' },
  { category: 'Team & Collaboration', q: 'Where is Web3Spell Labs based?', a: 'Web3Spell Labs is based in New Delhi and works with teams globally.' },
]

export function FaqAccordion({ items = projectFaqs }: { items?: typeof projectFaqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return <div className="faq-list">{items.map((item, index) => {
    const open = openIndex === index
    return <article className={`faq-item${open ? ' is-open' : ''}`} key={item.q}>
      <h3><button type="button" aria-expanded={open} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(open ? null : index)}><span>{item.q}</span><Plus size={18} aria-hidden="true" /></button></h3>
      <div id={`faq-answer-${index}`} className="faq-answer" aria-hidden={!open}><div><p>{item.a}</p></div></div>
    </article>
  })}</div>
}
