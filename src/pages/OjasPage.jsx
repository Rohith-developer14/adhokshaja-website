import { Container, Eyebrow, Heading, Section } from '@/components/ui'

/** TEMPORARY stub. The full OJAS 2026 page is built in step 6. */
export function OjasPage() {
  return (
    <Section tone="midnight" className="min-h-[70svh] pt-40">
      <Container>
        <Eyebrow className="text-champagne">OJAS 2026</Eyebrow>
        <Heading as="h1" size="h1" className="mt-6">
          1st Inter-PES Institutions Yoga and Fitness Championship
        </Heading>
        <p className="mt-6 max-w-xl text-light-2">The full event page is built in step 6.</p>
      </Container>
    </Section>
  )
}
