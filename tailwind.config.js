/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F68B21",
        blue: "#1037B6",
        black: "#121212",
        white: "#ffffff",
        footerwhite: "#ffffffb8",
      },
      fontFamily: {
        rubik: ['"Rubik"', 'serif'], // Add the custom font here
      },
      screens: {
        'xs': '425px',

        'sm': '576px',
  
        'md': '768px',
  
        'lg': '992px',
  
        'xl': '1200px',
  
        '2xl': '1400px',
      },
      // backgroundImage: {
      //   'hero-pattern': "url('D:/WRP/Demo_tailwind/my-app/public/img/banner-one-mian-img.png')",
      // },
    },
  },
  plugins: [],
}
