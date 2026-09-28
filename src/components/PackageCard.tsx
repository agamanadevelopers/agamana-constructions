import Link from 'next/link';
import type { ConstructionPackage } from '@/data/packages';
import { ArrowRight, Check } from './icons';

const TIER = {
  basic: {
    bg: 'bg-[#f0ede6]',
    badge: null,
    nameCls: 'text-brand/60',
    priceCls: 'text-brand',
    unitCls: 'text-muted',
    taglineCls: 'text-muted',
    checkCls: 'text-brand-green',
    itemCls: 'text-ink',
    barCls: 'bg-brand-green',
    emptyBarCls: 'bg-black/10',
    level: 1,
    ctaCls: 'border border-brand/20 text-brand group-hover:border-brand group-hover:bg-brand/5',
  },
  classic: {
    bg: 'bg-[#1b3d2c]',
    badge: { label: 'Most Popular', cls: 'bg-[#51BA7C] text-white' },
    nameCls: 'text-[#51BA7C]',
    priceCls: 'text-white',
    unitCls: 'text-white/55',
    taglineCls: 'text-white/65',
    checkCls: 'text-[#51BA7C]',
    itemCls: 'text-white/85',
    barCls: 'bg-[#51BA7C]',
    emptyBarCls: 'bg-white/15',
    level: 2,
    ctaCls: 'bg-[#51BA7C] text-white group-hover:bg-[#3fa869]',
  },
  luxury: {
    bg: 'bg-white',
    badge: { label: 'Premium', cls: 'border border-[#9a6b28]/35 text-[#9a6b28] bg-[#fef8ed]' },
    nameCls: 'text-[#9a6b28]/80',
    priceCls: 'text-[#9a6b28]',
    unitCls: 'text-[#9a6b28]/55',
    taglineCls: 'text-muted',
    checkCls: 'text-[#9a6b28]',
    itemCls: 'text-ink',
    barCls: 'bg-[#9a6b28]',
    emptyBarCls: 'bg-black/10',
    level: 3,
    ctaCls: 'border border-[#9a6b28]/30 text-[#9a6b28] group-hover:border-[#9a6b28] group-hover:bg-[#9a6b28]/5',
  },
} as const;

export default function PackageCard({ pkg }: { pkg: ConstructionPackage }) {
  const cfg = TIER[pkg.slug] ?? TIER.basic;

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className={`group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-7 ${cfg.bg}`}
    >
      {/* Tier bar + badge row */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={`h-[3px] w-8 rounded-full ${n <= cfg.level ? cfg.barCls : cfg.emptyBarCls}`}
            />
          ))}
        </div>
        {cfg.badge && (
          <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${cfg.badge.cls}`}>
            {cfg.badge.label}
          </span>
        )}
      </div>

      {/* Name */}
      <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${cfg.nameCls}`}>
        {pkg.name}
      </p>

      {/* Price */}
      <p className={`mt-3.5 text-[11px] font-medium ${cfg.unitCls}`}>Starting from</p>
      <div className="mt-0.5 flex items-baseline gap-1.5">
        <span className={`font-heading text-[40px] font-extrabold leading-none tracking-tight sm:text-[44px] ${cfg.priceCls}`}>
          {pkg.priceLabel}
        </span>
        <span className={`text-sm font-medium ${cfg.unitCls}`}>/sq.ft</span>
      </div>

      {/* Tagline */}
      <p className={`mt-4 text-[13px] leading-relaxed ${cfg.taglineCls}`}>{pkg.tagline}</p>

      {/* Divider */}
      <div className={`my-5 h-px ${pkg.slug === 'classic' ? 'bg-white/10' : 'bg-black/[0.07]'}`} />

      {/* Highlights — always visible on all screen sizes */}
      <ul className="space-y-3">
        {pkg.highlights.map((h) => (
          <li key={h} className={`flex items-start gap-2.5 text-[13px] leading-snug ${cfg.itemCls}`}>
            <Check className={`mt-0.5 shrink-0 ${cfg.checkCls}`} width={15} height={15} />
            {h}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-7">
        <span className={`inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-[13px] font-semibold transition-all duration-200 ${cfg.ctaCls}`}>
          View Full Specifications
          <ArrowRight className="btn-arrow" width={15} height={15} />
        </span>
      </div>
    </Link>
  );
}
