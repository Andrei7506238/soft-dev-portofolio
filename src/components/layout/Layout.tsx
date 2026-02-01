import type { ReactNode } from 'react'
import { NavBar } from '../ui/NavBar'
import { useTheme } from '../../hooks/useTheme'
import { person } from '../../data/portfolio'
import { Footer } from '../sections/Footer'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  const { theme, nextTheme, setTheme } = useTheme()

  return (
    <div>
      <NavBar
        name={person.name}
        linkedinUrl={person.links.linkedin}
        theme={theme}
        nextTheme={nextTheme}
        onToggleTheme={() => setTheme(nextTheme)}
      />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
