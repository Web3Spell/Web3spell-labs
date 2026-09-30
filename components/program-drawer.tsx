'use client'

import { useEffect, useRef, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, X } from 'lucide-react'

export type ProgramDetail = {
  number: string
  title: string
  description: string
  detail: string
  tags: string[]
  focus: string
  caseStudy: string
  deliverables: string[]
}

export function ProgramDrawer({ program, onClose, returnFocus }: { program: ProgramDetail | null; onClose: () => void; returnFocus?: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!program) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent | globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') { onClose(); return }
      if (event.key !== 'Tab') return
      const panel = document.querySelector<HTMLElement>('.program-drawer')
      const controls = panel?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')
      if (!controls?.length) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      returnFocus?.()
    }
  }, [program, onClose, returnFocus])

  function trapTab(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Tab') event.stopPropagation()
  }

  return <AnimatePresence>
    {program && <motion.div className="program-drawer-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .18 }}>
      <motion.aside className="program-drawer" role="dialog" aria-modal="true" aria-labelledby="program-drawer-title" onKeyDown={trapTab} initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
        <div className="program-drawer-header"><span className="section-kicker">{program.number} / PROGRAM DETAIL</span><button ref={closeRef} type="button" className="program-drawer-close" aria-label="Close program details" onClick={onClose}><X size={20} /></button></div>
        <div className="program-drawer-scroll">
          <h2 id="program-drawer-title">{program.title}</h2><p className="program-drawer-lead">{program.description}</p><p className="program-drawer-detail">{program.detail}</p>
          <div className="program-drawer-tags">{program.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <section className="drawer-section"><span className="section-kicker">HOW WE WORK</span><div className="drawer-timeline">
            <div><span>01</span><section><strong>Align on the constraint</strong><p>Agree on the user, technical context, success measure, and first milestone.</p></section></div>
            <div><span>02</span><section><strong>Design the path</strong><p>Map the experience and technical approach, then validate the important decisions early.</p></section></div>
            <div><span>03</span><section><strong>Ship and hand over</strong><p>Deliver production-ready work with clear documentation and a practical next-step plan.</p></section></div>
          </div></section>
          <section className="drawer-section"><span className="section-kicker">TYPICAL DELIVERABLES</span><ul className="drawer-deliverables">{program.deliverables.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></section>
          <Link className="drawer-case-study" href={`/work/${program.caseStudy}`} onClick={onClose}><span><small>RELATED CASE STUDY</small><strong>{program.caseStudy.replaceAll('-', ' ')}</strong></span><ArrowUpRight size={18} /></Link>
        </div>
        <div className="program-drawer-footer"><Link className="drawer-start-cta" href={`/contact?focus=${encodeURIComponent(program.focus)}`} onClick={onClose}>Start this conversation <ArrowUpRight size={18} /></Link></div>
      </motion.aside>
    </motion.div>}
  </AnimatePresence>
}
