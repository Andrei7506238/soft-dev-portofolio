import type { Project } from '../../types/portfolio'
import { ProjectCard } from '../ui/ProjectCard'

type Props = {
  projects: Project[]
}

export function FeaturedProjectsSection({ projects }: Props) {
  return (
    <section
      className="section featured"
      id="projects-featured"
      aria-labelledby="featured-title"
    >
      <div className="section-header">
        <h2 id="featured-title">Featured Projects</h2>
        <p className="section-subtitle">In-depth case studies and highlights.</p>
      </div>

      <div className="featured-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} variant="featured" />
        ))}
      </div>
    </section>
  )
}
