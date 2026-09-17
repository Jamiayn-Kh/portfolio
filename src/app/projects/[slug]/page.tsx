import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArchitectureDiagram from '@/components/projects/ArchitectureDiagram';
import ProjectVisual from '@/components/projects/ProjectVisual';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: `${project.name} | Jaimka Kh`, description: project.description }
    : { title: 'Project not found' };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const liveLink = project.links.find((link) => link.type === 'live');
  const githubLink = project.links.find((link) => link.type === 'github')?.url ?? profile.githubUrl;
  const narrative = (
    [
      ['Overview', project.overview],
      ['Solution', project.solution],
      ['My Contribution', project.myContribution],
      ['Challenges', project.challenges],
      ['What I Learned', project.learned],
    ] as Array<[string, string | undefined]>
  ).filter((section): section is [string, string] => Boolean(section[1]));

  return (
    <>
      <Header />
      <main id="main-content" className="pb-section pt-28 md:pt-36">
        <article className="container-portfolio">
          <Link href="/projects" className="btn btn-tertiary px-0 text-sm">
            ← All selected work
          </Link>
          <header className="mt-8 grid gap-8 border-b border-border pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mono-label text-accent">
                0{project.index} / {project.context}
              </p>
              <h1 className="mt-4 max-w-3xl">{project.name}</h1>
              <p className="type-body-large mt-5 max-w-2xl text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((technology) => (
                  <span key={technology} className="tech-tag">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {liveLink && (
                  <a
                    href={liveLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit Live Site <span aria-hidden="true">↗</span>
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
            <div className="lg:col-span-5">
              <ProjectVisual project={project} compact />
            </div>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-7">
              {narrative.map(([title, content]) => (
                <section
                  key={title}
                  aria-labelledby={`${project.slug}-${title.toLowerCase().replaceAll(' ', '-')}`}
                >
                  <p className="mono-label text-accent">{title}</p>
                  <h2
                    id={`${project.slug}-${title.toLowerCase().replaceAll(' ', '-')}`}
                    className="mt-3 text-2xl"
                  >
                    {title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{content}</p>
                </section>
              ))}
            </div>
            <aside className="space-y-8 lg:col-span-5">
              <section
                className="rounded-xl border border-border bg-card p-5 md:p-6"
                aria-labelledby={`${project.slug}-architecture`}
              >
                <p className="mono-label text-accent">Technical structure</p>
                <h2 id={`${project.slug}-architecture`} className="mt-3 text-xl">
                  Architecture
                </h2>
                <div className="mt-6">
                  <ArchitectureDiagram project={project} />
                </div>
              </section>
              <section aria-labelledby={`${project.slug}-areas`}>
                <p className="mono-label text-accent">Engineering areas</p>
                <h2 id={`${project.slug}-areas`} className="mt-3 text-xl">
                  Technical areas
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {project.keyAreas.map((area) => (
                    <li key={area} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby={`${project.slug}-technologies`}>
                <p className="mono-label text-accent">Tech stack</p>
                <h2 id={`${project.slug}-technologies`} className="mt-3 text-xl">
                  Technologies
                </h2>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="tech-tag">
                      {technology}
                    </li>
                  ))}
                </ul>
              </section>
              {(liveLink || githubLink) && (
                <section aria-labelledby={`${project.slug}-links`}>
                  <p className="mono-label text-accent">Available links</p>
                  <h2 id={`${project.slug}-links`} className="mt-3 text-xl">
                    Links
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {liveLink && (
                      <a
                        href={liveLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Live Site <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-tertiary"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </section>
              )}
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
