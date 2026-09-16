import type { Project } from '@/data/projects';
import Image from 'next/image';

interface ProjectVisualProps {
  project: Project;
  compact?: boolean;
}

const visualLabels: Record<string, string[]> = {
  'smart-zud': ['Geographic data', 'Weather factors', 'Risk assessment'],
  'mungun-urlal': ['Java 17', 'Spring Boot', 'mungun_urlal'],
  'af-shop': ['Retail web system', 'Media management', 'Vercel / Render'],
};

export default function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  if (project.coverImageAvailable) {
    return (
      <div className={`relative overflow-hidden bg-elevated ${compact ? 'min-h-48' : 'min-h-72'}`}>
        <Image
          src={project.coverImagePath}
          alt={`${project.name} project cover`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  const labels = visualLabels[project.slug] ?? project.keyAreas.slice(0, 3);
  return (
    <div
      className={`project-visual relative overflow-hidden border border-border bg-elevated ${compact ? 'min-h-48 p-5' : 'min-h-72 p-6 md:p-8'}`}
      role="img"
      aria-label={`${project.name} technical placeholder`}
    >
      <div className="technical-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted-foreground">
            Project system
          </span>
          <span className="font-mono text-[0.6875rem] text-accent">0{project.index}</span>
        </div>
        <div className="my-7 grid grid-cols-3 gap-2" aria-hidden="true">
          <span className="h-px bg-primary/70" />
          <span className="h-px bg-foreground/20" />
          <span className="h-px bg-foreground/20" />
        </div>
        <div>
          <p className="max-w-md text-lg font-semibold tracking-tight text-foreground">
            {project.tagline}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {labels.map((label) => (
              <li
                key={label}
                className="border border-border bg-card px-2.5 py-1 font-mono text-[0.6875rem] text-muted-foreground"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
