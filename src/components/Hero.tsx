import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/data/images';
import { site } from '@/data/site';
import { CircleCheck } from './icons';
import EstimateButton from './estimate/EstimateButton';

const trustPoints = ['Clear Pricing', 'Quality Execution', 'One Point of Contact'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-6 sm:pt-10">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Copy - first on mobile and desktop-left */}
          <div className="reveal is-visible">
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="mt-4 font-heading text-[36px] font-extrabold leading-[1.04] sm:text-[48px] lg:text-[56px]">
              <span className="text-[#2f3a34]">Let’s Build</span>
              <br />
              <span className="text-brand">Your Space.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              From homes and farmhouses to commercial and hospitality spaces, we take
              care of the construction from start to finish.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <EstimateButton className="w-full sm:w-auto">
                Get a Construction Estimate
              </EstimateButton>
              <Link href="/#packages" className="btn-secondary w-full sm:w-auto">
                View Packages
              </Link>
            </div>

            {/* Trust points */}
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
              {trustPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <CircleCheck className="text-brand-green" width={18} height={18} />
                  {p}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-medium text-muted">
              {site.locations.join(' • ')}
            </p>
          </div>

          {/* Image - after copy on mobile, right on desktop */}
          <div className="reveal is-visible relative">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[5/5.2]">
              <Image
                src={images.hero}
                alt="Contemporary residential architecture built by Agamana Constructions"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 max-w-[200px] rounded-tl-2xl bg-brand/95 p-5 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-greenSoft">
                  Agamana Constructions
                </p>
                <p className="mt-1.5 font-heading text-[17px] font-semibold leading-snug text-white">
                  From foundation to a brighter tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 h-px w-full bg-black/[0.06] sm:mt-14" />
    </section>
  );
}
