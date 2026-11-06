import { PLACEHOLDER } from './placeholders'

export const site = {
  name: 'Club Adhokshaja',
  shortName: 'Adhokshaja',
  institution: 'PES University',
  descriptor: 'Yoga Club',
  tagline: 'Beyond Senses, Within Self.',
  location: 'PES University, RR Campus, Bengaluru',
}

/**
 * The home page is a procession of rooms. The rail, the footer and the
 * mobile menu all read this list, in this order.
 */
export const chapters = [
  { id: 'top', label: 'Home', to: '/#top' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'vision', label: 'Vision', to: '/#vision' },
  { id: 'why-yoga', label: 'Practice', to: '/#why-yoga' },
  { id: 'classes', label: 'Classes', to: '/#classes' },
  { id: 'teams', label: 'Teams', to: '/#teams' },
  { id: 'events', label: 'Events', to: '/#events' },
  { id: 'gallery', label: 'Gallery', to: '/#gallery' },
  { id: 'join', label: 'Join', to: '/#join' },
  { id: 'contact', label: 'Contact', to: '/#contact' },
]

export const chapterIds = chapters.map((chapter) => chapter.id)

export const navLinks = [
  ...chapters.map(({ label, to }) => ({ label, to })),
  { label: 'OJAS 2026', to: '/ojas-2026' },
]

export const navCta = { label: 'Join the Club', to: 'https://docs.google.com/forms/d/e/1FAIpQLScAlxPsbEqwLA9ppIIWJt7UIkqQetWXAEVc5TJlugr_NrayXQ/viewform' }

export const contact = {
  email: PLACEHOLDER('club email address'),
  instagram: 'https://www.instagram.com/yogapesuofficial/',
  instagramHandle: '@yogapesuofficial',
  whatsapp: PLACEHOLDER('WhatsApp link'),
}
