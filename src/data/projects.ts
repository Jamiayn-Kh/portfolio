export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'case-study';
}

export interface ArchNode {
  label: string;
  sublabel?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  period?: string;
  context: string;
  technologies: string[];
  keyAreas: string[];
  links: ProjectLink[];
  architecture?: ArchNode[];
  overview: string;
  problem?: string;
  solution?: string;
  myContribution?: string;
  challenges?: string;
  learned?: string;
  featured: boolean;
  index: number;
}

export const projects: Project[] = [
  {
    slug: 'smart-zud',
    name: 'Smart Zud Risk & Winter Camp Rental System',
    tagline: 'Web system for dzud risk assessment and winter camp rental',
    description:
      'A university full-stack web system combining geographic, weather, livestock and dzud risk factors, with a Python/ML-based risk assessment component.',
    role: 'Full-stack development',
    context: 'University / Diploma Project',
    technologies: [
      'Next.js',
      'React 19',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Python',
      'Flask',
      'JWT',
      'REST API',
      'Leaflet',
      'Chart.js',
    ],
    keyAreas: [
      'Full-stack web development',
      'REST API',
      'Relational database',
      'Python/ML risk assessment',
      'Weather/API integration',
    ],
    links: [],
    architecture: [
      {
        label: 'Frontend',
        sublabel: 'Next.js / React 19',
      },
      {
        label: 'Backend API',
        sublabel: 'NestJS / Node.js',
      },
      {
        label: 'Database',
        sublabel: 'PostgreSQL',
      },
    ],
    overview:
      'A web-based system for winter camp rental and dzud risk assessment, developed as a university diploma project.',
    solution:
      'The Next.js / React frontend connects to a NestJS REST API and PostgreSQL database. The backend also communicates with a Python / Flask risk assessment module. The ML approaches used include Random Forest, Gradient Boosting and Logistic Regression, with cold_index and snow_cumulative among the known model features.',
    featured: true,
    index: 1,
  },
  {
    slug: 'mungun-urlal',
    name: 'Mungun Urlal',
    tagline: 'Backend-focused Java / Spring Boot application',
    description:
      'A backend-oriented software project using Java 17, Spring Boot and PostgreSQL, with JWT authentication and Flyway database migrations.',
    role: 'Backend development',
    context: 'Backend Development Project',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JWT'],
    keyAreas: [
      'Backend architecture',
      'JWT authentication',
      'User and UserRole models',
      'Repository layer',
      'Admin initialization',
      'Database migrations',
    ],
    links: [],
    architecture: [
      {
        label: 'Client / API Consumer',
      },
      {
        label: 'Application',
        sublabel: 'Spring Boot',
      },
      {
        label: 'Repository Layer',
      },
      {
        label: 'Database',
        sublabel: 'PostgreSQL',
      },
    ],
    overview:
      'A Java / Spring Boot backend project demonstrating application architecture, relational database usage, authentication and database migration.',
    solution:
      'The implementation includes User and UserRole models, a repository layer, JWT authentication and admin initialization. Flyway manages migrations for the mungun_urlal database schema.',
    featured: true,
    index: 2,
  },
  {
    slug: 'af-shop',
    name: 'AF Shop — E-commerce Web Application',
    tagline: 'Online clothing store with admin and media management',
    description:
      'A web-based shopping system for clothing / retail, with guest checkout, admin functionality, product management and image / media management.',
    role: 'Web application development',
    context: 'E-commerce Web Application',
    technologies: ['MongoDB Atlas', 'Cloudinary', 'Render', 'Vercel'],
    keyAreas: [
      'Web application development',
      'Backend',
      'MongoDB Atlas database',
      'Cloudinary media storage',
      'Admin and product management',
      'Guest checkout',
      'Deployment with Vercel and Render',
    ],
    links: [
      {
        label: 'Live Site',
        url: 'https://afshop.mn/',
        type: 'live',
      },
    ],
    architecture: [
      {
        label: 'Web Application',
      },
      {
        label: 'Application Backend',
      },
      {
        label: 'Database',
        sublabel: 'MongoDB Atlas',
      },
    ],
    overview:
      'An online shopping system for clothing / retail, presented as one project under the AF Shop name.',
    solution:
      'The application supports guest checkout, admin functionality and product management. MongoDB Atlas is used for the database and Cloudinary for media. Deployment technologies include Vercel and Render.',
    featured: true,
    index: 3,
  },
];
