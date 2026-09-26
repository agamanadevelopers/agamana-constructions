import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PackageComparison from '@/components/PackageComparison';
import PackagesPdfDownload from '@/components/PackagesPdfDownload';
import { sanityFetch } from '@/sanity/lib/client';
import { packagesQuery } from '@/sanity/lib/queries';
import { packages as staticPackages, type ConstructionPackage } from '@/data/packages';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Construction Packages',
  description:
    'Compare Basic, Classic and Luxury construction packages from Agamana Constructions side by side, with specifications across design, structure, kitchen, bathrooms, flooring, electrical, plumbing and more.',
  alternates: { canonical: '/packages' },
  openGraph: {
    title: 'Construction Packages · Agamana Constructions',
    description:
      'Compare Basic, Classic and Luxury construction packages side by side. Starting from ₹1,879/sq.ft.',
    images: [{ url: '/og-packages.webp', width: 1733, height: 907, alt: 'Agamana Constructions Packages' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Packages · Agamana Constructions',
    description: 'Compare Basic, Classic and Luxury construction packages. Starting from ₹1,879/sq.ft.',
    images: ['/og-packages.webp'],
  },
};

export default async function PackagesPage() {
  const packagesCms = await sanityFetch<ConstructionPackage[]>(packagesQuery);
  const packages = packagesCms?.length ? packagesCms : staticPackages;

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
          <PackageComparison packages={packages} />

          {/* Download PDF button */}
          <div className="mt-8 flex justify-center">
            <PackagesPdfDownload packages={packages} />
          </div>

          <div className="mt-6 rounded-xl border border-black/[0.07] bg-brand-mist px-5 py-4 sm:px-6">
            <p className="text-[13px] leading-relaxed text-muted">
              <span className="font-semibold text-ink">Disclaimer:</span> The above package prices are applicable for projects with a minimum built-up area of 3,000 sq.ft. The final project estimate may vary depending on the project requirements, site location, site conditions, specifications, scope of work, and prevailing material prices at the time of construction. Final pricing will be confirmed based on the project-specific requirements and detailed estimation.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
