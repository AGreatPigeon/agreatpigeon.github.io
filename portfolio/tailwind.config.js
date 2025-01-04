/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Replace with your chosen font
      },
      colors: {
        primary: '#1E3A8A', // Deep blue
        secondary: '#9333EA', // Purple
        accent: '#38BDF8', // Cyan
        background: '#0F172A', // Deep navy
        card: '#1E293B', // Slate
        text: {
          light: '#E5E7EB', // Light gray
          muted: '#9CA3AF', // Muted gray
        },
      },
    },
  },
  plugins: [],
};