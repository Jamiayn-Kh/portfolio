'use client';

import { profile } from '@/data/profile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const links = [
  ['home', 'Home', '/'],
  ['about', 'About', '/#about'],
  ['projects', 'Projects', '/projects'],
  ['experience', 'Experience', '/#experience'],
  ['skills', 'Skills', '/#skills'],
  ['contact', 'Contact', '/contact'],
] as const;
const sectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'contact-cta'];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const close = useCallback((restore = false) => {
    setOpen(false);
    if (restore) requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (pathname.startsWith('/projects')) return setActive('projects');
    if (pathname.startsWith('/contact')) return setActive('contact');
    setActive('home');
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries
          .filter((item) => item.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (entry) setActive(entry.target.id === 'contact-cta' ? 'contact' : entry.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.5] }
    );
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const background = document.querySelectorAll<HTMLElement>('main, footer');
    background.forEach((element) => {
      element.inert = true;
      element.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = 'hidden';
    const focusable = () =>
      Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? []);
    requestAnimationFrame(() => focusable()[0]?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') return close(true);
      if (event.key !== 'Tab') return;
      const items = focusable();
      const first = items[0];
      const last = items.at(-1);
      if (
        (event.shiftKey && document.activeElement === first) ||
        (!event.shiftKey && document.activeElement === last)
      ) {
        event.preventDefault();
        (event.shiftKey ? last : first)?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      background.forEach((element) => {
        element.inert = false;
        element.removeAttribute('aria-hidden');
      });
    };
  }, [close, open]);

  const navClass = (id: string, mobile = false) =>
    [
      'relative rounded-sm font-medium transition-colors',
      mobile ? 'flex min-h-12 items-center border-b border-border text-xl' : 'py-2 text-sm',
      active === id ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
      !mobile && active === id
        ? 'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-primary'
        : '',
    ].join(' ');

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? 'border-border bg-background/94 py-2.5 backdrop-blur-sm' : 'border-transparent bg-background/70 py-4'}`}
      >
        <div className="container-portfolio flex min-h-12 items-center justify-between gap-5">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-sm text-foreground no-underline hover:no-underline"
            aria-label="Jaimka Kh, home"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card font-mono text-xs font-semibold text-accent"
              aria-hidden="true"
            >
              JK
            </span>
            <span className="text-sm font-semibold tracking-tight">Jaimka Kh</span>
          </Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {links.map(([id, label, href]) => (
              <Link
                key={id}
                href={href}
                className={navClass(id)}
                aria-current={active === id ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tertiary px-2 py-2 text-sm"
              >
                GitHub
              </a>
            )}
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tertiary px-2 py-2 text-sm"
              >
                LinkedIn
              </a>
            )}
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download className="btn btn-secondary min-h-10 px-4">
                Download CV
              </a>
            )}
          </div>
          <button
            ref={triggerRef}
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-border bg-card xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>
      {open && (
        <div
          id="mobile-navigation"
          ref={menuRef}
          className="fixed inset-0 z-40 overflow-y-auto bg-background px-5 pb-8 pt-24 sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mx-auto flex min-h-full max-w-portfolio flex-col">
            <nav className="flex flex-col border-t border-border" aria-label="Mobile navigation">
              {links.map(([id, label, href]) => (
                <Link
                  key={id}
                  href={href}
                  onClick={() => close()}
                  className={`${navClass(id, true)} no-underline hover:no-underline`}
                  aria-current={active === id ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>
            {(profile.githubUrl || profile.linkedinUrl || profile.resumeUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.githubUrl && (
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                  </a>
                )}
                {profile.linkedinUrl && (
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    LinkedIn
                  </a>
                )}
                {profile.resumeUrl && (
                  <a href={profile.resumeUrl} download className="btn btn-secondary">
                    Download CV
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
