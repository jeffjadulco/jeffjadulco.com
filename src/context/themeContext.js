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

  return "dark"
}

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme)

  const rawSetTheme = theme => {
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.style.setProperty(
      "--color-bg-accent",
      isDark ? COLORS.dark.backgroundAccent : COLORS.light.backgroundAccent
    )

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
      isDark ? COLORS.dark.backgroundTertiary : COLORS.light.backgroundTertiary
    )

    root.style.setProperty(
      "--color-bg-accent-hover",
      isDark
        ? COLORS.dark.backgroundAccentHover
        : COLORS.light.backgroundAccentHover
    )

    root.style.setProperty(
      "--color-text-accent",
      isDark ? COLORS.dark.textAccent : COLORS.light.textAccent
    )

    root.style.setProperty(
      "--color-text-primary",
      isDark ? COLORS.dark.textPrimary : COLORS.light.textPrimary
    )

    root.style.setProperty(
      "--color-text-secondary",
      isDark ? COLORS.dark.textSecondary : COLORS.light.textSecondary
    )
    root.style.setProperty(
      "--color-text-tertiary",
      isDark ? COLORS.dark.textTertiary : COLORS.light.textTertiary
    )

    root.style.setProperty(
      "--color-text-on-accent",
      isDark ? COLORS.dark.textOnAccent : COLORS.light.textOnAccent
    )

    root.style.setProperty(
      "--color-fill-primary",
      isDark ? COLORS.dark.fillPrimary : COLORS.light.fillPrimary
    )
    root.style.setProperty(
      "--color-fill-secondary",
      isDark ? COLORS.dark.fillSecondary : COLORS.light.fillSecondary
    )
    root.style.setProperty(
      "--color-fill-tertiary",
      isDark ? COLORS.dark.filltertiary : COLORS.light.filltertiary
    )

    // Save theme to localStorage
    localStorage.setItem("color-theme", isDark ? "dark" : "light")
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(
    _ => {
      rawSetTheme(theme)
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
