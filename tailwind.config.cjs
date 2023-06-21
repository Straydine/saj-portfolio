/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#011f4b",
        secondary: "#6497b1",
        tertiary: "#005b96",
        "black-100": "#03396c",
        "black-200": "#090325",
        "white-100": "#b3cde0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #b3cde0",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
