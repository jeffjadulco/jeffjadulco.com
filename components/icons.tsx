import classNames from 'classnames'

interface IconProps {
  className?: string
}

export const Sun20 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      role="img"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

export const Moon20 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      role="img"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}

export const MailAt24 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('w-6 h-6', className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      role="img"
    >
      <title>Email Address</title>
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-5.5 8.28"></path>
    </svg>
  )
}
export const GitHub24 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('w-6 h-6', className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      role="img"
    >
      <title>GitHub</title>
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
    </svg>
  )
}

export const Letterboxd16 = () => {
  return (
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      role="img"
    >
      <title>Letterboxd icon</title>
      <defs>
        <path
          id="path-1"
          d="M250 500C111.929 500 0 388.071 0 250S111.929 0 250 0s250 111.929 250 250-111.929 250-250 250z"
        ></path>
        <radialGradient
          id="radialGradient-3"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#FF8000"></stop>
          <stop offset="37.691%" stopColor="#FF8000"></stop>
          <stop offset="100%" stopColor="#FF8000" stopOpacity="0"></stop>
        </radialGradient>
        <filter
          id="filter-4"
          width="139.2%"
          height="139.2%"
          x="-19.6%"
          y="-19.6%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="50"></feGaussianBlur>
        </filter>
        <radialGradient
          id="radialGradient-5"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#40BCF4"></stop>
          <stop offset="49.309%" stopColor="#40BCF4"></stop>
          <stop offset="100%" stopColor="#40BCF4" stopOpacity="0"></stop>
        </radialGradient>
        <filter
          id="filter-6"
          width="139.2%"
          height="139.2%"
          x="-19.6%"
          y="-19.6%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="50"></feGaussianBlur>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <mask id="mask-2" fill="#fff">
            <use xlinkHref="#path-1"></use>
          </mask>
          <use fill="#0EDF52" fillRule="nonzero" xlinkHref="#path-1"></use>
          <path
            fill="url(#radialGradient-3)"
            fillRule="nonzero"
            d="M26.5 752C-184.749 752-356 580.749-356 369.5S-184.749-13 26.5-13 409 158.251 409 369.5 237.749 752 26.5 752z"
            filter="url(#filter-4)"
            mask="url(#mask-2)"
          ></path>
          <path
            fill="url(#radialGradient-5)"
            fillRule="nonzero"
            d="M431.5 820C220.251 820 49 648.749 49 437.5S220.251 55 431.5 55 814 226.251 814 437.5 642.749 820 431.5 820z"
            filter="url(#filter-6)"
            mask="url(#mask-2)"
          ></path>
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M165 103L165 383 354.15639 383 354.15639 313.100855 237.72411 313.100855 237.72411 103z"
            mask="url(#mask-2)"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export const Steam16 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-fore-subtle"
      fill="currentColor"
      viewBox="0 0 16 16"
      role="img"
    >
      <title>Steam icon</title>
      <g clipPath="url(#clip0)">
        <path d="M7.987 0C3.787 0 .341 3.24.016 7.357L4.302 9.13a2.26 2.26 0 011.276-.393c.042 0 .083.003.125.003l1.906-2.76v-.04a3.017 3.017 0 013.016-3.015 3.022 3.022 0 013.018 3.018 3.02 3.02 0 01-3.018 3.016h-.068l-2.719 1.94c0 .036.003.07.003.107a2.26 2.26 0 01-2.26 2.262 2.277 2.277 0 01-2.222-1.817L.292 10.18A7.998 7.998 0 0015.985 8c0-4.419-3.581-8-7.998-8zM5.026 12.14l-.982-.406c.18.376.493.672.878.834a1.702 1.702 0 002.352-1.566 1.69 1.69 0 00-.128-.65 1.68 1.68 0 00-.92-.922 1.69 1.69 0 00-1.25-.021l1.013.419a1.254 1.254 0 01-.963 2.313zm7.61-6.203a2.012 2.012 0 00-2.008-2.01 2.01 2.01 0 101.42 3.431 2.01 2.01 0 00.588-1.42zm-3.513-.002c0-.836.674-1.51 1.508-1.51.833 0 1.512.674 1.512 1.51a1.51 1.51 0 11-3.021 0z"></path>
      </g>
    </svg>
  )
}

export const Project24 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('w-6 h-6 text-accent', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  )
}

export const Blog24 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('w-6 h-6 text-accent', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  )
}

export const About24 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('w-6 h-6 text-accent', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
