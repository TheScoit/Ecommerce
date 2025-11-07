/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "facebook":"#1877F2",
        "linkedin":"#0077B5",
        "primary-dark":"#00000",
        "primary-light": "#ffc929",
        "secondary-dark": "#00b050",
        "secondary-light": "#0b1a78",
      }
    },
  },
  plugins: [],
}

