'use client';

import { profile } from '@/data/profile';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ContactCTASection() {
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
    <section id="contact-cta" ref={sectionRef} className="section-padding border-t border-border">
      <div className="container-portfolio">
        <div className="relative gradient-border bg-card rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Atmospheric background */}
          <div
            className="absolute top-0 right-0 w-64 h-64 blob-primary opacity-40"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 blob-accent opacity-30"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <div className="reveal-item scroll-reveal-hidden">
              <span className="mono-label text-primary">{'// 06 — contact'}</span>
              <h2 className="text-display font-bold text-foreground mt-2">
                Let&apos;s build something useful.
              </h2>
            </div>
            <div className="reveal-item scroll-reveal-hidden mt-4">
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                I&apos;m interested in software engineering opportunities where I can contribute to
                web, backend and system development while continuing to grow as an engineer.
              </p>
            </div>
            <div className="reveal-item scroll-reveal-hidden flex flex-wrap gap-3 mt-8">
              <a href="mailto:jaik320024444@gmail.com" className="btn btn-primary">
                Email Me
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Contact Form
              </Link>
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="GitHub profile"
                >
                  GitHub
                </a>
              )}
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} download className="btn btn-secondary">
                  Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
