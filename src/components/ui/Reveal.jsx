import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/cn'

/**
 * Fade + 16px rise when scrolled into view. The only scroll-reveal pattern in
 * the site. Reduced-motion visitors get the final state immediately.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className, style, children, ...props }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms', ...style }}
      className={cn(
        'transition duration-700 ease-[var(--ease-soft)]',
        'motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
