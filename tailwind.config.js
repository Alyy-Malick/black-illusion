/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#F5F5F7",
        surface: {
          DEFAULT: "#111111",
          elevated: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#707070",
          foreground: "#A1A1AA",
        },
        brand: {
          DEFAULT: "#FFFFFF",
          accent: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        'section-sm': '4rem',
        'section-md': '8rem',
        'section-lg': '12rem',
      },
      maxWidth: {
        'site': '1440px',
        'content': '1200px',
        'narrow': '800px',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      transitionDuration: {
        'premium': '400ms',
      }
    },
  },
  plugins: [],
}
