/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '10rem',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    colors: {
      'primary':'#0ea5e9', // blue
      'secondary':'#0284c7', // Deep blue
      'black':'#000',
      'white':'#fff',
      'green':'#042f2e',
      'grey' : '#475569',
      'dark':'#1e293b',
      'white50':'#94a3b8',
      'slate':'#f1f5f9'
    },
    fontFamily: {
      'sans': ['"Croissant One"', 'cursive'],
    },
    backgroundImage:{
      'resortimage':"url('/src/images/resortimage.jpg')",
      'adimage':"url('/src/images/ad-image.jpg')",
      'restimage':"url('/src/images/restaurant.jpg')",
      'drinksimage':"url('/src/images/restaurant2.jpg')",
    }   
  },
  plugins: [],
}

