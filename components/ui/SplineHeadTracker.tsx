'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineHeadTrackerProps {
  scene: string
  className?: string
}

export function SplineHeadTracker({ scene, className }: SplineHeadTrackerProps) {
  const splineRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [app, setApp] = useState<any>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!app || !containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)
    const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY)

    // Limit rotation distance to prevent extreme angles
    const clampedDistance = Math.min(distance, window.innerHeight * 0.6)
    const rotX = Math.sin(angle) * 0.3 // radians
    const rotY = Math.cos(angle) * 0.3

    try {
      // Try to find and rotate the head object
      // Adjust these node names based on your actual Spline scene structure
      const headObject = app.getObjectByName('Head') || app.getObjectByName('Robot') || app.getObjectByName('head')
      if (headObject) {
        headObject.rotation.x = rotX
        headObject.rotation.y = rotY
      }
    } catch (err) {
      // Silently fail if objects don't exist
    }
  }

  useEffect(() => {
    if (!app) return

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [app])

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader" />
        </div>
      }
    >
      <div ref={containerRef} className={className}>
        <Spline
          ref={splineRef}
          scene={scene}
          onLoad={(splineApp) => {
            setApp(splineApp)
          }}
        />
      </div>
    </Suspense>
  )
}
