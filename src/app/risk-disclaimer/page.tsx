import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Risk Disclaimer',
  description: 'Important information about construction cost estimates, project risks, and the limitations of information provided on this site.',
};

const EFFECTIVE_DATE = 'September 2025';

export default function RiskDisclaimerPage() {
  return (
    <PageShell>
    <main className="bg-cream py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand">Risk Disclaimer</span>
        </nav>
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">Risk Disclaimer</h1>
        <p className="mt-3 text-sm text-muted">Effective date: {EFFECTIVE_DATE}</p>

        <div className="mt-6 rounded-xl border border-brand-green/30 bg-brand/[0.04] px-5 py-4 text-[14px] leading-relaxed text-brand">
          <p className="font-semibold">Important Notice</p>
          <p className="mt-1">
            All cost estimates, pricing, and project information on this site are indicative and for reference only. They do not constitute a formal quotation, contract, or binding commitment.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/80">

          <section>
            <h2 className="text-lg font-semibold text-brand">1. Indicative Estimates Only</h2>
            <p className="mt-3">
              Construction costs, per-square-foot rates, package pricing, and any project-related figures presented on this website are estimates based on general market conditions and typical project parameters. They are intended to give you a broad understanding of cost ranges and should not be relied upon for budgeting, financing, or decision-making without a formal project-specific assessment.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">2. Factors That Affect Final Cost</h2>
            <p className="mt-3">
              The actual cost of a construction project can vary significantly from any estimate. Key factors that influence final pricing include:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Site conditions: soil type, topography, drainage, and accessibility',
                'Structural requirements: load-bearing design, foundation depth, seismic zone classification',
                'Material specifications and brand selections chosen by the client',
                'Design complexity, floor plan area, and number of floors',
                'Market fluctuations in labour and material costs at the time of execution',
                'Local municipal and regulatory requirements including approvals and levies',
                'Scope changes or additions requested during the construction phase',
                'Utilities and external development requirements (water, electrical, drainage)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">3. No Contract Without Written Agreement</h2>
            <p className="mt-3">
              Nothing on this website — including package descriptions, estimate forms, pricing tables, or any communication through the site — constitutes a legally binding contract or agreement for construction services.
            </p>
            <p className="mt-3">
              A formal construction agreement, outlining the agreed scope, specifications, timeline, and payment terms, signed by an authorised representative of Agamana Group and the client, is required before any construction work begins.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">4. Construction Inherently Carries Risk</h2>
            <p className="mt-3">
              Construction projects involve inherent complexities and uncertainties. While we take every precaution to deliver projects on time and within budget, clients should be aware that:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                'Timelines may be affected by weather, regulatory approvals, or unforeseen site conditions',
                'Material availability and pricing are subject to market conditions outside our control',
                'Scope clarifications during a project may affect cost and schedule',
                'External factors such as local infrastructure availability can impact project delivery',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We aim to identify and communicate any such risks early in the project lifecycle through our structured planning process.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">5. Seek Independent Advice</h2>
            <p className="mt-3">
              We encourage you to seek independent professional advice — including from architects, structural engineers, financial advisors, or legal counsel — before committing to any major construction project. Our team is happy to assist with introductions to trusted professionals where appropriate.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">6. Limitation of Liability</h2>
            <p className="mt-3">
              Agamana Group and Agamana Constructions accept no liability for decisions made based on indicative estimates or general information provided on this website. Our liability in connection with any construction project is governed exclusively by the terms of the written agreement signed between the parties for that project.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">7. Questions or Concerns</h2>
            <p className="mt-3">
              If you have any questions about cost estimates, project risks, or our processes, please contact our team directly. We are committed to transparency at every stage of your project.
            </p>
            <div className="mt-3 rounded-xl border border-black/[0.07] bg-white px-5 py-4 text-sm">
              <p className="font-semibold text-ink">Agamana Constructions</p>
              <p className="mt-1 text-muted">{site.address}</p>
              <p className="mt-2">
                <a href={`mailto:${site.email}`} className="text-brand hover:underline">{site.email}</a>
              </p>
              <p className="mt-1">
                <a href={`tel:${site.phoneHref}`} className="text-muted hover:text-brand">{site.phoneDisplay}</a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy-policy" className="text-brand hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-brand hover:underline">Terms &amp; Conditions</Link>
        </div>
      </div>
    </main>
    </PageShell>
  );
}
