
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}