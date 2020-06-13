module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundColor: {
        accent: "var(--color-bg-accent)",
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        tertiary: "var(--color-bg-tertiary)",
        hover: {
          accent: "var(--color-bg-accent-hover)",
        },
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        footerPrimary: "var(--color-text-footer-primary)",
        footerSecondary: "var(--color-text-footer-secondary)",
        on: {
          accent: "var(--color-text-on-accent)",
        },
        fill: {
          primary: "var(--color-fill-primary)",
          secondary: "var(--color-fill-secondary)",
          tertiary: "var(--color-fill-tertiary)",
        },
      },
      divideColor: {
        subtle: "var(--color-bg-tertiary)",
      },
      letterSpacing: {
        widestest: "0.2em",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
}
