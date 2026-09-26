import Link from 'next/link';
import { navLinks, site, whatsappLink, whatsappMessages } from '@/data/site';
import { Phone, Mail, WhatsApp, Pin } from './icons';
import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-cream">
      <div className="container-page py-10">
        {/* Main row */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/#home" aria-label="Agamana Constructions home">
              <Wordmark />
            </Link>
            <div className="mt-4 flex items-start gap-2">
              <Pin width={15} height={15} className="mt-0.5 shrink-0 text-brand-green" />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">{site.addressLabel}:</span>{' '}
                {site.address}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 md:justify-center" aria-label="Footer">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/75 transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm font-medium text-muted">{site.locations.join(' • ')}</p>
        </div>

        {/* Divider */}
        <div className="my-7 h-px w-full bg-black/[0.07]" />

        {/* Contact + legal */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-brand"
            >
              <Phone width={15} height={15} className="text-brand-green" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-brand"
            >
              <Mail width={15} height={15} className="text-brand-green" />
              {site.email}
            </a>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-brand"
            >
              <WhatsApp width={15} height={15} className="text-brand-green" />
              WhatsApp
            </a>
          </div>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.brand} · Owned by Agamana Group
          </p>
        </div>

        {/* Credit badge */}
        <div className="mt-7 flex justify-center">
          <a
            href="https://navodita.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-5 py-2.5 text-[11px] font-medium tracking-[0.15em] text-white/50 transition-opacity hover:opacity-80"
          >
            CRAFTED WITH
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#e05a5a" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
            </svg>
            BY
            <span className="font-bold tracking-normal text-white">Navodita</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
