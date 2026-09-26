'use client';

import { useState } from 'react';
import Link from 'next/link';
import { packages as staticPackages, packageCategories, type ConstructionPackage } from '@/data/packages';
import { Check, ArrowRight } from './icons';

export default function PackageComparison({ packages }: { packages?: ConstructionPackage[] | null }) {
  const data = packages?.length ? packages : staticPackages;

  // Derive category key+label list: prefer from first package's categories, fall back to static order
  const categoryList = data[0]?.categories.length
    ? data[0].categories.map(({ key, label }) => ({ key, label }))
    : packageCategories;

  const defaultSlug = (data.find((p) => p.featured) ?? data[0])?.slug as string;
  const [active, setActive] = useState<string>(defaultSlug);
  const activePkg = data.find((p) => p.slug === active) ?? data[0];

  return (
    <div>
      {/* ---------- Desktop: 3-column ---------- */}
      <div className="hidden lg:block">
        {/* Sticky price header */}
        <div className="sticky top-[68px] z-20 grid gap-4 rounded-2xl border border-black/[0.06] bg-white/95 p-4 shadow-soft backdrop-blur"
          style={{ gridTemplateColumns: `200px repeat(${data.length}, 1fr)` }}>
          <div className="flex items-end text-sm font-semibold text-muted">
            Specification
          </div>
          {data.map((p) => (
            <div
              key={p.slug}
              className={`rounded-xl p-4 text-center ${
                p.featured ? 'bg-brand text-white' : 'bg-brand-mist text-brand'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
                {p.name}
              </p>
              <p className="mt-1 text-[11px] font-medium opacity-60">Starting from</p>
              <p className="font-heading text-2xl font-extrabold">
                {p.priceLabel}
                <span className="text-xs font-medium opacity-70"> /sq.ft</span>
              </p>
              <Link
                href={`/packages/${p.slug}`}
                className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${
                  p.featured ? 'text-brand-greenSoft' : 'text-brand-green'
                }`}
              >
                View package <ArrowRight width={13} height={13} />
              </Link>
            </div>
          ))}
        </div>

        {/* Category rows */}
        <div className="mt-4 space-y-4">
          {categoryList.map(({ key, label }) => (
            <div
              key={key}
              className="grid gap-4 rounded-2xl border border-black/[0.06] bg-white p-4"
              style={{ gridTemplateColumns: `200px repeat(${data.length}, 1fr)` }}
            >
              <div className="flex items-start pt-1 text-sm font-semibold text-brand">
                {label}
              </div>
              {data.map((p) => {
                const cat = p.categories.find((c) => c.key === key);
                return (
                  <ul key={p.slug} className="space-y-2">
                    {cat && cat.items.length > 0 ? (
                      cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand">
                            <Check width={10} height={10} />
                          </span>
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-muted">Not included</li>
                    )}
                  </ul>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Mobile / Tablet: selector ---------- */}
      <div className="lg:hidden">
        <div className="sticky top-[68px] z-20 -mx-5 mb-5 bg-cream/95 px-5 py-3 backdrop-blur">
          <div
            className="grid gap-2 rounded-full border border-black/[0.06] bg-white p-1"
            style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
          >
            {data.map((p) => (
              <button
                key={p.slug}
                onClick={() => setActive(p.slug)}
                aria-pressed={active === p.slug}
                className={`min-h-[44px] rounded-full text-sm font-semibold transition-colors ${
                  active === p.slug ? 'bg-brand text-white' : 'text-brand'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {activePkg && (
          <>
            <div className="mb-5 rounded-2xl bg-brand p-5 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-greenSoft">
                {activePkg.name}
              </p>
              <p className="mt-1 text-xs font-medium text-white/60">Starting from</p>
              <p className="font-heading text-3xl font-extrabold">
                {activePkg.priceLabel}
                <span className="text-sm font-medium text-white/70"> / sq.ft</span>
              </p>
              <p className="mt-2 text-sm text-white/75">{activePkg.tagline}</p>
            </div>

            <div className="space-y-3">
              {activePkg.categories.map((cat) => (
                <div key={cat.key} className="rounded-2xl border border-black/[0.06] bg-white p-5">
                  <h3 className="text-sm font-semibold text-brand">{cat.label}</h3>
                  <ul className="mt-3 space-y-2">
                    {cat.items.length > 0 ? (
                      cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand">
                            <Check width={10} height={10} />
                          </span>
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-muted">Specifications to be confirmed.</li>
                    )}
                  </ul>
                </div>
              ))}
              <Link href={`/packages/${activePkg.slug}`} className="btn-primary group w-full">
                View {activePkg.name} package
                <ArrowRight className="btn-arrow" width={16} height={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
