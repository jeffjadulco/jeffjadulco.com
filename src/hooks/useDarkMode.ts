import { useEffect } from 'react'
import { usePrefersDarkMode } from './usePrefersDarkMode'
import { useSafeLocalStorage } from './useSafeLocalStorage'

export function useDarkMode() {
  const [isEnabled, setIsEnabled] = useSafeLocalStorage('dark-mode', undefined)
  const prefersDarkMode = usePrefersDarkMode()

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.remove(enabled ? 'light' : 'dark')
    root.classList.add(enabled ? 'dark' : 'light')
  }, [enabled])

  return [enabled, setIsEnabled]
}
