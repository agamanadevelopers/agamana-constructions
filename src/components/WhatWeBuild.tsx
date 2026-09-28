import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/data/images';
import { ArrowRight } from './icons';
import Reveal from './Reveal';

export interface WhatWeBuildCategoryCms {
  title: string;
  items: string[];
  image: string;
  imageAlt?: string;
}

export interface WhatWeBuildSectionCms {
  sectionTitle?: string;
  linkText?: string;
}

const staticCategories: WhatWeBuildCategoryCms[] = [
  { title: 'Residential', items: ['Individual Homes', 'Villas', 'Farmhouses', 'Luxury Residences', 'Renovations'], image: images.buildResidential },
  { title: 'Commercial', items: ['Office Spaces', 'Retail Buildings', 'Commercial Developments'], image: images.buildCommercial },
  { title: 'Hospitality', items: ['Resorts', 'Farm Stays', 'Guest Facilities', 'Community Spaces'], image: images.buildHospitality },
  { title: 'Institutional', items: ['Educational', 'Corporate Facilities', 'Community & Institutional Buildings'], image: images.buildInstitutional },
  { title: 'Civil & Site Development', items: ['Roads & Pathways', 'Drainage', 'Compound Walls', 'Earthwork', 'External Development'], image: images.buildCivil },
];

export default function WhatWeBuild({
  section,
  categories,
}: {
  section?: WhatWeBuildSectionCms | null;
  categories?: WhatWeBuildCategoryCms[] | null;
}) {
  const data = categories?.length ? categories : staticCategories;
  const sectionTitle = section?.sectionTitle ?? 'What Can We Build For You?';
  const linkText = section?.linkText ?? 'View all services';

  return (
    <section id="what-we-build" className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold text-brand sm:text-[40px]">{sectionTitle}</h2>
          </div>
          <Link
            href="/#packages"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-brand sm:inline-flex"
          >
            {linkText}
            <ArrowRight className="btn-arrow" width={16} height={16} />
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {data.map((c, i) => (
            <Reveal as="div" key={c.title} delay={i * 60} className="h-full">
              <article className="group relative overflow-hidden rounded-2xl h-full cursor-default">
                {/* Full-bleed image */}
                <div className="relative aspect-[3/4] w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src={c.image}
                    alt={c.imageAlt ?? c.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 260px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                </div>

                {/* Gradient overlay — deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Number badge */}
                <div className="absolute left-3.5 top-3.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm">
                  <span className="text-[10px] font-bold leading-none text-white/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content overlaid on gradient */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <h3 className="text-[15px] font-semibold leading-snug text-white lg:text-base">{c.title}</h3>
                  <ul className="mt-2.5 space-y-1.5">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-white/75 lg:text-[13px]">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-brand-green" />
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
