module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: ["ml-3"], // ml-3 for toc depth
    },
  },
  theme: {
    extend: {
      margin: {
        "-72": "-18rem",
        "-80": "-20rem",
        "-84": "-21rem",
        "-88": "-22rem",
        "-96": "-24rem",
        "-120": "-30rem",
      },
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
        hover: {
          accent: "var(--color-bg-accent-hover)",
        },
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        on: {
          accent: "var(--color-text-on-accent)",
        },
        fill: {
          primary: "var(--color-fill-primary)",
          secondary: "var(--color-fill-secondary)",
        },
      },
      divideColor: {
        subtle: "var(--color-bg-secondary)",
      },
      borderColor: {
        accent: "var(--color-text-accent)",
      },
      letterSpacing: {
        widestest: "0.2em",
      },
      opacity: {
        90: ".9",
      },
    },
    typography: {
      default: {
        css: {
          color: "var(--color-text-tertiary)",
          a: {
            color: "var(--color-text-tertiary)",
            "&:hover": {
              color: "var(--color-text-accent)",
            },
          },
          h1: {
            color: "var(--color-text-primary)",
          },
          h2: {
            color: "var(--color-text-accent)",
          },
          h3: {
            color: "var(--color-text-accent)",
          },
          h4: {
            color: "var(--color-text-accent)",
          },
          blockquote: {
            color: "var(--color-text-tertiary)",
          },
          strong: {
            color: "var(--color-text-tertiary)",
          },
          blockquote: {
            borderLeftWidth: "0.25rem",
            borderLeftColor: "var(--color-text-accent)",
          },
          "blockquote p:first-of-type::before": {
            content: "",
          },
          "blockquote p:last-of-type::after": {
            content: "",
          },
          code: {
            color: "var(--color-text-tertiary)",
            fontWeight: "500",
          },
          "code::before": {
            content: "",
          },
          "code::after": {
            content: "",
          },
        },
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [require("@tailwindcss/typography")],
}
