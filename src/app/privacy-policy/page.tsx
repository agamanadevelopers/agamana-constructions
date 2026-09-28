import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy – Agamana Constructions',
  description: 'How Agamana Constructions collects, uses, and protects your personal information.',
};

const EFFECTIVE_DATE = 'September 2025';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Effective date: {EFFECTIVE_DATE}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/80">

          <section>
            <h2 className="text-lg font-semibold text-brand">1. Who We Are</h2>
            <p className="mt-3">
              This website is operated by <strong className="text-ink">Agamana Constructions</strong>, a business under{' '}
              <strong className="text-ink">Agamana Group</strong>, a company registered and operating under the laws of India.
              Our registered office is at:
            </p>
            <address className="mt-3 not-italic rounded-xl border border-black/[0.07] bg-white px-5 py-4 text-sm text-muted">
              {site.address}
            </address>
            <p className="mt-3">
              For any privacy-related queries, write to us at{' '}
              <a href={`mailto:${site.email}`} className="text-brand hover:underline">{site.email}</a>.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">2. Information We Collect</h2>
            <p className="mt-3">We collect personal information only when you voluntarily provide it through our website. This includes:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Your name',
                'Phone number',
                'Email address',
                'Project details and location (if provided in the estimate form)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We also collect non-personal usage data through Google Analytics (see Section 4), such as pages visited, time spent on the site, and general location (city/country level).
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">3. How We Use Your Information</h2>
            <p className="mt-3">We use the information you submit to:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Respond to your estimate or project enquiry',
                'Contact you via phone, email, or WhatsApp regarding your construction project',
                'Provide relevant information about our services and packages',
                'Improve our website and understand how visitors engage with it',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">4. Cookies & Analytics</h2>
            <p className="mt-3">
              This website uses <strong className="text-ink">Google Analytics</strong> to collect anonymised usage data. Google Analytics places cookies in your browser to help us understand visitor behaviour. This data is aggregated and does not identify you personally.
            </p>
            <p className="mt-3">
              You can opt out of Google Analytics tracking by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
            <p className="mt-3">
              We do not use any other tracking cookies, advertising pixels, or session-recording tools.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">5. Payments</h2>
            <p className="mt-3">
              This website does not process any online payments. All financial transactions, if applicable, are conducted offline directly with our team. We do not collect or store any payment card or banking information.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">6. Data Retention</h2>
            <p className="mt-3">
              We retain your contact information for as long as it is necessary to fulfil your enquiry and maintain a record of our communications. If you wish to have your data removed, you may contact us at{' '}
              <a href={`mailto:${site.email}`} className="text-brand hover:underline">{site.email}</a>{' '}
              and we will action your request within a reasonable timeframe.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">7. Security</h2>
            <p className="mt-3">
              We take reasonable precautions to protect the information you submit against unauthorised access, loss, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">8. Children's Privacy</h2>
            <p className="mt-3">
              Our website is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">9. Governing Law</h2>
            <p className="mt-3">
              This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000, and applicable rules. Any disputes arising from this policy shall be subject to the jurisdiction of courts in Karnataka, India.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">10. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this page periodically.
            </p>
          </section>

          <div className="h-px bg-black/[0.07]" />

          <section>
            <h2 className="text-lg font-semibold text-brand">11. Contact Us</h2>
            <p className="mt-3">
              For questions, data requests, or concerns about this policy, please contact:
            </p>
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
          <Link href="/terms" className="text-brand hover:underline">Terms &amp; Conditions</Link>
          <Link href="/risk-disclaimer" className="text-brand hover:underline">Risk Disclaimer</Link>
          <Link href="/" className="text-muted hover:text-brand">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
