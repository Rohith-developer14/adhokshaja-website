import { cn } from '@/lib/cn'

/** Small uppercase label with a champagne hairline. */
export function Eyebrow({ children, rule = true, className, ...props }) {
  return (
    <p
      className={cn(
        'flex items-center gap-4 font-sans text-eyebrow font-medium uppercase',
        className,
      )}
      {...props}
    >
      {rule && <span aria-hidden="true" className="h-px w-10 shrink-0 bg-champagne" />}
      <span>{children}</span>
    </p>
  )
}
