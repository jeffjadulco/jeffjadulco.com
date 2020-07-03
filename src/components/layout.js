/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "../context/themeContext"
import Header from "./header"
import MobileNav from "./mobileNav"
import Footer from "./footer"

const Layout = ({ children, footer = true }) => {
  return (
    <>
      <ThemeProvider>
        <MobileNav />
        <Header />
        <main className="min-h-screen container m-auto px-5 mt-16 sm:px-12 md:px-20 pb-24 max-w-screen-xl">
          {children}
        </main>
        {footer && <Footer />}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
