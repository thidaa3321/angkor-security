import { useEffect, useRef, useState } from 'react'

export function useCounter(
  target: number,
  duration = 2000,
  triggerRef: React.RefObject<Element>
): number {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = triggerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 60
          const increment = target / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, triggerRef])

  return count
}
