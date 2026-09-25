'use client';

import { useState } from 'react';
import type { PackageCategory } from '@/data/packages';
import { Plus, Minus, Check } from './icons';

export default function PackageSpecAccordion({
  categories,
}: {
  categories: PackageCategory[];
}) {
  const [open, setOpen] = useState<string | null>(categories[0]?.key ?? null);

  return (
    <div className="flex flex-col gap-3">
      {categories.map((cat) => {
        const isOpen = open === cat.key;
        const hasItems = cat.items.length > 0;
        return (
          <div
            key={cat.key}
            className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white"
          >
            <button
              onClick={() => setOpen(isOpen ? null : cat.key)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-semibold text-brand">{cat.label}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? 'bg-brand text-white' : 'bg-brand-mist text-brand'
                }`}
              >
                {isOpen ? <Minus width={15} height={15} /> : <Plus width={15} height={15} />}
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <ul className="space-y-2.5 px-5 pb-5">
                  {hasItems ? (
                    cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand">
                          <Check width={11} height={11} />
                        </span>
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted">Specifications to be confirmed.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
