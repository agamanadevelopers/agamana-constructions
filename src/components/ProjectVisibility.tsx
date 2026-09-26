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
  { title: 'Progress', desc: 'Regular updates on milestones.', iconKey: 'progress' },
  { title: 'Quality', desc: 'Stage-wise inspections.', iconKey: 'quality' },
  { title: 'Materials', desc: 'Planned procurement and tracking.', iconKey: 'materials' },
  { title: 'Costs', desc: 'Clear scope and BOQ.', iconKey: 'costs' },
  { title: 'Communication', desc: 'A defined channel for updates.', iconKey: 'communication' },
  { title: 'Documentation', desc: 'Project records throughout execution.', iconKey: 'documentation' },
];

export default function ProjectVisibility({ data }: { data?: ProjectVisibilityCms | null }) {
  const sectionTitle = data?.sectionTitle ?? 'Your Project. Your Visibility.';
  const sectionSubtitle = data?.sectionSubtitle ?? "Construction shouldn't feel like a black box. We keep you informed at every stage.";
  const sideImage = data?.sideImage ?? images.siteEngineer;
  const sideImageAlt = data?.sideImageAlt ?? 'Site engineer reviewing construction progress';
  const features = data?.features?.length ? data.features : staticFeatures;

  return (
    <section className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold text-brand sm:text-[40px]">{sectionTitle}</h2>
              <p className="mt-3 max-w-xl text-muted sm:text-lg">{sectionSubtitle}</p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {features.map((f, i) => {
                const Icon = ICON_MAP[f.iconKey ?? ''] ?? IconProgress;
                return (
                  <Reveal as="div" key={f.title} delay={i * 50}>
                    <div className="h-full rounded-2xl border border-black/[0.06] bg-white p-4">
                      <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-mist text-brand">
                        <Icon width={20} height={20} />
                      </span>
                      <h3 className="text-sm font-semibold text-brand">{f.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{f.desc}</p>
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
