/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF2F8",
          100: "#FCE8F3",
          200: "#FAD1E8",
          300: "#F8B4D9",
          400: "#F17EB8",
          500: "#E74694",
          600: "#D61F69",
          700: "#BF125D",
          800: "#99154B",
          900: "#751A3D",
          950: "#550A1D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
