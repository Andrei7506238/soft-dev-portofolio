import { AllProjectsSection } from '../components/sections/AllProjectsSection'
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection'
import { Introduction } from '../components/sections/Introduction'
import { SkillsSection } from '../components/sections/SkillsSection'
import { EducationSection } from '../components/sections/EducationSection'
import { LiveDemoSection } from '../components/sections/LiveDemoSection'
import { TodoSection } from '../components/sections/TodoSection'
import { BlogSection } from '../components/sections/BlogSection'
import { person, projects, featuredProjects, skills, liveDemo } from '../data/portfolio'
import '../App.css'

export function HomePage() {
  const allProjects = projects

  return (
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

      <LiveDemoSection
        title={liveDemo.title}
        description={liveDemo.description}
        demoUrl={liveDemo.demoUrl}
        tags={liveDemo.tags}
      />

      <AllProjectsSection projects={allProjects} />

      <EducationSection />

      <TodoSection />

      <BlogSection />
    </div>
  )
}

export default HomePage
