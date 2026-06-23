'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const elRef = useRef<HTMLDivElement | null>(null)
  const posRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    let raf = 0

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const render = () => {
      const { x, y } = posRef.current
      if (el) {
        el.style.transform = `translate3d(${x - 120}px, ${y - 120}px, 0)`
        el.style.opacity = '1'
      }
      raf = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={elRef}
      aria-hidden
      className="pointer-events-none fixed z-[999] hidden md:block"
      style={{
        width: 240,
        height: 240,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.18), rgba(6,182,212,0.08) 30%, transparent 60%)',
        mixBlendMode: 'screen',
        transform: 'translate3d(-9999px,-9999px,0)',
        transition: 'opacity 120ms linear',
      }}
    />
  )
}
