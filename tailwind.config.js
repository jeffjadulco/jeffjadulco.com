const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      margin: {
        '-72': '-18rem',
        '-80': '-20rem',
        '-84': '-21rem',
        '-88': '-22rem',
        '-96': '-24rem',
        '-120': '-30rem',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['Fira Code', ...fontFamily.mono],
      },
      backgroundColor: {
        accent: 'var(--color-bg-accent)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        hover: {
          accent: 'var(--color-bg-accent-hover)',
        },
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        on: {
          accent: 'var(--color-text-on-accent)',
        },
        fill: {
          primary: 'var(--color-fill-primary)',
          secondary: 'var(--color-fill-secondary)',
        },
      },
      divideColor: {
        subtle: 'var(--color-bg-secondary)',
      },
      borderColor: {
        accent: 'var(--color-text-accent)',
      },
      letterSpacing: {
        widestest: '0.2em',
      },
      opacity: {
        90: '.9',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-text-tertiary)',
            a: {
              color: 'var(--color-text-tertiary)',
              '&:hover': {
                color: 'var(--color-text-accent)',
              },
              textDecoration: 'underline',
            },
            h1: {
              color: 'var(--color-text-primary)',
            },
            h2: {
              color: 'var(--color-text-accent)',
            },
            h3: {
              color: 'var(--color-text-accent)',
            },
            h4: {
              color: 'var(--color-text-accent)',
            },
            blockquote: {
              color: 'var(--color-text-tertiary)',
            },
            strong: {
              color: 'var(--color-text-tertiary)',
            },
            blockquote: {
              color: 'var(--color-text-tertiary)',
              fontSize: '1rem',
              fontWeight: '400',
              fontStyle: 'normal',
              padding: '0.5rem 0.75rem 0.5rem 1.25rem',
              borderLeftWidth: '2px',
              borderLeftColor: 'var(--color-text-accent)',
              backgroundColor: 'var(--color-bg-secondary)',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            code: {
              color: 'var(--color-code-text)',
              backgroundColor: 'var(--color-code-background)',
              fontWeight: '400',
              padding: '0.15rem 0.5rem',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            hr: {
              borderColor: 'var(--color-text-tertiary)',
              borderWidth: '1px',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-hover'],
      borderWidth: ['hover', 'focus'],
      display: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
