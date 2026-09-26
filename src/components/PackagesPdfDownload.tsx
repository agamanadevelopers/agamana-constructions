'use client';

import dynamic from 'next/dynamic';
import { type ConstructionPackage } from '@/data/packages';

const PackagesPdfContent = dynamic(() => import('./PackagesPdfContent'), {
  ssr: false,
  loading: () => (
    <span className="inline-flex items-center gap-2 rounded-lg border border-brand bg-brand px-6 py-3 text-sm font-semibold text-white opacity-70">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Loading PDF…
    </span>
  ),
});

export default function PackagesPdfDownload({ packages }: { packages: ConstructionPackage[] }) {
  return <PackagesPdfContent packages={packages} />;
}
