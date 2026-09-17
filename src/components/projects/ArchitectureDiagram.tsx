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
        aria-label="Smart Zud architecture: Next.js and React connect to a NestJS backend API, which connects to PostgreSQL and a Python Flask ML module."
      >
        <Node title="Frontend" detail="Next.js / React 19" />
        <Connector />
        <Node title="Backend API" detail="NestJS / Node.js (REST)" />
        <div className="architecture-branch" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="architecture-pair">
          <Node title="Database" detail="PostgreSQL" />
          <Node title="ML module" detail="Python / Flask" />
        </div>
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
      aria-label="AF Shop architecture: a React / Next.js frontend connects to an application backend and MongoDB Atlas. Cloudinary supports media and Vercel and Render are deployment technologies."
    >
      <Node title="Frontend" detail="React / Next.js" />
      <Connector />
      <Node title="Application backend" />
      <Connector />
      <Node title="Database" detail="MongoDB Atlas" />
      {!compact && (
        <div className="architecture-notes">
          <span>Media · Cloudinary</span>
          <span>Deployment · Vercel / Render</span>
        </div>
      )}
    </div>
  );
}
