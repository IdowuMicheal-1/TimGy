/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens:{
    //   'sm':'480px',
    //   'md':'578px',
    //   'lg':'768px',
    //   'xl':'1024px',
    // },
    extend: {
      colors:{
        pink:'#FD6037',
        purple:'#8A38FF'
      },
    },
  },
  plugins: [],
}

