import { profile } from '@/data/profile';
import Link from 'next/link';

const techStack = ['Next.js', 'NestJS', 'Node.js', 'Java', 'Python', 'PostgreSQL'];
const architecture = [
  { label: 'Frontend', technology: 'Next.js' },
  { label: 'REST API', technology: 'Request / response' },
  { label: 'Backend', technology: 'NestJS / Node.js' },
  { label: 'Database', technology: 'PostgreSQL' },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36 lg:pb-24 lg:pt-40"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 technical-grid opacity-60" aria-hidden="true" />
      <div className="container-portfolio relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="hero-enter lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              <p className="mono-label text-accent">Software Engineer · Ulaanbaatar</p>
            </div>
            <p className="mt-7 text-lg font-semibold text-foreground">Jaimka Kh</p>
            <h1
              id="hero-title"
              className="mt-3 max-w-3xl text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-foreground"
            >
              I build practical software systems.
            </h1>
            <p className="type-body-large mt-6 max-w-2xl text-foreground/80">
              Web applications, backend systems, APIs and database-driven solutions built with a
              practical engineering mindset.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Software Engineer with hands-on experience across frontend, backend, databases, mobile
              applications and system integration.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/#projects" className="btn btn-primary">
                View Projects
              </Link>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} download className="btn btn-secondary">
                  Download CV
                </a>
              )}
              {(profile.githubUrl || profile.linkedinUrl) && (
                <span className="mx-1 hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
              )}
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tertiary px-2 py-2 text-sm"
                >
                  GitHub ↗
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tertiary px-2 py-2 text-sm"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
            <div className="mt-9 border-t border-border pt-5" aria-label="Selected technologies">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {techStack.map((tech, index) => (
                  <li
                    key={tech}
                    className="flex items-center gap-3 font-mono text-xs text-muted-foreground"
                  >
                    {index > 0 && (
                      <span className="h-1 w-1 rounded-full bg-foreground/20" aria-hidden="true" />
                    )}
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <figure
            className="hero-enter hero-enter-late lg:col-span-5"
            aria-labelledby="architecture-title"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <figcaption className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
                <div>
                  <p
                    id="architecture-title"
                    className="font-mono text-xs font-medium text-foreground"
                  >
                    Engineering overview
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Engineering Stack
                  </p>
                </div>
               
              </figcaption>
              <div className="p-5 md:p-7">
                <ol className="mx-auto max-w-sm">
                  {architecture.map((node, index) => (
                    <li key={node.label} className="relative">
                      <div className="flex items-center gap-4 rounded-lg border border-border bg-elevated px-4 py-3.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/8 font-mono text-[0.6875rem] text-accent">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-foreground">
                            {node.label}
                          </span>
                          <span className="block font-mono text-xs text-muted-foreground">
                            {node.technology}
                          </span>
                        </span>
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                          aria-hidden="true"
                        />
                      </div>
                      {index < architecture.length - 1 && (
                        <div
                          className="architecture-connector mx-auto h-5 w-px bg-primary/35"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
             
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
