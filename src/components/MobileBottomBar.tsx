'use client';

import { site, whatsappLink, whatsappMessages } from '@/data/site';
import { Phone, WhatsApp, ArrowRight } from './icons';
import { useEstimate } from './estimate/EstimateProvider';

export default function MobileBottomBar() {
  const { open } = useEstimate();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/[0.06] bg-white/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-content items-stretch gap-2 px-3 py-2.5">
        <a
          href={`tel:${site.phoneHref}`}
          aria-label="Call Agamana Constructions"
          className="flex min-h-[48px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl border border-black/10 text-brand"
        >
          <Phone width={18} height={18} />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={whatsappLink(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Agamana Constructions"
          className="flex min-h-[48px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl border border-black/10 text-[#128C4B]"
        >
          <WhatsApp width={18} height={18} />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <button
          onClick={() => open()}
          className="group flex min-h-[48px] flex-[1.5] items-center justify-center gap-1.5 rounded-xl bg-brand text-sm font-semibold text-white"
        >
          Get Estimate
          <ArrowRight className="btn-arrow" width={16} height={16} />
        </button>
      </div>
      {/* Safe-area spacer for notched devices */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
