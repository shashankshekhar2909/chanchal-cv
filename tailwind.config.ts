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
          DEFAULT: "#111827",
          light: "#1f2937",
        },
        accent: {
          peach: "#f97316",
          blush: "#f43f5e",
          mint: "#34d399",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
