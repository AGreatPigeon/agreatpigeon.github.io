/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4e5b70', // Soft blue-gray
        secondary: '#8e9ba5', // Muted light gray-blue
        accent: '#d1e0e7', // Light pastel blue
        background: '#f7f9fc', // Very light grayish background
        text: '#333333', // Dark gray for text (not pure black)
      }
    },
  },
  plugins: [],
};