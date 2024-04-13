import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        blue: {
          "50": "#f2f8fd",
          "100": "#e4eefa",
          "200": "#c3ddf4",
          "300": "#8ec1eb",
          "400": "#52a1de",
          "500": "#2b85cc",
          "600": "#1c69ad",
          "700": "#1a5a96",
          "800": "#184874",
          "900": "#193e61",
          "950": "#112740",
        },
        gray: {
          "50": "#f4f6f7",
          "100": "#e4e8e9",
          "200": "#cbd3d6",
          "300": "#a7b3b9",
          "400": "#7b8b95",
          "500": "#60707a",
          "600": "#525e68",
          "700": "#475057",
          "800": "#3f454b",
          "900": "#3a3f44",
          "950": "#22262a",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
