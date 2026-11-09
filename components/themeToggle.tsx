import { useDarkMode } from '../hooks/useDarkMode'
import { Moon20, Sun20 } from './icons'

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => {
        setIsDark(!isDark)
      }}
      className={className}
    >
      {isDark ? <Moon20 /> : <Sun20 />}
    </button>
  )
}
