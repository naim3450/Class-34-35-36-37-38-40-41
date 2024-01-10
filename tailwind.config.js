/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color
      colors: {
        liColor: '#767676',
        liHover: '#262626',
        borderColor: '#979797',
        offerColor: '#6D6D6D',
      },
      // Color

      // Font Family
      fontFamily: {
        dm: ['DM Sans'],
      },
      // Font Family

      // Box Shadow
      boxShadow: {
        sHborder: '5px 3px 5px rgba(128, 128, 128, 0.623)',
      },
      // Box Shadow

    },
  },
  plugins: [],
}

