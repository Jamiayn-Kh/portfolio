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
    slug: 'smart-zud-risk-system',
    name: 'Smart Zud Risk & Winter Camp Rental',
    tagline: 'Web system for dzud risk assessment and winter camp rental',
    description:
      'A web-based system combining geographic, weather, and livestock data to assess dzud (extreme winter) risk. Includes a Python/ML-based risk assessment component and a camp rental module.',
    role: 'Full-stack Developer',
    context: 'University / Diploma Project',
    period: '2025–2026',
    technologies: [
      'Next.js', 'React 19', 'NestJS', 'Node.js',
      'PostgreSQL', 'Prisma', 'Python', 'Flask',
      'JWT', 'REST API', 'Leaflet', 'Chart.js',
    ],
    keyAreas: [
      'Full-stack web development',
      'REST API design',
      'Database schema design',
      'Python/ML integration',
      'Map-based UI (Leaflet)',
      'Authentication (JWT)',
      'Weather data integration',
    ],
    links: [],
    architecture: [
      { label: 'Frontend', sublabel: 'Next.js / React 19' },
      { label: 'Backend API', sublabel: 'NestJS / Node.js' },
      { label: 'Database', sublabel: 'PostgreSQL / Prisma' },
      { label: 'AI Service', sublabel: 'Python / Flask' },
    ],
    overview:
      'A university diploma project building a web system that helps assess dzud (extreme Mongolian winter) risk for livestock herders, combined with a winter camp rental module.',
    problem:
      'Mongolian herders face severe dzud events that threaten livestock. There was a need for a system that could combine geographic, weather, and livestock data to provide risk assessments, while also enabling digital camp rental management.',
    solution:
      'Built a full-stack web application with a NestJS backend, Next.js frontend, and a separate Python/Flask service handling the ML-based risk assessment. The system integrates weather data, geographic information via Leaflet maps, and livestock data to generate risk scores using machine learning models.',
    myContribution:
      'Designed and implemented the NestJS REST API, PostgreSQL database schema, Next.js frontend, and coordinated integration with the Python/Flask ML module. Implemented JWT authentication, Leaflet map integration, and Chart.js data visualization.',
    challenges:
      'Coordinating data flow between the NestJS backend and the Flask ML service required careful API design. Integrating weather data with geographic and livestock variables into a coherent risk model was a technically complex data engineering task.',
    learned:
      'Gained experience in multi-service architecture (NestJS + Flask), REST API design between services, and working with geographic/map libraries. Understood how ML models can be deployed as separate API services.',
    featured: true,
    index: 1,
  },
  {
    slug: 'mungun-urlal',
    name: 'Mungun Urlal',
    tagline: 'Backend-focused Java / Spring Boot application',
    description:
      'A backend software project built with Java 17 and Spring Boot, demonstrating backend architecture, authentication, database design, and migration management.',
    role: 'Backend Developer',
    context: 'Personal / Practice Project',
    technologies: [
      'Java 17', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JWT',
    ],
    keyAreas: [
      'Backend architecture',
      'Authentication system (JWT)',
      'Database schema design',
      'Database migrations (Flyway)',
      'Repository pattern',
      'Role-based access control',
    ],
    links: [],
    architecture: [
      { label: 'API Layer', sublabel: 'Spring Boot / REST' },
      { label: 'Service Layer', sublabel: 'Business Logic' },
      { label: 'Repository Layer', sublabel: 'JPA / PostgreSQL' },
      { label: 'Database', sublabel: 'PostgreSQL / Flyway' },
    ],
    overview:
      'A backend application built with Java 17 and Spring Boot, focused on demonstrating backend development patterns including authentication, user role management, and database migration.',
    problem:
      'Building a well-structured Java backend that follows standard patterns for authentication, authorization, and database versioning.',
    solution:
      'Implemented a Spring Boot application with JWT-based authentication, role-based user management, Flyway database migrations, and a clean repository layer over PostgreSQL.',
    myContribution:
      'Designed and implemented the full backend: Spring Boot REST endpoints, JWT authentication, user/role management, PostgreSQL schema design, and Flyway migration scripts.',
    challenges:
      'Structuring the application layers cleanly and implementing database migrations that support incremental schema changes without breaking existing data.',
    learned:
      'Deepened Java/Spring Boot knowledge, learned Flyway migration management, and gained experience with structured backend architecture patterns.',
    featured: true,
    index: 2,
  },
  {
    slug: 'af-shop',
    name: 'AF Shop — E-commerce Web Application',
    tagline: 'Online clothing store with admin panel and media management',
    description:
      'A web-based online shopping system for a clothing retailer, featuring product management, media storage, admin functionality, and guest checkout. Deployed and currently live.',
    role: 'Web Developer',
    context: 'Real-world Client Project',
    technologies: [
      'MongoDB Atlas', 'Cloudinary', 'Render', 'Vercel',
      'REST API', 'Node.js',
    ],
    keyAreas: [
      'E-commerce web development',
      'Backend API development',
      'Database design (MongoDB)',
      'Media/image management (Cloudinary)',
      'Admin functionality',
      'Deployment (Vercel + Render)',
      'Guest checkout flow',
    ],
    links: [
      { label: 'Live Demo', url: 'https://afshop.mn/', type: 'live' },
    ],
    architecture: [
      { label: 'Frontend', sublabel: 'Web / Vercel' },
      { label: 'Backend API', sublabel: 'Node.js / Render' },
      { label: 'Database', sublabel: 'MongoDB Atlas' },
      { label: 'Media', sublabel: 'Cloudinary' },
    ],
    overview:
      'Implemented an online shopping website for a ready-to-wear clothing store, enabling product browsing, guest checkout, admin product management, and image handling.',
    problem:
      'A clothing retailer needed an online presence with a working e-commerce system including product management, image uploads, and order processing.',
    solution:
      'Built a full web application with a Node.js backend, MongoDB Atlas database, Cloudinary for image storage, and deployed frontend on Vercel with backend on Render.',
    myContribution:
      'Implemented the web application including backend API, MongoDB database integration, Cloudinary media management, admin panel, and deployment configuration.',
    challenges:
      'Managing image uploads and storage efficiently, implementing a clean admin interface, and ensuring reliable deployment across Vercel (frontend) and Render (backend).',
    learned:
      'Gained experience with cloud deployment across multiple services, MongoDB Atlas, Cloudinary integration, and building production e-commerce systems.',
    featured: true,
    index: 3,
  },
];