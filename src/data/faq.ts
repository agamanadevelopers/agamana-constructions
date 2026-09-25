export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How is the construction cost calculated?',
    answer:
      'Cost is based on your built-up area and the package you choose. The per-sq.ft rate covers the specifications listed for that package. We share a clear estimate once we understand your plot, requirements and preferred specification level.',
  },
  {
    question: 'What is included in your packages?',
    answer:
      'Each package covers design and drawings, structure, and finishing across kitchen, bathrooms, doors and windows, flooring, painting, electrical, plumbing and more. You can view the full specification for each package on this site.',
  },
  {
    question: 'Can I customise a package?',
    answer:
      'Yes. Packages are a starting point. We can adjust specifications, materials and inclusions to suit your requirements and budget, and share a revised estimate.',
  },
  {
    question: 'Do you provide architectural drawings?',
    answer:
      'Yes. Architectural and structural drawings are part of our process, so your home is planned properly before construction begins.',
  },
  {
    question: 'How do I track project progress?',
    answer:
      'We keep you informed at every stage with regular updates on milestones, quality checks and materials, through a defined channel of communication.',
  },
  {
    question: 'Do you undertake renovation projects?',
    answer:
      'Yes. Alongside new construction we take up renovations and upgrades. Share your requirements and we will advise on the right approach.',
  },
  {
    question: 'Do you handle interiors?',
    answer:
      'Interiors are handled through Agamana Interior World, part of the Agamana Group, so design and execution can be coordinated end-to-end.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We primarily serve Bengaluru, Sagara and Shivamogga. If your site is elsewhere in the region, get in touch and we will let you know how we can help.',
  },
];
