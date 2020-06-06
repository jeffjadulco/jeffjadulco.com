import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"

const MobileNav = () => {
  const [navShow, setNavShow] = React.useState(false)

  return (
    <div className="md:hidden text-xl">
      <button
        type="button"
        className="md:hidden fixed right-0 px-5 py-12 z-50 focus:outline-none"
        onClick={e => {
          setNavShow(!navShow)
        }}
      >
        {navShow ? (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </button>
      {navShow && (
        <div>
          <div className="w-full h-screen absolute bg-primary opacity-75"></div>
          <nav className="w-full h-screen mt-auto py-48 px-8 absolute flex flex-col items-end text-primary">
            <div className="flex-grow">
              <Link to="/">HOME</Link>
            </div>
            <div className="flex-grow">
              <Link to="/blog">BLOG</Link>
            </div>
            <div className="flex-grow">
              <Link to="/projects">PROJECTS</Link>
            </div>
            <div className="flex-grow">
              <Link to="/about">ABOUT</Link>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNav
