/** @type {import('tailwindcss').Config} */
const {required} = require("@angular/forms/signals");
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

