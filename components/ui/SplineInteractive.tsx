'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineInteractiveProps {
  scene: string
  className?: string
}

export function SplineInteractive({ scene, className }: SplineInteractiveProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      const nx = (e.clientX - w / 2) / (w / 2) // -1..1
      const ny = (e.clientY - h / 2) / (h / 2)
      targetRef.current = { x: nx, y: ny }
    }

    const animate = () => {
      const el = containerRef.current
      if (el) {
        const { x, y } = targetRef.current
        const rotateY = x * 8 // degrees
        const rotateX = -y * 8
        // subtle translate to give parallax
        const tx = x * 6
        const ty = y * 6

        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader" />
        </div>
      }
    >
      <div
        ref={containerRef}
        className={className}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        <Spline scene={scene} className="w-full h-full" />
      </div>
    </Suspense>
  )
}
