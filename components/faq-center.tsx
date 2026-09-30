'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { FaqAccordion, projectFaqs } from '@/components/faq-accordion'

const categories = ['All questions', ...Array.from(new Set(projectFaqs.map((item) => item.category)))]

export function FaqCenter() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All questions')
  const filtered = useMemo(() => projectFaqs.filter((item) => {
    const matchesCategory = category === 'All questions' || item.category === category
    const matchesQuery = `${item.q} ${item.a}`.toLowerCase().includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  }), [category, query])

  return <div className="faq-center">
    <label className="faq-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search FAQs</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a question or topic" /></label>
    <div className="faq-categories" role="group" aria-label="Filter questions by topic">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <p className="faq-results" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'answer' : 'answers'}</p>
    {filtered.length ? <FaqAccordion items={filtered} /> : <div className="faq-empty"><strong>No matching answers.</strong><p>Try a different search or choose another topic.</p><button type="button" onClick={() => { setQuery(''); setCategory('All questions') }}>Clear filters</button></div>}
  </div>
}
