'use client';

import React, { useEffect, useRef } from 'react';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="section-padding border-t border-border">
      <div className="container-portfolio">
        <div className="reveal-item scroll-reveal-hidden mb-12">
          <span className="mono-label text-primary">{'// 03 — experience'}</span>
          <h2 className="text-display font-bold text-foreground mt-2">Professional Experience</h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences?.map((exp, idx) => (
            <article
              key={exp?.id}
              className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-6 md:p-8 card-hover"
              style={{ transitionDelay: `${idx * 80}ms` }}
              aria-label={`Experience at ${exp?.company}`}
            >
              <div className="grid lg:grid-cols-12 gap-6">
                {/* Left */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  {exp.period && (
                    <span className="font-mono text-xs font-semibold text-primary">
                      {exp.period}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-foreground">{exp.company}</h3>
                  {exp.originalCompany && (
                    <p lang="mn" className="text-sm text-muted-foreground">
                      {exp.originalCompany}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-accent">{exp?.role}</p>
                  {exp.location && (
                    <p className="mono-label text-muted-foreground">{exp.location}</p>
                  )}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/8 border border-primary/20 text-accent font-mono text-xs mt-1 w-fit">
                    {exp?.type}
                  </span>
                </div>

                {/* Right */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp?.description}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {exp?.responsibilities?.map((resp) => (
                      <li
                        key={resp}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0 mt-2"
                          aria-hidden="true"
                        />
                        {resp}
                      </li>
                    ))}
                  </ul>
                  {exp?.technologies && exp?.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {exp?.technologies?.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Hackathon + Certification */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Hackathon */}
          <article
            className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-6 card-hover"
            aria-label="Hackathon achievement"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-primary/30 bg-primary/8 flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary"
                  aria-hidden="true"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="mono-label text-primary">Achievement · 2026</span>
                <h3 className="text-sm font-bold text-foreground mt-1">МУИС МКУТ Hackathon</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  3rd place as a team — National University of Mongolia
                </p>
              </div>
            </div>
          </article>

          {/* Certification */}
          <article
            className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-6 card-hover"
            aria-label="Cisco certification"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-primary/30 bg-primary/8 flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="mono-label text-primary">Certification · 2024</span>
                <h3 className="text-sm font-bold text-foreground mt-1">NDG Linux Essentials</h3>
                <p className="text-sm text-muted-foreground mt-1">Cisco Networking Academy</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
