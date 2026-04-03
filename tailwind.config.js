/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A5464",
        secondary: "#33AAFF",
        accent: "#000000",
        background: "#F8F9FA",
        surface: "#FFFFFF",
        textPrimary: "#21272A",
        textMuted: "#878D96",
        gold: "#D4AF37", // Toque premium
        champagne: "#F7E7CD"
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'], // Tipografia premium
      }
    },
  },
  plugins: [],
}
