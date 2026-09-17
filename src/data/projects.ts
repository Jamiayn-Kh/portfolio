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
  /** Set to true only after the configured public cover file is added. */
  coverImagePath: string;
  coverImageAvailable: boolean;
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
    coverImagePath: '/projects/smart-zud/cover.webp',
    coverImageAvailable: false,
    overview:
      'A web-based system for winter camp rental and dzud risk assessment, developed as a university diploma project.',
    solution:
      'The Next.js / React frontend connects to a NestJS REST API and PostgreSQL database. The backend also communicates with a Python / Flask risk assessment module. The ML approaches used include Random Forest, Gradient Boosting and Logistic Regression, with features such as a winter cold-severity index and cumulative snowfall among the model inputs.',
    featured: true,
    index: 1,
  },
  {
    slug: 'mungun-urlal',
    name: 'Mungun Urlal',
    tagline: 'Backend system for a production-to-sale distribution workflow',
    description:
      'A Java / Spring Boot backend that unifies a multi-stage distribution process — production, shipment to provincial resellers, receipt confirmation and sales reporting — into a single system, with JWT authentication and Flyway database migrations.',
    role: 'Backend development',
    context: 'Backend Development Project',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JWT'],
    keyAreas: [
      'Order-to-sale workflow modeling',
      'Backend architecture',
      'JWT authentication',
      'User and UserRole models',
      'Repository layer',
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
    coverImagePath: '/projects/mungun-urlal/cover.webp',
    coverImageAvailable: false,
    overview:
      'A backend system for a production-and-distribution business: it tracks a product from manufacturing through shipment to provincial resellers, receipt confirmation, sale and stock reporting, replacing manual, Excel-based record-keeping with one centralized workflow.',
    problem:
      'The business ran its order → production/preparation → shipping → handover to a provincial reseller → receipt confirmation → sale → reporting flow largely through manual, Excel-based records, which caused data duplication and errors and gave no real-time view of orders, shipments, receipts or remaining stock.',
    solution:
      'The Spring Boot backend centralizes orders and product data, tracks shipment status through each stage, lets provincial resellers confirm receipt of delivered goods, tracks stock levels and transfers, and records sales for reporting — all from a single source of truth. The implementation includes User and UserRole models, a repository layer, JWT authentication and admin initialization, with Flyway managing migrations for the mungun_urlal database schema.',
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
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'MongoDB Atlas',
      'Cloudinary',
      'Render',
      'Vercel',
    ],
    keyAreas: [
      'Frontend development (React / Next.js / Tailwind CSS)',
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
        label: 'Frontend',
        sublabel: 'React / Next.js / Tailwind CSS',
      },
      {
        label: 'Application Backend',
      },
      {
        label: 'Database',
        sublabel: 'MongoDB Atlas',
      },
    ],
    coverImagePath: '/projects/af-shop/cover.webp',
    coverImageAvailable: false,
    overview:
      'A live online clothing / retail store built end-to-end with a React / Next.js / Tailwind CSS frontend, supporting guest checkout, admin product management and image/media management.',
    solution:
      'The application supports guest checkout, admin functionality and product management. MongoDB Atlas is used for the database and Cloudinary for media. Deployment technologies include Vercel and Render.',
    featured: true,
    index: 3,
  },
];
