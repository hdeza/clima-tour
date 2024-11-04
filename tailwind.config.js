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
      },
    },
  },
  plugins: [],
};
