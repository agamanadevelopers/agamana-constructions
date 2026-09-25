import Image from 'next/image';
import { projects, groupExperience } from '@/data/projects';
import { Check, Pin } from './icons';
import Reveal from './Reveal';

function ProjectGrid() {
  return (
    <>
      <Reveal className="mb-9">
        <h2 className="text-3xl font-bold text-brand sm:text-[42px]">Our Projects</h2>
        <p className="mt-3 text-muted sm:text-lg">From plan to reality.</p>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="div" key={p.name} delay={i * 60}>
            <article className="card card-hover group h-full overflow-hidden">
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand">
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <Pin width={14} height={14} className="text-brand-green" />
                  {p.location} · {p.type}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function GroupExperience() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <h2 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">
          Agamana Group Project Experience
        </h2>
        <p className="mt-4 max-w-xl text-muted sm:text-lg">
          Agamana Constructions is a dedicated construction vertical built on the
          Agamana Group’s track record across land development and project execution.
          Our construction portfolio is growing, and every project is delivered
          through the same structured process.
        </p>
      </Reveal>
      <Reveal>
        <ul className="grid gap-3 rounded-xl2 border border-black/[0.06] bg-white p-6 sm:p-7">
          {groupExperience.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand">
                <Check width={12} height={12} />
              </span>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        {hasProjects ? <ProjectGrid /> : <GroupExperience />}
      </div>
    </section>
  );
}
