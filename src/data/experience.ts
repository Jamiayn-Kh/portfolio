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
    period: 'June 2025 – July 2025',
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
  {
    id: 'tms-gps',
    company: 'Enterprise TMS Project',
    role: 'Enterprise System Integration & Technical Analysis',
    type: 'System Integration / Technical Analysis',
    description:
      'Worked within an enterprise Transportation Management System (TMS) environment, focusing on system analysis, API integration coordination, and cross-team technical communication.',
    responsibilities: [
      'TMS system analysis and module understanding',
      'System functionality testing and validation',
      'Created and managed Redmine issues and improvement requests',
      'Coordinated GPS integration between Chinese TMS development team and SmartGPS development team',
      'Worked with Swagger API documentation and Postman API collections',
      'Communicated API requirements across development teams',
      'Defined dashboard requirements and operational vehicle monitoring specifications',
      'Contributed to driver application requirements',
      'System localization and Mongolian terminology work',
      'Cross-team coordination and requirements communication',
    ],
    technologies: ['Swagger', 'Postman', 'Redmine', 'REST API', 'GPS Integration'],
  },
];
