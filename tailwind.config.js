module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF4949",
          "secondary": "#FF4949",
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
