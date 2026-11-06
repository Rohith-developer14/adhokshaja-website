import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import mark from '@/assets/logos/adhokshaja-emblem-sm.png'
import { navCta, navLinks, site } from '@/content/site'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollLock } from '@/hooks/useScrollLock'
import { Button } from '@/components/ui'
import { cn } from '@/lib/cn'

function Brand({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${site.name}, home`}
      className="flex items-center gap-3 text-light"
    >
      <img src={mark} alt="" width="47" height="32" className="h-8 w-auto" />
      <span className="font-heading text-[1.35rem] font-medium uppercase tracking-[0.14em]">
        {site.shortName}
      </span>
    </Link>
  )
}

const FOCUSABLE = 'a[href], button:not([disabled])'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)
  const { pathname, hash, key } = useLocation()
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  useScrollLock(open)

  // Close the drawer whenever navigation happens.
  useEffect(() => setOpen(false), [pathname, hash, key])

  // Focus trap + Escape while the drawer is open; restore focus on close.
  useEffect(() => {
    if (!open) return
    const drawer = drawerRef.current
    const toggle = toggleRef.current
    // The drawer is inert (not display/visibility-hidden) while closed, so it is
    // focusable as soon as `open` commits.
    drawer.querySelector(FOCUSABLE)?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      // DOM order is: toggle (in the header), then the drawer links.
      const items = [toggle, ...drawer.querySelectorAll(FOCUSABLE)]
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      toggle?.focus({ preventScroll: true })
    }
  }, [open])

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        'border-b',
        scrolled || open
          ? 'border-champagne/15 bg-midnight-teal/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Brand onClick={() => setOpen(false)} />

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="relative py-2 font-sans text-[0.9375rem] text-light-2 transition-colors duration-300 hover:text-light after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-champagne after:transition-transform after:duration-500 hover:after:scale-x-100 motion-reduce:after:transition-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button to={navCta.to} variant="primary-on-dark" size="sm">
              {navCta.label}
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-12 items-center justify-center text-light lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} strokeWidth={1.25} /> : <Menu size={26} strokeWidth={1.25} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile drawer. Deliberately NOT inside <header>: the header's backdrop-filter
        would become the containing block for this fixed element and collapse it. */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        inert={!open}
        className={cn(
          'fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-midnight-teal lg:hidden',
          'transition-opacity duration-500 ease-[var(--ease-soft)] motion-reduce:transition-none',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 pt-8 pb-10 sm:px-8">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.label} className="border-b border-champagne/15">
                <Link
                  to={link.to}
                  className="flex min-h-16 items-center justify-between py-3 font-heading text-[2rem] leading-none text-light"
                  style={{
                    transitionDelay: open ? `${80 + i * 50}ms` : '0ms',
                  }}
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="font-sans text-eyebrow tracking-[0.18em] text-champagne"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Button to={navCta.to} variant="primary-on-dark" className="w-full">
              {navCta.label}
            </Button>
            <p className="mt-6 text-center font-heading text-lg text-light-2 italic">
              {site.tagline}
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}
