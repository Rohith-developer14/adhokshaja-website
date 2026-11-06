import { contact, site } from '@/content/site'
import { Button, Container, Eyebrow } from '@/components/ui'

export function OjasPage() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-midnight-teal pt-28 text-light">
      <p
        aria-hidden="true"
        className="stroke-gold pointer-events-none absolute -right-[4vw] top-16 font-heading text-[30vw] leading-none font-medium"
      >
        2026
      </p>
      <Container className="relative flex min-h-[calc(100svh-7rem)] flex-col justify-end pb-16">
        <Eyebrow className="text-champagne">1st Inter-PES Institutions</Eyebrow>
        <h1 className="mt-4 font-heading text-[clamp(5rem,16vw,11rem)] leading-[0.8] font-medium uppercase">
          Ojas
        </h1>
        <p className="mt-6 max-w-xl font-heading text-h3 text-light italic">
          Yoga and Fitness Championship
        </p>
        <p className="mt-4 text-light-2">{site.location}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/" variant="primary-on-dark">
            Back to the club
          </Button>
          <Button href={contact.instagram} variant="secondary-on-dark">
            Instagram
          </Button>
        </div>
        <p className="mt-8 max-w-lg text-sm leading-7 text-light-2">
          Dates, categories and registration will be shared through official club announcements,
          including {contact.instagramHandle}.
        </p>
      </Container>
    </section>
  )
}
