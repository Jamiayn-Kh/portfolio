import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project
    ? { title: project.name + ' | Jaimka Kh', description: project.description }
    : { title: 'Project not found' };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const sections = [
    ['Overview', project.overview],
    ['Problem', project.problem],
    ['Solution', project.solution],
    ['My Contribution', project.myContribution],
    ['Challenges', project.challenges],
    ['What I Learned', project.learned],
  ];
  return (
    <>
      <Header />
      <main id="main-content" className="container-portfolio pt-32 pb-20">
        <Link href="/projects" className="text-accent">
          ← All projects
        </Link>
        <p className="mono-label mt-8">{project.context}</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 max-w-4xl">{project.name}</h1>
        <p className="text-muted-foreground mt-6 max-w-3xl">{project.description}</p>
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            {sections
              .filter(([, text]) => text)
              .map(([title, text]) => (
                <section key={title}>
                  <h2 className="text-xl font-semibold mb-3">{title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </section>
              ))}
          </div>
          <aside className="space-y-8">
            {project.architecture?.length ? (
              <section>
                <h2 className="text-xl font-semibold mb-3">Architecture</h2>
                <ol className="space-y-3">
                  {project.architecture.map((node) => (
                    <li key={node.label} className="arch-node flex flex-col">
                      <span>{node.label}</span>
                      {node.sublabel && (
                        <span className="text-xs text-muted-foreground">{node.sublabel}</span>
                      )}
                    </li>
                  ))}
                </ol>
                {project.slug === 'smart-zud' && (
                  <p className="text-sm text-muted-foreground mt-3">
                    Backend API ↔ Python / Flask risk assessment module
                  </p>
                )}
                {project.slug === 'af-shop' && (
                  <p className="text-sm text-muted-foreground mt-3">
                    Media: Cloudinary. Deployment: Vercel / Render.
                  </p>
                )}
              </section>
            ) : null}
            <section>
              <h2 className="text-xl font-semibold mb-3">Technologies</h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li className="tech-tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3">Technical Areas</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.keyAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </section>
            {project.links.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold mb-3">Links</h2>
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </section>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
