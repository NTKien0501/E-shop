/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'orange-background': '#ff6000',
        'hover-orange-background': '#f05a00',
      }
    },
  },
  plugins: []
}
