/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature': {
          'green': '#2D5A27',
          'brown': '#8B4513',
          'sky': '#87CEEB'
        }
      },
      fontFamily: {
        'adventure': ['Montserrat', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}