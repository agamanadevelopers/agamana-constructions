import { siteConfig } from './siteConfig';
import { hero } from './hero';
import { packageSchema } from './package';
import { packageSection } from './packageSection';
import { teamMember } from './teamMember';
import { teamSection } from './teamSection';
import { faqItem } from './faqItem';
import { faqSection } from './faqSection';
import { whatWeBuildCategory } from './whatWeBuildCategory';
import { whatWeBuildSection } from './whatWeBuildSection';
import { processStep } from './processStep';
import { processTimelineSection } from './processTimelineSection';
import { project } from './project';
import { groupEcosystemItem } from './groupEcosystemItem';
import { groupEcosystemSection } from './groupEcosystemSection';
import { projectTypeSelector } from './projectTypeSelector';
import { projectVisibility } from './projectVisibility';
import { finalCta } from './finalCta';
import { enquiry } from './enquiry';

export const schemaTypes = [
  // Singletons / Config
  siteConfig,
  hero,
  projectTypeSelector,
  projectVisibility,
  finalCta,
  packageSection,
  teamSection,
  faqSection,
  whatWeBuildSection,
  processTimelineSection,
  groupEcosystemSection,
  // Enquiries (form submissions)
  enquiry,
  // Lists
  packageSchema,
  teamMember,
  faqItem,
  whatWeBuildCategory,
  processStep,
  project,
  groupEcosystemItem,
];
