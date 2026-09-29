import Reveal from './Reveal';

const PROFILE_PDF = '/agamana-company-profile.pdf';

export default function CompanyProfileDownload() {
  return (
    <section className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm">
            {/* Decorative background pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle, #01473A 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Brand accent bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-brand" />

            <div className="relative flex flex-col gap-8 px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              {/* Left — text */}
              <div className="max-w-xl">
                <p className="eyebrow">Company Profile</p>
                <h2 className="mt-3 text-2xl font-bold text-brand sm:text-[32px] sm:leading-[1.2]">
                  Our Company Profile
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Download our profile to learn about our services, construction packages, and how we work. Good to share with family or a co-decision maker before getting in touch.
                </p>

              </div>

              {/* Right — download card */}
              <div className="shrink-0">
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-black/[0.07] bg-brand-mist p-6 sm:p-8">
                  {/* PDF icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>

                  <div className="text-center">
                    <p className="text-[15px] font-semibold text-brand">Company Profile</p>
                    <p className="mt-0.5 text-[12px] text-muted">PDF · Agamana Constructions</p>
                  </div>

                  <a
                    href={PROFILE_PDF}
                    download
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-brand/90 hover:shadow-lg active:scale-[0.98]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
