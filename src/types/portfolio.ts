export type SkillLevel = 'most' | 'basic' | 'practices'

export type Skill = {
  name: string
  level: SkillLevel
  logoUrl?: string
  hoverDescription?: string
}

export type ProjectLink = {
  label: string
  href: string
  linkLogoUrl?: string
}

export type Project = {
  name: string
  description: string
  tags: string[]
  image: string
  links: ProjectLink[]
  featured?: boolean
}
