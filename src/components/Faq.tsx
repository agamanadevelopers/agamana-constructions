'use client';

import { useState } from 'react';
import { faqs as staticFaqs } from '@/data/faq';
import { Plus, Minus } from './icons';
import Reveal from './Reveal';

export interface FaqItemCms {
  question: string;
  answer: string;
}

export default function Faq({ faqs }: { faqs?: FaqItemCms[] | null }) {
  const data = faqs?.length ? faqs : staticFaqs;
  const [open, setOpen] = useState<number | null>(0);

  const mid = Math.ceil(data.length / 2);
  const columns = [data.slice(0, mid), data.slice(mid)];

  let globalIndex = -1;

  return (
    <section id="faq" className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-9">
          <h2 className="text-3xl font-bold text-brand sm:text-[42px]">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-6">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((f) => {
                globalIndex += 1;
                const idx = globalIndex;
                const isOpen = open === idx;
                return (
                  <div
                    key={f.question}
                    className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      id={`faq-btn-${idx}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-[15px] font-semibold text-ink">
                        {f.question}
                      </span>
                      <span className="shrink-0 text-brand" aria-hidden="true">
                        {isOpen ? <Minus width={20} height={20} /> : <Plus width={20} height={20} />}
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      className="grid transition-all duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                          {f.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
