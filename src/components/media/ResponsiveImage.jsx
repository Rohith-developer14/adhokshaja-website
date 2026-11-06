import { cn } from '@/lib/cn'

/**
 * One image component for the whole site.
 *  - `priority`  : above-the-fold image (eager + high fetch priority)
 *  - otherwise   : lazy + async decode
 *  - width/height: always pass them, they reserve space and prevent layout shift
 *  - `srcSet`/`sizes`: pass when several widths exist
 */
export function ResponsiveImage({
  src,
  srcSet,
  sizes,
  alt = '',
  width,
  height,
  priority = false,
  className,
  ...props
}) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'auto' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn('block max-w-full', className)}
      {...props}
    />
  )
}
