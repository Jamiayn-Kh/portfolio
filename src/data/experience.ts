export interface Experience {
  id: string;
  company: string;
  originalCompany?: string;
  role: string;
  period?: string;
  location?: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'hunnu-air',
    company: 'Hunnu Air LLC',
    originalCompany: 'Хүннү Эйр ХХК',
    role: 'Web Development',
    period: '2025/06 – 2025/07',
    location: 'Ulaanbaatar, Mongolia',
    type: 'Web Development',
    description:
      'Implemented a system for recording which employees had viewed mandatory company documents.',
    responsibilities: [
      'Developed a document-tracking web system',
      'Recorded employee document view status',
    ],
    technologies: [],
  },
];
