import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions governing your use of the Agamana Constructions website.',
};

const EFFECTIVE_DATE = 'September 2025';

export default function TermsPage() {
  return (
    <PageShell>
    <main className="bg-cream py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand">Terms &amp; Conditions</span>
        </nav>
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-muted">Effective date: {EFFECTIVE_DATE}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/80">

          <section>
            <h2 className="text-lg font-semibold text-brand">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the website at{' '}
              <a href={site.url} className="text-brand hover:underline">{site.url}</a>{' '}
              ("the Site"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Site.
            </p>
            <p className="mt-3">
              The Site is operated by <strong className="text-ink">Agamana Constructions</strong>, a business under{' '}
              <strong className="text-ink">Agamana Group</strong>.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">2. Use of the Website</h2>
            <p className="mt-3">You agree to use the Site only for lawful purposes. You must not:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Use the Site in a way that violates any applicable local, national, or international law or regulation',
                'Attempt to gain unauthorised access to any part of the Site or its server',
                'Transmit any unsolicited or unauthorised advertising or promotional material',
                'Reproduce, duplicate, or resell any part of the Site without our express written consent',
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
            <h2 className="text-lg font-semibold text-brand">3. Indicative Pricing</h2>
            <p className="mt-3">
              Any pricing, cost estimates, or per-square-foot rates displayed on this Site are{' '}
              <strong className="text-ink">indicative only</strong> and are provided for general reference purposes.
              They do not constitute a quote, offer, or binding commitment of any kind.
            </p>
            <p className="mt-3">
              Final construction costs depend on a range of factors including but not limited to site conditions, structural requirements, material selections, design complexity, applicable local regulations, and market pricing at the time of execution.
            </p>
            <p className="mt-3">
              A formal written agreement signed by both parties is required before any construction work commences. Please refer to our{' '}
              <Link href="/risk-disclaimer" className="text-brand hover:underline">Risk Disclaimer</Link>{' '}
              for more detail.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">4. No Online Transactions</h2>
            <p className="mt-3">
              This Site does not facilitate any online payments, financial transactions, or bookings. Any engagement with Agamana Constructions for construction services is conducted offline through direct communication with our team.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">5. Intellectual Property</h2>
            <p className="mt-3">
              All content on this Site — including but not limited to text, images, logos, graphics, page layouts, and brand elements — is the intellectual property of Agamana Group or its licensors and is protected under applicable Indian and international copyright and trademark laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, or create derivative works from any content on this Site without prior written permission.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">6. Third-Party Links</h2>
            <p className="mt-3">
              This Site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">7. Disclaimer of Warranties</h2>
            <p className="mt-3">
              The information on this Site is provided on an "as is" and "as available" basis without any representation or warranty, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">8. Limitation of Liability</h2>
            <p className="mt-3">
              To the extent permitted by law, Agamana Group shall not be liable for any indirect, incidental, special, or consequential loss or damage arising out of your use of, or inability to use, this Site or its content.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">9. Privacy</h2>
            <p className="mt-3">
              Your use of this Site is also governed by our{' '}
              <Link href="/privacy-policy" className="text-brand hover:underline">Privacy Policy</Link>,
              which is incorporated into these Terms by reference.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">10. Changes to These Terms</h2>
            <p className="mt-3">
              We reserve the right to amend these Terms and Conditions at any time. Changes will be posted on this page with a revised effective date. Continued use of the Site after any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">11. Governing Law &amp; Jurisdiction</h2>
            <p className="mt-3">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">12. Contact</h2>
            <p className="mt-3">For any questions about these Terms, please contact us:</p>
            <div className="mt-3 rounded-xl border border-black/[0.07] bg-white px-5 py-4 text-sm">
              <p className="font-semibold text-ink">Agamana Group</p>
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
          <Link href="/risk-disclaimer" className="text-brand hover:underline">Risk Disclaimer</Link>
        </div>
      </div>
    </main>
    </PageShell>
  );
}
