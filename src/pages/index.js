import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-secondary tracking-wider">
      <h1 className="mt-12 max-w-3xl font-sans text-2xl sm:text-3xl md:text-4xl">
        <p className="text-primary font-medium">
          Hi, I’m Jeff.
          <br className="mb-6 md:hidden" /> I’m an experienced game developer
          with deep interest in modern web development.
        </p>
      </h1>
      <p className="mt-24 text-secondary font-sans text-xl sm:text-2xl md:text-3xl">
        {/* I write{" "}
        <Link to="/blog" className=" underline text-primary">
          blogs
        </Link>
        .<br /> */}
        I make open source{" "}
        <Link to="/projects" className=" underline text-primary">
          projects
        </Link>
        .<br />
        Read more about me{" "}
        <Link to="/about/" className=" underline text-primary">
          here
        </Link>
        .
      </p>
      <p className="mt-24 text-secondary font-sans text-xl sm:text-2xl md:text-3xl">
        Contact me at <br />
        <a
          href="mailto:jeffjadulco.work@gmail.com"
          className="underline text-primary"
        >
          jeffjadulco.work@gmail.com
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
