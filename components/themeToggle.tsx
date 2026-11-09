import { useEffect, useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { Moon20, Sun20 } from './icons'

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useDarkMode()
  const [mounted, setMounted] = useState(false)

  // The saved theme is only known on the client, so render theme-dependent
  // content after mount to avoid a stale server-rendered icon after hydration.
  useEffect(() => {
    setMounted(true)
  }, [])

  const label = !mounted
    ? 'Toggle Theme'
    : isDark
      ? 'Activate Light Mode'
      : 'Activate Dark Mode'

  return (
    <button
      aria-label={label}
      title={label}
      onClick={() => {
        setIsDark(!isDark)
      }}
      className={className}
    >
      {!mounted ? (
        <span className="block w-5 h-5" />
      ) : isDark ? (
        <Moon20 />
      ) : (
        <Sun20 />
      )}
    </button>
  )
}
