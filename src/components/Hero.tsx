import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/data/images';
import { site } from '@/data/site';
import { CircleCheck } from './icons';
import EstimateButton from './estimate/EstimateButton';

export interface HeroCms {
  eyebrow?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  body?: string;
  trustPoints?: string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  heroImage?: string;
  heroImageAlt?: string;
  badgeLabel?: string;
  badgeText?: string;
}

const STATIC_TRUST_POINTS = ['Clear Pricing', 'Quality Execution', 'One Point of Contact'];

export default function Hero({ data }: { data?: HeroCms | null }) {
  const trustPoints = data?.trustPoints?.length ? data.trustPoints : STATIC_TRUST_POINTS;
  const heroImage = data?.heroImage ?? images.hero;
  const heroImageAlt = data?.heroImageAlt ?? 'Contemporary residential architecture built by Agamana Constructions';
  const eyebrow = data?.eyebrow ?? site.tagline;
  const line1 = data?.headlineLine1 ?? "Let's Build";
  const line2 = data?.headlineLine2 ?? 'Your Space.';
  const body = data?.body ?? "From homes and farmhouses to commercial and hospitality spaces, we take care of the construction from start to finish.";
  const ctaPrimary = data?.ctaPrimary ?? 'Get a Construction Estimate';
  const ctaSecondary = data?.ctaSecondary ?? 'View Packages';
  const badgeLabel = data?.badgeLabel ?? 'Agamana Constructions';
  const badgeText = data?.badgeText ?? 'From foundation to a brighter tomorrow.';

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-6 sm:pt-10">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="reveal is-visible">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 font-heading text-[36px] font-extrabold leading-[1.04] sm:text-[48px] lg:text-[56px]">
              <span className="text-[#2f3a34]">{line1}</span>
              <br />
              <span className="text-brand">{line2}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {body}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <EstimateButton className="w-full sm:w-auto">
                {ctaPrimary}
              </EstimateButton>
              <Link href="/packages" className="btn-secondary w-full sm:w-auto">
                {ctaSecondary}
              </Link>
            </div>

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

          <div className="reveal is-visible relative">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[5/5.2]">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 max-w-[200px] rounded-tl-2xl bg-brand/95 p-5 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-greenSoft">
                  {badgeLabel}
                </p>
                <p className="mt-1.5 font-heading text-[17px] font-semibold leading-snug text-white">
                  {badgeText}
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
