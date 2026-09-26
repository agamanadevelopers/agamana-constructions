import Image from 'next/image';
import { images } from '@/data/images';
import { site } from '@/data/site';
import { Phone } from './icons';
import EstimateButton from './estimate/EstimateButton';
import Reveal from './Reveal';

export interface FinalCtaCms {
  eyebrow?: string;
  headline?: string;
  body?: string;
  primaryCta?: string;
  secondaryCta?: string;
  backgroundImage?: string;
}

export default function FinalCta({ data }: { data?: FinalCtaCms | null }) {
  const eyebrow = data?.eyebrow ?? 'Ready to Start?';
  const headline = data?.headline ?? "Have a Plot? Let's Talk About What You Want to Build.";
  const body = data?.body ?? "Tell us about your project and we'll walk you through the next steps, from design to construction.";
  const primaryCta = data?.primaryCta ?? 'Get a Construction Estimate';
  const secondaryCta = data?.secondaryCta ?? 'Call Us';
  const bgImage = data?.backgroundImage ?? images.ctaBackground;

  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-xl2 bg-brand">
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/60" />
          </div>

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-greenSoft">
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-[42px]">
              {headline}
            </h2>
            <p className="mt-4 max-w-xl text-white/75 sm:text-lg">{body}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <EstimateButton className="w-full !bg-brand-green !text-white hover:!bg-[#3fa869] sm:w-auto">
                {primaryCta}
              </EstimateButton>
              <a
                href={`tel:${site.phoneHref}`}
                className="btn-secondary w-full !border-white/40 !bg-transparent !text-white hover:!bg-white/10 sm:w-auto"
              >
                <Phone width={17} height={17} />
                {secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
