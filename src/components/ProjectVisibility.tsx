import Image from 'next/image';
import { images } from '@/data/images';
import Reveal from './Reveal';
import {
  IconProgress,
  IconQuality,
  IconMaterials,
  IconCosts,
  IconCommunication,
  IconDocumentation,
} from './icons';

const ICON_MAP: Record<string, React.ComponentType<{ width: number; height: number }>> = {
  progress: IconProgress,
  quality: IconQuality,
  materials: IconMaterials,
  costs: IconCosts,
  communication: IconCommunication,
  documentation: IconDocumentation,
};

export interface ProjectVisibilityCms {
  sectionTitle?: string;
  sectionSubtitle?: string;
  sideImage?: string;
  sideImageAlt?: string;
  features?: { title: string; desc: string; iconKey?: string }[];
}

const staticFeatures = [
  { title: 'Progress', desc: 'Regular milestone updates so you always know where your project stands.', iconKey: 'progress' },
  { title: 'Quality', desc: 'Stage-wise inspections at every critical phase of construction.', iconKey: 'quality' },
  { title: 'Materials', desc: 'Planned procurement with full tracking from order to site.', iconKey: 'materials' },
  { title: 'Costs', desc: 'Clear scope, detailed BOQ, and no surprise charges.', iconKey: 'costs' },
  { title: 'Communication', desc: 'A dedicated channel so your questions never go unanswered.', iconKey: 'communication' },
  { title: 'Documentation', desc: 'Complete project records maintained from start to handover.', iconKey: 'documentation' },
];

export default function ProjectVisibility({ data }: { data?: ProjectVisibilityCms | null }) {
  const sectionTitle = data?.sectionTitle ?? 'Your Project. Your Visibility.';
  const sectionSubtitle = data?.sectionSubtitle ?? "Construction shouldn't feel like a black box. We keep you informed at every stage — progress, quality, costs and more.";
  const sideImage = data?.sideImage ?? images.siteEngineer;
  const sideImageAlt = data?.sideImageAlt ?? 'Site engineer reviewing construction progress';
  const features = data?.features?.length ? data.features : staticFeatures;

  return (
    <section className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Full Transparency</p>
              <h2 className="mt-3 text-3xl font-bold text-brand sm:text-[40px] sm:leading-[1.15]">
                {sectionTitle}
              </h2>
              <p className="mt-4 max-w-xl text-muted sm:text-lg">{sectionSubtitle}</p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {features.map((f, i) => {
                const Icon = ICON_MAP[f.iconKey ?? ''] ?? IconProgress;
                return (
                  <Reveal as="div" key={f.title} delay={i * 60} className="h-full">
                    <div className="group h-full rounded-2xl border border-black/[0.07] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/30 hover:shadow-md">
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/[0.07] text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                        <Icon width={22} height={22} />
                      </span>
                      <h3 className="text-[15px] font-semibold leading-snug text-brand">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/4.6]">
              <Image
                src={sideImage}
                alt={sideImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
              {/* Floating badge overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-brand">No surprises. Ever.</p>
                  <p className="text-[11px] text-muted">Updates shared at every stage of your build</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
