/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFF4FA',
        'secondary': '#1BBF00',
        'third': '#141135',
        'four': '#726E9E',
      }
    },
    fontFamily: {
      'open': ["Open Sans"],
      'paprika': ["Paprika"],
    }
  },
  plugins: [],
}