/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#4d79ff',
      },
      fontFamily: {
        'main': ['Poppins'],
      }
    },
  },
  plugins: [],
}

