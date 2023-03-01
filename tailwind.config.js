/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": " #53ABB3",
        "light-shades": "#F3EAE8",
        "light-accent": "#56CB9F",
        "dark-shades": "#2C404D",
        "dark-accent": "#5B9AAA",
      },
      boxShadow: {
        mainBoxy: "-10px 10px 0px 3px #53ABB3",
        darkBoxy: "-10px 10px 0px 3px #2C404D",
      },
    },
  },
  plugins: [],
};
