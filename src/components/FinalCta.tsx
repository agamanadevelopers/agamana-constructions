import Image from 'next/image';
import { images } from '@/data/images';
import { site } from '@/data/site';
import { Phone } from './icons';
import EstimateButton from './estimate/EstimateButton';
import Reveal from './Reveal';

export default function FinalCta() {
  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-xl2 bg-brand">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={images.ctaBackground}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/60" />
          </div>

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-greenSoft">
              Ready to Start?
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-[42px]">
              Have a Plot? Let’s Talk About What You Want to Build.
            </h2>
            <p className="mt-4 max-w-xl text-white/75 sm:text-lg">
              Tell us about your project and we’ll walk you through the next steps, from
              design to construction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <EstimateButton className="w-full !bg-brand-green !text-white hover:!bg-[#3fa869] sm:w-auto">
                Get a Construction Estimate
              </EstimateButton>
              <a
                href={`tel:${site.phoneHref}`}
                className="btn-secondary w-full !border-white/40 !bg-transparent !text-white hover:!bg-white/10 sm:w-auto"
              >
                <Phone width={17} height={17} />
                Call Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
