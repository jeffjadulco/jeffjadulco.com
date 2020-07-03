import React from "react"

import Layout from "../components/layout"
import { Blob } from "../components/atoms"

const NotFoundPage = () => (
  <Layout footer={false}>
    <div className="mt-48 flex justify-center">
      <div className="absolute">
        <Blob />
      </div>
      <h1 className="mt-12 md:mt-16 lg:mt-20 mx-auto text-center font-bold text-on-accent text-6xl">
        404
      </h1>
    </div>
    <p className="mt-20 lg:mt-24 font-medium text-center text-2xl text-secondary">
      Page not found. The page you’re looking for does not exist.
    </p>
  </Layout>
)

export default NotFoundPage
