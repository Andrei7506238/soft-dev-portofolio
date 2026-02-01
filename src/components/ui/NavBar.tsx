import { ThemeToggle } from './ThemeToggle'
import { ButtonLink } from './ButtonLink'
import type { Theme } from '../../hooks/useTheme'

type Props = {
  name: string
  linkedinUrl: string
  theme: Theme
  nextTheme: Theme
  onToggleTheme: () => void
}

export function NavBar({ name, linkedinUrl, theme, nextTheme, onToggleTheme }: Props) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <a href="#" className="brand-link">
            <strong>{name}</strong>
          </a>
        </div>

        <div className="nav-actions">
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#projects-featured">Featured</a>
          <a className="nav-link" href="#all-projects">Projects</a>
          <ButtonLink href={linkedinUrl} variant="ghost" target="_blank" rel="noreferrer">LinkedIn</ButtonLink>
          <ThemeToggle theme={theme} nextTheme={nextTheme} onToggle={onToggleTheme} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
