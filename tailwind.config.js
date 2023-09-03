/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        neumor:
          "20px 20px 60px #0c0c0c rgba(12, 12, 12, 1), -20px -20px 60px rgba(32, 32, 32, 1) ",
      },
    },
  },
  plugins: [require("rippleui")],
};
