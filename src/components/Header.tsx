'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-background/90 backdrop-blur-xl border-b border-border' :'py-5 bg-transparent'
        }`}
      >
        <div className="container-portfolio flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMobile}>
            <AppLogo size={28} />
            <span className="font-mono text-sm font-medium tracking-wider text-foreground group-hover:text-accent transition-colors">
              JAIMKA KH
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="mono-label hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-accent transition-colors px-2 py-1"
              aria-label="GitHub profile"
            >
              {/* REPLACE: Add your GitHub URL */}
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-accent transition-colors px-2 py-1"
              aria-label="LinkedIn profile"
            >
              {/* REPLACE: Add your LinkedIn URL */}
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 bg-primary/10 text-accent font-mono text-xs font-medium hover:bg-primary/20 hover:border-primary/60 transition-all duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation links">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={closeMobile}
                className="text-2xl font-semibold text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-10">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-border rounded-lg text-sm font-medium hover:border-primary/40 transition-colors"
              onClick={closeMobile}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-border rounded-lg text-sm font-medium hover:border-primary/40 transition-colors"
              onClick={closeMobile}
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 py-3 bg-primary/10 border border-primary/40 rounded-lg text-accent text-sm font-medium hover:bg-primary/20 transition-colors"
              onClick={closeMobile}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}