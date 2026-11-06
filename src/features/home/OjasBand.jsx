import { Button, Container, Eyebrow } from '@/components/ui'

export function OjasBand() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="snap-plate scroll-mt-24 relative flex min-h-svh items-end overflow-hidden bg-warm-ivory text-ink"
    >
      <p
        aria-hidden="true"
        className="stroke-gold pointer-events-none absolute -top-4 right-[-2vw] font-heading text-[22vw] leading-none font-medium"
      >
        OJAS
      </p>
      <Container className="relative z-10 pt-32 pb-16">
        <Eyebrow className="text-ink-2">Experiences together</Eyebrow>
        <p className="mt-8 font-sans text-eyebrow font-medium uppercase text-deep-botanical">
          Featured event
        </p>
        <h2 id="events-heading" className="mt-3 font-heading text-[clamp(4rem,10vw,8rem)] leading-[0.86]">
          OJAS 2026
        </h2>
        <p className="mt-6 max-w-xl text-body-lg text-ink-2">
          1st Inter-PES Institutions Yoga and Fitness Championship.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-ink-2">
          Explore Club Adhokshaja activities and special events. Event dates and registration
          information will be shared through official club announcements.
        </p>
        <Button to="/ojas-2026" arrow className="mt-10">
          Explore OJAS 2026
        </Button>
      </Container>
    </section>
  )
}
