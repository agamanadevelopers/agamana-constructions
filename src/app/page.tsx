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
  projectTypeSelectorQuery,
  groupEcosystemSectionQuery,
  groupEcosystemQuery,
  whatWeBuildSectionQuery,
  whatWeBuildQuery,
  packageSectionQuery,
  packagesQuery,
  processTimelineSectionQuery,
  processStepsQuery,
  projectVisibilityQuery,
  teamSectionQuery,
  teamQuery,
  faqSectionQuery,
  faqsQuery,
  finalCtaQuery,
} from '@/sanity/lib/queries';

export const revalidate = 60;

export default async function HomePage() {
  const [
    heroCms,
    projectTypeSelectorCms,
    ecosystemSectionCms,
    ecosystemCms,
    whatWeBuildSectionCms,
    whatWeBuildCms,
    packageSectionCms,
    packagesCms,
    processTimelineSectionCms,
    processCms,
    projectVisibilityCms,
    teamSectionCms,
    teamCms,
    faqSectionCms,
    faqsCms,
    finalCtaCms,
  ] = await Promise.all([
    sanityFetch(heroQuery),
    sanityFetch(projectTypeSelectorQuery),
    sanityFetch(groupEcosystemSectionQuery),
    sanityFetch(groupEcosystemQuery),
    sanityFetch(whatWeBuildSectionQuery),
    sanityFetch(whatWeBuildQuery),
    sanityFetch(packageSectionQuery),
    sanityFetch(packagesQuery),
    sanityFetch(processTimelineSectionQuery),
    sanityFetch(processStepsQuery),
    sanityFetch(projectVisibilityQuery),
    sanityFetch(teamSectionQuery),
    sanityFetch(teamQuery),
    sanityFetch(faqSectionQuery),
    sanityFetch(faqsQuery),
    sanityFetch(finalCtaQuery),
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
        <ProjectTypeSelector data={projectTypeSelectorCms as Parameters<typeof ProjectTypeSelector>[0]['data']} />
        <GroupEcosystem
          section={ecosystemSectionCms as Parameters<typeof GroupEcosystem>[0]['section']}
          ecosystem={ecosystemCms as Parameters<typeof GroupEcosystem>[0]['ecosystem']}
        />
        <WhatWeBuild
          section={whatWeBuildSectionCms as Parameters<typeof WhatWeBuild>[0]['section']}
          categories={whatWeBuildCms as Parameters<typeof WhatWeBuild>[0]['categories']}
        />
        <PackageSection
          sectionData={packageSectionCms as Parameters<typeof PackageSection>[0]['sectionData']}
          packages={packages}
        />
        <ProcessTimeline
          section={processTimelineSectionCms as Parameters<typeof ProcessTimeline>[0]['section']}
          steps={processCms as Parameters<typeof ProcessTimeline>[0]['steps']}
        />
        <ProjectVisibility data={projectVisibilityCms as Parameters<typeof ProjectVisibility>[0]['data']} />
        <Team
          section={teamSectionCms as Parameters<typeof Team>[0]['section']}
          members={teamCms as Parameters<typeof Team>[0]['members']}
        />
        <Faq
          section={faqSectionCms as Parameters<typeof Faq>[0]['section']}
          faqs={faqsCms as Parameters<typeof Faq>[0]['faqs']}
        />
        <FinalCta data={finalCtaCms as Parameters<typeof FinalCta>[0]['data']} />
      </main>
      <Footer />
      <MobileBottomBar />
    </EstimateProvider>
  );
}
