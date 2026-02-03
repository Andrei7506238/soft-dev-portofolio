import type { FeaturedProject } from '../../types/portfolio'
import { Tag } from './Tag'

type Props = {
  project: FeaturedProject
}

export function FeaturedProjectCard({ project }: Props) {
  return (
    <article className="featured-project-card">
      <h3 className="featured-project-title">{project.name}</h3>
      <div className="featured-media-wrapper">
        <div className="featured-media">
          <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
        </div>
        <div className="featured-tag-row">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="featured-link-row">
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
      <div className="featured-project-body">
        <p>{project.description.trim()}</p>
      </div>
    </article>
  )
}
