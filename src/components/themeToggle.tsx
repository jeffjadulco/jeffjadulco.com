import classnames from 'classnames'
import { useDarkMode } from '@/hooks/useDarkMode'
// import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const ThemeToggle = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <>
      <button
        aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
        title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
        onClick={() => {
          setIsDark(!isDark)
        }}
        className={classnames(className, {
          'rotate-180': isDark,
          'rotate-0': !isDark,
        })}
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6 md:w-5 md:h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
          />
        </svg>
      </button>
    </>
  )
}

export default ThemeToggle
