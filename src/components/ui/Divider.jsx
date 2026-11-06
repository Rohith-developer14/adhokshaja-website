import { cn } from '@/lib/cn'

/** Fine champagne hairline. Full width by default (block); pass a width class to shorten. `fade` tapers the ends. Decorative. */
export function Divider({ fade = false, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'block h-px',
        fade
          ? 'bg-gradient-to-r from-transparent via-champagne/70 to-transparent'
          : 'bg-champagne/40',
        className,
      )}
    />
  )
}
