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
  cardTechnologies?: string[];
  sections?: { title: string; paragraphs: string[] }[];
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
    tagline: 'Winter camp rental with experimental dzud risk assessment',
    description:
      'A diploma project connecting verified winter camp listings, rental requests and map-based search with an experimental Python risk assessment service.',
    role: 'Rental workflows, access control and risk service integration',
    context: 'University / Diploma Project',
    technologies: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Python',
      'React',
      'Flask',
      'scikit-learn',
      'pandas',
      'NumPy',
      'JWT',
      'Passport',
      'bcrypt',
      'Socket.IO',
      'Leaflet',
      'OpenStreetMap',
      'GeoJSON',
    ],
    cardTechnologies: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Python'],
    keyAreas: [
      'Owner verification, rental approvals and expiry handling',
      'Role-based access and relational rental data',
      'Map coordinates and Flask risk service integration',
    ],
    links: [],
    architecture: [
      {
        label: 'Frontend',
        sublabel: 'TypeScript / Next.js / React',
      },
      {
        label: 'Backend API',
        sublabel: 'NestJS / REST / Socket.IO',
      },
      {
        label: 'Database',
        sublabel: 'PostgreSQL / Prisma',
      },
      {
        label: 'Risk service',
        sublabel: 'Python / Flask / scikit-learn',
      },
    ],
    coverImagePath: '/projects/smart-zud/cover.webp',
    coverImageAvailable: false,
    overview:
      'A university diploma project for finding and renting winter camps, with an experimental dzud risk assessment component. The application connects owner verification, approved listings and rental management across ADMIN, OWNER and RENTER roles.',
    sections: [
      {
        title: 'Rental Workflow',
        paragraphs: [
          'Owners submit winter camp verification details for administrator review. Search exposes approved listings, while renters can submit rental requests and owners can approve them. Date-overlap checks and a waiting list support the rental workflow.',
          'Approved requests have a 24-hour payment window. Scheduled expiration handles requests that pass their deadline, and Socket.IO delivers notifications about workflow updates.',
        ],
      },
      {
        title: 'Frontend Implementation',
        paragraphs: [
          'TypeScript and the Next.js App Router structure the application pages. React Context and hooks manage shared state, while a common typed API client gives screens a consistent interface to the NestJS API.',
          'Leaflet displays OpenStreetMap and GeoJSON geographic data. Map-based coordinate selection connects winter camp locations to listing forms and geographic search.',
        ],
      },
      {
        title: 'Backend & Access Control',
        paragraphs: [
          'NestJS modules group domain functionality; controllers handle HTTP requests and services implement business rules through dependency injection. DTO validation checks incoming request data.',
          'JWT and Passport handle authentication, with bcrypt for password hashing. ADMIN, OWNER and RENTER permissions restrict operations, and ownership checks verify whether a user can act on a particular resource.',
        ],
      },
      {
        title: 'Database & Business Rules',
        paragraphs: [
          'PostgreSQL and Prisma relate User, Shelter and Rental records to Payment, Verification, MediaFile and Notification data. Constraints, enums and indexes encode relationships, allowed states and query access paths.',
          'Rental rules include date-overlap checks, a waiting list and scheduled payment expiration. Transaction and concurrent-request protection have not been verified, so overlap checks do not establish a guarantee against simultaneous double bookings. QPay integration is partial; the payment workflow is not presented as fully automated.',
        ],
      },
      {
        title: 'ML & Service Integration',
        paragraphs: [
          'Python, pandas and NumPy prepare data and engineer features for scikit-learn training, model persistence and inference. The primary advanced model metadata identifies Gradient Boosting. When available, ML probabilities are combined with rule-based scores for the risk assessment.',
          'NestJS calls the Flask service over HTTP with timeout and fallback handling. The daily forecast uses rule-based calculations and is separate from the model inference path.',
          'This is an experimental risk assessment: the code includes proxy labels and synthetic-data generation. It does not establish validated accuracy for predicting real-world dzud events.',
        ],
      },
    ],
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
    tagline: 'Clothing retail from product discovery to admin order handling',
    description:
      'An online clothing store with product browsing, a size-aware cart, guest checkout and admin tools for products, orders and manual payment confirmation.',
    role: 'Shopping, order handling and media integration',
    context: 'E-commerce Web Application',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Multer',
      'Cloudinary',
      'Joi',
    ],
    cardTechnologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    keyAreas: [
      'Product filters and a size-aware persistent cart',
      'Guest checkout and order-number lookup',
      'Admin product, order and payment management',
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
        sublabel: 'TypeScript / Next.js / React',
      },
      {
        label: 'Backend API',
        sublabel: 'JavaScript / Node.js / Express',
      },
      {
        label: 'Database',
        sublabel: 'MongoDB / Mongoose',
      },
      {
        label: 'Media upload',
        sublabel: 'Multer / Cloudinary',
      },
    ],
    coverImagePath: '/projects/af-shop/cover.webp',
    coverImageAvailable: false,
    overview:
      'A live online clothing store connecting customer shopping and guest orders with admin product and order management. The frontend uses TypeScript, Next.js, React and Tailwind CSS; a JavaScript Express API on Node.js connects the application to MongoDB and Cloudinary.',
    sections: [
      {
        title: 'Customer & Admin Workflow',
        paragraphs: [
          'Customers browse API-loaded products, filter by category, sort by price or discount, and choose product images and sizes. They can place an order without signing in, save delivery information and look up an order by its order number.',
          'The admin workflow covers product management, order handling and manual payment confirmation. Confirming a payment updates remaining stock and sold quantities.',
        ],
      },
      {
        title: 'Frontend Implementation',
        paragraphs: [
          'Next.js and React render the catalog and product-selection interface in TypeScript, with Tailwind CSS for styling. Category filters, price and discount sorting, image selection and size selection turn API product data into a shopping flow.',
          'The cart retains the selected size for each item, tracks quantities and calculates the total price. localStorage preserves the cart between visits, and the guest checkout collects delivery details for order creation.',
        ],
      },
      {
        title: 'Backend & API',
        paragraphs: [
          'JavaScript, Node.js and Express provide product CRUD and order endpoints for the storefront and admin workflow. Order creation supports guest customers, while order-number lookup lets customers retrieve their order.',
          'Joi validates request data, with a centralized error-handling foundation for API failures. Manual payment confirmation applies the stock and sold-count updates used by the admin order workflow.',
        ],
      },
      {
        title: 'Database & Media Integration',
        paragraphs: [
          'MongoDB stores application data through Mongoose models. Model references and populate queries retrieve related records for product and order operations.',
          'Multer handles uploaded files with file-type and size limits, and Cloudinary stores product images. This connects admin media uploads to the product imagery used by the storefront.',
        ],
      },
    ],
    featured: true,
    index: 3,
  },
];
