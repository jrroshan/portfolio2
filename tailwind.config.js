/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: { fontFamily: { roboto: "Roboto" } },
    colors: {
      white: "#fff",
      blue: "#5e3bee",
      gray: {
        "100": "#f5fcff",
        "200": "#eef4fa",
        "300": "#505050",
        "400": "#282938",
        "500": "#232536",
        "600": "#1c1e53",
        "700": "#111218",
        "800": "rgba(40, 41, 56, 0.55)",
      },
      black: "#000",
      brown: "#e62872",
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "36px",
      "4xl": "48px",
      "5xl": "56px",
    },
  },
  corePlugins: { preflight: false },
};
