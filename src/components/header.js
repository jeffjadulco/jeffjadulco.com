import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink, BlobHeader } from "./atoms"

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation"
    >
      <Link to="/" aria-label="Website logo, go back to homepage.">
        <svg
          aria-hidden="true"
          role="img"
          className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 530 373"
        >
          <path d="M307.637 285.072c31.627-38.387 81.471-113.234 86.314-208.168-52.916 10.502-106.705 32.174-156.527 63.866 1.863 9.817 12.854 73.39-3.901 126.722-12.067-46.235-32.049-79.213-42.001-93.702-39.202 31.739-74.552 70.245-103.206 114.852 6.178 26.257 34.812 51.931 71.999 59.845-45.123 3.83-88.857-7.115-127.216-34.21C131.15 116.786 300.265 24.935 486.784-9.521c-36.526 133.853-103.325 234.484-179.147 294.593zM13.373 271.268C-1.682 182.688 58.725 72.512 126.585 30.505c-13.643 22.125-19.636 34.08-28.477 60.978C174.923 21.302 289.322-3.54 386.365-12.123 234.265 29.23 77.778 118.242 13.374 271.269zM487.735 87.666c19.744 82.303 10.79 144.022-19.432 195.124-1.387-26.878-10.634-51.175-10.665-51.257-.007.146-21.579 71.84-82.148 118.436 8.956-20.031 11.304-44.879 11.304-44.879-43.279 21.442-102.288 45.54-166.712 47.429 138.556-52.395 221.66-135.299 267.653-264.853z" />
        </svg>
      </Link>
      <span className="hidden sm:flex flex-grow items-center space-x-6">
        <NavLink to="/" title="Home" selected={activePage === "/"}>
          Home
        </NavLink>
        <NavLink to="/blog" title="Blog" selected={activePage === "blog"}>
          Blog
        </NavLink>
        <NavLink
          to="/projects"
          title="Projects"
          selected={activePage === "projects"}
        >
          Projects
        </NavLink>
        <NavLink to="/about" title="About" selected={activePage === "about"}>
          About
        </NavLink>
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>

    <div className="hidden sm:block">
      <div className="-mt-120 sm:-mt-120 ml-4">
        <BlobHeader />
      </div>
    </div>
  </header>
)

export default Header
