'use client';

import { useState } from 'react';
import { faqs as staticFaqs } from '@/data/faq';
import { ChevronDown } from './icons';
import Reveal from './Reveal';

export interface FaqItemCms {
  question: string;
  answer: string;
}

export interface FaqSectionCms {
  eyebrow?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export default function Faq({
  section,
  faqs,
}: {
  section?: FaqSectionCms | null;
  faqs?: FaqItemCms[] | null;
}) {
  const data = faqs?.length ? faqs : staticFaqs;
  const [open, setOpen] = useState<number | null>(null);

  const eyebrow = section?.eyebrow ?? 'Common Questions';
  const sectionTitle = section?.sectionTitle ?? 'Frequently Asked Questions';
  const sectionSubtitle = section?.sectionSubtitle ?? 'Answers to the questions we hear most often.';

  return (
    <section id="faq" className="bg-brand-mist py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-brand sm:text-[42px]">{sectionTitle}</h2>
          <p className="mt-3 text-muted sm:text-lg">{sectionSubtitle}</p>
        </Reveal>

        <div className="mx-auto max-w-3xl space-y-3">
          {data.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 40}>
              <div className="card overflow-hidden">
                <button
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-[15px] font-semibold text-brand">{faq.question}</span>
                  <ChevronDown
                    width={18}
                    height={18}
                    className={`mt-0.5 shrink-0 text-brand-green transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
