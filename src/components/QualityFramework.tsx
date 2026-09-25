import Reveal from './Reveal';

const principles = [
  'Materials',
  'Workmanship',
  'Inspection',
  'Supervision',
  'Documentation',
  'Final Check',
];

export default function QualityFramework() {
  return (
    <section className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Quality Framework</p>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">
            Quality Is Built Into the Process.
          </h2>
          <p className="mt-4 text-muted sm:text-lg">
            Quality isn’t something we check only when the project is complete. It is
            built into the way the project is planned, executed and monitored.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal as="div" key={p} delay={i * 50}>
              <div className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-4 py-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold text-brand">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-semibold text-brand">
          Quality is a process, not a final inspection.
        </p>
      </div>
    </section>
  );
}
