import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ChapterRail } from './ChapterRail'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollToTop } from './ScrollToTop'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
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
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5" aria-hidden="true">
      <div className="h-full bg-champagne" style={{ width: `${progress * 100}%` }} />
    </div>
  )
}

export function SiteLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-sm bg-warm-ivory px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <ChapterRail />
      <div className="lg:pl-16">
        <Navbar />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
