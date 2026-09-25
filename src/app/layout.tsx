import type { Metadata, Viewport } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import { site } from '@/data/site';
import './globals.css';

const heading = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#01473A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Agamana Constructions | House Construction in Bengaluru, Shimoga & Sagara',
    template: '%s · Agamana Constructions',
  },
  description:
    'Agamana Constructions builds homes, villas, farmhouses, commercial and hospitality spaces in Bengaluru, Shimoga and Sagara. Construction packages from ₹1,879 per sq.ft.',
  keywords: [
    'house construction Bangalore',
    'house construction company in Bangalore',
    'home construction Bangalore',
    'house construction packages Bangalore',
    'construction company Bangalore',
    'home builders Bangalore',
    'house construction Sagara',
    'house construction Shivamogga',
    'turnkey construction Bangalore',
    'villa construction Bangalore',
    'farmhouse construction Karnataka',
  ],
  authors: [{ name: site.brand }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.brand,
    title: 'Agamana Constructions | Let’s Build Your Space.',
    description:
      'Construction for homes, villas, farmhouses, commercial and hospitality spaces across Bengaluru, Shimoga and Sagara.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
