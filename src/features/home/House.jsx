import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import group from '@/assets/images/club/group-pose.webp'
import { Eyebrow } from '@/components/ui'

export function House() {
  return (
    <section
      id="teams"
      aria-labelledby="teams-heading"
      className="snap-plate scroll-mt-24 flex min-h-svh flex-col justify-center bg-[#1c1612] px-5 py-20 text-light sm:px-10 lg:px-14"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_auto]">
        <div>
          <Eyebrow className="text-champagne">People behind the practice</Eyebrow>
          <h2 id="teams-heading" className="mt-5 max-w-2xl font-heading text-h1">
            A community that grows together.
          </h2>
          <p className="mt-6 max-w-xl leading-8 text-light-2">
            A club is shaped by the people who contribute their time, ideas and energy. Adhokshaja
            welcomes people who want to participate and help build a mindful campus community.
          </p>
          <Link
            to="/#join"
            className="mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-light underline decoration-champagne underline-offset-4"
          >
            Become part of the team
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          <p className="mt-8 max-w-md text-xs leading-6 text-light-2">
            Add confirmed team names, roles and member photographs here once the club shares the
            details.
          </p>
        </div>

        <img
          src={group}
          alt="Club members demonstrating a group yoga pose"
          width="427"
          height="421"
          loading="lazy"
          className="size-[min(80vw,400px)] justify-self-center rounded-full object-cover ring-1 ring-champagne/40 lg:justify-self-end"
        />
      </div>
    </section>
  )
}
