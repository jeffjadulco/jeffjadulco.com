import { Fragment } from 'react'
import { Inter } from '@next/font/google'
import { Fira_Code } from '@next/font/google'
import { Header } from './header'
import { Footer } from './footer'
import { MobileNav } from './mobileNav'

// Fonts
const FontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const FontFiraCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export function Layout({ children }) {
  return (
    <div className={`${FontInter.variable} ${FontFiraCode.variable} font-sans`}>
      <MobileNav />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container flex-grow max-w-screen-lg px-5 m-auto mt-16 sm:px-12 md:px-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
