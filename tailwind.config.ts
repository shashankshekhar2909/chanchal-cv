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
        // Base surfaces
        snow:    "#FAFBFF",
        "snow-dark": "#F0F0FF",
        ice:     "#EAEAFF",
        night:   "#0A0E1A",
        "night-soft": "#141929",
        "night-card": "#1A2035",
        muted:   "#64748B",
        subtle:  "#94A3B8",
        border:  "#E3E2F5",

        // Primary: electric violet
        violet: {
          DEFAULT: "#7C3AED",
          light:   "#8B5CF6",
          bright:  "#A78BFA",
          muted:   "#C4B5FD",
          pale:    "#EDE9FE",
          deep:    "#5B21B6",
        },

        // Secondary: digital cyan
        cyan: {
          DEFAULT: "#06B6D4",
          light:   "#22D3EE",
          muted:   "#67E8F9",
          pale:    "#CFFAFE",
        },

        // Highlight: amber (results/metrics)
        amber: {
          DEFAULT: "#F59E0B",
          light:   "#FCD34D",
          muted:   "#FDE68A",
          pale:    "#FEF3C7",
        },

        // CTA pop: coral (energy/action)
        coral: {
          DEFAULT: "#F97316",
          light:   "#FB923C",
          pale:    "#FFEDD5",
        },

        // Legacy compat
        charcoal: "#0A0E1A",
        cream: "#FAFBFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)",  { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        card:       "0 1px 3px rgba(10,14,26,0.08), 0 4px 20px rgba(124,58,237,0.06)",
        "card-hover":"0 4px 28px rgba(124,58,237,0.18), 0 1px 4px rgba(10,14,26,0.08)",
        violet:     "0 0 40px rgba(124,58,237,0.25)",
        glow:       "0 0 60px rgba(124,58,237,0.15), 0 0 120px rgba(6,182,212,0.08)",
      },
      borderColor: {
        DEFAULT: "#E3E2F5",
      },
    },
  },
  plugins: [],
};

export default config;
