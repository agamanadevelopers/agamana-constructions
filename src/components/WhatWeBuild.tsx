import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/data/images';
import { ArrowRight } from './icons';
import Reveal from './Reveal';

const categories = [
  {
    title: 'Residential',
    items: ['Individual Homes', 'Villas', 'Farmhouses', 'Luxury Residences', 'Renovations'],
    image: images.buildResidential,
  },
  {
    title: 'Commercial',
    items: ['Office Spaces', 'Retail Buildings', 'Commercial Developments'],
    image: images.buildCommercial,
  },
  {
    title: 'Hospitality',
    items: ['Resorts', 'Farm Stays', 'Guest Facilities', 'Community Spaces'],
    image: images.buildHospitality,
  },
  {
    title: 'Institutional',
    items: ['Educational', 'Corporate Facilities', 'Community & Institutional Buildings'],
    image: images.buildInstitutional,
  },
  {
    title: 'Civil & Site Development',
    items: ['Roads & Pathways', 'Drainage', 'Compound Walls', 'Earthwork', 'External Development'],
    image: images.buildCivil,
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-brand sm:text-[40px]">
            What Can We Build For You?
          </h2>
          <Link
            href="/#packages"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-brand sm:inline-flex"
          >
            View all services
            <ArrowRight className="btn-arrow" width={16} height={16} />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-5 lg:gap-4">
          {categories.map((c, i) => (
            <Reveal as="div" key={c.title} delay={i * 50}>
              <article className="card card-hover group flex h-full flex-row items-center gap-4 p-2.5 lg:flex-col lg:items-stretch lg:gap-0">
                <div className="relative h-[72px] w-[104px] shrink-0 overflow-hidden rounded-xl lg:aspect-[16/10] lg:h-auto lg:w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 1024px) 110px, 250px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col lg:px-2.5 lg:pb-2.5 lg:pt-4">
                  <h3 className="text-base font-semibold text-brand lg:text-[17px]">
                    {c.title}
                  </h3>
                  <ul className="mt-3 hidden space-y-1.5 lg:block">
                    {c.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
