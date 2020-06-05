import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider } from "../context/themeContext"

const IndexPage = () => (
  <ThemeProvider>
    <Layout>
      <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
