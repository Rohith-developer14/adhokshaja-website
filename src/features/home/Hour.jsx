import session from '@/assets/images/club/session-1.webp'
import { Eyebrow } from '@/components/ui'

export function Hour() {
  return (
    <section id="classes" aria-labelledby="classes-heading" className="scroll-mt-24 grid lg:min-h-svh lg:grid-cols-2">
      <div className="snap-plate flex flex-col justify-between bg-warm-ivory px-5 py-20 text-ink sm:px-10 lg:px-14 lg:py-16">
        <Eyebrow className="text-ink-2">Practise with us</Eyebrow>
        <div className="my-12">
          <p className="font-sans text-eyebrow font-medium uppercase text-deep-botanical">Everyday class</p>
          <p className="mt-3 font-heading text-[clamp(6rem,14vw,10rem)] leading-none tracking-[-0.04em]">
            4–5
          </p>
          <h2 id="classes-heading" className="mt-4 font-heading text-h2">
            Make time for yourself.
          </h2>
          <p className="mt-5 max-w-md leading-8 text-ink-2">
            Join the everyday yoga practice organised by Club Adhokshaja. Take a break from your
            routine and make wellbeing a part of campus life. Open for all, as stated in the club
            presentation.
          </p>
        </div>
        <p className="max-w-md text-xs leading-6 text-ink-2">
          Confirm the time period, venue and current class schedule with the club before publishing
          additional details.
        </p>
      </div>

      <div className="snap-plate flex items-center justify-center bg-midnight-teal px-6 py-16">
        <img
          src={session}
          alt="Students practising yoga together"
          width="427"
          height="421"
          loading="lazy"
          className="size-[min(78vw,400px)] rounded-full object-cover ring-1 ring-champagne/50"
        />
      </div>
    </section>
  )
}
