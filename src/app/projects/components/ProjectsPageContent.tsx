'use client';

import React, { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import CaseStudyCard from './CaseStudyCard';

export default function ProjectsPageContent() {
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
      { threshold: 0.06 }
    );
    const items = sectionRef?.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-20">
      <div className="container-portfolio">
        {/* Page Header */}
        <div className="reveal-item scroll-reveal-hidden mb-16 max-w-2xl">
          <span className="mono-label text-primary">{'// projects'}</span>
          <h1 className="text-display font-bold text-foreground mt-3">All Projects</h1>
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">
            Case studies of web applications, backend systems and software development work.
            Technical depth over quantity.
          </p>
        </div>

        {/* Project Case Studies */}
        <div className="flex flex-col gap-16">
          {projects?.map((project, idx) => (
            <div
              key={project?.slug}
              id={project?.slug}
              className="reveal-item scroll-reveal-hidden"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <CaseStudyCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
