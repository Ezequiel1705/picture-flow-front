/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'border-box' : '#CDCDCD',
        primary : '#3498db'
      }
    },
  },
  plugins: [],
}