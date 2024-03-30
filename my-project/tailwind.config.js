module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        mytheme: {
          "primary": "#0074ff",
          "secondary": "#3200ff",
          "accent": "#0000ff",
          "neutral": "#020a02",
          "base-100": "#f6ffe4",
          "info": "#00d4ff",
          "success": "#00d7ac",
          "warning": "#f49700",
          "error": "#e30044",
        },
      },
    ],
  },
};
