import { ButtonLink } from '../ui/ButtonLink'
import './Introduction.css'

type Props = {
  name: string
  role: string
  headline: string
  photoSrc: string
  photoAlt: string
  linkedinUrl: string
  speciality: string
  company: string
  companyUrl?: string
}

export function Introduction({
  name,
  role,
  headline,
  photoSrc,
  photoAlt,
  linkedinUrl,
  speciality,
  company,
  companyUrl,
}: Props) {
  return (
    <header className="section intro">
      <div className="intro-text">
        <div className="intro-top">
          <h1 className="title">{name}</h1>
        </div>

        <div className="intro-meta">
          {speciality ? <span className="speciality">{speciality}</span> : null}
          <span className="eyebrow role">{role}</span>
        </div>

        {company ? (
          <div className="company-row">
            {companyUrl ? (
              <a className="company-link" href={companyUrl} target="_blank" rel="noreferrer">
                {company}
              </a>
            ) : (
              <span className="company-link">{company}</span>
            )}
          </div>
        ) : null}

        <p className="lead" style={{ whiteSpace: 'pre-line' }}>{headline}</p>
        <div className="cta-row">
          <ButtonLink href="#projects-featured" variant="primary">
            View Featured Work
          </ButtonLink>
          <ButtonLink href={linkedinUrl} variant="ghost" target="_blank" rel="noreferrer">
            LinkedIn
          </ButtonLink>
        </div>
      </div>
      <div className="intro-photo blob-frame">
        <div className="glass-card" aria-hidden="true">
          <span className="glass-orb glass-orb-top"></span>
          <span className="glass-orb glass-orb-bottom"></span>
        </div>
        <div className="glass-card-inner">
          <span className="glass-shine" aria-hidden="true"></span>
          <img className="intro-photo-img" src={photoSrc} alt={photoAlt} />
        </div>
      </div>
    </header>
  )
}
