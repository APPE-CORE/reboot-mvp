import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jour: { bg: "#FAFAFA", text: "#1A1A1A" },
        nuit: { bg: "#000000", text: "#F5F5F5" },
        action: { neon: "#D1FF00", laser: "#BC13FE" }
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        outfit: ['var(--font-outfit)'],
        inter: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
export default config;