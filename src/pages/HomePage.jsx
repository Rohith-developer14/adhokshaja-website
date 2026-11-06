import { Hero } from '@/features/home/Hero'
import { JoinClub } from '@/features/home/JoinClub'
import { Container, Eyebrow, Heading, Reveal, Section } from '@/components/ui'

/** Temporary stand-in for homepage sections being completed in later batches. */
function UpNext() {
  return (
    <Section id="about" tone="mist" spacing="tight">
      <Container size="narrow">
        <Reveal>
          <Eyebrow className="text-ink-2">Discover Adhokshaja</Eyebrow>
          <Heading size="h2" className="mt-4 text-ink">
            About, Vision, Classes, Teams and Events are coming next.
          </Heading>
          <p className="mt-5 text-ink-2">
            This section is a temporary placeholder while the remaining club information is
            confirmed. The recruitment section below is built from the supplied club poster.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <UpNext />
      <JoinClub />
    </>
  )
}
