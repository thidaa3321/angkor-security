import { useEffect, useRef, useState } from 'react'

interface UseRevealOptions {
  threshold?: number
  once?: boolean
}

export function useReveal<T extends Element = HTMLDivElement>(
  options: UseRevealOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.1, once = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isVisible]
}
