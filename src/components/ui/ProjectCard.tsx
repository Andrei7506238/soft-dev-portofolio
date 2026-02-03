import type { Project } from '../../types/portfolio'
import { Tag } from './Tag'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <div className="project-media-wrapper">
        <div className="project-media">
          <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
        </div>
        <div className="project-media-overlay">
          <div className="link-row">
            {project.links.map((link) => (
              <a
                key={link.label}
                className="link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} for ${project.name}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="project-content">
          <div className="tag-row">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description.trim()}</p>
        <div className="project-date">
          {project.date}
        </div>
      </div>
    </article>
  )
}
