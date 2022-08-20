/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
         'brand-blue': '#00456B',
         'brand-blue-lighter': '#006FAB',
         'brand-blue-lightest': '#CAECFF',
         'semantic-green': '#008F50'
      }
    },
  },
  plugins: [],
}

