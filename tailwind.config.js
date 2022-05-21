module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#647393",
          "base-100": "#FFFFFF",
          "info": "#A4F4FD",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
