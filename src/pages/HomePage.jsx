
import { Hero } from '@/features/home/Hero'
import { JoinClub } from '@/features/home/JoinClub'

import {
  AboutSection,
  VisionMissionSection,
  WhyYogaSection,
  ClassesSection,
  TeamsSection,
  EventsSection,
  GallerySection,
  ContactSection,
} from '@/features/home/HomeSections'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <WhyYogaSection />
      <ClassesSection />
      <TeamsSection />
      <EventsSection />
      <GallerySection />
      <JoinClub />
      <ContactSection />
    </>
  )
}
