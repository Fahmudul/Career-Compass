/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {screens:{
        'lg':'1026px',
        
      }},
  },
  plugins: [require("daisyui")],
};
