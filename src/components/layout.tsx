import { Fragment } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { MobileNav } from './mobileNav'

export function Layout({ children }) {
  return (
    <Fragment>
      <MobileNav />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container flex-grow max-w-screen-lg px-5 m-auto mt-16 sm:px-12 md:px-20">
          {children}
        </main>
        <Footer />
      </div>
    </Fragment>
  )
}
