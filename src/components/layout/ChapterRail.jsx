import { Link } from 'react-router-dom'
import { chapterIds, chapters } from '@/content/site'
import { useActiveChapter } from '@/hooks/useActiveChapter'
import { cn } from '@/lib/cn'

/** Permanent left spine. The top bar no longer carries the whole index. */
export function ChapterRail() {
  const active = useActiveChapter(chapterIds)

  return (
    <nav
      aria-label="Chapters"
      className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col border-r border-champagne/20 bg-midnight-teal lg:flex"
    >
      <p className="flex h-24 items-end justify-center pb-3 font-sans text-[10px] uppercase tracking-[0.28em] text-champagne">
        Path
      </p>
      <ol className="flex flex-1 flex-col items-center justify-center gap-1">
        {chapters.map((chapter) => {
          const current = active === chapter.id
          return (
            <li key={chapter.id}>
              <Link
                to={chapter.to}
                aria-label={chapter.label}
                aria-current={current ? 'location' : undefined}
                className="group relative flex size-8 items-center justify-center"
              >
                <span
                  className={cn(
                    'block rounded-full transition-all duration-300',
                    current ? 'size-2 bg-champagne' : 'size-1.5 bg-light/35 group-hover:bg-light',
                  )}
                />
                <span className="pointer-events-none absolute left-9 hidden whitespace-nowrap bg-midnight-teal px-2 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-light group-hover:block group-focus-visible:block">
                  {chapter.label}
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
