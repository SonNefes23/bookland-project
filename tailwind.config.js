/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { 
      colors: {
        primary_color: '#2C1810',
        secondary_color: '#DAAA63',
        redto: '#ff2400',
        
      }    
     },
  },
  plugins: [require('tailwind-scrollbar')],
}

