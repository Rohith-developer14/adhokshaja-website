import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import session from '@/assets/images/club/session-2.webp'
import { site } from '@/content/site'
import { Container, Eyebrow, Heading } from '@/components/ui'

export function Manuscript() {
  return (
    <section id="about" className="scroll-mt-24 bg-warm-ivory text-ink">
      <Container className="grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <p className="font-heading text-[clamp(4.5rem,8vw,7.5rem)] leading-none text-deep-botanical">
            01
          </p>
          <Eyebrow className="mt-6 text-ink-2">Discover Adhokshaja</Eyebrow>
          <Heading as="h2" size="h1" className="mt-5">
            A space to pause, breathe and reconnect.
          </Heading>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="font-heading text-h3 leading-snug italic">
            Club Adhokshaja is the yoga club of {site.institution}.
          </p>
          <p className="mt-6 text-body-lg text-ink-2">
            It provides a platform for students and faculty to practise yoga and meditation while
            encouraging physical wellbeing and mental health.
          </p>
          <p className="mt-5 leading-8 text-ink-2">
            Beyond the practice itself, the club aims to create a welcoming campus community where
            people can learn, participate and grow together.
          </p>
          <Link
            to="/#classes"
            className="mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-deep-botanical underline decoration-champagne underline-offset-4"
          >
            Explore our classes
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>

          <figure className="mt-12 max-w-[420px]">
            <img
              src={session}
              alt="Students participating in a Club Adhokshaja yoga session"
              width="427"
              height="421"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="mt-4 font-heading text-2xl italic">
              Beyond Senses, Within Self.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}

export function Purpose() {
  return (
    <section id="vision" aria-labelledby="vision-heading" className="scroll-mt-24">
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="snap-plate flex flex-col justify-between bg-midnight-teal px-5 py-20 text-light sm:px-10 lg:px-14 lg:py-24">
          <div>
            <Eyebrow className="text-champagne">Our purpose</Eyebrow>
            <p className="mt-6 max-w-md text-light-2">
              We believe yoga can be a meaningful part of campus life, encouraging people to make
              time for their physical and mental wellbeing.
            </p>
          </div>
          <div className="mt-16">
            <p className="font-sans text-eyebrow font-medium uppercase text-champagne">Vision</p>
            <h2 id="vision-heading" className="mt-4 font-heading text-h2 text-light">
              A campus culture that values mindfulness, self-awareness and holistic wellbeing.
            </h2>
          </div>
        </div>

        <div className="snap-plate flex flex-col justify-between bg-champagne px-5 py-20 text-midnight-teal sm:px-10 lg:px-14 lg:py-24">
          <p className="font-heading text-[clamp(4rem,8vw,7rem)] leading-none">02</p>
          <div className="mt-16">
            <p className="font-sans text-eyebrow font-medium uppercase">Mission</p>
            <p className="mt-4 font-heading text-h2">
              Practise yoga and meditation, and grow through shared experiences.
            </p>
            <p className="mt-6 max-w-md text-sm leading-7">
              For students and faculty of {site.institution}. Opportunities to practise, and to
              meet other people doing the same.
            </p>
          </div>
        </div>
      </div>
      <p className="bg-warm-ivory px-5 py-4 text-center text-xs text-ink-2 sm:px-8">
        Draft vision and mission wording — confirm with the club before treating these as official
        statements.
      </p>
    </section>
  )
}
