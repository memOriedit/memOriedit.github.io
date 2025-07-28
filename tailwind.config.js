/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,astro}',
    './src/components/**/*.{js,ts,jsx,tsx,astro}',
    './src/layouts/**/*.{js,ts,jsx,tsx,astro}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}