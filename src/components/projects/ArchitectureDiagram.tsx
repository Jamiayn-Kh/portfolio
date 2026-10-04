import type { Project } from '@/data/projects';

interface ArchitectureDiagramProps {
  project: Project;
  compact?: boolean;
}

function Node({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="architecture-node">
      <span>{title}</span>
      {detail && <small>{detail}</small>}
    </div>
  );
}

function Connector() {
  return <span className="architecture-line" aria-hidden="true" />;
}

export default function ArchitectureDiagram({
  project,
  compact = false,
}: ArchitectureDiagramProps) {
  const className = `architecture-diagram architecture-${project.slug} ${compact ? 'architecture-compact' : ''}`;
  if (project.slug === 'smart-zud') {
    return (
      <div
        className={className}
        role="img"
        aria-label="Smart Zud architecture: TypeScript and Next.js connect to NestJS with JWT access control and Socket.IO notifications. Prisma connects to PostgreSQL; HTTP connects to a Python Flask risk service with timeout and fallback handling."
      >
        <Node title="Frontend" detail="TypeScript / Next.js / React" />
        <Connector />
        <Node title="Backend API" detail="NestJS / Node.js (REST)" />
        <div className="architecture-branch" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="architecture-pair">
          <Node title="Database" detail="PostgreSQL / Prisma" />
          <Node title="Risk service" detail="Python / Flask / scikit-learn" />
        </div>
        {!compact && (
          <div className="architecture-notes">
            <span>Access · JWT / Passport</span>
            <span>Notifications · Socket.IO</span>
            <span>Flask HTTP · timeout / fallback</span>
          </div>
        )}
      </div>
    );
  }
  if (project.slug === 'mungun-urlal') {
    return (
      <div
        className={className}
        role="img"
        aria-label="Mungun Urlal architecture: a client connects to a Spring Boot application, repository layer, and PostgreSQL database. JWT authentication and Flyway migration are included."
      >
        <Node title="Client" />
        <Connector />
        <Node title="Application" detail="Spring Boot" />
        <Connector />
        <Node title="Repository layer" />
        <Connector />
        <Node title="Database" detail="PostgreSQL" />
        {!compact && (
          <div className="architecture-notes">
            <span>JWT authentication</span>
            <span>Flyway migration</span>
          </div>
        )}
      </div>
    );
  }
  return (
    <div
      className={className}
      role="img"
      aria-label="AF Shop architecture: a TypeScript Next.js frontend connects to a JavaScript Node.js Express API. Mongoose connects to MongoDB, and Multer uploads images to Cloudinary with file-type and size limits."
    >
      <Node title="Frontend" detail="TypeScript / Next.js / React" />
      <Connector />
      <Node title="Backend API" detail="JavaScript / Node.js / Express" />
      <div className="architecture-branch" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="architecture-pair">
        <Node title="Database" detail="MongoDB / Mongoose" />
        <Node title="Media upload" detail="Multer / Cloudinary" />
      </div>
      {!compact && (
        <div className="architecture-notes">
          <span>Requests · Joi validation</span>
          <span>Uploads · file-type / size limits</span>
        </div>
      )}
    </div>
  );
}
