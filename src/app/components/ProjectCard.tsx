'use client';

import React from 'react';
import Link from 'next/link';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'grid';
}

export default function ProjectCard({ project, variant = 'featured' }: ProjectCardProps) {
  const liveLink = project.links.find((l) => l.type === 'live');
  const githubLink = project.links.find((l) => l.type === 'github');

  return (
    <article
      className={`card-hover gradient-border bg-card rounded-xl overflow-hidden flex flex-col ${
        variant === 'featured' ? 'p-6 md:p-8' : 'p-5'
      }`}
      aria-label={`Project: ${project.name}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-semibold text-primary">
              {String(project.index).padStart(2, '0')}
            </span>
            <span className="mono-label text-muted-foreground">{project.context}</span>
          </div>
          <h3 className="text-lg font-bold text-foreground leading-tight">{project.name}</h3>
          <p className="text-sm text-accent font-mono mt-0.5">{project.tagline}</p>
        </div>
        {/* Links */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary/40 text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label={`GitHub repository for ${project.name}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/5 text-accent font-mono text-xs font-medium hover:bg-primary/15 hover:border-primary/50 transition-all duration-200"
              aria-label={`Live demo for ${project.name}`}
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Role */}
      <div className="mb-4">
        <span className="mono-label text-muted-foreground mr-2">role:</span>
        <span className="font-mono text-xs text-foreground/80">{project.role}</span>
      </div>

      {/* Key Areas */}
      <div className="mb-5">
        <h4 className="mono-label text-muted-foreground mb-2">{'// key areas'}</h4>
        <ul className="flex flex-col gap-1">
          {project.keyAreas.slice(0, 4).map((area) => (
            <li key={area} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span
                className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0"
                aria-hidden="true"
              />
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Architecture */}
      {project.architecture && (
        <div className="mb-5 p-4 rounded-lg bg-background/60 border border-border">
          <h4 className="mono-label text-muted-foreground mb-3">{'// architecture'}</h4>
          <div className="flex flex-col items-start gap-0">
            {project.architecture.map((node, idx) => (
              <React.Fragment key={node.label}>
                <div className="arch-node text-left w-full">
                  <div className="flex items-baseline gap-2">
                    <span className="text-accent text-xs font-semibold">{node.label}</span>
                    {node.sublabel && (
                      <span className="text-muted-foreground text-xs">— {node.sublabel}</span>
                    )}
                  </div>
                </div>
                {idx < (project.architecture?.length ?? 0) - 1 && (
                  <div className="ml-3 flex flex-col items-start" aria-hidden="true">
                    <div className="w-px h-3 bg-primary/30 ml-2" />
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className="text-primary/40 ml-1.5"
                    >
                      <path d="M5 6L0 0h10L5 6z" fill="currentColor" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          View Case Study
          <span
            className="group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
        {project.period && <span className="mono-label">{project.period}</span>}
      </div>
    </article>
  );
}
