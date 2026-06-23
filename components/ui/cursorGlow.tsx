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
        // Center the glow on the cursor by subtracting half the glow size
        const offsetX = x - GLOW_SIZE / 2
        const offsetY = y - GLOW_SIZE / 2
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`
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
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.2), rgba(6,182,212,0.1) 35%, transparent 65%)',
        mixBlendMode: 'screen',
        boxShadow: '0 0 60px rgba(6,182,212,0.2)',
        filter: 'blur(20px)',
        left: 0,
        top: 0,
        zIndex: 40,
      }}
    />
  )
}
