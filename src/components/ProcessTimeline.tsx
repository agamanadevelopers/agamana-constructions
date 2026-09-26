import Reveal from './Reveal';

export interface ProcessStepCms {
  n: string;
  title: string;
  desc: string;
}

export interface ProcessTimelineSectionCms {
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const staticSteps: ProcessStepCms[] = [
  { n: '01', title: 'Discover', desc: 'Understand your requirements, site conditions, expectations and budget.' },
  { n: '02', title: 'Plan', desc: 'Design, engineering approach, scope and project plan.' },
  { n: '03', title: 'Estimate', desc: 'BOQ, specifications, quantities and project costing.' },
  { n: '04', title: 'Build', desc: 'Construction execution with coordinated teams.' },
  { n: '05', title: 'Monitor', desc: 'Progress, quality, materials and milestones.' },
  { n: '06', title: 'Handover', desc: 'Final checks, documentation and handover.' },
];

export default function ProcessTimeline({
  section,
  steps,
}: {
  section?: ProcessTimelineSectionCms | null;
  steps?: ProcessStepCms[] | null;
}) {
  const data = steps?.length ? steps : staticSteps;
  const sectionTitle = section?.sectionTitle ?? 'From Your First Conversation to Handover';
  const sectionSubtitle = section?.sectionSubtitle ?? 'A structured approach to make your construction journey smoother and more predictable.';

  return (
    <section id="process" className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-brand sm:text-[42px]">{sectionTitle}</h2>
          <p className="mt-3 text-muted sm:text-lg">{sectionSubtitle}</p>
        </Reveal>

        <ol className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-0">
          {data.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60} className="relative">
              {i < data.length - 1 && (
                <span className="absolute left-[calc(2rem+2px)] top-5 hidden h-px w-[calc(100%-2rem)] bg-brand-green/30 lg:block" />
              )}
              <div className="flex items-start gap-4 lg:flex-col lg:gap-4">
                <span
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                    i === 0 || i === data.length - 1 ? 'bg-brand' : 'bg-brand-green'
                  }`}
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted lg:pr-3">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
