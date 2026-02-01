import type { Project } from '../../types/portfolio'
import { Tag } from './Tag'

type Props = {
  project: Project
  variant?: 'featured' | 'grid'
}

export function ProjectCard({ project, variant = 'grid' }: Props) {
  return (
    <article className={`project-card ${variant === 'featured' ? 'featured-card' : ''}`}>
      {variant === 'featured' && (
        <h3 className="project-title">{project.name}</h3>
      )}
      <div className="project-media-wrapper">
        <div className={`project-media ${variant === 'grid' ? 'small' : ''}`}>
          <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
        </div>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="link-row">
          {project.links.map((link) => (
            <a
              key={link.label}
              className="link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="project-body">
        {variant === 'grid' && <h3>{project.name}</h3>}
        <p>{project.description.trim()}</p>
      </div>
    </article>
  )
}
