import { PLACEHOLDER } from './placeholders'

import placeholder800 from '../assets/images/hero/hero-placeholder-800.webp'
import placeholder1400 from '../assets/images/hero/hero-placeholder-1400.webp'
import placeholder2400 from '../assets/images/hero/hero-placeholder-2400.webp'

/**
 * HOW TO REPLACE THE HERO PHOTOGRAPH
 * Drop one file named hero.avif, hero.webp or hero.jpg into
 * src/assets/images/hero/ (about 2400px wide, under ~250KB, calm area on the
 * left for text). It is picked up automatically. Then set isTemporary to false
 * to remove the "temporary placeholder" badge.
 */
const heroFiles = import.meta.glob('../assets/images/hero/hero.{avif,webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const heroUpload = Object.values(heroFiles)[0]

export const hero = {
  image: heroUpload
    ? { src: heroUpload, width: 2400, height: 1350 }
    : {
        // Procedurally generated stand-in. NOT a photograph.
        src: placeholder1400,
        srcSet: `${placeholder800} 800w, ${placeholder1400} 1400w, ${placeholder2400} 2400w`,
        width: 2400,
        height: 1350,
      },
  isTemporary: !heroUpload,
  eyebrow: 'Yoga Club · PES University',
  titlePrefix: 'Club',
  title: 'Adhokshaja',
  tagline: 'Beyond Senses, Within Self.',
  // Source: club presentation, "Aims and Motives"
  intro:
    'A well-structured platform for PES University students and faculty to practise yoga and meditation, and to promote physical well-being and mental health.',
  primaryCta: { label: 'Explore the Club', to: '/#about' },
  secondaryCta: { label: 'Discover Our Events', to: '/#events' },
  // Source: club presentation, "Event Calendar" (everyday class)
  facts: [
    { label: 'Everyday class', value: 'Classes from 4–5, open for all' },
  ],
  // Source: OJAS 2026 PDF, title page
  ojasTeaser: {
    label: 'Now announcing',
    value: 'OJAS 2026 · 1st Inter-PES Institutions Yoga & Fitness Championship',
    to: '/ojas-2026',
  },
}

/** Real club photographs supplied by the club (used from step 4 onward). */
export const clubPhotos = {
  session1: { alt: PLACEHOLDER('alt text for yoga session photo 1') },
  session2: { alt: PLACEHOLDER('alt text for yoga session photo 2') },
  groupPose: { alt: PLACEHOLDER('alt text for group yoga pose photo') },
  team: { alt: PLACEHOLDER('alt text for club team photo') },
}
