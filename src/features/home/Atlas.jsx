import session1 from '@/assets/images/club/session-1.webp'
import session2 from '@/assets/images/club/session-2.webp'
import groupPhoto from '@/assets/images/club/group-pose.webp'
import teamPhoto from '@/assets/images/club/club-team.webp'
import { Container, Eyebrow, Heading } from '@/components/ui'

const frames = [
  {
    src: session1,
    alt: 'Students taking part in a Club Adhokshaja yoga session',
    label: 'Yoga session',
  },
  {
    src: groupPhoto,
    alt: 'Club members demonstrating a group yoga pose',
    label: 'Together in practice',
  },
  {
    src: teamPhoto,
    alt: 'Club Adhokshaja team members',
    label: 'Our community',
  },
  {
    src: session2,
    alt: 'Students participating in another yoga session',
    label: 'Mindful moments',
  },
]

export function Atlas() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-24 bg-mist-green text-ink">
      <Container className="py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow className="text-ink-2">Moments at Adhokshaja</Eyebrow>
            <Heading as="h2" id="gallery-heading" size="h1" className="mt-5">
              A glimpse into our community.
            </Heading>
          </div>
          <p className="max-w-xs text-sm text-ink-2">
            Four frames from sessions and gatherings. Swipe the strip to move through them.
          </p>
        </div>

        <ul
          tabIndex={0}
          aria-label="Club photographs"
          className="filmstrip mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-botanical"
        >
          {frames.map((frame) => (
            <li key={frame.label} className="w-[min(78vw,340px)] shrink-0 snap-start">
              <figure>
                <img
                  src={frame.src}
                  alt={frame.alt}
                  width="427"
                  height="421"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                  <span className="font-heading text-xl italic">{frame.label}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
