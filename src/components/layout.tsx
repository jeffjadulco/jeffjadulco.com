import { Fragment } from 'react'
import Header from './header'
import MobileNav from './mobileNav'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MobileNav />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container flex-grow m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl">
          {children}
        </main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
