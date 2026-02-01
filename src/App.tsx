
import './App.css'
import { AllProjectsSection } from './components/sections/AllProjectsSection'
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection'
import { Introduction } from './components/sections/Introduction'
import { SkillsSection } from './components/sections/SkillsSection'
import { person, projects, skills } from './data/portfolio'
import Layout from './components/layout/Layout'

function App() {
  const featuredProjects = projects.filter((p) => p.featured)
  const allProjects = projects.filter((p) => !p.featured)

  return (
    <Layout>
      <div className="page">
        <Introduction
          name={person.name}
          role={person.role}
          headline={person.headline}
          photoSrc={person.photoSrc}
          photoAlt={person.photoAlt}
          linkedinUrl={person.links.linkedin}
          speciality={person.speciality}
          company={person.company}
          companyUrl={person.companyUrl}
        />

        <SkillsSection skills={skills} />

        <FeaturedProjectsSection projects={featuredProjects} />

        <AllProjectsSection projects={allProjects} />
      </div>
    </Layout>
  )
}


export default App

