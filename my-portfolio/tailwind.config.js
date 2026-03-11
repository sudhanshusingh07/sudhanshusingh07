/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-primary": "#181818",
        "gray-secondary": "#2c2c2c",
        "gray-tertiary": "#505050",
        "gray-dark": "#242424",
        org: "#FE9900",
      },

      screens: {
        xs: "390px",
      },

      animation: {
        gradient: "gradient 12s ease infinite",
      },

      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
