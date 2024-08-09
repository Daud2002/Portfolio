/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'red': '0 10px 30px rgba(165, 40, 145, 0.8)', // Custom red shadow
      }
    },
  },
  plugins: [],
}