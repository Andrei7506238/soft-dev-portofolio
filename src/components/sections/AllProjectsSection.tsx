import type { Project } from '../../types/portfolio'
import { ProjectCard } from '../ui/ProjectCard'

type Props = {
  projects: Project[]
}

export function AllProjectsSection({ projects }: Props) {
  return (
    <section className="section all-projects" aria-labelledby="all-projects-title">
      <div className="section-header">
        <h2 id="all-projects-title">All Projects</h2>
        <p className="section-subtitle">A quick overview of the rest of my work.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
