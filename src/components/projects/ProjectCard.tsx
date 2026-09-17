import type { Project } from '@/data/projects';
import Link from 'next/link';
import { profile } from '@/data/profile';
import ArchitectureDiagram from './ArchitectureDiagram';
import ProjectVisual from './ProjectVisual';

interface ProjectCardProps {
  project: Project;
  variant?: 'dominant' | 'standard';
  headingLevel?: 'h2' | 'h3';
}

export default function ProjectCard({
  project,
  variant = 'standard',
  headingLevel = 'h3',
}: ProjectCardProps) {
  const liveLink = project.links.find((link) => link.type === 'live');
  const githubLink = project.links.find((link) => link.type === 'github')?.url ?? profile.githubUrl;
  const Title = headingLevel;
  const dominant = variant === 'dominant';

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-border bg-card ${dominant ? 'lg:grid lg:grid-cols-12' : 'flex flex-col'}`}
    >
      <div className={dominant ? 'lg:col-span-5' : ''}>
        <ProjectVisual project={project} compact={!dominant} />
      </div>
      <div
        className={`flex min-w-0 flex-col ${dominant ? 'p-6 md:p-8 lg:col-span-7' : 'p-5 md:p-6'}`}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="mono-label">
            <span className="mr-2 text-accent">0{project.index}</span>
            {project.context}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            {liveLink && (
              <a
                href={liveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary min-h-9 px-3 text-xs"
                aria-label={`Visit ${project.name} live site`}
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>
        <Title
          className={`mt-4 font-semibold tracking-tight text-foreground ${dominant ? 'text-2xl md:text-3xl' : 'text-xl'}`}
        >
          {project.name}
        </Title>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className={`mt-6 grid gap-6 ${dominant ? 'xl:grid-cols-[minmax(0,1fr)_15rem]' : ''}`}>
          <div>
            <p className="mono-label">Contribution / focus</p>
            <p className="mt-2 text-sm font-medium text-foreground">{project.role}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {project.keyAreas.slice(0, dominant ? 4 : 3).map((area) => (
                <li key={area} className="flex gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          {dominant && (
            <div className="border-l border-border pl-0 xl:pl-6">
              <p className="mono-label mb-3">Architecture</p>
              <ArchitectureDiagram project={project} compact />
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
          {project.technologies.slice(0, dominant ? 6 : 4).map((technology) => (
            <span key={technology} className="tech-tag">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <Link href={`/projects/${project.slug}`} className="btn btn-tertiary px-0 text-sm">
            View Case Study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
