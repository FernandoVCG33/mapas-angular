/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  // Opcional: Configuración de DaisyUI
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Puedes elegir tus favoritos aquí
  },
}



