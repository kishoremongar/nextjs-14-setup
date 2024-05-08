/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3E59',
        secondary: '#97B2CB',
        tertiary: '#5E6F7F',
        'gray-primary': '#D7D7D7',
        'gray-secondary': '#6E6E73',
        'border-primary': '#4E7DA6',
        'black-primary': '#262C3A',
        'black-secondary': '#282828',
        'primary-shade-1': '#44627F',
        'primary-shade-2': '#E5ECF2',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        singInbg: "url('/assets/images/signin_bg.png')",
      },
    },
  },
  plugins: [],
};
