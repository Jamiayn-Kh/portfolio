import Link from 'next/link';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjectsSection() {
  const [smartZud, mungunUrlal, afShop] = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="section-padding border-t border-border"
      aria-labelledby="selected-work-heading"
    >
      <div className="container-portfolio">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mono-label text-accent">02 / Selected Work</p>
            <h2 id="selected-work-heading" className="mt-3">
              Projects where I turned ideas into working software.
            </h2>
          </div>
          <Link href="/projects" className="btn btn-tertiary w-fit px-0">
            All selected work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10">
          <ProjectCard project={smartZud} variant="dominant" headingLevel="h3" />
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ProjectCard project={mungunUrlal} headingLevel="h3" />
          <ProjectCard project={afShop} headingLevel="h3" />
        </div>
      </div>
    </section>
  );
}
