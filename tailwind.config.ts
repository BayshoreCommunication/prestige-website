import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ["var(--font-baskervville)", "serif"],
        acumin: ["var(--font-acumin)", "sans-serif"],
        lumios: ["var(--font-lumios)", "cursive"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }], // Bold
        h2: ["36px", { lineHeight: "1.3", fontWeight: "600" }], // Semi-Bold
        h3: ["28px", { lineHeight: "1.3", fontWeight: "500" }], // Semi-Bold
        body: ["16px", { lineHeight: "1.75", fontWeight: "400" }], // Regular
        caption: ["14px", { lineHeight: "1.5", fontWeight: "400" }], // Regular
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      colors: {
        "prestige-yellow": "#FCD34D",
        "prestige-black": "#000000",
        "prestige-gray": "#6B7280",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#FA8072", // primary-one
            secondary: "#BBD8DB", // primary-two
            background: "#FFFFFF", // secondary-one
            foreground: "#FFF4ED", // secondary-two
          },
        },
      },
    }),
  ],
};
export default config;
