'use client'

import { useEffect, useRef } from 'react'

const GLOW_SIZE = 240

export function CursorGlow() {
  const elRef = useRef<HTMLDivElement | null>(null)
  const posRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    let raf: number | null = null

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const render = () => {
      const { x, y } = posRef.current
      if (el) {
        // Center the glow on the cursor by setting left/top (fixed positioning)
        const offsetX = x - GLOW_SIZE / 2
        const offsetY = y - GLOW_SIZE / 2
        el.style.left = `${offsetX}px`
        el.style.top = `${offsetY}px`

        // (debug logs removed)
      }
      raf = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf !== null) {
        cancelAnimationFrame(raf)
      }
    }
  }, [])

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      className="pointer-events-none fixed hidden md:block"
      style={{
        position: 'fixed',
        width: `${GLOW_SIZE}px`,
        height: `${GLOW_SIZE}px`,
        left: `-${GLOW_SIZE / 2}px`,
        top: `-${GLOW_SIZE / 2}px`,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.25), rgba(6,182,212,0.12) 40%, transparent 70%)',
        mixBlendMode: 'screen',
        boxShadow: '0 0 80px 20px rgba(6,182,212,0.15)',
        filter: 'blur(25px)',
        transformOrigin: '0 0',
        zIndex: 40,
        willChange: 'left, top',
      }}
    />
  )
}
