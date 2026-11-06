import { Flower2, HeartHandshake, Sparkles, TrendingUp, Users } from 'lucide-react'
import teamPhoto from '@/assets/images/club/club-team.webp'
import groupPhoto from '@/assets/images/club/group-pose.webp'
import { recruitment } from '@/content/recruitment'
import { Button, Eyebrow } from '@/components/ui'

const ICONS = {
  users: Users,
  'trending-up': TrendingUp,
  flower: Flower2,
  'heart-handshake': HeartHandshake,
}

export function Invitation() {
  return (
    <section id="join" aria-labelledby="join-heading" className="scroll-mt-24">
      <div className="grid lg:grid-cols-2">
        <div className="bg-warm-ivory px-5 py-20 text-ink sm:px-10 lg:px-14">
          <img
            src={teamPhoto}
            alt="Members of the Adhokshaja Yoga Club gathered together at a club event"
            width="427"
            height="421"
            loading="lazy"
            className="aspect-[5/4] w-full max-w-[420px] object-cover"
          />
          <Eyebrow className="mt-10 text-ink-2">{recruitment.eyebrow}</Eyebrow>
          <h2 id="join-heading" className="mt-5 font-heading text-h1 whitespace-pre-line">
            {recruitment.title}
          </h2>
          <p className="mt-5 max-w-xl text-body-lg text-ink-2">{recruitment.intro}</p>
          <Button
            href={recruitment.registrationUrl || undefined}
            disabled={!recruitment.registrationUrl}
            variant="primary"
            arrow
            className="mt-8"
            aria-describedby="join-registration-note"
          >
            Join Our Team
          </Button>
          <p id="join-registration-note" className="mt-3 max-w-sm text-xs text-ink-2">
            {recruitment.registrationUrl
              ? 'Opens the official club form shared on Instagram.'
              : 'The official recruitment link will be added once confirmed by the club.'}
          </p>
        </div>

        <ol className="divide-y divide-champagne/20 bg-midnight-teal text-light">
          {recruitment.benefits.map((benefit) => {
            const Icon = ICONS[benefit.icon] || Sparkles
            return (
              <li key={benefit.number} className="flex gap-5 px-5 py-8 sm:px-10 lg:px-12">
                <span className="font-sans text-sm tracking-[0.16em] text-champagne">{benefit.number}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon aria-hidden="true" size={18} strokeWidth={1.5} className="text-champagne" />
                    <h3 className="font-heading text-2xl leading-tight">{benefit.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-light-2">{benefit.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="grid items-center gap-8 bg-champagne px-5 py-10 text-midnight-teal sm:px-10 lg:grid-cols-[auto_1fr_1.1fr] lg:px-14">
        <img
          src={groupPhoto}
          alt="Adhokshaja club members demonstrating yoga poses together"
          width="427"
          height="421"
          loading="lazy"
          className="size-28 rounded-full object-cover"
        />
        <div>
          <p className="font-sans text-eyebrow font-medium uppercase">Find room to grow</p>
          <p className="mt-2 font-heading text-h3">Take something meaningful with you.</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {recruitment.memberBenefits.map((item) => (
            <li
              key={item}
              className="border border-midnight-teal/25 px-3 py-2 font-sans text-sm font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-deep-botanical px-5 py-20 text-center text-light sm:px-10">
        <p className="font-sans text-eyebrow font-medium uppercase text-light-2">Your next chapter</p>
        <h3 className="mt-4 font-heading text-h1">Your journey starts here.</h3>
        <p className="mx-auto mt-4 max-w-xl text-light-2">
          Be part of something meaningful. Connect, grow and contribute with Club Adhokshaja.
        </p>
        <Button
          href={recruitment.registrationUrl || undefined}
          disabled={!recruitment.registrationUrl}
          variant="primary-on-dark"
          arrow
          className="mt-8"
        >
          Join Our Team
        </Button>
      </div>
    </section>
  )
}
