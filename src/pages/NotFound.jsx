import { Button, Container, Heading, Section } from '@/components/ui'

export function NotFound() {
  return (
    <Section tone="midnight" className="min-h-[70svh] pt-40">
      <Container>
        <Heading as="h1" size="h1">
          This page could not be found.
        </Heading>
        <Button to="/" variant="primary-on-dark" className="mt-10">
          Back to home
        </Button>
      </Container>
    </Section>
  )
}
