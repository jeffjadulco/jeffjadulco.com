import React from "react"
import COLORS from "../constants"

const getInitialTheme = _ => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    console.log(userMedia)
    if (userMedia.matches) {
      return "dark"
    }
  }

  return "light"
}

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme)

  React.useEffect(
    _ => {
      const root = window.document.documentElement
      const isDark = theme === "dark"

      // Apply theme to css variables
      root.style.setProperty(
        "--color-bg-primary",
        isDark ? COLORS.dark.backgroundPrimary : COLORS.light.backgroundPrimary
      )

      root.style.setProperty(
        "--color-bg-secondary",
        isDark
          ? COLORS.dark.backgroundSecondary
          : COLORS.light.backgroundSecondary
      )

      root.style.setProperty(
        "--color-bg-tertiary",
        isDark
          ? COLORS.dark.backgroundTertiary
          : COLORS.light.backgroundTertiary
      )

      root.style.setProperty(
        "--color-text-primary",
        isDark ? COLORS.dark.textPrimary : COLORS.light.textPrimary
      )

      root.style.setProperty(
        "--color-text-secondary",
        isDark ? COLORS.dark.textSecondary : COLORS.light.textSecondary
      )

      // Save theme to localStorage
      localStorage.setItem("color-theme", isDark ? "dark" : "light")
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
