import { Link } from 'react-router-dom'
import emblem from '@/assets/logos/adhokshaja-emblem.png'
import { hero } from '@/content/home'
import { site } from '@/content/site'
import { Button } from '@/components/ui'

const RIBBON = `${site.tagline}  ·  ${site.name}  ·  ${site.institution}  ·  `

export function Portal() {
  const fact = hero.facts[0]

  return (
    <>
      <section
        id="top"
        aria-labelledby="hero-title"
        className="grain snap-plate relative isolate flex min-h-svh flex-col overflow-hidden bg-midnight-teal text-light"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[-8%] size-[42rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,174,85,0.16),transparent_64%)]"
        />

        <div className="relative z-10 mt-auto grid items-end gap-10 px-5 pt-28 pb-10 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pb-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="font-sans text-eyebrow font-medium uppercase text-light-2">
              {hero.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-heading text-[clamp(4.4rem,12vw,8.75rem)] leading-[0.86] font-medium tracking-[-0.035em] uppercase"
            >
              <span className="mb-2 block text-[0.22em] tracking-[0.42em] text-light">Club</span>
              {hero.title}
            </h1>
            <p className="mt-5 font-heading text-[clamp(1.5rem,2vw,2.15rem)] text-champagne italic">
              {hero.tagline}
            </p>
            <p className="mt-5 max-w-xl text-body-lg text-light-2">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={hero.primaryCta.to} variant="primary-on-dark" arrow>
                {hero.primaryCta.label}
              </Button>
              <Button to={hero.secondaryCta.to} variant="secondary-on-dark">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-champagne/25 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-eyebrow font-medium uppercase text-champagne">{fact.label}</p>
                <p className="mt-2 font-heading text-3xl">{fact.value}</p>
              </div>
              <Link
                to={hero.ojasTeaser.to}
                className="max-w-xs font-sans text-sm text-light-2 underline decoration-champagne underline-offset-4 transition-colors hover:text-light"
              >
                <span className="block text-eyebrow font-medium uppercase text-champagne">
                  {hero.ojasTeaser.label}
                </span>
                <span className="mt-2 block">{hero.ojasTeaser.value}</span>
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <div className="relative size-[min(72vw,440px)]">
              <div
                aria-hidden="true"
                className="spin-slow absolute inset-0 rounded-full border border-dashed border-champagne/55"
              />
              <div
                aria-hidden="true"
                className="spin-slow-reverse absolute inset-5 rounded-full border border-champagne/30"
              />
              <div className="absolute inset-9 overflow-hidden rounded-full bg-warm-ivory shadow-[0_0_80px_rgba(226,174,85,0.22)]">
                <img
                  src={emblem}
                  alt=""
                  width="903"
                  height="732"
                  className="h-full w-full object-contain p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-champagne/25 bg-[#1c1612] py-3 text-champagne" aria-hidden="true">
        <div className="marquee-track gap-0">
          <p className="px-4 font-heading text-lg tracking-[0.18em] uppercase">{RIBBON.repeat(4)}</p>
          <p className="px-4 font-heading text-lg tracking-[0.18em] uppercase">{RIBBON.repeat(4)}</p>
        </div>
      </div>
    </>
  )
}
