import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PackageCard from '@/components/PackageCard';
import { ArrowRight } from '@/components/icons';
import { packages } from '@/data/packages';

export const metadata: Metadata = {
  title: 'Construction Packages & Pricing',
  description:
    'Agamana Constructions house construction packages: Basic from ₹1,879, Classic from ₹2,099 and Luxury from ₹2,550 per sq.ft. Full specifications for Bengaluru, Shimoga and Sagara.',
  alternates: { canonical: '/packages' },
};

export default function PackagesPage() {
  return (
    <PageShell>
      <section className="bg-brand-mist py-14 sm:py-18">
        <div className="container-page">
          <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand">Packages</span>
          </nav>
          <p className="eyebrow">Construction Packages</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-brand sm:text-5xl">
            Clear packages for every kind of build.
          </h1>
          <p className="mt-4 max-w-xl text-muted sm:text-lg">
            Three specification levels, built to the same standards. Pick a starting
            point and we’ll tailor it to your project.
          </p>
          <Link href="/packages/compare" className="btn-primary group mt-6">
            Compare all specifications
            <ArrowRight className="btn-arrow" width={18} height={18} />
          </Link>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.slug} className="flex">
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            Indicative per-sq.ft rates. Final estimate depends on design, site and
            specifications.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
