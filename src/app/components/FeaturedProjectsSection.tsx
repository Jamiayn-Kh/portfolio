'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
            entry.target.classList.remove('scroll-reveal-hidden');
          }
        });
      },
      { threshold: 0.08 }
    );
    const items = sectionRef?.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  const featured = projects?.filter((p) => p?.featured);

  return (
    <section id="projects" ref={sectionRef} className="section-padding border-t border-border">
      <div className="container-portfolio">
        {/* Header */}
        <div className="reveal-item scroll-reveal-hidden flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="mono-label text-primary">{'// 02 — projects'}</span>
            <h2 className="text-display font-bold text-foreground mt-2">Featured Projects</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-lg">
              A selection of projects demonstrating practical web, backend and system development.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded flex-shrink-0"
          >
            View all projects
            <span
              className="group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        {/* BENTO GRID AUDIT:
          Array has 3 cards: [SmartZud (idx 0), MungunUrlal (idx 1), AfShop (idx 2)]
          Desktop grid-cols-2:
          Row 1: [col-1: SmartZud cs-1 rs-1] [col-2: MungunUrlal cs-1 rs-1]
          Row 2: [col-1-2: AfShop cs-2 rs-1]
          Placed 3/3 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 0 — SmartZud */}
          <div className="reveal-item scroll-reveal-hidden" style={{ transitionDelay: '0ms' }}>
            <ProjectCard project={featured?.[0]} variant="featured" />
          </div>

          {/* Card 1 — MungunUrlal */}
          <div className="reveal-item scroll-reveal-hidden" style={{ transitionDelay: '80ms' }}>
            <ProjectCard project={featured?.[1]} variant="featured" />
          </div>

          {/* Card 2 — AfShop — full width */}
          <div
            className="reveal-item scroll-reveal-hidden md:col-span-2"
            style={{ transitionDelay: '160ms' }}
          >
            <div className="md:grid md:grid-cols-2 md:gap-8 bg-card rounded-xl border border-border overflow-hidden gradient-border card-hover">
              <div className="p-6 md:p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-primary">03</span>
                  <span className="mono-label text-muted-foreground">{featured?.[2]?.context}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{featured?.[2]?.name}</h3>
                <p className="text-accent font-mono text-sm">{featured?.[2]?.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {featured?.[2]?.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {featured?.[2]?.technologies?.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href="https://afshop.mn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 text-accent font-mono text-xs font-medium hover:bg-primary/15 hover:border-primary/50 transition-all duration-200"
                    aria-label="Live demo for AF Shop"
                  >
                    Live Demo ↗
                  </a>
                  <Link
                    href={`/projects/${featured?.[2]?.slug}`}
                    className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    Case Study →
                  </Link>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-background/40 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-border">
                <h4 className="mono-label text-primary">{'// architecture'}</h4>
                {featured?.[2]?.architecture && (
                  <div className="flex flex-col gap-0">
                    {featured?.[2]?.architecture?.map((node, idx) => (
                      <React.Fragment key={node?.label}>
                        <div className="arch-node">
                          <span className="text-accent text-xs font-semibold">{node?.label}</span>
                          {node?.sublabel && (
                            <span className="text-muted-foreground text-xs ml-2">
                              — {node?.sublabel}
                            </span>
                          )}
                        </div>
                        {idx < (featured?.[2]?.architecture?.length ?? 0) - 1 && (
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
                )}
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="mono-label text-muted-foreground mb-3">{'// key areas'}</h4>
                  <ul className="flex flex-col gap-1.5">
                    {featured?.[2]?.keyAreas?.map((area) => (
                      <li
                        key={area}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
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
        </div>
      </div>
    </section>
  );
}
