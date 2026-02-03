import type { FeaturedProject } from '../../types/portfolio'
import { FeaturedProjectCard } from '../ui/FeaturedProjectCard'

type Props = {
  projects: FeaturedProject[]
}

export function FeaturedProjectsSection({ projects }: Props) {
  return (
    <section
      className="section featured"
      id="projects-featured"
      aria-labelledby="featured-title"
    >
      <div className="section-header">
        <h2 id="featured-title">Featured Personal Projects</h2>
        <p className="section-subtitle">In-depth case studies and highlights.</p>
      </div>

      <div className="featured-grid">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
