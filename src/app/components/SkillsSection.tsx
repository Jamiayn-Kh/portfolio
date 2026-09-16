'use client';

import React, { useEffect, useRef } from 'react';
import { skillGroups } from '@/data/skills';

export default function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="section-padding border-t border-border">
      <div className="container-portfolio">
        <div className="reveal-item scroll-reveal-hidden mb-12">
          <span className="mono-label text-primary">{'// 04 — skills'}</span>
          <h2 className="text-display font-bold text-foreground mt-2">Technical Skills</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg">
            Technologies grouped by category. Where applicable, linked to projects where they were
            used.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups?.map((group, idx) => (
            <div
              key={group?.category}
              className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-5"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <h3 className="mono-label text-primary mb-4">{group?.category}</h3>
              <div className="flex flex-col gap-2">
                {group?.skills?.map((skill) => (
                  <div key={skill?.name} className="flex items-start justify-between gap-3">
                    <span className="text-sm font-medium text-foreground/90 flex-shrink-0">
                      {skill?.name}
                    </span>
                    {skill?.projects && skill?.projects?.length > 0 && (
                      <div className="flex flex-wrap gap-1 justify-end">
                        {skill?.projects?.map((proj) => (
                          <span
                            key={proj}
                            className="font-mono text-xs text-muted-foreground bg-muted/50 rounded px-1.5 py-0.5 border border-border text-right"
                            title={`Used in: ${proj}`}
                          >
                            {proj?.length > 16 ? proj?.slice(0, 14) + '…' : proj}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="reveal-item scroll-reveal-hidden mt-6">
          <div className="gradient-border bg-card rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <span className="mono-label text-primary">{'// education'}</span>
                <h3 className="text-lg font-bold text-foreground mt-2">
                  Bachelor&apos;s Degree in Software Engineering
                </h3>
                <p className="text-sm text-accent font-mono mt-1">
                  National University of Mongolia · МУИС МТЭС
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  School of Information and Computer Science
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="mono-label text-muted-foreground">Period:</span>
                  <span className="font-mono text-sm text-foreground">2022/09 – 2026/06</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="mono-label text-muted-foreground">Location:</span>
                  <span className="font-mono text-sm text-foreground">Ulaanbaatar, Mongolia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="mono-label text-muted-foreground">Language:</span>
                  <span className="font-mono text-sm text-foreground">
                    Mongolian / English (Intermediate)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
