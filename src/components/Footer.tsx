import { profile } from '@/data/profile';
import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-portfolio flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <AppLogo size={24} />
          <span className="font-mono text-sm font-medium tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
            JAIMKA KH
          </span>
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          )}
          {profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          )}
          <a
            href="mailto:jaik320024444@gmail.com"
            className="mono-label hover:text-accent transition-colors"
            aria-label="Email"
          >
            Email
          </a>
          <Link href="/contact" className="mono-label hover:text-accent transition-colors">
            Contact
          </Link>
          <Link href="/projects" className="mono-label hover:text-accent transition-colors">
            Projects
          </Link>
        </nav>

        {/* Copyright */}
        <p className="mono-label text-center sm:text-right">© 2026 Jaimka Kh.</p>
      </div>
    </footer>
  );
}
