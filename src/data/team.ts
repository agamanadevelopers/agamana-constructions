import { images } from './images';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  emphasis?: boolean; // stronger visual weight
}

export const team: TeamMember[] = [
  {
    name: 'Vinay Hegde',
    role: 'Co-Founder · Business & Operations',
    bio: 'Vinay brings experience across business operations, technology, design and project coordination, with a focus on building systems, managing operations and developing businesses.',
    image: images.teamVinay,
  },
  {
    name: 'Sudarshan',
    role: 'Co-Founder · Project Development',
    bio: 'Sudarshan brings an entrepreneurial and project-development perspective to Agamana, with a focus on identifying opportunities, developing projects and building long-term value through real estate and land development.',
    image: images.teamSudarshan,
  },
  {
    name: 'Ashwath H.N.',
    role: 'Construction Lead · Civil Engineer',
    bio: '8+ years of construction experience across residential, commercial and retail projects, including high-rise developments. Expertise spans site execution, BOQ and quantity management, quality inspections, scheduling, procurement, contractor coordination, BBS and project completion & handover. He holds a Bachelor of Engineering and a Diploma in Civil Engineering.',
    image: images.teamAshwath,
    emphasis: true,
  },
];
