/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        neumor:
          "20px 20px 60px #0c0c0c rgba(12, 12, 12, 1), -20px -20px 60px rgba(32, 32, 32, 1) ",
      },
      colors: {
        jetYellow: "#FCF84A",
        jetOrange: "#FC801D",
        jetPink: "#FE2857",
        jetFuchsia: "#FF318C",
        jetPurple: "#AF1DF5",
      },
    },
  },
  plugins: [require("rippleui")],
};
