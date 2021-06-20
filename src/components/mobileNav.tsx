import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { ThemeToggle } from './themeToggle'

const routes = [
  {
    path: '/',
    label: 'HOME',
    exact: true,
  },
  {
    path: '/blog',
    label: 'BLOG',
  },
  {
    path: '/projects',
    label: 'PROJECTS',
  },
  {
    path: '/about',
    label: 'ABOUT',
  },
]

export function MobileNav() {
  const [navShow, setNavShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const body = document.body
    if (typeof body !== 'undefined') {
      if (navShow) {
        body.style.setProperty('overflow', 'hidden')
      } else {
        body.style.removeProperty('overflow')
      }
    }
  }, [navShow])

  return (
    <div className="text-xl sm:hidden" aria-hidden={!navShow}>
      <button
        type="button"
        className="fixed right-0 z-50 px-5 py-12 md:hidden focus:outline-none"
        onClick={_ => {
          setNavShow(!navShow)
        }}
      >
        {navShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        )}
      </button>
      {navShow && (
        <div className="relative z-10">
          <div className="fixed w-full h-screen bg-back-primary"></div>
          <button
            type="button"
            className="fixed w-full h-screen cursor-auto"
            onClick={e => {
              setNavShow(!navShow)
            }}
          ></button>
          <nav className="fixed flex flex-col items-center w-full h-screen px-6 py-48 mt-auto text-base tracking-widest text-fore-primary">
            {routes.map(route => (
              <MobileNavLink
                key={route.path}
                to={route.path}
                title={route.label}
                selected={
                  route.exact === true
                    ? route.path === router.asPath
                    : router.asPath.startsWith(route.path)
                }
                hide={() => setNavShow(false)}
              />
            ))}
            <ThemeToggle />
          </nav>
        </div>
      )}
    </div>
  )
}

function MobileNavLink({ to, title, selected, hide }) {
  return (
    <div className="flex-grow">
      <Link href={to}>
        <a
          className={classNames({
            'text-accent': !!selected,
          })}
          onClick={_ => hide()}
        >
          {title}
        </a>
      </Link>
    </div>
  )
}
