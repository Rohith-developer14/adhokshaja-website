import { Link } from 'react-router-dom'
import mark from '@/assets/logos/adhokshaja-emblem-sm.png'
import { contact, navLinks, site } from '@/content/site'
import { Container, Divider, Fill } from '@/components/ui'

export function Footer() {
  return (
    <footer className="bg-midnight-teal text-light">
      <Container size="wide" className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <img src={mark} alt="" width="99" height="80" className="h-20 w-auto" />
            <p className="mt-6 font-heading text-h3 font-medium uppercase tracking-[0.14em]">
              {site.shortName}
            </p>
            <p className="mt-2 font-heading text-xl text-light-2 italic">{site.tagline}</p>
            <p className="mt-6 max-w-sm text-[0.9375rem] text-light-2">
              {site.descriptor} of {site.institution}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-sans text-eyebrow font-medium uppercase text-champagne">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[0.9375rem] text-light-2 transition-colors hover:text-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-eyebrow font-medium uppercase text-champagne">Connect</h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-light-2">
              <li>{site.location}</li>
              <li>
                <Fill value={contact.email} />
              </li>
              <li>
                <Fill value={contact.instagram} />
              </li>
            </ul>
          </div>
        </div>

        <Divider className="mt-16 lg:mt-20" />
        <p className="mt-6 text-sm text-light-2">
          © {new Date().getFullYear()} {site.name}, {site.institution}.
        </p>
      </Container>
    </footer>
  )
}
