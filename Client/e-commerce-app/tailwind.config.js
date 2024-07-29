/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-gradient': {
          100: '#6ed3cf',
          200: '#4dc3d77'
        }
      }
    }
  },
  plugins: [],
}