module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "Helvetica Neue",
          "Inter",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Playfair Display",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        footerPrimary: "var(--color-text-footer-primary)",
        footerSecondary: "var(--color-text-footer-secondary)",
      },
    },
  },
  variants: {},
  plugins: [],
}
