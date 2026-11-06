import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router does not scroll on navigation. This restores the expected
 * behaviour: /#section scrolls to that section, any other route starts at top.
 * Keyed on `key` so clicking the same anchor twice still scrolls.
 */
export function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // Wait a frame so lazily rendered routes have mounted.
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView()
        else window.scrollTo(0, 0)
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}
