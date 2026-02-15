/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],    
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '2xl': '1400px',
        '3xl': '1600px',
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        background: "#284139",
        orange: "#BB6830",
        button: "#111A19",
        mutedGreen: "#809076",
        lightYellow: "#F8D794",
        mutedWhite: "#E8E4D9",
      },
      fontFamily: {
        casta: ['Casta', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}