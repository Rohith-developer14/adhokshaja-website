import { PLACEHOLDER } from './placeholders'

export const site = {
  name: 'Club Adhokshaja',
  shortName: 'Adhokshaja',
  institution: 'PES University',
  descriptor: 'Yoga Club',
  tagline: 'Beyond Senses, Within Self.',
  // Source: OJAS 2026 PDF ("PES University, RR Campus, Bengaluru")
  location: 'PES University, RR Campus, Bengaluru',
}

/** Main navigation. `to` accepts router paths and hash anchors. */
export const navLinks = [
  { label: 'About', to: '/#about' },
  { label: 'Classes', to: '/#classes' },
  { label: 'Teams', to: '/#teams' },
  { label: 'Events', to: '/#events' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'OJAS 2026', to: '/ojas-2026' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Our Vision', to: '/#vision' },
]

export const navCta = { label: 'Join the Club', to: '/#join' }

/** None of these are in the supplied documents yet. */
export const contact = {
  email: PLACEHOLDER('club email address'),
  instagram: PLACEHOLDER('Instagram link'),
  whatsapp: PLACEHOLDER('WhatsApp link'),
}
