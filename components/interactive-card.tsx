'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'

export function InteractiveCard({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-.5, .5], [5, -5]), { stiffness: 180, damping: 24, mass: .55 })
  const rotateY = useSpring(useTransform(pointerX, [-.5, .5], [-5, 5]), { stiffness: 180, damping: 24, mass: .55 })

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== 'mouse' || !ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    pointerX.set(x - .5)
    pointerY.set(y - .5)
    ref.current.style.setProperty('--mouse-x', `${x * 100}%`)
    ref.current.style.setProperty('--mouse-y', `${y * 100}%`)
    ref.current.style.setProperty('--parallax-x', `${(.5 - x) * 8}px`)
    ref.current.style.setProperty('--parallax-y', `${(.5 - y) * 8}px`)
  }

  function onPointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
    if (!ref.current) return
    ref.current.style.setProperty('--mouse-x', '-100%')
    ref.current.style.setProperty('--mouse-y', '-100%')
    ref.current.style.setProperty('--parallax-x', '0px')
    ref.current.style.setProperty('--parallax-y', '0px')
  }

  return <motion.div ref={ref} className={`interactive-card ${className}`} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}>{children}</motion.div>
}
