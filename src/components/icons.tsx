export const Spotify16 = () => {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="#1ED760"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    >
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
