/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/*.{js,jsx}",
    "./src/Components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors : {
        'secondary':'#212025',
        'tertiary':'#ADADAD',
        'primary':'#FBBC04',
      }
    },
  },
  plugins: [],
});

