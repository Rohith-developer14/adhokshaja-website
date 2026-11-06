import {
  ArrowDownRight,
  Flower2,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'
import teamPhoto from '@/assets/images/club/club-team.webp'
import groupPhoto from '@/assets/images/club/group-pose.webp'
import { recruitment } from '@/content/recruitment'
import { Button, Container, Eyebrow, Heading, Reveal, Section } from '@/components/ui'

const ICONS = {
  users: Users,
  'trending-up': TrendingUp,
  flower: Flower2,
  'heart-handshake': HeartHandshake,
}

function RecruitmentIntro() {
  return (
    <Section tone="ivory" spacing="default" aria-labelledby="join-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm bg-mist-green">
              <img
                src={teamPhoto}
                alt="Members of the Adhokshaja Yoga Club gathered together at a club event"
                width="900"
                height="900"
                loading="lazy"
                className="aspect-[4/4.2] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-teal/85 via-midnight-teal/25 to-transparent p-6 sm:p-8">
                <p className="font-heading text-2xl italic text-light sm:text-3xl">
                  Grow together. Give back.
                </p>
                <p className="mt-1 text-sm text-light/85">Club Adhokshaja · PES University</p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-4 -z-0 h-28 w-28 border border-champagne/70 sm:-right-6 sm:h-36 sm:w-36"
            />
            <div className="absolute -left-5 -top-5 -z-0 hidden size-20 rounded-full border border-eucalyptus/70 sm:block" />
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <Eyebrow className="text-ink-2">{recruitment.eyebrow}</Eyebrow>
            <Heading
              as="h2"
              id="join-heading"
              size="h1"
              className="mt-6 whitespace-pre-line text-ink"
            >
              {recruitment.title}
            </Heading>
            <p className="mt-6 max-w-xl text-body-lg text-ink-2">{recruitment.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button
                href={recruitment.registrationUrl || undefined}
                disabled={!recruitment.registrationUrl}
                variant="primary"
                arrow
                aria-describedby="join-registration-note"
              >
                Join Our Team
              </Button>
              <a
                href="#why-join"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-deep-botanical focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-botanical"
              >
                Why become a member
                <ArrowDownRight
                  aria-hidden="true"
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </div>
            <p id="join-registration-note" className="mt-3 text-xs text-ink-2">
              {recruitment.registrationUrl
                ? 'You will be taken to the official club application.'
                : 'The official recruitment link will be added once confirmed by the club.'}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

function WhyJoin() {
  return (
    <Section id="why-join" tone="mist" spacing="default" aria-labelledby="why-join-heading">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-ink-2">More than a club</Eyebrow>
          <Heading as="h3" id="why-join-heading" size="h2" className="mt-5 text-ink">
            A place to connect, learn and make a difference.
          </Heading>
          <p className="mt-5 max-w-xl text-ink-2">
            Adhokshaja brings people together through shared experiences in wellness,
            mindfulness and personal growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {recruitment.benefits.map((benefit, index) => {
            const Icon = ICONS[benefit.icon] || Sparkles
            return (
              <Reveal key={benefit.number} delay={index * 75}>
                <article className="group flex h-full min-h-[265px] flex-col border border-deep-botanical/15 bg-warm-ivory p-6 transition duration-500 hover:-translate-y-1 hover:border-deep-botanical/40 hover:shadow-[0_18px_45px_rgba(16,45,50,0.08)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs tracking-[0.16em] text-ink-2">
                      {benefit.number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      size={25}
                      strokeWidth={1.35}
                      className="text-deep-botanical transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="mt-10 font-heading text-2xl leading-tight text-ink sm:text-[1.7rem]">
                    {benefit.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-ink-2">{benefit.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

function MemberGrowth() {
  return (
    <Section tone="ivory" spacing="default" aria-labelledby="member-growth-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow className="text-ink-2">Find room to grow</Eyebrow>
            <Heading as="h3" id="member-growth-heading" size="h2" className="mt-5 text-ink">
              Take something meaningful with you.
            </Heading>
            <p className="mt-5 max-w-xl text-ink-2">
              Being part of a club can be a chance to discover strengths, contribute your ideas
              and build connections with people across the university.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {recruitment.memberBenefits.map((item, index) => (
                <li key={item} className="flex items-center gap-3 border-b border-deep-botanical/15 pb-4">
                  <span className="font-sans text-xs tracking-widest text-champagne">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium capitalize text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <img
              src={groupPhoto}
              alt="Adhokshaja club members demonstrating yoga poses together"
              width="900"
              height="900"
              loading="lazy"
              className="aspect-[5/4] w-full rounded-sm object-cover object-center"
            />
            <div className="absolute -bottom-5 -left-5 max-w-[230px] bg-midnight-teal p-5 text-light shadow-lg sm:-left-7 sm:p-6">
              <Sparkles aria-hidden="true" size={20} className="text-champagne" strokeWidth={1.4} />
              <p className="mt-3 font-heading text-2xl italic leading-tight">
                Bring your energy. Find your place.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

function RecruitmentCallToAction() {
  return (
    <Section tone="midnight" spacing="tight" aria-labelledby="join-cta-heading" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full border border-champagne/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-16 size-[20rem] rounded-full border border-eucalyptus/15" />
      <Container>
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-light-2">Your next chapter</Eyebrow>
          <Heading as="h3" id="join-cta-heading" size="h1" className="mt-6 text-light">
            Your journey starts here.
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg text-light-2">
            Be part of something meaningful. Connect, grow and contribute with Club Adhokshaja.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3">
            <Button
              href={recruitment.registrationUrl || undefined}
              disabled={!recruitment.registrationUrl}
              variant="primary-on-dark"
              arrow
              aria-describedby="join-cta-note"
            >
              Join Our Team
            </Button>
            <p id="join-cta-note" className="text-xs text-light-2">
              {recruitment.registrationUrl
                ? 'Applications open through the official club form.'
                : 'Official application details will be shared here when confirmed.'}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

export function JoinClub() {
  return (
    <section id="join" aria-label="Join Club Adhokshaja" className="scroll-mt-20">
      <RecruitmentIntro />
      <WhyJoin />
      <MemberGrowth />
      <RecruitmentCallToAction />
    </section>
  )
}
