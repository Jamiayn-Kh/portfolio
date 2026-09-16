'use client';

import React from 'react';
import Link from 'next/link';
import type { Project } from '@/data/projects';

interface CaseStudyCardProps {
  project: Project;
}

export default function CaseStudyCard({ project }: CaseStudyCardProps) {
  const liveLink = project.links.find((l) => l.type === 'live');
  const githubLink = project.links.find((l) => l.type === 'github');

  return (
    <article
      className="gradient-border bg-card rounded-2xl overflow-hidden"
      aria-label={`Case study: ${project.name}`}
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-primary">
                {String(project.index).padStart(2, '0')}
              </span>
              <span className="mono-label text-muted-foreground">{project.context}</span>
              {project.period && (
                <span className="mono-label text-muted-foreground">{project.period}</span>
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{project.name}</h2>
            <p className="text-accent font-mono text-sm mt-1">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary/40 text-muted-foreground hover:text-accent transition-all duration-200"
                aria-label={`GitHub for ${project.name}`}
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
                className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 text-accent font-mono text-xs font-medium hover:bg-primary/15 hover:border-primary/50 transition-all duration-200"
                aria-label={`Live demo for ${project.name}`}
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Overview */}
            <div>
              <h3 className="mono-label text-primary mb-2">{'// overview'}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>

            {project.problem && (
              <div>
                <h3 className="mono-label text-primary mb-2">{'// problem'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="mono-label text-primary mb-2">{'// solution'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            )}

            <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-accent">
              View Case Study →
            </Link>

            {(project.myContribution || project.challenges || project.learned) && (
              <div className="flex flex-col gap-6 border-t border-border pt-6">
                {project.myContribution && (
                  <div>
                    <h3 className="mono-label text-primary mb-2">{'// my contribution'}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.myContribution}
                    </p>
                  </div>
                )}
                {project.challenges && (
                  <div>
                    <h3 className="mono-label text-primary mb-2">{'// challenges'}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}
                {project.learned && (
                  <div>
                    <h3 className="mono-label text-primary mb-2">{'// what i learned'}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.learned}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Technical Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Role */}
            <div className="p-4 rounded-xl bg-background/60 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="mono-label text-primary">role</span>
              </div>
              <p className="text-sm font-semibold text-foreground">{project.role}</p>
            </div>

            {/* Architecture */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-background/60 border border-border">
                <h3 className="mono-label text-primary mb-3">{'// architecture'}</h3>
                <div className="flex flex-col gap-0">
                  {project.architecture.map((node, idx) => (
                    <React.Fragment key={node.label}>
                      <div className="arch-node">
                        <div className="flex flex-col items-center">
                          <span className="text-accent text-xs font-semibold">{node.label}</span>
                          {node.sublabel && (
                            <span className="text-muted-foreground text-xs mt-0.5">
                              {node.sublabel}
                            </span>
                          )}
                        </div>
                      </div>
                      {idx < (project.architecture?.length ?? 0) - 1 && (
                        <div className="flex flex-col items-center" aria-hidden="true">
                          <div className="w-px h-4 bg-primary/30" />
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            className="text-primary/40"
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

            {/* Technologies */}
            <div>
              <h3 className="mono-label text-primary mb-3">{'// technologies'}</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Areas */}
            <div>
              <h3 className="mono-label text-primary mb-3">{'// key areas'}</h3>
              <ul className="flex flex-col gap-1.5">
                {project.keyAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span
                      className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
