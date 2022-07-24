// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Arial", ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        yellow: {
          100: "#fff601",
        },
        orange: {
          100: "#FFC837",
          200: "#FF8008",
        },
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  }
};
