import type { Theme } from '../../hooks/useTheme'

type Props = {
  theme: Theme
  nextTheme: Theme
  onToggle: () => void
}

const emojiByTheme: Record<Theme, string> = {
  light: '☀️',
  dark: '🌙',
}

const titleByTheme: Record<Theme, string> = {
  light: 'Light theme',
  dark: 'Dark theme',
}

export function ThemeToggle({ theme, nextTheme, onToggle }: Props) {
  return (
    <button
      type="button"
      className="theme-toggle theme-toggle-emoji"
      onClick={onToggle}
      aria-label={`Theme: ${titleByTheme[theme]}. Switch to ${titleByTheme[nextTheme]}.`}
      title={titleByTheme[theme]}
    >
      <span aria-hidden className="theme-emoji">
        {emojiByTheme[theme]}
      </span>
    </button>
  )
}
