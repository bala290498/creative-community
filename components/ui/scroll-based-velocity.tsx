"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react"

interface ScrollVelocityContainerProps {
  children: React.ReactNode
  className?: string
}

const ScrollVelocityContainer = ({ children, className }: ScrollVelocityContainerProps) => {
  return (
    <div className={`${className} w-full max-w-none`}>
      {children}
    </div>
  )
}

export { ScrollVelocityContainer }

interface ScrollVelocityRowProps {
  children: React.ReactNode
  baseVelocity?: number
  direction?: number
  className?: string
}

const ScrollVelocityRow = ({ 
  children, 
  baseVelocity = 5, 
  direction = 1,
  className 
}: ScrollVelocityRowProps) => {
  const baseX = useMotionValue(0)
  const scrollVelocity = useRef(0)
  const lastScrollTime = useRef(performance.now())
  const containerRef = useRef<HTMLDivElement>(null)
  const motionDivRef = useRef<HTMLDivElement>(null)
  const itemWidth = useRef(0)

  useEffect(() => {
    // Measure the width of one complete item (text + spacing)
    const measureWidth = () => {
      const motionDiv = motionDivRef.current
      if (motionDiv) {
        // Get all top-level spans (each represents one complete item: text + spacing)
        const itemSpans = Array.from(motionDiv.children).filter(
          (child) => child.tagName === 'SPAN'
        ) as HTMLElement[]
        
        if (itemSpans.length >= 2) {
          const firstItem = itemSpans[0]
          // Measure the exact width of one complete item
          // This includes the text content and the spacing span inside it
          const measuredWidth = firstItem.offsetWidth
          
          if (measuredWidth > 0) {
            itemWidth.current = measuredWidth
            
            // Set initial position based on direction for seamless start
            if (direction > 0) {
              baseX.set(0)
            } else {
              baseX.set(-itemWidth.current)
            }
          }
        } else if (itemSpans.length === 1) {
          const firstItem = itemSpans[0]
          const measuredWidth = firstItem.offsetWidth
          if (measuredWidth > 0) {
            itemWidth.current = measuredWidth
            
            // Set initial position based on direction
            if (direction > 0) {
              baseX.set(0)
            } else {
              baseX.set(-itemWidth.current)
            }
          }
        }
      }
    }
    
    // Use multiple timeouts to ensure DOM is ready
    const timeout1 = setTimeout(measureWidth, 100)
    const timeout2 = setTimeout(measureWidth, 300)
    const timeout3 = setTimeout(measureWidth, 600)
    
    // Re-measure on resize
    window.addEventListener('resize', measureWidth)
    
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      window.removeEventListener('resize', measureWidth)
    }
  }, [children, direction, baseX])

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const now = performance.now()
          const timeDelta = now - lastScrollTime.current
          const currentScrollY = window.scrollY
          const scrollDelta = currentScrollY - lastScrollY
          
          if (timeDelta > 0) {
            const velocity = Math.abs(scrollDelta / timeDelta) * 50
            scrollVelocity.current = Math.min(velocity, 200)
            lastScrollY = currentScrollY
            lastScrollTime.current = now
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("wheel", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleScroll)
    }
  }, [])

  useAnimationFrame((t, delta) => {
    if (itemWidth.current <= 0) return
    
    let moveBy = direction * baseVelocity * (delta / 1000)
    
    if (scrollVelocity.current > 0) {
      moveBy += direction * scrollVelocity.current * (delta / 1000) * 2
      scrollVelocity.current *= 0.92
    }

    const currentX = baseX.get()
    let newX = currentX + moveBy

    // Seamless infinite loop - use the same approach for both directions
    if (direction > 0) {
      // Forward direction: loop in range [0, itemWidth)
      // Use the same robust approach as reverse direction
      let normalized = ((newX % itemWidth.current) + itemWidth.current) % itemWidth.current
      newX = normalized
    } else {
      // Reverse direction: loop in range [-itemWidth, 0)
      // This works fine, so use the same pattern
      let normalized = newX % itemWidth.current
      if (normalized > 0) {
        normalized = normalized - itemWidth.current
      }
      // Ensure it's in the correct negative range
      if (normalized >= 0) {
        normalized = normalized - itemWidth.current
      }
      newX = normalized
    }
    
    baseX.set(newX)
  })

  const x = useTransform(baseX, (v) => `${v}px`)

  // Create multiple copies with spacing for seamless infinite loop
  // Use enough copies to cover viewport width + extra for smooth scrolling
  // Each span contains the text + spacing, so they sit directly next to each other
  const copies = Array.from({ length: 10 }, (_, i) => (
    <span key={i} className="inline-block whitespace-nowrap m-0 p-0">
      {children}
      <span className="inline-block w-8"></span>
    </span>
  ))

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <motion.div
        ref={motionDivRef}
        className="inline-flex shrink-0 whitespace-nowrap m-0 p-0"
        style={{ x }}
      >
        {copies}
      </motion.div>
    </div>
  )
}

export { ScrollVelocityRow }
