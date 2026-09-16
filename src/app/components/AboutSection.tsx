'use client';

import React, { useEffect, useRef } from 'react';

const journeySteps = [
  {
    phase: '01',
    title: 'Software Engineering Education',
    description:
      "Started Bachelor's degree in Software Engineering at the National University of Mongolia.",
  },
  {
    phase: '02',
    title: 'Web Development',
    description:
      'Began building web applications, learning frontend and backend development fundamentals.',
  },
  {
    phase: '03',
    title: 'Backend Development',
    description:
      'Deepened backend skills — NestJS, Node.js, REST API design, database architecture.',
  },
  {
    phase: '04',
    title: 'Mobile Development',
    description: 'Expanded into mobile with Flutter and Kotlin for Android development.',
  },
  {
    phase: '05',
    title: 'AI / Data — University Project',
    description: 'Integrated Python/ML risk assessment into the Smart Zud diploma project.',
  },
  {
    phase: '06',
    title: 'Real-world E-commerce',
    description: 'Implemented and deployed a live e-commerce web application (AF Shop).',
  },
  {
    phase: '07',
    title: 'Enterprise TMS / GPS Integration',
    description:
      'Worked within enterprise software environment — system analysis, API integration, cross-team coordination.',
  },
  {
    phase: '08',
    title: 'Software Engineering Career',
    description: 'Actively pursuing full-stack / backend software engineering opportunities.',
  },
];

const practicalAreas = [
  'Database structure & design',
  'Backend logic & REST APIs',
  'API integration',
  'UI/UX implementation',
  'System requirements analysis',
  'System testing & validation',
  'Software system improvement',
];

export default function AboutSection() {
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
      { threshold: 0.1 }
    );
    const items = sectionRef?.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding border-t border-border">
      <div className="container-portfolio">
        {/* Section label */}
        <div className="reveal-item scroll-reveal-hidden mb-12">
          <span className="mono-label text-primary">{'// 01 — about'}</span>
          <h2 className="text-display font-bold text-foreground mt-2">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="reveal-item scroll-reveal-hidden">
              <p className="text-base text-foreground/80 leading-relaxed">
                I have a Bachelor&apos;s degree in Software Engineering from the National University
                of Mongolia and practical experience in web and software system development.
              </p>
            </div>
            <div className="reveal-item scroll-reveal-hidden">
              <p className="text-base text-muted-foreground leading-relaxed">
                I have built web applications, mobile applications and REST APIs using technologies
                including Node.js, NestJS, React, Next.js, Python, Java, Flutter, Kotlin and C#. I
                have worked with PostgreSQL, MySQL and MongoDB.
              </p>
            </div>
            <div className="reveal-item scroll-reveal-hidden">
              <p className="text-base text-muted-foreground leading-relaxed">
                I approach problems logically and systematically, learn new technologies quickly,
                and can collaborate effectively with development and cross-functional teams.
              </p>
            </div>

            {/* Practical areas */}
            <div className="reveal-item scroll-reveal-hidden mt-2">
              <h3 className="mono-label text-primary mb-4">{'// practical areas'}</h3>
              <ul className="flex flex-col gap-2">
                {practicalAreas?.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span
                      className="w-1 h-1 rounded-full bg-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Journey Timeline */}
          <div className="lg:col-span-7">
            <div className="reveal-item scroll-reveal-hidden mb-6">
              <h3 className="text-sm font-semibold text-foreground">
                From learning software engineering to building real-world systems.
              </h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

              <ol className="flex flex-col gap-0">
                {journeySteps?.map((step, idx) => (
                  <li
                    key={step?.phase}
                    className="reveal-item scroll-reveal-hidden relative flex gap-6 pb-8 last:pb-0"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center">
                        <span className="font-mono text-xs font-semibold text-primary">
                          {step?.phase}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2 flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-sm font-semibold text-foreground">{step?.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step?.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
