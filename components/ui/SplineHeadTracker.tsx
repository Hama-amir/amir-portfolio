'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

type SplineNode = {
  name?: string
  parent?: SplineNode | null
  children?: SplineNode[]
  isMesh?: boolean
  type?: string
  kind?: string
  position?: { x?: number; y?: number; z?: number }
  rotation?: { x: number; y: number; z: number }
  visible?: boolean
}

type SplineRuntimeApp = {
  scene?: SplineNode
  findObjectByName?: (name: string) => SplineNode | undefined
  getAllObjects?: () => SplineNode[]
  requestRender?: () => void
}

interface SplineHeadTrackerProps {
  scene: string
  className?: string
  circleRadius?: number
  maxTiltX?: number
  maxTiltY?: number
  zoom?: number
  offsetY?: number
}

export function SplineHeadTracker({
  scene,
  className,
  circleRadius = 144,
  maxTiltX = 0.35,
  maxTiltY = 0.45,
  zoom = 1.4,
  offsetY = 15
}: SplineHeadTrackerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [app, setApp] = useState<SplineRuntimeApp | null>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const lastLogRef = useRef(0)
  const prevRot = useRef({ x: 0, y: 0 })
  const targetRef = useRef<SplineNode | null>(null)

  useEffect(() => {
    if (!app || !containerRef.current) return

    const runtimeApp = app

    const explicitNames = ['Head', 'head', 'Neck', 'neck', 'Robot', 'robot', 'Torso', 'torso', 'Body', 'body', 'Eye', 'eye']
    const byName = explicitNames
      .map((name) => runtimeApp.findObjectByName?.(name))
      .filter((node): node is SplineNode => Boolean(node))

    const chosen = byName[0] ?? null
    targetRef.current = chosen

    try {
      const topNames = byName.map((node) => node.name || '<unnamed>')
      ;(window as typeof window & { __splineNodeNames?: string[]; __splineChosenNodes?: string[] }).__splineNodeNames = topNames
      ;(window as typeof window & { __splineChosenNodes?: string[] }).__splineChosenNodes = topNames
      console.log('SplineHeadTracker: selected target', chosen?.name || '<unnamed>', {
        topCandidates: topNames,
      })
    } catch {
      // ignore debug hook errors
    }

    const handleMouseMove = (event: MouseEvent) => {
      posRef.current = { x: event.clientX, y: event.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const tick = () => {
      const container = containerRef.current
      const target = targetRef.current

      if (!container) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      const heroArea =
        (container.closest?.('[data-hero-area]') as Element | null) ||
        (container.closest?.('section') as Element | null) ||
        container

      const heroRect =
        typeof (heroArea as Element).getBoundingClientRect === 'function'
          ? (heroArea as Element).getBoundingClientRect()
          : container.getBoundingClientRect()

      const containerRect = container.getBoundingClientRect()

      try {
        ;(window as typeof window & { __splineHeroRect?: DOMRect }).__splineHeroRect = heroRect
      } catch {
        // ignore debug hook errors
      }

      // 0,0 is located exactly at the head of the robot (center of the container rect)
      const headX = containerRect.left + containerRect.width / 2
      const headY = containerRect.top + containerRect.height / 2

      // Clamp mouse coordinates to the Hero section boundaries
      let { x, y } = posRef.current
      if (x < heroRect.left) x = heroRect.left
      if (x > heroRect.right) x = heroRect.right
      if (y < heroRect.top) y = heroRect.top
      if (y > heroRect.bottom) y = heroRect.bottom

      // Relative coordinates from head
      const dx = x - headX
      const dy = y - headY

      // Boundaries relative to the head
      const x_left = heroRect.left - headX       // Negative
      const x_right = heroRect.right - headX     // Positive
      const y_top = heroRect.top - headY         // Negative
      const y_bottom = heroRect.bottom - headY   // Positive

      // Map to target rotation using piecewise linear interpolation
      let targetRotY = 0
      if (dx > 0 && x_right > 0) {
        targetRotY = (dx / x_right) * maxTiltY
      } else if (dx < 0 && x_left < 0) {
        targetRotY = (dx / x_left) * (-maxTiltY)
      }

      let targetRotX = 0
      if (dy < 0 && y_top < 0) {
        // Cursor is above the head -> negative tiltX (looks up in this Spline scene)
        targetRotX = (dy / y_top) * (-maxTiltX)
      } else if (dy > 0 && y_bottom > 0) {
        // Cursor is below the head -> positive tiltX (looks down in this Spline scene)
        targetRotX = (dy / y_bottom) * maxTiltX
      }

      // Smooth the transitions
      const alpha = 0.1
      prevRot.current.x += (targetRotX - prevRot.current.x) * alpha
      prevRot.current.y += (targetRotY - prevRot.current.y) * alpha

      if (target?.rotation) {
        target.rotation.x = prevRot.current.x
        target.rotation.y = prevRot.current.y
        runtimeApp.requestRender?.()
      }

      try {
        const now = Date.now()
        if (now - lastLogRef.current > 200) {
          console.log('SplineHeadTracker: headTrack (Cartesian)', {
            cursorRaw: posRef.current,
            cursorClamped: { x, y },
            heroRect,
            headCenter: { headX, headY },
            relCoords: { dx, dy },
            relBounds: { x_left, x_right, y_top, y_bottom },
            target: { x: targetRotX, y: targetRotY },
            applied: { x: prevRot.current.x, y: prevRot.current.y },
            targetName: target?.name || '<none>',
          })
          lastLogRef.current = now
        }
      } catch {
        // ignore debug errors
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [app, circleRadius, maxTiltX, maxTiltY])

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="loader" />
        </div>
      }
    >
      <div ref={containerRef} className={`${className} pointer-events-none`}>
        <div
          className="w-full h-full"
          style={{
            transform: `scale(${zoom}) translateY(${offsetY}%)`,
            transformOrigin: 'center center'
          }}
        >
          <Spline
            scene={scene}
            onLoad={(splineApp) => {
              try {
                ;(window as typeof window & { __splineApp?: unknown }).__splineApp = splineApp
              } catch {
                // ignore debug hook errors
              }

              console.log('SplineHeadTracker: onLoad - splineApp received')
              setApp(splineApp as SplineRuntimeApp)
            }}
          />
        </div>
      </div>
    </Suspense>
  )
}
