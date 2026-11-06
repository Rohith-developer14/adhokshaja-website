import { useEffect, useState } from 'react'

/**
 * The chapter whose top has crossed a reading line 40% down the viewport.
 * Walking the list backwards means the deepest matching room wins.
 */
export function useActiveChapter(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    let frame = 0

    const measure = () => {
      const line = window.innerHeight * 0.4
      let current = ''
      for (let i = ids.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(ids[i])
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) {
          current = ids[i]
          break
        }
      }
      setActive((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
