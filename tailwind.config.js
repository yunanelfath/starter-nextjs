module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-primary": "#10a33b",
        "brand-secondary": "#006d34",
        "brand-gray": "#DCE0E9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
