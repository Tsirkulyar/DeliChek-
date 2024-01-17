/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'grey': '#192948',
        'blue': '#6398FF',
        'black': '#111',
        'bg': '#001336',
        'lime': '#a3e635'
    },
  plugins: [],
}
}

