/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue:'#2D1DE6',
        green:'#E4FE7E',
        darkBackground:'#1F1D25',        
      },
      fontFamily: {
        montserrat :'Montserrat'
      }
    },
  },
  plugins: [],
}
