module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace'],
        serif: ['Merriweather', 'ui-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}