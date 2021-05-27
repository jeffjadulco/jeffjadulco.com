import { Fragment } from 'react'
import { Blob } from '../components/atoms'

const NotFoundPage = () => (
  <Fragment>
    <div className="flex justify-center">
      <div className="absolute">
        <Blob />
      </div>
      <h1 className="mt-16 md:mt-20 lg:mt-24 mx-auto text-center font-bold text-on-accent text-6xl">
        404
      </h1>
    </div>
    <p className="mt-24 lg:mt-36 font-medium text-center text-2xl text-secondary">
      Page not found. The page you’re looking for does not exist.
    </p>
  </Fragment>
)

export default NotFoundPage
