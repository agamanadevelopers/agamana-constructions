import Image from 'next/image';
import { team } from '@/data/team';
import Reveal from './Reveal';

export default function Team() {
  return (
    <section id="team" className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-9 max-w-2xl">
          <h2 className="text-3xl font-bold text-brand sm:text-[42px]">
            The People Behind Your Project
          </h2>
          <p className="mt-3 text-muted sm:text-lg">
            The people who plan, build and hand over your project.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="div" key={m.name} delay={i * 70} className="flex">
              <article className="card flex h-full flex-col p-2.5">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
                  <h3 className="text-lg font-semibold text-brand">{m.name}</h3>
                  <p className="mt-0.5 text-[13px] font-medium text-muted">{m.role}</p>
                  <div className="my-3 h-px w-full bg-black/[0.07]" />
                  <p className="text-sm leading-relaxed text-muted">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
