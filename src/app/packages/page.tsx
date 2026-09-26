import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PackageComparison from '@/components/PackageComparison';

export const metadata: Metadata = {
  title: 'Construction Packages',
  description:
    'Compare Basic, Classic and Luxury construction packages from Agamana Constructions side by side, with specifications across design, structure, kitchen, bathrooms, flooring, electrical, plumbing and more.',
  alternates: { canonical: '/packages' },
};

export default function PackagesPage() {
  return (
    <PageShell>
      <section className="bg-brand-mist py-12 sm:py-14">
        <div className="container-page">
          <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand">Packages</span>
          </nav>
          <p className="eyebrow">Compare Specifications</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-brand sm:text-5xl">
            Basic, Classic &amp; Luxury, side by side.
          </h1>
          <p className="mt-4 max-w-xl text-muted sm:text-lg">
            See how each package differs across every category, so you can pick the
            right specification level for your build.
          </p>
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-14">
        <div className="container-page">
          <PackageComparison />
          <p className="mt-8 text-center text-xs text-muted">
            Specifications are indicative and can be tailored. Final inclusions are
            confirmed in your project estimate.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
