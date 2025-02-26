/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/bg-1.png')",
        'bg2': "url('/bg-2.png')",
        'bg3': "url('/bg-3.png')",
      }
    },
  },
  plugins: [],
}