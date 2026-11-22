import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "var(--ink-950)",
          900: "var(--ink-900)",
          800: "var(--ink-800)",
          700: "var(--ink-700)",
          600: "var(--ink-600)",
        },
        blue: {
          600: "var(--blue-600)",
          500: "var(--blue-500)",
          400: "var(--blue-400)",
          300: "var(--blue-300)",
        },
        mist: {
          100: "var(--mist-100)",
          300: "var(--mist-300)",
          500: "var(--mist-500)",
        },
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { card: "28px", pill: "999px" },
    },
  },
  plugins: [],
};

export default config;
