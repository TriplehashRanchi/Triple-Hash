// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-up": "fadeInUp 1s ease-in-out forwards",
           'slide-in-down': 'slideInDown 0.3s ease-out forwards', // New animation class
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
         slideInDown: { // New keyframes for top-to-bottom slide
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

      backgroundImage: {
        // Add this new utility for the dotted pattern
        "dotted-pattern":
          "radial-gradient(circle, #382F56 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
