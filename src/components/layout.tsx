import { Fragment } from 'react'
import Header from './header'
import MobileNav from './mobileNav'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MobileNav />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container flex-grow max-w-screen-xl px-5 m-auto mt-16 sm:px-12 md:px-20">
          {children}
        </main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
