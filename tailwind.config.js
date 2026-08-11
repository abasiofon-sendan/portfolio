/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          bg: "#0a0a0a",
          panel: "#101010",
          border: "#1f1f1f",
          "text-1": "#fafafa",
          "text-2": "#a1a1aa",
        },
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
        mono: ["Satoshi", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
