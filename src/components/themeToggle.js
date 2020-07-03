import React from "react"
import { ThemeContext } from "../context/themeContext"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const ThemeToggle = ({ className }) => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isLight() {
    return theme === "light"
  }

  const ToggleTheme = _ => {
    setTheme(isLight() ? "dark" : "light")
    trackCustomEvent({
      category: "Dark Mode Toggle",
      action: "Click",
      label: "Dark Mode",
    })
  }

  const getToggleClassName = _ => {
    return `${className} ${
      isLight() ? "rotate-0" : "rotate-180"
    } focus:outline-none`
  }

  return (
    <>
      <button
        aria-label={isLight() ? "Activate Dark Mode" : "Activate Light Mode"}
        title={isLight() ? "Activate Dark Mode" : "Activate Light Mode"}
        onClick={ToggleTheme}
        className={getToggleClassName()}
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6 md:w-5 md:h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
          />
        </svg>
      </button>
    </>
  )
}

export default ThemeToggle
