'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks, site } from '@/data/site';
import { Menu, Close, ArrowRight } from './icons';
import EstimateButton from './estimate/EstimateButton';
import Wordmark from './Wordmark';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-black/[0.06] bg-white/90 backdrop-blur-md'
            : 'bg-white'
        }`}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-4">
          <Link href="/#home" aria-label="Agamana Constructions home" className="shrink-0">
            <Wordmark />
          </Link>

          {/* Desktop nav - centered */}
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right - desktop CTA */}
          <div className="hidden items-center gap-5 lg:flex">
            <EstimateButton className="!px-5 !py-2.5 !text-[13px]">
              Get a Construction Estimate
            </EstimateButton>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 text-brand"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer - rendered outside the sticky header so it layers above page content */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-brand-deep/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-cream shadow-cardHover">
            <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4">
              <Wordmark />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 text-brand"
              >
                <Close />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-3" aria-label="Mobile">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold text-ink hover:bg-brand-mist"
                >
                  {l.label}
                  <ArrowRight
                    className="text-brand-green transition-transform group-hover:translate-x-1"
                    width={18}
                    height={18}
                  />
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-black/[0.06] p-5">
              <p className="mb-3 text-xs font-medium text-muted">
                {site.locations.join(' • ')}
              </p>
              <EstimateButton className="w-full">
                Get a Construction Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
