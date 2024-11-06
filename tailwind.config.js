/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
     "rich-black":"#111111",
     'orange':'#FE8902',
     'off-white':"#FCF9F5",
     'light-gray':"#F6F6F6",
      },
      fontFamily: {
        clash: ['ClashDisplay-Regular', 'sans-serif'],
      },
      lineHeight:{
113:"113%",
        126:"126%",
      },
      backgroundImage:{
        'head':"url(/assets/images/webp/head-bg.webp)"
      },
      fontSize:{
        large:'120px',
      }
    },
  },
  plugins: [],
};
