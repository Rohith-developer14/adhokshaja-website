import { cn } from '@/lib/cn'

/**
 * `tone` sets background AND the matching text colours, so children can use
 * `text-current` / inherit and stay legible.
 */
const TONES = {
  midnight: 'bg-midnight-teal text-light',
  botanical: 'bg-deep-botanical text-light',
  mist: 'bg-mist-green text-ink',
  ivory: 'bg-warm-ivory text-ink',
}

const SPACING = {
  default: 'py-[clamp(4.5rem,3rem+6vw,9rem)]',
  tight: 'py-[clamp(3rem,2rem+4vw,6rem)]',
  none: '',
}

export function Section({ tone = 'ivory', spacing = 'default', className, children, ...props }) {
  return (
    <section
      className={cn('relative scroll-mt-20', TONES[tone], SPACING[spacing], className)}
      {...props}
    >
      {children}
    </section>
  )
}
