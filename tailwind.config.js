/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kufam': "'Kufam', sans-serif",
        'nunito': "'Nunito', sans-serif",
      },
      colors: {
        'title': '#4A4A4A',
        'description': '#454545',
        'light-grey-text': '#1DA599',
        'dark-grey-text': '#3F3F3F',
        'white-bg': '#F3FFFE',
        'yellow': '#FFC265',
        'light-grey': '#C1FFFA',
      },
      boxShadow: {
        '3xl': '0px 4px 20px 0px rgba(29, 165, 153, 0.15)',
        'facilities': '0px 4px 20px 0px rgba(0, 0, 0, 0.12)',
      },
      gridTemplateColumns: {
        '1': 'repeat(4, 1fr)',
      },
    },
  },
  plugins: [],
}