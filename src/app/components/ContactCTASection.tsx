'use client';

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
          <div className="absolute top-0 right-0 w-64 h-64 blob-primary opacity-40" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 blob-accent opacity-30" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl">
            <div className="reveal-item scroll-reveal-hidden">
              <span className="mono-label text-primary">// 06 — contact</span>
              <h2 className="text-display font-bold text-foreground mt-2">
                Let&apos;s build something useful.
              </h2>
            </div>
            <div className="reveal-item scroll-reveal-hidden mt-4">
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                I&apos;m interested in software engineering opportunities where I can contribute
                to web, backend and system development while continuing to grow as an engineer.
              </p>
            </div>
            <div className="reveal-item scroll-reveal-hidden flex flex-wrap gap-3 mt-8">
              <a
                href="mailto:jaik320024444@gmail.com"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Email Me
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-border bg-transparent text-foreground font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact Form
              </Link>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg border border-border text-muted-foreground font-mono text-xs hover:border-primary/40 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-3 rounded-lg border border-border text-muted-foreground font-mono text-xs hover:border-primary/40 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}