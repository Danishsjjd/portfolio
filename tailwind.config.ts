import { type Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        yellow: "hsl(var(--yellow) / <alpha-value>)",
      },
      animation: {
        bg: "bg-animate .5s forwards",
      },
      keyframes: {
        "bg-animate": {
          "0%": {
            background: "hsl(var(--yellow) / 0)",
          },
          "100%": {
            background: "hsl(var(--yellow) / 0.2)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

module.exports = config
