import EstimateProvider from '@/components/estimate/EstimateProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectTypeSelector from '@/components/ProjectTypeSelector';
import GroupEcosystem from '@/components/GroupEcosystem';
import WhatWeBuild from '@/components/WhatWeBuild';
import PackageSection from '@/components/PackageSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import ProjectVisibility from '@/components/ProjectVisibility';
import Team from '@/components/Team';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import { site } from '@/data/site';
import { packages as staticPackages } from '@/data/packages';
import { sanityFetch } from '@/sanity/lib/client';
import {
  heroQuery,
  packagesQuery,
  teamQuery,
  faqsQuery,
  whatWeBuildQuery,
  processStepsQuery,
  groupEcosystemQuery,
} from '@/sanity/lib/queries';

export const revalidate = 60;

export default async function HomePage() {
  const [heroCms, packagesCms, teamCms, faqsCms, whatWeBuildCms, processCms, ecosystemCms] =
    await Promise.all([
      sanityFetch(heroQuery),
      sanityFetch(packagesQuery),
      sanityFetch(teamQuery),
      sanityFetch(faqsQuery),
      sanityFetch(whatWeBuildQuery),
      sanityFetch(processStepsQuery),
      sanityFetch(groupEcosystemQuery),
    ]);

  const packages = (packagesCms as typeof staticPackages | null)?.length
    ? (packagesCms as typeof staticPackages)
    : staticPackages;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: site.brand,
    url: site.url,
    logo: `${site.url}/logo-dark.webp`,
    telephone: site.phoneDisplay,
    email: site.email,
    description:
      'End-to-end house construction, civil infrastructure and turnkey solutions in Bengaluru, Shimoga and Sagara.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.57, Wodeyar Building, 1st Floor, Near Old Private Bus Stand, Opp Court, B.H. Road',
      addressLocality: 'Sagara',
      postalCode: '577401',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    areaServed: site.locations,
    parentOrganization: { '@type': 'Organization', name: site.group, url: site.groupUrl },
    makesOffer: packages.map((p) => ({
      '@type': 'Offer',
      name: `${p.name} Construction Package`,
      priceCurrency: 'INR',
      price: p.price,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: p.price,
        priceCurrency: 'INR',
        unitText: 'per square foot',
      },
    })),
  };

  return (
    <EstimateProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-[76px] lg:pb-0">
        <Hero data={heroCms as Parameters<typeof Hero>[0]['data']} />
        <ProjectTypeSelector />
        <GroupEcosystem ecosystem={ecosystemCms as Parameters<typeof GroupEcosystem>[0]['ecosystem']} />
        <WhatWeBuild categories={whatWeBuildCms as Parameters<typeof WhatWeBuild>[0]['categories']} />
        <PackageSection packages={packages} />
        <ProcessTimeline steps={processCms as Parameters<typeof ProcessTimeline>[0]['steps']} />
        <ProjectVisibility />
        <Team members={teamCms as Parameters<typeof Team>[0]['members']} />
        <Faq faqs={faqsCms as Parameters<typeof Faq>[0]['faqs']} />
        <FinalCta />
      </main>
      <Footer />
      <MobileBottomBar />
    </EstimateProvider>
  );
}
