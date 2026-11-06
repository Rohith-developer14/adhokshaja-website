import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import mark from '@/assets/logos/adhokshaja-emblem-sm.png'
import { contact, navCta, navLinks, site } from '@/content/site'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollLock } from '@/hooks/useScrollLock'
import { Button } from '@/components/ui'
import { cn } from '@/lib/cn'

function InstagramMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Brand({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${site.name}, home`}
      className="flex items-center gap-3 text-light"
    >
      <img src={mark} alt="" width="49" height="40" className="h-10 w-auto" />
      <span className="font-heading text-[1.35rem] font-medium uppercase tracking-[0.16em]">
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

  useEffect(() => setOpen(false), [pathname, hash, key])

  useEffect(() => {
    if (!open) return
    const drawer = drawerRef.current
    const toggle = toggleRef.current
    drawer.querySelector(FOCUSABLE)?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
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
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 lg:left-16',
          scrolled || open
            ? 'border-champagne/20 bg-midnight-teal/90 backdrop-blur-md'
            : 'border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-[4.5rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Brand onClick={() => setOpen(false)} />

          <div className="flex items-center gap-5">
            <Link
              to="/ojas-2026"
              className="hidden font-sans text-[0.75rem] font-medium uppercase tracking-[0.2em] text-light-2 transition-colors hover:text-light sm:inline"
            >
              OJAS 2026
            </Link>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adhokshaja on Instagram"
              className="hidden text-light transition-colors hover:text-champagne md:inline-flex"
            >
              <InstagramMark />
            </a>
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
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 pt-6 pb-10 sm:px-8">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.label} className="border-b border-champagne/15">
                <Link
                  to={link.to}
                  className="flex min-h-14 items-center justify-between font-heading text-[1.75rem] leading-none text-light"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="font-sans text-eyebrow text-champagne">
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
            <p className="mt-6 text-center font-heading text-lg text-light-2 italic">{site.tagline}</p>
          </div>
        </nav>
      </div>
    </>
  )
}
