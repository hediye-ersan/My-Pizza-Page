/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}", ],
  theme: {
    extend: {fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      barlow: ['Barlow', 'sans-serif'],
      satisfy: ['Satisfy', 'cursive'],
    },},
  },
  plugins: [],
}

