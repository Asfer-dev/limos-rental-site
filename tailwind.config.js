/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "#b5d57f",
      },
    },
  },
  plugins: [],
};
