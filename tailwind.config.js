/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "30em",
      md: "50em",
      lg: "70em",
    },
    extend: {
      colors: {
        accent: "#b5d57f",
      },
      fontSize: {
        "5xl": "3rem",
        "7xl": "4rem",
        "8xl": "5rem",
      },
    },
  },
  plugins: [],
};
