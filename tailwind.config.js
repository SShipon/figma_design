/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(123deg, #C8CCCF 5.59%, #97A3A3 84.01%)',
      },
      
    },
  },
  plugins: [],
}