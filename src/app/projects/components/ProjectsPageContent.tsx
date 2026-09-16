import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPageContent() {
  return (
    <section className="pb-section pt-32 md:pt-40" aria-labelledby="projects-heading">
      <div className="container-portfolio">
        <header className="max-w-3xl border-b border-border pb-10">
          <p className="mono-label text-accent">Selected work</p>
          <h1 id="projects-heading" className="mt-3">
            Selected Work
          </h1>
          <p className="type-body-large mt-5 text-muted-foreground">
            A collection of software projects spanning web applications, backend development,
            databases, APIs and system integration.
          </p>
        </header>
        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant={index === 0 ? 'dominant' : 'standard'}
              headingLevel="h2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
