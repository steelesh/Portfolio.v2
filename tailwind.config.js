/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
    "./src/**/*.{html,js,svelte}",
      "./node_modules/flowbite-svelte/**/*.{html,js,svelte}",
    ],
  theme: {
    extend: {
      colors: {
         primary: {50:'#ebf5ff',100: '#fff1ee',200:'#ffe4de',300:'#ffd5cc',400:'#ffbcad',500:'#fe795d',600:'#ef562f',700:'#eb4f27',800:'#d3330a',900:'#d3330a'},
        'darkmode-text': '#e5e5e5',
        'lightmode-text': '#3a3a3a',
        'darkmode-text-accent': '#a0a0a0',
        'lightmode-text-accent': '#6f6f6f',
        'darkmode-bg': '#191919',
        'lightmode-bg': '#ffffff',
        'darkmode-bg-accent': '#2a2a2a',
        'lightmode-bg-accent': '#f5f5f5',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};