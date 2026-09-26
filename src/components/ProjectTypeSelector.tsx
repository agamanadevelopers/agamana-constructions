'use client';

import Image from 'next/image';
import { images } from '@/data/images';
import { ArrowRight } from './icons';
import { useEstimate } from './estimate/EstimateProvider';
import Reveal from './Reveal';

export interface ProjectTypeSelectorCms {
  sectionTitle?: string;
  sectionSubtitle?: string;
  ctaText?: string;
  types?: { title: string; desc: string; image?: string; estimateType: string }[];
}

const staticTypes = [
  { title: 'My Home', desc: 'Individual homes built around the way you live.', image: images.typeHome, estimateType: 'Home' },
  { title: 'Villa / Farmhouse', desc: 'Spaces that bring you closer to nature.', image: images.typeVilla, estimateType: 'Villa' },
  { title: 'Commercial', desc: 'Functional spaces for your business.', image: images.typeCommercial, estimateType: 'Commercial' },
  { title: 'Hospitality', desc: 'Resorts, farm stays and guest facilities.', image: images.typeHospitality, estimateType: 'Hospitality' },
  { title: 'Renovation', desc: 'Thoughtful upgrades with modern specifications.', image: images.typeRenovation, estimateType: 'Renovation' },
];

export default function ProjectTypeSelector({ data }: { data?: ProjectTypeSelectorCms | null }) {
  const { open } = useEstimate();

  const sectionTitle = data?.sectionTitle ?? 'What are you looking to build?';
  const sectionSubtitle = data?.sectionSubtitle ?? "Every project has a different purpose. Tell us what you are looking to build and we'll help you with the right approach.";
  const ctaText = data?.ctaText ?? 'Tell us about your project';
  const types = data?.types?.length ? data.types : staticTypes;

  return (
    <section className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand sm:text-[40px]">{sectionTitle}</h2>
            <p className="mt-3 text-muted sm:text-lg">{sectionSubtitle}</p>
          </div>
          <button
            onClick={() => open()}
            className="group hidden items-center gap-1.5 text-sm font-semibold text-brand sm:inline-flex"
          >
            {ctaText}
            <ArrowRight className="btn-arrow" width={16} height={16} />
          </button>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-4">
          {types.map((t, i) => (
            <Reveal as="div" key={t.title} delay={i * 50}>
              <button
                onClick={() => open(t.estimateType)}
                className="card card-hover group flex h-full w-full flex-row items-center gap-4 p-2.5 text-left lg:flex-col lg:items-stretch lg:gap-0"
              >
                <div className="relative h-[72px] w-[104px] shrink-0 overflow-hidden rounded-xl lg:aspect-[4/3] lg:h-auto lg:w-full">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 1024px) 110px, 250px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-brand-mist" />
                  )}
                </div>
                <div className="flex flex-1 flex-col lg:px-2 lg:pb-2 lg:pt-3.5">
                  <h3 className="text-base font-semibold text-brand lg:text-[15px]">{t.title}</h3>
                  <p className="mt-1.5 hidden text-[13px] leading-relaxed text-muted lg:block">{t.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
