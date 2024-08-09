/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'red': '0 10px 30px rgba(0,0,0, 0.69)',
      }
    },
  },
  plugins: [],
}