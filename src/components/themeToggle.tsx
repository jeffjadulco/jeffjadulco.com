import { useDarkMode } from '@/hooks/useDarkMode'
import { useAnalyticsEvent } from '@/hooks/useAnalytics'
import { Moon20, Sun20 } from '@/components/icons'

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useDarkMode()
  const { trackCustomEvent } = useAnalyticsEvent()

  return (
    <button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => {
        setIsDark(!isDark)
        trackCustomEvent({ eventName: 'toggle-theme' })
      }}
      className={className}
    >
      {isDark ? <Moon20 /> : <Sun20 />}
    </button>
  )
}
