/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'redColor': '#D40000',
        'textColor': '#031952',
        'greenColor': '#9EFF00',
        'green2Color': '#84D400',
      }
    },
  },
  plugins: [],
}
