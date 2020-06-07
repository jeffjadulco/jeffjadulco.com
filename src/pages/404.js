import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="mt-12 md:mt-48 mx-auto text-center font-serif text-primary text-6xl">
      404
    </h1>
    <p className="mt-6 font-serif text-center text-2xl text-secondary">
      Page not found. The page you’re looking for does not exist.
    </p>
  </Layout>
)

export default NotFoundPage
