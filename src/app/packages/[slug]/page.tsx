import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import PackageSpecAccordion from '@/components/PackageSpecAccordion';
import EstimateButton from '@/components/estimate/EstimateButton';
import { ArrowRight, Check, WhatsApp } from '@/components/icons';
import { packages, getPackage } from '@/data/packages';
import { whatsappLink, whatsappMessages } from '@/data/site';

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} Package · ${pkg.priceLabel}/sq.ft`,
    description: `${pkg.name} construction package by Agamana Constructions at ${pkg.priceLabel}/sq.ft. ${pkg.tagline}`,
    alternates: { canonical: `/packages/${pkg.slug}` },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const others = packages.filter((p) => p.slug !== pkg.slug);

  return (
    <PageShell>
      {/* Header band */}
      <section className="bg-brand py-14 text-white sm:py-18">
        <div className="container-page">
          <nav className="mb-6 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/packages" className="hover:text-white">
              Packages
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{pkg.name}</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-greenSoft">
            {pkg.name} Package
          </p>
          <p className="mt-3 text-sm font-medium text-white/60">Starting from</p>
          <div className="mt-1 flex flex-wrap items-end gap-x-6 gap-y-2">
            <h1 className="font-heading text-4xl font-extrabold sm:text-6xl">
              {pkg.priceLabel}
              <span className="text-xl font-semibold text-white/70"> / sq.ft</span>
            </h1>
          </div>
          <p className="mt-4 max-w-xl text-white/75 sm:text-lg">{pkg.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <EstimateButton
              initialType="Home"
              className="!bg-white !text-brand hover:!bg-brand-mist"
            >
              Get an Estimate
            </EstimateButton>
            <a
              href={whatsappLink(whatsappMessages.packageContext(pkg.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10"
            >
              <WhatsApp width={17} height={17} />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-brand-mist py-10">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pkg.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-2.5 rounded-2xl border border-black/[0.06] bg-white px-4 py-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand">
                  <Check width={12} height={12} />
                </span>
                <span className="text-sm font-medium text-ink">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full specs */}
      <section className="bg-cream py-14 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Full Specifications</p>
                <h2 className="mt-2 text-2xl font-bold text-brand sm:text-3xl">
                  What’s included in {pkg.name}
                </h2>
              </div>
              <Link
                href="/packages/compare"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                Compare packages
                <ArrowRight className="btn-arrow" width={16} height={16} />
              </Link>
            </div>

            <PackageSpecAccordion categories={pkg.categories} />

            <p className="mt-6 rounded-xl border border-black/[0.06] bg-white px-4 py-3 text-xs leading-relaxed text-muted">
              Specifications are indicative and can be tailored to your requirements.
              Final inclusions are confirmed in your project estimate and agreement.
            </p>
          </div>
        </div>
      </section>

      {/* Other packages */}
      <section className="bg-brand-mist py-14">
        <div className="container-page">
          <h2 className="mb-6 text-2xl font-bold text-brand">Other packages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/packages/${o.slug}`}
                className="card card-hover group flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                    {o.name}
                  </p>
                  <p className="mt-1 font-heading text-2xl font-bold text-brand">
                    {o.priceLabel}
                    <span className="text-sm font-medium text-muted"> / sq.ft</span>
                  </p>
                  <p className="mt-1 max-w-xs text-sm text-muted">{o.tagline}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <ArrowRight width={16} height={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
