import React from "react"
import { useDarkMode } from "storybook-dark-mode"
import { ThemeProvider } from "../src/context/themeContext"
import "../src/assets/css/index.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider initialTheme={useDarkMode() ? "dark" : "light"}>
      <div className="p-20">{children}</div>
    </ThemeProvider>
  )
}

export default Layout
