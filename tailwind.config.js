const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['-ml-6'], // weird fix :/
    },
  },
  theme: {
    extend: {
      margin: {
        '-72': '-18rem',
        '-80': '-20rem',
        '-84': '-21rem',
        '-88': '-22rem',
        '-96': '-24rem',
        '-116': '-29rem',
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
        subtle: 'var(--color-bg-secondary)',
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
            strong: {
              color: 'var(--color-text-tertiary)',
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
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
