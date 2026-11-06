import { contact, site } from '@/content/site'
import { Container, Eyebrow, Fill, Heading } from '@/components/ui'

export function Threshold() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="snap-plate scroll-mt-24 flex min-h-[88svh] flex-col justify-end bg-midnight-teal text-light"
    >
      <Container className="pb-16">
        <Eyebrow className="text-champagne">Stay connected</Eyebrow>
        <Heading as="h2" id="contact-heading" size="display" className="mt-6 max-w-4xl text-light">
          Begin your journey with Adhokshaja.
        </Heading>
        <p className="mt-5 max-w-xl text-body-lg text-light-2">
          Have a question or want to be part of the community? Reach out through the club&apos;s
          official channels.
        </p>

        <dl className="mt-12 grid gap-8 border-t border-champagne/25 pt-8 sm:grid-cols-3">
          <div>
            <dt className="font-sans text-eyebrow font-medium uppercase text-champagne">Campus</dt>
            <dd className="mt-3 text-light">{site.location}</dd>
          </div>
          <div>
            <dt className="font-sans text-eyebrow font-medium uppercase text-champagne">Instagram</dt>
            <dd className="mt-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-3xl text-light underline decoration-champagne/70 underline-offset-4 hover:text-champagne"
              >
                {contact.instagramHandle}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-sans text-eyebrow font-medium uppercase text-champagne">Email</dt>
            <dd className="mt-3 text-light">
              <Fill value={contact.email} />
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
