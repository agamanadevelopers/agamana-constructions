import Link from 'next/link';
import { packages as staticPackages, type ConstructionPackage } from '@/data/packages';
import { ArrowRight } from './icons';
import PackageCard from './PackageCard';
import Reveal from './Reveal';

export default function PackageSection({ packages }: { packages?: ConstructionPackage[] | null }) {
  const data = packages?.length ? packages : staticPackages;

  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-brand py-16 text-white sm:py-24"
      style={{
        backgroundImage:
          'radial-gradient(120% 80% at 30% 0%, rgba(81,186,124,0.28) 0%, rgba(1,71,58,0) 55%)',
      }}
    >
      <div className="container-page relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-[42px]">
              Choose Your Construction Package
            </h2>
            <p className="mt-3 text-white/70 sm:text-lg">
              Three specification levels, built to the same standards. Pick the finish
              that fits your budget.
            </p>
          </div>
          <Link
            href="/packages"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-greenSoft hover:text-white"
          >
            Compare all specifications
            <ArrowRight className="btn-arrow" width={16} height={16} />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 pt-3 md:grid-cols-3 lg:mt-14">
          {data.map((pkg, i) => (
            <Reveal as="div" key={pkg.slug} delay={i * 80} className="flex">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          Indicative per-sq.ft rates. Final estimate depends on design, site and
          specifications.
        </p>
      </div>
    </section>
  );
}
