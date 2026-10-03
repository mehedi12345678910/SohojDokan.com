/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1268e9",
          dark: "#0b1735",
          cyan: "#17cfc8",
          orange: "#ff7b22"
        }
      },
      boxShadow: {
        soft: "0 12px 35px rgba(26, 73, 130, .08)",
        card: "0 8px 24px rgba(28, 69, 125, .08)"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  }
}