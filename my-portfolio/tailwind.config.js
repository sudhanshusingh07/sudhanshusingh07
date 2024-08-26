

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gray shades
        'gray-primary': '#181818',
        'gray-secondary': '#2c2c2c',
        'gray-tertiary': '#505050',
        'gray-dark': '#242424',
        'skypink' : 'gradient-to-r from-sky-100 to-pink-100',
        'org':'#FE9900'
      },
      fontFamily: {
        // Fonts goes here
      },
      screens : {
        'xs': '390px'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}