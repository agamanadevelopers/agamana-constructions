import Image from 'next/image';
import { images } from '@/data/images';
import { site } from '@/data/site';
import { ArrowRight } from './icons';
import Reveal from './Reveal';

export interface EcosystemItemCms {
  name: string;
  desc: string;
  image: string;
}

const staticEcosystem: EcosystemItemCms[] = [
  { name: 'Agamana Developers', desc: 'Land Development & Real Estate', image: images.ecoDevelopers },
  { name: 'Agamana Constructions', desc: 'Construction & Civil Execution', image: images.ecoConstructions },
  { name: 'Agamana Interior World', desc: 'Interior Design & Execution', image: images.ecoInterior },
  { name: 'Agamana Projects', desc: 'Project Development & Marketing', image: images.ecoProjects },
];

export default function GroupEcosystem({ ecosystem }: { ecosystem?: EcosystemItemCms[] | null }) {
  const data = ecosystem?.length ? ecosystem : staticEcosystem;

  return (
    <section id="about" className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <Reveal>
            <p className="eyebrow">The Agamana Group</p>
            <h2 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">
              More Than Construction.
            </h2>
            <p className="mt-4 max-w-xl text-muted sm:text-lg">
              Agamana Constructions is part of the broader Agamana Group, bringing
              together complementary capabilities across the real estate, development,
              design and construction ecosystem.
            </p>
            <a
              href={site.groupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group mt-6"
            >
              Explore the Agamana Group
              <ArrowRight className="btn-arrow" width={18} height={18} />
            </a>
          </Reveal>

          <Reveal className="relative">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl2">
              <Image
                src={images.groupFeature}
                alt="Agamana Group developments"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {data.map((e, i) => (
            <Reveal as="div" key={e.name} delay={i * 60}>
              <article className="card card-hover group h-full p-2.5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <Image
                    src={e.image}
                    alt={e.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 pb-2 pt-3.5">
                  <h3 className="text-[15px] font-semibold text-brand">{e.name}</h3>
                  <p className="mt-1 text-sm text-muted">{e.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-9 text-center text-base font-medium text-brand">
          Different capabilities. One integrated ecosystem.
        </p>
      </div>
    </section>
  );
}
