'use client';

import { profile } from '@/data/profile';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const techStack = ['Next.js', 'NestJS', 'Node.js', 'Java', 'Python', 'PostgreSQL'];

const archLayers = [
  { label: 'Frontend', sublabel: 'Next.js / React' },
  { label: 'REST API', sublabel: 'NestJS / Node.js' },
  { label: 'Backend', sublabel: 'Business Logic' },
  { label: 'Database', sublabel: 'PostgreSQL / MongoDB' },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      hero.style.setProperty('--mouse-x', x.toString());
      hero.style.setProperty('--mouse-y', y.toString());
    };
    const hero = heroRef.current;
    if (hero) hero.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (hero) hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background atmospheric layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 blob-primary animate-pulse-glow"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-accent"
          style={{ animationDelay: '1.5s' }}
          aria-hidden="true"
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(124,58,237,0.3) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
          aria-hidden="true"
        />
        {/* Noise */}
        <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
      </div>

      <div className="container-portfolio relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Badge */}
            <div
              className="flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="mono-label text-accent">
                Software Engineer · Ulaanbaatar, Mongolia
              </span>
            </div>

            {/* Headline */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <h1 className="text-hero font-extrabold tracking-tighter text-foreground leading-none">
                JAIMKA
                <br />
                <span className="text-primary">KH</span>
              </h1>
            </div>

            {/* Role */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <p className="font-mono text-base font-medium text-muted-foreground tracking-wide">
                Software Engineer
              </p>
              <p className="text-lg md:text-xl text-foreground/90 font-medium leading-relaxed mt-2 max-w-xl">
                I build practical web applications,
                <br className="hidden sm:block" />
                backend systems and API-driven solutions.
              </p>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg leading-relaxed">
                Full-stack / Backend development with a focus on practical software systems, APIs
                and databases.
              </p>
            </div>

            {/* Tech stack */}
            <div
              className="animate-fade-in-up flex flex-wrap gap-2"
              style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}
            >
              {techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <Link
                href="/projects"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Projects
              </Link>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Download CV
                </a>
              )}
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-lg border border-border text-muted-foreground font-mono text-xs hover:border-primary/40 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="GitHub profile"
                >
                  GitHub
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-lg border border-border text-muted-foreground font-mono text-xs hover:border-primary/40 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Right: Architecture Visual */}
          <div
            className="lg:col-span-5 animate-fade-in-up"
            style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
            aria-hidden="true"
          >
            <div className="relative flex flex-col items-center gap-0 select-none">
              {/* Outer glow */}
              <div className="absolute inset-0 blob-accent" />

              {/* Architecture diagram */}
              <div className="relative z-10 flex flex-col items-center gap-0 w-full max-w-xs mx-auto">
                <div className="mono-label text-muted-foreground mb-4 text-center">
                  {'// system architecture'}
                </div>
                {archLayers.map((layer, idx) => (
                  <React.Fragment key={layer.label}>
                    <div
                      className="arch-node w-full animate-float-slow"
                      style={{ animationDelay: `${idx * 0.3}s` }}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-accent font-semibold text-sm">{layer.label}</span>
                        <span className="text-muted-foreground text-xs mt-0.5">
                          {layer.sublabel}
                        </span>
                      </div>
                    </div>
                    {idx < archLayers.length - 1 && (
                      <div className="flex flex-col items-center py-1" aria-hidden="true">
                        <div className="w-px h-5 bg-primary/30" />
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          className="text-primary/40"
                        >
                          <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}

                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 w-3 h-3 border-t border-l border-primary/40" />
                <div className="absolute -top-3 -right-3 w-3 h-3 border-t border-r border-primary/40" />
                <div className="absolute -bottom-3 -left-3 w-3 h-3 border-b border-l border-primary/40" />
                <div className="absolute -bottom-3 -right-3 w-3 h-3 border-b border-r border-primary/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow opacity-40"
          aria-hidden="true"
        >
          <span className="mono-label">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
}
