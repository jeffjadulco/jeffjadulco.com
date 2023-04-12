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

export const Twitter24 = ({ className }: IconProps) => {
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
      <title>Twitter</title>
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
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

export const Spotify16 = () => {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="#1ED760"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>Spotify icon</title>
      <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.7 11.5C11.6 11.7 11.2 11.8 11 11.7C8.9 10.5 6.3 10.2 4 10.9C3.7 10.9 3.5 10.8 3.4 10.5C3.4 10.3 3.5 10 3.8 9.9C6.4 9.1 9.2 9.5 11.6 10.8C11.7 11 11.8 11.3 11.7 11.5ZM12.7 9.4C12.6 9.4 12.6 9.4 12.7 9.4C12.5 9.7 12.1 9.8 11.8 9.6C9.4 8.2 6.5 7.9 3.8 8.7C3.5 8.8 3.1 8.6 3 8.3C2.9 7.9 3.1 7.6 3.4 7.4C6.4 6.5 9.7 6.9 12.4 8.5C12.7 8.7 12.8 9.1 12.7 9.4ZM12.7 7.1C10.1 5.6 5.9 5.4 3.4 6.2C3 6.3 2.6 6.1 2.5 5.7C2.4 5.3 2.6 4.9 3 4.7C5.8 3.9 10.5 4 13.5 5.8C13.9 6 14 6.5 13.8 6.8C13.5 7.2 13.1 7.3 12.7 7.1Z" />
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

export const Notion16 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-primary"
      fill="currentColor"
      viewBox="0 0 16 16"
      role="img"
    >
      <title>Notion icon</title>
      <g clipPath="url(#clip0)">
        <path d="M2.974 2.805c.495.403.683.375 1.617.312l8.81-.528c.188 0 .031-.188-.031-.22l-1.464-1.057c-.279-.219-.654-.466-1.37-.406l-8.528.625c-.313.028-.375.185-.25.31l1.216.964zm.529 2.055v9.268c0 .497.247.685.807.653l9.683-.56c.56-.031.624-.372.624-.778V4.237c0-.406-.156-.622-.5-.59l-10.116.59c-.375.032-.498.216-.498.62v.003zm9.557.494c.063.282 0 .56-.282.594l-.466.094v6.841c-.406.22-.778.344-1.088.344-.5 0-.625-.156-.998-.622L7.175 7.813v4.636l.966.219s0 .56-.779.56l-2.148.125c-.063-.125 0-.438.219-.498l.56-.156V6.57l-.779-.062c-.062-.282.094-.685.529-.716l2.304-.157 3.177 4.854V6.196l-.81-.094c-.063-.341.185-.591.498-.62l2.148-.128zM1.292.69l8.872-.653c1.088-.094 1.37-.032 2.055.466l2.833 1.992c.466.34.623.435.623.807v10.92c0 .685-.25 1.088-1.12 1.15l-10.308.623c-.651.032-.963-.062-1.307-.497L.854 12.789c-.373-.497-.529-.87-.529-1.304V1.779c0-.56.25-1.026.966-1.088z"></path>
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
