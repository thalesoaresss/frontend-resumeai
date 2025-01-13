import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      black: "#000000",
      white: "#FFFFFF",
      "rich-black": "#061018",
      "dim-gray": "#676D73",
      "medium-purple": "#8283DA",
      "green-yellow": "#CAFF37",
      "dark-gun-metal": "#20282E",
      "dark-jungle-green": "#171E27",
      "quick-silver": "#9FA3AA",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
