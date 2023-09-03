/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Define custom colors here
        primary: '#FF5733',
        secondary: '#3366FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
