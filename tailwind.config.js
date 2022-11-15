/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './shared/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#b4c2b9',
          100: '#a8b8ad',
          200: '#9bada1',
          300: '#8fa396',
          400: '#82998a',
          500: '#758a7c',
          600: '#687a6e',
          700: '#5b6b61',
          800: '#4e5c53',
          900: '#414d45',
        },
      },
    },
  },
  plugins: [],
}
