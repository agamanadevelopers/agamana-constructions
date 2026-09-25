'use client';

import Image from 'next/image';
import { images } from '@/data/images';
import { ArrowRight } from './icons';
import { useEstimate } from './estimate/EstimateProvider';
import Reveal from './Reveal';

const types = [
  {
    title: 'My Home',
    desc: 'Individual homes built around the way you live.',
    image: images.typeHome,
    estimate: 'Home',
  },
  {
    title: 'Villa / Farmhouse',
    desc: 'Spaces that bring you closer to nature.',
    image: images.typeVilla,
    estimate: 'Villa',
  },
  {
    title: 'Commercial',
    desc: 'Functional spaces for your business.',
    image: images.typeCommercial,
    estimate: 'Commercial',
  },
  {
    title: 'Hospitality',
    desc: 'Resorts, farm stays and guest facilities.',
    image: images.typeHospitality,
    estimate: 'Hospitality',
  },
  {
    title: 'Renovation',
    desc: 'Thoughtful upgrades with modern specifications.',
    image: images.typeRenovation,
    estimate: 'Renovation',
  },
];

export default function ProjectTypeSelector() {
  const { open } = useEstimate();

  return (
    <section className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand sm:text-[40px]">
              What are you looking to build?
            </h2>
            <p className="mt-3 text-muted sm:text-lg">
              Every project has a different purpose. Tell us what you are looking to
              build and we’ll help you with the right approach.
            </p>
          </div>
          <button
            onClick={() => open()}
            className="group hidden items-center gap-1.5 text-sm font-semibold text-brand sm:inline-flex"
          >
            Tell us about your project
            <ArrowRight className="btn-arrow" width={16} height={16} />
          </button>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-4">
          {types.map((t, i) => (
            <Reveal as="div" key={t.title} delay={i * 50}>
              <button
                onClick={() => open(t.estimate)}
                className="card card-hover group flex h-full w-full flex-row items-center gap-4 p-2.5 text-left lg:flex-col lg:items-stretch lg:gap-0"
              >
                <div className="relative h-[72px] w-[104px] shrink-0 overflow-hidden rounded-xl lg:aspect-[4/3] lg:h-auto lg:w-full">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 1024px) 110px, 250px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col lg:px-2 lg:pb-2 lg:pt-3.5">
                  <h3 className="text-base font-semibold text-brand lg:text-[15px]">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 hidden text-[13px] leading-relaxed text-muted lg:block">
                    {t.desc}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
