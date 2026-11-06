import { cn } from '@/lib/cn'

const SIZES = {
  default: 'max-w-[1280px]',
  wide: 'max-w-[1440px]',
  narrow: 'max-w-[720px]', // comfortable reading measure
}

export function Container({ as: Tag = 'div', size = 'default', className, ...props }) {
  return (
    <Tag
      className={cn('mx-auto w-full px-5 sm:px-8 lg:px-12', SIZES[size], className)}
      {...props}
    />
  )
}
