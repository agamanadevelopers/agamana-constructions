import Image from 'next/image';
import { team as staticTeam } from '@/data/team';
import Reveal from './Reveal';

export interface TeamMemberCms {
  name: string;
  role: string;
  bio: string;
  image: string;
  emphasis?: boolean;
}

export interface TeamSectionCms {
  eyebrow?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export default function Team({
  section,
  members,
}: {
  section?: TeamSectionCms | null;
  members?: TeamMemberCms[] | null;
}) {
  const data = members?.length ? members : staticTeam;
  const eyebrow = section?.eyebrow ?? 'The People Behind the Work';
  const sectionTitle = section?.sectionTitle ?? 'Built by a Team That Cares.';
  const sectionSubtitle = section?.sectionSubtitle ?? 'Our team brings together engineering depth, project development expertise and operational rigour.';

  const hero = data.find((m) => m.emphasis);
  const rest = data.filter((m) => !m.emphasis);

  return (
    <section id="team" className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">{sectionTitle}</h2>
          <p className="mt-3 text-muted sm:text-lg">{sectionSubtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {hero && (
            <Reveal className="md:col-span-3 lg:col-span-1">
              <article className="card h-full overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={hero.image}
                    alt={hero.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand">{hero.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-green">{hero.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{hero.bio}</p>
                </div>
              </article>
            </Reveal>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-3 lg:col-span-2">
            {rest.map((m, i) => (
              <Reveal as="article" key={m.name} delay={i * 80} className="card overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-green">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
