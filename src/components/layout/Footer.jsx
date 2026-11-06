import { Link } from 'react-router-dom'
import mark from '@/assets/logos/adhokshaja-emblem-sm.png'
import { contact, navLinks, site } from '@/content/site'
import { Container, Fill } from '@/components/ui'

export function Footer() {
  return (
    <footer className="border-t border-champagne/20 bg-midnight-teal text-light">
      <Container size="wide" className="py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={mark} alt="" width="99" height="80" className="h-16 w-auto" />
            <p className="mt-5 font-heading text-3xl uppercase tracking-[0.14em]">{site.shortName}</p>
            <p className="mt-1 font-heading text-xl text-light-2 italic">{site.tagline}</p>
          </div>
          <div className="max-w-sm text-sm text-light-2">
            <p>
              {site.descriptor} of {site.institution}.
            </p>
            <p className="mt-2">{site.location}</p>
            <p className="mt-2">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light underline decoration-champagne underline-offset-4 hover:text-champagne"
              >
                {contact.instagramHandle}
              </a>
            </p>
            <p className="mt-2">
              <Fill value={contact.email} />
            </p>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-champagne/15 pt-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="font-sans text-xs uppercase tracking-[0.16em] text-light-2 transition-colors hover:text-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-light-2">
          © {new Date().getFullYear()} {site.name}, {site.institution}.
        </p>
      </Container>
    </footer>
  )
}
