/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor:{
        'custom-Header':'#18181B',
        'custom-Bg':'#0E0E10',
        'custom-magentaMedio':'#6441a5',
      },
      colors:{
        'customTextHover':'#5651FF',
      }
    },
  },
  variants:{
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}

