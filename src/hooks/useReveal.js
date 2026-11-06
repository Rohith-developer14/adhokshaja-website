import { useEffect, useRef, useState } from 'react'

/**
 * Reports once an element has scrolled into view. One shared pattern for every
 * scroll-triggered reveal. Falls back to "visible" where IntersectionObserver
 * is unavailable.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
