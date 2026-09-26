import Link from 'next/link';
import type { ConstructionPackage } from '@/data/packages';
import { ArrowRight, Check } from './icons';

export default function PackageCard({ pkg }: { pkg: ConstructionPackage }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className={`group relative flex h-full flex-col rounded-2xl p-6 transition-shadow hover:shadow-cardHover sm:p-7 ${
        pkg.featured
          ? 'bg-white ring-2 ring-[#51BA7C]'
          : 'bg-[#F8F7F2]'
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#51BA7C] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm">
          Most Popular
        </span>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {pkg.name}
      </p>

      <p className="mt-3 text-xs font-medium text-muted">Starting from</p>
      <div className="mt-0.5 flex items-baseline gap-1.5">
        <span className="font-heading text-[32px] font-extrabold leading-none text-ink sm:text-[34px]">
          {pkg.priceLabel}
        </span>
        <span className="text-sm font-medium text-muted">/sq.ft</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{pkg.tagline}</p>

      {/* Full detail - desktop only */}
      <ul className="mt-6 hidden space-y-3 lg:block">
        {pkg.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 shrink-0 text-brand-green" width={16} height={16} />
            {h}
          </li>
        ))}
      </ul>

      <span
        className={`mt-7 hidden min-h-[50px] items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition-all lg:inline-flex ${
          pkg.featured
            ? 'bg-brand-green text-white group-hover:bg-[#3fa869]'
            : 'border border-brand/25 text-brand group-hover:border-brand group-hover:bg-white'
        }`}
      >
        View Full Specifications
        <ArrowRight className="btn-arrow" width={16} height={16} />
      </span>
    </Link>
  );
}
