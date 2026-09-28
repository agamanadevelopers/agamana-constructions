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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.map((c, i) => (
            <Reveal as="div" key={c.title} delay={i * 60} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={c.image}
                    alt={c.imageAlt ?? c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category number badge */}
                  <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Text content — always visible */}
                <div className="flex flex-1 flex-col p-4 lg:p-4">
                  <h3 className="text-[15px] font-semibold leading-snug text-brand">{c.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
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
