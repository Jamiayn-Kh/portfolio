'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Understand',
    description: 'Understand the problem, requirements and users before writing any code.',
  },
  {
    num: '02',
    title: 'Design',
    description: 'Think about system structure, data flow and API design.',
  },
  {
    num: '03',
    title: 'Build',
    description: 'Implement frontend, backend, database and integrations.',
  },
  {
    num: '04',
    title: 'Test',
    description: 'Validate functionality, edge cases and system behavior.',
  },
  {
    num: '05',
    title: 'Integrate',
    description: 'Connect APIs, services and external systems when required.',
  },
  {
    num: '06',
    title: 'Improve',
    description: 'Refactor, fix issues and continuously improve the system.',
  },
];

export default function EngineeringApproachSection() {
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

  return (
    <section id="approach" ref={sectionRef} className="section-padding border-t border-border">
      <div className="container-portfolio">
        <div className="reveal-item scroll-reveal-hidden mb-12">
          <span className="mono-label text-primary">{'// 05 — approach'}</span>
          <h2 className="text-display font-bold text-foreground mt-2">How I Build Software</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg">
            A practical engineering mindset applied to every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps?.map((step, idx) => (
            <div
              key={step?.num}
              className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-5 group card-hover"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-2xl font-bold text-primary/40 group-hover:text-primary/70 transition-colors">
                  {step?.num}
                </span>
                <div className="w-px h-6 bg-border" aria-hidden="true" />
                <h3 className="text-sm font-bold text-foreground">{step?.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{step?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
