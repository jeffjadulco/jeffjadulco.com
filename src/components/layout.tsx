import { ThemeProvider } from "../context/themeContext"
import Header from "./header"
import MobileNav from "./mobileNav"
import Footer from "./footer"

const Layout = ({ children, footer = true }) => {
  return (
    <ThemeProvider initialTheme="dark">
      <MobileNav />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container flex-grow m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl">
          {children}
        </main>
        {footer && <Footer />}
      </div>
    </ThemeProvider>
  )
}

export default Layout
