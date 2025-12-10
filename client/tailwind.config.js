/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5BC199",   
        secondary: "#4E72D0", 
        accent: "#EF6500",   
        dark: "#223645",      
      },
    },
  },
  plugins: [],
}