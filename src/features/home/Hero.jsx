import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { hero } from '@/content/home'
import { Button, Divider, Eyebrow } from '@/components/ui'
import { ResponsiveImage } from '@/components/media/ResponsiveImage'

const delay = (ms) => ({ '--delay': `${ms}ms` })

export function Hero() {
  const { image } = hero

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-midnight-teal text-light"
    >
      {/* Photography: fades in, then drifts very slowly. Decorative. */}
      <div aria-hidden="true" className="anim-fade absolute inset-0 -z-20" style={delay(0)}>
        <ResponsiveImage
          priority
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          width={image.width}
          height={image.height}
          alt=""
          className="anim-drift h-full w-full max-w-none object-cover object-[68%_center] md:object-center"
        />
      </div>

      {/* Teal overlays: flat wash, bottom fade for the info strip, left fade for text. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-midnight-teal/30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight-teal via-midnight-teal/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight-teal/85 via-midnight-teal/40 to-transparent max-lg:from-midnight-teal/40"
      />
      {/* Soft shaft of light */}
      <div
        aria-hidden="true"
        className="anim-sweep pointer-events-none absolute -top-1/4 right-[6%] -z-10 hidden h-[150%] w-[26%] bg-gradient-to-b from-eucalyptus/25 via-eucalyptus/5 to-transparent blur-3xl md:block"
      />

      {hero.isTemporary && (
        <p
          data-temporary-placeholder
          className="absolute top-24 right-5 z-10 rounded-sm border border-dashed border-light/50 bg-midnight-teal/70 px-3 py-1.5 text-xs tracking-wide text-light backdrop-blur-sm sm:right-8 lg:right-12"
        >
          Temporary placeholder image
        </p>
      )}

      {/* Content */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pt-28 pb-32 sm:px-8 sm:pt-32 sm:pb-40 lg:justify-center lg:px-12 lg:pb-44">
        <div className="max-w-3xl">
          <Eyebrow className="anim-rise text-champagne" style={delay(250)}>
            {hero.eyebrow}
          </Eyebrow>

          <h1 id="hero-title" className="mt-6 sm:mt-8">
            <span
              className="anim-rise block font-sans text-sm font-medium tracking-[0.5em] text-light-2 uppercase sm:text-base"
              style={delay(400)}
            >
              {hero.titlePrefix}
            </span>
            <span
              className="anim-rise mt-2 block font-heading text-display font-medium text-light"
              style={delay(550)}
            >
              {hero.title}
            </span>
          </h1>

          <div className="anim-rise mt-5 flex items-center gap-5 sm:mt-7" style={delay(750)}>
            <Divider className="w-10 shrink-0 bg-champagne sm:w-14" />
            <p className="font-heading text-h3 font-medium text-light italic">{hero.tagline}</p>
          </div>

          <p
            className="anim-rise mt-5 max-w-xl sm:mt-7 text-body-lg text-pretty text-light-2"
            style={delay(900)}
          >
            {hero.intro}
          </p>

          <div
            className="anim-rise mt-8 flex flex-col sm:mt-10 gap-4 sm:flex-row sm:items-center"
            style={delay(1050)}
          >
            <Button to={hero.primaryCta.to} variant="primary-on-dark" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="secondary-on-dark">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Info strip + scroll cue */}
      <div className="anim-fade absolute inset-x-0 bottom-0" style={delay(1500)}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-8 border-t border-champagne/25 py-5 sm:py-6">
            <dl className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:gap-12">
              {hero.facts.map((f) => (
                <div key={f.label} className="hidden sm:block">
                  <dt className="text-eyebrow font-medium tracking-[0.18em] text-champagne uppercase">
                    {f.label}
                  </dt>
                  <dd className="mt-2 text-sm text-light">{f.value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-eyebrow font-medium tracking-[0.18em] text-champagne uppercase">
                  {hero.ojasTeaser.label}
                </dt>
                <dd className="mt-2 text-sm">
                  <Link
                    to={hero.ojasTeaser.to}
                    className="group inline-flex items-start gap-2 text-light underline decoration-light/30 underline-offset-4 transition-colors hover:decoration-champagne"
                  >
                    <span>{hero.ojasTeaser.value}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    />
                  </Link>
                </dd>
              </div>
            </dl>

            <Link
              to="/#about"
              aria-label="Scroll to the next section"
              className="hidden shrink-0 flex-col items-center gap-3 pb-1 text-eyebrow tracking-[0.18em] text-light-2 uppercase transition-colors hover:text-light sm:flex"
            >
              <span>Scroll</span>
              <span aria-hidden="true" className="relative h-12 w-px overflow-hidden bg-light/20">
                <span className="anim-scroll-cue absolute inset-0 bg-champagne" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
