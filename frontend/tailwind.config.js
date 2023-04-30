/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        '.brd': {
          'border-width': '2px',
          'border-color': 'black'
        },
      })
    })
  ],
  
}

