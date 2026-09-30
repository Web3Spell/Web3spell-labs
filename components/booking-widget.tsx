'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Mail, X } from 'lucide-react'

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/rythme/30min'

export function BookingWidget() {
  const themedUrl = `${calendlyUrl}${calendlyUrl.includes('?') ? '&' : '?'}hide_gdpr_banner=1&background_color=0d110e&text_color=eef0eb&primary_color=c7ff22`
  return (
    <div className="calendly-shell">
      <iframe
        className="calendly-frame"
        src={themedUrl}
        title="Book a call with Web3Spell Labs"
        loading="lazy"
      />
    </div>
  )
}

export function BookingButton({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }
      if (event.key !== 'Tab') return
      const panel = document.querySelector<HTMLElement>('.booking-drawer')
      const controls = panel?.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),iframe')
      if (!controls?.length) return
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        className={`booking-trigger ${className}`}
        type="button"
        onClick={() => setOpen(true)}
      >
        <span>Book a call</span>
        <ArrowUpRight size={15} />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="booking-backdrop"
                role="presentation"
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) setOpen(false)
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.section
                  className="booking-drawer"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="booking-title"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                >
                  <div className="booking-drawer-head">
                    <div>
                      <span className="section-kicker">A FIRST CONVERSATION · 30 MIN</span>
                      <h2 id="booking-title">Book a call.</h2>
                      <p className="booking-drawer-sub">
                        Pick a slot directly below to discuss architecture, scope, or developer ecosystem programs.
                      </p>
                    </div>
                    <button
                      ref={closeRef}
                      type="button"
                      className="booking-drawer-close"
                      onClick={() => setOpen(false)}
                      aria-label="Close booking panel"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="booking-drawer-quickbar">
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="booking-quick-pill"
                    >
                      <Calendar size={14} />
                      <span>Open calendar in new tab</span>
                      <ArrowUpRight size={13} />
                    </a>
                    <a href="mailto:hello@web3spell.com" className="booking-quick-pill">
                      <Mail size={14} />
                      <span>hello@web3spell.com</span>
                    </a>
                  </div>

                  <BookingWidget />
                </motion.section>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}
