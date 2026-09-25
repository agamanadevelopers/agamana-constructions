import type { ReactNode } from 'react';
import EstimateProvider from './estimate/EstimateProvider';
import Header from './Header';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <EstimateProvider>
      <Header />
      <main className="min-h-screen pb-[76px] lg:pb-0">{children}</main>
      <Footer />
      <MobileBottomBar />
    </EstimateProvider>
  );
}
