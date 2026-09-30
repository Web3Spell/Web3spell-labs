'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

type NodePoint = { x: number; y: number; phase: number; radius: number }
type Pulse = { edge: number; started: number; duration: number }

const seed: NodePoint[] = [
  { x: .08, y: .22, phase: .3, radius: 2.2 }, { x: .17, y: .55, phase: 1.1, radius: 2.7 },
  { x: .25, y: .17, phase: 2.7, radius: 2.1 }, { x: .31, y: .39, phase: .8, radius: 3.2 },
  { x: .39, y: .73, phase: 3.2, radius: 2.3 }, { x: .44, y: .22, phase: 1.6, radius: 2.4 },
  { x: .51, y: .53, phase: 4.1, radius: 3.1 }, { x: .59, y: .13, phase: 2.1, radius: 2.2 },
  { x: .64, y: .78, phase: .1, radius: 2.4 }, { x: .72, y: .36, phase: 3.5, radius: 2.8 },
  { x: .79, y: .61, phase: 1.9, radius: 2.1 }, { x: .87, y: .2, phase: 4.8, radius: 2.7 },
  { x: .93, y: .49, phase: 2.3, radius: 2.3 }, { x: .16, y: .83, phase: 5.1, radius: 1.9 },
  { x: .35, y: .9, phase: 3.8, radius: 2.0 }, { x: .55, y: .91, phase: 1.3, radius: 1.9 },
  { x: .77, y: .9, phase: 5.5, radius: 2.1 }, { x: .91, y: .79, phase: 2.9, radius: 2.0 },
]

export function NetworkVisual({ ambient = false }: { ambient?: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const root = rootRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !root || !ctx) return

    let visible = false
    let frame = 0
    let lastPaint = 0
    let elapsed = 0
    let nextPulse = 1.2
    let isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pulses: Pulse[] = []
    const nodes = seed.map((node) => ({ ...node }))
    const edges: [number, number][] = []
    nodes.forEach((node, i) => nodes.slice(i + 1).forEach((other, j) => {
      const dx = node.x - other.x
      const dy = node.y - other.y
      if (Math.hypot(dx, dy) < .39 && (i + j) % 3 !== 0) edges.push([i, i + j + 1])
    }))

    const resize = () => {
      const bounds = root.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(bounds.width * ratio))
      canvas.height = Math.max(1, Math.round(bounds.height * ratio))
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      paint(0, true)
    }

    const paint = (time: number, frozen = false) => {
      const width = root.clientWidth
      const height = root.clientHeight
      if (!width || !height) return
      ctx.clearRect(0, 0, width, height)
      const t = frozen ? 0 : time
      const positions = nodes.map((node) => ({
        x: (node.x + Math.sin(t * .00022 + node.phase) * .012) * width,
        y: (node.y + Math.cos(t * .00018 + node.phase * 1.7) * .018) * height,
      }))

      if (!frozen && t >= nextPulse && edges.length) {
        pulses.push({ edge: Math.floor(Math.random() * edges.length), started: t, duration: 1000 })
        nextPulse = t + 1000 + Math.random() * 2000
      }
      for (let index = pulses.length - 1; index >= 0; index--) {
        if (t - pulses[index].started > pulses[index].duration) pulses.splice(index, 1)
      }

      edges.forEach(([a, b], edgeIndex) => {
        const start = positions[a]
        const end = positions[b]
        const pulse = pulses.find((item) => item.edge === edgeIndex)
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.strokeStyle = pulse ? 'rgba(199,255,34,.56)' : 'rgba(199,255,34,.13)'
        ctx.lineWidth = pulse ? 1.1 : .7
        ctx.stroke()
        if (pulse) {
          const progress = Math.min(1, (t - pulse.started) / pulse.duration)
          const x = start.x + (end.x - start.x) * progress
          const y = start.y + (end.y - start.y) * progress
          ctx.beginPath()
          ctx.arc(x, y, 2.3, 0, Math.PI * 2)
          ctx.fillStyle = '#c7ff22'
          ctx.shadowColor = '#c7ff22'
          ctx.shadowBlur = 10
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      nodes.forEach((node, index) => {
        const point = positions[index]
        ctx.beginPath()
        ctx.arc(point.x, point.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#c7ff22'
        ctx.globalAlpha = index % 4 === 0 ? .88 : .58
        ctx.fill()
        ctx.globalAlpha = 1
      })
    }

    const animate = (now: number) => {
      frame = 0
      if (!visible || paused || isReduced) return
      if (now - lastPaint >= 1000 / 30) {
        elapsed += Math.min(now - (lastPaint || now), 1000 / 20)
        lastPaint = now
        paint(elapsed)
      }
      frame = window.requestAnimationFrame(animate)
    }
    const start = () => { if (!frame && visible && !paused && !isReduced) frame = window.requestAnimationFrame(animate) }
    const stop = () => { if (frame) window.cancelAnimationFrame(frame); frame = 0 }
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) { if (isReduced || paused) paint(0, true); else start() }
      else stop()
    }, { threshold: .05 })
    intersection.observe(root)
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(root)
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => { isReduced = motionPreference.matches; setReducedMotion(isReduced); if (isReduced) { stop(); paint(0, true) } else start() }
    motionPreference.addEventListener('change', updateMotion)
    setReducedMotion(isReduced)
    resize()

    return () => {
      stop()
      intersection.disconnect()
      resizeObserver.disconnect()
      motionPreference.removeEventListener('change', updateMotion)
    }
  }, [paused])

  return <div ref={rootRef} className={`network-visual${ambient ? ' is-ambient' : ''}`}>
    <canvas ref={canvasRef} aria-hidden="true" />
    {!ambient && <div className="network-visual-footer"><span><i /> {paused || reducedMotion ? 'SYSTEMS IDLE' : 'SYSTEMS ONLINE'}</span><button type="button" disabled={reducedMotion} onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume network animation' : 'Pause network animation'}>{paused ? <Play size={12} /> : <Pause size={12} />}</button></div>}
  </div>
}
