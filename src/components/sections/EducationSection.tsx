import type { Education as EducationType } from '../../data/education'
import { education } from '../../data/education'

export function EducationSection() {
  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <div className="section-header">
        <h2 id="education-title">Education</h2>
        <p className="section-subtitle">Formal education</p>
      </div>

      <div className="education-cards">
        {education.map((e: EducationType) => (
          <article key={e.id} className="education-card-large">
            <div className="education-card-inner">
              <div className="education-institution">{e.institution}</div>
              <div className="education-degree">{e.degree}</div>
              <div className="education-period">{e.period}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
