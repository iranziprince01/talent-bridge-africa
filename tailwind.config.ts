import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#00939f",
          100: "#00939f",
          200: "#00939f",
          300: "#00939f",
          400: "#00939f",
          500: "#00939f", // unified teal main
          600: "#00939f",
          700: "#00939f",
          800: "#00939f",
          900: "#00939f"
        },
        accent: {
          50: "#f7ecff",
          100: "#ead2ff",
          200: "#d4a6ff",
          300: "#bf79ff",
          400: "#a94dff",
          500: "#931fff", // energetic purple
          600: "#7418cc",
          700: "#561299",
          800: "#380b66",
          900: "#1c0533"
        },
        "bg-soft": "#f5f7fb"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

