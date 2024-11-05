/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      fontFamily: {
        playfar: ["Playfair Display SC", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary_orange: "#EB8D08",
        primary_white: "#F8F8F8",
        secundary_white: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
