import { cn } from '@/lib/cn'

const SIZES = {
  display: 'text-display font-medium',
  h1: 'text-h1 font-medium',
  h2: 'text-h2 font-medium',
  h3: 'text-h3 font-semibold',
}

/** `as` is the semantic level; `size` is the visual one. They are independent. */
export function Heading({ as: Tag = 'h2', size = 'h2', className, ...props }) {
  return <Tag className={cn('font-heading text-balance', SIZES[size], className)} {...props} />
}
