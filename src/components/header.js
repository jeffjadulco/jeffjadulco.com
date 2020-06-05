// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ThemeToggle from "./themeToggle"

const Header = ({ siteTitle }) => (
  <header className="container m-auto px-4 md:px-20 max-w-screen-xl h-40 flex items-center">
    <div className="mx-auto">
      <svg
        className="h-12 w-12 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path d="M16.125 5.625c-7.8 3.45-12.5 12.938-13.875 17.25C12.3 13.2 34 10.844 43.594 10.875 26.794 8.175 16.03 10.5 12.75 12c-.6-1.5 2-4.875 3.375-6.375z" />
        <path d="M46.875 14.25C25.95 12.975 7.656 23.094 1.125 28.313c5.85 2.4 15.813 3.687 20.063 4.03-6.9-1.724-10.375-3.968-11.25-4.874 6.15-3.375 11-4.719 12.656-4.969l3.937 7.031v-8.25l14.532-4.5c-2.026 5.7-7.782 11.938-10.407 14.344C39.131 24.075 45 16.937 46.875 14.25z" />
        <path d="M6.563 34.125c23.53 3.938 33.562-3 39.562-12.844.75 9.844-4.125 16.469-6 17.907l.938-5.063c-4.65 3.675-11.25 7.094-13.97 8.344l3-4.407c-5.55 1.65-18-1.937-23.53-3.937z" />
      </svg>
    </div>
    <nav className="hidden md:flex ml-6 flex-grow items-stretch text-sm antialiased">
      <div className="flex-grow items-center">
        <a className="mr-6" href="">
          BLOG
        </a>
        <a className="mr-6" href="">
          PROJECTS
        </a>
        <a className="mr-6" href="">
          ABOUT
        </a>
      </div>
      <ThemeToggle />
    </nav>
    <button className="block md:hidden fixed right-0 px-4">
      <svg
        className="w-12 h-12 fill-current stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          d="M10.667 17.333h26.666M10.667 24h26.666M10.667 30.667h26.666"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
