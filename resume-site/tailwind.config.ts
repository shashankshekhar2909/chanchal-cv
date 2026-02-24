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
          800: "#111827",
          700: "#1f2937",
        },
        sand: {
          100: "#f8f5f2",
          200: "#efe9e1",
        },
        copper: {
          400: "#f59e0b",
          500: "#f97316",
        },
        berry: {
          500: "#ef4444",
          600: "#e11d48",
        },
        jade: {
          400: "#34d399",
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
