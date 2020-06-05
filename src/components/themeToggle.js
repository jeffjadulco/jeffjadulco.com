import React from "react"
import { ThemeContext } from "../context/themeContext"

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const ToggleTheme = _ => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <button onClick={ToggleTheme}>
        <svg
          className="w-5 h-5 fill-current"
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
