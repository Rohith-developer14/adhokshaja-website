import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

const BASE =
  'group inline-flex items-center justify-center gap-3 rounded-sm ' +
  'font-sans text-[0.9375rem] font-medium tracking-wide whitespace-nowrap ' +
  'transition-colors duration-300 ease-[var(--ease-soft)] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne'

// Sizes are a prop, not a className override: two competing utilities on one
// element are resolved by stylesheet order, not class order.
const SIZES = {
  md: 'min-h-12 px-7 py-3',
  sm: 'min-h-11 px-5 py-2',
}

const VARIANTS = {
  // Antique gold with night text. Holds on both ivory and temple night.
  primary:
    'bg-champagne text-midnight-teal border border-champagne hover:bg-warm-ivory hover:border-warm-ivory',
  'primary-on-dark':
    'bg-champagne text-midnight-teal border border-champagne hover:bg-warm-ivory hover:border-warm-ivory',
  secondary:
    'bg-transparent text-ink border border-ink/30 hover:bg-ink hover:text-light hover:border-ink',
  'secondary-on-dark':
    'bg-transparent text-light border border-light/40 hover:border-champagne hover:text-champagne',
  ghost: 'bg-transparent text-current border border-transparent hover:underline underline-offset-8',
}

/**
 * Polymorphic button:
 *   <Button to="/#about">   -> router link (hash links supported)
 *   <Button href="https://..."> -> plain anchor
 *   <Button onClick>          -> <button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  arrow = false,
  className,
  children,
  ...props
}) {
  const classes = cn(BASE, SIZES[size], VARIANTS[variant], className)
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          size={18}
          strokeWidth={1.5}
          className="transition-transform duration-300 ease-[var(--ease-soft)] group-hover:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
