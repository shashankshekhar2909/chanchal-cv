import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b0c10",
          800: "#111418",
          700: "#1a1f24",
        },
        sand: {
          100: "#f7f5f2",
          200: "#e9e4dd",
        },
        copper: {
          400: "#d6a65a",
          500: "#c78c3b",
        },
        berry: {
          500: "#d4514a",
          600: "#b6403a",
        },
        jade: {
          400: "#67b69a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px -20px rgba(10, 12, 16, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
