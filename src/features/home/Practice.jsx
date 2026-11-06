import { Brain, Flower2, Heart } from 'lucide-react'
import { Eyebrow, Heading } from '@/components/ui'

const rooms = [
  {
    word: 'Body',
    title: 'Physical wellbeing',
    description:
      'Explore yoga practices that encourage movement, flexibility and body awareness.',
    icon: Heart,
    className: 'bg-warm-ivory text-ink',
    muted: 'text-ink-2',
    wordColor: 'text-deep-botanical',
  },
  {
    word: 'Mind',
    title: 'Mental wellbeing',
    description:
      'Make space for mindfulness, meditation and a calmer approach to everyday life.',
    icon: Brain,
    className: 'bg-midnight-teal text-light',
    muted: 'text-light-2',
    wordColor: 'text-champagne',
  },
  {
    word: 'Self',
    title: 'Personal growth',
    description: 'Build consistency, patience and self-awareness through regular practice.',
    icon: Flower2,
    className: 'bg-deep-botanical text-light',
    muted: 'text-light-2',
    wordColor: 'text-light',
  },
]

export function Practice() {
  return (
    <section id="why-yoga" aria-labelledby="why-heading" className="scroll-mt-24">
      <div className="bg-mist-green px-5 py-16 text-ink sm:px-8 lg:px-14 lg:py-20">
        <Eyebrow className="text-ink-2">Why yoga</Eyebrow>
        <Heading as="h2" id="why-heading" size="h1" className="mt-5 max-w-3xl">
          More than movement. A practice for life.
        </Heading>
        <p className="mt-5 max-w-xl leading-8 text-ink-2">
          Yoga brings together movement, breathing and awareness. It offers an opportunity to slow
          down and reconnect with yourself.
        </p>
      </div>

      {rooms.map((room, index) => {
        const Icon = room.icon
        return (
          <article
            key={room.word}
            className={`snap-plate flex min-h-svh flex-col justify-between px-5 py-20 sm:px-8 lg:px-14 lg:py-16 ${room.className}`}
          >
            <div className={`flex items-center justify-between font-sans text-eyebrow font-medium uppercase ${room.muted}`}>
              <span>Practice</span>
              <span>
                0{index + 1}
                <span className="opacity-60"> / 03</span>
              </span>
            </div>

            <div className="my-10 flex items-end justify-between gap-8">
              <div className="max-w-xl">
                <Icon aria-hidden="true" size={28} strokeWidth={1.4} />
                <h3 className="mt-5 font-heading text-h2">{room.title}</h3>
                <p className={`mt-4 text-body-lg ${room.muted}`}>{room.description}</p>
              </div>
            </div>

            <p
              aria-hidden="true"
              className={`font-heading text-[clamp(4.75rem,16vw,11rem)] leading-[0.8] font-medium tracking-[-0.04em] uppercase ${room.wordColor}`}
            >
              {room.word}
            </p>
          </article>
        )
      })}
    </section>
  )
}
