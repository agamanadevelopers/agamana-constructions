'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '@/data/faq';
import { Plus, Minus, ArrowRight } from './icons';
import Reveal from './Reveal';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  // Two-column split for desktop
  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  let globalIndex = -1;

  return (
    <section id="faq" className="bg-cream py-14 sm:py-[70px]">
      <div className="container-page">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-brand sm:text-[42px]">
            Frequently Asked Questions
          </h2>
          <Link
            href="/#faq"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-brand sm:inline-flex"
          >
            View all FAQs
            <ArrowRight className="btn-arrow" width={16} height={16} />
          </Link>
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
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-[15px] font-semibold text-ink">
                        {f.question}
                      </span>
                      <span className="shrink-0 text-brand">
                        {isOpen ? <Minus width={20} height={20} /> : <Plus width={20} height={20} />}
                      </span>
                    </button>
                    <div
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
