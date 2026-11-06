
import { Link } from 'react-router-dom'
import {
  Flower2,
  Heart,
  Brain,
  Users,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

import {
  Container,
  Eyebrow,
  Heading,
  Reveal,
  Section,
  Divider,
} from '@/components/ui'

import { contact, site } from '@/content/site'

import teamPhoto from '@/assets/images/club/club-team.webp'
import groupPhoto from '@/assets/images/club/group-pose.webp'
import session1 from '@/assets/images/club/session-1.webp'
import session2 from '@/assets/images/club/session-2.webp'

const benefits = [
  {
    icon: Heart,
    title: 'Physical wellbeing',
    description:
      'Explore yoga practices that encourage movement, flexibility and body awareness.',
  },
  {
    icon: Brain,
    title: 'Mental wellbeing',
    description:
      'Make space for mindfulness, meditation and a calmer approach to everyday life.',
  },
  {
    icon: Flower2,
    title: 'Personal growth',
    description:
      'Build consistency, patience and self-awareness through regular practice.',
  },
]

const galleryImages = [
  {
    src: session1,
    alt: 'Students taking part in a Club Adhokshaja yoga session',
    label: 'Yoga session',
  },
  {
    src: groupPhoto,
    alt: 'Club members demonstrating a group yoga pose',
    label: 'Together in practice',
  },
  {
    src: teamPhoto,
    alt: 'Club Adhokshaja team members',
    label: 'Our community',
  },
  {
    src: session2,
    alt: 'Students participating in another yoga session',
    label: 'Mindful moments',
  },
]

export function AboutSection() {
  return (
    <Section id="about" tone="ivory">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow className="text-ink-2">Discover Adhokshaja</Eyebrow>
            <Heading size="h1" className="mt-5 text-ink">
              A space to pause, breathe and reconnect.
            </Heading>
            <p className="mt-6 text-body-lg leading-relaxed text-ink-2">
              Club Adhokshaja is the yoga club of {site.institution}.
              It provides a platform for students and faculty to practise
              yoga and meditation while encouraging physical wellbeing
              and mental health.
            </p>
            <p className="mt-5 leading-8 text-ink-2">
              Beyond the practice itself, the club aims to create a
              welcoming campus community where people can learn,
              participate and grow together.
            </p>
            <Link
              to="/#classes"
              className="mt-8 inline-flex items-center gap-2 font-medium text-deep-botanical hover:underline"
            >
              Explore our classes
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <img
              src={teamPhoto}
              alt="Club Adhokshaja members together"
              className="aspect-[5/4] w-full rounded-sm object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 bg-midnight-teal p-5 text-light sm:p-7">
              <p className="font-heading text-2xl italic">
                Beyond Senses,
              </p>
              <p className="font-heading text-2xl italic text-champagne">
                Within Self.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

export function VisionMissionSection() {
  return (
    <Section id="vision" tone="midnight">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-champagne">
            Our purpose
          </Eyebrow>
          <Heading size="h1" className="mt-5 text-light">
            A journey towards a more mindful life.
          </Heading>
          <p className="mt-6 text-body-lg leading-relaxed text-light-2">
            We believe yoga can be a meaningful part of campus life,
            encouraging people to make time for their physical and
            mental wellbeing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full border border-champagne/20 p-8 sm:p-10">
              <Flower2 size={30} className="text-champagne" />
              <h3 className="mt-6 font-heading text-3xl text-light">
                Our Vision
              </h3>
              <p className="mt-5 leading-8 text-light-2">
                To encourage a campus culture that values mindfulness,
                self-awareness and holistic wellbeing.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full border border-champagne/20 p-8 sm:p-10">
              <Sparkles size={30} className="text-champagne" />
              <h3 className="mt-6 font-heading text-3xl text-light">
                Our Mission
              </h3>
              <p className="mt-5 leading-8 text-light-2">
                To provide opportunities for students and faculty to
                practise yoga and meditation and grow through shared
                experiences.
              </p>
            </article>
          </Reveal>
        </div>
        <p className="mt-8 text-center text-xs text-light-2/70">
          Draft vision and mission wording — confirm with the club before
          treating these as official statements.
        </p>
      </Container>
    </Section>
  )
}

export function WhyYogaSection() {
  return (
    <Section id="why-yoga" tone="mist">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center text-ink-2">
            Why yoga
          </Eyebrow>
          <Heading size="h1" className="mt-5 text-ink">
            More than movement. A practice for life.
          </Heading>
          <p className="mt-5 leading-8 text-ink-2">
            Yoga brings together movement, breathing and awareness.
            It offers an opportunity to slow down and reconnect with yourself.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 80}>
              <article className="h-full bg-warm-ivory p-7 sm:p-9">
                <Icon
                  size={30}
                  strokeWidth={1.4}
                  className="text-deep-botanical"
                />
                <h3 className="mt-7 font-heading text-2xl text-ink">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink-2">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function ClassesSection() {
  return (
    <Section id="classes" tone="ivory">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow className="text-ink-2">Practise with us</Eyebrow>
            <Heading size="h1" className="mt-5 text-ink">
              Make time for yourself.
            </Heading>
            <p className="mt-6 leading-8 text-ink-2">
              Join the everyday yoga practice organised by Club
              Adhokshaja. Take a break from your routine and make
              wellbeing a part of campus life.
            </p>

            <div className="mt-8 border-l-2 border-champagne pl-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-deep-botanical">
                Everyday class
              </p>
              <p className="mt-2 font-heading text-3xl text-ink">
                4–5
              </p>
              <p className="mt-2 text-sm text-ink-2">
                Open for all, as stated in the club presentation.
              </p>
            </div>

            <p className="mt-6 text-xs text-ink-2">
              Confirm the time period, venue and current class schedule
              with the club before publishing additional details.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={session1}
              alt="Students practising yoga together"
              className="aspect-[5/4] w-full rounded-sm object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

export function TeamsSection() {
  return (
    <Section id="teams" tone="botanical">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow className="text-light-2">People behind the practice</Eyebrow>
            <Heading size="h1" className="mt-5 text-light">
              A community that grows together.
            </Heading>
            <p className="mt-6 leading-8 text-light-2">
              A club is shaped by the people who contribute their time,
              ideas and energy. Adhokshaja welcomes people who want to
              participate and help build a mindful campus community.
            </p>
            <Link
              to="/#join"
              className="mt-8 inline-flex items-center gap-2 font-medium text-light underline decoration-champagne underline-offset-4"
            >
              Become part of the team
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={teamPhoto}
              alt="Club Adhokshaja team"
              className="aspect-[5/4] w-full rounded-sm object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
        <p className="mt-8 text-xs text-light-2/75">
          Add confirmed team names, roles and member photographs here
          once the club shares the details.
        </p>
      </Container>
    </Section>
  )
}

export function EventsSection() {
  return (
    <Section id="events" tone="mist">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-ink-2">Experiences together</Eyebrow>
          <Heading size="h1" className="mt-5 text-ink">
            Events that bring the community together.
          </Heading>
          <p className="mt-5 leading-8 text-ink-2">
            Explore Club Adhokshaja activities and special events.
            Event dates and registration information will be shared
            through official club announcements.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Link
            to="/ojas-2026"
            className="group grid overflow-hidden bg-midnight-teal text-light md:grid-cols-[1fr_auto]"
          >
            <div className="p-8 sm:p-12">
              <p className="text-xs uppercase tracking-[0.2em] text-champagne">
                Featured event
              </p>
              <h3 className="mt-5 font-heading text-3xl sm:text-4xl">
                OJAS 2026
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-light-2">
                1st Inter-PES Institutions Yoga and Fitness Championship.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-champagne">
                Explore OJAS 2026
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </div>
            <div className="hidden items-center justify-center border-l border-champagne/20 px-12 md:flex">
              <Flower2 size={70} strokeWidth={0.8} className="text-champagne" />
            </div>
          </Link>
        </Reveal>
      </Container>
    </Section>
  )
}

export function GallerySection() {
  return (
    <Section id="gallery" tone="ivory">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-ink-2">Moments at Adhokshaja</Eyebrow>
          <Heading size="h1" className="mt-5 text-ink">
            A glimpse into our community.
          </Heading>
          <p className="mt-5 text-ink-2">
            Moments from yoga sessions and club gatherings.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <Reveal key={image.label} delay={index * 60}>
              <figure className="group">
                <div className="overflow-hidden bg-mist-green">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink-2">
                  {image.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function ContactSection() {
  return (
    <Section id="contact" tone="midnight">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <Reveal>
            <Eyebrow className="text-champagne">Stay connected</Eyebrow>
            <Heading size="h1" className="mt-5 text-light">
              Begin your journey with Adhokshaja.
            </Heading>
            <p className="mt-5 max-w-xl leading-8 text-light-2">
              Have a question or want to be part of the community?
              Reach out through the club's official channels.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 border-t border-champagne/20 pt-6 text-light-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-champagne">
                  Email
                </p>
                <p className="mt-2"><FillContact value={contact.email} /></p>
              </div>
              <Divider className="bg-light/20" />
              <div>
                <p className="text-xs uppercase tracking-widest text-champagne">
                  Instagram
                </p>
                <p className="mt-2"><FillContact value={contact.instagram} /></p>
              </div>
              <Divider className="bg-light/20" />
              <p className="text-sm">{site.location}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

function FillContact({ value }) {
  if (value && typeof value === 'object' && value.placeholder) {
    return <span className="text-champagne">Details to be confirmed</span>
  }
  return value
}
