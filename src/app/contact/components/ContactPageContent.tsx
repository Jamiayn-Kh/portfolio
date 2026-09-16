'use client';

import { profile } from '@/data/profile';
import React, { useState, useRef, useEffect } from 'react';

export default function ContactPageContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formState.subject || 'Portfolio inquiry';
    const body = formState.message + '\n\nFrom: ' + formState.name + '\nEmail: ' + formState.email;
    window.location.href =
      'mailto:' +
      profile.email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="pt-32 pb-20">
      <div className="container-portfolio">
        {/* Atmospheric background */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 blob-primary opacity-30" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 blob-accent opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Page header */}
          <div className="reveal-item scroll-reveal-hidden mb-12 text-center">
            <span className="mono-label text-primary">{'// contact'}</span>
            <h1 className="text-display font-bold text-foreground mt-3">
              Let&apos;s build something useful.
            </h1>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed max-w-xl mx-auto">
              I&apos;m interested in software engineering opportunities where I can contribute to
              web, backend and system development while continuing to grow as an engineer.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left: Contact Info */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* Direct contact */}
              <div className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-5">
                <h2 className="mono-label text-primary mb-4">{'// direct contact'}</h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:jaik320024444@gmail.com"
                    className="flex items-start gap-3 group"
                    aria-label="Send email to Jaimka Kh"
                  >
                    <div className="w-9 h-9 rounded-lg border border-border bg-muted/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-muted-foreground group-hover:text-accent transition-colors"
                        aria-hidden="true"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="mono-label text-muted-foreground">Email</p>
                      <p className="text-sm text-foreground/90 group-hover:text-accent transition-colors break-all">
                        jaik320024444@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg border border-border bg-muted/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-muted-foreground"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 11 19.79 19.79 0 0 1 1.04 2.33a2 2 0 0 1 1.99-1.98h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mono-label text-muted-foreground">Phone</p>
                      <p className="text-sm text-foreground/90">86238085 / 99441781</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg border border-border bg-muted/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-muted-foreground"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="mono-label text-muted-foreground">Location</p>
                      <p className="text-sm text-foreground/90">Ulaanbaatar, Mongolia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              {(profile.githubUrl || profile.linkedinUrl || profile.resumeUrl) && (
                <div className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-5">
                  <h2 className="mono-label text-primary mb-4">{'// links'}</h2>
                  <div className="flex flex-col gap-3">
                    {profile.githubUrl && (
                      <a
                        href={profile.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                        aria-label="GitHub profile"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            GitHub
                          </p>
                          <p className="mono-label text-muted-foreground">
                            {/* REPLACE: Add your GitHub URL */}
                            {profile.githubUrl}
                          </p>
                        </div>
                      </a>
                    )}

                    {profile.linkedinUrl && (
                      <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                        aria-label="LinkedIn profile"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            LinkedIn
                          </p>
                          <p className="mono-label text-muted-foreground">
                            {/* REPLACE: Add your LinkedIn URL */}
                            {profile.linkedinUrl}
                          </p>
                        </div>
                      </a>
                    )}

                    {profile.resumeUrl && (
                      <a
                        href={profile.resumeUrl}
                        download
                        className="flex items-center gap-3 p-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 group"
                        aria-label="Download CV"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-primary flex-shrink-0"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-accent">Download CV</p>
                          <p className="mono-label text-muted-foreground">resume.pdf</p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-8">
              <div className="reveal-item scroll-reveal-hidden gradient-border bg-card rounded-xl p-6 md:p-8">
                <h2 className="mono-label text-primary mb-6">{'// send a message'}</h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="w-16 h-16 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <path d="m9 12 2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Email draft requested</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      Complete and send the message in your email app. If it did not open, use the
                      email address on this page.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                      }}
                      className="mt-2 text-sm text-accent hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      Edit message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block mono-label text-muted-foreground mb-2"
                        >
                          Name{' '}
                          <span className="text-primary" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/50 transition-all duration-200"
                          aria-required="true"
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block mono-label text-muted-foreground mb-2"
                        >
                          Email{' '}
                          <span className="text-primary" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/50 transition-all duration-200"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block mono-label text-muted-foreground mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/50 transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="job-opportunity">Job Opportunity</option>
                        <option value="freelance">Freelance / Project</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block mono-label text-muted-foreground mb-2"
                      >
                        Message{' '}
                        <span className="text-primary" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity or project..."
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary/50 transition-all duration-200 resize-none"
                        aria-required="true"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <p className="mono-label text-muted-foreground">
                        Opens your email app. Send the message there.
                      </p>
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group flex-shrink-0"
                      >
                        Open Email Draft
                        <span
                          className="group-hover:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
