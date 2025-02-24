import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif",''],
        grechen: ["Gretchen Fuemen", "static"],

      },
      animation: {
        "color-change": "color-change 3s infinite",
        "slow-pulse": "pulse 8s infinite",
        "spin-slow": "spin 5s linear infinite",
      },
       keyframes: {
        "color-change": {
          "0%": { color: "oklch(0.396 0.141 25.723)" },
          "25%": { color: "oklch(0.795 0.184 86.047)" },
          "50%": { color: "oklch(0.681 0.162 75.834)" },
          "75%": { color: "oklch(0.554 0.135 66.442)" },
          "100%": { color: "oklch(0.714 0.203 305.504)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
