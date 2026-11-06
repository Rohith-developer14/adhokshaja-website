import { Hero } from '@/features/home/Hero'
import { Container, Eyebrow, Heading, Reveal, Section } from '@/components/ui'

/**
 * TEMPORARY: stands in for sections 2-12 so nav anchors resolve and the
 * navbar can be checked over light backgrounds. Replaced in step 4.
 */
function UpNext() {
  return (
    <Section id="about" tone="mist" spacing="tight">
      <Container size="narrow">
        <Reveal>
          <Eyebrow className="text-ink-2">Step 4</Eyebrow>
          <Heading size="h2" className="mt-4 text-ink">
            About, Vision, Classes, Teams and the rest follow the hero.
          </Heading>
          <p className="mt-5 text-ink-2">
            This band is a stand-in. The remaining home sections are built after the hero is
            approved.
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
    </>
  )
}
