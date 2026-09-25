/**
 * Projects.
 * -------------------------------------------------------------------------
 * Agamana Constructions is a relatively new dedicated construction vertical,
 * so we do NOT ship an invented portfolio (PRD §20, §35).
 *
 * Leave `projects` empty to show the "Agamana Group Project Experience"
 * fallback. Add real, editable entries here as projects become available and
 * the Projects grid will render automatically.
 * -------------------------------------------------------------------------
 */

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Planned';

export interface Project {
  name: string;
  location: string;
  type: string;
  status: ProjectStatus;
  image: string; // Agamana's own project photo URL
}

export const projects: Project[] = [
  // Example shape (leave commented until real projects exist):
  // {
  //   name: 'Hillside Residence',
  //   location: 'Sagara',
  //   type: 'Individual Home',
  //   status: 'Ongoing',
  //   image: 'https://.../your-photo.jpg',
  // },
];

/** Points visitors can trust while the dedicated construction portfolio grows. */
export const groupExperience: string[] = [
  'Land development and real estate execution',
  'Project development and delivery',
  'Civil engineering and site execution expertise',
  'Coordinated design-to-handover process',
];
