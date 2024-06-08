/** @type {import('tailwindcss').Config} */

import * as defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],

  theme: {
    screens: {
      xs: "386px",
      lgr: "1300px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        card: "hsl(var(--color-card) / <alpha-value>)",
        action: "hsl(var(--color-action) / <alpha-value>)",
        foreground: {
          DEFAULT: "hsl(var(--color-foreground) / <alpha-value>)",
          light: "hsl(var(--color-foreground) / 0.7)",
          lighter: "hsl(var(--color-foreground) / 0.42)",
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          light: "hsl(var(--color-primary-light) / <alpha-value>)",
          lighter: "hsl(var(--color-primary-lighter) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
          light: "hsl(var(--color-accent-light) / <alpha-value>)",
          lighter: "hsl(var(--color-accent-lighter) / <alpha-value>)",
        },
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        warning: "hsl(var(--color-warning) / <alpha-value>)",
      },
      dropShadow: {
        custom: "0 5px 5px rgba(0, 0, 0, 0.35)",
        custom2: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
