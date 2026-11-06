import { Button } from '@/components/ui'

export function NotFound() {
  return (
    <section className="flex min-h-svh flex-col justify-end bg-midnight-teal px-5 pt-32 pb-16 text-light sm:px-10 lg:px-14">
      <p aria-hidden="true" className="font-heading text-[clamp(6rem,20vw,13rem)] leading-none text-champagne">
        404
      </p>
      <h1 className="mt-2 font-heading text-h2">This page could not be found.</h1>
      <Button to="/" variant="primary-on-dark" className="mt-8 w-fit">
        Back to home
      </Button>
    </section>
  )
}
