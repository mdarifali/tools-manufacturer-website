module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF4949",
          "secondary": "#0AA1DD",
          "accent": "#3A4256",
          "neutral": "#393E46",
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
